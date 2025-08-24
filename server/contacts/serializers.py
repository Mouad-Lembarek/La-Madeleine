from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = [
            'id', 'first_name', 'last_name', 'email', 'phone', 'message',
            'created_at', 'is_read', 'is_replied'
        ]
        read_only_fields = ['id', 'created_at', 'is_read', 'is_replied']

    def validate_phone(self, value):
        if value:
            # Basic phone validation - only numbers
            if not value.replace(' ', '').replace('-', '').replace('+', '').isdigit():
                raise serializers.ValidationError("Le numéro de téléphone doit contenir uniquement des chiffres.")
        return value

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Le message doit contenir au moins 10 caractères.")
        return value
