from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core.mail import send_mail
from django.conf import settings
from .models import Contact
from .serializers import ContactSerializer

# Create your views here.

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            
            # Send email notification
            try:
                self.send_contact_email(contact)
            except Exception as e:
                print(f"Failed to send contact email: {e}")
            
            return Response({
                'message': 'Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.',
                'contact': serializer.data
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_contact_email(self, contact):
        """Send contact form email to restaurant"""
        subject = f'Nouveau message de contact - {contact.first_name} {contact.last_name}'
        message = f"""
        Nouveau message de contact reçu:

        Nom: {contact.first_name} {contact.last_name}
        Email: {contact.email}
        Téléphone: {contact.phone or 'Non fourni'}
        Date: {contact.created_at.strftime('%d/%m/%Y à %H:%M')}
        ID Contact: {contact.id}

        Message:
        {contact.message}

        ---
        Ce message a été envoyé depuis le formulaire de contact du site web.
        """
        
        try:
            # Send email to restaurant
            send_mail(
                subject,
                message,
                'service@lamadeleine-maroc.com',
                ['lamadeleine.maroc@gmail.com'],
                fail_silently=False,
            )
            
            print(f"✅ Contact email sent successfully for {contact.id}")
            
        except Exception as e:
            print(f"❌ Failed to send contact email: {e}")

    @action(detail=True, methods=['post'])
    def mark_as_read(self, request, pk=None):
        """Mark a contact message as read"""
        contact = self.get_object()
        contact.is_read = True
        contact.save()
        return Response({'message': 'Message marqué comme lu'})

    @action(detail=True, methods=['post'])
    def mark_as_replied(self, request, pk=None):
        """Mark a contact message as replied"""
        contact = self.get_object()
        contact.is_replied = True
        contact.save()
        return Response({'message': 'Message marqué comme répondu'})

    @action(detail=False, methods=['get'])
    def unread(self, request):
        """Get unread contact messages"""
        unread_contacts = Contact.objects.filter(is_read=False).order_by('-created_at')
        serializer = self.get_serializer(unread_contacts, many=True)
        return Response(serializer.data)
