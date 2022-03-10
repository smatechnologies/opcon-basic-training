---
sidebar_label: 'Unité 3 Exercice 8'
hide_title: 'false'
---

## Exercice 8: Gestionnaire de notifications

##### Objectif:

Dans le **Gestionnaire de Notifications**, créez une notification en ajoutant un **Groupe Racine (Root Group)** nommé ```ALL MACHINES``` et en ajoutant à la fois les machines ```WINDOWS``` et ```UNIX```.

Ajoutez un **Déclencheur Machine (Machine Trigger)** pour ```Machine Marked Up```.

Envoyez un e-mail à ```smauser@congo.local``` avec le message: **"TESTING EMAIL NOTIFICATION"**.

Appuyez sur le bouton **Test** pour envoyer l'e-mail. Ouvrez Thunderbird pour vérifier la réussite de la notification.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E8.mp4" type="video/mp4"></source>
Votre navigateur ne prend pas en charge la vidéo.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous la rubrique **Gestion**, double-cliquez sur **Gestionnaire Notification**.
2. Cliquez sur l'onglet **Machines**.
3. Cliquez avec le bouton droit de la souris dans la zone blanche sous l'onglet Machines et sélectionnez **Ajouter un groupe Root**.
4. Tapez le nom du groupe de machines (par exemple, Toutes les machines) et cliquez sur **OK**.
5. Sur le côté droit de l'écran, développez les systèmes d'exploitation et cochez toutes les cases des **Machines**.
6. Cliquez sur le bouton **Sauvegarder** (en bas à droite).
7. Cliquez avec le bouton droit sur le dossier **Groupe** créé à l'étape 4, déplacez la souris sur **Ajouter déclenchement Machine** et sélectionnez ```Machine Marked Up```. 
9. Sous **Définitions Notifications** à droite :
    * Cochez la case **Envoyer Email (SMTP)**.
    * Cliquez sur l'onglet **Email**.
    * Dans le champ Email, saisissez ```smauser@congo.local```.
    * Entrez un **sujet**.
    * Dans le **message**, saisissez **Notification de test email**.
10. Cliquez sur le bouton **Test** pour tester les résultats de votre notification.
11. Cliquez sur le bouton **Sauvegarder**.
12. Ouvrez **Thunderbird** et vérifiez la boîte de réception.

</details>
