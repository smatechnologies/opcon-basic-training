---
sidebar_label: 'Unità 4 Esercizio 3'
hide_title: 'false'
---

### Esercizioe 3: Eventi Esterni su Soglie

##### Obiettivo: 

Nello Schedule **My Threshold Schedule**, creare un nuovo Job chiamato **Threshold External Event Job**. Questo Job deve girare con una Frequenza di ```7``` giorni con le seguente riga di comando:

```
"C:\scripts\ExerciseThreshold.cmd" +1
```

Nella vista Matrix, tasto destro su **My Threshold Schedule** e aggiungere il Job **Threshold External Event Job** in stato Rilasciato per Oggi.

Controllare il valore della Soglia (Threshold) ```TrainingThreshold```.

Modificare la riga di comando:

```
"C:\scripts\ExerciseThreshold.cmd" -1
```

Riavviare il Job e quando termina, controllare ancora il valore di TrainingThreshold per verificarne la correttezza.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Aprire **Enterprise Manager**.
2. Nel menù **Administration** fare doppio clic su **Job Master**.
3. Nell'elenco a discesa Schedule selezionare **My Threshold Schedule**.
4. Fare clic sul pulsante **Add** nella barra strumenti **Job Master** per aggiungere un altro Job.
5. Aggiungere un nuovo Job chiamato **Threshold External Event Job**.
6. Impostare questo Job per eseguire lo **script** chiamato ```ExerciseThreshold.cmd```, passando ```+1``` come parametro:
    * La Command Line dovrà essere: 
	```
	"C:\scripts\ExerciseThreshold.cmd" +1
	```
    * Il Job verrà eseguito sulla **macchina** ```SMATraining```
    * Utilizzare lo **User ID** ```SMATRAINING\SMAUSER```
    * Impostare al Job la **Frequenza** ```Example-Mon-Sun-O``` (Fare riferimento alla Unità per aiuto).
    * Non dimenticare di aggiungere la **Documentazione**.
7. Nel Menù **Administration**, fare doppio clic su **Thresholds**.
8. Nell'elenco a discesa **Select Threshold** selezionare ```TrainingThreshol```d.
9. Controllare il valore. In questo momento dovrebbe essere ```0```.
10. Chiudere la scheda **Thresholds**.
11. Aprire una delle viste Operation (**Matrix** o **List**).
12. Controllare se lo Schedule My Threshold Schedule è Completato.
    * Se non è completato, impostare a Cancel lo stato dei Jobs.
    * Attendere fino al completamento dello Schedule.
13. Fare clic con il tasto destro su **My Threshold Schedule > Maintenance > Add Jobs**.
14. Selezionare il Job **Threshold External Event Job** e fare clic su **Add Job**.
15. Selezionare l'opzione **Released** e fare clic su **Yes**.
16. Fare clic su **Close**.
17. Attendere fino a quando il termina in **Finished OK**.
18. Nel Menù **Administration**, fare doppio clic su **Thresholds**.
19. Nella barra degli strumenti **Select Threshold** selezionare ```TrainingThreshold```.
20. Controllare il valore. In questo momento dovrebbe essere ```1```. Cosa è successo ?
    * Il Job ha girato ed ha creato un file nella cartella ```MSGIN``` Il file ha inviato il l'evento ```$THRESHOLD:SET,TrainingThreshold,+1``` utilizzando l'account OpCon o```cadm``` e la sua password eventi (```opconxps```).
    * OpCon ha ricevuto e processato l'evento ed ha aggiornato il valore della Threshold: ```0 + 1 = 1```.
21. Chiudere la scheda Thresholds.
22. Tornare ad una delle viste **Operations**.
23. Fare clic con il tasto destro su **Threshold External Event Job> Maintenance> Edit Daily Job**.
24. Cambiare la **Line a di Comando** in: ```"C:\scripts\ExerciseThreshold.cmd" -1```
25. Fare clic sul pulsante **Save** sulla barra strumenti del **Daily Job** (_Non salvare il Job sul Master_).
26. Chiudere la scheda del Job Daily (**Threshold External Event Job**).
27. Tasto destro sul Job e **Restart**.
28. Attendere fino a quando il Job termina in F**inished OK**.
29. Nel menù **Administration**, Dfare doppio clic su **Thresholds**.
30. Selezionare ```TrainingThreshold``` nell'elenco a discesa **Select Threshold**.
31. Controllare il valore. In questo momento dovrebbe essere ```0```. Cosa è successo ?
    * Il Job ha girato ed ha creato un file nella cartella ```MSGIN``` Il file ha inviato il l'evento ```$THRESHOLD:SET,TrainingThreshold,-1``` utilizzando l'account OpCon ocadm e la sua password eventi (```opconxps```).
    * OpCon ha ricevuto e processato l'evento ed ha aggiornato il valore della Threshold: ```1 - 1 = 0```.
32. Close the **Thresholds** tab.

</details>