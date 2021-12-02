---
sidebar_label: 'Unite 4 Exercice 5'
hide_title: 'false'
---

## Exercice 5: Importer un script

##### Objectif:

Dans **Script Repository**, ajoutez un nouveau script nommé ```SetThreshold```. Importez le fichier ```ExerciseThreshold.cmd``` et sélectionnez le type ```Command Shell``` et en commentaire ```Version initiale```. Assurez-vous que le script est attribué à ```Role_ocadm```.

Dans le Schedule **Embedded Scripts Training** existant, créez un Job nommé ```ExerciseThreshold``` qui a une fréquence du lundi au vendredi. Le Job doit exécuter un **Job Action** ```Embedded Script```. Le script doit être le script ```SetThreshold``` utilisant la dernière version avec un **Runner** ```Command Shell```. Dans les  **Arguments**  mettre : ```+2```.

Dans la vue **Matrix**, cliquez avec le bouton droit de la souris sur le Schedule **Embedded Scripts Training** et ajoutez le job **ExerciseThreshold en Released** pour aujourd'hui.

Lorsque le Job est terminé, vérifiez la valeur du Threshold.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E5.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

:::note Remarque
Dans cet exercice, nous importerons un script créé dans l'Unité 3 dans la base de données OpCon
:::

1. Sous la rubrique **Scripts**, double-cliquez sur **Repository**.
2. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Script Repository**.
3. Tapez **SetThreshold** dans la zone de texte **Nom**.
4. Tapez de la **documentation** dans le champ Description.
5. Cliquez sur le bouton **Ouvrir un fichier**.
6. Accédez au dossier ```C:\Scripts```, sélectionnez le fichier ```ExerciseThreshold.cmd``` et cliquez sur **Ouvrir**.
7. Le script est chargé sur votre écran.
8. Sélectionnez ```Command Shell``` dans la liste déroulante **Type**.
9. Laissez **Version initiale** dans la zone de texte Commentaires initiaux.
10. Cliquez sur le bouton **Sauvegarder**.
11. Attribuez un **script** à un **rôle**. (Dans ce cas, laissez ```Role_ocadm``` comme rôle assigné).
12. Fermez l'onglet **Scripts Repository**.
13. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
14. Dans la liste déroulante **Schedule**, sélectionnez **Embedded Scripts Training**.
15. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
16. Dans la zone de texte Nom, entrez ```ExerciseThreshold```.
17. Dans la liste déroulante **Type de Job**, sélectionnez ```Windows```.
18. Dans la liste déroulante **Machine Primaire**, sélectionnez le fichier ```SMATraining```.
19. Dans la liste déroulante **Job Action**, sélectionnez ``Embedded Script``.
20. Dans le menu déroulant **User ID**, sélectionnez ```SMATRAINING\SMAUSER```.
21. Dans la liste déroulante **Script**, sélectionnez le fichier ```SetThreshold```.
22. Laissez la **version** comme ```LATEST```.
23. Dans le menu déroulant **Runner**, sélectionnez ```Command Shell```.
24. Dans la zone de texte **Arguments**, tapez :```+2``.`
25. Cliquez sur le bouton **Sauvegarder**.
26. Donnez au Job une fréquence de ```Mon-Fri-N```.
27. Ajoutez de la **documentation**, puis fermez le **Job Master**.
28. Ouvrez les **Thresholds** et vérifiez la valeur actuelle du **TrainingThreshold**. Ça devrait être de ```0```.
29. Fermez l’onglet **Thresholds**.
30. Accédez à l'un des écrans d'opérations, cliquez avec le bouton droit de la souris sur le **Schedule Embedded Scripts Training > Maintenance> Ajouter Jobs**.
31. Sélectionnez le Job **ExerciseThreshold** et cliquez sur **Ajouter Job**.
32. Sélectionnez le bouton radio **Released** et cliquez sur **Oui**.
33. Cliquez sur **Fermer**.
34. Une fois le Job terminé, ouvrez les** Threshold** et vérifiez la valeur. Il doit être indiqué : ```2```.
35. Fermez l'onglet **Thresholds**.
36. Pour vous entraîner, Editez le Job Daily en remettant le **paramètre** à ```0```, redémarrez le job et vérifiez à nouveau le **Threshold**.

</details>