---
sidebar_label: 'Unite 3 Exercice 7'
hide_title: 'false'
---

## Exercice 7: Codes d'accès

##### Objectif:

Créez un **code d'accès** nommé ```Training```. Dans Job Master, attribuez le **code d'accès** à **WINDOWS JOB 1** dans **MY FIRST SCHEDULE**.

Déconnectez-vous d'Enterprise Manager et reconnectez-vous en tant que ```Student1```.

Sélectionnez Job Master et ***MY FIRST SCHEDULE***. Notez que l'utilisateur ne peut pas afficher **WINDOWS JOB 1** car le **code d'accès** ```Training``` n'a pas été attribué au rôle ```Training```.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E7.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous la rubrique **Sécurité**, double-cliquez sur **Codes d’accès**.
2. Cliquez sur le bouton **Add** dans la barre d'outils **Codes d’accès**.
3. Tapez ```Training``` dans le champ **Nom**.
4. Tapez **Ceci est un code d'accès pour la formation**. dans le champ Documentation.
5. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Codes d’accès**.
6. Fermez l'onglet **Codes d'accès**.
7. Assurez-vous que vous êtes connecté avec votre identifiant ```SMATRAINING\SMAUSER```.
8. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
9. Sélectionnez **My first schedule** dans la liste déroulante **Schedule**.
10. Sélectionnez **Windows Job 1** dans la liste déroulante **Job**.
11. Dans la liste déroulante **Access Code**, sélectionnez **Training**.
12. Cliquez sur **Sauvegarder** pour enregistrer le Job et fermez l'onglet **Job Master**.
13. Déconnectez-vous d'Enterprise Manager. Cliquez sur le bouton Deconnexion ou sélectionnez Deconnexion dans la barre de menus d'Enterprise Manager.
14. Cliquez sur **OK** pour confirmer que vous vous déconnectez.
15. À partir de l'écran de connexion OpCon / xps, tapez ```Student1``` dans le champ **Compte utilisateur** et ```Password1``` dans le champ **Mot de passe**. Cliquez sur Connexion pour vous connecter.
16. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
17. Sélectionnez **My first Schedule** dans la liste déroulante **Schedule**.
18. Cliquez sur la liste déroulante Job. Que voyez-vous ? Pourquoi ?
19. Fermez l'onglet **Job Master**, puis déconnectez-vous d'Enterprise Manager. Cliquez sur **OK** pour confirmer que vous vous déconnectez.
20. À partir de l'écran de connexion OpCon / xps, laissez les champs **Compte utilisateur** et **Mot de passe** vides et cliquez sur **Connexion**.

</details>