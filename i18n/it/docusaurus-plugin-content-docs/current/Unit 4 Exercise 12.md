---
sidebar_label: 'Unità 4 Esercizio 12'
hide_title: 'false'
---

## Esercizio 12: File Arrival - Multiple Files

##### Obiettivo:

Creare uno Schedule chiamato **MultipleFiles-Main Schedule**.

All'interno dello Schedule **MultipleFiles-Main Schedule**, creare un Job Windows chiamato **File Arrival Job** con una Job Action di tipo ```File Arrival```, in esecuzione con la **Frequenza** ```Monday-Friday```.

* **File Name**: ```"C:\Multi-File Arrival\MultiFile*.txt"```
* **Start Time**: ```0900```
* **End Time**: ```1700```
* **File Size Stable Duration (in secs)**: ```5```

Aggiungere un **evento** ```$JOB:ADD``` sul Job con i seguenti parametri:

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],MultiFile Processing Job,OnRequest,FILENAME=[[JI.$ARRIVED FILE NAME]]
```

All'interno dello Schedule **MultipleFiles-Main Schedule**, creare un Job Windows chiamato **Create File** con una **Job Action** ```Embedded Script```, in esecuzione con la Frequenza ```Monday-Friday```. Il Job esegue il ```Windows_MultiFile_Arrival``` Script con un ```PowerShell``` **Runner**. Assegnare al Job un **Build Status** di ```On Hold```.

Creare uno Schedule chiamato **MultipleFiles-SubSchedule**. Impostare lo Schedule come un **SubSchedule**.

All'interno dello Schedule **MultipleFiles-SubSchedule**, creare un Job Windows chiamato **Process File** che esegua il programma ```genericp``` con una frequenza ```Monday-Friday```.

All'interno dello Schedule **MultipleFiles-SubSchedule**, creare un Job Windows chiamato **Archive File** con un **Job Sub-Type** of ```Command: File Move```, in esecuzione con la Frequenza ```Monday-Friday```.

* **Source**: ```"[[SI.FILENAME]]"```
* **Destination**: ```"C:\Multi-File Arrival\Archive\"```

Creare una **Requires Dependency** per l'**Archive File** Job e **Process File** Job.

**Archive File Job > Process File Job**

All'interno dello Schedule **MultipleFiles-Main Schedule**, creare un Job chiamato **MultiFile Processing Job** che esegue **MultipFiles-SubSchedule** come Container Job con una Frequenza ```OnRequest```.

