---
sidebar_label: 'Unité 4 Exercice 8'
hide_title: 'false'
---

## Exercice 8: Processus quotidien et mensuel du sous-schedule

##### Objectif: 

Créez un schedule nommé **Daily-SubSchedule**. Marquez le schedule comme sous-schedule.

Dans le **Daily-SubSchedule**, créez ```5``` jobs Windows quotidien qui exécutent le programme genericp sur une fréquence du ```lundi au vendredi``` (**Daily Job 1**, etc.). Donnez aux Jobs une chaîne linéaire **avec dépendances Requises**.

Créez un schedule nommé **Monthly-SubSchedule**. Marquez le schedule comme sous-schedule.

Dans **Monthly-SubSchedule**, créez ```7``` jobs Windows mensuelles qui exécutent le programme genericp sur une fréquence ```EOM-B``` (Monthly Job 1, etc.). Donnez aux Jobs une chaîne linéaire **avec dépendances Requises**.

Créez un schedule nommé **Main-Schedule**.

Dans **Main-Schedule**, créez un job nommé **Daily-Jobs** en tant que Job de container exécutant **Daily-SubSchedule**. Donnez au job une fréquence du ```lundi au vendredi```. Attribuez au Job une propriété de définition d'instance de ```RUNTIME=10```.

Dans **Main-Schedule**, créez un Job nommé **Monthly-Jobs** en tant que Job de container exécutant **Monthly-SubSchedule**. Donnez une fréquence ```EOM-B``` au Job. Attribuez au Job une propriété de définition d'instance de ```RUNTIME=20```.

Mettre au plan le **Schedule Main-Schedule** en **On Hold** pour aujourd'hui. Ensuite, Mettre au plan le Schedule en **Released** pour le **dernier jour ouvrable du mois**.

Dans la vue Matrix, Libérez (Released) le schedule pour aujourd'hui pour vérifier le bon fonctionnement du Job.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Créez le premier sous-schedule (Daily):
    * Sous le menu Administration, double-cliquez sur **Schedule Master**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Schedule Master.
    * Dans la zone de texte Nom, entrez ```Daily-SubSchedule```.
    * Dans la zone de texte Documentation, entrez ```Ceci est le sous-schedule hebdomadaire```.
    * Dans la zone Heure démarrage, notez la valeur par défaut ```00:00``` (minuit).
    * Gardez du **lundi au vendredi** sélectionné pour les jours ouvrés par semaine pour que le schedule s'exécute.
    * Dans le cadre Propriétés Schedule, cochez la case **Sous-Schedule**.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Schedule Master.

2. Créez le sous-schedule (Monthly):
    * Sous le menu Administration, double-cliquez sur **Schedule Master** (s'il n'est pas ouvert).
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Schedule Master.
    * Dans la zone de texte Nom, saisissez **Monthly-SubSchedule**.
    * Dans la zone de texte Documentation, entrez ```Ceci est le sous-schedule mensuel```.
    * Dans Heure démarrage, notez la valeur par défaut ```00:00``` (minuit).
    * Gardez du **lundi au vendredi** sélectionné pour les jours ouvrés par semaine pour que le schedule s'exécute.
    * Dans le cadre Propriétés Schedule, cochez la case **Sous-Schedule**.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Schedule Master.
    * Fermez l'onglet Schedule Master.

