---
title: "Installer Magento"
date: 2014-12-23
draft: false
aliases: [
    "/installer-magento.html.1",
    "/installer-magento.html"
]
tags: [
   "magento"
]
---
Voici un guide pour installer le CMS Magento, je vous propose, à chaque fois 2 versions. Une en ligne de commande et une autre plus « normale ».

Nous pouvons également faire l’installation + configuration de votre boutique.

## Etape 1 : télécharger Magento

Et oui, tout simplement. Le téléchargement est évidemment gratuit. Pour cela on peut passer par le site officiel ou alors passer par github, ce qui nous permets d’avoir un débit correct donc d’attendre un peu moins longtemps.

En ligne de commande, il suffit se placer dans le répertoire d’installation puis de faire un :

```
git clone https://github.com/OpenMage/magento-mirror.git .
```

En graphique, il suffit de télécharger ce fichier :

```
https://github.com/OpenMage/magento-mirror/archive/magento-1.9.zip
```

Puis de la dé-zipper via 7zip par exemple et enfin d’uploader les fichiers sur votre hébergeur via FilleZilla par exemple.

## Etape 2 : Création de la base de donnée

La seconde étape consiste à créer une base de donnée. Si vous êtes sur un hébergement « mutualisé », il faut la créer via l’interface d’administration de votre hébergeur. Dans un hébergement « dédié », il faut demander à votre administrateur système de la créer.

En ligne de commande, il faut donc faire un :

```
mysql -u root -p
```
pour se connecter puis (pensez à mettre vos propres valeurs, c’est toujours mieux) :

```
CREATE DATABASE magento_database;
GRANT ALL PRIVILEGES ON magento_database.* TO magento_db_user@localhost IDENTIFIED BY ‘magento_db_pass’;
```
pour créer la base de donnée avec un utilisateur.

Nous aurons besoin du nom de la base de donnée magento_database, de l’utilisateur magento_database_user et du mot de passe magento_database_pass plus tard, il faut bien les noter.

## Etape 3 : Installation de Magento

C’est bientôt finit ! Il nous faut maintenant aller sur notre navigateur puis sur le domaine. Si tout se passe bien, on est redirigé vers la page d’installation qui comporte 4 étapes. Il ne faut pas avoir peur, vous avez déjà tout.

- Accepter la licence.

- Langue

- Configuration de la base de donnée (entre autre)

- Créer un compte administrateur

Une fois que vous aurez validé cette dernière étape, votre boutique sera installé. Bravo !