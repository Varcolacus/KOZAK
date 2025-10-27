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

## Contribuer
Les contributions sont les bienvenues! Veuillez soumettre une demande de tirage pour toute modification ou ajout.

## License
Ce projet est sous licence MIT.