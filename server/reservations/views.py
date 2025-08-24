from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core.mail import send_mail
from django.conf import settings
from .models import Reservation
from .serializers import ReservationSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            reservation = serializer.save()
            
            # Send confirmation email (optional)
            try:
                self.send_confirmation_email(reservation)
            except Exception as e:
                # Log the error but don't fail the reservation
                print(f"Failed to send email: {e}")
            
            return Response({
                'message': 'Réservation créée avec succès!',
                'reservation': serializer.data
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_confirmation_email(self, reservation):
        """Send confirmation email to the customer and restaurant"""
        
        # Email to customer
        customer_subject = f'Confirmation de réservation - La Madeleine'
        customer_message = f"""
        Bonjour {reservation.prenom} {reservation.nom},

        Votre réservation a été confirmée avec succès!

        Détails de la réservation:
        - Date: {reservation.reservation_date}
        - Heure: {reservation.reservation_time}
        - Nombre de personnes: {reservation.guests}
        - Motif: {reservation.motif or 'Non spécifié'}

        Nous vous attendons avec impatience!

        Cordialement,
        L'équipe de La Madeleine
        """
        
        # Email to restaurant
        restaurant_subject = f'Nouvelle réservation - {reservation.prenom} {reservation.nom}'
        restaurant_message = f"""
        Nouvelle réservation reçue:

        Client: {reservation.prenom} {reservation.nom}
        Email: {reservation.email}
        Téléphone: {reservation.phone}
        Date: {reservation.reservation_date}
        Heure: {reservation.reservation_time}
        Nombre de personnes: {reservation.guests}
        Motif: {reservation.motif or 'Non spécifié'}
        ID Réservation: {reservation.id}

        Cette réservation a été automatiquement confirmée.
        """
        
        try:
            # Send email to customer
            send_mail(
                customer_subject,
                customer_message,
                'service@lamadeleine-maroc.com',
                [reservation.email],
                fail_silently=False,
            )
            
            # Send email to restaurant
            send_mail(
                restaurant_subject,
                restaurant_message,
                'service@lamadeleine-maroc.com',
                ['lamadeleine.maroc@gmail.com'],
                fail_silently=False,
            )
            
            print(f"✅ Emails sent successfully for reservation {reservation.id}")
            
        except Exception as e:
            print(f"❌ Failed to send emails: {e}")
            # Don't fail the reservation if email fails

    @action(detail=True, methods=['post'])
    def confirm(self, request, pk=None):
        """Confirm a reservation"""
        reservation = self.get_object()
        reservation.is_confirmed = True
        reservation.save()
        return Response({'message': 'Réservation confirmée'})

    @action(detail=True, methods=['post'])
    def cancel(self, request, pk=None):
        """Cancel a reservation"""
        reservation = self.get_object()
        reservation.is_cancelled = True
        reservation.save()
        return Response({'message': 'Réservation annulée'})

    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        """Get upcoming reservations"""
        from django.utils import timezone
        from datetime import date
        
        today = date.today()
        upcoming_reservations = Reservation.objects.filter(
            reservation_date__gte=today,
            is_cancelled=False
        ).order_by('reservation_date', 'reservation_time')
        
        serializer = self.get_serializer(upcoming_reservations, many=True)
        return Response(serializer.data)