Aggiungere l'evento ```$JOB: RESTART``` al job con i seguenti parametri:

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival Job
```

Mettere a piano lo Schedule in stato Released per Oggi. Rilasciare il Job **Create File** nello Schedule **MultipleFiles-Main Schedule**. Controllare le Instance Properties di uno dei Container Jobs in Job Information per verificare il processamento dei files.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E12.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Creare un nuovo **Main Schedule** utilizzando le impostazioni di default. Chiamarlo **MultipleFiles-Main Schedule**. Aggiungere la **Documentation** allo Schedule.
2. Aggiungere un **Windows File Arrival Job** allo Schedule **MultipleFiles-Main**.
* **Name**: ```File Arrival Job```
* **Job Type**: ```Windows```
* **Primary Machine**: ```SMATraining```
* **Job Action**: ```File Arrival```
* **User ID**: ```SMATRAINING\SMAUSER```
* **File Name**: ```"C:\Multi-File Arrival\MultiFile*.txt"```
* **Start Time**: ```0900```
* **End Time**: ```1700```
* **File Size Stable Duration (in secs)**: ```5```
3. Assegnare al Job la Frequenza ```Mon-Fri-N```.
4. Nella scheda **Events** Aggiungere un nuovo Evento
* Nella schermata **Event Trigger** selezionare l'opzione **Job Status** fare clic su **Next**.
* Nella schermata **Trigger Details** per **Job Status**, selezionare **Finished OK**, fare clic su **Next**.
* Nella schermata **Event Definition**, per l'**Event Template** selezionare: 

```
$JOB:ADD,<Schedule date>,<Schedule name>,<Job name>,<Frequency name>,[Job instance property definitions]
```
* Per i parametri dell'evento (**Event Parameters**), usare il seguente,
```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],MultiFile Processing Job,OnRequest,FILENAME=[[JI.$ARRIVED FILE NAME]]
```
* Fare clic su **Finish**.
5. Sempre nella scheda **Job Master** e con lo Schedule **MultipleFiles-Main** selezionato, aggiungere un nuovo Job. Questo sarà di tipo **embedded script Job** (già configurato) che creerà i files.
* **Name**: ```Create File```
* **Job Type**: ```Windows```
* **Primary Machine**: ```SMATraining```
* **Job Action**: ```Embedded Script```
* **User ID**: ```SMATRAINING\SMAUSER```
* **Script**: ```Windows_MultiFile_Arrival```
* **Version**: ```LATEST```
* **Runner**: ```PowerShell```
* **Arguments**: lasciare vuoto
6. Assegnare al Job la **Frequenza** ```Mon-Fri-N```.
7. Assegnare al Job il **Job Build Status**, di ```On Hold```.
8. Aggiungere la **Documentation** al Job.
9. Esternamente ad OpCon verificare l'esistenza del folder: ```C:\Multi-File Arrival```
10. Tornare nell'**Enterprise Manager**, creare un nuovo **Schedule**, chiamarlo **MultipleFiles-SubSchedule**.
11. Nel riquadro **Schedule Properties** impostarlo come **SubSchedule**.
12. Aggiungere la **Documentation** al Subschedule.
13. Lasciare gli altri campi con i **valori di default**.
14. Nel menù **Administration** fare doppio clic su **Schedule Master**.
15. Nell'elenco a discesa **Schedule** selezionare **MultipleFiles-SubSchedule**.
16. Fare clic sul pulsante **Add** nella barra degli strumenti di **Job Master**.
17. Nella casella di testo **Name** inserire **Process File**.
18. Eseguire Windows ```Genericp``` program nella **Command Line**.
* Esempio: ```"[[MI.PathWindows]]\genericp.exe" -t10 -e0```
19. Assegnare al Job la **Frequenza** ```Mon-Fri-N```.
20. Aggiungere la **Documentation** al Job.
21. Con lo Schedule **MultipleFiles-SubSchedule** selezionato fare clic sul pulsante **Add** della barra strumenti **Job Master**.
* **Name**: ```Archive File```
* **Job Type**: ```Windows```
* **Job Sub-Type**: ```Command: File Move```
* **Primary Machine**: ```SMATraining```
* **User ID**: ```SMATTRAINING```
* **Source**: ```"[[SI.FILENAME]]"```
* **Destination**: ```"C:\Multi-File Arrival\Archive\"```
22. Fare clic sul pulsante **Save**.
23. Assegnare al Job la **Frequenza** ```Mon-Fri-N```.
24. Aggiungere la **Documentation** al Job.
25. Rendere **Archive File Job** dipendente dalla corretta esecuzione del Job **Process File Job**.
26.	Add a Job to the **MultipleFiles-Main** Schedule.
* Click the **Add** button on the **Job Master** toolbar. 
* In the **Name** textbox, enter **MultiFile Processing Job**.
* In the **Job Type** drop-down list, select **Container**.
* In the **Schedule to run as SubSchedule** drop down select **MultipleFiles-SubSchedule**.
* Fare clic sul pulsante **Save**.
27.	Give the Job a **Frequency** of **OnRequest**.
28. Assegnare al Job la **Frequenza** ```OnRequest```.
29. Aggiungere la **Documentation** al Job.
* Nella schermata **Event Trigger** selezionare l'opzione **Job Status** fare clic su **Next**.
* Nella schermata **Trigger Details** per **Job Status**, selezionare **Finished OK**, fare clic su **Next**.
* Nella schermata **Event Definition**, per l'**Event Template** selezionare: 
```
$JOB:RESTART <Schedule date>,<Schedule name>,<Job name>
```
* Per i parametri dell'evento (Event Parameters), usare il seguente:   
```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival Job
```
* Fare clic su **Finish**.
30. Metttere a piano lo Schedule **MultipleFiles-Main** per Oggi in stato **Released**.
31. Passare alle viste **Operations**.
32. Notare che **File Arrival Job** è in esecuzione (nessun file ancora arrivato) e che il Job **MultiFile Processing Job** non è stato ancora generato (**On Request** – Verrà aggiunt tramite il **File Arrival Job**.
33. Rilasciare il Job **Create File Job** nello Schedule **MultipleFiles-Main**. Questo job creerà i file.
34. Notare che quando **File Arrival Job** troverà i files, un nuovo **Container Job** sarà aggiunto per ciscaun file. Al termine, i file verranno spostati nella cartella **Archive**.
35. Se si controllano le **Instance Properties** di uno dei **Container Jobs**, si troverà quale file viene elaborato (dalla ```[[SI.FILENAME]]```).
* Check the **Job Information**.

</details>