from rest_framework import serializers
from .models import Latable, Reservation

class LatableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Latable
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'