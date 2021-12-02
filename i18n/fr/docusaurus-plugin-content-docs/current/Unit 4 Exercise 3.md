---
sidebar_label: 'Unite 4 Exercice 3'
hide_title: 'false'
---

## Exercice 3: Thresholds - Events externes

##### Objectif: 

Dans **My Threshold Schedule**, créez un nouveau Job nommé **Threshold External Event Job**. Ce Job doit s'exécuter sur une fréquence de ```7 day``` avec la ligne de commande:

```
“C:\scripts\ExerciseThreshold.cmd” +1
```

Dans la vue Matrix, cliquez avec le bouton droit sur **My Threshold Schedule** et ajouter le job Threshold External Event en Released pour aujourd'hui.

Vérifiez la valeur de ```TrainingThreshold```.

Modifiez la ligne de commande du Job avec :

```
“C:\scripts\ExerciseThreshold.cmd” -1
```

Redémarrez le Job et, une fois terminé, vérifiez à nouveau la valeur de TrainingThreshold pour vérifier la réussite.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Ouvrez **Enterprise Manager**.
2. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
3. Sélectionnez **My Threshold Schedule** dans la liste déroulante Schedule.
4. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
5. Ajoutez un nouveau Job nommé **Threshold External Event Job**.
6. Configurez ce Job pour exécuter le **script** nommé ```ExerciseThreshold.cmd```, en passant ```+1``` en paramètre :
    * La ligne de commande doit être :
	```
	“C:\scripts\ExerciseThreshold.cmd” +1
	```
    * Le Job s'exécutera sur la machine ```SMATraining```
    * Utilisez l'ID utilisateur ```SMATRAINING\SMAUSER```
    * Ajoutez la fréquence ```Example-Mon-Sun-O``` au Job (reportez-vous à la définition du Job dans l'unité 1 pour obtenir de l'aide).
    * N'oubliez pas d'ajouter de la **documentation**.
7. Sous **Administration**, Double-cliquez sur **Thresholds**.
8. Sélectionnez TrainingThreshold dans la liste déroulante **Selectionner Threshold**.
9. Vérifiez la valeur. A ce moment, elle devrait être à ```0```.
10. Fermez l'onglet **Thresholds**.
11. Ouvrez l'une des vues Opérations (**Matrix** ou **List**).
12. Vérifiez si **My Threshold Schedule** est terminée (Completed).
    * S'il n'est pas terminé, annulez tous les Jobs.
    * Attendez que le Schedule soit **completed**.
13. Cliquez avec le bouton droit de la souris sur **My Threshold Schedule> Maintenance> Ajouter Jobs**.
14. Cochez la case **Threshold External Event Job**, puis cliquez sur **Ajouter Jo**b.
15. Sélectionnez le bouton radio **Released** et cliquez sur **Oui**.
16. Cliquez sur **Fermer**.
17. Attendez que le Job soit : **finished OK**
18. Sous **Administration**, Double-cliquez sur **Thresholds**.
19. Sélectionnez **TrainingThreshold** dans la liste déroulante **Selectionner Threshold**.
20. Vérifiez la valeur. A ce moment, ça devrait être une valeur de ```1```. Que s'est-il passé ?
    * Le Job s'est exécuté et a créé un fichier sous le dossier ```MSGIN```. Le fichier a envoyé l'event ```$THRESHOLD:SET,TrainingThreshold,+1``` en utilisant le compte OpCon ocadm et son mot de passe event (```opconxps```).
    * OpCon a reçu l'event et l'a traité. Il a mis à jour la valeur du Threshold : ```0 + 1 = 1```
21. Fermez l'onglet **Thresholds**.
22. Revenez à l'une de vos **vues d'opérations**.
23. Cliquez avec le bouton droit sur **Threshold External Event Job> Maintenance> Editer Daily Job**. 
24. Changez la **ligne de commande** comme ceci : ```“C:\scripts\ExerciseThreshold.cmd” -1```
25. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils de **Job Daily** (ne pas enregistrer le Job dans le Job Master).
26. Fermez l'onglet Job Daily (**Threshold External Event Job**).
27. Cliquez avec le bouton droit sur le Job et sélectionnez **Restart**.
28. Attendez que le Job soit **Finished OK**.
29. Sous **Administration**, Double-cliquez sur **Thresholds**.
30. Sélectionnez **TrainingThreshold** dans la liste déroulante Selectionner **Threshold**.
31. Vérifiez la valeur. A ce moment, il devrait être de retour sur ```0```. Que s'est-il passé ?
    * Le Job s'est exécuté et a créé un fichier sous le dossier ```MSGIN```. Le fichier a envoyé l' event ```$THRESHOLD:SET,TrainingThreshold,-1``` en utilisant le compte OpCon ```ocadm``` et son mot de passe event (```opconxps```).
    * OpCon a reçu l'event et l'a traité. Il a mis à jour la valeur du seuil : ```1 - 1 = 0```
32. Fermez l'onglet **Thresholds** 

</details>