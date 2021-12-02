---
sidebar_label: 'Unite 3 Lab C'
hide_title: 'false'
---

### Unite 3 LAB C

##### Objectif:

A travers un schedule nommé **CONGO ACCOUNTING FOLDERS**, votre équipe comptable a besoin d'un dossier quotidien (du lundi au vendredi) créé dans le dossier ```C:\Accounting``` pour chacun des produits suivants:

* Legos
* Nerf
* Smartphones
* Xbox
* Levis
* Nike

Le script suivant doit être utilisé pour créer chaque dossier :

```
“C:\scripts\Create_Folder.cmd” “C:\Accounting\yyyy-mm-dd-Legos”
```
Dans lequel «Legos» est le produit.

Créez trois propriétés globales qui seront utilisées à la place des objets suivants sur la ligne de commande :

*	```C:\scripts```
*	```C:\Accounting```
*	```yyyy-mm-dd```

    * Cela nécessitera une propriété globale du système au format correct ```[[$SCHEDULE DATE]]```

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabC.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Instructions de laboratoire** :  

* Créer un Schedule nommé **Congo Accounting Folders**
* Les **samedis** et **dimanches** sont **des jours non ouvrables (non-working days)**
* **Auto-build** le schedule ```7``` jours à l'avance pour ```1``` jour
* **Auto-delete** le schedule ```7``` jours
* Ajouter **documentation** pour le Schedule
* Créer un **Job Windows** pour chacun des produits de l'introduction
* Nommez chaque **Job** de la même manière que son **nom de produit**
* Ce Job doit s'exécuter en tant qu'User ID ```SMATRAINING\SMAUSER``` 
* Ce Job doit s'exécuter sur la Machine ```SMATRAINING```
* Utilisez la **ligne de commande** suivante en remplaçant les trois objets spécifiés ci-dessus par des **propriétés globales** :

```
“C:\scripts\Create_Folder.cmd” “C:\Accounting\yyyy-mm-dd-Legos”
```  

:::note
N'oubliez pas que chaque Job est attribuée à un produit et que le nom du dossier doit correspondre au produit
:::

* Le Job doit être exécuté du **lundi au vendredi**
* Les Jobs doivent être **étiquetés** en fonction du produits (**jouets**,** **électronique** et **vêtements**)
* Les Jobs doivent s'exécuter dans l'ordre suivant, chaque Job nécessitant le Job avant lui :
    * Legos
    * Nerf
    * Smartphones
    * Xbox
    * Levis
    * Nike
* Construire le schedule pour aujourd'hui et demain (Released)
* Utilisez la vue des opérations de Solution Manager pour vérifier si les jobs sont terminés
* Une fois tous les jobs terminés, vérifiez que tous les dossiers ont été créés

</details>