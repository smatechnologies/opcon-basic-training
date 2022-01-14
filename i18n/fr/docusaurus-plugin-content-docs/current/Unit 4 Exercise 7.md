---
sidebar_label: 'Unité 4 Exercice 7'
hide_title: 'false'
---

## Exercice 7: Sous-Schedule - Processus simultanés

##### Objectif:

Créez une **ressource** nommée ```ProcessFile``` avec une valeur **Ressource Max** de ```1```.

Créez un Schedule nommé **ProcessFile-Main Schedule**. Créez un nouveau Job nommé **Process File 1** dans ce Schedule et affectez **Repeating-SubSchedule** (créé dans l'exercice précédent) en tant que **Job Container** avec une fréquence du lundi au vendredi. Donnez au job une **dépendance ressources** avec une valeur de ```1```.

Copiez le job **Process File 1** pour créer ```4``` autres Job avec le même modèle de dénomination.

Mettre au plan le Schedule en Released pour aujourd'hui et affichez les résultats dans la vue Matrix.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E7.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Créez le Schedule principal:
    * Sous la rubrique Administration, double-cliquez sur **Schedule Master**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Schedule Master.
    * Dans la zone de texte Nom, entrez ```ProcessFile-Main Schedule```.
    * Dans la zone de texte Documentation, entrez ```Ceci est le schedule parent```.
    * Dans la zone Heure démarrage, notez la valeur par défaut ```00:00``` (minuit).
    * Conservez les valeurs par défaut sélectionnées pour **les jours ouvrés par semaine** pour l'exécution du schedule.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Schedule Master et fermez l'onglet Schedule Master.

2. Créez une ressource:
    * Sous la rubrique Administration, double-cliquez sur **Ressources**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Ressources.
    * Dans la zone de texte Nom entrez ```ProcessFile```.
    * Dans la zone de texte Documentation, entrez ```Cette ressource est utilisée dans l'exercice ProcessFile SubSchedule```.
    * Dans la zone Ressources Max, entrez ```1```.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Ressources et fermez l'onglet Ressources.
  
3. Créez le job container: 
    * Sous la rubrique Administration, double-cliquez sur **Job Master**.
    * Sélectionnez le Schedule **ProcessFile-Main**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom, entrez ```Process File 1```.
    * Dans la liste déroulante Type Job, sélectionnez **Container**.
    * Dans la liste déroulante Schedule à exécuter en tant que Sous-Schedule, sélectionnez **Repeating-SubSchedule**.  
  
  
:::note Remarque  
    _Ce sous-schedule peut être utilisé même s'il est utilisé dans un autre schedule_  
:::  
  
  *  
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre de la liste Fréquence, cliquez sur le bouton **Ajouter**.
    * Cliquez à l'intérieur du bouton d'option pour **Utiliser Fréquence existante**.
    * Sélectionnez **Mon-Fri-N** dans la liste déroulante.
    * Cliquez sur **Suivant**.
    * Cliquez sur **Terminé**.

4. Configuration de la Dépendance Ressource:
    * Le Job Master étant toujours ouvert, cliquez sur l'onglet **Dépendances**.
    * Cliquez sur le sous-onglet **Threshold/Ressource Dependance**.
    * Cliquez sur le bouton **Ajouter** sous le sous-onglet Threshold/Ressource Dependance.
    * Sélectionnez la ressource **ProcessFile** dans le menu déroulant Threshold/Ressource.
    * Entrez la valeur de ```1``` dans la zone Valeur.
    * Cliquez sur **OK**.

5. Créez des copies du Job container:
    * Dans la barre d'outils Job Master, cliquez sur le bouton **Copie** ou appuyez sur **Ctrl + Insert**.
    * Nommez le job ```Process File 2```.
    * Cliquez sur **OK**.
    * Répétez ces étapes pour créer les jobs **Process File 3**, **Process File 4** et **Process File 5**.
    * Fermez le **Job Master**.
    * Utilisez le **Designer Workflow** pour vérifier que les 5 jobs sont liés à la ressource ProcessFile.
    * Fermez le **Designer Workflow**.
    * Mettez au plan le Schedule **ProcessFile-Main Schedule** (en **Released**) pour aujourd'hui et vérifiez les résultats à l'aide des vues **Liste / Matrix** et de la vue **PERT**

<a href="imgbasic/432.png" target="_blank"><img src="imgbasic/432.png" width="500"></img></a>

</details>
