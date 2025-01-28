---
sidebar_label: 'Unité 3 Exercice 11'
hide_title: 'false'
---

### Exercice 11: Propriétés de l’instance

##### Objectif:

Dans **MY FIRST SCHEDULE**, créez une définition d'instance nommée ```RUNTIME``` avec une valeur de ```20```.

Ensuite, dans **Machines**, arrêtez la communication avec la machine ```SMATraining```. Ouvrez le panneau **Paramètres avancés (Advanced Settings)** et ajoutez une propriété nommée ```PathWindows``` avec une valeur de ```C:\Program Files\OpConxps\MSLSAM```.

Redémarrez la communication avec ```SMATraining```.

Sélectionnez **WINDOWS JOB 4** dans **MY FIRST SCHEDULE**. Mettez à jour la ligne de commande du Job à l'aide des **propriétés d'instance** nouvellement créées :

```
"[[PathWindows]]\genericp.exe" -t[[RUNTIME]] -e0
```

À

```
"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0
```

Re-mettre au plan **MY FIRST SCHEDULE**, écrasez et releasez pour aujourd'hui. Releasez **WINDOWS JOB 1** et **WINDOWS JOB 2**.

Une fois tous les Jobs exécutés avec succès, vérifiez La propriété (token) dans **Job Information > Configuration > Token Replacement Values** pour **WINDOWS JOB 4**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E11.mp4" type="video/mp4"></source>
Votre navigateur ne prend pas en charge la vidéo.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous la rubrique **Administration**, double-cliquez sur **Schedule Master**.
2. Dans le menu déroulant **Schedule Selection** sélectionnez **My First Schedule**.
3. Cliquez sur l'onglet **Définitions Instance** sous Détails Schedule.
4. Dans la zone de texte **Définir les valeurs de propriété**, tapez ```RUNTIME=20```.
5. Cliquez sur le bouton **Ajouter** à droite de la zone de texte **Définir les valeurs de propriété**.
6. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Schedule Master**.
7. Fermez le **Schedule Master**.
8. Sous la rubrique **Administration**, double-cliquez sur **Machines**.
9. Dans le menu déroulant **Sélectionner Machine**, sélectionnez ```SMATraining```.
10. Cliquez avec le bouton droit sur l'**icône de communication LSAM** sous Statut Communication SAM/LSAM et sélectionnez **Interrompre Communication**.
11. Cliquez sur le lien **Ouvrir le panneau Paramètres Avancés** juste au-dessus de Statut Communication SAM/LSAM.
12. Cliquez sur La ligne Available Property.
13. Cliquez sur le bouton **Ajouter**.
14. Tapez ```PathWindows=C:\Program Files\OpConxps\MSLSAM``` dans la zone de texte et cliquez sur **OK**.
15. Cliquez sur le bouton **Mise à jour**.
16. Cliquez sur le bouton **Sauvegarder**.
17. Cliquez avec le bouton droit de la souris sur l'icône de **Communication LSAM** sous **Statut Communication** et sélectionnez **Démarrer Communication**.
18. Fermez l'onglet **Machines**.
19. Sous **Administration**, cliquez sur **Job Master**.
20. Dans la liste déroulante **Schedule**, sélectionnez **My First Schedule**.
21. Dans la liste déroulante **Job**, sélectionnez **Windows Job 4**.
22. Mettez à jour votre ligne de commande pour utiliser les nouvelles propriétés en plaçant **Properties** pour pointer vers **les propriétés de l'instance** de la **machine** ou du **schedule** au lieu des **propriétés globales** :

```
"[[PathWindows]]\genericp.exe" -t[[RUNTIME]] -e0
```

À

```
"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0
```

23. Cliquez sur le bouton **Sauvegarder**.
24. Fermez le **Job Master**.
25. Si **My First Schedule** est en cours, **annulez (Cancel)** toutes les tâches.
26. Re-mettre au plan **My First Schedule** en release pour aujourd’hui.
27. Libérez le jobs **Windows Job 1** et **Windows Job 2**.
28. Vérifiez les résultats dans l'Enterprise Manager (vérifiez dans **Job Information> Configuration> Token Replacement Values** pour le **Windows Job 4**).

</details>
