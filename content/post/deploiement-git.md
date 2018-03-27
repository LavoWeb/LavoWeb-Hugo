---
title: "Utilisation de Git pour le déploiement"
date: 2014-12-23
draft: false
aliases: [
    "/git-deploiement.html.2",
    "/git-deploiement.html.1",
    "/git-deploiement.html"
]
tags: [
   "deploiement",
   "git"
]
---
Git est un CVS bien pratique, encore plus si on peut l’utiliser directement pour de la mise en production. Voici comment faire.


Dans la configuration que je vais présenter, il y a un poste de développement avec PhpStorm et un serveur sous Debian 7 avec Nginx + Php-fpm.

Si ce n’est pas fait, il faut installer Git sur le serveur :

```
sudo apt-get install git
```

Tout d’abord, il faut créer un dépôt sur son serveur puis initialiser le repo :

```
mkdir -p /var/repo/WEBSITE.git
cd /var/repo/WEBSITE.git
git init –bare
```

On s’assure que l’utilisateur SSH ait bien les droits d’accès au repo TODO

On peut de suite passer sous PhpStorm pour synchroniser le projet (il n’y a pas grand chose pour l’instant) en local. Pour importer le projet, il suffit de cliquer sur « Check out from Version Control » :

Check out from Version Control

 

Sélectionner Git :

PhpSotrm, Sélectionner Git comme CVS

Puis de rentrer ses informations sous la forme USER@DOMAIN:PORT/var/repo/WEBSITE.git :

PhpStorm Clone Repository

Il vous suffit de valider l’ajout de la clé SSH dans votre cache puis de taper le mot de passe de l’utilisateur. Ici nous n’avons pas grand chose mais c’est normal.

On va créer les deux branches (de développement et de production) ici :

PhpStorm créer branche Git

 

Puis :

Git Nouvelle Branch

 

Et enfin on ajoute nos branches (prod/master et dev/master) :

Branch OK

On retourne sur notre serveur afin d’ajouter le site de développement et le site de production :

```
mkdir -p /home/WEBSITE.com
mkdir -p /home/beta.WEBSITE.com
cd /home/WEBSITE.com
git clone /var/repo/WEBSITE.git .
git pull origin prod/master
cd /home/beta.WEBSITE.com
git clone /var/repo/WEBSITE.git .
git pull origin dev/master
```

Si vous avez une erreur avec le git pull, c’est « juste » que les branches n’ont pas encore été crées, pas de panique.

Maintenant, on passe à la synchronisation, c’est assez moche mais ça marche :)

```
nano /var/repo/WEBSITE.git/hooks/post-receive
```
```
#!/bin/bash
unset GIT_DIR
cd /home/WEBSITE.com
git pull origin prod/master
unset GIT_DIR
cd /home/beta.WEBSITE.com
git pull origin dev/master
```
```
chmod +x /var/repo/WEBSITE.git/hooks/post-receive
```
En gros, à chaque fois qu’un utilisateur fera un push vers le serveur et qu’il sera fini, git essayera tout seul de remettre à jour le code des deux environnements. Vous pouvez rajouter des conditions pour ne le faire qu’a l’endroit du push.

On donne à notre utilisateur les droits d’accès sur nos sites en les ajoutant dans le groupe linux du site. Il faut bien le faire sur les deux pour ne pas avoir de surprises :

```
usermod –a –G WEBSITE aurelien
usermod –a –G beta.WEBSITE aurelien
```

Il ne reste plus qu’a tester si ça fonctionne ou pas. Pour cela, on crée un fichier test.html dans notre IDE préféré. On l’ajoute, le commit puis le pull sur la branche dev/master. Ensuite un regarde si le fichier est bien présent dans le serveur ici : /home/beta.WEBSITE.com et qu’il n’est pas là : /home/WEBSITE.com.

Si c’est bon, on fait la même chose sur la branche prod/master et on vérifie que le fichier est bien présent dans /home/WEBSITE.com.

Bon courage et n’hésitez pas à poser des questions si besoin !