---
sidebar_label: 'Unite 1 Exercice 8'
hide_title: 'false'
---

## Exercice 8: Modification d’un Job en Daily

##### Objectif: 

Mettre au Plan et lancer le Schedule **Murphy’s Law** pour aujourd'hui et les ```7 prochains jours```. 
Dans la vue Matrix, sélectionnez **Editer Job Daily** pour le job **« Wrong Path »**. Modifier le chemin d'accès de la ligne de commande et le Working Directory en remplaçant ```MSLSAM2``` par ```MSLSAM``` dans le path. Enregistrez la modification du job (en Daily), puis enregistrez la définition du job en Master.


Redémarrez le Job.

Dans la vue Matrix, sélectionnez la date de demain sur le calendrier et sélectionnez le Schedule nommé **Murphy’s Law**.
Sélectionnez **Editer Job Daily** pour le **job Wrong Path** et notez que ```MSLSAM2``` apparaît à nouveau. (Toutes les copies d’un job en Daily doivent être à nouveau Mises au Plan lorsque la définition principale (**Master Record**) est modifiée).

Fermez l'onglet Job Daily et ouvrez le Job Master pour vous assurer que les chemins contiennent la version corrigée de ```MSLSAM```.

Ouvrez l’outil Mise au Plan (Build) et re-mettez au Plan le Schedule **Murphy’s Law** pour les dates précédemment sélectionnées mais pas encore exécutées. Mettez au Plan le Schedule en **remplaçant** les versions précédentes**.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Mettre au Plan le Schedule nommé **Murphy’s Law**.
2. Sous la rubrique Opération, double-cliquez sur **Mise au Plan (Build)**.
3. Dans la section Schedule Sélection, sélectionnez **Murphy’s Law** pour le mettre au Plan.
4. Dans le champ Début, conservez la date du jour.
5. Dans le champ Fin, choisissez la date à ```7``` jours à compter d'aujourd'hui.
6. Cliquez sur le bouton Mise au Plan et sélectionner « Release » pour aujourd'hui dans la fenêtre « Propriétés Mise au Plan ».
7. Cliquez sur OK.
8. Fermez la fenêtre **Mise au Plan** Schedules.
9. Sous la rubrique Opération, double-cliquez sur la vue Liste ou Matrix.
10. Sélectionnez la date du jour.
11. Sélectionnez le Schedule nommé **Murphy’s Law**.
12. Cliquez avec le bouton droit sur le **job Wrong Path** 
  - (dans la vue PERT, cliquez avec le bouton droit de la souris sur le Job Wrong Path)
13. Sélectionnez Maintenance> Editer Job Daily 
  - (dans la vue PERT, allez dans Job> Maintenance> Editer Job Daily).
14. L'écran Job Daily apparaît.
15. Dans le chemin de la ligne de commande et dans celui du Working Directory, remplacez ```MSLSAM2``` 
par ```MSLSAM```.
16. Cliquez sur le bouton Save dans la barre d'outils Job Daily.
17. Cliquez sur le bouton « Sauver la Définition en Master » et confirmez l'action.
  - Cela poussera la modification que vous avez apportée au Job Daily sur sa définition en Master.
18. Fermez l'écran Job Daily.
19. Cliquez avec le bouton droit sur Job et sélectionnez Restart.
20. Entrez un commentaire et cliquez sur OK.
21. Le Job doit réussir car vous avez corrigé l’erreur dans la ligne de commande.
22. Sous la rubrique Operation, double-cliquez sur la vue Liste ou Matrice. Vous pouvez également ouvrir la vue PERT, si vous le souhaitez.
23. Sélectionnez la date de demain,
24. Sélectionnez Schedule **Murphy’s Law**.
25. Cliquez avec le bouton droit de la souris sur le job Wrong Path 
  - (dans la vue PERT, faire un clic droit sur le job Wrong Path) 
26. Sélectionnez Maintenance > Editer Job Daily 
  - (dans la vue PERT, allez dans Job> Maintenance> Editer Job Daily).
27. L'écran Job Daily apparaît.
28. Notez que le chemin contient toujours ``MSLSAM2`` au lieu de ``MSLSAM``.
  - N'oubliez pas que vous devez Remettre au Plan toutes les occurrences en Daily d’un job lorsque sa définition en Master est modifiée.
  - N'apportez aucun changement. Fermez simplement l'onglet Job Daily (Wrong Path).
29.	Revenez au Job Master et vérifiez que le chemin de la ligne de commande et le chemin du répertoire de travail ont été modifiés de MSLSAM2 à MSLSAM.
30. Fermez le Job Master.
31. Sous la rubrique Operation, double-cliquez sur Schedule Mise au Plan (Build).
32. Dans la section Sélection du Schedule, sélectionnez le Schedule Murphy’s Law.
33. Dans la section Dates de Planification :
  - Entrez les dates de début et de fin de la création couvrant la plage de dates pour lesquelles ce Schedule est déjà au Plan mais n'a pas été exécutée.

  ou

  - Cliquez sur le bouton Calendrier (à droite de la zone de texte) pour sélectionner la date dans le calendrier mensuel.
34. Cliquez sur le bouton **Mise au Plan**.
35. Dans la fenêtre **Propriétés Mise au Plan** :
  - Cliquez sur le bouton OK (laissez le bouton radio Released sélectionné).
  - Comme le schedule a déjà été créé pour ces dates, vous serez invité à remplacer ces versions. Cliquez sur Oui lorsque vous y êtes invité (pour chaque date).
36. Fermez l'écran Mise au Plan Schedules.
37. Une fois la Mise au Plan du schedule terminée, les nouveaux schedules quotidiens contiendront les définitions de job mises à jour.
38. Fermez tous les onglets, mais gardez Enterprise Manager ouvert.

</details>
