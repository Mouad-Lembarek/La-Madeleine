from django.db import models
import uuid
from django.utils import timezone

class Reservation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nom = models.CharField(max_length=100, verbose_name="Nom")
    prenom = models.CharField(max_length=100, verbose_name="Prénom")
    phone = models.CharField(max_length=20, verbose_name="Téléphone")
    email = models.EmailField(verbose_name="Email")
    guests = models.IntegerField(verbose_name="Nombre de personnes")
    reservation_date = models.DateField(verbose_name="Date de réservation")
    reservation_time = models.TimeField(verbose_name="Heure de réservation")
    motif = models.TextField(blank=True, null=True, verbose_name="Motif spécial")
    table = models.CharField(max_length=50, blank=True, null=True, verbose_name="Table")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Date de création")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Date de modification")
    is_confirmed = models.BooleanField(default=False, verbose_name="Confirmée")
    is_cancelled = models.BooleanField(default=False, verbose_name="Annulée")

    class Meta:
        db_table = 'reservations'
        ordering = ['-created_at']
        verbose_name = "Réservation"
        verbose_name_plural = "Réservations"

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