---
sidebar_label: 'Unità 4 Esercizio 11'
hide_title: 'false'
---

## Esercizio 11: Windows File Arrival

##### Obiettivo:

Creare uno Schedule chiamato **Windows File Arrival**. 

All'interno dello Schedule **Windows File Arrival**, creare un Windows Job chiamato **Windows File Arrival Job** con una azione di tipo ```File Arrival``` **Job Action** in esecuzione con la Frequenza Monday-Friday.

* **File Name**: ```“C:\Windows File Arrival\WindowsFile1.txt”```
* **Start Time**: ```0900```
* **End Time**: ```1700```
* **File Size Stable Duration (in secs)**: ```5```

Creare un Windows Job chiamato **Create File** con un ```Embedded Script``` **Job Action** in esecuzione con una Frequenza Monday-Friday. The Job eseguirà lo script ```Windows_File_Arrival``` con un ```PowerShell``` **Runner**.

Mettere a piano lo Schedule in stato **Released for Today**. Nella Vista Matrix verificare il corretto funzionamento.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E11.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Aggiungere un nuovo **Schedule** chiamato **Windows File Arrival**, aggiungere **Documentation** ed usare i valori di default per lo Schedule.
2. Nel **Job Master** aggiungere un nuovo Job allo Schedule **Windows File Arrival**.
	* **Name**: Windows File Arrival Job
	* **Job Type**: ```Windows```
	* **Primary Machine**: ```SMATraining```
	* **Job Action**: ```File Arrival```
	* **User ID**: ```SMATRAINING\SMAUSER```
	* **File Name**: ```“C:\Windows File Arrival\WindowsFile1.txt”```
	* **Start Time**: ```0900```
	* **End Time**: ```1700```
	* **File Size Stable Duration (in secs)**: ```5```
3. Assegnare al Job la ***Frequency*** di ```Mon-Fri-N```
4. Aggiungere la **Documentation** al Job.
5. Con lo Schedule **Windows File Arrival** ancora selezionato nel **Job Master** fare clic sul pulsante **Add** nella barra strumenti di Job Master (or premere Ctrl+N) per aggiungere un nuovo Job.
	* **Name**: Create File
	* **Job Type**: ```Windows```
	* **Primary Machine**: ```SMATraining```
	* **Job Action**: ```Embedded Script```
	* **User ID**: ```SMATRAINING\SMAUSER```
	* **Script**: ```Windows_File_Arrival```
	* **Version**: ```LATEST```
	* **Runner**: ```PowerShell```
	* **Arguments**: Non digitare nulla, lasciare vuoto
	* Salvare il Job
6. Assegnare al Job la **Frequency** di ```Mon-Fri-N```
    * Assegnare al Job il **Job Build Status**, di ```On Hold```.
7. Chiudere **Schedule Master** e **Job Master**.
8. Esternamente ad OpCon verificare che la cartella : ```C:\Windows File Arrival``` esista e sia vuota.
9. Tornare alla **EM**, Mettere a piano (**Build**) lo Schedule **Windows File Arrival** in stato rilascio per la sola giornata odierna.
10. Passare and una delle Viste **Operations** .
11. Notare che **Windows File Arrival** Job è semplicemente in esecuzione.
12. Rilasciare il Job Create File Job nello Schedule **Windows File Arrival**.
13. Una volta eseguito il Job, verificare che il file sia stato creato e che entrambi i job siano terminati in **Finished OK**.

</details>