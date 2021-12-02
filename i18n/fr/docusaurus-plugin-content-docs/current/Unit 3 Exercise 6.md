---
sidebar_label: 'Unite 3 Exercice 6'
hide_title: 'false'
---

## Exercice 6: Privilèges de fonction

##### Objectif:

Accordez au rôle ```Training``` **le privilège de fonction** pour **créer des horaires quotidiens (Build Daily Schedules)**.

Déconnectez-vous d'Enterprise Manager et reconnectez-vous en tant que ```Student1```. 

L'utilisateur doit pouvoir voir **MY FIRST SCHEDULE**, mais dans le Job Master, ne voir que les trois premiers jobs Windows du schedule. 

En effet, le rôle ```Training``` n'a accès qu'aux jobs attribués aux machines Windows ```TrainingDept```. 

Ensuite, essayez d'ajouter un Job ```UNIX``` à **MY FIRST SCHEDULE**. L'utilisateur ne pourra pas le faire car aucune machine ```UNIX``` n'est affectée.

Enfin, reconstruisez **MY FIRST SCHEDULE**, en écrasant Aujourd'hui. Libérez le premier et deuxième Jobs. 

Cliquez avec le bouton droit sur chaque Job et notez que certaines fonctions ne sont pas disponibles car elles n'ont pas été accordées au rôle ```Training``` (par exemple, **Forcer le démarrage du Job (Force-Start Job)** et **Annuler (Cancel))**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E6.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous **Security> Privileges**, double-cliquez sur **Privilèges de fonction**.
2. Sur la liste déroulante **Select role**, sélectionnez le **Training role**.
    * Notez que toutes les fonctions sont présentées dans la liste **Revoked** (sur la gauche).
3. Sous la liste **Revoked**, cliquez sur **Build Daily Schedules**, puis sur la flèche verte (pointant vers la droite) pour placer **Build Daily Schedules** sous la liste **Autorisé**.
4. Fermez l'onglet **Function Privileges**.
5. Ouvrez la vue « List » ou « Matrix » et vérifiez si **My first schedule** est terminée. Sinon, annulez tout Job qui maintient le Schedule ouvert.
6. Fermez la vue « List » ou « Matrix ».
7. Déconnectez-vous d'Enterprise Manager. Cliquez sur le bouton Déconnexion ou sélectionnez Logout dans la barre de menus d'Enterprise Manager.
8. Cliquez sur **OK** pour confirmer que vous vous déconnectez.
9. À partir de l'écran de connexion OpCon / xps, tapez ```Student1``` dans le champ **Username** et ```Password1``` dans le champ **Password**. Cliquez sur **Login**.
10. S'il n'est pas développé, développez la rubrique **Administration**.
11. Double-cliquez sur la rubrique **Job Master**.
12. Essayez de sélectionner un schedule dans la liste déroulante **Schedule**. Que s'est-il passé ?
    * Notez que maintenant cet utilisateur peut voir **My first schedule**.
13. Sélectionnez **My first schedule**.
14. Cliquez sur la liste déroulante Job. Que voyez-vous ?

:::info Remarque
Seulement 3 Jobs Windows. Pourquoi ? Parce que le rôle associé à cet utilisateur n'a accès qu'aux Jobs affectés aux Machines TrainingDept.Windows.
:::

15. Sélectionnez un Job Windows. Quel est l'ID utilisateur associé à ce Job ?

:::caution Remarque
Do Not Change the User ID
:::

16. Ajoutez un Job UNIX. Que s’est-il passé ? Pouvez-vous sélectionner une machine UNIX ?
    * Vous ne pouvez pas ajouter de Job UNIX car le rôle n'est attribué à aucune machine UNIX.
    * Cliquez sur le bouton Cancel.
17. Fermez l'onglet **Job Master**.
18. Développez la rubrique **Operation** (_Remarque : si le schedule est toujours en cours, demandez de l'aide à l'instructeur_).
    * Double-cliquez sur Schedule Build
    * **Build**, **Overwrite** et **Release My First Schedule**.
19. Fermez l'écran de **Schedule Build**.
20. Ouvrez l'écran **Matrix** en double-cliquant sur Matrix dans la section Operations du panneau de navigation.
21. Assurez-vous que la date du jour est sélectionnée dans le schedule en haut à gauche de l'écran et sélectionnez **My First Schedule** dans la liste Schedule.
22. Cliquez avec le bouton droit de la souris sur **Windows Job 1** et sélectionnez **Release**. Le Job doit commencer à s'exécuter.
23. Cliquez avec le bouton droit sur **Windows Job 2** et sélectionnez **Release**. Le **Windows Job 2** doit passer au statut **Waiting on Dependency**.
24. Cliquez à nouveau avec le bouton droit sur **Windows Job 2** et notez que « **Force-Start Job** » n'est pas activé.
    * Pourquoi ? Parce que le privilège de fonction départementale « **Force-Start Job** » n'est pas accordé au rôle de cet utilisateur.
25. Cliquez avec le bouton droit sur **Windows Job 3 **et notez que l'option « **Cancel** » n'est pas activée.

:::info
Pourquoi ? Parce que le privilège de fonction départementale « **Cancel Jobs** » n'est pas accordé au rôle de cet utilisateur.
:::

26. Sous la rubrique **Operation**, Double-cliquez sur **List**
    * Dévoloppez la date. Que voyez-vous?
    * Développez le schedule. Que voyez-vous?
    * Cliquez avec le bouton droit sur l'un des Jobs. Êtes-vous en mesure de modifier le statut du Job? Pourquoi?
27. Fermez la Daily List et les onglets Matrix, puis déconnectez-vous d'Enterprise Manager. Cliquez sur **OK** pour confirmer que vous vous déconnectez.
28. À partir de l'écran de connexion OpCon / xps, laissez les champs **Username** et **Password** vides et cliquez sur **Login**.

</details>