---
sidebar_label: 'Unité 1 Exercice 10'
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

1.  Création du nouveau Job:
 * Dans le menu Administration, double-cliquez sur **Designer Workflow**.
 * Dans la liste Select Schedule, sélectionnez **My First Schedule**.
 * Dans la boite à Outils, cliquez et faites glisser l'icône **Ajouter un job** dans le diagramme du schedule.
 * Dans l'écran Job Master, entrez le nom 	```Windows Job 5	```.
 * Sélectionnez **Windows** comme type de Job.
 * Dans la liste déroulante **Machine Primaire**, sélectionnez la machine **SMATraining** sur laquelle le job doit être exécuté.
 * Dans la liste déroulante **User ID**, sélectionnez **SMATRAINING\SMAUSER**.
 * Sur la **Command Line (ligne de commande)**, utilisez le programme générique :
 * ```"C:\Program Files\OpConxps\MSLSAM\Genericp.exe" -t10 -e0```
 * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
 * Cliquez sur l'onglet **Fréquence** et **ajoutez une fréquence**.
 * Cliquez sur le **X** à droite de l'onglet **Job Master** pour fermer l'écran Job Master.
2.  Ajout de la dépendance:
 * Dans la boite à Outils, cliquez sur **Ajouter une Dépendance**.
 * Tout d'abord, **cliquez** sur le Job qui fait l'objet de la Dépendance (exemple :  **Windows Job 4**).
 * **Cliquez** ensuite sur le Job dans lequel créer la dépendance (exemple :  **Windows Job 5**).
 * Dans la fenêtre Ajouter Dépendance du job, cochez le bouton d'option Type de Dépendance choisi (exemple : **Requise**).
 * Cliquez sur le bouton **OK** pour enregistrer la dépendance de Job ajoutée. Remarque : notez que l'icône de la souris conserve le pointeur « Ajouter une Dépendance ». Vous pouvez cliquer sur **Select** dans le panneau Outils ou appuyer simplement sur la touche **Echap**.
3.	Fermez l'onglet Designer Workflow.

</details>
