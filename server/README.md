# La Madeleine - Django Backend

This is the Django backend for the La Madeleine restaurant reservation system.

## Features

- ✅ Reservation management system
- ✅ RESTful API endpoints
- ✅ PostgreSQL database support
- ✅ Django Admin interface
- ✅ Email confirmation (optional)
- ✅ CORS support for frontend integration

## Setup Instructions

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Database Configuration

#### Option A: PostgreSQL (Recommended)

1. Install PostgreSQL on your system
2. Create a database:
   ```sql
   CREATE DATABASE lamadeleine_db;
   ```
3. Update `server/settings.py` with your database credentials:
   ```python
   DATABASES = {
       "default": {
           "ENGINE": "django.db.backends.postgresql",
           "NAME": "lamadeleine_db",
           "USER": "your_username",
           "PASSWORD": "your_password",
           "HOST": "localhost",
           "PORT": "5432",
       }
   }
   ```

#### Option B: SQLite3 (Development)

For development, you can use SQLite3. Uncomment the SQLite configuration in `server/settings.py`:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
```

### 3. Run Setup Script

```bash
python setup_database.py
```

This will:
- Create database migrations
- Apply migrations
- Create a superuser (admin/admin123)

### 4. Start the Server

```bash
python manage.py runserver
```

## API Endpoints

### Reservations

- **GET** `/api/reservations/` - List all reservations
- **POST** `/api/reservations/` - Create a new reservation
- **GET** `/api/reservations/{id}/` - Get a specific reservation
- **PUT** `/api/reservations/{id}/` - Update a reservation
- **DELETE** `/api/reservations/{id}/` - Delete a reservation
- **POST** `/api/reservations/{id}/confirm/` - Confirm a reservation
- **POST** `/api/reservations/{id}/cancel/` - Cancel a reservation
- **GET** `/api/reservations/upcoming/` - Get upcoming reservations

### Reservation Data Format

```json
{
    "nom": "Dupont",
    "prenom": "Jean",
    "phone": "0123456789",
    "email": "jean.dupont@email.com",
    "guests": 4,
    "reservation_date": "2024-01-15",
    "reservation_time": "19:30",
    "motif": "Anniversaire"
}
```

## Admin Interface

Access the Django admin interface at: **http://127.0.0.1:8000/admin/**

Default credentials:
- Username: `admin`
- Password: `admin123`

## Frontend Integration

The backend is configured to work with your React frontend running on `localhost:5173`. CORS is enabled for development.

## Database Access

### Via Django Admin
- Go to http://127.0.0.1:8000/admin/
- Login with admin credentials
- Navigate to "Reservations" section

### Via Django Shell
```bash
python manage.py shell
```

```python
from reservations.models import Reservation

# Get all reservations
reservations = Reservation.objects.all()

# Get upcoming reservations
from datetime import date
upcoming = Reservation.objects.filter(reservation_date__gte=date.today())

# Get a specific reservation
reservation = Reservation.objects.get(id='uuid-here')
```

### Via PostgreSQL (if using PostgreSQL)
```bash
psql -U your_username -d lamadeleine_db
```

```sql
SELECT * FROM reservations;
```

## Troubleshooting

### Common Issues

1. **Database connection error**: Check your PostgreSQL credentials in `settings.py`
2. **CORS errors**: Make sure CORS_ALLOW_ALL_ORIGINS is True for development
3. **Migration errors**: Run `python manage.py makemigrations` and `python manage.py migrate`

### Reset Database

```bash
python manage.py flush  # Clear all data
python manage.py migrate --run-syncdb  # Recreate tables
```
