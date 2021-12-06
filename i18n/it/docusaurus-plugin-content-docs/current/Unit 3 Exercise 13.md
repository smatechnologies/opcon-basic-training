---
sidebar_label: 'Unità 3 Esercizio 13'
hide_title: 'false'
---

## Esercizio 13: Eventi

##### Obiettivo:

Creare tre nuovi Windows Jobs nello Schedule **MY FIRST SCHEDULE** chiamati **Test Event 1**, **Test Event 2**, e **Test Event 3**

Usare il programma genericp nella **Command Line** e fornire una Frequenza su ```7``` giorni

Impostare **Test Event 3** in uno stato ```On Hold``` 

Fornire ai tre Jobs le Dipendenze di tipo Requires:

**Test Event 1 > Test Event 2 > Test Event 3**

Creare un evento ```$JOB:CANCEL``` per il Job **Test Event 1** che cancellerà il Job **Test Event 3**

Effettuare la messa a piano (**Build**) dello Schedule e visualizzare il risultato nella **vista Matrix**


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E13.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1.	Creare gli Schedules/Jobs
* Nel menù **Administration** fare doppio clic su **Job Master**.
* Nell'elenco a discesa **Schedule** selezionare **My First Schedule**.
* Nella barra degli strumenti di **Job Master Toolbar**, Fare clic sul pulsante **Add**.
* Nella casella di testo **Name** digitare **Test Event 1**.
* Nell'elenco a discesa **Job Type** selezionare ```Windows```.
* Nell'elenco a discesa **Primary Machine** selezionare la macchina ```SMATraining``` su lla quale girerà il Job.
* Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```.
* Nella **Command Line**, digiatre **Ctrl + F** fare doppio clic su un comando che somigli a questo:
    ```“[[PathWindows]]\genericp.exe” –t[[RUNTIME]]```  
* Fare clic sul pulsante **Save**.
* Fare clic sulla scheda **Frequency**.
* All'interno del riquadro **Frequency list** fare clic aul pulsante **Add**.
* Selezionare l'opzione **Use Existing Frequency**.
* Nell'elenco a discesa **Frequency** selezionare ``Mon-Sun-O``.
* Fare clic su **Next**.
* Fare clic sul pulsante **Finish**.
* Nella barra degli strumenti del **Job Master**, Fare clic sul pulsante **Copy**.
* Nominare il **Job Test Event 2**.
* Fare clic su **OK**.
* Nella barra degli strumenti del **Job Master**, Fare clic sul pulsante **Copy**.
* Nominare il Job **Test Event 3**.
* Fare clic su **OK**.
* Selezionare la scheda **Frequency**.
* Nel riquadro Job Build Status selezionare ```On Hold```.
* Fare clic sul pulsante **Save**.
* Chiudere **Job Master**.
* Nel menù **Administration** fare doppio clic su **Workflow Designer**.
* Nella lista di **Selezione degli Schedule**, selezionare **My First Schedule**.
* Fare clic sullo strumento **Add Dependency**.
* Fare clic su **Test Event 1**, poi su **Test Event 2** per creare una dipendenza di tipo **Requires**.
* Fare clic su **Test Event 2**, poi su **Test Event 3** per creare una dipendenza di tipo **Requires**.
2. Creare gli eventi
* Dal Workflow Designer, fare clic con il tasto destro su Test Event 1 e selezionare Edit.  
* Fare clic sulla scheda Events.
* Nel Riquadro Events Fare clic sul pulsante Add.
* Nella procedura guidata (Event Definition Wizard), nel Send Event on selezionare Job Status.
* Fare clic sul pulsante Next.
* Nell'elenco a discesa Job Status selezionare Finished OK.
* Fare clic sul pulsante Next .
* Nell'elenco a discesa Event Template selezionare l'evento $JOB:CANCEL Event.

:::note Esempio:
```
$JOB:CANCEL,<Schedule date>,<Schedule name>,<Job name>
```        
* ```<Schedule date>``` da sostituire con ```CURRENT```, ```[[$DATE]]```, oppure ```[[$SCHEDULE DATE]]```  
* ```<Schedule name>``` da sostituire con **nome completo dello Schedule in cui il Job**, oppure ```[[$SCHEDULE NAME]]```  
* ```<Job name>``` da sostituire con **il nome del Job su cui l'Evento agirà  **

* L'evento somiglierà a questo:

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],Test Event 3
```
:::
* Fare clic sul pulsante **Finish**.
* Chiudere le schede **Job Master** e **Workflow Designer**.
* Aprire una delle **viste Operation** e controllare se lo Schedule **My First Schedule** è **In Process** (Cancellare i Job se lo stato non è Completed)
* Effettuare le messa a piano (**Build**) dello Schedule in stato Rilasciato (**Released**) e **osservare il processo**.
* **Usare la vista List o Matrix in Enterprise Manager o utilizzare il Solution Manager**.  

</details>