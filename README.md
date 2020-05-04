# API_GSM

_Dans le cadre du TP ExpressJS, nous avons réalisé un site Web listant les caractéristiques de différents téléphones, avec l'utilisation de React JS, Node.js, ExpressJS et Sequelize._


_Réalisé par DELAS Théo **[@theoDELAS](https://github.com/theoDELAS)** et CEBERIO Pierre **[@PierreYnov](https://github.com/PierreYnov)**  ._

![img](https://github.com/theoDELAS/API_GSM/blob/master/img/img.png)

## Sommaire

- [Documentation d'installation](##-documentation-dinstallation)
  - [0. Prérequis](###0-prérequis)
  - [I. Git clone](###i-git-clone)
  - [II. Déploiement](###ii-déploiement)
- [Pour aller plus loin](##-pour-aller-plus-loin)
- [La note](##-la-note)

## Documentation d'installation

_Manuel d'installation étape pour déployer le projet_

### 0. Prérequis

Le projet demande un seul prérequis, avoir **Node.js** d'installé sur son PC.

Disponible [ici](https://nodejs.org/en/) !

### I. Git clone

Cloner le repository avec la commande: `git clone https://github.com/theoDELAS/API_GSM.git`.

### II. Déploiement

Pour déployer le projet il suffit de taper les commandes suivantes : 

Dans la racine du dossier tapez : `npm install ` puis `node index.js`

Dans un nouveau terminal tapez `cd .\app\gsm\ `, `npm install ` et enfin `npm start`

Le projet se compilera et votre navigateur lancera une page internet sur le projet à l'url http://localhost:3000/

## Pour aller plus loin

- Possibilté de se créer un compte utilisateur afin de pouvoir mettre en favori des téléphones, voire une section commentaires ?
- Avoir plus de téléphones en BDD
- Création de catégories par marques de téléphones, par meilleures notes.
- Pouvoir filtrer sa recherche avec par exemple seulement des écrans AMOLED, ou minimum 6go de RAM.
- Pouvoir sélectionner deux téléphones et les mettre en comparaison afin de voir leurs points forts et faibles.
- To be continued ...


## La note

La fonction qui calcule la note est totalement subjective. J'ai attribué un certains coefficients à chaques caractéristiques puis on calcule à partir d'un système de points la note finale avec une moyenne pondérée.

Les coefficients :

Prix = 15 %
Taille = 10 %
Type écran = 10 %
OS = 5 %
RAM = 20 %
Date sortie = 20 %
Stockage = 20 %


Le système de points est visible dans la fonction [ici](https://github.com/theoDELAS/API_GSM/blob/master/app/gsm/src/components/PhoneDetails.jsx).
