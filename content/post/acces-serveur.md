---
title: "Gérer ses accès serveurs"
date: 2018-03-24
draft: false
aliases: [
    "/acces-serveur.html.2",
    "/acces-serveur.html"
]
tags: [
   "ssh"
]
---
Quand on commence à avoir beaucoup de serveurs à gérer, il devient urgent d’avoir une bonne politique pour gérer les connexions. C’est compliqué de retenir x mots de passe donc il devient tentant de mettre plusieurs fois le même. Les clés ssh avec une bonne configuration sont ont bonne solution à ce problème.

## Générer une clé SSH
```
ssh-keygen -t dsa
```

Une bonne pratique est de mettre son email en commentaire de la clé publique, ça permets de savoir plus facilement qui a accès à quoi. Il faut toujours mettre une passphrase si c’est un environnement extérieur.

## Autoriser une clé sur un serveur

```
ssh-copy-id -i ~/.ssh/server_dsa.pub aurelien@example.net -p 2222
```

## Associé les clés à un serveur

Créer le fichier ~/.ssh/config

```
Host example example.lavoweb.net mycustomer 192.168.1.1
    HostName example.net
    Port 2222
    User aurelien
    IdentityFile ~/.ssh/server_dsa
    LocalForward 3307 127.0.0.1:3306
```
Ici, il suffira de taper dans la console ssh example pour se connecter au serveur et non plus ssh aurelien@exemple.net -p 2222 -i ~/.ssh/server_dsa. C’est un gain de temps non négligeable. Vous pouvez vous générer une clé par environnement et par exemple avoir un login sans mot de passe sur vos instances locales.

On peut mettre autant d’alias qu’on a envie, c’est pratique ! En général je mets le nom du serveur, l’alias via un de mes domaines, le nom du client et l’ip du serveur.

Si j’ai envie de faire un tunnel ssh, je peux utiliser la directive LocalForward et rajouter dans ma commande ssh -f -N ou encore me créer un alias de ce type :

```
alias ssht=’ssh -f -N’
```

C’est pratique pour accéder à un serveur SQL, monit, Solr & bien d’autres applis.