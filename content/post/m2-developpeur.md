---
title: "Magento2 : Mode développeur"
date: 2018-03-24
draft: false
aliases: [
    "/mode-developpeur.html.2",
    "/mode-developpeur.html.1",
    "/mode-developpeur.html"
]
tags: [
   "magento",
   "magento 2"
]
---
Magento 2 propose de base un système de cache assez poussé. Ce qui est génial pour les performances en production mais un peu moins quand on cherche à développer de nouvelles fonctionnalités.

Voici ce qu’on peut faire pour améliorer notre productivité :

```
bin/magento deploy:mode:set developer
bin/magento cache:disable layout block_html full_page
rm -Rf var/view_preprocessed/* pub/static/frontend/* var/cache/mage-* var/page_cache/mage-*
```

Avant la mise en prod, on oublie pas de faire ceci :

```
bin/magento deploy:mode:set production
bin/magento cache:enable layout block_html full_page
```