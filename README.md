# KASA - Plateforme de Location d'Appartements entre Particuliers

## Description

Kasa est un projet réalisé dans le cadre d'une formation avec OpenClassrooms. Il s'agit d'une plateforme web dédiée à l'entreprise Kasa, un leader dans le domaine de la location d'appartements entre particuliers en France. Avec plus de 500 annonces postées chaque jour, Kasa offre une expérience de location simple et sécurisée pour les utilisateurs.

## Prérequis

Avant de pouvoir exécuter ce projet localement, assurez-vous d'avoir les éléments suivants installés sur votre machine:

- [Node.js](https://nodejs.org/en) - Runtime JavaScript
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) - Gestionnaire de paquets JavaScript

## Installation && Configuration

### Installation

1- Clonez ce dépôt sur votre machine locale en utilisant la commande suivante :
`git clone <URL_DU_REPO`

2- Accédez au répertoire du projet :
`cd NOM_DU_REP`

3- Installez les dépendances du projet en exécutant la commande suivante :
`npm install`
ou
`yarn install`

### Outils Utilisés

Ce projet a été développé en utilisant les technologies suivantes :

- <b>Vite</b> - Un outil de build rapide pour les applications web modernes.
- <b>React.js</b> - Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- <b>JavaScript (ES6+)</b> - La version moderne de JavaScript pour écrire du code côté client.
- <b>HTML</b> - Le langage de balisage standard pour la création de pages web et d'applications web interactives.
- <b>CSS (Sass)</b> - Un préprocesseur CSS pour faciliter l'écriture de feuilles de style.

### Exécution - Démarrage du serveur Web

Dans de projet, vous
`npm run dev`
ou
`yarn dev`
Cette ligne de commande démarre le serveur sur le port 5173
Vous pourrez accéder à l'application en ourant votre navigateur et en visitant l'URL suivante: http://localhost:5173/

## Architecture du projet

Dans ce projet, j'ai adopté une approche de découpage des <b>composants</b> visant à favoriser la **_réutilisation_** et la **_maintenabilité_** du code. Pour ce faire, j'ai structuré l'application de manière à séparer les parties communes de celles spécifiques à chaque page. Au niveau de la structure globale, j'ai maintenu un fichier principal, **index.html**, qui appelle **main.jsx**. Ce dernier remplit le composant racine avec le contenu de **App.jsx**, qui agit comme le conteneur principal de l'application. Dans App.jsx, j'ai intégré des composants globaux tels que le **header** et le **footer**, qui sont présents sur toutes les pages. De plus, j'ai utilisé **_<BrowserRouter>_** et **_<Routes>_** pour gérer la navigation entre les différentes pages de manière efficace. Ainsi, chaque page spécifique se concentre uniquement sur son* contenu unique*, tandis que les _éléments communs_ sont _réutilisés_ de manière transparente à travers toute l'application.

![Architecture Generale](https://github.com/LEBDIOUA/Kasa/blob/main/assets/ArchitectureGenerale.png)

![Architecture Main](https://github.com/LEBDIOUA/Kasa/blob/main/assets/ArchitectureMain.png)

## Aproche CSS

Conformément aux exigences du projet, j'ai utilisé Sass pour générer les styles CSS du site web. J'ai opté pour une approche inspirée du modèle 7 en 1, bien que dans mon cas, j'ai seulement utilisé 6 dossiers, ce qui s'est avéré suffisant pour répondre aux besoins du projet. Voici l'organisation que j'ai adoptée :

![Architecture Sass](https://github.com/LEBDIOUA/Kasa/blob/main/assets/ArchitectureSass.png)

![Architecture Sass Détaillée](https://github.com/LEBDIOUA/Kasa/blob/main/assets/ArchitectureSassDetaillee.png)
