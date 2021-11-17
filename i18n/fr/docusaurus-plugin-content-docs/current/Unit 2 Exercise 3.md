---
sidebar_label: 'Unite 2 Exercice 3'
hide_title: 'false'
---

## Exercice 3: étapes de définition d'une machine UNIX

##### Objectif:

Ajoutez une machine ```UNIX``` dans Enterprise Manager. Nommez la machine ```SUSEVM```. Définissez le **type de machine** sur ```UNIX``` et le **numéro** de port sur ```3111```. Saisir **l'adresse IP** avec les informations fournies par l'instructeur.

Dans **Paramètres de communication**, changer la valeur **JORS Port Number** à ```3110```. Changez le **File Transfer Role** à ```BOTH```. Passez le **numéro de port de transfert de fichiers (non TLS)** à ```3110```.

Vérifiez que tous les paramètres ont été enregistrés.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous la rubrique **Administration**, double-cliquez sur **Machines**.
2. Cliquez sur le bouton **Ajouter** dans la barre d'outils du menu **Machines**.
3. Dans la zone de texte **Nom**, entrez **SUSEVM**.
4. Dans la zone de texte **Documentation**, entrez **This is My First UNIX machine**.
5. Dans la liste déroulante **Type de Machine**, sélectionnez ```UNIX```.
6. Assurez-vous que le **numéro de port** est ```3111```.
7. Saisissez **l'adresse IP** fournie par l'instructeur dans le champ dédié.
8. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils du menu **Machines**.
9. Cliquez sur le lien **Ouvrir le panneau Paramètres Avancés**
10. Cliquez sur l'onglet **Communication Settings**.
11. Cliquez sur la ligne **JORS Port Number** :
    * Saisissez ```3110``` dans la zone **JORS Port number** Située au bas de l'écran **Propriétés Avancées Machine**. 
    * Cliquez sur le bouton Mise à jour.
12. Cliquez sur l'onglet **File Transfer Settings**.
13. Cliquez sur la ligne **File Transfer Rôle** :
    * Sélectionnez **Both** dans la liste déroulante **File Transfer Role** en bas de l'écran **Propriétés Avancées Machine**.
    * Cliquez sur le bouton **Mise à jour**.
    * Remplacez la valeur ```0``` de **File Transfer Port Number (non TLS)** par ```3110```.
    * Cliquez sur le bouton **Mise à jour**.
    * Cliquez sur **Sauvegarder**.
14. Fermez l'onglet **Machines**.

</details>