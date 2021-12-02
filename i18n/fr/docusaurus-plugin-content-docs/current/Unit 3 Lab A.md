---
sidebar_label: 'Unite 3 Lab A'
hide_title: 'false'
---

## Unite 3 Lab A

##### Objectif:

Le conseil d'administration de la société Congo Online Retail Inc., aimerait avoir accès à OpCon afin de pouvoir vérifier la progression des processus automatisés.

La direction informatique ne souhaite pas que le conseil d'administration puisse apporter des modifications à OpCon et ne peut consulter que les Schedules créés lors de ces laboratoires.

Créez un **rôle** nommé ```Board Member```.

Créer un compte utilisateur nommé Congo Management (**Full Username**: ```Board of Directors```) et lui attribuer le **rôle** de ```Board Member```.

Le **rôle** doit pouvoir afficher :
  * **Congo Inventory Management** Schedule
  * **Congo Inventory Reports** Schedule
  * **Congo Payroll Payments** Schedule
  * Jobs in Daily Schedules
  * Jobs in Schedule Operations


Déconnectez-vous d'Enterprise Manager et reconnectez-vous en tant que **New User Account** pour vérifier les paramètres et les restrictions.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabA.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Instructions de laboratoire** :  

* Créer un **rôle** nommé ```Board Member```
* Accordez les autorisations pour afficher les Schedules de laboratoire suivant :
    * **Congo Inventory Management**
    * **Congo Inventory Reports**
    * **Congo Payroll Payments**
* Créez un **User Account nommé** ```Congo Management```
* Donner un ***Full Username*** du ```Board of Directors```
* Changez le **password** en ```opconxps```
* Attribuer le rôle de ```Board Member``` au compte utilisateur **Congo Management**
* Le rôle de ```Board Member``` doit pouvoir afficher les Jobs dans les Daily Schedules
* Le rôle de ```Board Member``` doit pouvoir afficher les Jobs dans les opérations de Schedules
* Déconnectez-vous d'Enterprise Manager. En haut à gauche, choisissez **Enterprise Manager > Logout**
* Connectez-vous avec le new User account et le nouveau password
* Vérifiez que les autorisations sont exactes
* Les Jobs sont visibles dans la vue des opérations (operations view)
* Les modifications ne peuvent pas être apportées aux Jobs
* Déconnectez-vous et reconnectez-vous en laissant le **Username** et le **Password** vides

</details>