from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['prenom', 'nom', 'email', 'phone', 'sujet', 'created_at']
    search_fields = ['nom', 'prenom', 'email', 'sujet']
    list_filter = ['created_at']
from django.contrib import admin

# Register your models here.
