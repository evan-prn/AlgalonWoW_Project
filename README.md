# AlgalonWoW – Environnement Docker

Projet full‑stack composé de :
- **Backend** : Laravel 11 (PHP 8.3)
- **Frontend** : React + Vite
- **Docker** : Conteneurs séparés pour le backend et le frontend

Ce guide explique comment installer et lancer le projet facilement sur n’importe quelle machine grâce à Docker.

---

## 🚀 Prérequis

- **Docker Desktop** installé  
  https://www.docker.com/products/docker-desktop/

Aucune installation de PHP, Node ou MySQL n’est nécessaire.

---

## 📦 Installation du projet

Clonez le dépôt :

```bash
git clone https://github.com/evan-prn/AlgalonWoW_Project.git
cd AlgalonWoW_Project
```

## 🐳 Lancer l’environnement Docker
Depuis la racine du projet :

```bash
docker compose up --build
````
Les conteneurs seront construits puis démarrés automatiquement.

## 🌐 Accès aux services
| Service  |  	URL  
|:---------|:------:| 
| Frontend (React)     | 	http://localhost:3000
| Backend (Laravel)     | 	http://localhost:3000 

## 🔄 Redémarrer sans rebuild

```bash
docker compose up
````

## 🛑 Arrêter les conteneurs

```bash
docker compose down
````

## 📁 Structure du projet

````
algalonwow/
├── algalonwow_backend/      # Code Laravel
│   └── Dockerfile           # Image backend
├── algalonwow_frontend/     # Code React
│   └── Dockerfile           # Image frontend
└── docker-compose.yml       # Orchestration Docker
````

## 🧪 Vérifier que tout fonctionne

```bash
curl http://localhost:8000/api/ping
````
Frontend :
Ouvrir http://localhost:3000 dans un navigateur.

## 📝 Notes

Les fichiers `.env` ne sont pas versionnés.

Les dépendances sont installées automatiquement dans les conteneurs.

Le code source est monté en volume, donc les modifications locales sont visibles immédiatement.

## 🤝 Contribution

- Créez une branche
- Faites vos modifications
- Ouvrez une Pull Request

## 📬 Support

En cas de problème, contactez Evan ou ouvrez une issue sur le dépôt GitHub. 