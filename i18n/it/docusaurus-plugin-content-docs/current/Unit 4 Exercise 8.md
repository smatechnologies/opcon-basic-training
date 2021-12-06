---
sidebar_label: 'Unità 4 Esercizio 8'
hide_title: 'false'
---

## Esercizio 8: Processi Giornalieri e Mensili

##### Obiettivo: 

Creare uno Schedule chiamato **Daily-SubSchedule**. Impostare lo Schedule come **SubSchedule**.

All'interno **Daily-SubSchedule**, creare 5 Windows Jobs che eseguono il programma ```genericp``` con una frequenza ```Monday-Friday``` (**Daily Job 1**, etc.). Creare una catena lineare di Job con dipendenze di tipo **Requires Dependency**.

Creare uno Schedule chiamato **Monthly-SubSchedule**. Impostare lo Schedule come **SubSchedule**.

All'interno **Monthly-SubSchedule**, creare 7 Windows Jobs che eseguono il programma ```genericp``` con una frequenza ```EOM-B``` (**Monthly Job 1**, etc.). Creare una catena lineare di Job con dipendenze di tipo **Requires Dependency**.

Creare uno Schedule chiamato **Main-Schedule**.

All'interno dello Schedule **Main-Schedule**, create a Job con nome Daily-Jobs di tipo Container Job per eseguire il subschedule **Daily-SubSchedule**. Applicare al Job la frequenza ```Monday-Friday```. Fornire al Job la definizione di una istanza (**Instance Definition**) con la proprietà ```RUNTIME=10```.

All'interno dello Schedule **Main-Schedule**, create a Job con nome **Monthly-Jobs** di tipo Container Job per eseguire il subschedule **Monthly-SubSchedule**. Applicare al Job la frequenza ```EOM-B```. Fornire al Job la definizione di una istanza (**Instance Definition**) con la proprietà ```RUNTIME=20```.

Impostare una dipendenza di tipo **Excludes** tra i **Daily Jobs** ed i **Monthly Jobs** Container Jobs in modo che quando il **Monthly Job** Container viene eseguito, il **Daily Job** Container sia **Escluso**.

Mettere a piano (**Build**) il **Main-Schedule** in stato **On Hold** per Oggi. Poi mettere a piano (**Build**) lo Schedule in stato **Released** per **l'ultimo giorno lavorativo del mese**.

Nella Vista Matrix, rilasciare lo Schedule for Oggi per verificare la corretta esecuzione.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

**Creare il primo SubSchedule (Daily)**

1. Nel menù **Administration** fare doppio clic su **Schedule Master**.
2. Fare clic sul pulsante **Add** nella barra degli strumenti di **Schedule Master**.
3. Nella casella di testo **Name** digitare **Daily-SubSchedule**.
4. Nella casella di testo **Documentation** digitare **"This is the Daily SubSchedule"**.
5. Nel riquadro **Start Time** notare il valore di default ```00:00``` (mezzanotte).
6. Mantenere selezionati **da Lunedì a Friday i Workdays per Week** per quando deve girare lo schedule.
7. Nel riquadro **Schedule Properties** selezionare l'impostazione **SubSchedule**.
8. Fare clic sul pulsante **Save** della barra strumenti della scheda Schedule Master.

**Creare il secondo SubSchedule (Montly)**

9. Nel menù **Administration** fare doppio clic su **Schedule Master** se non aperto.
10. Fare clic sul pulsante **Add** nella barra degli strumenti di **Schedule Master**.
11. Nella casella di testo **Name** digitare **Montly-SubSchedule**.
12. Nella casella di testo **Documentation** digitare **"This is the Monthly SubSchedule"**.
13. Nel riquadro **Start Time** notare il valore di default ```00:00``` (mezzanotte).
14. Mantenere selezionati **da Lunedì a Friday i Workdays per Week** per quando deve girare lo schedule.
15. Nel riquadro **Schedule Properties** selezionare l'impostazione **SubSchedule**.
16. Fare clic sul pulsante **Save** della barra strumenti della scheda **Schedule Master**.
17. Chiudere la scheda **Schedule Master**.

**Aggiungere i Jobs all'interno del Daily SubSchedulee**

