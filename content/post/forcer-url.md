---
title: "Forcer « nouvelles » URL"
date: 2014-12-23
draft: false
aliases: [
    "/forcer-nouvelles-url.html.3",
    "/forcer-nouvelles-url.html.2",
    "/forcer-nouvelles-url.html.1",
    "/forcer-nouvelles-url.html"
]
tags: [
   "magento"
]
---
Quand on a une boutique Magento depuis un bon moment, il arrive souvent que les urls du site aient changé quelques fois depuis l’ouverture du site. On navigue donc avec les « mauvaises » (ou anciennes) urls ce qui entraîne une redirection à chaque clic. Le visiteur ou le moteur de recherche perd donc du temps ce qui peut entraîner une baisse du taux de conversion ou une moins bonne indexation de votre e-commerce.


Pour contrer ce problème, j’exécute de temps en temps un script qui permets de synchroniser les nouvelles urls sur toute la boutique.

## Cas traités

- Changement du domaine du site.

- Duplication de produits.

- Changements de l’arbre des catégories.

- Modification de la clé d’url à la main.

Pour le point 3, une petite explication s’impose. Imaginons un produit a qui a comme url a.html.

On veut faire un produit b qui a exactement les mêmes caractéristiques que le produit a. En général, pour gagner du temps, on dupliquera ce produit et on modifiera, au minimum, son sku. Rare sont les personnes qui pensent à modifier l’url directement.

Magento remarque qu’il y a deux produits qui ont une clé d’url égale à a. Il va donc faire une variation :

a-1234
a-1235
On est content, il n’y a plus de problèmes. Sauf qu’à la prochaine ré-indexation de la table core_url_rewrite, magento changera les urls pour ne pas les dupliquer. On aura donc, par exemple :

a-1236
a-1237
Avec une ré-indexation chaque nuit, ça pose de gros problèmes pour de grosses boutiques. On arrive rapidement à une table très grosse ce qui provoque une chute des performances.

## Le principe

On cherche dans le texte de Magento toutes les urls et on regarde dans la base de donnée si c’est bien le plus court chemin possible, dans le cas contraire, on remplace l’url actuelle.

## Le module

Il est disponible sur github. je ne pourrait pas être tenu responsable d’une mauvaise manipulation. Si vous ne comprenez pas ce qu’il fait ou comment il marche, n’hésitez pas à me contacter.