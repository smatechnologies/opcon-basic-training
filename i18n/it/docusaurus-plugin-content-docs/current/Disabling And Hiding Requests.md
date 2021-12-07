---
sidebar_label: 'Disabilitare e Nascondere Requests'
hide_title: 'false'
---

## Disabilitare e Nascondere Requests

Le regole per disabilitare o nascondere i pulsanti delle Service Request possono essere definite utilizzando le regole o le espressioni OpCon

Una regola può essere una delle seguent:

* Un valore booleano (vero/falso)
* Un token il cui valore si risolve in (vero/falso)
* Un'espressione complessa (Complex Expression)

:::note Nota
* _Sia la ```Disable Rule``` che la ```Hide Rule``` sono opzionali_
* _Se nessuna delle due regole è definita, il pulsante della Service Request sarà abilitato e visibile_
:::

### Disabilitare una Service Requests

Per definire una regola per disabilitare una service request:

* Fare clic sul pulsante Modifica nell'angolo in alto a destra del pulsante della Service Request

<a href="imgbasic/SelfServiceSampleButton.png" target="_blank"><img src="imgbasic/SelfServiceSampleButton.png" width="500"></img></a>

* Viene visualizzata la pagina di modifica della Service Request
* Spostare lo switch Disable Rule
    * Viene visualizzato un campo di testo per inserire l'espressione
    * Inserisci un valore booleano, un token o un'espressione complessa

<a href="imgbasic/SelfServiceDisableRuleBoolean.png" target="_blank"><img src="imgbasic/SelfServiceDisableRuleBoolean.png" width="500"></img></a>

<a href="imgbasic/SelfServiceDisableRuleToken.png" target="_blank"><img src="imgbasic/SelfServiceDisableRuleToken.png" width="500"></img></a>

<a href="imgbasic/SelfServiceDisableRuleExpression.png" target="_blank"><img src="imgbasic/SelfServiceDisableRuleExpression.png" width="500"></img></a>

### Nascondere una Service Requests

Per definire una regola per nascondere una service request:

* Fare clic sul pulsante Modifica nell'angolo in alto a destra del pulsante della Service Request

<a href="imgbasic/SelfServiceSampleButton.png" target="_blank"><img src="imgbasic/SelfServiceSampleButton.png" width="500"></img></a>

* Viene visualizzata la pagina di modifica della Service Request
* Spostare lo switch Hide Rule
    * Viene visualizzato un campo di testo per inserire l'espressione
    * Inserisci un valore booleano, un token o un'espressione complessa

<a href="imgbasic/SelfServiceHideRuleBoolean.png" target="_blank"><img src="imgbasic/SelfServiceHideRuleBoolean.png" width="500"></img></a>

<a href="imgbasic/SelfServiceHideRuleToken.png" target="_blank"><img src="imgbasic/SelfServiceHideRuleToken.png" width="500"></img></a>

<a href="imgbasic/SelfServiceHideRuleExpression.png" target="_blank"><img src="imgbasic/SelfServiceHideRuleExpression.png" width="500"></img></a>

###### (Click sulla Immagine per ingrandire)