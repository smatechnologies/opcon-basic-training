---
sidebar_label: 'Cambio stile pulsanti Service Request'
hide_title: 'false'
---

## Cambio stile pulsanti Service Request 

E' possibile cambiare come appaioni i pulsanti delle Service Request usando un HTML custom

Per customizzare un pulsante:

Fare clic sul pulsante ```Edit``` nell'angolo in alto a destra del pulsante della Service Request per editare il pulsante della Service Request
Spostare lo switch **Custom HTML**,
un campo di testo viene visualizzato per l'immissione del codice HTML personalizzato

<a href="imgbasic/SelfServiceCustomHTMLBlank.png" target="_blank"><img src="imgbasic/SelfServiceCustomHTMLBlank.png" width="500"></img></a>

Inserisci il seguente codice HTML del modello:

```
<div style="background-color: #043A4F;height: 12px;width:200px;border-radius: 3px;border: 2px solid #043A4F;color: white;font-size: 14px;font-weight: bold;padding: 25px">

    <span class="v-icon FontAwesome" style="color: #93D7FA">&#xf0ac</span>

    <span>SERVICE REQUEST NAME</span>
</div>
```

Modifica il codice a piacere

* Un'anteprima del pulsante e le eventuali modifiche appariranno sopra il campo di testo

<a href="imgbasic/SelfServiceCustomHTMLExample.png" target="_blank"><img src="imgbasic/SelfServiceCustomHTMLExample.png" width="500"></img></a>

Di seguito sono riportati alcuni consigli per l'aggiornamento dell'icona e del testo sul pulsante:

Per modificare l'icona del carattere che appare sul pulsante:

* Cambia il**colore** dell'icona inserendo un nuvo codice colore **HEX** nel modello:

 ```<span class="v-icon FontAwesome" style="color: #ff8f8f">&#xf0ac</span>``` 

 **#ff8f8f**

<a href="imgbasic/SelfServiceCustomHTMLIconChange.png" target="_blank"><img src="imgbasic/SelfServiceCustomHTMLIconChange.png" width="500"></img></a>

* Cambia l'**aspetto** dell'icona del carattere inserendo o incollando un nuovo **Unicode** nel modello:

```<span class="v-icon FontAwesome" style="color: #93D7FA">&#xf1C0</span>```

**xf1C0**

<a href="imgbasic/SelfServiceCustomHTMLIconChangeUnicode.png" target="_blank"><img src="imgbasic/SelfServiceCustomHTMLIconChangeUnicode.png" width="500"></img></a>