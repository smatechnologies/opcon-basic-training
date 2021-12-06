---
sidebar_label: 'Unità 3 Esercizio 14'
hide_title: 'false'
---

## Esercizio 14: Eventi - Criteri di fallimenti

##### Obiettivo:

Nel Job Master, all'interno dello Schedule **Exit Code Events**, selezionare **Job 1**.

Nella scheda **Advanced** del riquadro Failure Criteria impostare il **Failure Criteria** a:

```Finish OK if Equal to 0```

**And/OR**

```Finish OK if Equal to 100```

Aggiungere un nuov evento basato sulla **Exit Description** se il valore è ```Equal to 100 ```

L'evento dovrebbe usare il Template ```$JOB:SKIP``` per skippare **Job 2**

Effettuare la messa a piano dello Schedule e visualizzarte il risultato nella Vista Matrix


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E14.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menù **Administration** fare doppio clic su **Job Master**.
2. Nell'elenco a discesa **Schedule** selezionare **Exit Code Events**.
3. Nell'elenco a discesa **Job** selezionare **Job 1**.
4. Nella parte inferiore dello schermo, fare clic sulla scheda **Advanced**.
5. Cambiare **Results** nell'elenco a discesa da **Fail** a **Finish OK**.
    * Ciò invertirà la logica affermando che il lavoro finirà **Finish OK** solo se il Job uscir' con gli **Exit Codes** elencati.
6. Cambiare l'operatore di confronto **Comparison Operator** da ```Not Equal To``` a ```Equal To``` lasciando il valore impostato su ```0```.
7. Nella seconda riga cambiare nell'elenco a discesa **And/Or** da vuoto a **OR**.
8. Nella seconda riga cambiare nell'elenco a discesa **Comparison Operator** da vuoto a ```Equal To```.
9. In the second row, change the Value from ```0``` to ```100```.
10. Fare clic sul pulsante **Save** in alto a destra dello schermo.
11. Fare clic sulla scheda **Events**.
12. Fare clic sul pulsante **Add** nel riquadro **Events**.
13. Selezionare l'opzione **Exit Description** nella procedura guidata di definizione degli eventi (**Event Definition Wizard**).
14. Fare clic su **Next**.
15. Selezionare ```Equal To``` nel menù a discesa **Comparison Operator**.
16. Digitare ```100``` nella casella di Testo.
17. Fare clic su **Next**.
18. Selezionare il template ```$JOB:SKIP``` dak menù a discesa Event Template.
19. Aggiornare ```<Schedule date>``` con ```[[$SCHEDULE DATE]]```
20. Aggiornare ```<Schedule name>``` to ```[[$SCHEDULE NAME]]```
21. Aggiornare ```<Job name>``` to ```Job 2```.
22. I parametri dell'**Evento** dovrebbero presentarsi così: 
```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],Job 2```
23. Fare clic sul pulsante **Finisch**.
24. Chiudere la scheda **Job Master**.
25. Nel menù **Operations** fare doppio click su **Schedule Build**.
26. Selezionare lo Schedule **Exit Code Events** dalla lista **Schedule Selection**.
27. Fare clic sul pulsante **Build**.
28. Selezionare l'opzione **Released**.
29. Fare Click su **OK**.
30. Aprire una delle schermate **Operations** a scelta (**Matrix** o **List**) o utilizzare **Solution Manager**.
31. Notare che o; Job **Job Failure** è fallito con **exit code** ```100```.
32. Notice che **Job 1** dovrebbe uscire con **exit code** uguale a ```100``` ma terminare **Finish OK**.
33. Dovrebbe inoltre effettuare _lo skip_ del Job **Job 2** e consentire l'esecuzione del **Job 3**.

</details>