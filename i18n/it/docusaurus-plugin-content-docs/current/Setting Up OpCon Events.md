---
sidebar_label: 'Impostare Eventi OpCons'
hide_title: 'false'
---

## Impostare Eventi OpCons

Per aggiungere un nuovo evento OpCon in Self Service:

All'interno di una **Nuova pagina Service Request** fare clic sul pulsante **Verde** ```Add``` vicino alla etichetta **Events**
Selezionare un **OpCon Event Template**
Inserire le **Variables** nell'Evento usando la notazione: ```${variable}```

<a href="imgbasic/SelfServiceEditEvent.png" target="_blank"><img src="imgbasic/SelfServiceEditEvent.png" width="500"></img></a>

* Le Variabili verranno quindi raccolte come **User Inputs** per essere configurate all'invio della Request

<a href="imgbasic/SelfServiceVariableUserInputs.png" target="_blank"><img src="imgbasic/SelfServiceVariableUserInputs.png" width="500"></img></a>

Le seguenti **Variabili di sistema** sono disponibili in modo specifico per il **Solution Manager**:

* ```${SM.USER.LOGIN}```
    * Risolve al nome definito per l'utente OpCon che ha fatto clic sul pulsante della Service Request
* ```${SM.USER.NAME}```
    * Risolve al nome completo per l'utente OpCon che ha fatto clic sul pulsante della Service Request
* ```${SM.USER.EMAIL}```
    * Risolve l'indirizzo email dell'utente OpCon che ha fatto clic sul pulsante della Service Request
* ```${SM.USER.COMMENTS}```
    * Risolve i commenti definiti per l'utente OpCon che ha fatto clic sul pulsante della Service Request

:::note Nota
* _La definizione dell'evento verrà visualizzata in anteprima in un elenco a discesa sotto il modello dell'evento_
* _Le variabili dell'evento verranno risolte prima che l'evento venga inviato a OpCon_
:::

### Modifica Manuale

Per modificare manualmente un evento, fai clic sul pulsante **Manual Edit**

* La modifica manuale può essere utilizzata per definire un evento manualmente o per modificare un evento che è stato definito con il Template

<a href="imgbasic/SelfServiceEventManualEditButton.png" target="_blank"><img src="imgbasic/SelfServiceEventManualEditButton.png" width="500"></img></a>

<a href="imgbasic/SelfServiceEventManualEditScreen.png" target="_blank"><img src="imgbasic/SelfServiceEventManualEditScreen.png" width="500"></img></a>

### Ordine degli Eventi

* L'ordine degli eventi definiti può essere modificato utilizzando le frecce su e giù nella parte superiore dell'elenco event
    * L'ordine mostrato nell'Elenco eventi è l'ordine, dall'alto verso il basso, in cui gli Eventi verranno passati ed elaborati dal SAM

<a href="imgbasic/SelfServiceEventOrder.png" target="_blank"><img src="imgbasic/SelfServiceEventOrder.png" width="500"></img></a>

###### (Click sulla Immagine per ingrandire)