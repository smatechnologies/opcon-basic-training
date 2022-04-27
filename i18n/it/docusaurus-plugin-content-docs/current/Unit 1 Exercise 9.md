---
sidebar_label: 'Unità 1 Esercizio 9'
hide_title: 'false'
---

## Esercizio 9: Solution Manager attiviità di Operations

##### Obiettivo:

Aprire il Browser Chrome e navigare all'indirizzo ```https://SMATraining```

Effettuare il Log in **Solution Manager**: 

* **Username**: ```ocadm```
* **Password**: ```***********``` **(12 asterischi)**

Selezionare il pulsante Operations e navigate sui Jobs. Visualizzare i Job per la giornata odierna.

Attivare la selezione degli Schedule e selezionare **MY FIRST SCHEDULE**.

Impostare lo stato di entrambi i Job **WINDOWS JOB 1** e **WINDOWS JOB 2** a ```Restart On Hold```.

Ritornare in Enterprise Manager e aprire la Vista Matrix. Visualizzare i Jobs di **MY FIRST SCHEDULE** e rilasciare i due Jobs ```On Hold```.

Ritornare in Solution Manager e controllare che i Jobs abbiano girato. Poi, cliccate sul Cuore Verde nella parte inferiore dello schermo per visualizzare gli **Agents** disponibili.

**Disabilitare** la comunicazione con la macchina ```SMATraining```.

Ritornare in Enterprise Manager and **Riavviare la** comunicazione.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E9.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1.	Avviare **Google Chrome** e andare all'indirizzo:
```
https://SMATraining
```
  * Se compare un Pop-Up di login ulteriore al login del **Solution Manager** selezionare **Cancel**.
2.	In the **Solution Manager login screen** enter the following:

  *	Username: ```ocadm```
  * Password: ```************``` (12 asterischi)

3. Fare clic su **Sign in**.
4. Nella schermata **Solution Manager Home** fare click sul pulstante **Operations**.
5. Nella schermata **Operations Summary** fare click sul pulstante **Jobs**.
6. Qunado la scheramta **Processes** viene presentata, assicuratevi di avere la **data** selezionata sul lato sinistro dello schermo.
7. Abilitate la selezione **Enable/Disable Schedules** (in alto a destra dello schermo).
    * Verrà presentato l'elenco degli Schedule della giornata odierna
8. Fare Click su **My First Schedule**.
    * Dovresti essere in grado di vedere tutti e 4 i Job costruiti per oggi nella lista dei Jobs.
9. Dalla lista dei Job selezionare **Windows Job 1** e **Windows Job 2**.
10. Fare clic con il tasto destro del mouse su uno dei Jobs.
    * Comparirà sulla destra il riquadro **Job Status Update**.
    * Notate che non tutte le azioni sono disponibili. Solo le azioni che possono essere eseguite per entrambi i Jobs.
11. Seleziona ```Restart on Hold```.
    * Solution Manager mostrerà un messaggio nella parte superiore dello schermo che conferma che l'azione è stata elaborata.
12. Chiudere la schermata **Job Status Update** minimizzare Google Chrome e tornare a **Enterprise Manager**.
13. Apreire la vista **List** o **Matrix**, andare alla data di oggi e controllare i Job sotto **My First Schedule**.
    * Lo stato dei Job **Windows Job 1** and **Windows Job 2** dovrebbero essere ```On Hold```.
14. Sempre dall' **Enterprise Manager**, Fare clic con il tasto destro del mouse sui Job e selezionare ```Release```. È necessario eseguire questa azione per ogni Job.
15. Tornare nel **Solution Manager**. Cosa è successo al **Windows Job 1** e **Windows Job 2**?
16. Dal **Solution Manager**, fare click sul pulsante Back (in alto a destra).
17. Fare click **sull'icona verde del cuore** situato in basso a destra dello schermo.
    * **Solution Manager** mostrerà la schermata degli **Agents**.
18. Selezionare la Macchina ```SMATraining``` e premere il pulsante destro.
19. Nella Scheramta **Agent Status Update** (sul lato destro), fare click su **Disable Communication**.
20. Chiudere la schermata **Agent Status Update**, ridurre a icona Google Chrome e tornare a **Enterprise Manager**.
21. Aprire la scheda Stato della macchina e controllare lo stato della macchina ```SMATraining```.
    * Dovrebbe essere ```Not Responding``` (Grigio).
22. Fare clic con il tasto destro del mouse sulla macchina e selezionare **Start Communication**.
23. Chiudere tutte le schede in **Enterprise Manager**.
23. Chiudere **Google Chrome**.

</details>
