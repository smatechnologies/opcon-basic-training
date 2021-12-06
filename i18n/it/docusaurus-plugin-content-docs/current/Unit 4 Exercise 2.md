---
sidebar_label: 'Unità 4 Esercizio 2'
hide_title: 'false'
---

## Esercizio 2: Soglie (Thresholds)

##### Obiettivo:

Creare una **Threshold** chiamata ```TrainingThreshold``` con un valore di ```0```.

Creare uno Schedule chiamato **My Threshold Schedule**.

Creare un Windows Job chiamato **Threshold Dependency Job** che esegue il programma ```genericp.exe``` con una Frequenza su ```7``` giorni. Assegnare al Job **Threshold Dependency** una dipendenza a ```TrainingThreshold``` con un valore di ```2```.

Creare una **Threshold Update** a fronte di uno stato **Finished OK** con un valore di ```0```.

Creare un altro Windows Job chiamato **Threshold Update Job** che esegue il programma genericp.exe con una Frequenza di ```7``` day.

Creare una **Threshold Update** a fronte di uno stato **Finished OK** con un valore di ```2```.

Creare un Job nulla chiamato **Threshold Initial Value Job** che gira su una Frequenza di ```7``` giorni.

Aggiungere un evento di notifica ```$NOTIFY:EMAIL``` sul Job in esecuzione:

```
smauser@congo.local,,,Initial value of TrainingThreshold,Initial value of TrainingThreshold is [[TH.TrainingThreshold]]
```

Aggiungere un secondo Null Job chiamato **Threshold After Update Job** copiato dal primo job. Aggiornare i parametri dell'evento a:

```
smauser@congo.local,,,After the update,After the update the value of TrainingThreshold is [[TH.TrainingThreshold]]
```

Crearew un terzo Null Job chiamato **Threshold Final Value Job** copiato dall'uiltimo Job:

```
smauser@congo.local,,,Final value of TrainingThreshold,Final value of TrainingThreshold is [[TH.TrainingThreshold]]
```

Imposta le dipendenze del Job come:

**Threshold Initial Value Job > Threshold Update Job > Threshold After Update Job**

**TrainingThreshold > Threshold Dependency Job > Threshold Final Value Job**

Effettuare la messa a piano per oggi. Osservare il risultato nella Vista Matrix o nel Solution Manager.

Aprire **Thunderbird** per verificare le Notifiche

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E2.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Creare la Threshold.
    * Nel menù **Administration** fare doppio clic su **Thresholds**.
    * Fare clic sul pulsante **Add** nella barra degli strumenti di Thresholds.
    * Nella casella di testo Name digitare ```TrainingThreshold```, inserire la documentazione e nella casella di testo **Threshold** inserire il valore ```0```.
    * Fare clic sul pulsante **Add** nella barra degli strumenti di Thresholds. Chiudere la scheda **Threshold**.
2. Creare lo Schedule ed i Jobs.
    * Nel menù Administration fare doppio clic su **Schedule Master**.
    * Fare clic sul pulsante **Add** nella barra degli strumenti di **Schedule Master**.
    * Aggiungere un nuovo Schedule chiamandolo **My Threshold Schedule**.
    * Usare le seguenti impostazioni per lo Schedule:
        * Dal lunedì alla domenica sono giorni lavorativi.
        * **NOT** usare il Calendario **Master Holiday Calendar**.
        * Auto Build ```7``` days in advance for ```1``` days.
        * Auto Delete ```7``` days.
    * Non dimenticare di aggiungere la **documentazione** al tuo programma.
    * Chiudere lo **Schedule Master** e aprire il **Job Master** per aggiungere i Job.
    * Selezione **My Threshold Schedule**.
    * Fare clic sul pulsante **Add** nella barra degli strumenti di Job Master.
    * Aggiungere un nuovo Job chiamato **Threshold Dependency Job** con le seguenti caratteristiche:
        * **Programma**: ```Genericp.exe``` programma da eseguire per ```10``` secondi. 
        :::note Nota
        _Nota: se si utilizza **Ctrl+F**, non selezionare una riga di comando che utilizza una Schedule o Job instance property_ 
        :::
        * **Machine**: ```SMATraining```
        * **User**: ```SMATRAINING\SMAUSER```
        * **Frequency**: ```Example-Mon-Sun-O```
        * Inoltre, non dimenticare di aggiungere la **Documentazione**.
3. Creare la dipendenza da Threshold.
    * Fare clic sulla scheda **Dependencies**.
    * Fare clic sulla scheda **Threshold/Resource Dependency**.
    * Nel Riquadro **Threshold/Resource Dependency** Fare clic sul pulsante **Add**.
    * Nell'elenco a discesa **Threshold/Resource** selezionare ```TrainingThreshold```.
    * Nell'elenco a discesa **Operator** selezionare = (**simbolo di uguaglianza**).
    * Nella casella di testo **Value** digitare ```2```.
    * Fare clic sul pulsante **OK**.
