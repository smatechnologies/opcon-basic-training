---
sidebar_label: 'Risorse'
hide_title: 'false'
---

## Risorse

<figure>
    <audio
        controls
        src="audiobasic/Resources.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Risorsa (Resource**): valore definito dall'utente composto da nome e limite numerico
* Le risorse vengono utilizzate per gestire e limitare il numero di Job in esecuzione contemporanea su Schedules e macchine in OpCon

* La proprietà **Max Concurrent Jobs** nelle Proprietà Avanzate di Macchina (Advanced Machine Properties) limita il numero di Job concorrenti in esecuzione su una specifica Macchina
    * E' possibile creare dipendenze verso **ogni** Risorsa
    * SAM è responsabile di tenere traccia delle risorse in uso

:::note Nota
Se tutte le Risorse sono in uso, SAM attende che una Risorsa sia disponibile prima di inviare il Job successivo
:::

<a href="imgbasic/401.png" target="_blank"><img src="imgbasic/401.png" width="500"></img></a>  
<a href="imgbasic/402.png" target="_blank"><img src="imgbasic/402.png" width="500"></img></a>  

### Risorse - Proprietà dell'istanza

* È possibile recuperare il valore massimo di una risorsa

```[[RM.ResourceName]]```

* È anche possibile recuperare il numero di risorse "in uso" 

```[[RU.ResourceName]]```

<a href="imgbasic/403.png" target="_blank"><img src="imgbasic/403.png" width="500"></img></a>  
<a href="imgbasic/404.png" target="_blank"><img src="imgbasic/404.png" width="500"></img></a>  

### Frequenze - SAM Priority

<figure>
    <audio
        controls
        src="audiobasic/FrequencySAMPriority.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Utilizzato se viene raggiunto il Max Concurrent delle due caratteristiche seguenti:
    * La macchina ha raggiunto il limite massimo di lavori (i valori predefiniti di ```Windows``` e ```UNIX``` sono ```50```)
    * Una risorsa ha tutte le risorse in uso
* Il Job con la **SAM Priority** più alta verrà eseguito per primo se più Job sono in attesa di una risorsa o il limite di Job per Macchina è al completo


<a href="imgbasic/405.png" target="_blank"><img src="imgbasic/405.png" width="500"></img></a>  
<a href="imgbasic/406.png" target="_blank"><img src="imgbasic/406.png" width="500"></img></a>  

###### (Click sulla Immagine per ingrandire)