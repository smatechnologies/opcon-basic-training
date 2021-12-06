---
sidebar_label: 'Unità 1 Esercizio 8'
hide_title: 'false'
---

## Esercizio 8: Modificare un Job nel piano giornaliero (Daily)

##### Obiettivo:

Mettere a piano (Build) e rilasciare lo Schedule **"Murphy’s Law"** per oggi e ulteriori ```7 giorni``` a partire dalla data odierna sul Calendar. Nella vista Matrix, selezionare **Edit Daily Job** per il job **Wrong Path Job**. Modificare i percorsi della Command Line e della Working Directory cambiando ```MSLSAM2``` in ```MSLSAM```. Salvare il Daily Job e poi aggiornare la definizione del Job Definition nello Schedule Master.

Riavviare il Job.

Nella vista Matrix, selezionare la data di domani e selezionare lo Schedule **Murphy’s Law**. Selezionare **Edit Daily Job** per il Jon **Wrong Path Job** osservare che compare ancora ```MSLSAM2``` . (Tutte le copie nelle diverse date dei piani giornalieri (Daily) devono essere ricreate (rebuild) quando viene cambiato il record Master).

Close the Job Daily tab and open the Job Master to ensure that the paths contain the corrected ```MSLSAM```.

Selezionare Schedule Build ed effettuare la Build ed il rilascio (Release) dello Schedule **Murphy’s Law** per le date precedentemente selezionate ma non ancora eseguite. Effettuare la Build dello Schedule e **Sovrascrivere** le Builds precedenti.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Effettuare la Build dello Schedule **Murphy’s Law**.
2. Nel menù Operation, fare doppio clic su **Schedule Build**.
3. Nell'area Schedule Selection, selezionare Murphy’s Law per effettuarne la build.
4. Nel campo Start, mantenere la data odierna.
5. Nel campo Stop, cambiare la data ```7 giorni``` avanti a partire da oggo.
6. Fare click sul pulsante Build e rilasciare lo Schedule per la giornata odierna.
7. Fare clic su **OK**.
8. Chiudere la schermata **Build Schedules**.
9. Nel menù Operation, fare doppio clic sulla vista **List** o **Matrix**.
10. Selezionare la data piano.
11. Selezionare lo Schedule **Murphy’s Law**.
12. Tasto destro sul Job **Wrong Path Job**.
    * (nella vista PERT, tasto destro sul Wrong Path Job)
13. Selezionare Maintenance > **Edit Daily Job**
    * (nella vista PERT andare su Job > Maintenance > Edit Daily Job).
14. Comparirà la schermata **Job Daily**
15. Cambiare ```MSLSAM2``` in ```MSLSAM``` nella Command Line **e nella** Working Directory.
16. Fare clic sul pulsante Salva nella barra strumenti del **Job Daily**.
17. Fare clic sul pulsante **Save Job Definition to Master** e confermare l'azione.
    * Questo estenderà in cambiamenti fatti anche sul **Job Master**.
18. Chiudere la schermata **Job Daily**.
19. **Right-click** sul job and selezionare **Restart**.
20. Inserire un commento e premere **OK**.
21. Il job verrà eseguito correttamente perchè sono state fissate le anomalie sul comando.
22. Nel menù Operation, fare doppio clic sulla vista **List** o **Matrix**. E' possibile aprire anche la vista **PERT**, se lo si desidera.
23. Selezionare la data di domani,
24. Selezionare lo Schedule **Murphy’s Law**.
25. Tasto destro sul **Job Wrong Path**.
    * (_nella vista **PERT**, tasto destro sul **Wrong Path Job**_) 
26. Selezionare Maintenance > **Edit Daily Job**.
    * (nella vista PERT andare su Job > Maintenance > **Edit Daily Job**).
27. Comparirà la schermata **Job Daily**.
28. Notate che il percorso contiene ancora ```MSLSAM2``` invece di ```MSLSAM```.
    * Ricordate che dovete **rigenerare (rebuild)** l'insieme delle copie delle **Tabelle Daily** quando il Master recond viene cambiato
    * Non effettuare nessun cambiamento. Chiudere soltanto la scheda **Daily Job (Wrong Path)**.
29. Ritornare sul **Job Master** e verificare che il percorso della **Command Line e della Working Directory** siano cambiati da ```MSLSAM2``` a ```MSLSAM```.
30. Chiudere il **Job Master**.
31. Ne menù operation, fare doppio click su **Schedule Build**.
32. Nell'area Schedule Selection, selezionare **Murphy’s Law** per rigererarlo.
33. Nella sezione Scheduling Dates:
* Inserire data di inizio e fine **(Start and Stop dates)** perchè la rebuild copra il periodo di data in cui questo Schedule è già a pinao (built) **ma non è ancora stato eseguito**.

_– oppure –_

* Premere sul pulsante **Calendar** (a destra della casella di testo) per selezionare la data dal calendario mensile.
34. Fare clic sul pulsante **Build**.
35. Nella finestra delle **Build Properties**:
    * Fare clic sul pulsante **OK** (lasciare selezionato il pulsante di opzione **Released**).
    * Sicoome lo Schedule era già stato costruito per quelle date, vi verrà richiesto di sovrascrivere quelle build. Fare clic su **Yes** quando richiesto (per ogni data).
36. Chiudere la schermata **Build Schedules**.
37. Dopo che lo **Schedule Build** è' completo i piani giornalieri risulteranno aggiornati.
38. Chiudere tutte le schede, ma mantere aperto **l'Enterprise Manager**.

</details>
