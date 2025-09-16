# La Madeleine - Backend Django

Backend Django pour le système de réservation du restaurant La Madeleine.

## 🚀 Installation

### 1. Installer les dépendances
```bash
pip install -r requirements.txt
```

### 2. Configurer la base de données
```bash
python manage.py migrate
```

### 3. Créer un superutilisateur (optionnel)
```bash
python manage.py createsuperuser
```

### 4. Lancer le serveur
```bash
python manage.py runserver
```

Le serveur sera accessible sur `http://localhost:8000`

## 📧 Configuration Email

### Mode Test (Console)
Par défaut, les emails sont affichés dans la console du serveur Django.

### Mode Production (Gmail)
Pour envoyer de vrais emails, modifiez `lamadeleine_backend/settings.py`:

```python
# Décommentez et configurez ces lignes:
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'lamadeleine.maroc@gmail.com'
EMAIL_HOST_PASSWORD = 'votre_mot_de_passe_application_gmail'
EMAIL_TIMEOUT = 30
```

**Important:** Utilisez un mot de passe d'application Gmail, pas votre mot de passe normal.

## 🗄️ Base de Données

### Modèle Reservation
- `id`: UUID unique
- `nom`: Nom de famille
- `prenom`: Prénom
- `phone`: Téléphone
- `email`: Email
- `guests`: Nombre de personnes
- `reservation_date`: Date de réservation
- `reservation_time`: Heure de réservation
- `motif`: Motif spécial (optionnel)
- `table`: Table assignée (optionnel)
- `is_confirmed`: Statut de confirmation
- `is_cancelled`: Statut d'annulation
- `created_at`: Date de création
- `updated_at`: Date de modification

## 🔌 API Endpoints

### Réservations
- **POST** `/api/reservations/` - Créer une réservation
- **GET** `/api/reservations/` - Lister toutes les réservations
- **GET** `/api/reservations/{id}/` - Détails d'une réservation
- **PUT** `/api/reservations/{id}/` - Modifier une réservation
- **DELETE** `/api/reservations/{id}/` - Supprimer une réservation

### Actions spéciales
- **POST** `/api/reservations/{id}/confirm/` - Confirmer une réservation
- **POST** `/api/reservations/{id}/cancel/` - Annuler une réservation
- **GET** `/api/reservations/upcoming/` - Réservations à venir
- **GET** `/api/reservations/today/` - Réservations du jour

## 📝 Exemple d'utilisation

### Créer une réservation
```bash
curl -X POST http://localhost:8000/api/reservations/ \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Dupont",
    "prenom": "Jean",
    "phone": "0612345678",
    "email": "jean.dupont@example.com",
    "guests": 4,
    "reservation_date": "2024-12-25",
    "reservation_time": "19:30",
    "motif": "Anniversaire de mariage"
  }'
```

### Réponse
```json
{
  "message": "Réservation confirmée! Un email de confirmation a été envoyé.",
  "reservation": {
    "id": "8c1edb9f-5c35-47fc-bdad-8c88ead8e0ea",
    "nom": "Dupont",
    "prenom": "Jean",
    "phone": "0612345678",
    "email": "jean.dupont@example.com",
    "guests": 4,
    "reservation_date": "2024-12-25",
    "reservation_time": "19:30:00",
    "motif": "Anniversaire de mariage",
    "table": null,
    "created_at": "2025-09-16T05:17:04.234680Z",
    "updated_at": "2025-09-16T05:17:04.234716Z",
    "is_confirmed": false,
    "is_cancelled": false
  }
}
```

## 📧 Emails Automatiques

### Email de confirmation (Client)
```
Sujet: Confirmation de réservation - La Madeleine

Bonjour [Prénom] [Nom],

Votre réservation a été confirmée avec succès!

Détails de votre réservation:
- Date: [Date]
- Heure: [Heure]
- Nombre de personnes: [Nombre]
- Motif: [Motif]

Nous vous attendons avec impatience pour une expérience gastronomique exceptionnelle!

Cordialement,
L'équipe de La Madeleine
45 Av. Mohammed V, Marrakech 40000, Maroc
Téléphone: +212 (0)6 67 87 10 92
```

### Email de notification (Restaurant)
```
Sujet: Nouvelle réservation - [Prénom] [Nom]

Nouvelle réservation reçue:

Client: [Prénom] [Nom]
Email: [Email]
Téléphone: [Téléphone]
Date: [Date]
Heure: [Heure]
Nombre de personnes: [Nombre]
Motif: [Motif]
Table: [Table]
ID Réservation: [ID]

Cette réservation a été automatiquement confirmée.
```

## 🔧 Administration

Accédez à l'interface d'administration Django:
- URL: `http://localhost:8000/admin/`
- Utilisateur: `admin`
- Mot de passe: `admin123`

### Fonctionnalités de l'admin:
- Voir toutes les réservations
- Filtrer par date, statut, etc.
- Rechercher par nom, email, téléphone
- Confirmer/Annuler des réservations en lot
- Exporter les données

## 🌐 CORS Configuration

Le backend est configuré pour accepter les requêtes depuis:
- `http://localhost:5173` (Vite)
- `http://127.0.0.1:5173`
- `http://localhost:3000` (React)
- `http://127.0.0.1:3000`

## 🚀 Déploiement

### Variables d'environnement
Créez un fichier `.env` pour la production:
```env
SECRET_KEY=your_secret_key
DEBUG=False
ALLOWED_HOSTS=your_domain.com
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password
```

### Base de données de production
Modifiez `DATABASES` dans `settings.py` pour utiliser PostgreSQL ou MySQL.

## 📱 Intégration Frontend

Le frontend React peut maintenant envoyer des requêtes à:
```javascript
const response = await fetch('http://localhost:8000/api/reservations/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(reservationData)
});
```

## 🔍 Tests

### Tester l'API
```bash
# Lister les réservations
curl http://localhost:8000/api/reservations/

# Réservations à venir
curl http://localhost:8000/api/reservations/upcoming/

# Réservations du jour
curl http://localhost:8000/api/reservations/today/
```

## 📞 Support

Pour toute question ou problème:
- Email: lamadeleine.maroc@gmail.com
- Téléphone: +212 (0)6 67 87 10 92
- Adresse: 45 Av. Mohammed V, Marrakech 40000, Maroc
