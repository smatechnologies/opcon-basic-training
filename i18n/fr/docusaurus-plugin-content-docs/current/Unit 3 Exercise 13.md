---
sidebar_label: 'Unite 3 Exercice 13'
hide_title: 'false'
---

## Exercice 13: Events

##### Objectif:

Créez trois nouveaux Windows Job dans **MY FIRST SCHEDULE** nommés **Test Event 1**, **Test Event 2** et **Test Event 3**.

Utilisez le programme générique dans la ligne de commande et définissez une fréquence à 7 jours.

Placez **Test Event 3** dans un Job Status On Hold. Donnez ces dépendances aux trois tâches:

**Test Event 1 > Test Event 2 > Test Event 3**.

Créez un event ```$JOB:CANCEL``` pour le Job **Test Event 1** qui annulera **Test Event 3**

Construisez le schedule et affichez les résultats dans la vue matricielle.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E13.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Créer les Schedules/Jobs
    * Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
    * Dans la liste déroulante **Schedule**, sélectionnez **My First Schedule**.
    * Dans la barre d'outils **Job Master**, cliquez sur le bouton **Add**.
    * Dans la zone de texte **Name**, entrez **Test Event 1**.
    * Dans la liste déroulante **Job Type**, sélectionnez **Windows**.
    * Dans la liste déroulante **Primary Machine**, sélectionnez la machine ```SMATraining``` sur laquelle le Job doit être exécuté.
    * Dans la liste déroulante **User ID**, sélectionnez ```SMATRAINING\SMAUSER```
    *	In the **Command Line**, type Ctrl + F and Double-Click on the command that looks like this:  
    ```“[[PathWindows]]\genericp.exe” –t[[RUNTIME]]```  
    * Cliquez sur le bouton **Save**.
    * Cliquez sur l'onglet **Frequency**.
    * Dans le cadre Frequency list, cliquez sur le bouton **Add**.
    * Cliquez à l'intérieur du bouton d'option pour atteindre **Use Existing Frequency**.
    * Dans la liste déroulante Frequency, sélectionnez ```Mon-Sun-O```.
    * Cliquez sur **Next**.
    * Cliquez sur le bouton **Finish**.
    * Dans la barre d'outils Job Master, cliquez sur le bouton **Copy**.
    * Nommez le job **Test Event 2**.
    * Cliquez sur **OK**.
    * Dans la barre d'outils Job Master, cliquez sur le bouton **Copy**.
    * Nommez le job **Test Event 3**.
    * Cliquez sur **OK**.
    * Cliquez sur l'onglet **Frequency**.
    * Dans le cadre **Job Build Status**, sélectionnez **On Hold**.
    * Cliquez sur le bouton **Save**.
    * Fermez **Job Master**.
    * Sous la rubrique Administration, double-cliquez sur **Workflow Designer**.
    * Dans la liste Select Schedule list, sélectionnez **My First Schedule**.
    * Cliquez sur **Add Dependency** tool.
    * Cliquez sur **Test Event 1**, puis **Test Event 2** pour créer une **dépendance (Requires dependency)**.
    * Cliquez sur **Test Event 2**, puis **Test Event 3** pour créer une **dépendance (Requires dependency)**.
2. Créer les events
    * Dans **Workflow Designer**, cliquez avec le bouton droit sur **Test Event 1** et sélectionnez **Edit**.
    * Cliquez sur l'onglet **Events**.
    * Dans le cadre **Events**, cliquez sur le bouton **Add**.
    * Dans **Event Definition Wizard**, sous **Send Event on**, sélectionnez le bouton d'option pour **Job Status**.
    * Cliquez sur le bouton **Next**.
    * Dans la liste déroulante **Job Status**, sélectionnez ```Finished OK```.
    * Cliquez sur le bouton **Next**.
    * Dans la liste déroulante **Event Template**, sélectionnez ```$JOB:CANCEL``` Event.

:::note Exemple:

```
$JOB:CANCEL,<Schedule date>,<Schedule name>,<Job name>
```  

* ```<Schedule date>``` doit être remplacé soit par ```CURRENT```, ```[[$DATE]]```, or ```[[$SCHEDULE DATE]]```  
* ```<Schedule name>``` doit être remplacé soit par **full name of the Schedule the Job is in**, ou soit ```[[$SCHEDULE NAME]]```  
* ```<Job name>``` doit d'être remplacé par **the name of the Job this Event is going to cancel**  
* Votre event devrait ressembler à cela: 
        ```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],Test Event 3```

:::

* Cliquez sur le bouton **Finish**.
* Fermez les onglets **Job Master** et **Workflow Designer**.
* Ouvrez l'une des operations views  et vérifiez si **My First Schedule** est **In Process (en cours)** 
:::note Remarque
Annulez les Jobs si My First Schedule n'est pas terminée
:::
* **Construisez le Schedule** (publié) et regardez-le se dérouler.
* Utilisez les vues **List** ou **Matrix** dans **Enterprise Manager** ou utilisez **Solution Manager**. 

</details>