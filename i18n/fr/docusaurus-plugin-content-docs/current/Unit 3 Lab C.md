---
sidebar_label: 'Unité 3 Lab C'
hide_title: 'false'
---

### Unité 3 LAB C

##### Objectif:

A travers un schedule nommé **CONGO ACCOUNTING FOLDERS**, votre équipe comptable a besoin d'un dossier quotidien (du lundi au vendredi) créé dans le dossier ```C:\Accounting``` pour chacun des produits suivants:

* Legos
* Nerf
* Smartphones
* XBOX
* Levis
* Nike

Le script suivant doit être utilisé pour créer chaque dossier :

```
"C:\scripts\Create_Folder.cmd" "C:\Accounting\yyyy-mm-dd-Legos"
```
Dans lequel «Legos» est le produit.

Créez trois propriétés globales qui seront utilisées à la place des objets suivants sur la ligne de commande :

*	```C:\scripts```
*	```C:\Accounting```
*	```yyyy-mm-dd```

    * Cela nécessitera une Système Global Property ```[[$SCHEDULE DATE]]``` avec le bon format.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabC.mp4" type="video/mp4"></source>
Votre navigateur ne prend pas en charge la vidéo.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Instructions de laboratoire** :  

* Créer un Schedule nommé **Congo Accounting Folders**.
* Les **samedis** et **dimanches** sont des **jours non ouvrés** (non-working days).
* **Mise au plan automatique** ```7``` jours à l'avance pour ```1``` jour.
* **Suppression automatique** ```7``` jours en arrière.
* Ajouter de la documentation pour le Schedule.
* Créer un Job **Windows** pour chacun des produits.
* Nommez chaque **Job** de la même manière que son **nom de produit**.
* Ce Job doit s'exécuter en tant qu'User ID ```SMATRAINING\SMAUSER```.
* Ce Job doit s'exécuter sur la Machine ```SMATRAINING```.
* Utilisez la **ligne de commande** suivante en remplaçant les trois objets spécifiés ci-dessus par des **Global Properties** :

```
"C:\scripts\Create_Folder.cmd" "C:\Accounting\yyyy-mm-dd-Legos"
```  

:::note
N'oubliez pas que chaque Job est attribuée à un produit et que le nom du dossier doit correspondre au produit
:::

* Le Job doit être exécuté du **lundi au vendredi**.
* Les Jobs doivent être **Tagués** en fonction du produits (**jouets**, **électroniques** et **vêtements**).
* Les Jobs doivent s'exécuter dans l'ordre suivant (dépendance **Requise**):
    * Legos
    * Nerf
    * Smartphones
    * XBOX
    * Levis
    * Nike
* **Mettre au Plan** le schedule pour aujourd'hui et demain (Released).
* Utilisez la vue des opérations du Solution Manager pour vérifier si les jobs sont terminés.
* Une fois tous les jobs terminés, vérifiez que tous les dossiers ont été créés.

</details>
