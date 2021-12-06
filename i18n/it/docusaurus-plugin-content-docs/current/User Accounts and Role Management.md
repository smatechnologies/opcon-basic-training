---
sidebar_label: 'Utenti e gestione dei Ruoli'
hide_title: 'false'
---

## Utenti e gestione dei Ruoli

### SMA LDAP Monitor

<figure>
    <audio
        controls
        src="audiobasic/SMALDAPMonitor.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* SMA LDAP Monitor consente la gestione della sicurezza integrate di rete per gli account utente con gli accessi automatici a OpCon
* SMA LDAP Monitor controlla il server LDAP per sincronizzare gli utenti con gli utenti OpCon
    * Può esistere in Active Directory o OpenLDAP
        * SMA LDAP Monitor attualmente non supporta le unità organizzative in Active Directory
        * Gli utenti dell'unità organizzativa devono essere inseriti in un gruppo per essere trovati e sincronizzati
    * L'amministratore OpCon può definire il nome del gruppo LDAP e il ruolo OpCon predefinito
* SMA LDAP Monitor è un componente opzionale che deve essere configurato nel file ```SMAServMan.ini```
* Il nome del programma è ```SMALDAPMon.exe```
* E' gestito dallo SMA Service Manager
* Il file di configurazione è ```SMALDAPMon.ini```
* Resiede nel percorso ```<Configuration Directory>\SAM\folder```
* Ulteriori specifiche per l'impostazione LDAP sono disponibili nella Guida per l'utente

### Accounts utente

<figure>
    <audio
        controls
        src="audiobasic/UserAccounts.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Gli account utente sono accessi individuali e sono necessari per l'accesso a OpCon
* Una volta autenticato, l'account utente (User Account) eredita i privilegi tramite i Ruoli **(Roles)**
* Campi richiest:
    * User Login ID (Nome)
    * Nome completo
    * Almeno un ruolo assegnato
* Indirizzo E-mail
    * Questo è necessario per la mail di escalation (trattato più avanti in questa unità)
    * Se il campo non è modificabile, le informazioni sulla connessione SMTP non sono configurate all'interno di OpCon

<a href="imgbasic/3301.png" target="_blank"><img src="imgbasic/3301.png" width="500"></img></a>  

### Ruoli

<figure>
    <audio
        controls
        src="audiobasic/Roles.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

I ruoli vengono utilizzati per mantenere i privilegi per più account utente

* I ruoli sono assegnati agli account utente
* L'utente (amministratore) deve essere nel ruolo ocadm o membro di un ruolo con tutti i privilegi di funzione o tutte le funzioni amministrative (All Function Privileges or All Administrative Functions) per gestire ruoli e account utente
* I privilegi sono concessi dall'amministratore a un ruolo specifico
    * Caselle di controllo Eredita privilegi:
        * **Se contrassegnato**: il ruolo includerà automaticamente i privilegi concessi per tutti gli elementi, inclusi tutti i nuovi elementi
        * **Se non contrassegnato**: il ruolo includerà solo privilegi specifici concessi

<a href="imgbasic/3302.png" target="_blank"><img src="imgbasic/3302.png" width="500"></img></a>

###### (Click sulla Immagine per ingrandire)