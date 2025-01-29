---
sidebar_label: 'Unità 4 Lab B'
hide_title: 'false'
---

## Unità 4 Lab B

Congo Online Retail Inc. dispone di un file per ogni ufficio che ha apportato modifiche al personale durante il mese..

Non c'è modo di prevedere il numero di file che saranno presenti tutti i giorni del mese (i file possono essere creati ed elaborati nei giorni non lavorativi)..

La finestra per la creazione di quei file è compresa tra ```00:00 (midnight```) e le ```7:00 PM```.

Non conosciamo il nome dei file, ma conosciamo la cartella in cui verranno inseriti e che tutti hanno l'estensione ```.txt```.

È possibile elaborare un solo file alla volta (creare una risorsa denominata ```HR``` con un **Max Value** di ```1```).

La procedura include l'esecuzione quotidiana dei seguenti lavori in un sottoprogramma denominato **HR Import Processing**:

* **Decrypt** Decifra il file eseguendo lo script ```HR-Decrypt.cmd```
* **Import** Importa il file in un database delle risorse umane eseguendo lo script ```HR-Import.cmd```
* **Post** Pubblica le modifiche che il file contiene eseguendo lo script ```HR-Post.cmd```
* **Archive** Archivia i file eseguendo un Job Windows con un **Job Sub-Type** ```File Move```
* Tutti gli script sono archiviati nella cartella ```C:\scripts```.
* Tutti i file in arrivo arrivano nella cartella ```C:\Human Resources\Incoming Files```.
* Tutti i file devono essere archiviati nella cartella ```C:\Human Resources\Archive```.

Usa le **Global Properties** per chiamare le cartelle In arrivo e Archivio.

Usa usa il **Job Sub-Type** con ```Command: File Move``` per Archiviare i files 

* In arrivo: ```"[[HR-Incoming]]\[[SI.FILENAME]]"```
* Archive: ```"[[HR-Archive]]\[[$DATEyyyymm(-1m)]]-[[SI.FILENAME]]"```

Creare un Main Schedule chiamato **HR Import**. Creare un Container Job multi instance chiamato **HR Import Processing** (impostare Allow Multi-Instance). Il Job esegue il Subschedule **HR Import Processing** con una **Frequenza** ```OnRequest```. Il Job deve avere una **Resource Dependency** sulla **Risorsa** ```HR``` con un valore di ```1```.

Aggiungere un evento ```$JOB:RESTART``` al Container Job con i seguenti parametri:

```
$JOB:RESTART event:[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival
```

Creare un **File Arrival Job** per monitorare: ```[[HR-Incoming]]\*.txt"```

* Start Time per creazione file: ```00:00```
* End Time per creazione file: ```19:00```

Assegnare al **File Arrival Job** il **Failure Criteria**:

```Equal to 0``` and ```Equal to 1``` il job ```Finish OK```

