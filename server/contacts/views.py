from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Contact
from .serializers import ContactSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()

            # Send emails
            self.send_contact_emails(contact)

            return Response({
                'message': "Votre message a été envoyé avec succès. Notre équipe prendra soin de votre besoin.",
                'contact': ContactSerializer(contact).data
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_contact_emails(self, contact: Contact) -> None:
        # Email to client
        client_subject = 'Confirmation de réception - La Madeleine'
        client_message = f"""
Bonjour {contact.prenom} {contact.nom},

Votre message a été envoyé avec succès et notre équipe prendra soin de votre besoin.

Détails de votre message:
- Sujet: {contact.sujet}
- Message: {contact.message}

Nous vous répondrons dans les plus brefs délais.

Cordialement,
L'équipe de La Madeleine
45 Av. Mohammed V, Marrakech 40000, Maroc
Téléphone: +212 524-446045
https://lamadeleine-maroc.com/
        """

        # Email to restaurant
        resto_subject = f'Nouveau message de contact - {contact.prenom} {contact.nom}'
        resto_message = f"""
Nouveau message de contact reçu:

Client: {contact.prenom} {contact.nom}
Email: {contact.email}
Téléphone: {contact.phone or 'Non fourni'}
Sujet: {contact.sujet}

Message:
{contact.message}

ID Contact: {contact.id}
Date: {contact.created_at}
"""

        try:
            # To client
            send_mail(
                client_subject,
                client_message,
                settings.DEFAULT_FROM_EMAIL,
                [contact.email],
                fail_silently=False,
            )

            # To restaurant
            send_mail(
                resto_subject,
                resto_message,
                settings.DEFAULT_FROM_EMAIL,
                ['lamadeleine.maroc@gmail.com'],
                fail_silently=False,
            )
        except Exception as e:
            # Log only; do not fail the API
            print(f"Failed to send contact emails: {e}")
