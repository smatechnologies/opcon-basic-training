---
sidebar_label: 'Proprietà di Sistema'
hide_title: 'false'
---

## Proprietà di Sistema

### Proprietà a livello di sistema e di istanza

<figure>
    <audio
        controls
        src="audiobasic/SystemAndInstanceProperties.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

:::info
_Promemoria_ : le **Proprietà (Properties)** sono variabili memorizzate nel database che possono essere utilizzate in tutto OpCon
* Definite come Nome e Valore
:::

* **Proprietà Globali (Global Properties)** (OpCon Instance Properties) sono variabili associate all'intero ambiente
* **Proprietà a livello di Job (Job Instance Properties)** sono variabili associate ad uno specifico Job
* **Proprietà a livello di Schedule (Schedule Instance Properties)** sono variabili associate ad uno specifico Schedule
* **Proprietà a livello di Machine (Machine Instance Properties)** sono variabili associate ad una specifica Machine

### Proprietà di sistema e proprietà definite dall'utente

* Tutte le proprietà globali (Global Properties) che iniziano con un simbolo del dollaro (```$```) sono note come proprietà del sistema
* Le proprietà del sistema (System Properties) forniscono valori variabili che dipendono dal Sistema
* Molti di questi valori di sistema possono essere modificati a livello di **formato**
    * Ad esempio la variabile di sistema: $DATE può essere impostata come ```mmddyy```, ```yyyymmdd```, ```mm```, etc.
* ```$DATE``` è la data corrente del server OpCon
    * ```$SCHEDULE DATE``` è la data in cui uno Schedule è stato messo a piano (Built)
        * Se uno Schedule viene messo a piano per il Gennaio 1 alle ```23:50```, ma l'esecuzione avviene il giorno 2nd at ```3:30```, tutte le proprietà basate ```$SCHEDULE DATE``` saranno risolte come Gennaio ```1```

<a href="imgbasic/334.png" target="_blank"><img src="imgbasic/334.png" width="300"></img></a>

### Scostamenti (Offsets) sulle Proprietà di Sistema

<figure>
    <audio
        controls
        src="audiobasic/SystemPropertiesOffsets.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Alle proprietà di sistema ```$DATE``` oppure ```$SCHEDULE DATE``` possono essere applicati degli scostamenti (offset)
* Esempio:
    * ```[[$DATEmmddyy(+1d)]]``` oppure ```[[$DATEmmddyy(-1d)]]``` per scostamenti a livello di giorni

<a href="imgbasic/335.png" target="_blank"><img src="imgbasic/335.png" width="500"></img></a>  
<a href="imgbasic/336.png" target="_blank"><img src="imgbasic/336.png" width="500"></img></a>  

* **Scostamendi di Giorni**
    * ```[[$DATEmmddyy(+1d)]]``` o ```[[$DATEmmddyy(-1d)]]``` per scostamenti di giorni
* **Scostamendi di Giorni Lavorativi**
    * ```[[$SCHEDULE DATEmmddyy(+1wd)]]``` o ```[[$SCHEDULE DATEmmddyy(-1wd)]]``` Scostamendi di Giorni Lavorativi
        * ```$SCHEDULE DATE``` è richiesto per questo tipo di Scostamendi di Giorni Lavorativi
* **Scostamenti di Mesi**
    * ```[[$DATEmmddyy(+1m)]]``` o ```[[$DATEmmddyy(-1m)]]``` Scostamenti Mensili
        * Non ci sono scostamenti spcifici per gli anni – Utilizzare ```(+12m)``` o ```(-12m)``` per scostamenti annuali
* **Fine mese**
    * ```[[$DATEmmddyy(+1eom)]]``` Il valore trova l'ultimo giorno del mese corrente
        * ```+1``` è il mese corrente 
        * ```+2``` è il mese successivo
    * ```[[$DATEmmddyy(-1eom)]]``` Il valore trova l'ultimo giorno del mese precedente