from django.db import models
import uuid
from django.utils import timezone

class Reservation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    guests = models.IntegerField()
    reservation_date = models.DateField()
    reservation_time = models.TimeField()
    motif = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_confirmed = models.BooleanField(default=False)
    is_cancelled = models.BooleanField(default=False)

    class Meta:
        db_table = 'reservations'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.prenom} {self.nom} - {self.reservation_date} à {self.reservation_time}"

    @property
    def full_name(self):
        return f"{self.prenom} {self.nom}"

    @property
    def reservation_datetime(self):
        from django.utils import timezone
        return timezone.make_aware(
            timezone.datetime.combine(self.reservation_date, self.reservation_time)
        )
