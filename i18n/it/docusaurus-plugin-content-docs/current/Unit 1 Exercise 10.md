---
sidebar_label: 'Unità 1 Esercizio 10'
hide_title: 'false'
---

## Esercizio 10: Workflow Designer

##### Obiettivo:

Aprire **Workflow Designer** e creare un nuovo Job chiamato **WINDOWS JOB 5** nello schedule **MY FIRST SCHEDULE**. Date al Job gli stessi dettagli dei lavori esistenti in questo Schedule. Dare al Job a **Una Dipendenza Richiede (Requires)** per il **WINDOWS JOB 4**.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E10.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menu **Administration** fare Doppio-Click su **Workflow Designer**
2. Dalla Lista **Select Schedule** selezionare **My First Schedule**
3. **Cliccare** and **selezionare** l'area in cui si volgion effettuare le variazioni
4. Nel riquadro degli **Strumenti**, **fare click**, **trascinare**, e **rilasciare** l'icona **Add Job** nel diagramma dello Schedule
5. Nella schermata **Job Master** inserire **Windows Job 5** come nome.
6. Scegliere **Windows** come tipo
7. Nell'elenco a discesa **Primary Machine** selezionare la macchina ```SMATraining``` su cui fare girare il Job
8. Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```
9. Nella **Command Line**, utilizzare il programma generico
```
"C:\Program Files\OpConxps\MSLSAM\Genericp.exe" -t10 -e0
```
10. Fare Click sul pulsante **Save** nella barra strumenti **Job Master**.
11. Fare click sulla scheda **Frequency** ed aggiungere una frequenza qualsiasi
12. Chiudere la Schermata Job Master utilizzando il simbolo **X** in alto a destra.
13. Nel riquadro **Tools** fare click su **Add Dependency**.
14. Prima, fare **click on the Job** che è oggetto di **Dipendenza** (esempio: **Windows Job 4**).
15. Poi fare **click** sul Job su cui si vuole creare la **Dipendenza** (esempio: **Windows Job 5**).
16. Nella finestra **Job Dependency**, scegliere il tipo di dipendenza desiderato (esempio: **Requires**).
17. Fare Click sul pulsante **OK** per salvare la dipendenza aggiunta . 
    * _Nota: Notate che l'icona del mouse mantiene il puntatore **"Add Dependency"**. Puoi fare clic su "Seleziona" dal pannello Strumenti o semplicemente premere il tasto di escape_
18. Chiudere la scheda **Workflow Designer**.

</details>
