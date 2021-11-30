---
sidebar_label: 'Unite 3 Exercice 4'
hide_title: 'false'
---

## Exercice 4: Department Privileges

##### Objectif:

Créez un **département** nommé ```TrainingDept```.

Attribuez au ```TrainingDept``` les **privilèges de fonction départemental** du ```Training``` rôle:

* Ajouter des Jobs aux Master Schedules
* Supprimer Jobs des Master Schedules
* Modifier Jobs dans Master Schedules
* Afficher Jobs dans Daily Schedules
* Afficher les Jobs dans les Master Schedules
* Afficher les Jobs dans Schedules Operations
* Lancer des Jobs
* Jobs en attente

Ensuite, affectez le ```TrainingDept``` à **WINDOWS JOB 1**, **WINDOWS JOB 2** et **WINDOWS JOB 3** dans **MY FIRST SCHEDULE**.

Enfin, déconnectez-vous d'Enterprise Manager et reconnectez-vous en tant que ```Student1```.  

L'utilisateur doit pouvoir accéder à la rubrique principale du job, mais être limité dans ce qui peut être affiché ou maintenu car il ne dispose pas de privilèges de planification et de fonction.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E4.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Créer un département
    * Sous **Security**, double-cliquez sur **Departments**.
    * Cliquez sur le bouton Add dans la barre d'outils Departments.
    * Tapez ```TrainingDept``` dans le champ **Name**.
    * Tapez **Department created for training** dans le champ **documentation**
    * Cliquez sur le bouton Save dans la barre d'outils Departments.
    * Fermez l'onglet Departments.
2. Attribuer des privilèges de fonction départemental au rôle
    * Sous la rubrique **Security > Privileges**, double-cliquez sur **Departmental Function Privileges**.
    * Sur la liste déroulante **Select Rôle**, sélectionnez **Training Role**
        * Notez que tous les privilèges sont sous la liste **Revoked** (sur la gauche)
    * Dans la liste déroulante **Departments**, sélectionnez ```TrainingDept```.
    * Accorder au rôle les privilèges de fonction départemental suivants
        * Ajouter des Jobs aux Master Schedules
        * Supprimer les Jobs des Master Schedules
        * Modifier les Jobs dans les Master Schedules
        * Afficher les Jobs dans les Daily Schedules
        * Afficher les Jobs dans les Master Schedules
        * Afficher les Jobs dans les Schedules
        * Lancer des Jobs
        * Jobs en attente
    * Fermez l'onglet Privilèges départementaux.

:::note Remarque
l'utilisateur ```Student1``` (qui se trouve sous le rôle de Training) peut désormais ajouter / modifier / supprimer des Jobs aux Schedules et les afficher dans l'écran Operations Views. L'utilisateur peut également suspendre et libérer des Jobs.
:::

3. Attribuer le Département à un Job
    * Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
    * Sélectionnez **My First Schedule**.
    * Sélectionnez **Windows Job 1**.
    * Sélectionnez ```TrainingDept``` dans le champ « **Department** ».
    * Cliquez sur le bouton Save dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Frequency**.
    * Sous Job Build Status, activez « **On Hold** ».
    * Cliquez sur le bouton Save dans la barre d'outils Job Master.
    * Sélectionnez **Windows Job 2** .
    * Sélectionnez ```TrainingDept``` dans le champ « **Department** ».
    * Cliquez sur le bouton Save dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Frequency**.
    * Sous Statut de création de la tâche, activez « **On Hold** ».
    * Cliquez sur le bouton Save dans la barre d'outils Job Master.
    * Sélectionnez **Windows Job 3**.
    * Sélectionnez ```TrainingDept``` dans le champ « **Department** ».
    * Cliquez sur le bouton Save dans la barre d'outils Job Master.
    * Fermez l'onglet Job Master.
4. Vérifier l'accès des utilisateurs
    * Déconnectez-vous d'Enterprise Manager. Cliquez sur le bouton Logout ou sélectionnez Logout dans la barre de menus d'Enterprise Manager.
    * Cliquez sur **OK** pour confirmer que vous vous déconnectez.
    * À partir de l'écran de connexion OpCon / xps, tapez ```Student1``` dans le champ **Username** et ```password1``` dans le champ **password**. Cliquez sur Login.
    * Notez que l'utilisateur n'a toujours pas le privilège de voir les **machines** sous la rubrique **Administration**.
    * Notez que cet utilisateur peut désormais accéder à la rubrique **Job Master**.
    * Double-cliquez sur la rubrique **Job Master**.
    * Essayez de sélectionner un Schedule dans la liste déroulante **Schedule**. Que s'est-il passé?
    * Fermez le Job Master.
    * Déconnectez-vous d'Enterprise Manager. Cliquez sur **OK** pour confirmer que vous vous déconnectez.
    * À partir de l'écran de connexion OpCon / xps, laissez les champs **Username** et **Password** vides et cliquez sur **Login**.

:::caution Remarque
l'utilisateur ```Student1``` ne peut pas afficher ni gérer les jobs dans un schedule car nous n'avons pas encore configuré le schedule et les privilèges fonctionnels
:::

</details>