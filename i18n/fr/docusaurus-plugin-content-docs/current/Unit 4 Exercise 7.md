---
sidebar_label: 'Unite 4 Exercice 7'
hide_title: 'false'
---

## Exercice 7: Sous-Schedule - Processus simultanés

##### Objectif:

Créez une **ressource** nommée ```ProcessFile``` avec une valeur **Ressource Max** de ```1```.

Créez un Schedule nommé **ProcessFile-Main Schedule**. Créez un nouveau Job nommé **Process File 1** dans ce Schedule et affectez **Repeating-SubSchedule** (créé dans l'exercice précédent) en tant que **Job Container** avec une fréquence du lundi au vendredi. Donnez au job une **dépendance ressources** sur avec une valeur de ```1```.

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

**Créer le Schedule primaire**

1. Sous la rubrique **Administration**, double-cliquez sur **Schedule Master**.
2. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Schedule Master**.
3. Dans la zone de texte **Nom**, entrez **ProcessFile-Main Schedule**.
4. Dans la zone de texte **Documentation**, entrez **Ceci est le schedule parent**.
5. Dans la zone **Heure démarrage**, notez la valeur par défaut ```00:00``` (minuit).
6. Conservez les valeurs par défaut sélectionnées pour **les jours ouvrés par semaine** pour l'exécution du schedule.
7. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Schedule Master** et fermez l'onglet **Schedule Master**.

**Créer une ressource**

8. Sous la rubrique **Administration**, double-cliquez sur **Ressources**.
9. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Ressources**.
10. Dans la zone de texte **Nom** entrez ```ProcessFile```.
11. Dans la zone de texte **Documentation**, entrez **Cette ressource est utilisée dans l'exercice ProcessFile SubSchedule**.
12. Dans la zone **Ressources Max**, entrez ```1```.
13. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Ressources** et fermez l'onglet **Ressources**.
14. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
15. Sélectionnez le Schedule **ProcessFile-Main**.
16. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
17. Dans la zone de texte **Nom**, entrez **Process File 1**.
18. Dans la liste déroulante **Type Job**, sélectionnez **Container**.
19. Dans la liste déroulante **Schedule à exécuter en tant que Sous-Schedule** sélectionnez **Repeating-SubSchedule**.

:::note Remarque
20.	_Ce sous-schedule peut être utilisé même s'il est utilisé dans un autre schedule_
:::

21. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
22. Cliquez sur l'onglet **Fréquence**.
23. Dans le cadre de la liste **Fréquence**, cliquez sur le bouton **Ajouter**.
24. Cliquez à l'intérieur du bouton d'option pour **Utiliser Fréquence existante**.
25. Sélectionnez ```Mon-Fri-N``` dans la liste déroulante.
26. Cliquez sur **Suivant**.
27. Cliquez sur **Terminé**.

**Dépendance des ressources de configuration**

28. Le **Job Master** étant toujours ouvert, cliquez sur l'onglet **Dépendances**.
29. Cliquez sur le sous-onglet **Threshold/Ressource Dependance**.
30. Cliquez sur le bouton **Ajouter** sous le sous-onglet **Threshold/Ressource Dependance**.
31. Sélectionnez la ressource **ProcessFile** dans le menu déroulant **Threshold/Ressource**.
32. Entrez la valeur de ```1``` dans la zone **Valeur**.
33. Cliquez sur **OK**.

**Créer des copies du Job container**

34.	Dans la barre d'outils **Job Master**, cliquez sur le bouton **Copie** ou appuyez sur **Ctrl + Insert**.
35. Nommez le job **Process File 2**.
36. Cliquez sur **OK**.
37. Répétez ces étapes pour créer le **Process File 3**, **Process File 4**, et **Process File 5**.
38. Fermez le **Job Master**.
39. Utilisez **Designer Workflow** pour vérifier que les 5 jobs sont liés à la ressource ```ProcessFile```.
40. Fermez le **Designer Workflow**.
41. Mettez au plan le **Schedule ProcessFile-Main Schedule (en Released)** pour aujourd'hui et vérifiez les résultats à l'aide des vues **Liste / Matrix** et de la vue **PERT**

<a href="imgbasic/432.png" target="_blank"><img src="imgbasic/432.png" width="500"></img></a>

</details>