3. Ajoutez des jobs dans le sous-schedule Daily:
    * Sous le menu Administration, double-cliquez sur **Job Master**. Sélectionnez **Daily-SubSchedule**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom, entrez ```Daily Job 1```.
    * Dans la liste déroulante Type de Job, sélectionnez **Windows**.
    * Dans la liste déroulante **Machine Primaire**, sélectionnez la machine **SMATraining**.
    * Dans la liste déroulante User ID, sélectionnez **SMATRAINING\SMAUSER**.
    * Dans la **ligne de commande**, utilisez **Ctrl + F** et sélectionnez la ligne de commande qui ressemble à ceci : ```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre de Liste Fréquences, cliquez sur le bouton **Ajouter**.
    * Cliquez sur le bouton radio **Utiliser Fréquence existante**.
    * Dans la liste déroulante Fréquence, sélectionnez **Mon-Fri-N**.
    * Cliquez sur **Suivant**.
    * Cliquez sur le bouton **Terminer**.
    * Dans la barre d'outils Job Master, cliquez sur le bouton **Copie** ou appuyez sur **Ctrl + Insert.**
    * Nommez le: Job **Daily Job 2**.
    * Cliquez sur **OK**.
    * Répétez les étapes 32 à 34 pour créer des **Daily Job 3**, **Daily Job 4** et **Daily Job 5**.
    * Fermez **Job Master**.
    * Utilisez **Designer Workflow** pour créer des **dépendances de jobs** comme vous le souhaitez, puis fermez **Designer Workflow**.

4. Ajoutez des jobs dans le sous-schedule mensuel:
    * Sous le menu Administration, double-cliquez sur **Job Master**. Sélectionnez **Monthly-SubSchedule**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom, saisissez ```Monthly Job 1```.
    * Dans la liste déroulante Type de Job, sélectionnez **Windows**.
    * Dans la liste déroulante Machine Primaire, sélectionnez la machine **SMATraining**.
    * Dans la liste déroulante User ID, sélectionnez **SMATRAINING\SMAUSER**.
    * Dans la **ligne de commande**, tapez **Ctrl + F** et sélectionnez la ligne de commande qui ressemble à ceci : ```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre **Liste Frequency**, cliquez sur le bouton **Ajouter**.
    * Créez une nouvelle **fréquence**. Le nom sera ```End-of-Month-B```. Cliquez sur **Suivant**.
    * Dans l’Assistant de définition de Fréquence, sélectionnez **Fin de période** dans le cadre Choix de Planification, assurez-vous que Mois est sélectionné dans les cadres **périodes** et **Avant Date** est sélectionnée dans les cadres **A/O/B/N**.
    * Cliquez sur le bouton **Terminer**.
    * Dans la barre d'outils Job Master, cliquez sur le bouton **Copie** ou appuyez sur **Ctrl + Insert**.
    * Nommez-le : ```Monthly Job 2```.
    * Cliquez sur **OK**.
    * Répétez les étapes 51 à 53 pour créer des Jobs **Monthly Job 3**, **Monthly Job 4**, **Monthly Job 5**, **Monthly Job 6**, et **Monthly Job 7**.
    * Fermez l'onglet **Job Master**.
    * Utilisez **Designer Workflow** pour créer des **dépendances de jobs**.
    * Fermez **Designer Workflow**.

5. Créez le Schedule principal:
    * Sous le menu Administration, double-cliquez sur **Schedule Master**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Schedule Master.
    * Dans la zone de texte Nom, entrez **Main-Schedule**.
    * Dans la zone de texte Documentation, entrez ```Ceci est le schedule principal```.
    * Dans Heure démarrage, notez la valeur par défaut ```00:00``` (minuit).
    * Gardez du **lundi au vendredi** sélectionné pour les **jours ouvrés par semaine** pour que le schedule s'exécute.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Schedule Master.
    * Fermez l'onglet **Schedule Master**.

6. Ajoutez le sous-schedule quotidien au Schedule principal:
    * Sous le menu Administration, double-cliquez sur **Job Master**.
    * Sélectionnez **Main-Schedule** de la liste déroulante Schedule.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom, entrez ```Daily-Jobs```.
    * Dans la liste déroulante Type de Job, sélectionnez **Container**.
    * Dans la liste déroulante Schedule à exécuter en tant que Sous-Schedule, sélectionnez **Daily-SubSchedule**.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre Liste des fréquences, cliquez sur le bouton **Ajouter**.
    * Cliquez sur le bouton radio **Utiliser Fréquence existante**.
    * Dans la liste déroulante Fréquence, sélectionnez **Mon-Fri-N**.
    * Cliquez sur **Suivant** puis sur **Terminer**.
    * Cliquez sur l'onglet **Définition Instance**.
    * Cliquez dans la zone **Définir Valeurs Propriété**.
    * Entrez : ```RUNTIME=10```
    * Cliquez sur **Ajouter** au milieu à droite de l'écran.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Dans la zone de texte Documentation, saisissez ```Ceci est un Job container contenant les Jobs quotidiens```.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.

