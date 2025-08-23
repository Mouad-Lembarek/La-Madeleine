from rest_framework import serializers
from .models import Reservation

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = [
            'id', 'nom', 'prenom', 'phone', 'email', 'guests',
            'reservation_date', 'reservation_time', 'motif',
            'created_at', 'is_confirmed', 'is_cancelled'
        ]
        read_only_fields = ['id', 'created_at', 'is_confirmed', 'is_cancelled']

    def validate_reservation_date(self, value):
        from django.utils import timezone
        from datetime import date
        
        # Check if reservation date is not in the past
        if value < date.today():
            raise serializers.ValidationError("La date de réservation ne peut pas être dans le passé.")
        
        return value

    def validate_guests(self, value):
        # Check if number of guests is reasonable
        if value < 1:
            raise serializers.ValidationError("Le nombre de personnes doit être au moins 1.")
        if value > 20:
            raise serializers.ValidationError("Le nombre de personnes ne peut pas dépasser 20.")
        
        return value

    def validate_phone(self, value):
        # Basic phone validation
        if not value.replace(' ', '').replace('-', '').replace('+', '').isdigit():
            raise serializers.ValidationError("Le numéro de téléphone doit contenir uniquement des chiffres.")
        
        return value
