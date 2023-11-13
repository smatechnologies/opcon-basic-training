---
sidebar_label: 'Unité 2 Lab A'
hide_title: 'false'
---

## Unite 2 Lab A

### Objectif: 

Congo Online Retail Inc. doit payer ses employés à des intervalles différents en fonction de leur département. Cela se fait par le biais d'un Schedule nommé **CONGO PAYROLL PAYMENTS**.

La semaine de travail du service de la paie de Congo Online Retail Inc s'étend du lundi au vendredi et utilise le calendrier **Master Holiday** créé lors des exercices de l'Unité 2.

Chaque département nécessite des intervalles de planification spécifiques, comme indiqué :

**Jouets - Legos et Nerf**

* Tous les 14 jours à partir du 7 janvier de cette année.
    * Si la date tombe un jour non ouvrable,  sélectionnez le jour ouvrable précédent.
 

**Électronique - Smartphones et XBOX**

* Le 15 du mois 
    * Si la date tombe un jour non ouvrable,  sélectionner le jour ouvrable précédent.
* Le Dernier jour ouvrable du mois
    * Si la date tombe un jour non ouvrable,  sélectionner le jour ouvrable précédent.
* Une paie de fin d'année qui comprend à la fois la paie mensuelle et les bonus est exécutée à la place de la paie de fin de mois le dernier jour ouvrable de l'année.


**Vêtements - Levis et Nike**  

* Tous les vendredis
    * Si la date tombe un jour non ouvrable,  sélectionner le jour ouvrable suivant.
* Une fois que chaque étape importante des ventes est atteinte (à la demande)


Les fréquences requises doivent être exécutées dans les Jobs Null dans le Schedule **CONGO PAYROLL PAYMENTS**.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2LabA.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions plus détailléess</summary>

**Instructions de laboratoire :**

:::note
UTILISEZ UN TYPE DE JOB NULL POUR TOUS LES JOBS DE CE LABORATOIRE
:::

* Créez un schedule nommé **Congo Payroll Payments**
* Les jours ouvrables sont du lundi au vendredi  
* Le calendrier **Master Holiday** est utilisé
* Configurez une Mise au plan automatiquement du Schedule sur ```7``` jours à l'avance pour ```1``` jour
* Configurez la Suppression automatiquement du Schedule ```7``` jours en arrière
* Ajoutez de la documentation pour le schedule

* Quatre Null Jobs seront créés :
    * Les jouets auront besoin d'un job avec une fréquence
    * L'électronique aura besoin de deux Jobs
        * Job 1 - trois fréquences
        * Job 2 - une fréquence
    * Les vêtements auront besoin d'un job avec deux fréquences

* Taguez tous les jobs en fonction du produit ( **jouets** , **électronique** et **vêtements** )

Une fois terminé, les résultats « **Prévisionnel Global** » ressembleront à ce qui suit :

#### Jouets

<a href="imgbasic/268.png" target="_blank"><img src="imgbasic/268.png" width="300"></img></a>


#### Électronique - Pas de fin d'année

<a href="imgbasic/269.png" target="_blank"><img src="imgbasic/269.png" width="300"></img></a>


#### Electronique - Fin d'année

<a href="imgbasic/270.png" target="_blank"><img src="imgbasic/270.png" width="300"></img></a>


#### Vêtements

<a href="imgbasic/271.png" target="_blank"><img src="imgbasic/271.png" width="300"></img></a>  

<a href="imgbasic/272.png" target="_blank"><img src="imgbasic/272.png" width="250"></img></a>

###### (Cliquez sur les images pour les agrandir)

</details>
