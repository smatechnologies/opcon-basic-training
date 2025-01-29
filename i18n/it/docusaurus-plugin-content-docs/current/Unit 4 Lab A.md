---
sidebar_label: 'Unità 4 Lab A'
hide_title: 'false'
---

## Unità 4 Lab A

##### Obiettivo:

Congo Online Retail Inc. deve aggiornare l'inventario in base alle Richieste di acquisto con un programma denominato **Congo Update Inventory**.

Viene eseguito uno Script per ogni prodotto (Taggato per Categoria):

**Toys** 

Legos: ```[[SCRIPTS]]\UpdInvLegos.CMD``` 

Nerf: ```[[SCRIPTS]]\UpdInvNerf.CMD```

**Clothing**

Nike: ```[[SCRIPTS]]\UpdInvNike.CMD```   

:::note Nota
_Questo script utilizza la ```MSGIN``` per impostare una **Threshold**_
:::

Levis: ```[[SCRIPTS]]\UpdInvLevis.CMD``` 

**Electronics**

Smartphones: ```[[SCRIPTS]]\UpdInvSmartphones.CMD``` 

XBOX: ```[[SCRIPTS]]\UpdInvXBOX.CMD```

I Jobs devono essere eseguiti nell'ordine in cui sono elencati sopra dal lunedì al venerdì.

Ci sono 2 eccezioni:

1. Il Job **Nike** richiede molto tempo per finire; Il Job **Levis non deve** attendere il completamento job **Nike** – Lo script **Nike** aggiornerà una **Threshold** chiamata ```LEVISThreshold``` che deve essere creata con un valore ```0``` sul Job Levis Job. Un **Evento** ```$THRESHOLD:SET``` deve essere impostato sul Job **Levis** per far tornare il valore a ```0```.

2. Gli script **Smartphones** e **XBOX** usano molta CPU – Non **possono essere eseguiti contemporaneamente**, ma non importa quale viene eseguito per primo. Ad entrambi i Job deve essere assegnata una **Resource Dependency** su una **Resource** chiamata ```Electronics``` con il valore di **Max Resources** pari a ```1```.

Dovrebbe essere creata una **notifica** sia per un Job fallito che per un Job terminato correttamente.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4LabA.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

**Istruzioni per il Laboratorio**:  

* Crere uno **Schedule** chiamato **Congo Update Inventory**
* Il sabato e la domenica sono giorni non lavorativi
* Impostare l'**Auto-build** dello Schedule ```7``` days in advance per ```1``` giorno
* Impostare l'**Auto-delete** dello Schedule per ```7``` giorni
* Aggiungere **Documentazione** per lo Schedule
* Usare il calendario **Master Holiday Calendar**
* Creare ```6``` **Windows** Jobs chiamati: 
	* Legos
	* Nerf
	* Nike
	* Levis
	* Smartphones
	* XBOX
    * Questi Job devono essere eseguiti con la **User ID** ```SMATRAINING\SMAUSER```
    * Questi Job devono essere eseguiti sulla **macchina** ```SMATRAINING```
    * Richiamare i programmi sulla **command line** utilizzando le **Global Property**

:::note Esempio:
Usare la proprietà globale creata in precedenza che ha il percorso per ```C:```:
```
"[[scripts]]\UpdInvLegos.CMD"
```
:::

* Questi Job devono essere eseguiti dal **lunedì al venerdì** e non nei giorni non lavorativi
* Il primo Job, **Legos**, inizia alle ```3:00 PM```
* Aggiungere **Documentazione** per ciascun Job
* Esempio: _Questo Job riporta l'inventario per il numero di Lego in magazzino_
* Applicare i **Tag** ai 6 Jobs coerentemente con il tipo di prodotto(**Toys**, **Electronics**, o **Clothing**)
* Creare una **Threshold** chiamata ```LEVISThreshold``` ed assegnare il valore ```0``` 

:::info Nota
_** C'è un punto nello script ```"UpdInvNike.CMD"``` per eseguire ```"$THRESHOLD:SET, LEVISThreshold,1"```, così il Job **Levis** può partire_
:::

* Sul Job **Levis** creare una **Threshold Dependency** sulla ```LEVISThreshold``` che richiede il valore ```1```
* Aggiungere l'evento ```$THRESHOLD:SET``` al Job **Levis** Job per impostare ```LEVISThreshold``` nuovamente al valore ```0``` al completamento del Job
* Aggiungere una **Resource** chiamata **Electronics** con un valore di **Max Resources** uguale a ```1```
* Aggiungere una **Resource Dependency** per i Job **Smartphones** and **XBOX** per richiedere l'uso della **Resource** a ```1```

:::note Nota 
Gli script ```Smartphones``` e ```XBOXConsoles``` useranno la funzionalità delle **Resource** per escludere l'esecuzione in contemporanea_
:::

* Usare il **Notification Manager** per impostare gli alerts se i Jobs nello schedule **Congo Update Inventory Schedule** finiscono **OK** o **Falliscono**.
* Inviare una mail a: ```smauser@congo.local``` con oggetto:
    * Un Job nello Schedule ```[[$SCHEDULE NAME]]``` è **Fallito**
    oppure  
    * Un Job nello Schedule ```[[$SCHEDULE NAME]]``` è **Terminato correttamente**

Al termine, visualizzare i risultati in **Workflow designer**

Effettua la messa a piano (**Build**) dello Schedule per Oggi in stato **Released**

<a href="imgbasic/423.png" target="_blank"><img src="imgbasic/423.png" width="300"></img></a>

</details>
