from django.contrib import admin
from .models import Reservation

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'guests', 'reservation_date', 'reservation_time', 'is_confirmed', 'is_cancelled', 'created_at']
    list_filter = ['reservation_date', 'is_confirmed', 'is_cancelled', 'created_at']
    search_fields = ['nom', 'prenom', 'email', 'phone']
    readonly_fields = ['id', 'created_at', 'updated_at']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Informations personnelles', {
            'fields': ('nom', 'prenom', 'email', 'phone')
        }),
        ('Détails de la réservation', {
            'fields': ('guests', 'reservation_date', 'reservation_time', 'motif')
        }),
        ('Statut', {
            'fields': ('is_confirmed', 'is_cancelled')
        }),
        ('Informations système', {
            'fields': ('id', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    actions = ['confirm_reservations', 'cancel_reservations']
    
    def confirm_reservations(self, request, queryset):
        queryset.update(is_confirmed=True)
        self.message_user(request, f"{queryset.count()} réservation(s) confirmée(s).")
    confirm_reservations.short_description = "Confirmer les réservations sélectionnées"
    
    def cancel_reservations(self, request, queryset):
        queryset.update(is_cancelled=True)
        self.message_user(request, f"{queryset.count()} réservation(s) annulée(s).")
    cancel_reservations.short_description = "Annuler les réservations sélectionnées"
