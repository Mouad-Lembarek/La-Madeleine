from django.db import models
import uuid
from django.utils import timezone

class Contact(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    is_replied = models.BooleanField(default=False)

    class Meta:
        db_table = 'contacts'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
