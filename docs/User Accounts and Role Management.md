---
sidebar_label: 'User Accounts and Role Management'
---

### SMA LDAP Monitor

<!--
<figure>
    <audio
        controls
        src="audiobasic/SMALDAPMonitor.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
-->

* SMA LDAP Monitor allows integration of network security for User Accounts with automatic logins to OpCon
* SMA LDAP Monitor checks the LDAP server to sync Active Directory Groups with OpCon Users
  * Can exist in Active Directory or OpenLDAP
    * SMA LDAP Monitor does not currently support Organizational Units in Active Directory
    * Organizational Unit users must be placed in a Group to be found and synced
  * OpCon Administrator can define the LDAP Group name and default OpCon Role

* SMA LDAP Monitor is an optional component that must be configured in the ```SMAServMan.ini``` file
* Program name is ```SMALDAPMon.exe``` 
* Managed by the SMA Service Manager
* Configuration file is ```SMALDAPMon.ini``` 
* Resides in the ```<Configuration Directory>\SAM\folder```
* Further specifications for LDAP Setup can be found in User Help

### User Accounts

<!--
<figure>
    <audio
        controls
        src="audiobasic/UserAccounts.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
-->

* User Accounts are Individual sign-ons and are required for access to OpCon 
* Once authenticated, User Account inherits Privileges through **Roles**

* Required fields:
  * User Login ID (Name)
  * Full User Name
  * At least one assigned Role
* E-mail Address
  * This is required for Email Escalation (to be covered later in this Unit)
  * If the field is not editable, the SMTP connection information is not configured within OpCon

<a href="imgbasic/3301.png" target="_blank"><img src="imgbasic/3301.png" width="500"></img></a>  

### Roles

<!--
<figure>
    <audio
        controls
        src="audiobasic/Roles.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
-->

Roles are used to maintain Privileges for multiple User Accounts  

* Roles are assigned to User Accounts
* The User (Administrator) must be in the ```ocadm``` Role or a member of a Role with All Function Privileges or All Administrative Functions to manage Roles and User Accounts
* Privileges are granted by the Administrator to a specific Role
  * Inherit Privileges check boxes:
    * **If marked**: Role will automatically include Privileges granted for all items including all new items
    * **If not marked**: Role will only include specific Privileges granted

<a href="imgbasic/3302.png" target="_blank"><img src="imgbasic/3302.png" width="500"></img></a>

###### (Click Images to Enlarge)