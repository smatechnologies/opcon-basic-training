---
sidebar_label: 'Unità 4 Esercizio 1'
hide_title: 'false'
---

## Esercizio 1: Risorse

##### Obiettivo: 

Creare una **risorsa** denominata ```TrainingResource``` con un valore **Max Resources** di ```4```.

Creare uno Schedule chiamato **My Resources Schedule**.

Creare un Job di Windows denominato **Resource Use 2 Job A** che esegua il programma genericp su una frequenza di ```7``` giorni. Assegnare al Job una dipendenza della risorsa ```TrainingResource``` con un valore di ```2```.

Copiare o crea Job aggiuntivi denominati **Resource Use 2 Job B** e **Resource Use 4 Job**.

Editare il Job **Resource Use 4 Job** per aggiungere una dipendenza da Resource sulla ```TrainingResource``` con un valore di ```4```.

Creare una **Notifica** nel gruppo root chiamata ```ExerciseResource``` che manderà una mail a ```smauser@congo.local``` per ciascun Job "**Finished OK**":

Oggetto: Risorse in Uso per ```TrainingResource``` quando ```[[$JOB NAME]]``` è "**Finished O**K" Messaggio: Numero di Risorse per la Risorsa ```TrainingResource=> [[RU.TrainingResource]]/[[RM.TrainingResource]]```

Mettere a piano (**Build**) lo Schedule in stato **Released** per Oggi. Visualizzare i risultati nella vista Matrix o in Solution Manager.

Verificare in **Thunderbird** le notifiche ricevute.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E1.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menù **Administration** fare doppio clic su **Resources**.
2. Fare clic sul pulsante **Add** nella barra degli strumenti Risorse.
3. Nella casella di testo **Name** digitare ```TrainingResource```, inserire la documentazione e nel **Max Resources** inserire il valore ```4```.
4. Fare clic sul pulsante **Save** nella barra degli strumenti Risorse. Chiudere la scheda Resources.
5. Nel menù **Administration** fare doppio clic su **Schedule Master**.
6. Fare click sul pulsante **Add** nella barra strumenti **Schedule Master**.
7. Aggiungere un nuovo Schedule chiamato **My Resources Schedule**.
8. Usare queste impostazioni per lo Schedule:
    * Dal lunedì alla domenica sono giorni lavorativi
    * **NON** utilizzare il Calendario Master Holiday Calendar.
    * **Auto Build** ```7``` days in advance for ```1``` days
    * **Auto Delete** ```7``` days
    * Aggiungere la **Documentazione** allo Schedule.
9. Chiudere lo **Schedule Master** e aprire **Job Master** per aggiungere i Jobs.
10. Selezionare **My Resources Schedule**.
11. Fare clic sul pulsante **Add** della barra strumenti **Job Master**.
12. Aggiungere un nuovo Job chiamato **Resource Use 2 Job A** che esegua il programma ```Genericp.exe``` per ```20``` secondi sulla **macchina** ```SMATraining ```con lo **User ID** ```SMATRAINING\SMAUSER``` e aggiungere la **Frequenza** ```Mon-Sun-O``` al Job (fare riferimento alla Unità 1 per l'aiuto). Aggiungere la **Documentazione**.
13. Creare una dipendenza da **Threshold/Resource**:
    * Fare clic sulla scheda **Dependencies**
    * Fare clic sulla scheda **Threshold/Resource Dependency**
    * Nel riquadro **Threshold/Resource Dependency** Fare clic sul pulsante **Add**.
    * Nell'elenco a discesa **Threshold/Resource** selezionare ```TrainingResource```.
    * Nella casella di testo **Value** digitare ```2```.
    * Fare clic sul pulsante **OK**.
14. Fare clic sul pulsante **Copy** nella barra degli strumenti del **Job Master** per copiare questo Job.
15. Nominare il Job come **Resource Use 2 Job B**. Aggiornare la documentazione se necessario.
16. Fare clic sul pulsante **Copy** nella barra degli strumenti del **Job Master** per copiare questo Job.
17. Nominare il Job come **Resource Use 4 Job**. Aggiornare la documentazione se necessario.
18. Accertarsi di avere il Job **Resource Use 4 Job** selezionato.
    * Fare clic sulla scheda **Dependencies**
    * Fare clic sulla scheda **Threshold/Resource** Dependency.
    * Nel riquadro **Threshold/Resource Dependency** fare doppio clic sulla dipendenza **Threshold/Resource** che è stata copiata dal Job precedente.
    * Controllare se nell'elenco a discesa **Threshold/Resource** è presente ```TrainingResource```.
    * Cambiare il **Value** nella textbox a ```4```.
    * Fare clic sul pulsante **OK**.
19. Chiudere il **Job Master**.
20. Nel Menù **Management** fare doppio clic su **Notification Manager** Fare clic sulla scheda **Jobs**.
21. Creare un nuovo gruppo al livello base (**new root group**) chiamato ```ExerciseResource``` (tasto destro e selezionare **Add Root Group**).
22. Selezionare il checkbox sullo Schedule **My Resources Schedule** (a destra dello schermo) e fare clic sul pulsante **Save**.
23. Tasto destro sul gruppo ```ExerciseResource``` e selezionare **Add Job Trigger > Job Running**.
24. Selezionare **Send Email (SMTP)**.
25. Fare clic sulla scheda **Email** e impostare la configurazione per inviare la mail come segue:
    * To: ```smauser@congo.local```
    * Subject: Risorse in uso per ```TrainingResource``` quando ```[[$JOB NAME]]``` è in esecuzione
    * Message: Numbero di Risorse per la risorsa ```TrainingResource=> [[RU.TrainingResource]]/[[RM.TrainingResource]]```
26. Fare clic sul pulsante **Save**.
27. Tasto destro sul gruppo ```ExerciseResource``` e selezionare **Add Job Trigger > Job Finished OK**.
28. Selezionare **Send Email (SMTP)**.
29. Fare clic sulla scheda **Email** e impostare la configurazione per inviare la mail come segue:
    * To: ```smauser@congo.local```
    * Subject: Risorse in Uso per TrainingResource quando ```[[$JOB NAME]]``` è **Finished OK**
    * Message: Numbero di Risorse per la risorsa ```TrainingResource=> [[RU.TrainingResource]]/[[RM.TrainingResource]]```
30. Fare clic sul pulsante **Save**.
31. Chiudere la scheda **Notification Manager**.
32. Mettere a piano lo Schedule in stato **Released** per oggi.
    * Aprire una delle viste Operation (**List** o **Matrix**) o utilizzare **Solution Manager**.
33. Assicurarsi che **My Resources Schedule** sia in stato **Completed**.
34. Aprire **Thunderbird** e consultare la casella di posta. Si dovrebbero trovare 6 nuove emails.

</details>