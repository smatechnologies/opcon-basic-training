---
sidebar_label: 'Unite 4 Exercice 2'
hide_title: 'false'
---

## Exercice 2: Thresholds

##### Objectif:

Créez un **Threshold** nommé ```TRAININGTHRESHOLD``` avec une valeur de ```0```.

Créez un schedule nommée **My Threshold Schedule**.

Créez un Job Windows nommé **Threshold Dependency Job** qui exécute le programme générique sur une fréquence de ```7``` day. Donnez au Job une dépendance threshold ```TrainingThreshold``` d’une valeur de ```egal à 2```.

Créez une **mise à jour Threshold** sur le Job pour un état **Finished OK** avec une valeur de ```0```.

Créez un autre Job Windows nommé **Threshold Update Job** qui exécute le programme générique sur une fréquence de ```7 day```.

Créez une **mise à jour Threshold** sur le Job pour un état Finished OK avec une valeur de ```2```.

Créez un Job null **Threshold Initial Value Job** qui s'exécute sur une fréquence de ```7 day```.


Ajoutez l’event ```$NOTIFY:EMAIL``` au Job qui s'exécute :

```
smauser@congo.local,,,Initial value of TrainingThreshold,Initial value of TrainingThreshold is [[TH.TrainingThreshold]]
```

Ajoutez un deuxième Job Null nommé **Threshold After Update Job** copié à partir du premier Job. Mettez à jour les paramètres d'event:

```
smauser@congo.local,,,After the update,After the update the value of TrainingThreshold is [[TH.TrainingThreshold]]
```

Créez un troisième Job Null nommé **Threshold Final Value Job** copié à partir du dernier Job. Mettez à jour les paramètres d'event:

```
smauser@congo.local,,,Final value of TrainingThreshold,Final value of TrainingThreshold is [[TH.TrainingThreshold]]
```

Définissez les dépendances sur les Jobs en tant que telles :

**Threshold Initial Value Job > Threshold Update Job > Threshold After Update Job**

**TrainingThreshold > Threshold Dependency Job > Threshold Final Value Job**

Mettre au plan le schedule en released pour aujourd'hui. Affichez les résultats dans la vue Matrix ou Solution Manager.

Ouvrez **Thunderbird** pour vérifier les notifications.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E2.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Créez le Threshold.
    * Sous la rubrique **Administration**, double-cliquez sur **Thresholds**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Threshold.
    * Dans la zone de texte **Nom**, tapez **TrainingThreshold**, saisissez de la documentation et dans la zone de texte Threshold, entrez la valeur ```0```.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Threshold**. Fermez l'onglet **Threshold**.
2. Créez le schedule et les Jobs.
    * Sous la rubrique **Administration**, double-cliquez sur **Schedule Master**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils **Schedule Master**.
    * Créer un nouveau Schedule appelé **My Threshold Schedule**.
    * Utilisez ces paramètres pour le schedule :
        * Du lundi au dimanche sont des jours ouvrés.
        * N'utilisez **PAS** le calendrier Master Holiday.
        * Mise au Plan automatique ```7``` jours à l'avance pour ```1``` jour.
        * Suppression automatique ```7``` Jours en arrière 
    * N'oubliez pas d'ajouter de la **documentation** à votre schedule.
    * Fermez le **Schedule Master** et ouvrez le Job Master pour ajouter vos Jobs.
    * Sélectionnez **My Threshold Schedule**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Ajoutez un nouveau Job nommé **Threshold Dependency Job** et exécutez-le comme suit :
        * Programme :``` Genericp.exe``` programme à exécuter pendant ```10``` secondes.  
        :::note Remarque
        si vous utilisez Ctrl + F, ne sélectionnez pas une ligne de commande utilisant une propriété de schedule ou d'instance de Job
        :::
        * Machine : ```SMATraining```
        * Utilisateur : ```SMATRAINING\SMAUSER```
        * La fréquence : ```Example-Mon-Sun-O```
        * N'oubliez pas non plus d'ajouter de la **documentation**.
3. Créez la dépendance Threshold.
    * Cliquez sur l'onglet **Dépendances**
    * Cliquez sur l'onglet **Threshold/Resource dépendance**
    * Dans le cadre **Threshold/Resource dépendance**, cliquez sur le bouton **Ajouter**.
    * Dans la liste déroulante **Threshold/Resource**, sélectionnez **TrainingThreshold**.
    * Dans la liste déroulante **opérateur**, sélectionnez = (**symbole égal**).
    * Dans la zone de texte **Valeur**, saisissez ```2```.
    * Cliquez sur le bouton **OK**.
