from rest_framework import serializers
from .models import Reservation

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = [
            'id', 'nom', 'prenom', 'phone', 'email', 'guests',
            'reservation_date', 'reservation_time', 'motif', 'table',
            'created_at', 'updated_at', 'is_confirmed', 'is_cancelled'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'is_confirmed', 'is_cancelled']

class ReservationCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating new reservations (without admin fields)"""
    class Meta:
        model = Reservation
        fields = [
            'nom', 'prenom', 'phone', 'email', 'guests',
            'reservation_date', 'reservation_time', 'motif', 'table'
        ]
