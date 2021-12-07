---
sidebar_label: 'Modalità utente'
hide_title: 'false'
---

## Modalità utente

Gli utenti non nel Ruolo ```ocadm``` o in un Ruolo senza il privilegio ```Maintain Service Request``` vedranno la pagina del Self Service Page con i soli pulsanti delle Service Request su cui hanno i privilegi

<a href="imgbasic/SelfServiceUserModeView.png" target="_blank"><img src="imgbasic/SelfServiceUserModeView.png" width="500"></img></a>

### Eseguire una Service Request in Modalità Utente (User Mode)

* Fare clic sul pulsante Service Request
* Procedere in base a uno dei due suggerimenti:
    * Se una Service Request è configurato senza input, la Service Request chiederà all'utente di fare clic sul pulsante ```Submit``` per continuare o sul pulsante ```Cancel``` per interrompere la richiesta
    * Se sono configurati degli User Input, the Service Request consentirà all'utente di configurare i campi di input dell'utente per effettuare le Richiesta
* La pagina applicherà tutte le regole di convalida
    * Se la convalida fallisce, un messaggio in rosso indicherà una voce non valida
    * La convalida del modulo avviene ogni volta che si fa clic sul pulsante ```Submit```

<a href="imgbasic/SelfServiceRequestRequiredFields.png" target="_blank"><img src="imgbasic/SelfServiceRequestRequiredFields.png" width="500"></img></a>

###### (Click sulla Immagine per ingrandire)