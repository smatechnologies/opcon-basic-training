---
sidebar_label: 'Unite 3 Exercice 14'
hide_title: 'false'
---

## Exercice 14: Events: critères d'échec

##### Objectif:

Dans Job Master, parmi les schedules existant **Exit Code Events**, sélectionnez **Job 1**.

Sous l'onglet **Avanced**, définissez les **critères d'échec (Failure Criteria)** sur:

```Finish OK if Equal to 0```

Et / OU

```Finish OK if Equal to 100```

Ajoutez un nouvel event basé sur **Exit Description** si la valeur est ```Equal to 100```. 

L'événement doit utiliser le modèle ```$JOB:SKIP``` pour ignorer **Job 2**.

Construisez le schedule et affichez les résultats dans la vue matricielle.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E14.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
2. Dans la liste déroulante **Schedule**, sélectionnez **Exit Code Events**.
3. Dans la liste déroulante **Job**, sélectionnez **Job 1**.
4. Au bas de l'écran, cliquez sur l'onglet **Avanced**.
5. Modifiez le menu déroulant **Results de Fail** à **Finish OK**.
    * Cela inversera la logique indiquant que le Job ne se **terminera** que si le Job se termine avec les **codes de sortie** répertoriés.
6. Modifiez **Comparison Operator** de ```Not Equal To``` à ```Equal To``` en laissant la valeur définie sur ```0```.
7. Dans la deuxième ligne, modifiez le menu déroulant **Et / Ou** de **vide** à **OR**.
8. Dans la deuxième ligne, modifiez **Comparison Operator** de **vide** à ```Equal To```.
9. Dans la deuxième ligne, modifiez **Value** de ```0``` à ```100```.
10. Cliquez sur le bouton **Save** en haut à droite de l'écran.
11. Cliquez sur l'onglet **Events**.
12. Cliquez sur le bouton **Add** dans le cadre Events.
13. Cliquez sur le bouton radio **Exit Description** dans **Event Definition Wizard**.
14. Cliquez sur **Next**.
15. Sélectionnez **Egal To** dans le menu déroulant **Comparison Operator**.
16. Tapez dans la zone de texte Value ```100```.
17. Cliquez sur **Next**.
18. Sélectionnez le modèle ```$JOB:SKIP``` dans le menu déroulant Event Template.
19. Mettre à jour ```<Schedule date>``` avec ```[[$SCHEDULE DATE]]```
20. Mettre à jour ```<Schedule name>``` avec ```[[$SCHEDULE NAME]]```
21. Mettre à jour ```<Job name>``` avec **Job 2**.
22. Les **paramètres d'événement (Event Parameters)** devraient ressembler à ceci : ```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],Job 2```
23. Cliquez sur le bouton **Finish**.
24. Fermez l'onglet **Job Master**.
25. Sous la rubrique **Operations**, double-cliquez sur **Schedule Build**.
26. Sélectionnez Exit Code Events dans Schedule Selection.
27. Cliquez sur le bouton **Build**.
28. Sélectionnez le bouton radio **Released**.
29. Cliquez sur **OK**.
30. Ouvrez l'écran **Operations** de votre choix ( **Matrix** ou **List** ) ou utilisez **Solution Manager** .
31. Notez que **Job Failure** du Job a échoué avec un **code de sortie** de ```100```.
32. Notez que **Job 1** doit se **terminer** avec un **code de sortie** ```100``` mais avec **Finish OK**.
33. Il doit également _ignorer_ le **Job 2**, ce qui permet au **Job 3** de s'exécuter.

</details>