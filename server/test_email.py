import os
import sys
import django
from django.core.mail import send_mail
from django.conf import settings

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
django.setup()

def test_email():
    """Test sending email"""
    try:
        send_mail(
            'Test Email - La Madeleine',
            'Ceci est un test d\'email pour La Madeleine.',
            'service@lamadeleine-maroc.com',
            ['lamadeleine.maroc@gmail.com'],
            fail_silently=False,
        )
        print("✅ Test email sent successfully!")
    except Exception as e:
        print(f"❌ Failed to send test email: {e}")
        print("\nMake sure you have:")
        print("1. Enabled 2-Factor Authentication on Gmail")
        print("2. Generated an App Password")
        print("3. Updated EMAIL_HOST_PASSWORD in settings.py")

if __name__ == '__main__':
    test_email()
