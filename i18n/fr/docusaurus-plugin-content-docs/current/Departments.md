---
sidebar_label: 'Départements'
hide_title: 'false'
---

## Départements

<figure>
    <audio
        controls
        src="audiobasic/Departments.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Privilèges de fonction De sécurité associés aux jobs
* Pour utiliser la catégorie Département, les privilèges de fonction doivent être autorisés et le code d'accès doit être associé aux Jobs nécessitant ce type de sécurité.
* Un seul département peut être utilisé pour sécuriser autant de Jobs différents que nécessaire


_Trois étapes pour configurer des départements dans OpCon_ :  

* Créer un département (**Sécurité > Départements**)
* Autoriser des privilèges de fonction de département à un département (**Sécurité > Privilèges > Privilèges Fonction par Département**)
* Attribuer un Département à n'importe quel Job qui nécessite ces privilèges de fonction de Département (**Job Master**)
* le seul champ obligatoire est le **Nom**
* Utiliser le champ Documentation pour la justification du Département est la meilleure pratique

<a href="imgbasic/307.png" target="_blank"><img src="imgbasic/307.png" width="500"></img></a>

### Privilèges Fonction par Département

* **Les Privilèges Fonction par Département** sont utilisés pour octroyer des privilèges opérationnels liés aux Jobs
* Les Privilèges Fonction par Département peuvent être filtrés par département :
    * <All Departments>
    * <General>
    * Départements définis par l'utilisateur
* Lorsque certains privilèges sont accordés, le rôle sélectionné doit également avoir des privilèges de fonction `` supplémentaires '' accordés
    * Exemple: un rôle doté du privilège **Add Jobs to Daily Schedules** doit également disposer des privilèges **View Jobs in Daily Schedules** et **View Jobs in Master Schedules** pour exécuter cette fonction.

<a href="imgbasic/308.png" target="_blank"><img src="imgbasic/308.png" width="500"></img></a>

### Départements du Job Master

* Un Département est affecté aux Jobs dans l'onglet Job Details du Job Master
* Un Job ne peut être attribué qu'à **un seul** département
* Le département par défaut est ```<General>```

<a href="imgbasic/309.png" target="_blank"><img src="imgbasic/309.png" width="500"></img></a>

###### (Cliquez sur les images pour les agrandir)