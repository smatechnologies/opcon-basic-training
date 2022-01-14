---
sidebar_label: 'Unité 4 Exercice 6'
hide_title: 'false'
---

## Exercice 6: Sous-Schedule - Plusieurs exécutions

##### Objectif:

Créez un Schedule nommé **Repeating-SubSchedule** avec une **définition d'instance** ```RUNTIME=10```. Marquez le Schedule comme **sous-schedule (SubSchedule)**.

Dans **Repeating-SubSchedule**, créez cinq Jobs **Windows** quotidiens avec le modèle de dénomination **Daily Job 1**. Les Jobs doivent s'exécuter sur une fréquence du lundi au vendredi et exécuter le programme ```genericp```. Créez une **chaîne de dépendances** linéaire entre les 5 Jobs.

Ensuite, créez un Schedule nommé **Repeating-Schedule-Primary**.

Dans le schedule **Repeating-Schedule-Primary**, créez 4 jobs nommés **0700 Job**, **1000 Job**, **1400 Job** et **1900 Job**. Chaque Job doit s'exécuter sur une fréquence du lundi au vendredi et exécuter le schedule **Repeating-SubSchedule** en tant que **Job Container**.

Chaque job doit avoir un **Ecart temps de soumission (Start Offset)** égal au nom du Job.

Mettre au Plan le schedule **Repeating-Schedule-Primary** ```On Hold```. Afficher le schedule dans la vue Matrix. Libéré (Release) le schedule et laissez les jobs s'exécuter pour vérifier les résultats.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E6.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Créez le sous-schedule: 
    * Sous le menu Administration, double-cliquez sur **Schedule Master**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Schedule Master.
    * Dans la zone de texte Nom, entrez ```Repeating-SubSchedule```.
    * Dans la zone de texte Documentation, entrez ```C'est un sous-schedule```.
    * Dans la zone Heure Démarrage, notez la valeur par défaut ```00:00``` (minuit).
    * Conservez les valeurs par défaut sélectionnées pour les jours ouvrés par semaine pour l'exécution du schedule.
    * Dans le cadre Propriétés Schedule, cochez la case **Sous-Schedule**.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Schedule Master.
    * Cliquez sur l'onglet **Définition d'instance** et saisissez l'instance dans le champ Définir les valeurs de propriété : ```RUNTIME=10```.
    * Appuyez sur le bouton **Ajouter**.
    * **Sauvegarder** Repeating-SubSchedule et fermez l'onglet Schedule Master.

2. Ajouter des jobs au sous-schedule: 
    * Sous la rubrique Administration, double-cliquez sur **Job Master**.
    * Sélectionnez le schedule **Repeating-SubSchedule**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom entrez **Daily Job 1**.
    * Dans la liste déroulante Type de Job, sélectionnez **Windows **.
    * Dans la liste déroulante Machine primaire, sélectionnez la machine **SMATraining**.
    * Dans la liste déroulante User ID, sélectionnez **SMATRAINING\SMAUSER**.
    * Dans Command Line, tapez **Ctrl + F** et sélectionnez la **ligne de commande** qui ressemble à ceci : ```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre de la liste Fréquence, cliquez sur le bouton **Ajouter**.
    * Cliquez à l'intérieur du bouton d'option **Utiliser Fréquence existante**.
    * Dans la liste déroulante Fréquence sélectionnez **Mon-Fri-N**.
    * Cliquez sur **Suivant**.
    * Cliquez sur le bouton **Terminé**.
    * Ajoutez de la documentation au Job.
    * Dans la barre d'outils Job Master, assurez-vous que vous avez sélectionné **Repeating-SubSchedule** et cliquez sur le bouton **Copie** ou appuyez sur **Ctrl + Insérer**.
    * Nommez le Job : **Daily Job 2**.
    * Cliquez sur **OK**.
    * Modifiez la documentation si nécessaire.
    * Répétez les étapes 27 à 30 pour créer des jobs **Daily Job 3**, **Daily Job 4** et **Daily Job 5**.
    * Fermez l'onglet **Job Master** et utilisez **Designer Workflow** pour créer des **dépendances**.
    * Fermez l'onglet **Designer Workflow** lorsque vous avez terminé.

3. Créer le Primary Schedule: 
    * Sous la rubrique Administration, double-cliquez sur **Schedule Master**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Schedule Master.
    * Dans la zone de texte Nom entrez ```Repeating-Schedule-Primary```.
    * Dans la zone de texte **Documentation**, entrez ```Ceci est le schedule principal pour l'exemple de sous-schedule répété```.
    * Dans Heure démarrage, notez la valeur par défaut ```00:00``` (minuit).
    * Conservez la valeur par défaut sélectionnée pour les Jours ouvrés par semaine pour l'exécution du schedule.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Schedule Master.
    * Fermez l'onglet **Schedule Master**. 

4. Ajoutez le sous-schedule en tant que Job container dans Primary Schedule: 
    * Sous la rubrique Administration, double-cliquez sur **Job Master**.
    * Sélectionnez **Repeating-Schedule-Primary** dans la liste déroulante Schedule.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom entrez ```0700 Job```.
    * Dans la liste déroulante Type de Job, sélectionnez **Container**.
    * Dans la liste déroulante Schedule à exécuter en tant que Sous-Schedule sélectionnez **Repeating-SubSchedule**.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre Liste Fréquence, cliquez sur le bouton **Ajouter**.
    * Cliquez à l'intérieur du bouton d'option **Utiliser Fréquence existante**.
    * Dans la liste déroulante Fréquence, sélectionnez **Mon-Fri-N**.
    * Cliquez sur **Suivant** puis sur **Terminé**.
    * Dans la zone Ecart temps de soumission, entrez ```07:00```.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Documentation**.
    * Dans la zone de texte Documentation, saisissez ```Ceci est un Job conteneur contenant les Jobs quotidiens```.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Toujours dans la barre d'outils Job Master, cliquez sur le bouton **Copie**.
    * Nommez le job ```1000 Job```.
    * Cliquez sur **OK**.
    * Cliquez sur l'onglet **Fréquence**.
    * Mettre à jour l'Ecart temps de soumission à ```10:00``` et **Sauvegarder** le Job.
    * Répétez les étapes 59 à 63 pour créer **Job 1400** et **Job 1900** s'exécutant sur ```14:00``` et ```19:00```. Vous modifierez les Ecart temps de soumission pour ces jobs. Modifiez la documentation si nécessaire.
    * Fermer tous les onglets.

5. Mettez au plan le Schedule:
    * Sous le menu Operation, double-cliquez sur **Mise au plan (Build)**.
    * Le sous-Schedule est-il visible ? Pourquoi ?
    * Cliquez sur **Repeating-Schedule-Primary** et cliquez sur le bouton **Mise au Plan**.
    * Sur l'écran Propriétés Mise au Plan, laissez **On Hold** sélectionnée et cliquez sur **OK**. Cela créera le schedule pour aujourd'hui seulement.
    * Fermez l'écran Mise au Plan Schedules.
    * Sous Operations, ouvrez la vue **Liste** ou **Matrix** ou utilisez le **Solution Manager** pour vérifier les résultats.
    * **Libérez (Released) le Schedule** et laissez les jobs s'exécuter.

</details>