18. Nel menù **Administration** fare doppio clic su **Job Master**.
19. Selezionare lo Schedule **Daily-SubSchedule**.
20. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
21. Nella casella di testo **Name** inserire **Daily Job 1**.
22. Nell'elenco a discesa **Job Type** selezionare ```Windows```.
23. Nell'elenco a discesa **Primary Machine** selezionare ```SMATraining```.
24. Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```.
25. Nella **Command Line**, digitare **Ctrl+F** e selezionare una command line come : ```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```
26. Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
27. Fare clic sulla scheda **Frequency**.
28. All'interno la lista **Frequency** fare clic sul pulsante **Add**.
29. Scegliere l'opzione **Use existing Frequency**.
30. Nell'elenco a discesa **Frequency** selezionare ```Mon-Fri-N```.
31. Fare clic su **Next**.
32. Fare clic sul pulsante **Finish**.
33. Aggiungere **Documentazione** al Job.
34. Nell'elenco a discesa **Job Master** fare clic sul pulsante **Copy** o premere **Ctrl+Insert**.
35. Nominare il Job **Daily Job 2**.
36. Fare clic su **OK**.
37. Ripetere i passi 34 to 36 per creare i Jobs **Daily Job 3**, **Daily Job 4**, and **Daily Job 5**.
38. Chiudere **Job Master**.
39. Utilizzare il **Workflow Designer** per creare le **Job Dependencies** desiderate e poi chiudere **Workflow Designer**.

**Aggiungere i Jobs all'interno del Monthly SubSchedule**

40. Nel menù **Administration** fare doppio clic su **Job Master**.
41. Selezionare lo Schedule **Daily-SubSchedule**.
42. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
43. Nella casella di testo **Name** inserire **Monthly Job 1**.
44. Nell'elenco a discesa **Job Type** selezionare ```Windows```.
45. Nell'elenco a discesa **Primary Machine** selezionare ```SMATraining```.
46. Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```.
47. Nella **Command Line**, digitare **Ctrl+F** e selezionare una command line come : ```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```
48. Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
49. Fare clic sulla scheda **Frequency**.
50. All'interno la lista **Frequency** fare clic sul pulsante **Add**.
51. Creare una nuova **Frequency**. Il nome sarà ```End-of-Month-B```. Click **Next**.
52. Nella procedura guidata **Frequency Definition Wizard**, selezionare **End of Period** nel riquadro **When to Schedule** assicurarsi che Month sia selezionato nel riquadro Periods e **Before Date** sia selzionato nel frame **A/O/B/N**.
53. Fare click sul pulsante **Finish** button.
54. Nell'elenco a discesa **Job Master** fare clic sul pulsante **Copy** o premere **Ctrl+Insert**.
55. Nominare il Job **Monthly Job 2**.
56. Fare clic su **OK**.
57. Ripetere i passi 54 to 56 per creare i Jobs **Monthly Job 3**, **Monthly Job 4**, **Monthly Job 5**, **Monthly Job 6**, and **Monthly Job 7**.
58. Chiudere la scheda **Job Master** tab.
59. Utilizzare il **Workflow Designer** per creare le Job Dependencies desiderate e poi chiudere **Workflow Designer**.
60. Chiudere > **Workflow Designer**.

**Creare il Primary Schedule**

61. Nel menù **Administration** fare clic su **Schedule Master**.
62. Fare clic sul pulsante **Add** nella barra degli strumenti di **Schedule Master**.
63. Nella casella di testo **Name** digitare **Main-Schedule**.
64. Nella casella di testo **Documentation** inserire **"This is the Main Schedule"**.
65. Nel riquadro **Start Time** notare il valore di default ```00:00``` (mezzanotte).
66. Mantieni le impostazioni predefinite selezionate per i **Workdays per Week** per l'esecuzione dello Schedule.
67. Fare clic sul pulsante **Save** nella barra degli strumenti di **Schedule Maste**r.
68. Fare clic sul pulsante **Add**.
69. Salvare lo Schedule **Repeating-SubSchedule** e chiudere la scheda **Schedule Master**.
70. Nel Menù **Administration** fare doppio clic su **Job Master**. 

**Aggiungere il Daily SubSchedule al Primary Schedule**

