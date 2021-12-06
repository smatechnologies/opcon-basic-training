---
sidebar_label: 'Reparti'
hide_title: 'false'
---

## Reparti

<figure>
    <audio
        controls
        src="audiobasic/Departments.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Privilegi di sicurezza di Funzione associati a singoli Job records
* Per utilizzare la categoria Department (Dipartimenti/Reparti), è necessario concedere i privilegi di funzione e associare il codice di accesso ai Job che richiedono questo tipo di sicurezza
* Un singolo Department può essere utilizzato per gestire tutti i job necessari

_Ci sono tre passaggi per impostare i Departments in OpCon_:  

* Creare un Department (**Security > Departments**)
* Assegnare al Department i privilegio di funzione necessari (Function Privileges) (**Security > Privileges > Departmental Function Privileges**)
* Assegnare, nel **Job Master** un Department a qualsiasi Job su cui si rendano necessari i determinati Privilegi Dipartimentali (Department Function Privileges)
* L'unico campo richiesto è **Name**
* L'utilizzo del campo Documentazione per la logica del dipartimento è la migliore pratica

<a href="imgbasic/307.png" target="_blank"><img src="imgbasic/307.png" width="500"></img></a>

### Privilegi di Funzione per Reparto - Departmental Function Privileges

* I Departmental Function Privileges vengono utilizzati per concedere privilegi operativi relativi ai Jobs
* I privilegi delle funzioni dipartimentali possono essere filtrati per reparto:
    * All Departments
    * Department
    * Dipartimenti definiti dall'utente - User Defined Departments
* Quando vengono concessi alcuni privilegi, al ruolo selezionato devono essere concessi anche privilegi di funzione "aggiuntivi"
    * Esempio: un ruolo a cui è concesso il privilegio di aggiungere job nelle pianificazioni giornaliere :Add Jobs to Daily Schedules deve anche avere la possibilità di vedere i Job negli Schedule giornalieri: View Jobs in Daily Schedules ad il privilegio View Jobs in Master Schedules per poter eseguire questa funzione

<a href="imgbasic/308.png" target="_blank"><img src="imgbasic/308.png" width="500"></img></a>

### Reparti (Departments) nel Job Master

* Un reparto (Department) è assegnato ai Job nella schedaJob Details del Job Master
* Un Job può essere assiociato ad un **unico** Department
* Il reparto (Department) di Default ```<General>```

<a href="imgbasic/309.png" target="_blank"><img src="imgbasic/309.png" width="500"></img></a>

###### (Click sulla Immagine per ingrandire)