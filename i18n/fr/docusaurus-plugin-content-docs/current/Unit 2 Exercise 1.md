---
sidebar_label: 'Unité 2 Exercice 1'
hide_title: 'false'
---

## Exercice 1: définir une Global Property

##### Objectif:

Créez deux Global Properties:

```RUNTIME``` – Valeur : ```10```

```PathWindows``` – Valeur : ```C:\Program Files\OpConxps\MSLSAM```


Pour chacun des jobs de **MY FIRST SCHEDULE**, remplacez le texte saisi en dur par les propriétés nouvellement créées :

```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t20```

Devient:

```"[[PathWindows]]\genericp.exe" -t[[RUNTIME]]```

Remettez au plan **MY FIRST SCHEDULE**, en écrasant pour aujourd'hui. Affichez votre Schedule dans la vue MATRIX et faites un clic droit sur **WINDOWS JOB 1** pour voir la fenêtre **Job Information**. Cliquez sur l’onglet **Configuration** et vérifiez les informations > **Token Replacement Values**.

Vérifiez que les valeurs appropriées sont attribuées aux propriétés utilisées.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E1.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Création des 2 Global Properties:
    - Sous la rubrique Administration, double-cliquez sur **Global Properties**.
    - Cliquez sur le bouton **Ajouter** dans la barre d'outils Global Properties.
    - Dans la zone de texte **Nom**, saisissez ```RUNTIME```.
    - Ajoutez cette **documentation** : ```Cette Global Property contient le nombre de secondes durant lesquelles le programme s’exécutera```.
    - Dans la zone de texte **Valeur**, saisissez ```10```.
      - **Ne cochez pas la case Crypté**.
    - Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Global Properties.
    - Cliquez sur le bouton **Ajouter** dans la barre d'outils.
    - Dans la zone de texte **Nom**, saisissez ```PathWindows```.
    - Ajoutez de la documentation à la Global Property.
    - Dans la zone de texte **Valeur**, tapez: ```C:\Program Files\OpConxps\MSLSAM```
    - Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Global Properties.
    - Fermez l'onglet Global Properties.
2. Utilisation des Global Properties dans les jobs:
    - Sous Administration, cliquez sur **Job Master**.
    - Dans la liste déroulante Schedule, sélectionnez **My First Schedule**.
    - Dans la liste déroulante Job, sélectionnez **Windows Job 1**.
    - Mettez à jour votre ligne de commande pour utiliser les nouvelles propriétés à la place du texte codé en dur. Modifiez ```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" –t20``` en ```"[[PathWindows]]\genericp.exe" –t[[RUNTIME]]```
     - Cliquez sur le bouton **Sauvegarder**.
    - Répétez l'opération pour **Windows Job 2** à **Windows Job 5**.
    - Fermez l'onglet **Job Master**.
3. Mise au plan des jobs:
    - Ouvrez la vue **List** ou la vue **matrix**.
    - Accédez à la date actuelle.
    - Vérifiez que **My First Schedule** est terminée.
      -  **Sinon, nous devons annuler tous les jobs pour fermer le schedule**.
    - Ouvrez l'écran **Mise au Plan (Build)**.
    - Sélectionnez **My First Schedule** dans la case Schedule Selection.  
    - Cochez la case **Ecraser Schedules existants**.
    - Appuyez sur le bouton **Mise au plan**.
    - Sélectionnez **Released**.
    - Cliquez sur le bouton **OK**.
    - Fermez l'écran **Mise au Plan Schedules**.
    - Ouvrez la vue **Liste** ou la vue **Matrix**.
4. Affichage des jobs en daily et vérification des valeurs:
    - Accédez à la date du jour.
    - Développez (si dans la vue Liste) ou cliquez sur la date (si dans la vue Matrix) et sélectionnez **My First Schedule**.
    - Vérifiez que tous les jobs sont Finished OK.
    - Cliquez avec le bouton droit sur **Windows Job 1**.
    - Sélectionnez **Job Information**.
    - Cliquez sur l'onglet **Configuration**.
    - Cliquez sur la ligne **Token Replacement Values** dans la grille.
    - Vérifiez que la valeur correcte a été attribuée à chaque propriété globale dans la ligne Valeur.
    - Cliquez sur **OK** et fermez la vue **Liste/ Matrix**.

</details>
