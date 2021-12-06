---
sidebar_label: 'Unità 4 Esercizio 5'
hide_title: 'false'
---

## Esercizio 5: Importare uno Script

##### Obiettivo:

Nello **Script Repository**, aggiungere un nuovo script chiamato ```SetThreshold```. Importare il file ```ExerciseThreshold.cmd``` e selezionare ```Command Shell``` e la ```Initial Version``` per le Opzioni dello Sript. Assicurarsi che lo script sia assegnato al ruolo ```Role_ocadm```.

Nello Schedule esistente **Embedded Scripts Training Schedule**, creare un job chiamato ```ExerciseThreshold``` che viene eseguito con la Frequenza Monday-Friday. Il Job dovr' eseguire una **Job Action** di tipo ```Embedded Script```. Lo script deve essere il ```SetThreshold``` script utilizzando la versione ```LATEST``` con un ```Command Shell``` **Runner**. Nella casella di Testo **Arguments** inserire: ```+2```.

Nella Vista Matrix, fare tasto destro su **Embedded Scripts Training Schedule** e aggiungere il Job ```ExerciseThreshold``` in Stato per Oggi.

Quando il Job sarà terminato, controllare il valore della **Threshold**. 


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E5.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

:::note Nota
_In questo esercizio importeremo uno script creato nell'Unità 3 nel database OpCon_
:::

1. Nel Menù **Scripts** fare doppio clic su **Repository**.
2. Fare clic sul pulsante **Add** nella barra strumenti di **Script Repository**.
3. Digitaer ```SetThreshold``` nella casella di testp **Name**.
4. Insrire la **Documentazione** nel campo Descrizione.
5. Fare clic sul pulsante **Open File**.
6. Navigare nel percorso ```C:\scripts``` selezionare il file ```ExerciseThreshold.cmd``` e fare clic su Open.
7. Lo script viene caricato sulla schermata.
8. Nell'elenco a discesa **Type** selezionare ```Command Shell```.
9. Mantenere ```Initial Version``` nella casella di testo Initial Comments.
10. Fare clic sul pulsante **Save**.
11. Assegnare lo **Script** ad un **Role**. (In questo caso, lasciare ```Role_ocadm``` come ruolo assegnato).
12. Chiudere la scheda **Scripts Repository**.
13. Nel Menù **Administration** fare doppio clic su **Job Master**.
14. Nell'elenco a discesa **Schedule** selezionare **Embedded Scripts Training**.
15. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
16. Nella casella di testo **Name** inserire ```ExerciseThreshold```.
17. Nell'elenco a discesa **Job Type** selezionare ```Windows```.
18. Nell'elenco a discesa **Primary Machine** selezionare ```SMATraining```.
19. Nell'elenco a discesa **Job Action** selezionare ```Embedded Script```.
20. Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```.
21. Nell'elenco a discesa **Script** selezionare ```SetThreshold```.
22. Mantenere la **Version** come ```LATEST```.
23. Nell'elenco a discesa **Runner** selezionare ```Command Shell```.
24. Nella casella di testo **Arguments** digitare: ```+2```.
25. Fare clic sul punsalte **Save**.
26. Assegnare al Job la **Frequenza** ```Mon-Fri-N```.
27. Aggiungere la **Documentazione** e chiudere **Job Master**.
28. Aprire le **Thresholds** e controllare l'attuale valore di ```TrainingThreshold```. dovrebbe essere ```0```.
29. Chiudere la scheda **Thresholds**.
30. Andare in una delle viste **Operation**, fare clic con il taso destro su **Embedded Scripts Training Schedule > Maintenance > Add Jobs**.
31. Selezionare il Job ```ExerciseThreshold``` e fare clic su **Add** Job.
32. Selezionare l'opzione **Released** e fare clic su **Yes**.
33. Fare clic su **Close**.
34. Dopo che il Job è terminato, aprire nuovamente le Thresholds e controllare il valore, dovrebbe essere 2.
35. Chiudere la scheda **Thresholds**.
36. Per esercizio, **editare il Daily Job** cambiando il **Parametero** nuovamente a ```0```, riavviare il Job e controllare ancora la **Threshold**.

</details>