4. Créer une mise à jour threshold/ ressource :
    * Cliquez sur l'onglet **Mise à jour Threshold/Resource**.
    * Dans le cadre **Threshold/Resource Update**, cliquez sur le bouton **Add**.
    * Sélectionnez **TrainingThreshold** dans la liste déroulante.
    * Dans la liste déroulante **Statut Job**, sélectionnez **Finished OK**.
    * Dans la zone de texte **Valeur**, saisissez ```0```.
    * Cliquez sur **OK**.
5. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master** pour ajouter un autre Job.
6. Nommez le Job en tant que **Threshold Update Job**.
    * Programme : ```Genericp.exe``` programme à exécuter pendant ```10``` secondes
    * Machine : ```SMATraining```
    * Utilisateur : ```SMATRAINING\SMAUSER```
    * Fréquence : ```Example-Mon-Sun-O```
    * N'oubliez pas non plus d'ajouter de la **documentation**.
7. Créer une mise à jour Threshold/ ressource :
    * Cliquez sur l'onglet Mise à jour **Threshold/Ressource**.
    * Dans le cadre **Mise à jour Threshold/Ressource**, cliquez sur le bouton **Ajouter**.
    * Sélectionnez **TrainingThreshold** dans la liste déroulante.
    * Dans la liste déroulante **Statut Job**, sélectionnez **Finished OK**.
	* Dans la zone de texte Valeur, saisissez ```2```.
8. Ajoutez un Job null à la planification pour envoyer une notification avec la valeur initiale du Threshold.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
    * Nommez le Job **Threshold Initial Value Job** 
    * Fréquence : **Mon-Sun-O**
    * Cliquez sur l'onglet **Events** et cliquez sur le bouton **Ajouter** dans le cadre **Events**.
    * Sélectionnez le bouton radio **Statut de Job**.
    * Cliquez sur **Suivant**.
    * Sélectionnez **Finished OK** dans la liste déroulante **Statut Job**.
    * Cliquez sur **Suivant**.
    * Sélectionnez l'event ```$NOTIFY:EMAIL``` dans la liste déroulante **Modèle d’Event**.
    * Mettez à jour les **paramètres d'events** comme suit:
        * ```smauser@congo.local,,,Initial value of TrainingThreshold,Initial value of TrainingThreshold is [[TH.TrainingThreshold]]```
    * Cliquez sur **Terminer**.
9. Ajoutez un deuxième Job Null au schedule pour envoyer une notification avec la valeur du Threshold après sa mise à jour à ```2```.
    * Assurez-vous que **Threshold Initial Value Job** soit sélectionné.
    * Cliquez sur le bouton **Copie** (quatrième bouton à partir de la droite) dans la barre d'outils **Job Master** pour copier ce Job.
    * Nommez le nouveau Job **Threshold After Update Job**.
    * Accédez à l'onglet **Events** et modifiez l' **event** comme suit:
        * ```smauser@congo.local,,,After the update,After the update the value of TrainingThreshold is [[TH.TrainingThreshold]]```
10. Ajoutez un troisième Job Null au schedule pour envoyer une notification avec la valeur finale du Threshold.
    * Assurez-vous que **Threshold After Update Job** soit sélectionné.
    * Cliquez sur le bouton **Copie** (quatrième bouton à partir de la droite) dans la barre d'outils **Job Master** pour copier ce Job.
    * Nommez le nouveau **Job Threshold Final Value Job**.
    * Accédez à l'onglet **Events** et modifiez l'**event** comme suit :
        * ```smauser@congo.local,,,Final value of TrainingThreshold,Final value of TrainingThreshold is [[TH.TrainingThreshold]]```
11. Fermez le Job Master et le Schedule Master (s'ils sont ouverts).
12.  Ouvrez **Designer Workflow** pour définir les dépendances.
    * Sélectionnez **My Threshold Schedule** dans le cadre Sélectionner Schedule.

<a href="imgbasic/414.png" target="_blank"><img src="imgbasic/414.png" width="500"></img></a>

13. **Mettre au Plan le Schedule en Released** pour aujourd'hui.
    * Ouvrez l'une des vues d'opérations (**List** ou **Matrix**) ou utilisez **Solution Manager**.
14. Assurez-vous que **My Threshold Schedule** est terminée (Completed).
15. Ouvrez Thunderbird et vérifiez la boîte de réception.
16. Vous devriez trouver de ```3``` nouveaux e-mails. Ouvrez les e-mails et vérifiez le contenu.

</details>