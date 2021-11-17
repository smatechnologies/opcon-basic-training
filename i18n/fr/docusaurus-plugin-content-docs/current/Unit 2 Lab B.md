---
sidebar_label: 'Unite 2 Lab B'
hide_title: 'false'
---

## Unite 2 Lab B

### Objectif:

Congo Online Retail Inc. doit effectuer des contrôles d'inventaire quotidiens (7 jours sur 7) avec un schedule nommé **CONGO INVENTORY MANAGEMENT**.

Un programme spécifique doit être exécuté pour chaque département de produit et chaque Job associé à un produit doit être étiqueté par département.
  
*	**Jouets** – ```"C:\scripts\CheckInvToys.EXE"```
    *	Legos
    *	Nerf
*	**Électronique** – ```"C:\scripts\CheckInvElectronics.EXE"```
    *	Smartphones
    *	Xbox
*	**Vêtements** – ```"C:\scripts\CheckInvClothing.EXE"```
    *	Levis
    *	Nike

Chaque produit se voit attribuer un **Product ID Number**. Ce numéro d'identification sera utilisé par le programme comme argument pour l'intervalle de temps -t pour chaque job :

  * Legos - ```11```
  * Nerf - ```12```
  * Smartphones - ```21```
  * Xbox - ```22```
  * Levis - ```31```
  * Nike - ```32```
  * Inventory Report - ```100```

Les Jobs doivent s'exécuter toutes les ```30 minutes``` jusqu'à ```23h45```.
  
Les programmes lisent la base de données et génèrent des demandes de commande pour acheter de nouveaux articles. À la fin de la journée, **un rapport d'inventaire d'achat** est créé avec les résultats. Celui-ci doit être créé en tant que Job ```UNIX``` avec la ligne de commande suivante :

```/usr/local/labfiles/CheckInvPurRpt –t100```  

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2LabB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions plus détaillées </summary>

**Instructions de laboratoire** : 

* Créer un Schedule nommé **Congo Inventory Management** 
* les jours ouvrables sont **Du lundi au dimanche** 
* Configurer la Mise au Plan automatique du Schedule avec ```7``` jours à l'avance pour ```1``` jour 
* Supprimer automatiquement le Schedule après ```7``` jours 
* Ajouter de la documentation pour le Schedule

* Créez un Job Windows pour chacun des produits dans l'introduction
    * Nommez chaque Job comme son nom de produit
    * Ce job doit s'exécuter sous l'ID utilisateur ```SMATRAINING\SMAUSER```
    * Ce job doit être exécuté sur la machine ```SMATRAINING```
    * Appelez les programmes sur la ligne de commande. Par exemple :

  ```   
  “C:\scripts\CheckInvToys.EXE” -t11  
  ```  

* Ces jobs doivent être exécutés du lundi au dimanche
* Ces jobs doivent être réexécutés ```toute les 30 minutes``` lorsqu'ils se sont terminés correctement
* La dernière heure d'exécution des 6 Jobs est ```23h45``` 
* Ajoutez de la documentation pour chaque Job. Exemple : Nerf
* Taguez ces 6 jobs en fonction du type de produit (**jouets** , **électronique** ou **vêtements** )
* Créer un Job Unix nommé **Rapport d’inventaire d’achat**
* Ce job doit être exécuté sur la machine ```SUSEVM```
* Ce Job doit s'exécuter sous les IDs groupe/utilisateur ```0/0``` 
* Appelez les programmes sur la ligne de commande. Par exemple :

  ```  
  /usr/local/labfiles/CheckInvPurRpt –t100  
  ```  
  
* Ce job doit être exécutée du **lundi au dimanche**
* Le rapport d'inventaire d'achat nécessite les 6 jobs Windows et doit s'exécuter une fois que toutes les exécutions sont terminées
* Mettre au Plan le Schedule pour aujourd'hui et demain

:::note
Une fois terminé, affichez les résultats dans le **Designer Workflow**. Ensuite, mettre au Plan le Schedule en « Release » pour aujourd'hui et vérifiez son exécution à l'aide de **Solution Manager**.
:::

<a href="imgbasic/306.png" target="_blank"><img src="imgbasic/306.png" width="500"></img></a>

</details>