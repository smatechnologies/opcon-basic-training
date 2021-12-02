---
sidebar_label: 'Mode utilisateur'
hide_title: 'false'
---

## Mode utilisateur

Les utilisateurs qui ne sont pas associés au Profil ```ocadm``` ou dont le Profil ne possède pas le privilège ```Maintain Service Request``` verront une page de Self Service avec uniquement les boutons the Service Request sur lesquels ils ont des droits.

<a href="imgbasic/SelfServiceUserModeView.png" target="_blank"><img src="imgbasic/SelfServiceUserModeView.png" width="500"></img></a>

### Exécuter une Service Request en mode utilisateur

* Cliquez sur un bouton Service Request
* Continuez en vous basant sur l'une des deux options suivantes :
    * Si un message de confirmation est configuré sans entrées, le Service Request invitera l'utilisateur à cliquer sur le bouton ```Soumettre``` pour continuer ou sur le bouton ```Annuler``` pour rejeter la demande d'exécution.
    * Si les entrées utilisateur sont configurées, le Service Request permettra à l'utilisateur de remplir le(s) champ(s) d'entrée utilisateur pour le Service Request.
* La page appliquera toutes les règles de validation
    * Si la validation échoue, un message en texte rouge indiquera une entrée invalide
    * La validation du formulaire a lieu chaque fois que le bouton ```Soumettre``` est cliqué

<a href="imgbasic/SelfServiceRequestRequiredFields.png" target="_blank"><img src="imgbasic/SelfServiceRequestRequiredFields.png" width="500"></img></a>

###### (Cliquez sur les images pour les agrandir)