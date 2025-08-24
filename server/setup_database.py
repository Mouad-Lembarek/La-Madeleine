#!/usr/bin/env python
"""
Setup script for La Madeleine Django Backend
This script helps you set up the database and create initial data.
"""

import os
import sys
import django
from django.core.management import execute_from_command_line

def setup_database():
    """Setup the database and create initial data"""
    
    # Add the current directory to Python path
    sys.path.append(os.path.dirname(os.path.abspath(__file__)))
    
    # Set Django settings
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
    django.setup()
    
    print("🚀 Setting up La Madeleine Django Backend...")
    
    # Run migrations
    print("📦 Running migrations...")
    execute_from_command_line(['manage.py', 'makemigrations'])
    execute_from_command_line(['manage.py', 'migrate'])
    
    # Create superuser if it doesn't exist
    print("👤 Creating superuser...")
    try:
        from django.contrib.auth.models import User
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser('admin', 'admin@lamadeleine.com', 'admin123')
            print("✅ Superuser created: admin / admin123")
        else:
            print("ℹ️  Superuser already exists")
    except Exception as e:
        print(f"⚠️  Could not create superuser: {e}")
    
    print("✅ Setup complete!")
    print("\n📋 Next steps:")
    print("1. Install dependencies: pip install -r requirements.txt")
    print("2. Configure PostgreSQL database in settings.py")
    print("3. Run the server: python manage.py runserver")
    print("4. Access admin: http://127.0.0.1:8000/admin/")
    print("5. API endpoint: http://127.0.0.1:8000/api/reservations/")

if __name__ == '__main__':
    setup_database()
