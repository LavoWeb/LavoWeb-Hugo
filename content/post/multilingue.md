---
title: "Magento Multilingue"
date: 2014-05-04
draft: false
aliases: [
    "/multilingue.html"
]
tags: [
   "magento"
]
---
Une fois que votre site e-commerce commence à avoir un peu de trafic, il est important de penser à la suite. Plus vous serez visible, plus vous aurez des visiteurs ne parlant pas votre langue qui vont sur le site. Sur un site français (à la base) pour lequel nous travaillions, nous avions tout simplement plus de 1 000 visiteurs par jour Anglais (Etat-Unis & Royaume-Unis). Perdre ce trafic n’était tout simplement pas possible. Nous avons donc pris la décision d’ouvrir le site à l’international.


Bonne nouvelle, Magento gère nativement le multilingue, il y a plus qu’a. Malheureusement certains problèmes sont cachés et ce n’est plus si facile qu’il n’y parait au premier regard.

## Partie théorique du Rollout

La première étape pour ouvrir un site à l’étranger et la question des frais de port. Avez-vous un prestataire capable de livrer à l’étranger ? A quel tarif ? Et en cas de colis lourd ? Nous avons déjà traité des livraisons pour l’Australie par exemple et ce n’est pas forcément simple à intégrer dans Magento. Pareil pour une livraison par Hélicoptère, es-ce que ça vaut le coup d’y intégrer nativement ou alors passer par un module de devis ?

Avez vous en interne une personne capable de parler la langue au téléphone ? On garde uniquement un e-mail pour les sites « étrangers » ?

Une fois ces questions résolus vous avez déjà fait un grand pas, le reste c’est le problème de votre agence Magento :)

## 1ére étape : les traductions

Quels sont les différentes traductions à faire sur un site ? Certaines réponses sont évidentes, d’autres un peu moins !

- Traduire les produits

- Traduire les catégories

- Traduire les « alt » des images produits

- Traduire les images du site

- Traduire les e-mails

- Traduire les délais de livraison

- Traduire les pages CMS/Bloc Statique

Pour le point 1, ça parait évident, il y a le nom du produit, sa description, sa description courte, la méta title et la méta description. C’est le gros du travail.

Pour le point 2, il y a le nom de la catégorie, sa description, la méta title et la méta description.

Pour le point 3, c’est vraiment très long, je ne connais pas d’export possible, il faut donc aller dans chaque produit pour traduire les champs…

Pour le point 4, c’est un peu plus compliqué, il faut trouver un mécanisme/une logique pour ne pas se mélanger les pinceaux. Nous gardons les mêmes images qu’avant et nous rajoutons un -* nom de la vue *. Par exemple pour une image /media/image/logo.png, dans la vue française l’url de l’image sera  /media/image/logo-fr.png, dans la vue anglaise  /media/image/logo-en.png.

Par convention, nous donnes à nos vues le code de langue ISO 639-1. C’est un moyen simple de savoir dans quelle langue on est et c’est standardisé dans le cas d’une traduction automatique via API par exemple.

Pour les images, on remarque assez vite que c’est pénible, il faut donc privilégié le CSS pour faire les boutons.

Pour le point 5, c’est à moitié fait dans la plupart des packs de langues à télécharger sauf qu’il manque vos modifications. De base vous avez le même logo pour tous les emails. C’est dérangeant dans le cas ou vous avez du français dans votre logo. Il faudra donc répercuter tout le travail que vous avez fait du coté FR sur les autres.

Pour le point 6, il faut faire attention au « mapping » des délais de livraison entre la version texte et la version compréhensible par le serveur.

Pour le point 7, il n’y a rien de spécial, c’est un peu long mais c’est à faire une seule fois au moins.

## Utiliser un prestataire ?

Traduire le site c’est bien mais il ne faut pas oublier qu’il y a régulièrement des changements sur le site. Si vous éditez 200 produits/catégories par jour, vous vous doutez bien qu’il faudra répercuter ces changements dans les traductions. Demander à l’utilisateur de faire lui-même les traductions n’est pas une bonne idée étant donné qu’il y aura toujours un oubli.

Par expérience, ce n’est pas une bonne idée de passer par un prestataire humain pour gérer ses traductions, il faut que l’utilisateur n’ais rien à faire pour que la traduction se lance sinon il y aura toujours des soucis de synchronisation.

Nous gardons donc 2 prestataires possible :

- Traduction automatique via robot

- Traduction manuelle via une plateforme

Pour le point 1, on peut utiliser l’API de Microsoft Translator ou encore Google Translate API. Le choix se fait en fonction de votre niche, nous préférons utiliser Microsoft Translator car c’est beaucoup moins cher à l’usage et nous avons un meilleur rendu en général.

Pour le point 2, on utilise l’API de TextMaster mais uniquement en cas de petit catalogue, dans le cadre d’un gros catalogue remis régulièrement à jour ce n’est pas du tout compétitif au niveau du tarif. Par contre au niveau de la qualité c’est le top.

Il faut donc voir, en fonction de votre budget, la méthode la plus adaptée afin de gérer vos traductions au jour le jour.

Si vous avez besoin d’aide dans la mise en place de votre boutique Magento multilingue, n’hésitez pas à nous contacter pour une prestation de développement.