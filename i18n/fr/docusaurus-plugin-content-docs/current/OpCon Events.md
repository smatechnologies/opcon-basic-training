---
sidebar_label: 'Events OpCon'
hide_title: 'false'
---

## Events OpCon

<figure>
    <audio
        controls
        src="audiobasic/OpConEvents.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Les events OpCon exécutent des commandes dans OpCon
* Les events peuvent être définis pour s'exécuter sur:
    * Schedule Completion
    * Job Statuses
    * String Match on LSAM Feedback for Jobs
    * Job Exit Description
    * Event Triggers from Notification Manager
    * External Events

* Presque toutes les actions d'OpCon peuvent être gérées par des events
* Liste partielle des types d'events:
    * CALENDAR
    * CONSOLE
    * JOB (Daily)
    * JOBMASTER (Master)
    * MACHINE
    * NOTIFY
    * PROPERTY
    * RESOURCE
    * SCHEDULE
    * THRESHOLD



<a href="imgbasic/346.png" target="_blank"><img src="imgbasic/346.png" width="500"></img></a>

### Events internes vs externes

<figure>
    <audio
        controls
        src="audiobasic/InternalVSExternalEvents.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Les events internes créés à partir d'Enterprise Manager / Solution Manager (Self-Service)
    * Onglet Events dans Schedule / Job Master
    * Event notification trigger dans Notification Manager
    * Events attribués aux boutons dans Self-Service / Solution Manager
    * Les events internes sont authentifiés via le compte utilisateur qui a créé l'event dans Enterprise Manager
* Events externes
    * Tout ce qui peut générer un fichier texte avec la syntaxe Event peut interagir avec OpCon via un hook externe appelé MSGIN
    * Exemples SMA : SMAResource Monitor, SMArt Email, SMAParseFile

:::note Remarque
Doit être authentifié avec un **Username OpCon** et un **External Event Password
:::

### Jetons d'event externes

:::note
_À partir d'OpCon 20.0_ - Les mots de passe d'events externes doivent être créés en générant un ```External Token``` dans le menu **Password Update** d’Enterprise Manager OU dans l'onglet ```External Token``` de la rubrique Profil utilisateur dans Solution Manager

* Les anciens mots de passe d'event externe seront toujours actifs dans les systèmes existants, mais doivent être remplacés par ```External Token``` lorsqu'une modification de mot de passe est requise
:::

#### Générer un jeton externe dans Enterprise Manager

<a href="imgbasic/PictureExternalTokenMenuEM.png" target="_blank"><img src="imgbasic/PictureExternalTokenMenuEM.png" width="500"></img></a>
<a href="imgbasic/PictureExternalTokenEM.png" target="_blank"><img src="imgbasic/PictureExternalTokenEM.png" width="500"></img></a>

#### Générer un jeton externe dans Solution Manager

<a href="imgbasic/PictureExternalTokenSM.png" target="_blank"><img src="imgbasic/PictureExternalTokenSM.png" width="500"></img></a>

:::note Remarque
_À partir d'OpCon 20.0_ - Les events externes sont désactivés par défaut et doivent être activés par ```ocadm``` ou par un utilisateur disposant des privilèges administratifs appropriés
:::

### Events de dépannage - OpConLogs

<figure>
    <audio
        controls
        src="audiobasic/TroubleshootingEventsOpConLogs.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Tous les events ayant échoué seront répertoriés dans SAM Log et Critical Log avec une brève description de l'échec

#### SAM Log

<a href="imgbasic/347.png" target="_blank"><img src="imgbasic/347.png" width="500"></img></a>

#### Critical Log

<a href="imgbasic/348.png" target="_blank"><img src="imgbasic/348.png" width="500"></img></a>

### MSGIN - Events externes

<figure>
    <audio
        controls
        src="audiobasic/MSGINExternalEvents.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* « External hook » dans OpCon
* ```MSGIN``` est un dossier / répertoire surveillé par l'agent d'OpCon (LSAM) pour les events à transmettre à OpCon
    * Tous les principaux agents OpCon (LSAM) ont un répertoire ```MSGIN```
    * Le chemin ```MSGIN``` dans **Windows** se trouve ```ProgramData```
    * Le chemin ```MSGIN``` sous **UNIX** est ```/usr/local/lsam```
    * Le dossier doit toujours être vide car les agents récupèrent les events très rapidement après leur arrivée dans MSGIN - Le test peut être effectué en affichant SAM.log pour l'état du comportement (behavior status).

<a href="imgbasic/349.png" target="_blank"><img src="imgbasic/349.png" width="500"></img></a>

###### (Cliquez sur les images pour les agrandir)