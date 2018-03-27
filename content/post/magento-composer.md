---
title: "Créer un module Magento disponible avec Composer"
date: 2018-03-24
draft: false
aliases: [
    "/magento-composer-github.html.2",
    "/magento-composer-github.html.1",
    "/magento-composer-github.html"
]
tags: [
   "magento"
]
---
Créer un repo

Créer le module

Ajout composer.json

Génération modman

```
curl -sS https://raw.githubusercontent.com/mhauri/generate-modman/master/generate-modman > generate-modman
sudo mv generate-modman /usr/local/bin
sudo chmod 755 /usr/local/bin/generate-modman
/usr/local/bin/generate-modman
git add modman
```

créer release dans github
repo/releases/new

créer hook packagist
repo/settings/hooks/new?service=packagist

trouver le token ici : https://packagist.org/profile/

Ajouter le package dans packagist : https://packagist.org/packages/submit

Ajouter le package dans satis perso