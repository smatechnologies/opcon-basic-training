---
sidebar_label: 'Unite 4 Exercice 1'
hide_title: 'false'
---

## Exercice 1: Ressources

##### Objectif: 

Créez une **ressource** nommée ```TrainingResource``` avec une valeur **Ressources max** de ```4```.

Créez un Schedule nommé **My Resources Schedule**.

Créez un Job Windows nommé **Resource Use 2 Job A** qui exécute le programme générique sur une fréquence de ```7 day```. Attribuez au Job une dépendance de ressource sur ```TrainingResource``` avec une valeur de ```2```.

Copiez ou créez des Jobs supplémentaires nommés **Resource Use 2 Job B** et **Resource Use 4 Job**.

Modifiez **Resource Use 4 Job** pour ajouter une dépendance de ressource sur ```TrainingResource``` avec une valeur de ```4```.

Créez une notification sous un groupe racine nommé ```ExerciseResource``` qui enverra un e-mail à ```smauser@congo.local``` pour chaque Job **Finished OK**:

Objet : Ressources utilisées pour la ```TrainingResource``` lorsque ```[[$JOB NAME]]``` est Finished OK Message: Nombre de ressources pour la ressource

```
TrainingResource=>[[RU.TrainingResource]]/[[RM.TrainingResource]]
```

Mettre au Plan le Schedule en Released pour aujourd'hui. Affichez les résultats dans La vue Matrix ou Solution Manager.

Ouvrez **Thunderbird** pour vérifier les notifications.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E1.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous la rubrique **Administration**, double-cliquez sur **Ressources**.
2. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Ressources**.
3. Dans la zone de texte **Nom**, tapez **TrainingResource**, tapez de la documentation et dans **Ressources Max** entrez une valeur de ```4```.
4. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Ressources. Fermez l'onglet **Ressources**.
5. Sous la rubrique Administration, double-cliquez sur **Schedule Master**.
6. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Schedule Master**.
7. Créer un nouveau Schedule appelé **My Resources Schedule**.
8. Utilisez ces paramètres pour le Schedule :
    * Du lundi au dimanche sont des jours ouvrés
    * N'utilisez **PAS** le Master Holiday
    * **Mise au Plan automatique** ```7``` jours à l'avance pour ```1``` jours
    * **Suppression automatique** ```7``` Jours  en arrière
    * Ajoutez de la **documentation** à votre schedule.
9. Fermez le **Schedule Master** et ouvrez le **Job Master** pour ajouter vos Jobs.
10. Sélectionnez le **My Resources Schedule**.
11. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
12. Ajoutez un nouveau Job nommé **Resource Use 2 Job A** pour exécuter le programme ```Genericp.exe``` pendant ```20``` secondes sur la machine ```SMATraining``` à l'aide de l'ID utilisateur ```SMATRAINING\SMAUSER``` et ajoutez la fréquence **Mon-Sun-O** au Job (reportez-vous à la définition du Job dans l'Unité 1 pour obtenir de l'aide). Ajouter de la **documentation**.
13. Créez une **Threshold/Ressource Dépendance** :
    * Cliquez sur l'onglet **Dépendances**
    * Cliquez sur l'onglet **Threshold/Ressource Dépendance**
    * Dans le cadre **Threshold/Ressource Dépendance**, cliquez sur le bouton **Ajouter**.
    * Dans la liste déroulante **Threshold/Ressource** sélectionnez **TrainingResource**.
    * Dans la zone de texte **Valeur**, saisissez ```2```.
    * Cliquez sur le bouton **OK**
14. Cliquez sur le bouton **Copie** de la barre d'outils **Job Master** pour copier ce Job.
15. Nommez le nouveau Job **Resource Use 2 Job B**. Changez la documentation si nécessaire.
16. Cliquez sur le bouton **Copie** de la barre d'outils **Job Master** pour copier ce Job.
17. Nommez le nouveau Job **Resource Use 4 Job**. Changez la documentation si nécessaire.
18. Assurez-vous que vous avez sélectionné **Resource Use 4 Job**.
	* Cliquez sur l'onglet **Dépendances**
	* Cliquez sur l'onglet **Threshold/Resource Dépendance**.
	* Dans le cadre **Threshold/Resource** Dépendance, double-cliquez sur la dépendance **Threshold/Resource** qui a été copiée à partir du Job précédent.
	* Vérifiez si la liste déroulante **Threshold/Resource** contient **TrainingResource**.
	* Remplacez la zone de texte **Valeur** par ```4```.
	* Cliquez sur le bouton **OK**
19. Fermez le **Job Master**.
20. Sous **Gestion**, double-cliquez sur **Gestionnaire de Notification** et cliquez sur l'onglet **Jobs**.
21. Créez un **nouveau groupe root** appelé **ExerciseResource** (cliquez avec le bouton droit de la souris et sélectionnez **Ajouter un groupe root**).
22. Cochez la case **My Resources Schedule** (sur le côté droit de l'écran), puis cliquez sur le bouton **Sauvegarder**.
23. Cliquez avec le bouton droit sur le groupe **ExerciseResource** et sélectionnez **Ajouter Déclenchement Job > Job Running**.
24. Cochez la case **Envoyer Email (SMTP)**.
25. Cliquez sur l'onglet **Email** et configurez la configuration pour envoyer des e-mails en fonction des éléments suivants :
    * À : ```smauser@congo.local```
    * Objet : Ressources utilisées pour **TrainingResource** lors de l'exécution de ```[[$JOB NAME]]```
    * Message : Nombre de ressources pour la ressource TrainingResource => ```[[RU.TrainingResource]]/[[RM.TrainingResource]]```
26. Cliquez sur le bouton **Sauvegarder**.
27. Cliquez avec le **bouton** droit sur le groupe **ExerciseResource** et sélectionnez **Ajouter Déclenchement Job > Job Finished OK**.
28. Cochez la case Envoyer **Email (SMTP)**.
29. Cliquez sur l'onglet Email et configurez la configuration pour envoyer des e-mails en fonction des éléments suivants :
    * À : ```smauser@congo.local```
    * Objet : Ressources utilisées pour la formation Ressource lorsque l’exécution ```[[$JOB NAME]]``` est terminé OK
	* Message: Number of Resources for resource TrainingResource=> ```[[RU.TrainingResource]]/[[RM.TrainingResource]]```
30. Cliquez sur le bouton **Sauvegarder**.
31. Fermez l'onglet **Gestionnaire de Notification**.
32. Mettre au Plan le Schedule en Released pour aujourd'hui.
    * Ouvrez l'une des vues d'opérations (**List** ou **Matrix**) ou utilisez **Solution Manager**.
33. Assurez-vous que **My Resources Schedule** est terminé
34. Ouvrez Thunderbird et vérifiez la boîte de réception. _Vous devriez trouver de 6 nouveaux emails_.

</details>