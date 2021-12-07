---
sidebar_label: 'Definire una Request'
hide_title: 'false'
---

## Definire una Request

La definizione di una Request è composta da diversi campi, molti dei quali sono facoltativi:

<a href="imgbasic/SelfServiceRequestDetails.png" target="_blank"><img src="imgbasic/SelfServiceRequestDetails.png" width="500"></img></a>

* **Service Request Name** (```Obbligatorio```)
    * La Service Request Name verrà visualizzato sul pulsante di richiesta di servizio
* **Documentation** (```Facoltativo```)
    * Fornisce istruzioni su cosa fa la Service Request quando gli utenti fanno clic sul pulsante
    * Il testo apparirà come un suggerimento sul pulsante
* **Category** (```Facoltativo```)
    * Associa la Service Request ad una Categoria predefinita
* **Confirmation Message** (```Facoltativo```)
    * Mostra la documentazione come parte della pagina di conferma quando si fa clic sul pulsante Servizio
    * Lo switch Confirmation Message deve essere impostato a ```True``` quando è stata definita una variabile ambientale
* **Custom HTML** (```Facoltativo```)
    * Consente la modifica del codice HTML per personalizzare la visualizzazione del pulsante della Service Request
* **Disable Rule** (```Facoltativo```)
    * Consente la definizione di una regola per disabilitare il pulsante della Service Request
* **Hide Rule** (```Facoltativo```)
    * Consente la definizione di una regola per nascondere il pulsante della Service Request

<a href="imgbasic/SelfServiceRequestDetails2.png" target="_blank"><img src="imgbasic/SelfServiceRequestDetails2.png" width="500"></img></a>

* **Events** (```Obbligatorio```)
    * Consente la definizione di Eventi avviati dal pulsante della Service Request
* **Track Event Executions** (```Facoltativo```)
    * Monitora l'esecuzione di qualsiasi lavoro in modo dinamico
    * Se la Service Request è definita con eventi $JOB:ADD, l'opzione terrà traccia dei Job aggiunti per monitorare il successo
* **Submit Events as OCADM** (```Facoltativo```)
    * Se si usa il ruolo ```ocadm```:
    * Gli eventi procederanno sempre senza problemi di privilegi
    * Se non selezionato, il SAM verificherà i privilegi dell'utente OpCon quando si fa clic sul pulsante della Service Request
* **User Inputs** (```Facoltativo```)
    * Quando le variabili sono definite negli eventi OpCon, verranno automaticamente raccolte e utilizzate come input dell'utente
    * Verrà visualizzato quando si fa clic sul pulsante Service Request
    * Gli utenti possono fornire valori per sostituire le variabili negli eventi OpCon
* **Show for Role** (```Obbligatorio```)
    * Consente all'utente di assegnare la Service Request a uno o più Ruoli OpCon
    * Solo gli utenti abilitati al/ai Ruoli sono abilitati alla visualizzazione ed all'utilizzo della Service Request

###### (Click sulla Immagine per ingrandire)
