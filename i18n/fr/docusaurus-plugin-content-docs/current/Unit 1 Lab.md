---
sidebar_label: 'Unite 1 Lab'
hide_title: 'false'
---

## Unite 1 Lab

##### Objectif:

Congo Online Retail Inc. doit exécuter un Schedule nommé **CONGO INVENTORY REPORTS** qui créera des rapports d'inventaire séparés pour six produits chaque jours ouvrables. Ces rapports doivent s'exécuter de **manière séquentielle** et être **étiquetés** dans les catégories suivantes :

**Jouets**
*	Legos
*	Nerf

**Électronique**
*	Smartphones
*	Xbox

**Vêtements**
*	Levi's
*	Nike


Les six Jobs ```WINDOWS``` doivent être exécutés du **lundi au vendredi** et ne peuvent pas commencer avant ```8:00```.

Le programme qui doit être exécuté dans la ligne de commande pour l'exécution du Job est :

```
"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t15 -e0
```

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1LAB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions de laboratoire plus détaillées</summary>

#### Instructions de laboratoire :

* Créer un schedule nommée **Congo Inventory Reports**
* Le samedi et le dimanche sont des jours non ouvrés
* Configurez le Schedule pour une mise au plan automatique de ```7``` jours à l'avance pour ```1``` jour
* Ainsi qu’une suppression automatique après ```7``` jours
* Ajouter de la documentation pour le schedule
* Créez un **Job Windows** pour chacun des produits présentés dans l'introduction
* Nommez chaque Job de la même manière que son nom de produit
* Ce Job doit s'exécuter avec l’utilisateur ```SMATRAINING\SMAUSER```
* Ce job doit être exécuté sur la machine ```SMATRAINING```
* Utilisez la ligne de commande suivante :

```
“C:\Program Files\OpConxps\MSLSAM\genericp.exe” –t15 –e0
```
* Les jobs doivent être exécutés du lundi au vendredi
* Utilisez la fréquence existante : ```Mon-FriOnDate```
* Cliquez sur le bouton Prévisionnel pour vous assurer que votre fréquence correspond à l'exigence
* Ajoutez de la documentation pour chaque job. 
        * Exemple : ce Job rapporte un inventaire pour le nombre de Legos en stock
* Les Jobs doivent s'exécuter dans l'ordre suivant, chaque Job nécessitant l’exécution du Job avant lui :
    * Legos
    * Nerf
    * Smartphones
    * Xbox
    * Levis
    * Nike
* Les jobs ne peuvent pas démarrer avant **8h00**
* **Taguer** les jobs en fonction du type de produit (jouets, électronique ou vêtements)
* Mettre au plan le schedule en mode Released pour aujourd'hui et demain
* Ouvrez la vue Matrice ou Liste sous Operations pour vérifier

Une fois terminés, les Jobs s'exécuteront dans cet ordre :

<a href="imgbasic/Picture92.png" target="_blank"><img src="imgbasic/Picture92.png" width="250"></img></a>  

###### (Cliquez sur l'image pour l'agrandir)

</details>