7. Ajoutez le sous-schedule mensuel au Schedule principal:
    * Toujours sur Job Master, assurez-vous que **Main-Schedule** est sélectionné.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom, saisissez ```Monthly-Jobs```.
    * Dans la liste déroulante Type de Job, sélectionnez **Container**.
    * Dans la liste déroulante Schedule à exécuter en tant que Sous-Schedule, sélectionnez **Monthly-SubSchedule**.
    * Cliquez sur le bouton **Sauvegarder** sur la barre d'outils Job Master ou appuyez sur **Ctrl + S**.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre de la liste Fréquence, cliquez sur le bouton **Ajouter**.
    * Cliquez sur le bouton d'option **Utiliser Fréquence existante**.
    * Sélectionnez **End-of-Month-B** dans la liste déroulante.
    * Cliquez sur **Suivant**.
    * Cliquez sur le bouton **Prévisionnel** et notez que sur les mois indiqués, le Job s'exécutera le vendredi avant la fin du mois s'il tombe un week-end.
    * Fermez la boîte de dialogue **Prévisionnel** puis cliquez sur **Terminer** sur l'écran Assistant définition Fréquence.
    * Cliquez sur l'onglet **Définition Instance**.
    * Cliquez dans la zone **Définir Valeurs Propriété**.
    * Entrez : ```RUNTIME=20```
    * Cliquez sur **Ajouter** sur le côté droit du cadre Définir Valeurs Propriété.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Fermez l'onglet **Job Master**.

8. Configurez les dépendances de jobs entre les jobs container:

    * Sous le menu Administration, double-cliquez sur **Designer Workflow**.
    * Sélectionnez **Main-Schedule** dans la liste déroulante Sélectionner Schedule.
    * Dans la boite à outils cliquez sur **Ajouter une Dépendance**. 
    * Cliquez sur le job **Daily-Jobs**, puis sur **Monthly-Jobs**.
    * Sélectionnez **En exclusion** sous Type de Dépendance.
    * Cliquez sur **OK**.
    * Fermez l'onglet **Designer Workflow**.

<a href="imgbasic/433.png" target="_blank"><img src="imgbasic/433.png" width="250"></img></a>

9. Mettre au Plan le Schedule:
    * Sous le menu Operation, double-cliquez sur **Mise au Plan (Build)**.
      * Notez que les **deux sous-schedules _NE SONT PAS_ affichés dans la liste de sélection de schedule**.
    * Cliquez sur **Main-Schedule** et cliquez sur le bouton **Mise au Plan**.
    * Sur l'écran Propriétés Mise au Plan, laissez l'option **On Hold** sélectionnée et cliquez sur **OK**.
      * Cela créera le schedule On Hold pour aujourd'hui.
    * Cliquez à nouveau sur **Main-Schedule**.
    * A la date de Début de planification, sélectionnez le **dernier jour ouvré du mois**.
      * La **date de fin (Stop date)** doit être la même que la **date de début**. 
    * Cliquez sur le bouton **Mise au Plan**.
    * Sur l'écran Propriétés Mise au Plan, laissez **Released** et cliquez sur **OK**.
      * Cela mettra au plan le Schedule en Release **pour la fin du mois**.
    * Fermez la fenêtre Mise au Plan Schedules.
    * Accédez à la vue **List** ou **Matrix** sous la rubrique Operation ou utilisez **Solution Manager** pour vérifier les résultats.
    * **Releasez (liberez)** le Schedule pour aujourd'hui (si vous souhaitez voir les jobs en cours d'exécution).

</details>
