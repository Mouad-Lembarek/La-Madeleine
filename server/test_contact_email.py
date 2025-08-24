#!/usr/bin/env python
"""
Test contact email functionality for La Madeleine Django Backend
"""

import os
import sys
import django
from django.core.mail import send_mail
from django.conf import settings

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
django.setup()

def test_contact_email():
    """Test sending contact email"""
    try:
        send_mail(
            'Test Contact Email - La Madeleine',
            'Ceci est un test d\'email de contact pour La Madeleine.',
            'service@lamadeleine-maroc.com',
            ['lamadeleine.maroc@gmail.com'],
            fail_silently=False,
        )
        print("✅ Test contact email sent successfully!")
    except Exception as e:
        print(f"❌ Failed to send test contact email: {e}")
        print("\nMake sure you have:")
        print("1. Enabled 2-Factor Authentication on Gmail")
        print("2. Generated an App Password")
        print("3. Updated EMAIL_HOST_PASSWORD in settings.py")

if __name__ == '__main__':
    test_contact_email()
