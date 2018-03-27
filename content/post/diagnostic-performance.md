---
title: "Trouver des problèmes de performances"
date: 2018-03-24
draft: false
aliases: [
    "/resoudre-probleme-performance.html.2",
    "/resoudre-probleme-performance.html.1",
    "/resoudre-probleme-performance.html"
]
tags: [
   "performance"
]
---
On dit parfois que Magento est lent, je ne pense pas. Si on respecte les bonnes pratiques, c’est plutôt rapide, il suffit de voir les sites des grands acteurs du e-commerce pour s’en rendre compte. Aujourd’hui on va parler d’un outil tout simple qui nous permettra de savoir ce qui rend le site lent.

C’est peut-être une requête SQL où il manque un index, une collection chargée sans filtre, une boucle non optimisée ou pleins d’autres choses encore. On va parler de l’outil linux strace. Je l’ai découvert en ayant à analyser des boucles infinis sur un site.

Strace log tout simplement tous les appels systèmes. C’est très verbeux mais ça permets d’identifier facilement ce qui ne vas pas sur une appli.

Voici comment l’utiliser pour débugger une application PHP.

## Écouter le processus Apache2

Si on utilise Apache avec PHP en mode CLI, il faut monitorer apache. Si on utilise PHP-FPM ou autre, il faudra monitorer le processus PHP.

```
strace -t -s 256 apache2 -X
```

On lance donc la commande strace avec l’option -t (afficher l’heure), s (pour limiter le nombre de caractère par ligne à 256 – c’est le minimum pour voir les requêtes SQL). Ensuite on lance apache en mode CLI et non en mode daemon, ce qui permets de ne pas « perdre » le processus.

Ensuite on visite la page qui nous intéresse et on verra tous les appels systèmes. Il ne nous reste lus qu’a trier ceux qui prennent le plus de temps (avec Excel par exemple) et à optimiser :)

Pour terminer le processus, un CTRL+C ne suffit pas, il faut killer le processus :

```
ps aux |grep apache2

```
> ncyuser  31836  2.8  2.7 389412 112556 pts/10  R+   10:25   0:04 apache2 -X

```
kill -9 31836
```
Le -9 est obligatoire dans ce cas !