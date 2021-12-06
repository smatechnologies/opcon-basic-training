---
sidebar_label: 'Configurazioni Comuni di Ruoli'
hide_title: 'false'
---

## Configurazioni Comuni di Ruoli

<figure>
    <audio
        controls
        src="audiobasic/CommonRoleConfigurations.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Tre gruppi di utenti principali (ruoli) per i privilegi OpCon:
    * **Amministratori - Administrators**
    * **Addetti alla Schedulazione - Schedulers**
    * **Operatori - Operators**

#### Amministratori

* Gli amministratori OpCon devono assicurarsi che tutti gli utenti OpCon abbiano i privilegi necessari
* All'amministratore OpCon con l'ID utente ```ocadm``` vengono automaticamente concessi tutti i privilegi a tutto ciò che è all'interno di OpCon, **incluso** accesso a "Opzioni server" e la possibilità di modificare la pianificazione o le frequenze di lavoro che interessano più Job
* Quando si creano nuovi account utente amministratore, i privilegi desiderati devono essere selezionati in modo accurato

#### Schedulers

* Queste persone saranno dedicate alla progettazione e manutenzione dei Job e della relativa schedulazione
* Avranno bisogno di quanto più accesso possibile a ogni sezione all'interno di Enterprise Manager ad eccezione della sezione ‘Administration’
* I privilegi elencati nell'immagine possono essere una guida per l'assegnazione dei privilegi alle persone con ruolo di Schedulers in OpCon

<a href="imgbasic/316.png" target="_blank"><img src="imgbasic/316.png" width="500"></img></a>  
<a href="imgbasic/317.png" target="_blank"><img src="imgbasic/317.png" width="250"></img></a>  

#### Operators

* Queste persone monitoreranno i Job e le schedulazioni su base giornaliera
* Avranno bisogno dei privilegi per vedere ogni pianificazione ed essere in grado di eseguire la manutenzione prima e dopo l'esecuzione di un Job e/o Schedule (Riavvio Job, Avvio Job Forzato, Avvio Schedule Forzato, Rilascio di Schedule, ecc.))
* I privilegi elencati nell'immagine possono essere una guida per l'assegnazione dei privilegi alle persone con ruolo di Operators in OpCon

<a href="imgbasic/318.png" target="_blank"><img src="imgbasic/318.png" width="500"></img></a>  
<a href="imgbasic/319.png" target="_blank"><img src="imgbasic/319.png" width="250"></img></a>  

###### (Click sulla Immagine per ingrandire)
