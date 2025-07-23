from rest_framework import generics
from .models import Reservation
from .serializers import ReservationSerializer

# Create your views here.

class ReservationListView(generics.ListAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
