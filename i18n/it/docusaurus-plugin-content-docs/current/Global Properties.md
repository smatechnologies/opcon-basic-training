---
sidebar_label: 'Proprietà Globali'
hide_title: 'false'
---

## Proprietà Globali

<figure>
    <audio
        controls
        src="audiobasic/GlobalProperties.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Le **Proprietà Globali** sono variabili memorizzate nel database che possono essere utilizzate in tutto OpCon
    * Le proprietà sono definite con un nome e un valore

:::note Nota
Per usare una proprietà globale in OpCon (linee di comando, eventi, ecc.) usate la seguente notazione:

```[[<Global Property Name>]]```

Esemprio:

```[[PATH-TO-SCRIPTS]]```
:::

* OpCon sostituirà la proprietà globale con il valore dato a Runtime

* La schermata delle **Global Properties** è usato per gestire le proprietà, nell'istanza OpCon, che si applicano all'intero ambiente

<a href="imgbasic/201.png" target="_blank"><img src="imgbasic/201.png" width="500"></img></a>  

* Usare una proprietà globale nella riga di comando

<a href="imgbasic/202.png" target="_blank"><img src="imgbasic/202.png" width="500"></img></a>

###### (Click sulla Immagine per ingrandire)

### Risoluzione dei problemi con le Global Properties

<figure>
    <audio
        controls
        src="audiobasic/TroubleshootingGlobalProperties.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

Esempio

* Job rimangono nello stato ```On Hold```
    * Se SAM non è in grado di risolvere una Proprietà, metterà, in fase di esecuzione, il Job nello stato sospeso “On Hold”
    * Sia il SAM che i Critical Logs riporteranno quale Proprietà ha un errore

<a href="imgbasic/203.png" target="_blank"><img src="imgbasic/203.png" width="500"></img></a> 

### Encrypted Global Property

<figure>
    <audio
        controls
        src="audiobasic/EncryptedGlobalProperty.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Il valore di una Global Property può essere cifrato semplicemente impostando l'opzione Encrypted e salvando la Global Property
* Questo valore è decifrato dall'agent LSAM a Runtime
* Non c'è un'opzione di decrittazione
* Utile per valori come le password

<a href="imgbasic/204.png" target="_blank"><img src="imgbasic/204.png" width="250"></img></a>  

<a href="imgbasic/205.png" target="_blank"><img src="imgbasic/205.png" width="250"></img></a>  

###### (Click sulla Immagine per ingrandire)