71. Selezionare **Main-Schedule** nell'elenco a discesa Schedule.
72. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
73. Nella casella di testo **Name** digitare **Daily-Jobs**.
74. Nell'elenco a discesa **Job Type** selezionare **Container**.
75. Nell'elenco a discesa **Schedule to run as SubSchedule** selezionare **Daily-SubSchedule**.
76. Fare clic sul pulsante Save nella barra strumenti **Job Master**.
77. Fare clic sulla scheda **Frequency**.
78. All'interno la lista **Frequency** fare clic sul pulsante **Add**.
79. Scegliere l'opzione **Use existing Frequency**.
80. Nell'elenco a discesa **Frequency** selezionare ```Mon-Fri-N```.
81. Fare clic su **Next** e poi **Finish**.
82. Fare click sulla scheda **Instance Definition** tab.
83. Fare click in **Define Property Values** box.
84. Inserire: ```RUNTIME=10```
85. Fare click su **Add** nella metà-destra dello schermo.
86. Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
87. Selezionare la scheda **Documentation**.
88. Nella casella di testo **Documentation** inserire **This is a container Job that has the Daily Jobs**.
89. Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
90. Sempre nel **Job Master**, assicurarsi di avere selezionato il **Main-Schedule**.

**Aggiungere il Monthly SubSchedule al Primary Schedule**

91. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
92. Nella casella di testo **Name** digitare **Monthly-Jobs**.
93. Nell'elenco a discesa **Job Type** selezionare **Container**.
94. Nell'elenco a discesa **Schedule to run as SubSchedule** selezionare **Monthly-SubSchedule**.
95. Fare clic sul pulsante **Save** nella barra strumenti **Job Master** o premere **Ctrl+S**.
96. Fare clic sulla scheda **Frequency**.
97. All'interno la lista **Frequency** fare clic sul pulsante **Add**.
98. Scegliere l'opzione **Use existing Frequency**.
99. Nell'elenco a discesa **Frequency** selezionare ```End-of-Month-B```.
100. Fare clic su **Next** e.
101. Fare clic sul pulsante **Forecast** e notare che nei mesi indicati sopra, il lavoro sarà eseguito il venerdì prima della fine del mese se cade in un fine settimana.
102. Chiudere la schermata **Forecast** e fare clic su **Finish** sulla schermata del **Frequency Definition Wizard**.
103. Fare click sulla scheda **Instance Definition** tab.
104. Fare click in **Define Property Values** box.
105. Inserire: ```RUNTIME=20```
106. Fare click su **Add** nella metà-destra del riquadro **Define Property Values**.
107. Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
108. Chiudere la scheda **Job Master**.

**Impostare le Job Dependencies tra i Container Jobs**

109. Nel menù **Administration** fare doppio clic su **Workflow Designer**.
110. Selezionare **Main-Schedule** nell'elenco a discesa **Select Schedule**.
111. Fare clic sullo strumento **Add Dependency**.
112. Fare clic nel riquadro **Daily-Jobs** e poi fare clic su **Monthly-Jobs**.
113. Selezionare **Excludes** nel tipo di **Dipendenza**.
114. Fare clic su **OK**.
115. Chiudere la scheda **Workflow Designer**.

<a href="imgbasic/433.png" target="_blank"><img src="imgbasic/433.png" width="250"></img></a>

**Mettere a piano lo Schedule**

116. Nel Menù **Operation** fare doppio clic su **Schedule Build**.
* Notare che **entrambi i SubSchedules NON SONO mostrati nella lista Schedule Selection**
117. Fare clic su **Main-Schedule** e fare clic sul pulsante **Build**.
118. Nella schermata delle proprietà della **Build**, mantenere selezionato **On Hold** e fare clic su **OK**.
* Questo metterà a piano lo Schedule in **On Hold** per Oggi.
119. Fare ancora clic su **Main-Schedule**.
120. Per la **Start Date**, selezionare **l'ultimo giorno lavorativo del mese**.
* La data di fine (**Stop date**) dovrebbe essere la stessa della **Start Date**.
121. Fare clic sul pulsante **Build**.
122. Nella schermata delle proprietà della **Build**, mantenere selezionato **On Hold** e fare clic su **OK**.
* Questo metterà a piano lo Schedule in **Released per la fine del mese**.
123. Chiudere la schermata di **Build**.
124. Andare nelle viste **List** o **Matrix** nella sezione **Operation** o utilizzare il **Solution Manager** per controllare il risultato.
125. **Rilasciare lo Schedule** per Oggi (Nel caso si voglia vedere il Job in esecuzione).    

</details>