---
sidebar_label: 'Unità 3 Esercizio 11'
hide_title: 'false'
---

## Esercizio  11: Proprietà a livello

##### Obiettivo:

Nello Schedule **MY FIRST SCHEDULE**, creare una definizione di istanza (**Instance Definition**) chiamata ```RUNTIME``` con un valore di ```20```.

Poi a livello di **Machines**, interrompere la comunicazione con la macchina ```SMATraining```. Aprire il pannello **Advanced Settings** e aggiungere una Property chiamata ```PathWindows``` con un valore di ```C:\Program Files\OpConxps\MSLSAM```.

Riavviare la comunicazione con la macchina ```SMATraining```.

Selezionare **WINDOWS JOB 4** nello Schedule **MY FIRST SCHEDULE**. Aggiorna la riga di comando per il lavoro utilizzando le **Instance Properties** appena creata, cambiare:

```
“[[PathWindows]]\genericp.exe” -t[[RUNTIME]] -e0
```

in

```
“[[MI.PathWindows]]\genericp.exe” -t[[SI.RUNTIME]] -e0
```

Rimetter a piano (Rebuild) lo Schedule **MY FIRST SCHEDULE**, sovrascrivendo e rilasciando per il piano giornaliero corrente. Rilasciare **WINDOWS JOB 1** e **WINDOWS JOB 2**.

Dopo che tutti i lavori sono stati eseguiti correttamente, verificare l'esito positivo delle proprietà/token in **Job Information > Configuration > Token Replacement Values** per il **WINDOWS JOB 4**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E11.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menù **Administration** fare doppio clic su **Schedule Master**.
2. Nell'elenco a discesa **Schedule Selection** selezionare lo Schedule **My First Schedule**.
3. Fare clic sul tab **Instance Definition** negli **Schedule Details**.
4. Nella casella di testo **Define Property Values** digitare ```RUNTIME=20```.
5. Fare clic sul pulsante **Add** alla destra della casella di testo **Define Property Values**.
6. Fare clic sul pulsante **Save** nella barra degli strumenti di **Schedule Master**.
7. Chiudere **Schedule Master**.
8. Nel menù **Administration** fare doppio clic su **Machines**.
9. Nell'elenco a discesa **Select Machine** selezionare ```SMATraining```.
10. Tasto destro sull'icona **LSAM Communication** nel **Communication Status** e selezionare **Stop Communication**.
11. Fare clic sul collegamento **Open Advanced Settings Panel** subito sotto il **Communication Status**.
12. Fare clic sulla riga **Available Property**.
13. Fare clic sul pulsante **Add**.
14. Digitare ```PathWindows=C:\Program Files\OpConxps\MSLSAM``` nella casella di testo e fare clic su **OK**.
15. Fare clic sul pulsante **Update**.
16. Fare clic sul pulsante **Save**.
17. Tasto destro sull'icona **LSAM Communication** sotto **Communication Status** e selezionare **Start Communication**.
18. Chiudere la scheda **Machines**.
19. Nell'elenco a discesa **Administration**, fare clic su **Job Master**.
20. Nell'elenco a discesa **Schedule** selezionare **My First Schedule**.
21. Nell'elenco a discesa **Job** selezionare **Windows Job 4**.
22. Aggiornare la riga di comando per utilizzare le nuove proprietà posizionando le **Properties** per puntare alle **Machine** o alle **Schedule Instance Properties** invece che alle **Global Properties**:

```
“[[PathWindows]]\genericp.exe” –t[[RUNTIME]] –e0
```

to:

```
“[[MI.PathWindows]]\genericp.exe” –t[[SI.RUNTIME]] –e0
```

23. Fare clic sul pulsante **Save**.
24. Chiudere **Job Master**.
25. Se **My First Schedule** è nello stato In Process, **mettere in stato Cancel** tutti i jobs.
26. Fare la **Rebuild** dello Schedule **My First Schedule** in stato **Released** per oggi.
27. Rilasciare **Windows Job 1** e **Windows Job 2**.
28. Controllare il risultato in Enterprise Manager (controllare **Job Information> Configuration> Token Replacement Values** per **Windows Job 4**).

</details>
