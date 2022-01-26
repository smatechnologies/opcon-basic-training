---
sidebar_label: 'Unite 3 Exercice 13'
hide_title: 'false'
---

## Exercice 13: Events

##### Objectif:

Créez trois nouveaux Job Windows dans **MY FIRST SCHEDULE** nommés **Test Event 1**, **Test Event 2** et **Test Event 3**.

Utilisez le programme générique dans la ligne de commande et définissez une fréquence à 7 jours.

Placez **Test Event 3** dans le statut ```On Hold```. Donnez ces dépendances aux trois Jobs:

**Test Event 1 > Test Event 2 > Test Event 3**.

Créez un event ```$JOB:CANCEL``` pour le Job **Test Event 1** qui annulera **Test Event 3**

Construisez le schedule et affichez les résultats dans la vue Matrix.


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
    * Dans la barre d'outils **Job Master**, cliquez sur le bouton **Ajouter**.
    * Dans la zone de texte **Nom**, entrez **Test Event 1**.
    * Dans la liste déroulante **Type de Job**, sélectionnez **Windows**.
    * Dans la liste déroulante **Machine Primaire**, sélectionnez la machine ```SMATraining``` sur laquelle le Job doit être exécuté.
    * Dans la liste déroulante **User ID**, sélectionnez ```SMATRAINING\SMAUSER```
    *	In the **Command Line**, type Ctrl + F and Double-Click on the command that looks like this:  
    ```“[[PathWindows]]\genericp.exe” –t[[RUNTIME]]```  
    * Cliquez sur le bouton **Sauvegarder**.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre Liste Fréquences, cliquez sur le bouton **Ajouter**.
    * Cliquez sur Utiliser Fréquence existante.
    * Dans la liste déroulante Fréquence, sélectionnez ```Mon-Sun-O```.
    * Cliquez sur **Suivant**.
    * Cliquez sur le bouton **Terminer**.
    * Dans la barre d'outils Job Master, cliquez sur le bouton **Copie**.
    * Nommez le job **Test Event 2**.
    * Cliquez sur **OK**.
    * Dans la barre d'outils Job Master, cliquez sur le bouton **Copie**.
    * Nommez le job **Test Event 3**.
    * Cliquez sur **OK**.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre **Statut à la Mise au Plan**, sélectionnez **On Hold (Suspendu)**.
    * Cliquez sur le bouton **Sauvegarder**.
    * Fermez **Job Master**.
    * Sous la rubrique Administration, double-cliquez sur **Designer Workflow**.
    * Dans la liste Sélectionner Schedule, sélectionnez **My First Schedule**.
    * Cliquez Dans la boite à outils sur Ajouter une dépendance.
    * Cliquez sur **Test Event 1**, puis **Test Event 2** pour créer une **dépendance (Dépendance Requise)**.
    * Cliquez sur **Test Event 2**, puis **Test Event 3** pour créer une **dépendance (Dépendance Requise)**.
2. Créer les events
    * Dans **Designer Workflow**, cliquez avec le bouton droit sur **Test Event 1** et sélectionnez **Editer**.
    * Cliquez sur l'onglet **Events**.
    * Dans le cadre **Events**, cliquez sur le bouton **Ajouter**.
    * Dans **L’Assistant définition Event**, sous **Envoyer Event dans**, sélectionnez le bouton d'option pour **Statut de Job**.
    * Cliquez sur le bouton **Suivant**.
    * Dans la liste déroulante **Statut Job**, sélectionnez ```Finished OK```.
    * Cliquez sur le bouton **Suivant**.
    * Dans la liste déroulante **Modèle Event**, Sélectionnez l’event ```$JOB:CANCEL```.

:::note Exemple:

```
$JOB:CANCEL,<Schedule date>,<Schedule name>,<Job name>
```  

* ```<Schedule date>``` doit être remplacé soit par ```CURRENT```, ```[[$DATE]]```, or ```[[$SCHEDULE DATE]]```  
* ```<Schedule name>``` doit être remplacé soit par **Le nom complet du Schedule où se situe le Job**, ou par ```[[$SCHEDULE NAME]]```  
* ```<Job name>``` doit d'être remplacé par **le nom du Job que l’Event doit canceler**  
* Votre event devrait ressembler à cela: 
        ```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],Test Event 3```

:::

* Cliquez sur le bouton **Terminer**.
* Fermez les onglets **Job Master** et **Designer Workflow**.
* Ouvrez l'une des Vues des Opérations et vérifiez si **My First Schedule** est **In Process (en cours)** 
:::note Remarque
Annulez les Jobs si My First Schedule n'est pas terminée
:::
* Mettez au Plan le Schedule (en Release) et suivre l’exécution des jobs
* Utilisez les vues **List** ou **Matrix** dans **Enterprise Manager** ou utilisez **Solution Manager**. 

</details>