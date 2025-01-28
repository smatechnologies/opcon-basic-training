---
sidebar_label: 'Unità 2 Esercizio 1'
hide_title: 'false'
---

### Esercizio 1: Definizione di una proprietà globale (Global Property)

##### Obiettivo:

Creare due Global Properties:

```RUNTIME``` – Valore: ```10```

```PathWindows``` – Valore: ```C:\Program Files\OpConxps\MSLSAM```


Per ciascuno dei Job in **MY FIRST SCHEDULE**, sostituisce il testo hard-coded con le proprietà appena create:

```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t20```

in:

```"[[PathWindows]]\genericp.exe" -t[[RUNTIME]]```

Rimettere a piano (Rebuild) **MY FIRST SCHEDULE**, sovrascrivendo la data odierna. Visualizzare le escuzioni dello Schedule nella vista **Matrix View** e fare click con il pulsante destro sul Job **WINDOWS JOB 1** per visualizzare **Job Information > Configuration > Token Replacement Values**.

Verificare che i valori corretti siano attribuiti alle proprietà utilizzate.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E1.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menu **Amministrazione**, Doppio-Click sulle **Global Properties**.
2. Click sul pulsante **Add** nella barra degli strumenti delle **Global Properties**.
3. Nella casella di testo **Name** digitare ```RUNTIME```.
4. Aggiungere questa **Documentazione** alla **Global Property**: 
    * Questa proprietà contiene il valore in secondi utilizzato dal programma per la sua esecuzione.
5. Nella casella di testo **Value**, digitare ```10```.
  * **Non selezionare l'opzione Encrypted.**
6. Fare click sul pulsante **Save** nella barra strumenti delle Global Properties.
7. Fare click sul pulsante **Add** nella barra strumenti delle Global Properties.
8. Nella casella di testo **Name** digitare PathWindows.
9. Aggiungere la Documentazione alla Global Property.
10. Nel **Value** della casella di testo:

```C:\Program Files\OpConxps\MSLSAM```

11. Fare click sul pulsante Save nella barra strumenti delle Global Properties.
12. Chiudere la scheda Global Properties.
13. Nel Menù Amministrazione, fare click su Job Master.
14. Nella lista a discesa Schedule, selezionare My First Schedule.
15. Nella lista a discesa Job, selezionare Windows Job 1.
16. Aggiornate la linea di comando per usare le nuove proprietà al posto del testo hard-coded. 

* Cambiate il seguente valore:

```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t20```  

in:

```"[[PathWindows]]\genericp.exe" -t[[RUNTIME]]```

17. Fare click sul pulsante **Save**.
18. Ripetere per il Job **Windows Job 2** fino **Windows Job 5**.
19. Chiudere la scheda **Job Master**.
20. Aprire la vista **List** o **Matrix**.
21. Selezionare la data corrente.
22. Verificare che **My First Schedule** sia completato.
  * **_Se non completato, allora è necessario mettere in Cancel tutti Jobs non terminati per chiudere lo Schedule_**.
23. Aprire la schermata **Schedule Build**.
24. Selezionare **My First Schedule** dal riquadro **Schedule Selection**.
25. Selezionare l'opzione **Overwrite Existing Schedule**.
26. Fare click sul pulsante **Build**.
27. Selezionare l'opzione **Released**.
28. Fare click sul pulsante **OK**.
29. Chiudere la schermata **Build Schedules**.
30. Aprire la vista **List** o **Matrix**.
31. Selezionare la data corrente.
32. Espandere (se nella vista **List**) or fare click (se nella vista **Matrix**) **My First Schedule**.
33. Verificare che tutti i Job siano nello stato **Finished OK**.
34. Cliccare con il tasto destro del mouse su **Windows Job 1**.
35. Selezionare **Job Information**.
36. Fare click sulla scheda **Configuration**.
37. Selezionare la riga **Token Replacement** Values nella griglia.
38. Verificare che il corretto valore sia stato atribuito a ciascuna Global Property nella riga Token Replacement Values.
39. Fare Click su **OK** e chiudere la vista **List/Matrix**.

</details>