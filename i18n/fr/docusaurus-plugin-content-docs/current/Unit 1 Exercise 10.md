---
sidebar_label: 'Unite 1 Exercice 10'
hide_title: 'false'
---

## Exercice 10: Designer Workflow

##### Objectif:

Ouvrez **Designer Workflow** et créez un nouveau Job nommé **WINDOWS JOB 5** dans **MY FIRST SCHEDULE**. Donnez au job les mêmes détails que les jobs existants dans ce schedule. 
Donnez au job une **dépendance requise** pour **WINDOWS JOB 4**.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E10.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1.	Sous la rubrique **Administration**, double-cliquez sur **Designer Workflow**.
2.	Dans la liste **Select Schedule**, sélectionnez **My First Schedule**.
3.	**Cliquez** et **faites glisser** autour de la zone dans laquelle vous souhaitez sélectionner et déplacer un groupe d'éléments.
4.	Dans le cadre **Outils**, cliquez, faites glisser et déposez l'icône **Ajouter un job** dans le diagramme du schedule.
5.	Dans l'écran **Job Master**, entrez **Windows Job 5** comme nom.
6.	Sélectionnez **Windows** comme type de Job
7.	Dans la liste déroulante **Machine Primaire**, sélectionnez la machine **SMATraining** sur laquelle le job doit être exécuté.
8.	Dans la liste déroulante **User ID**, sélectionnez ```SMATRAINING\SMAUSER```
9.	Sur la **ligne de commande**, utilisez le programme générique :
10.	```"C:\Program Files\OpConxps\MSLSAM\Genericp.exe" -t10 -e0```
11.	Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
12.	Cliquez sur l'onglet **Fréquence** et ajoutez une fréquence.
13.	Cliquez sur le **X** à droite de l'onglet **Job Master** pour fermer l'écran Job Master.
14.	Dans le cadre **Outils**, cliquez sur **Ajouter une Dépendance**.
15.	Tout d'abord, **cliquez** sur le Job qui fait l'objet de la Dépendance (exemple :  **Windows Job 4**).
16.	**Cliquez** ensuite sur le Job dans lequel créer la dépendance (exemple :  **Windows Job 5**).
17.	Dans la fenêtre Ajouter Dépendance du job, cochez le bouton d'option Type de Dépendance choisi (exemple : **Requise**).
18.	Cliquez sur le bouton **OK** pour enregistrer la dépendance de Job ajoutée. Remarque : notez que l'icône de la souris conserve le pointeur « Ajouter une Dépendance ». Vous pouvez cliquer sur " Select " dans le panneau Outils ou appuyer simplement sur la touche Echap.
19.	Fermez l'onglet **Designer Workflow**.

</details>
