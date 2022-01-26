---
sidebar_label: 'Gestionnaire d escalade'
hide_title: 'false'
---

## Gestionnaire d'escalade

<figure>
    <audio
        controls
        src="audiobasic/EscalationManager.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Permet aux utilisateurs de créer des règles d'escalade qui seront liées aux notifications
* Les règles d'escalade sont liées à la configuration des notifications dans Notification Manager
* **Les groupes** doivent être créés **AVANT les règles**

<a href="imgbasic/326.png" target="_blank"><img src="imgbasic/326.png" width="500"></img></a>

### Gestionnaire d'escalade - Groupes

* Les groupes spécifiques qui seront liés à une notification
* L'adresse e-mail est regroupée à partir de l'écran User Account
* Spécifiez qui peut confirmer une notification escaladée

<a href="imgbasic/327.png" target="_blank"><img src="imgbasic/327.png" width="500"></img></a>

### Gestionnaire d'escalade - Propriété globale

* Une propriété globale peut faire en sorte qu'OpCon mette à jour automatiquement les utilisateurs liés au groupe

<a href="imgbasic/328.png" target="_blank"><img src="imgbasic/328.png" width="500"></img></a>

### Gestionnaire d'escalade - Règles

* Listes des règles d'escalade :
    * Quel groupe sera alerté
    * Nombre d'alertes avant l'escalade
    * Minutes entre les alertes
* Plusieurs groupes peuvent être répertoriés pour élever les alertes après un nombre configuré de notifications

<a href="imgbasic/329.png" target="_blank"><img src="imgbasic/329.png" width="500"></img></a>

### Gestionnaire de notifications - Règle d'escalade

* Attachez les notifications escaladées dans le gestionnaire de notifications
* Une seule règle d'escalade peut être configurée par notification
* Les règles d'escalade ne peuvent être définies que pour les e-mails pour le moment

<a href="imgbasic/330.png" target="_blank"><img src="imgbasic/330.png" width="250"></img></a>

### Confirmation d'escalade

<figure>
    <figcaption>Listen for information on Escalation Acknowledgement:</figcaption>
    <audio
        controls
        src="audiobasic/EscalationAcknowledgement.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Une fois l'escalade déclenchée, tout utilisateur lié à un groupe d'escalade doit confirmer pour arrêter le cycle d'escalade
* Mettre fin à l'alerte dans l'écran de Acquittement de Notification
* Un symbole apparaîtra en bas d'Enterprise Manager près du SAM Pulse, indiquant le nombre de notifications en cours de remontée


<a href="imgbasic/331.png" target="_blank"><img src="imgbasic/331.png" width="250"></img></a>  
<a href="imgbasic/332.png" target="_blank"><img src="imgbasic/332.png" width="500"></img></a>  
<a href="imgbasic/333.png" target="_blank"><img src="imgbasic/333.png" width="300"></img></a>  

###### (Cliquez sur les images pour les agrandir)