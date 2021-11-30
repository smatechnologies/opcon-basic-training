---
sidebar_label: 'Configurations de rôles'
hide_title: 'false'
---

## Configurations de rôles courants - Meilleures pratiques

<figure>
    <audio
        controls
        src="audiobasic/CommonRoleConfigurations.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Trois principaux groupes d'utilisateurs (rôles) pour les privilèges OpCon:
    * **Les administrateurs**
    * **Les planificateurs**
    * **Les opérateurs**


#### Administrateurs

* L'administrateur (s) OpCon doit s'assurer que tous les utilisateurs OpCon ont les privilèges nécessaires
* L'administrateur OpCon avec l'ID utilisateur ```ocadm``` reçoit automatiquement tous les privilèges pour tout ce qui se trouve dans OpCon,** y compris** l'accès aux `` Options du serveur '' et la possibilité de modifier les schedules ou les fréquences de Job affectant plusieurs Jobs.
* Lors de la création de nouveaux comptes d'utilisateur administrateur, les privilèges souhaités doivent être sélectionnés intentionnellement.


#### Planificateurs (Schedulers)

* Ces personnes créeront et maintiendront des Jobs et des Schedules
* Ils auront besoin autant d’accès que possible à chaque section d'Enterprise Manager, à l'exception de la section `` Administration ''
* Les privilèges répertoriés dans le tableau peuvent être utilisés comme guide pour l'attribution de privilèges aux planificateurs OpCon

<a href="imgbasic/316.png" target="_blank"><img src="imgbasic/316.png" width="500"></img></a>  
<a href="imgbasic/317.png" target="_blank"><img src="imgbasic/317.png" width="250"></img></a>  

#### Les opérateurs

* Ces personnes surveilleront les Jobs et les Schedules sur une base quotidienne
* Ils auront besoin d'une autorisation pour voir chaque schedule et être en mesure d'effectuer la maintenance avant et après l'exécution d'un Job et / ou d'un schedule (Jobs de redémarrage, Jobs de démarrage forcé, Schedule de démarrage forcé, Schedule de publication, etc.)
* Les privilèges répertoriés dans le tableau peuvent être utilisés comme guide pour l'attribution de privilèges aux opérateurs OpCon

<a href="imgbasic/318.png" target="_blank"><img src="imgbasic/318.png" width="500"></img></a>  
<a href="imgbasic/319.png" target="_blank"><img src="imgbasic/319.png" width="250"></img></a>  

###### (Cliquez sur les images pour les agrandir)
