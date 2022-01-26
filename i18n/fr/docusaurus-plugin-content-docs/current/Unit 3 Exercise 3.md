---
sidebar_label: 'Unite 3 Exercice 3'
hide_title: 'false'
---

## Exercice 3: Utilisateur Batch

##### Objectif:

Créez un nouveau ```Utilisateur Batch``` nommé ```SMATRAINING\BATCHUSER``` pour la machine ```WINDOWS```. Le mot de passe doit être défini sur ```Mot de passe```.

Ensuite, attribuez **des privilèges de l’utilisateur Batch** au rôle ```Training``` de la machine ```WINDOWS```.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir les instructions étape par étape</summary>

1. Sous la rubrique **Sécurité**, double-cliquez sur **Utilisateurs Batch**.
2. Sélectionnez **Windows** dans la liste déroulante **Sélectionner OS Cible**.
3. Cliquez sur le bouton **Ajouter** dans la barre d'outils Utilisateurs Batch. _(** Assurez-vous de bien cliquer sur le bouton Ajouter. Ne saisissez pas le profil Utilisateurs Batch existant actuellement)_
4. Tapez ```SMATRAINING\BATCHUSER``` dans le champ **Utilisateur** (sous la zone **Détails Utilisateur Batch** - sur la droite).
5. Tapez le **mot de passe** dans les champs **Mot de passe** et **Confirmer le mot de passe**.
6. Cliquez sur le bouton Sauvegarder dans la barre d'outils User Accounts.
7. Notez que ```SMATRAINING\BATCHUSER``` a été ajouté à la liste des Batch Users pour les machines ```Windows``` (sur la gauche).
8. Fermez l'onglet **Utilisateurs Batch**.
9. Sous la rubrique **Sécurité > Privilèges**, double-cliquez sur **Privilèges Utilisateurs Batch**.
10. Dans la liste déroulante **Sélectionner Profil** sélectionnez le rôle ```Training```.
11. Dans la liste déroulante **Système d’Exploitation Cible** sélectionnez ```Windows```.
12. Notez que ```SMATRAINING\BATCHUSER``` est présenté dans la liste Non-autorisé (à gauche)
13. Sous la liste Non-autorisé, cliquez sur ```SMATRAINING\BATCHUSER```, puis sur la flèche verte (pointant vers la droite) pour placer ```SMATRAINING\BATCHUSER``` sous la liste **Autorisé**.
14.	Fermez l'onglet **Privilèges Utilisateurs Batch**
:::note Remarque
l'utilisateur ```Student1``` (qui se trouve sous le rôle Training) peut désormais sélectionner cet utilisateur pour exécuter des jobs lors de leur configuration dans l'écran Job Details.
:::

</details>