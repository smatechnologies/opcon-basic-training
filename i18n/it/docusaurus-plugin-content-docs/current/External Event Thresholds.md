---
sidebar_label: 'Eventi Esterni su Soglie'
hide_title: 'false'
---

## Eventi Esterni su Soglie

### Eventi Esterni su Soglie

* Come ogni altro evento, ```$THRESHOLD:SET``` può essere utilizzato come evento esterno
* Vantaggi: Può utilizzare ```+``` e ```–``` per calcoli

:::note Esempio:  
```$THRESHOLD:SET,<threshold name>,+1```  
```$THRESHOLD:SET,<threshold name>,-1```  
:::

* Thresholds possono essere utilizzate per contare i file

:::note Esempio:  
* Un'azienda riceve ogni giorno dei file che devono essere contati
    * Il processo File Watcher può rimanere in ascolto per la ricezione dei files
    * Ogni volta che arriva un file, il processo aggiunge 1 alla Threshold
    * Impostando le Notifiche è possibile evidenziare il valore della soglia raggiunta
:::

<a href="imgbasic/415.png" target="_blank"><img src="imgbasic/415.png" width="500"></img></a>
