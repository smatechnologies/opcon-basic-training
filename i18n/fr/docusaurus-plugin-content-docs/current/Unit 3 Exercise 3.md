---
sidebar_label: 'Unite 3 Exercice 3'
hide_title: 'false'
---

## Exercice 3: Batch Users

##### Objectif:

Créez un nouveau ```Batch User``` nommé ```SMATRAINING\BATCHUSER``` pour la machine ```WINDOWS```. Le mot de passe doit être défini sur ```password```.

Ensuite, attribuez **des privilèges du Batch User** au rôle ```Training``` de la machine ```WINDOWS```.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir les instructions étape par étape</summary>

1. Sous la rubrique **Security**, double-cliquez sur **Batch Users**.
2. Sélectionnez **Windows** dans la liste déroulante **Select the target OS**.
3. Cliquez sur le bouton **Add** dans la barre d'outils Batch Users. _(** Assurez-vous de bien cliquer sur le bouton Ajouter. Ne saisissez pas le profil Batch User existant actuellement)_
4. Tapez ```SMATRAINING\BATCHUSER``` dans le champ **User** (sous la zone B**atch User Details** - sur la droite).
5. Tapez le **mot de passe** dans les champs **password** et **Confirmer le mot de passe**.
6. Cliquez sur le bouton Save dans la barre d'outils User Accounts.
7. Notez que ```SMATRAINING\BATCHUSER``` a été ajouté à la liste des Batch Users pour les machines ```Windows``` (sur la gauche).
8. Fermez l'onglet **Batch Users**.
9. Sous la rubrique **Security> Privileges**, double-cliquez sur **Batch Users Privileges**.
10. Dans la liste déroulante **Select Role** sélectionnez le rôle ```Training```.
11. Dans la liste déroulante **Target Operating System** sélectionnez ```Windows```.
12. Notez que ```SMATRAINING\BATCHUSER``` est présenté dans la liste Revoked (à gauche)
13. Sous la liste Revoked, cliquez sur ```SMATRAINING\BATCHUSER```, puis sur la flèche verte (pointant vers la droite) pour placer ```SMATRAINING\BATCHUSER``` sous la liste **Autorisé**.
14.	Fermez l'onglet **Batch User Privileges**
:::note Remarque
l'utilisateur ```Student1``` (qui se trouve sous le rôle Training) peut désormais sélectionner cet utilisateur pour exécuter des jobs lors de leur configuration dans l'écran Job Details.
:::

</details>