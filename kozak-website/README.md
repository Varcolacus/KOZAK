# KOZAK Website

## Description
Le projet KOZAK est une application web dédiée à la planification de propositions de mariage romantiques à Paris. Il offre des forfaits personnalisables et des expériences inoubliables, notamment des séances photo à la Tour Eiffel.

## Structure du projet
- **public/**: Contient les fichiers statiques de l'application.
  - **index.html**: La page principale de l'application.
  - **favicon.ico**: L'icône de la page.
  - **_redirects**: Fichier pour gérer les redirections.

- **src/**: Contient le code source de l'application.
  - **index.jsx**: Point d'entrée de l'application React.
  - **App.jsx**: Composant principal de l'application.
  - **components/**: Contient les composants React.
    - **Header.jsx**: Barre de navigation et sélecteur de langue.
    - **Hero.jsx**: Section héroïque de la page d'accueil.
    - **Services.jsx**: Affiche les forfaits proposés.
    - **About.jsx**: Informations sur KOZAK.
    - **Gallery.jsx**: Galerie d'images.
    - **FAQ.jsx**: Questions fréquemment posées.
    - **Contact.jsx**: Formulaire de contact.
    - **Footer.jsx**: Informations de copyright et liens.
  - **styles/**: Contient les styles CSS.
    - **main.css**: Styles principaux de l'application.
  - **data/**: Contient les données de l'application.
    - **translations.js**: Traductions pour différentes langues.

- **package.json**: Configuration npm du projet.
- **tailwind.config.cjs**: Configuration pour Tailwind CSS.
- **postcss.config.cjs**: Configuration pour PostCSS.
- **vite.config.js**: Configuration pour Vite.

## Installation
1. Clonez le dépôt:
   ```
   git clone [URL_DU_DEPOT]
   ```
2. Accédez au répertoire du projet:
   ```
   cd kozak-website
   ```
3. Installez les dépendances:
   ```
   npm install
   ```

## Utilisation
Pour démarrer l'application en mode développement, exécutez:
```
npm run dev
```
Ouvrez votre navigateur et accédez à `http://localhost:3000` pour voir l'application en action.

## Déploiement sur Google Cloud Run
Ce projet peut être déployé sur Cloud Run via le Dockerfile inclus.

### Pré-requis
- Un compte Google Cloud.
- Le SDK gcloud installé: https://cloud.google.com/sdk/docs/install

### 1) Créer un projet et récupérer l'ID
Dans la console Google Cloud, créez un nouveau projet. L'ID de projet est un identifiant unique du style `mon-projet-12345`.
Vous pouvez le voir dans le sélecteur de projet en haut de la console, ou dans la page « IAM & Admin > Settings ».

### 2) Authentification et configuration
```bash
gcloud auth login
gcloud config set project PROJECT_ID
```

### 3) Activer les APIs nécessaires
```bash
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
```

### 4) Déployer
Depuis le dossier `kozak-website`:
```bash
gcloud run deploy kozak-website \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated
```
Cloud Run renverra une URL publique du type `https://...run.app`.

### Domaine personnalisé + HTTPS
Un domaine personnalisé remplace l'URL `run.app` par votre propre domaine (ex: `kozakparis.com`).
Cloud Run peut provisionner un certificat TLS géré par Google (HTTPS automatique).

### Déploiement automatique (CI) depuis GitHub
La CI (Continuous Integration) peut déployer automatiquement à chaque push sur GitHub via GitHub Actions.

#### GitHub Actions (déjà prêt)
Le workflow est dans [.github/workflows/deploy-cloud-run.yml](.github/workflows/deploy-cloud-run.yml).

#### Secrets GitHub requis
Ajoutez ces secrets dans votre dépôt GitHub:
- `GCP_PROJECT_ID`: ID du projet Google Cloud.
- `GCP_REGION`: Région Cloud Run (ex: `europe-west1`).
- `GCP_SERVICE_NAME`: Nom du service Cloud Run (ex: `kozak-website`).
- `GCP_WIF_PROVIDER`: Identifiant du Workload Identity Provider.
- `GCP_SERVICE_ACCOUNT`: Email du service account utilisé par GitHub Actions.

#### Authentification GitHub → Google Cloud
Pour éviter les clés JSON, utilisez Workload Identity Federation.
Créez un service account, accordez-lui le rôle `Cloud Run Admin`, puis configurez un Workload Identity Provider pour GitHub.
Si vous souhaitez, je peux fournir la procédure pas-à-pas adaptée à votre organisation.

## Contribuer
Les contributions sont les bienvenues! Veuillez soumettre une demande de tirage pour toute modification ou ajout.

## License
Ce projet est sous licence MIT.