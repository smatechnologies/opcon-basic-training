---
sidebar_label: 'Unité 4 Exercice 4'
hide_title: 'false'
---

## Exercice 4: Script embarqué existant

##### Objectif:

Dans le **Schedule Embedded Scripts Training**, créez un Job Windows nommé **Create Daily Folder** avec une fréquence du lundi au vendredi. Le Job doit exécuter un **Job Action** ```Embedded Script```. Le script doit être ```Create_Folder``` en utilisant la version ```LATEST``` et avec le **Runner** ```Command Shell```.

Assurez-vous que la **Global System Property** ```$SCHEDULE DATEYYYYMM``` existe. Si ce n'est pas le cas, créez-la.

Mettre au plan le Schedule en Released pour aujourd'hui et vérifiez que le dossier sous ```"C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]"``` a été créé pour aujourd'hui.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E4.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous le menu Scripts, double-cliquez sur **Repository**.
2. Double-cliquez sur le script **Create Folder**. 
3. Double-cliquez sur la **dernière version** du script.
4. Le contenu des scripts sera affiché. Ce script vérifie si un dossier existe. S'il existe déjà, il sort sans rien faire. S'il n'existe pas, il créera le dossier.
5. Cliquez sur **Annuler** puis sur **Fermer**.
6. Fermez l'onglet **Script Repository**.
7. Sous le menu Administration, double-cliquez sur **Job Master**.
8. Dans la liste déroulante Schedule, sélectionnez **Embedded Scripts Training**.
9. Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
10. Dans la zone de texte **Nom**, entrez ```Create Daily Folder```.
11. Dans la liste déroulante Type de Job, sélectionnez **Windows**.
12. Dans la liste déroulante Machine Primaire, sélectionnez **SMATraining**.
13. Dans la liste déroulante Job Action, sélectionnez **Embedded Script**.
14. Dans le menu déroulant User ID, sélectionnez **SMATRAINING\SMAUSER**.
15. Dans la liste déroulante Script, sélectionnez le fichier **Create_Folder**.
16. Laissez la version comme **LATEST**.
17. Dans le menu déroulant Runner, sélectionnez **Command Shell**.
18. Dans la zone de texte Arguments, tapez ce qui suit :
```
"C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]"
```
19. Cliquez sur le bouton **Sauvegarder**.
20. Donnez au Job une fréquence de ```Mon-Fri-N```.
21. Ajoutez de la documentation, puis fermez le Job Master.
22. En dehors d'OpCon, vérifiez que le dossier suivant n'existe pas :
```
"C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]"
```
(```$SCHEDULE DATEYYYYMM``` fait référence au mois et année en cours)

23. Revenez à Enterprise Manager et Mettre au plan le **Schedule Embedded Scripts Training** en **Released** pour aujourd'hui.
24. Une fois le Job terminée, vérifiez que le dossier a été créé.

</details>
