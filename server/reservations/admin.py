from django.contrib import admin
from .models import Reservation

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = [
        'full_name', 'email', 'phone', 'reservation_date', 
        'reservation_time', 'guests', 'is_confirmed', 'is_cancelled', 'created_at'
    ]
    list_filter = [
        'is_confirmed', 'is_cancelled', 'reservation_date', 
        'reservation_time', 'created_at'
    ]
    search_fields = ['nom', 'prenom', 'email', 'phone']
    readonly_fields = ['id', 'created_at', 'updated_at']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Informations personnelles', {
            'fields': ('nom', 'prenom', 'email', 'phone')
        }),
        ('Détails de la réservation', {
            'fields': ('reservation_date', 'reservation_time', 'guests', 'motif', 'table')
        }),
        ('Statut', {
            'fields': ('is_confirmed', 'is_cancelled')
        }),
        ('Métadonnées', {
            'fields': ('id', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    actions = ['confirm_reservations', 'cancel_reservations']
    
    def confirm_reservations(self, request, queryset):
        queryset.update(is_confirmed=True)
        self.message_user(request, f"{queryset.count()} réservations confirmées.")
    confirm_reservations.short_description = "Confirmer les réservations sélectionnées"
    
    def cancel_reservations(self, request, queryset):
        queryset.update(is_cancelled=True)
        self.message_user(request, f"{queryset.count()} réservations annulées.")
    cancel_reservations.short_description = "Annuler les réservations sélectionnées"