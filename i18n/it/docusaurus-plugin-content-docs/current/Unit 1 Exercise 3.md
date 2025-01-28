---
sidebar_label: 'Unità 1 Esercizio 3'
hide_title: 'false'
---

### Esercizio 3: Passi per Definire un Job 

##### Objecttivo:

Creare un Job chiamato **WINDOWS JOB 1** all'interno dello Schedule **MY FIRST SCHEDULE**. Il Job deve essere eseguito sul tipo di macchina ```WINDOWS```. Il Job dovrà usare la macchina ```SMATRAINING``` e lo User Id ```SMATRAINING\SMAUSER``` La riga di commando dovrà eseguire il seguente programma:

```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10```

Assegnare al Job la **Frequenza esistente** ```Example-Mon-Sun-O```. Ripetere i passi precedenti per creare 3 Jobs aggiuntivi identici al **WINDOWS JOB 1** seguendo lo stesso schema di denominazione.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nella sezione Administration, effettuare Doppio-Click su **Job Master**.
2. Nell'elenco a discesa Schedule, selezionare **My First Schedule**.
3. Click sul pulsante Add nella barra degli strumenti nella finestra **Job Master**.
4. Nella casella di testo Name, inserire **Windows Job 1**.
5. Nell'elenco a discesa Job Type, seleziona **Windows**.
6. Nell'elenco a discesa Primary Machine selezionare la macchina ```SMATraining``` su cui eseguire il lavoro.
7. Nell'elenco a discesa User ID, selezionare ```SMATRAINING\SMAUSER```
8. Nella **Command Line**, digitare:
```
"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10
```
9. Click sul pulsante **Save** nella barra degli strumenti nella finestra **Job Master**.
10. All'interno della schermata **Job Master**, nelle Proprietà del Job fare click nel tab Frequency.
11. All'interno del riquadro delle frequenze, **Frequency List**, fare click sul pulsante Add (situato sotto la lista delle Frequnze).
12. Verrà avviata la schermata guidata **Frequency Definition Wizard**.
13. Selezionare **Use Existing Frequency**.
14. Dall'elenco a discesa, selezionare la Frequenza ```Example-Mon-Sun-O```, fare click su **Next** e poi **Finish**. Ripetete i passi da 3 a 14 per creare tre Jobs identici a **Windows Job 1**.
15. **Windows Job 2**
16. **Windows Job 3**
17. **Windows Job 4**
18. Chiudere la finestra **Job Master**.

</details>
