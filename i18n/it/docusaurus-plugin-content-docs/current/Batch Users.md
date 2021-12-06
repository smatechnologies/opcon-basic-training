---
sidebar_label: 'Utenti Batch'
hide_title: 'false'
---

## Utenti Batch

<figure>
    <audio
        controls
        src="audiobasic/BatchUsersAndPrivileges.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* L' editor utente batch viene utilizzato per creare e gestire gli **utenti batch** necessari per l'elaborazione dei lavori su ```Windows```, ```i5OS```, ```MCP```, ```UNIX``` e ```OpenVMS```

* I privilegi associati a questi utenti batch sono gestiti nella schermata **Batch User Privileges**

<a href="imgbasic/3305.png" target="_blank"><img src="imgbasic/3305.png" width="500"></img></a>


### Privilegi Utenti Batch - Batch User Privileges

* Questi sistemi operativi richiedono un ID utente valido da associare a ciascun Job inviato da OpCon
    * IBM i (user ID)
    * MCP (Usercode)
    * OpenVMS (user ID)
    * UNIX (user ID / group ID)
    * Windows (user ID)

:::note Nota
L'Agent SQL richiede anche un privilegio utente batch valido aggiunto
:::

<a href="imgbasic/3306.png" target="_blank"><img src="imgbasic/3306.png" width="500"></img></a>  

###### (Click sulla Immagine per ingrandire)