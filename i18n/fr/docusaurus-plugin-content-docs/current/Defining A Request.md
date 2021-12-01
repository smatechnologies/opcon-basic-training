---
sidebar_label: 'Gérer les Service Request'
hide_title: 'false'
---

## Gérer les Service Request

### Définition d'un Service Request

The Service Definition is composed of serveral fields, many of which are optional:

<a href="imgbasic/SelfServiceRequestDetails.png" target="_blank"><img src="imgbasic/SelfServiceRequestDetails.png" width="500"></img></a>

* **Nom** (```Requis```)
    * Le Nom s'affiche sur le bouton du Service Request

* **Documentation** (```Optionnel```)
    * Elle fournit des instructions sur ce que fait le Service Request lorsque les utilisateurs cliquent sur le bouton
    * Le texte apparaîtra comme une info-bulle sur le bouton

* **Catégorie** (```Optionnel```)
    * Associe Service Request à une catégorie prédéfinie

* **Message de confirmation** (```Optionnel```)
    * Affiche les informations de la zone de documentation avec une demande de confirmation lorsque le bouton du Service Request est cliqué.
    * Le sélecteur du message de confirmation doit être activé lorsqu'une variable d'environnement a été définie

* **HTML personnalisé** (```Optionnel```)
    * Permet la customisation du code HTML pour personnaliser l'affichage du bouton Service Request

* **Règle de désactivation** (```Optionnel```)
    * Permet la définition d'une règle pour désactiver le bouton Service Request

* **Règle de masquage** (```Optionne```l)
    * Permet de définir une règle pour masquer le bouton Service Request

<a href="imgbasic/SelfServiceRequestDetails2.png" target="_blank"><img src="imgbasic/SelfServiceRequestDetails2.png" width="500"></img></a>

* **Evénements** (```Requis```)
    * Définition du ou des Events déclenché(s) par le bouton Service Request

* **Suivre Exécutions des Événements**  (```Optionnel```)
    * Surveille l'exécution de l’action mise en œuvre par le Service Request, quelle qu’elle soit et dynamiquement.
    * Si le Service Request est défini avec des events ```$JOB:ADD```, l'option effectuera le suivi des jobs ajoutés pour en surveiller le bon déroulement.

* **Envoyer l’Événement via OCADM**  (```Optionnel```)
    * Si vous utilisez le Profil ```ocadm```:
    * Les events se dérouleront toujours sans problèmes de droit.
    * S'il n'est pas sélectionné, le SAM vérifiera les privilèges de l'utilisateur OpCon lorsque le bouton Service Request est cliqué.

* **Entrée utilisateur** (```Optionnel```)
    * Lorsque des variables sont utilisées dans la définition des Events OpCon, elles sont automatiquement sélectionnées et apparaissent comme des « Entrées utilisateur »

    * Ils s'afficheront lorsque vous cliquerez sur le bouton Service Request
    * Les utilisateurs peuvent fournir des valeurs pour remplacer les variables dans les events OpCon

* **Afficher pour le rôle** (```Requis```)
    * Il permet à l'utilisateur d'attribuer le Service Request à un ou plusieurs Profils OpCon
    * Seuls les utilisateurs associés à ce(s) profil(s) peuvent voir et lancer le Service Request


###### (Cliquez sur les images pour les agrandir)
