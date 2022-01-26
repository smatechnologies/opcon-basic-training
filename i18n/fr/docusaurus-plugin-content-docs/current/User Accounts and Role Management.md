---
sidebar_label: 'Comptes d utilisateurs et gestion des rôles'
hide_title: 'false'
---

## Comptes utilisateurs et gestion des rôles

### SMA LDAP Monitor

<figure>
    <audio
        controls
        src="audiobasic/SMALDAPMonitor.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* SMA LDAP Monitor permet l'intégration de la sécurité du réseau pour les comptes utilisateurs avec les connexions automatiques à OpCon
* SMA LDAP Monitor vérifie le serveur LDAP pour synchroniser les utilisateurs avec les utilisateurs OpCon
  * Il peut exister dans Active Directory ou OpenLDAP
      * Actuellement SMA LDAP Monitor ne prend pas en charge les unités organisationnelles dans Active Directory
      * Les utilisateurs de l'unité organisationnelle doivent être placés dans un groupe pour être trouvés et synchronisés
  * L'administrateur OpCon peut définir le nom du groupe LDAP et le rôle OpCon par défaut
* SMA LDAP Monitor est un composant optionnel qui doit être configuré dans le fichier ```SMAServMan.ini```
* Le nom du programme est ```SMALDAPMon.exe```
* Géré par le SMA Service Manager
* Le fichier de configuration est ```SMALDAPMon.ini```
* Dans le répertoire ```<Configuration Directory>\SAM\```
* Des spécifications supplémentaires pour la configuration LDAP sont disponibles dans l'aide utilisateur


### Comptes utilisateur

<figure>
    <audio
        controls
        src="audiobasic/UserAccounts.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Les comptes utilisateurs sont des connexions individuelles et sont requis pour accéder à OpCon
* Une fois authentifié, le compte utilisateur hérite des privilèges Via les **Rôles (Profils)**

* Champs obligatoires :
  * ID de connexion utilisateur (nom)
  * Nom complet Utilisateur
  * Au moins un rôle attribué
* Adresse e-mail
  * Ceci est requis pour L’escalade des notifications (qui sera traité plus tard dans cette unité)
  * Si le champ n'est pas modifiable, les informations de connexion SMTP ne sont pas configurées dans OpCon

<a href="imgbasic/3301.png" target="_blank"><img src="imgbasic/3301.png" width="500"></img></a>  

### Les rôles

<figure>
    <audio
        controls
        src="audiobasic/Roles.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

Roles are used to maintain Privileges for multiple User Accounts  

* Les rôles sont attribués aux comptes d'utilisateurs
* L'utilisateur (administrateur) doit être dans le rôle ```ocadm``` ou membre d'un rôle avec tous les privilèges de fonction ou toutes les fonctions administratives pour gérer les rôles et les comptes d'utilisateurs
* Les privilèges sont accordés par l'administrateur à un rôle spécifique
  * Cases à cocher « Hériter des Privilèges » :
    * **Si coché** : le rôle inclura automatiquement les privilèges accordés pour tous les éléments, y compris tous les nouveaux éléments
    * **S'il n'est pas marqué** : le rôle n'inclura que les privilèges spécifiques accordés

<a href="imgbasic/3302.png" target="_blank"><img src="imgbasic/3302.png" width="500"></img></a>

###### (Cliquez sur les images pour les agrandir)