Aggiungere al **File Arrival Job** un evento di ```$JOB:ADD``` con i seguenti parametri:

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],HR Import Processing,OnRequest,FILENAME=[[JI.$ARRIVED SHORT FILE NAME]]
```

Infine, nello Schedule **HR Import** creare un **Embedded Script** Job chiamato **Create HR Files** che esegue lo script ```Lab_4``` con un ```PowerShell``` **Runner**.

Metter a piano lo Schedule per verificare il corretto funzionamento.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4LabB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

**Istruzioni per il Laboratorio**:

* Creare una **Resource** chiamata **HR** e impostare un **Max Value** di ```1```
* Creare una **Global Property** per **Incoming** folder (es:** HR-Incoming**)
* Creare una **Global Property** per **Archive** folder (es: **HR-Archive**)
* Creare un **SubSchedule** chiamato **HR Import Processing** (questo deve essere un **Lunedì-Domenica** Schedule Calendar) e aggiungere **Documentation** allo Schedule
* Creare 4 Windows Jobs nel subschedule **HR Import Processing SubSchedule** chiamati (nell'ordine elencato):

* HR-Decrypt  
```HR-Decrypt.cmd```

* HR-Import  
```HR-Import.cmd```

* HR-Post  
```HR-Post.cmd```

* HR-Archive  
	* Usare il Job Sub-Type Command: File Move
	* Usare una combinazione di Incoming Global Property e [[SI.FILENAME]] per il SOURCE.
	* Esempio:
	```"[[HR-Incoming]]\[[SI.FILENAME]]"```
	* Usare una combinazione di **Archive Global Property**, la ```[[SI.FILENAME]]``` e la **data corrente** con un offset di ```(-1m)``` per la **DESTINATION**.
	* Esempio:   
	```"[[HR-Archive]]\[[$DATEyyyymm(-1m)]]-[[SI.FILENAME]]"```

:::note
_La **Schedule Instance Property ```[[SI.FILENAME]]```** sarà passata dall'evento **File Arrival** ```JOB:ADD``` **Event**_
:::

* Questi job devono essere eseguiti con la **User ID** ```SMATRAINING\SMAUSER```
* Questi job devono essere eseguiti sulla **macchina** ```SMATRAINING```
* Questi job devono essere eseguiti ogni giorno
* Non dimenticare di aggiungere la **Documentation** a tutti i Job
* L'ordine di esecuzione è:
	* Decrypt
	* Import
	* Post
	* Archive
* Usare la proprietà che punta al percorso ```C:\Scripts``` per la **Command Lines**
* Creare il **main Schedule** chiamato **HR Import** (Schedule Calendar **Lunedì-Domenica** Schedule Calendar)
* **Auto-build** per ```7``` giorni in avanti per ```1``` day
* **Auto-delete** per ```7``` giorni
* Aggiungere **Documentation** per lo Schedule
* Creare un **Container Job** nello Schedule **HR Import Schedule** chiamato **HR Import Processing**
* Il **Container Job** deve eseguire il subschedule **HR Import Processing SubSchedule**
* Il **Container Job** deve consentire Multiistanze (**Allow Multi-Instance**)
* Aggiungere **Documentazione**
* Assegnare la **Frequenza** ```OnRequest```
* Assegnare al Job una **Resource Dependency** di ```1```
* Quando il **Container Job** “**Finishes OK**” scatena un **Evento** per fare una ```$JOB:RESTART```, per il **File Arrival** Job
	* Questi sono i parametri per l'evento```$JOB:RESTART```:  
	```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival```
* Creare un File Arrival Job chiamato **File Arrival**
* *Monitorare per il percorso:
```"[[HR-Incoming]]\*.txt"```  
    O   
```"C:\Human Resources\Incoming Files\*.txt"```   
* **Start Time** per la creazione del file dovrebbe essere ```00:00 (midnight)```
* **End Time** per la creazione del file dovrebbe essere ```7:00PM```
* Aggiungere il **Failure Criteria**
    * Impostare il Comparison Operator “**Equal To**” Value “```0```” Result “F**inish OK**”
    And/Or
    * “OR” Comparison Operator “**Equal To**” Value ```1``` Result “**Finish OK**”
    * Aggiungere **Documentazione**
    * Usare l'evento ```$JOB:ADD``` per i file txt quando **File Arrival** trova un file ```.txt```
        * L'**Event** aggiungerà il **Container Job** allo Schedule **HR Import Schedule** nel Daily
        * **Aggiungere** un **Event** al **File Arrival Job** per passare una **Job Instance Property** chiamata ```[[JI.FILENAME]]``` per catturare il nome file
        * Questi sono i parametri per l'**evento** ```$JOB:ADD```:
		```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],HR Import Processing,OnRequest,FILENAME=[[JI.$ARRIVED SHORT FILE NAME]]```
* Per testare la configurazione aggiungere un Job **Embedded Script Job** chiamato **Create HR Files** all'**HR Import Schedule**
* Lo script creerà i file nella cartella: ```C:\Human Resources\Incoming Files```
* Configurare il **Windows Job** per usare la **Job Action** ```Embedded Script``` e selezionare lo script ```Lab_4```
* Non dimenticare di impostare ```PowerShell``` come **Runner**
* Il Job deve esser eseguito sulla **macchina** ```SMATRAINING``` con lo ```SMATRAINING\SMAUSER``` account
* Assegnare la **Frequenza** ```Monday-Sunday```
* Aggiungere **Documentation**
* Prima di rilasciare a piano per oggi, usare il **Workflow Designer** per controllare la configurazione.

#### HR Import Processing (Il SubSchedule)

<a href="imgbasic/445.png" target="_blank"><img src="imgbasic/445.png" width="400"></img></a>

#### HR Import (Lo Schedule principale)

<a href="imgbasic/446.png" target="_blank"><img src="imgbasic/446.png" width="500"></img></a>

###### (Click sulla Immagine per ingrandire)

</details>