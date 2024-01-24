# Documentation du Projet "Seabnb"

## Introduction

Bienvenue dans la documentation officielle de "Seabnb", une plateforme web conçue pour la location de bateaux, offrant non seulement des options d'hébergement mais également la possibilité d'utiliser ces bateaux. Inspiré
par le modèle d'Airbnb, ce document a pour objectif de mettre à votre disposition toutes les informations essentielles nécessaires pour comprendre, utiliser et contribuer au projet, que ce soit en tant qu'utilisateur ou
contributeur.

## Architecture du Site


Le site "Seabnb" repose sur le framework Angular, reconnu comme l'un des plus largement utilisés à l'échelle mondiale. Pour concevoir son architecture, nous avons opté pour l'architecture de base afin de garantir une
cohérence au sein du groupe de développeurs et d'assurer une structure solide et modulaire. Une alternative aurait été de personnaliser davantage l'architecture en organisant les composants de page dans un dossier
distinct, tandis que les composants réutilisables seraient regroupés dans un autre répertoire, améliorant ainsi l'organisation générale du projet.

### Composants Du Projet

1. **Boats :**
   - Le composant "Boats" est conçu pour faciliter l'ajout de bateaux à louer sur la plateforme. Cette page présente plusieurs champs à compléter, ainsi que des documents obligatoires tels que le certificat
d'immatriculation du bateau. Les utilisateurs sont guidés à travers un processus détaillé de saisie d'informations, garantissant une présentation complète et précise de chaque bateau mis en location sur la plateforme.

2. **Description :**
   - Le composant "Description" prend en charge la présentation détaillée des annonces en fournissant plusieurs images du bateau concerné. De plus, il intègre un calendrier permettant aux utilisateurs de planifier la
location du bateau, ainsi qu'une section de commentaires située en bas de la page, offrant aux utilisateurs la possibilité de consulter les avis et expériences antérieurs. Il est important de noter que la possibilité
de laisser des commentaires est conditionnée à la location effective du bateau, assurant ainsi des retours d'expérience authentiques.

3. **Footer :**
   - Le composant "Footer" représente la section inférieure de la page web et offre une navigation pratique vers différentes sections du site. Il comprend plusieurs sections distinctes, chacune avec un titre explicite et
une liste de liens pertinents.

4. **Home :**
   - Le composant "Home" assume la responsabilité de l'affichage des annonces associées aux bateaux. Il inclut une représentation visuelle du bateau sous la forme d'une image, des informations sur le tarif journalier,
une évaluation globale attribuée par les utilisateurs précédents, ainsi que la prochaine date de disponibilité pour la location.

5. **Login :**
   - Le composant "Login" représente l'interface dédiée à la connexion des utilisateurs. Cet élément de l'application offre un point d'accès sécurisé, permettant aux utilisateurs enregistrés d'entrer leurs identifiants
afin d'accéder à leurs comptes personnels. Grâce à cette interface de connexion, les utilisateurs peuvent profiter des fonctionnalités offertes par la plateforme "Seabnb".

6. **Navbar :**
   - Le composant "Navbar" constitue la barre de navigation principale du site, offrant une navigation intuitive et accessible. Une fonctionnalité importante est intégrée sous la forme d'une pop-up latérale qui apparaît
en cliquant sur l'icône "burger". De plus, une mini-barre de navigation supplémentaire s'affiche uniquement sur la page "Home", permettant aux utilisateurs de filtrer les contenus spécifiques à cette page de manière
pratique.

7. **Owner :**
   - Le composant "Owner" est spécifiquement conçu pour présenter de manière détaillée les informations du propriétaire. Il offre la possibilité de visualiser tous les bateaux mis en location par ce propriétaire, ainsi
que de gérer les détails de la disponibilité, permettant de savoir quand chaque bateau est réservé. Grâce à cette interface, les propriétaires peuvent efficacement superviser leur flotte de bateaux, optimisant ainsi la
gestion des locations et assurant une expérience utilisateur transparente.

8. **Profil :**
   - Le composant "Profil" offre une interface dédiée à la gestion complète du profil utilisateur. Les utilisateurs peuvent accéder à cette section pour mettre à jour et personnaliser leurs informations personnelles, y
compris les détails de contact, les préférences et d'autres paramètres pertinents.

9. **Register :**
   - Le composant "Register" représente l'interface conçue pour le processus de création de compte. Cette section cruciale de l'application guide les utilisateurs tout au long du processus d'inscription en leur
fournissant des champs à remplir, permettant ainsi de créer leur compte personnel sur la plateforme "Seabnb".

## Fonctionnalités

**Seabnb** propose une série de fonctionnalités variées pour répondre aux besoins des utilisateurs.

### Recherche d'Annonces

Les utilisateurs peuvent effectuer des recherches d'annonces en utilisant divers critères tels que la localisation, la taille, etc.

### Publication d'Annonces

Les propriétaires ont la possibilité de publier des annonces détaillées concernant leurs biens disponibles, incluant des informations spécifiques sur les bateaux.

### Connexion et Inscription

Les utilisateurs peuvent créer un compte et se connecter pour accéder à des fonctionnalités personnalisées et profiter pleinement de l'expérience **Seabnb**.

## Guide d'Utilisation

Cette section offre un guide complet sur l'utilisation de **Seabnb** du début à la fin.

### Créer un Compte

Suivez ces instructions détaillées pour créer un compte utilisateur sur **Seabnb**.

### Publier une Annonce

Découvrez comment publier une annonce pour votre bien, en mettant en avant les détails spécifiques aux bateaux que vous souhaitez louer.

### Rechercher des Annonces

Consultez ce guide pour apprendre à rechercher et explorer les annonces disponibles, en utilisant des filtres adaptés à vos préférences.

## Gestion des Utilisateurs

**Seabnb** gère les utilisateurs en attribuant différentes autorisations en fonction de leur rôle.

### Niveaux d'Accès

- **Utilisateur Externe :** Les utilisateurs externes ont la possibilité de consulter les annonces publiées, mais ne peuvent pas effectuer de réservation sans créer un compte au préalable.
- **Utilisateur Normal :** Les utilisateurs normaux, c'est-à-dire ceux qui possèdent un compte, bénéficient de capacités et de restrictions spécifiques visant à assurer une expérience adaptée à leur statut.
- **Administrateur :** Les administrateurs jouissent de privilèges particuliers pour la gestion globale du site, leur permettant d'effectuer des actions spécifiques et de prendre en charge les responsabilités
administratives.

## Base de Données

Le backend de **Seabnb** est alimenté par une base de données MySQL, gérée par une API construite avec Node.js et Express.js.

### Structure de la Base de Données

Cette section fournit une description détaillée de la structure des tables dans la base de données, offrant une compréhension approfondie de la gestion des données.

## Déploiement avec Docker ( Docker Compose )

**Seabnb** adopte Docker Compose pour simplifier le processus de déploiement de l'application. Il convient de noter que le déploiement est effectué de manière distincte, avec une configuration spécifique pour le
front-end et une autre pour le back-end, assurant ainsi une gestion efficace de chaque composant. En pratique, cela se traduit par un déploiement utilisant Docker Compose pour le front-end, et un
déploiement utilisant aussi Docker Compose pour le back-end, garantissant une gestion propre et organisée de l'ensemble du système.
