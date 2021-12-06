---
sidebar_label: 'Unità 4 Esercizio 7'
hide_title: 'false'
---

## Esercizio 7: SubSchedule - Processi Concorrenti

##### Obiettivo:

Creare una **Risorsa** chiamata ```ProcessFile``` con un valore di **Max Resources** massimo di ```1```.

Creare lo Schedule **ProcessFile-Main Schedule**. Creare un nuovo Job chiamato **Process File 1** all'interno di questo Schedule e assegnare il Subschedule **Repeating-SubSchedule** (creato nell'esercizio percedente) come un **Container Job** con Frequenza Monday-Friday. Aggiungere al Job una **Resource Dependency** a ```ProcessFile``` con il valore di ```1```.

Copiare il Job **Process File 1** per creare 4 Job aggiuntivi con lo stessa logica di nomi.

Mettere a piano (**Build**) lo Schedule in stato **Released** per oggi ed osservare i risultati nella Vista Matrix.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E7.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

**Creare Primary Schedule**

1. Nel menù **Administration** fare clic su **Schedule Master**.
2. Fare clic sul pulsante **Add** nella barra degli strumenti di **Schedule Master**.
3. Nella casella di testo **Name** digitare **ProcessFile-Main**.
4. Nella casella di testo **Documentation** **"This is the Parent Schedule"**.
5. Nel riquadro **Start Time** notare il valore di default ```00:00``` (mezzanotte).
6. Mantieni le impostazioni predefinite selezionate per i **Workdays per Week** per l'esecuzione dello Schedule.
7. Fare clic sul pulsante **Save** nella barra degli strumenti di **Schedule Master**. e chiudere **Schedule Master**.

**Creare una Resource**

8. Nel menù **Administration** fare clic su **Resources**.
9. Fare clic sul pulsante **Add** nella barra degli strumenti di **Resources**.
10. Nella casella di testo **Name** inserire ```ProcessFile```.
11. Nella casella di testo **Documentation** inserire This resource is used in the **ProcessFile SubSchedule** exercise.
12. Nel riquadro **Max Resources** inserire ```1```.
13. Fare clic sul pulsante **Save** nella barra degli strumenti di **Resources**. e chiudere **Resources**.
14. Nel menù **Administration** fare doppio clic su **Job Master**.
15. Selezionare lo Schedule **ProcessFile-Main**.
16. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
17. Nella casella di testo **Name** inserire **Process File 1**.
18. Nell'elenco a discesa **Job Type** selezionare **Container**.
19. Nell'elenco a discesa **Schedule** to run as **SubSchedule** selezionare **Repeating-SubSchedule**.

:::note Nota
20.	Questo **SubSchedule** può essere utilizzato anche se è utilizzato in un altro **Schedule**.
:::

21. Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
22. Fare clic sulla scheda **Frequency**.
23. All'interno la lista **Frequency** fare clic sul pulsante **Add**.
24. Scegliere l'opzione **Use existing Frequency**.
25. Nell'elenco a discesa **Frequency** selezionare **Mon-Fri-N**.
26. Fare clic su Next e poi **Finish**.

**Impostare dipendenza da Resource**

27. Con la scheda **Job Master** ancora aperta, fare clic sulla scheda **Dependencies**.
28. Fare clic nella sottoscheda **Threshold/Resource Dependency**.
29. Fare clic sul pulsante **Add** nella sottoscheda **Threshold/Resource Dependency**.
30. Selezionare la Resource ```ProcessFile``` nell'elenco a discesa **Threshold/Resource**.
31. Inserire il valore ```1``` nel riquadro **Value**.
32. Fare clic sul pulsante **OK**.

**Creare Copies del Container Job**

33. Nella barra degli strumenti di **Job Master** selezionare il pulsante **Copy** o premere **Ctrl+Inser**t.
34. Nominare il Jon **Process File 2**.
35. Fare clic sul pulsante **OK**.
36. Ripetere questi step per creare i Jobs **Process File 3**, **Process File 4**, e **Process File 5**.
37. Chiudere **Job Master**.
38. Utilizzare il **Workflow Designer** per verificare che tutti e 5 i Job abbiano la corretta dipendenza dalla Resource ```ProcessFile```.
39. Chiudere **Workflow Designer**.
40. Mettere a piano (**Build**) lo Schedule **ProcessFile-Main** in stato (**Released**) per il piano odierno e controllare i risultati utilizzando le viste **List/Matrix** e la vista **PERT**

<a href="imgbasic/432.png" target="_blank"><img src="imgbasic/432.png" width="500"></img></a>

</details>