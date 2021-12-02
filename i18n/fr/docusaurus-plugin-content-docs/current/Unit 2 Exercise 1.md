---
sidebar_label: 'Unite 2 Exercice 1'
hide_title: 'false'
---

## Exercice 1: définir une Global Property

##### Objectif:

Créez deux Global Properties:

```RUNTIME``` – Valuer : ```10```

```PathWindows``` – Valuer : ```C:\Program Files\OpConxps\MSLSAM```


Pour chacun des jobs de **MY FIRST SCHEDULE**, remplacez le texte saisi en dur par les propriétés nouvellement créées :

```“C:\Program Files\OpConxps\MSLSAM\genericp.exe” -t20```

Devient:

```“[[PathWindows]]\genericp.exe” -t[[RUNTIME]]```

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

1. Sous la rubrique **Administration**, double-cliquez sur **Global Properties**.
2. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Global Properties**.
3. Dans la zone de texte **Nom**, saisissez ```RUNTIME```.
4. Ajoutez cette **documentation** : Cette **Global Property** contient le nombre de secondes durant lesquelles le programme s’exécutera.
5. Dans la zone de texte **Valeur**, saisissez ```10```.
    * **Ne cochez pas la case Crypté**.
6. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Global Properties**.
7. Cliquez sur le bouton **Ajouter** dans la barre d'outils.
8. Dans la zone de texte **Nom**, saisissez ```PathWindows```.
9. Ajoutez de la documentation à la **Global Property**.
10.	Dans la zone de texte **Valeur**, tapez:

```C:\Program Files\OpConxps\MSLSAM```

11. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Global Properties**.
12. Fermez l'onglet **Global Properties**.
13. Sous **Administration**, cliquez sur **Job Master**.
14. Dans la liste déroulante Schedule, sélectionnez **My First Schedule**.
15. Dans la liste déroulante **Job**, sélectionnez **Windows Job 1**.
16. Mettez à jour votre ligne de commande pour utiliser les nouvelles propriétés à la place du texte hard-coded. Modifiez ce qui suit :

```“C:\Program Files\OpConxps\MSLSAM\genericp.exe” –t20```  

En:

```“[[PathWindows]]\genericp.exe” –t[[RUNTIME]]```

17. Cliquez sur le bouton **Sauvegarder**.
18. Répétez l'opération pour **Windows Job 2** à **Windows Job 5**.
19. Fermez l'onglet **Job Master**.
20. Ouvrez la vue **List** ou la vue **matrix**.
21. Accédez à la date actuelle.
22. Vérifiez que **My First Schedule** est terminée.
    * **Sinon, nous devons annuler tous les jobs pour fermer le schedule**.
23. Ouvrez l'écran **Mise au Plan (Build)**.
24. Sélectionnez **My First Schedule** dans la case **Schedule Selection**  
25. Cochez la case **Ecraser Schedules existants**.
26. Appuyez sur le bouton **Mise au plan**.
27. Sélectionnez **Released**.
28. Cliquez sur le bouton **OK**.
29. Fermez l'écran **Mise au Plan Schedules**.
30. Ouvrez la vue **Liste** ou la vue **Matrix**.
31. Accédez à la date du jour.
32. Développez (si dans la vue **Liste**) ou cliquez sur la date (si dans la vue **Matrix**) et sélectionnez **My First Schedule**.
33. Vérifiez que tous les jobs sont **Finished OK**.
34. Cliquez avec le bouton droit sur **Windows Job 1**.
35. Sélectionnez **Job Information**.
36. Cliquez sur l'onglet **Configuration**.
37. Cliquez sur la ligne **Token Replacement Values** dans la grille.
38. Vérifiez que la valeur correcte a été attribuée à chaque propriété globale dans la ligne Valeur.
39. Cliquez sur **OK** et fermez la vue **Liste/ Matrix**

</details>