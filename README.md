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
   - Le composant "Boats" assume la responsabilité de l'affichage des annonces associées aux bateaux. Il inclut une représentation visuelle du bateau sous la forme d'une image, des informations sur le tarif journalier,
une évaluation globale attribuée par les utilisateurs précédents, ainsi que la prochaine date de disponibilité pour la location.

2. **Description :**
   - Le composant "Description" prend en charge la présentation détaillée des annonces en fournissant plusieurs images du bateau concerné. De plus, il intègre un calendrier permettant aux utilisateurs de planifier la
location du bateau, ainsi qu'une section de commentaires située en bas de la page, offrant aux utilisateurs la possibilité de consulter les avis et expériences antérieurs. Il est important de noter que la possibilité
de laisser des commentaires est conditionnée à la location effective du bateau, assurant ainsi des retours d'expérience authentiques.

3. **Footer :**
   - Le composant "Footer" représente la section inférieure de la page web et offre une navigation pratique vers différentes sections du site. Il comprend plusieurs sections distinctes, chacune avec un titre explicite et
une liste de liens pertinents.

4. **Home :**
   - Le composant "Boats" assume la responsabilité de l'affichage des annonces associées aux bateaux. Il inclut une représentation visuelle du bateau sous la forme d'une image, des informations sur le tarif journalier,
une évaluation globale attribuée par les utilisateurs précédents, ainsi que la prochaine date de disponibilité pour la location.

5. **Login :**
   - Interface de connexion pour les utilisateurs.

6. **Navbar :**
   - Barre de navigation principale du site.

7. **Owner :**
   - Composant dédié à l'affichage des informations du propriétaire.

8. **Profil :**
   - Gestion du profil utilisateur.

9. **Register :**
   - Formulaire d'inscription pour les nouveaux utilisateurs.

## Fonctionnalités

"Seabnb" propose une série de fonctionnalités pour répondre aux besoins des utilisateurs.

1. **Recherche d'Annonces :**
   - Les utilisateurs peuvent rechercher des annonces disponibles en utilisant divers critères tels que la localisation, la taille, etc.

2. **Publication d'Annonces :**
   - Les propriétaires peuvent publier des annonces pour leurs biens disponibles, y compris des détails sur les bateaux.

3. **Connexion et Inscription :**
   - Les utilisateurs peuvent créer un compte et se connecter pour accéder à des fonctionnalités personnalisées.

## Guide d'Utilisation

Cette section explique comment utiliser "Seabnb" du début à la fin.

1. **Créer un Compte :**
   - Suivez ces instructions pour créer un compte utilisateur sur "Seabnb."

2. **Publier une Annonce :**
   - Découvrez comment publier une annonce pour votre bien, y compris les détails spécifiques aux bateaux.

3. **Rechercher des Annonces :**
   - Consultez ce guide pour apprendre à rechercher et explorer les annonces disponibles, en filtrant selon vos préférences.

## Gestion des Utilisateurs

"Seabnb" gère les utilisateurs avec différentes autorisations.

### Niveaux d'Accès

1. **Utilisateur Normal :**
   - Les utilisateurs normaux ont des capacités et des restrictions spécifiques.

2. **Administrateur :**
   - Les administrateurs bénéficient de privilèges spéciaux pour la gestion du site.

## Base de Données

Le backend de "Seabnb" est alimenté par une base de données MySQL, gérée par une API construite avec Node.js et Express.js.

### Structure de la Base de Données

Description détaillée de la structure des tables dans la base de données.

### Déploiement avec Docker Compose

"Seabnb" utilise Docker Compose pour simplifier le déploiement de l'application. Suivez les instructions appropriées pour déployer le frontend et le backend de manière efficace.
