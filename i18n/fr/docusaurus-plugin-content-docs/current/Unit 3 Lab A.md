---
sidebar_label: 'Unité 3 Lab A'
hide_title: 'false'
---

## Unité 3 Lab A

##### Objectif:

Le conseil d'administration de la société Congo Online Retail Inc. aimerait avoir accès à OpCon afin de pouvoir vérifier la progression des processus automatisés.

La direction informatique ne souhaite pas que le conseil d'administration puisse apporter des modifications à OpCon et ne peut consulter que les Schedules créés lors de ces laboratoires.

Créez un **Rôle** nommé ```Board Member```.

Créer un compte utilisateur nommé Congo Management (**Nom complet utilisateur**: ```Board of Directors```) et lui attribuer le **Rôle** ```Board Member```.

Le **rôle** doit être capable de voir :
  * Le schedule **Congo Inventory Management**
  * Le schedule **Congo Inventory Reports**
  * Le schedule **Congo Payroll Payments**
  * Les Jobs en Daily (View Jobs in Daily Schedules)
  * Les Jobs dans les vues des Opérations (View Jobs in Schedule Operations)


Déconnectez-vous d'Enterprise Manager et reconnectez-vous avec le nouveau compte utilisateur pour vérifier les paramètres et les restrictions.

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabA.mp4" type="video/mp4"></source>
Votre navigateur ne prend pas en charge la vidéo.
</video>
</div>
-->

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Instructions de laboratoire** :  

* Créer un **rôle** nommé ```Board Member```.
* Accordez les autorisations pour afficher les Schedules suivants : :
    * **Congo Inventory Management**
    * **Congo Inventory Reports**
    * **Congo Payroll Payments**
* Créez un **Compte utilisateur** nommé ```Congo Management```.
* Donner un **Nom complet utilisateur** du ```Board of Directors```.
* Changez le **Mot de passe** en ```opconxps```.
* Attribuer le rôle de ```Board Member``` au compte utilisateur **Congo Management**.
* Le rôle de ```Board Member``` doit pouvoir afficher les Jobs dans les Daily Schedules.
* Le rôle de ```Board Member``` doit pouvoir afficher les Jobs dans les opérations de Schedules.
* Déconnectez-vous d'Enterprise Manager. En haut à gauche, choisissez **Enterprise Manager > Deconnexion**
* Connectez-vous avec le Nouveau compte utilisateur et le nouveau Mot de passe.
* Vérifiez que les autorisations sont exactes.
* Les Jobs sont visibles dans la vue des opérations.
* Des modifications ne peuvent pas être apportées aux Jobs.
* Déconnectez-vous et reconnectez-vous en laissant le **Compte utilisateur** et le **Mot de passe** vides.

</details>