4. Creare una azione di **Threshold/Resource Update**:
    * Fare clic sulla scheda **Threshold/Resource Update**.
    * Nel Riquadro **Threshold/Resource Update** Fare clic sul pulsante **Add**.
    * Selezionare ```TrainingThreshold``` nell'elenco a discesa.
    * Nell'elenco a discesa **Job Status** selezionare **Finished OK**.
    * Nella casella di testo **Value** digitare ```0```.
    * Fare clic sul pulsante **OK**.
5.	Fare clic sul pulsante **Add** nella barra strumenti **Job Master** per aggiungere un altro Job.
6. Nominare il Job **Threshold Update Job** e.
    * **Program**: ```Genericp.exe``` programma da eseguire per ```10``` secondi
    * **Machine**: ```SMATraining```
    * **User**: ```SMATRAINING\SMAUSER```
    * **Frequency**: ```Example-Mon-Sun-O```
    * Inoltre, non dimenticare di aggiungere la **Documentazione**.
7. Creare una azione di **Threshold/Resource Update**:
    * Fare clic sulla scheda **Threshold/Resource Update**.
    * Nel Riquadro **Threshold/Resource Update** Fare clic sul pulsante **Ad**d.
    * Selezionare ```TrainingThreshold``` nell'elenco a discesa.
    * Nell'elenco a discesa **Job Status** selezionare **Finished OK**.
    * Nella casella di testo **Value** digitare ```2```.
    * Fare clic sul pulsante **OK**.
8. Aggiungi un Job nullo allo Schedule per inviare una notifica con il valore iniziale della soglia.
    * Fare clic sul pulsante **Add** nella barra strumenti **Job Master** per aggiungere un altro Job.
    * Nominare il Job **Threshold Initial Value Job** e:
    * **Frequency**: ```Mon-Sun-O```
    * Fare clic sulla scheda **Events** e fare clic sul pulsante **Add** nel riquadro **Events**.
    * Selezionare l'opzione **Job Status**.
    * Fare clic su **Next**.
    * Selezionare **Finished OK** nell'elenco a discesa **Job Status**.
    * Fare clic su **Next**.
    * Selezionare l'Evento ```$NOTIFY:EMAIL``` nell'elenco a discesa **Event Template**.
		* ```smauser@congo.local,,,Initial value of TrainingThreshold,Initial value of TrainingThreshold is [[TH.TrainingThreshold]]```
	* Fare clic su Finish.
9. Aggiungere un secondo **Null Job** allo Schedule per inviare una notifica con il valore della **Threshold** dopo che è stata aggiornta a ```2```.
    * Assicurarsi di avere selezionato il Job **Threshold Initial Value Job**.
    * Fare clic sul pulsante **Copia** (quarto pulsante da destra) sulla barra degli strumenti **Job Master** per copiare questo lavoro.
    * Chiamare il Job **Threshold After Update Job**.
    * Andare nella scheda **Events** per cambiare l'**Evento **come di seguito
		* ```smauser@congo.local,,,After the update,After the update the value of TrainingThreshold is [[TH.TrainingThreshold]]```
10. Aggiungere un terzo **Null Job** allo Schedule per inviare una notifica con il valore finale della **Threshold**.
    * Assicurarsi di avere selezionato il Job **Threshold After Update Job**.
    * Fare clic sul pulsante **Copia** (quarto pulsante da destra) sulla barra degli strumenti **Job Master** per copiare questo lavoro.
    * Nominare il Job come **Threshold Final Value Job**.
    * Andare nella scheda **Events** per cambiare l'**Evento** come di seguito
		* ```smauser@congo.local,,,Final value of TrainingThreshold,Final value of TrainingThreshold is [[TH.TrainingThreshold]]```
11. Chiudere il Job Master Schedule Master (se aperto).
12. Apri **Workflow Designer** per impostare le dipendenze..
    * Selezionare **My Threshold Schedule** dal riquadro **Select Schedule**.

<a href="imgbasic/414.png" target="_blank"><img src="imgbasic/414.png" width="500"></img></a>

13. Fare clic sul pulsante **Save**.
14. Chiudere la scheda **Notification Manager**.
15. Mettere a piano lo Schedule in stato Released per oggi.
    * Aprire una delle viste Operation (**List** o **Matrix**) o utilizzare **Solution Manager**.
16. Assicurarsi che **My Resources Schedule** sia in stato **Completed**.
17. Aprire **Thunderbird** e consultare la casella di posta. _Si dovrebbero trovare ```3``` nuove emails_.

</details>