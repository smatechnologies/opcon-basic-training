---
sidebar_label: 'Configuration des Events OpCon'
hide_title: 'false'
---

## Configuration des Events OpCon

Pour ajouter un nouvel Event OpCon dans Self Service :

* Dans la page **Création d’un Service Request**, cliquez sur la barre **verte** ```+ Ajouter``` sous l'étiquette **Evénements**.
* Sélectionnez un **Modèle d’Event OpCon**
* Insérez des **variables** dans l'Event en utilisant la syntaxe : ```${variable}```

<a href="imgbasic/SelfServiceEditEvent.png" target="_blank"><img src="imgbasic/SelfServiceEditEvent.png" width="500"></img></a>

* Les variables seront ensuite sélectionnées en tant qu’ **Entrées Utilisateur** à configurer lors de l'initiation de la demande.

<a href="imgbasic/SelfServiceVariableUserInputs.png" target="_blank"><img src="imgbasic/SelfServiceVariableUserInputs.png" width="500"></img></a>

Les **variables systèmes** suivantes sont disponibles spécifiquement pour **Solution Manager** :

* ```${SM.USER.LOGIN}```
    * Les **variables systèmes** suivantes sont disponibles spécifiquement pour **Solution Manager** :
* ```${SM.USER.NAME}```
    * Résout le nom d'utilisateur complet défini pour l'utilisateur OpCon qui a cliqué sur le bouton Service Request
* ```${SM.USER.EMAIL}```
* Résout l'adresse e-mail définie pour l'utilisateur OpCon qui a cliqué sur le bouton Service Request
* ```${SM.USER.COMMENTS}```
* Résout les commentaires définis dans le compte utilisateur OpCon qui a cliqué sur le bouton Service Request

:::note Remarque
* La définition d'Event sera prévisualisée dans une liste déroulante sous le modèle de l'event
* Les variables de l'Event seront résolues avant l'envoi de l'Event à OpCon
:::

### Edition manuelle

Pour modifier manuellement un Event, cliquez sur le bouton **Edition Manuelle** 

* L'édition manuelle peut être utilisée pour définir un Event manuellement ou pour modifier un Event qui a été défini avec un Template de définition d’Event 

<a href="imgbasic/SelfServiceEventManualEditButton.png" target="_blank"><img src="imgbasic/SelfServiceEventManualEditButton.png" width="500"></img></a>

<a href="imgbasic/SelfServiceEventManualEditScreen.png" target="_blank"><img src="imgbasic/SelfServiceEventManualEditScreen.png" width="500"></img></a>

### L'ordre des events

* L'ordre des events définis peut être modifié à l'aide des flèches haut et bas en haut de la liste des Events
    * L'ordre affiché dans la liste des events est l'ordre, de haut en bas, dans lequel les Events seront transmis et traités par le SAM.

<a href="imgbasic/SelfServiceEventOrder.png" target="_blank"><img src="imgbasic/SelfServiceEventOrder.png" width="500"></img></a>

###### (Cliquez sur les images pour les agrandir)