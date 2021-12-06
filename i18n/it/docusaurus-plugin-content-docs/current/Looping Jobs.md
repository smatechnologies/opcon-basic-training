---
sidebar_label: 'Jobs ricorrenti'
hide_title: 'false'
---

## Jobs ricorrenti

### Job ricorrenti a fronte di Successo

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsOnSuccess.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Lo stesso Job può essere eseguito più volte in modo ricorrente

:::caution Nota
La dipendenza verso i Job successivi non viene risolta fino a quanto non si raggiunge l'ultima esecuzione
:::

<a href="imgbasic/256.png" target="_blank"><img src="imgbasic/256.png" width="500"></img></a>

### Jobs Ripetuti - Offset di riavvio (Restart Offset)

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsRestartOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Un Job necessità di essere ripetuto ad un intervallo preimpostato
* **Intervallo di esecuzione - Run Interval** – End to Start può generare slittamenti dell'ora di Inizio
* **Limiti di esecuzione Run Limits** – una sola o entrambe le opzioni possono essere utilizzate

:::caution Nota
La dipendenza verso i Job successivi non viene risolta fino a quanto non si raggiunge l'ultima esecuzione
:::

<a href="imgbasic/257.png" target="_blank"><img src="imgbasic/257.png" width="500"></img></a>

### Job Ripetuti - Istanze

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsRecurringInstances.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Un Job necessita di essere rieseguito a intervalli non regolari
* **Azione in caso di Sovrapposizione - Action on Overlap of Job Recurrence** permette di eseguire o saltare l'esecuzione di un Job se un'altra istanza è in ritardo o ancora in esecuzione

:::caution Nota
La dipendenza verso i Job successivi non viene risolta fino a quanto non si raggiunge l'ultima esecuzione
:::

<a href="imgbasic/258.png" target="_blank"><img src="imgbasic/258.png" width="500"></img></a>


### Job Ripetuti - In caso di Fallimenti

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsOnFailure.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Un Job può automaticamente riprovare più volte entro il numero di minuti configurato tra i tentativi se il Job fallisce

:::note Nota
OpCon segnalerà un Job come fallito dopo l'ultimo tentativo
:::

<a href="imgbasic/259.png" target="_blank"><img src="imgbasic/259.png" width="500"></img></a>

###### (Click sulla Immagine per ingrandire)