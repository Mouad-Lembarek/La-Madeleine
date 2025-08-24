from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'is_read', 'is_replied', 'created_at']
    list_filter = ['is_read', 'is_replied', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'message']
    readonly_fields = ['id', 'created_at']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Informations personnelles', {
            'fields': ('first_name', 'last_name', 'email', 'phone')
        }),
        ('Message', {
            'fields': ('message',)
        }),
        ('Statut', {
            'fields': ('is_read', 'is_replied')
        }),
        ('Informations système', {
            'fields': ('id', 'created_at'),
            'classes': ('collapse',)
        }),
    )
    
    actions = ['mark_as_read', 'mark_as_replied']
    
    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)
        self.message_user(request, f"{queryset.count()} message(s) marqué(s) comme lu(s).")
    mark_as_read.short_description = "Marquer comme lu"
    
    def mark_as_replied(self, request, queryset):
        queryset.update(is_replied=True)
        self.message_user(request, f"{queryset.count()} message(s) marqué(s) comme répondu(s).")
    mark_as_replied.short_description = "Marquer comme répondu"
