---
sidebar_label: 'Unité 3 Exercice 6'
hide_title: 'false'
---

## Exercice 6: Privilèges Fonction

##### Objectif:

Accordez au rôle ```Training``` le **Privilège Fonction** pour **Mettre au plan des Schedules (Build Daily Schedules)**.

Déconnectez-vous d'Enterprise Manager et reconnectez-vous en tant que ```Student1```. 

L'utilisateur doit pouvoir voir **MY FIRST SCHEDULE**, mais dans le Job Master, ne voir que les trois premiers jobs Windows du schedule. 

En effet, le rôle ```Training``` n'a accès qu'aux jobs attribués aux machines Windows ```TrainingDept```. 

Ensuite, essayez d'ajouter un Job ```UNIX``` à **MY FIRST SCHEDULE**. L'utilisateur ne pourra pas le faire car aucune machine ```UNIX``` n’est affecté.

Enfin, Mettre au plan (Build) **MY FIRST SCHEDULE**, en écrasant Aujourd'hui. Libérez le premier et deuxième Job. 

Cliquez avec le bouton droit sur chaque Job et notez que certaines fonctions ne sont pas disponibles car elles n'ont pas été accordées au rôle ```Training``` (par exemple, **Forcer à Démarrer (Force Start)** et **Annuler (Cancel))**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E6.mp4" type="video/mp4"></source>
Votre navigateur ne prend pas en charge la vidéo.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous **Sécurité > Privilèges**, double-cliquez sur **Privilèges Fonction**.
2. Sur la liste déroulante **Sélectionner Profil**, sélectionnez le **Training role**.
    * Notez que toutes les fonctions sont présentées dans la liste **Non-autorisé** (sur la gauche).
3. Sous la liste **Non-autorisé**, cliquez sur **Build Daily Schedules**, puis sur la flèche verte (pointant vers la droite) pour placer **Build Daily Schedules** sous la liste **Autorisé**.
4. Fermez l'onglet **Privilèges Fonction**.
5. Ouvrez la vue « Liste » ou « Matrix » et vérifiez si **My first schedule** est terminé. Sinon, annulez tout Job qui maintient le Schedule ouvert.
6. Fermez la vue « Liste » ou « Matrix ».
7. Déconnectez-vous d'Enterprise Manager. Cliquez sur le bouton **Déconnexion** ou sélectionnez Déconnexion dans la barre de menus d'Enterprise Manager.
8. Cliquez sur **OK** pour confirmer que vous vous déconnectez.
9. À partir de l'écran de connexion OpCon/xps, tapez ```Student1``` dans le champ **Compte utilisateur** et ```Password1``` dans le champ **Mot de passe**. Cliquez sur **Connexion**.
10. S'il n'est pas développé, développez la rubrique **Administration**.
11. Double-cliquez sur la rubrique **Job Master**.
12. Essayez de sélectionner un schedule dans la liste déroulante **Schedule**. Que s'est-il passé ?
    * Notez que maintenant cet utilisateur peut voir **My first schedule**.
13. Sélectionnez **My first schedule**.
14. Cliquez sur la liste déroulante Job. Que voyez-vous ?

:::info Remarque
Seulement 3 Jobs Windows. Pourquoi ? Parce que le rôle associé à cet utilisateur n'a accès qu'aux Jobs affectés aux Machines Windows avec le département TrainingDept.
:::

15. Sélectionnez un Job Windows. Quel est l'ID utilisateur associé à ce Job ?

:::caution Remarque
Ne modifiez pas l'ID utilisateur
:::

16. Ajoutez un Job UNIX. Que s’est-il passé ? Pouvez-vous sélectionner une machine UNIX ?
    * Vous ne pouvez pas ajouter de Job UNIX car le rôle n'est attribué à aucune machine UNIX.
    * Cliquez sur le bouton Annuler.
17. Fermez l'onglet **Job Master**.
18. Développez la rubrique **Operations** (_Remarque : si le schedule est toujours en cours, demandez de l'aide à l'instructeur_).
    * Double-cliquez sur Mise au Plan (Build).
    * Sélectionner le schedule My First Schedule, cocher **Ecraser Schedules existants** puis **Mise au Plan** en **Release**.
19. Fermez l'écran de **Mise au Plan Schedules**.
20. Ouvrez l'écran **Matrix** en double-cliquant sur Matrix dans la section Operations du panneau de navigation.
21. Assurez-vous que la date du jour est sélectionnée dans le schedule en haut à gauche de l'écran et sélectionnez **My First Schedule** dans la liste Schedule.
22. Cliquez avec le bouton droit de la souris sur **Windows Job 1** et sélectionnez **Release**. Le Job doit commencer à s'exécuter.
23. Cliquez avec le bouton droit sur **Windows Job 2** et sélectionnez **Release**. Le **Windows Job 2** doit passer au statut **Waiting on Dependency**.
24. Cliquez à nouveau avec le bouton droit sur **Windows Job 2** et notez que « **Force Start** » n'est pas activé.
    * Pourquoi ? Parce que le Privilège Fonction par Département « **Force Start Job** » n'est pas accordé au rôle de cet utilisateur.
25. Cliquez avec le bouton droit sur **Windows Job 3 **et notez que l'option « **Cancel** » n'est pas activée.

:::info
Pourquoi ? Parce que le Privilège Fonction par Département **Cancel Jobs** n'est pas accordé au rôle de cet utilisateur.
:::

26. Sous la rubrique **Opérations**, double-cliquez sur **Liste**
    * Développez la date. Que voyez-vous ?
    * Développez le schedule. Que voyez-vous ?
    * Cliquez avec le bouton droit sur l'un des Jobs. Êtes-vous en mesure de modifier le statut du Job? Pourquoi?
27. Fermez Les onglets Matrix et Liste, puis déconnectez-vous d'Enterprise Manager. Cliquez sur **OK** pour confirmer que vous vous déconnectez.
28. À partir de l'écran de connexion OpCon/xps, laissez les champs **Compte utilisateur** et **Mot de passe** vides et cliquez sur **Connexion**.

</details>
