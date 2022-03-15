---
sidebar_label: 'Unité 3 Exercice 14'
hide_title: 'false'
---

## Exercice 14: Events: critères d'échec

##### Objectif:

Dans Job Master, sélectionnez le Schedule **Exit Code Events** puis le job **Job 1**.

Sous l'onglet **Avancé**, définissez les **critères d'échec (Failure Criteria)** sur:

```Finish OK Si égal à 0```

Et / OU

```Finish OK Si égal à 100```

Ajoutez un nouvel event basé sur **Description Sortie** si la valeur est ```Egal à 100```. 

L'événement doit utiliser le modèle ```$JOB:SKIP``` pour ignorer **Job 2**.

Mettre au Plan  le schedule et affichez les résultats dans la vue Matrix.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E14.mp4" type="video/mp4"></source>
Votre navigateur ne prend pas en charge la vidéo.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
2. Dans la liste déroulante **Schedule**, sélectionnez **Exit Code Events**.
3. Dans la liste déroulante **Job**, sélectionnez **Job 1**.
4. Au bas de l'écran, cliquez sur l'onglet **Avancé**.
5. Modifiez le menu déroulant **Résultat D'Echec** à **Finish OK**.
    * Cela inversera la logique indiquant que le Job Sera OK si le Job se termine avec les **codes de sortie** listés.
6. Modifiez **Comparaison Operator** de ```inégal à ``` à ```égal à ``` en laissant la valeur définie sur ```0```.
7. Dans la deuxième ligne, modifiez le menu déroulant **Et / Ou** de **vide** à **Ou**.
8. Dans la deuxième ligne, modifiez **l'Opérateur de comparaison** de **vide** à ```égal à```.
9. Dans la deuxième ligne, modifiez **La valeur** de ```0``` à ```100```.
10. Cliquez sur le bouton **Sauvegarder** en haut à droite de l'écran.
11. Cliquez sur l'onglet **Events**.
12. Cliquez sur le bouton **Ajouter** dans le cadre Events.
13. Cliquez sur le bouton radio **Description Sortie** dans **l'Assistant définition Event**.
14. Cliquez sur **Suivant**.
15. Sélectionnez **Egal à** dans le menu déroulant **Opérateur de comparaison**.
16. Tapez dans la zone de texte Value ```100```.
17. Cliquez sur **Suivant**.
18. Sélectionnez le modèle ```$JOB:SKIP``` dans le menu déroulant Modèle Event.
19. Mettre à jour ```<Schedule date>``` avec ```[[$SCHEDULE DATE]]```
20. Mettre à jour ```<Schedule name>``` avec ```[[$SCHEDULE NAME]]```
21. Mettre à jour ```<Job name>``` avec ```Job 2```.
22. Les **paramètres d'événement (Event Parameters)** devraient ressembler à ceci : ```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],Job 2```
23. Cliquez sur le bouton **Terminer**.
24. Fermez l'onglet **Job Master**.
25. Sous la rubrique **Operations**, double-cliquez sur **Mise au Plan (Build)**.
26. Sélectionnez **Exit Code Events** dans Schedule Selection.
27. Cliquez sur le bouton **Mise au Plan**.
28. Sélectionnez le bouton radio **Released**.
29. Cliquez sur **OK**.
30. Ouvrez l'écran **Operations** de votre choix ( **Matrix** ou **Liste** ) ou utilisez le **Solution Manager** .
31. Notez que **Job Failure** du Job a échoué avec un **code de sortie** de ```100```.
32. Notez que **Job 1** doit se **terminer** avec un **code de sortie** ```100``` mais avec **Finish OK**.
33. Il doit également _ignorer_ le **Job 2**, ce qui permet au **Job 3** de s'exécuter.

</details>
