---
sidebar_label: 'Unità 4 Esercizio 6'
hide_title: 'false'
---

## Esercizio 6: SubSchedules - Esecuzioni Multiple

##### Obiettivo:

Creare un Schedule chiamato **Repeating-SubSchedule** con una definizione di istanza (**Instance Definition**) con ```RUNTIME=10```. Impostare lo Schedule come **SubSchedule**.

All'interno dello Schedule **Repeating-SubSchedule**, creare 5 Windows Daily Jobs con un naming pattern **Daily Job 1**. I Jobs dovrebbero essere eseguiti con una frequenza dal lunedì al venerdì ed eseguire il programma ```genericp```. Creare una catena di dipendenze lineari tra i 5 Jobs.

Creare quindi uno Schedule **Repeating-Schedule-Primary**.

All'interno dello Schedule **Repeating-Schedule-Primary** creare 4 Job chiamati **0700 Job**, **1000 Job**, **1400 Job**, e **1900 Job**. Ogni lavoro dovrebbe essere eseguito su una frequenza dal lunedì al venerdì ed eseguire lo Schedule **Repeating-SubSchedule** come **Container Job**.

Ogni Lavoro dovrebbe avere uno **Start Offset** conforme al nome del Job.

Mettere a piano (**Build**) lo Schedule **Repeating-Schedule-Primary** in stato **On Hold**. Visualizza lo Schedule in Matrix View. Rilasciare lo Schedule e lasciare che i Job vengano eseguiti per verificare i risultati.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E6.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

**Creare SubSchedule**  

1. Nel menù **Administration** fare clic su **Schedule Master**.
2. Fare clic sul pulsante **Add** nella barra degli strumenti di **Schedule Master**.
3. Nella casella di testo **Name** digitare **Repeating-SubSchedule**.
4. Nella casella di testo **Documentation** inserire **"This is the Daily SubSchedule"**.
5. Nel riquadro **Start Time** notare il valore di default ```00:00``` (mezzanotte).
6. Mantieni le impostazioni predefinite selezionate per i **Workdays per Week** per l'esecuzione dello Schedule.
7. Nel riquadro **Schedule Properties** selezionare l'opzione **SubSchedule**.
8. Fare clic sul pulsante **Save** nella barra degli strumenti di **Schedule Master**.
9. Fare clic sulla scheda **Instance Definition** e inserire il valore della Instanza nel campo **Define Property Values**: ```RUNTIME=10```
10. Fare clic sul pulsante **Add**.
11. Salvare lo Schedule **Repeating-SubSchedule** e chiudere la scheda **Schedule Master**.

**Aggiungere i Job al SubSchedule**

12. Nel menù **Administration** fare doppio clic su **Job Master**.
13. Selezionare lo Schedule **Repeating-SubSchedule**.
14. Fare clic sul pulsante **Add** nella barra strumenti **Job Master** per aggiungere un altro Job.
15. Nella casella di testo **Name** inserire **Daily Job 1**.
16. Nell'elenco a discesa **Job Type** selezionare ```Windows```.
17. Nell'elenco a discesa **Primary Machine** selezionare ```SMATraining```.
18. Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```.
19. Nella **Command Line**, digitare **Ctrl+F** e selezionare una command line come : ```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```
20. Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
21. Fare clic sulla scheda **Frequency**.
22. All'interno la lista **Frequency** fare clic sul pulsante **Add**.
23. Scegliere l'opzione **Use existing Frequency**.
24. Nell'elenco a discesa **Frequency** selezionare ```Mon-Fri-N```.
25. Fare clic su **Next**.
26. Fare clic sul pulsante **Finish**.
27. Aggiungere **Documentazione** al Job
28. Nell'elenco a discesa **Job Master** assicurarsi di avere selezionato lo Schedule **Repeating-SubSchedule** e fare clic sul pulsante **Copy** o premere **Ctrl+Insert**.
29. Nominare il Job **Daily Job 2**.
30. Fare clic su **OK**.
31. Cambiare la **Documentazione** se necessario.
32. Ripetere i passi dal 27 al 30 per creare i job **Daily Job 3**, **Daily Job 4**, e **Daily Job 5**.
33. Chiudere la scheda **Job Master** e utilizzare il **Workflow Designer** per creare le **Dipendenze**.
34. Chiudere la scheda **Workflow Designer** quando terminato.

**Creare lo Schedule Principale**

35. Nel menù **Administration** fare doppio clic su **Schedule Master**.
36. Fare clic sul pulsante **Add** nella barra strumenti **Schedule Master** per aggiungere un altro Job.
37. Nella casella di testo **Name** inserire **Repeating-Schedule-Primary**.
38. Nella casella di testo **Documentation** inserire **This is the Primary Schedule for the Repeating SubSchedule example**.
39. Nel riquadro **Start Time** notare il valore di default ```00:00``` (mezzanotte).
40. Mantieni le impostazioni predefinite selezionate per i **Workdays per Week** per l'esecuzione dello Schedule.
41. Fare clic sul pulsante **Save** nella barra degli strumenti di **Schedule Master**.
42. Chiudere la schdea **Schedule Master**.

**Aggiungere il SubSchedule come Container Job nel Primary Schedule**

43. Nel menù **Administration** fare doppio clic su **Job Master**.
44. Selezionare **Repeating-Schedule-Primary** nell'elenco a discesa **Schedule**.
45. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
46. Nella casella di testo **Name** digitare **0700 Job**.
47. Nell'elenco a discesa **Job Type** selezionare **Container**.
48. Nell'elenco a discesa **Schedule to run as SubSchedule** selezionare **Repeating-SubSchedule**.
49. Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
50. Fare clic sulla scheda **Frequency**.
51. All'interno la lista **Frequency** fare clic sul pulsante **Add**.
52. Scegliere l'opzione **Use existing Frequency**.
53. Nell'elenco a discesa **Frequency** selezionare ```Mon-Fri-N```.
54. Fare clic su Next e poi **Finish**.
55. Nel riquadro **Start Offset** inserire ```07:00```.
56. Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
57. Selezionare la scheda **Documentation**.
58. Nella casella di testo **Documentation** inserire **This is a container Job that has the Daily Jobs**.
59. Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
60. Sempre nella barra strumenti di **Job Master** fare clic sul pulsante **Copy**.
61. Nominare il Job **1000 Job**.
62. Fare clic sul pulsante **OK**.
63. Fare clic sulla scheda **Frequency**.
64. Aggiornare il riquadro **Start Offset** con ```10:00``` e **Salvare** il Job.
65. Ripetere i passo da 59 a 63 per creare i Job **1400 Job** e **1900 Job** con esecuzione alle ```14``` e alle ```19```. PEr fare questo sarà necessario agire sullo **Start Offset** di questi Jobs. Cambiare la documentazione se necessario.
66. Chiudere tutte le schede.

**Messa a piano dello Schedule**

67. Nel Menù **Operation** fare doppio clic su **Schedule Build**.
68. Il SubSchedule è visibile ? Perchè ?
69. Fare clic su **Repeating-Schedule-Primary** e fare clic sul pulsante **Build**.
70. Nella schermata delle **Build Properties** mantenere selezionato **On Hold** e fare clic su **OK**. Questo metterà a piano lo Schedule per la sola giornata di oggi.
71. Chiudere la schermata di build degli **Schedule**.
72. nel Menù **Operations**, aprire la vista **List** o **Matrix** o utilizzare il **Solution Manager** per controllare i risultati.
73. **Rilasciare lo Schedule** e lascire che i Job vengano eseguiti.

</details>