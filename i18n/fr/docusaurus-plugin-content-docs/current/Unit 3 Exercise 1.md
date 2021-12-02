---
sidebar_label: 'Unite 3 Exercice 1'
hide_title: 'false'
---

## Exercice 1: Créer un rôle et un compte utilisateur

##### Objectif:

Créez un **rôle** nommé ```Training```. Assurez-vous qu'il n'hérite PAS de privilèges.

Créez un **compte d'utilisateur** nommé ```Student1``` (Nom d'utilisateur complet: ```Student Number 1```.)

Copiez le mot de passe dans votre presse-papiers et remplacez le mot de passe copié par ```password1``` et confirmez.

Donnez à ```Student 1``` le rôle de ```Training```.

Vérifiez les privilèges du compte d'utilisateur en vous déconnectant d'Enterprise Manager et en vous reconnectant en tant que Student1. L'utilisateur doit avoir un accès limité aux sujets qui peuvent être vérifiés en choisissant Machine Status. Aucune machine ne doit être visible.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E1.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Créer un rôle
  * Sous la rubrique **Security**, double-cliquez sur **Roles**.
  * Cliquez sur le bouton **Add** dans la barre d'outils Roles.
  * Dans le champ **Name** saisissez ```Training```
  * Dans le champ **Documentation**, saisissez : « Rôle à utiliser lors des exercices de sécurité ».
  * Sous **Privileges**, assurez-vous que toutes les cases à cocher **Inherit Privileges** sont **décochées**.
  * Cliquez sur le bouton Save.
  * Fermez l'onglet « Roles ».
2. Créer un User Accounts
  * Sous la rubrique **Security**, double-cliquez sur **User Accounts**.
  * Cliquez sur le bouton Add dans la barre d'outils User Accounts.
  * Dans le champ **Name**, saisissez ```Student1```.
  * Dans le champ **Full Username**, saisissez ```Student Number 1```.
  * Cliquez sur le bouton Save dans la barre d'outils User Accounts.
  * Dans la fenêtre de **Password Set**, cliquez sur le bouton **Yes** pour placer le mot de passe dans votre presse-papiers.
  * Cliquez sur le bouton **Change User Password** (côté droit de l'écran)
  * Cliquez avec le bouton droit de la souris dans le champ **Old Password** et collez l'ancien mot de passe.
  * Cliquez dans le champ **New Password** et saisissez ```password1``` (minuscules).
  * Cliquez à l'intérieur du champ **Confirm Password** et saisissez ```password1``` (en minuscules).
  * Cliquez sur le bouton **OK**.
  * Sélectionnez le rôle de **Training** dans la liste **Revoked**, puis cliquez sur la flèche verte (pointant vers la droite) pour placer Student1 dans le rôle de Training. Notez que le rôle de Training sera sous la liste Granted.
  * Cliquez sur le bouton Save dans la barre d'outils User Accounts.
  * Fermez l'onglet User Accounts.
3. Vérifier les User Accounts Privileges.
  * Déconnectez-vous d'Enterprise Manager. Cliquez sur le bouton Logout ou sélectionnez Logout dans la barre de menus d'Enterprise Manager.
  * Cliquez sur **OK** pour confirmer que vous vous déconnectez.
  * À partir de l'écran de connexion OpCon / xps, tapez ```Student1``` dans le champ **Username**  et ```Password```1 dans le champ **Password**. Cliquez sur Login.
  * Vérifiez les sujets auxquels l'utilisateur a accès :
    * Operation
      * Machine Status
      * Escalation Akcnoledgement
    * External Tools
      * Import Export
      * Windows Tools
    * Information
      * Logs
    * Scripts
      * Repository
      * Runners
      * Types
    * Support
      * Support
      * Report a problem
* Double-cliquez sur **Machine Status** sous **Operation**
* Aucune machine ne devrait apparaître là.
* Fermez l'onglet **Machine Status**, puis déconnectez-vous d'Enterprise Manager. Cliquez sur **OK** pour confirmer que vous vous déconnectez.
* À partir de l'écran de connexion OpCon / xps, laissez les champs **Username** et **Password** vides et cliquez sur **Login**.

</details>