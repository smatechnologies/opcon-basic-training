---
sidebar_label: 'Unite 3 Exercice 4'
hide_title: 'false'
---

## Exercice 4: Privilèges du département

##### Objectif:

Créez un **département** nommé ```TrainingDept```.

Attribuez au ```TrainingDept``` les **privilèges de fonction par département** du ```Training``` rôle:

* Add Jobs to Master Schedules
* Delete Jobs from Master Schedules
* Modify Jobs in Master Schedules
* View Jobs in Daily Schedules
* View Jobs in Master Schedules
* View Jobs in Schedules Operations
* Release Jobs
* Hold Jobs


Ensuite, affectez le ```TrainingDept``` à **WINDOWS JOB 1**, **WINDOWS JOB 2** et **WINDOWS JOB 3** dans **MY FIRST SCHEDULE**.

Enfin, déconnectez-vous d'Enterprise Manager et reconnectez-vous en tant que ```Student1```.  

L'utilisateur doit pouvoir accéder à la rubrique principale du job, mais être limité dans ce qui peut être affiché ou maintenu car il ne dispose pas de privilèges De Schedule et de fonction.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E4.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Créer un département
    * Sous **Sécurité**, double-cliquez sur **Départements**.
    * Cliquez sur le bouton ajouter dans la barre d'outils des départements.
    * Tapez ```TrainingDept``` dans le champ **Nom**.
    * Tapez **Département créé pour la formation** dans le champ **documentation**
    * Cliquez sur le bouton Sauvegarder dans la barre d'outils Des départements.
    * Fermez l'onglet départements.
2. Attribuer des privilèges de fonction des départements au rôle
    * Sous la rubrique **sécurité > privilèges**, double-cliquez sur **privilèges Fonction par département**.
    * Sur la liste déroulante **sélectionner Profil**, sélectionnez **Training Role**
        * Notez que tous les privilèges sont sous la liste **Non-autorisé** (sur la gauche)
    * Dans la liste déroulante **départements**, sélectionnez ```TrainingDept```.
    * Accorder au rôle les privilèges de fonction départemental suivants
Add Jobs to Master Schedules
    * Delete Jobs from Master Schedules
    * Modify Jobs in Master Schedules
    * View Jobs in Daily Schedules
    * View Jobs in Master Schedules
    * View Jobs in Schedules Operations
    * Release Jobs
    * Hold Jobs

* Fermez l'onglet Privilèges par département.

:::note Remarque
l'utilisateur ```Student1``` (qui se trouve sous le rôle de Training) peut désormais ajouter / modifier / supprimer des Jobs aux Schedules et les afficher dans l'écran Operations Views. L'utilisateur peut également suspendre et libérer des Jobs.
:::

3. Attribuer le Département à un Job
    * Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
    * Sélectionnez **My First Schedule**.
    * Sélectionnez **Windows Job 1**.
    * Sélectionnez ```TrainingDept``` dans le champ « **Département** ».
    * Cliquez sur le bouton Sauvegarder dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Sous Statut à la Mise au Plan, activez « **On Hold (Suspendu)** ».
    * Cliquez sur le bouton Sauvegarder dans la barre d'outils Job Master.
    * Sélectionnez **Windows Job 2** .
    * Sélectionnez ```TrainingDept``` dans le champ « **Département** ».
    * Cliquez sur le bouton Sauvegarder dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Sous Statut de création de la tâche, activez « **On Hold (Suspendu)** ».
    * Cliquez sur le bouton Sauvegarder dans la barre d'outils Job Master.
    * Sélectionnez **Windows Job 3**.
    * Sélectionnez ```TrainingDept``` dans le champ « **Département** ».
    * Cliquez sur le bouton Sauvegarder dans la barre d'outils Job Master.
    * Fermez l'onglet Job Master.
4. Vérifier l'accès des utilisateurs
    * Déconnectez-vous d'Enterprise Manager. Cliquez sur le bouton Déconnexion ou sélectionnez Déconnexion dans la barre de menus d'Enterprise Manager.
    * Cliquez sur **OK** pour confirmer que vous vous déconnectez.
    * À partir de l'écran de connexion OpCon / xps, tapez ```Student1``` dans le champ **Compte utilisateur** et ```password1``` dans le champ **Mot de passe**. Cliquez sur Connexion.
    * Notez que l'utilisateur n'a toujours pas le privilège de voir les **machines** sous la rubrique **Administration**.
    * Notez que cet utilisateur peut désormais accéder à la rubrique **Job Master**.
    * Double-cliquez sur la rubrique **Job Master**.
    * Essayez de sélectionner un Schedule dans la liste déroulante **Schedule**. Que s'est-il passé?
    * Fermez le Job Master.
    * Déconnectez-vous d'Enterprise Manager. Cliquez sur **OK** pour confirmer que vous vous déconnectez.
    * À partir de l'écran de connexion OpCon / xps, laissez les champs **Compte utilisateur** et **Password** vides et cliquez sur **Mot de passe**.

:::caution Remarque
l'utilisateur ```Student1``` ne peut pas afficher ni gérer les jobs dans un schedule car nous n'avons pas encore configuré le schedule et les privilèges fonctionnels
:::

</details>