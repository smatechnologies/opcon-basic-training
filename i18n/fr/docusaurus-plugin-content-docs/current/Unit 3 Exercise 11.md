---
sidebar_label: 'Unite 3 Exercice 11'
hide_title: 'false'
---

### Exercice 11: Propriétés de l’instance

##### Objectif:

Dans **MY FIRST SCHEDULE**, créez une définition d'instance nommée ```RUNTIME``` avec une valeur de ```20```.

Ensuite, dans **Machines**, arrêtez la communication avec la machine ```SMATraining```. Ouvrez le panneau **Paramètres avancés (Advanced Settings)** et ajoutez une propriété nommée ```PathWindows``` avec une valeur de ```C:\Program Files\OpConxps\MSLSAM```.

Redémarrez la communication avec ```SMATraining```.

Sélectionnez **WINDOWS JOB 4** dans **MY FIRST SCHEDULE**. Mettez à jour la ligne de commande du Job à l'aide des **propriétés d'instance** nouvellement créées :

```
“[[PathWindows]]\genericp.exe” -t[[RUNTIME]] -e0
```

À

```
“[[MI.PathWindows]]\genericp.exe” -t[[SI.RUNTIME]] -e0
```

Reconstruisez **MY FIRST SCHEDULE**, écrasez et publiez pour aujourd'hui. Libérez **WINDOWS JOB 1** et **WINDOWS JOB 2**.

Une fois tous les Jobs exécutés avec succès, vérifiez Property/Token success dans **Job Information > Configuration > Token Replacement Values** pour **WINDOWS JOB 4**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E11.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous la rubrique **Administration**, double-cliquez sur **Schedule Master**.
2. Dans le menu déroulant **Schedule Selection** sélectionnez **My First Schedule**.
3. Cliquez sur l'onglet **Instance Definition** sous Schedule Details.
4. Dans la zone de texte **Définir les valeurs de propriété**, tapez ```RUNTIME=20```.
5. Cliquez sur le bouton **Add** à droite de la zone de texte **Définir les valeurs de propriété**.
6. Cliquez sur le bouton **Save** dans la barre d'outils **Schedule Master**.
7. Fermez le **Schedule Master**.
8. Sous la rubrique **Administration**, double-cliquez sur **Machines**.
9. Dans le menu déroulant **Select machine**, sélectionnez ```SMATraining```.
10. Cliquez avec le bouton droit sur l'**icône de communication LSAM** sous Communication Status et sélectionnez **Stop Communication**.
11. Cliquez sur le lien **Open Advanced Settings Panel** juste au-dessus de Communication Status.
12. Cliquez sur Available Property row.
13. Cliquez sur le bouton **Add**.
14. Tapez ```PathWindows=C:\Program Files\OpConxps\MSLSAM``` dans la zone de texte et cliquez sur **OK**.
15. Cliquez sur le bouton **Update**.
16. Cliquez sur le bouton **Save**.
17. Cliquez avec le bouton droit de la souris sur l'icône de **LSAM Communication** sous **Communication Status** et sélectionnez Start **Communication**.
18. Fermez l'onglet **Machines**.
19. Sous **Administration**, cliquez sur **Job Master**.
20. Dans la liste déroulante **Schedule**, sélectionnez **My First Schedule**.
21. Dans la liste déroulante **Job**, sélectionnez **Windows Job 4**.
22. Mettez à jour votre ligne de commande pour utiliser les nouvelles propriétés en plaçant **Properties** pour pointer vers **les propriétés de l'instance** de la **machine** ou du **schedule** au lieu des **propriétés globales** :

```
“[[PathWindows]]\genericp.exe” –t[[RUNTIME]] –e0
```

À

```
“[[MI.PathWindows]]\genericp.exe” –t[[SI.RUNTIME]] –e0
```

23. Cliquez sur le bouton **Save**.
24. Fermez le **Job Master**.
25. Si **My First Schedule** est en cours, **annulez (Cancel)** toutes les tâches.
26. Reconstruisez **My First Schedule** publié pour aujourd'hui.
27. Libérez le **Windows Job 1** et le **Windows Job 2**.
28. Vérifiez les résultats d'Enterprise Manager (vérifiez les **Job Information> Configuration> Token Replacement Values** pour le **Windows Job 4**).

</details>
