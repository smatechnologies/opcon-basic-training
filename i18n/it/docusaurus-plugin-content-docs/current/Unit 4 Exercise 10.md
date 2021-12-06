---
sidebar_label: 'Unità 4 Esercizio 10'
hide_title: 'false'
---

## Esercizio 10: File Movement

##### Obiettivo:

In Esplora risorse, crea due cartelle denominate ```C:\Temp``` and ```C:\RMExample```.

In Blocco note, crea un file chiamato ```C:\RMExample\File-to-be-copied.txt```

Creare uno Schedule chiamato **My Windows Sub-Types Schedule**.

All'interno dello Schedule **My Windows Sub-Types**, creare un Job Windows chiamato **File Copy** con un **Job Sub-Type** di tipo ```Command: File Copy``` con la frequenza Monday-Sunday. Il Job deve essere messo in stato ```On Hold```.

Il **Source file**: ```C:\RMExample\File-to-be-copied.txt``` Il **Destination file**: ```C:\RMExample\File-to-be-renamed.txt```

Poi creare un Windows Job chiamato **File Rename** con un **Job Sub-Type** di tipo ```Command: File Rename``` con la Frequenza ```Monday-Sunday```. Il Job deve essere messo in stato ```On Hold```.

**Path e Current File Name**: ```C:\RMExample\File-to-be-renamed.txt``` **New File Name**: ```File-to-be-moved.txt```

Poi creare un Windows Job chiamato **File Move** con un **Job Sub-Type** di tipo ```Command: File Move``` con la Frequenza ```Monday-Sunday```. Il Job deve essere messo in stato ```On Hold```.

The **Source file**: ```C:\RMExample\File-to-be-moved.txt``` The **Destination file**: ```C:\Temp\File-to-be-deleted.txt```

Poi creare un Windows Job chiamato **File Delete** con un **Job Sub-Type** di tipo ```Command: File Delete``` con la Frequienza ```Monday-Sunday```.Il Job deve essere messo in stato ```On Hold```.

**File To Delete**: ```C:\Temp\File-to-be-deleted.txt```

Creare una catena con le **Dependency**:

**File Copy > File Rename > File Move > File Delete**

Mettere a piano per la data Odierna. Rilasciare manualmente ogni job individualmente, controllando ogni volta le cartelle create per verificare il successo del Job.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E10.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

**Creare un Nuovo File e un Nuovo Schedule**

1. In **Windows Explorer** creare le cartelle ```C:\Temp``` e ```C:\RMExample```.
2. Aprire il **Notepad** e creare un nuovo file.
3. Digitare qualche carattere e salvarlo in ```C:\RMExample\File-to-be-copied.txt```.
4. Chiudere il **Notepad**.
5. Nel menù **Administration** fare doppio clic su **Schedule Master**.
6. Fare clic sul pulsante **Add** nella barra degli strumenti di **Schedule Master**.
7. Nella casella di testo **Name** inserire **My Windows Sub-Types Schedule**.
8. Nella casella di testo **Documentation** digitare **"This is a training Schedule for Windows Sub-Type Jobs"**.
9. Mantenere selszionati i giorni **Monday through Friday** scome **Workdays per Week** per l'esecuzione dello Schedule.
10. Nel riquadro **Schedule Properties > Build frame**, mantener l'**Auto Build** non selezionato.
11. Fare clic sul pulsante **Save** nella barra degli strumenti di **Schedule Master**.
12. Chiudere la scheda **Schedule Master** tab.

**Aggiungere i Jobs al nuovoi Schedule**

13. Nel menù **Administration** fare doppio clic su **Job Master**.
14. Nell'elenco a discesa **Schedule** selezionare **My Windows Sub-Types Schedule**.
15. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
16. Nella casella di testo **Name** inserire ```File Copy```.
17. Nell'elenco a discesa **Job Type** selezionare ```Windows```.
18. Nell'elenco a discesa **Job Sub-Type** selezionare ```Command: File Copy```.
19. Nell'elenco a discesa **Primary Machine** selezionare la macchina ```SMATraining```.
20. Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```.
21. Nel campoSource, digitare ```C:\RMExample\File-to-be-copied.txt```.
22. Nel campo Destination digitare ```C:\RMExample\File-to-be-renamed.txt```.
23. Fare clic sul pulsante **Save** nella barra degli strumenti di **Job Master**.
24. Fare clic sulla Scheda **Frequency**.
25. Nel riquadro **Frequency list** fare clic sul pulsante **Add**.
26. Nel **Frequency Definition Wizard**, scegliere **Use existing Frequency** e selezionare ```Mon-Sun-O``` Nell'elenco a discesa **Frequency** Poi premere **Next**.
27. Fare clic su **Finish**.
28. Nel riquadro del **Job Build Status** fare clic sulla opzione ```On Hold```.
29. Fare clic sul pulsante **Save** nella barra degli strumenti di **Job Master**.
30. Fare clic sulla scheda **Documentation** ed aggiungere la documentazione.
31. Non chiudere la scheda **Job Master** proseguire con il prossimo step.
32. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
33. Nella casella di testo **Name** inserire **File Rename**.
34. Nell'elenco a discesa **Job Type** selezionare ```Windows```.
35. Nell'elenco a discesa **Job Sub-Type** selezionare ```Command: File Rename```.
36. Nell'elenco a discesa **Primary Machine** selezionare la macchina ```SMATraining```.
37. Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```.
38. Nel campo **Path and Current File Name**, digitare ```C:\RMExample\File-to-be-renamed.txt```.
39. Nel campo **New File Name** digitare ```File-to-be-moved.txt```.
:::note Nota
_Si sta rinominando il file! Quindi non è necessario specificare l'intero percorso!_
:::
40. Fare clic sul pulsante **Save** nella barra degli strumenti di **Job Master**.
41. Fare clic sulla Scheda **Frequency**.
42. Nel riquadro **Frequency list** fare clic sul pulsante **Add**.
43. Nel **Frequency Definition Wizard**, scegliere **Use existing Frequency** e selezionare Mon-Sun-O Nell'elenco a discesa **Frequency** Poi premere **Next**.
44. Fare clic su **Finish**.
45. Nel riquadro del **Job Build Status** fare clic sulla opzione ```On Hold```.
46. Fare clic sul pulsante **Save** nella barra degli strumenti di **Job Master**.
47. Fare clic sulla scheda **Documentation** ed aggiungere la documentazione.
48. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
49. Nella casella di testo **Name** inserire **File Move**.
50. Nell'elenco a discesa **Job Type** selezionare **Windows**.
51. Nell'elenco a discesa **Job Sub-Type** selezionare ```Command: File Move```.
52. Nell'elenco a discesa **Primary Machine** selezionare la macchina ```SMATraining```.
53. Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```.
54. Nel campo **Source**, digitare ```C:\RMExample\File-to-be-moved.txt```.
55. Nel campo **Destination** digitare ```C:\RMExample\File-to-be-deleted.txt```.
56. Fare clic sul pulsante **Save** nella barra degli strumenti di **Job Master**.
57. Fare clic sulla Scheda **Frequency**.
58. Nel riquadro **Frequency list** fare clic sul pulsante **Add**.
59. Nel **Frequency Definition Wizard**, scegliere **Use existing Frequency** e selezionare ```Mon-Sun-O``` Nell'elenco a discesa **Frequency** Poi premere **Next**.
60. Fare clic su **Finish**.
61. Nel riquadro del **Job Build Status** fare clic sulla opzione ```On Hold```.
62. Fare clic sul pulsante **Save** nella barra degli strumenti di **Job Master**.
63. Fare clic sulla scheda **Documentation** ed aggiungere la documentazione.
64. Fare clic sul pulsante **Add** nella barra strumenti **Job Master**.
65. Nella casella di testo **Name** inserire **File Delete**.
66. Nell'elenco a discesa **Job Type** selezionare ```Windows```.
67. Nell'elenco a discesa **Job Sub-Type** selezionare ```Command: File Delete```.
68. Nell'elenco a discesa **Primary Machine** selezionare la macchina ```SMATraining```.
69. Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```.
70. Nel campo File To Delete digitare ```C:\RMExample\File-to-be-deleted.txt```.
71. Fare clic sul pulsante **Save** nella barra degli strumenti di **Job Master**.
72. Fare clic sulla Scheda **Frequency**.
73. Nel riquadro **Frequency list** fare clic sul pulsante **Add**.
74. Nel **Frequency Definition Wizard**, scegliere **Use existing Frequency** e selezionare ```Mon-Sun-O``` Nell'elenco a discesa **Frequency** Poi premere **Next**.
75. Fare clic su **Finish**.
76. Nel riquadro del **Job Build Status** fare clic sulla opzione ```On Hold```.
77. Fare clic sul pulsante **Save** nella barra degli strumenti di **Job Master**.
78. Fare clic sulla scheda **Documentation** ed aggiungere la documentazione.
79. Chiudere la scheda **Job Master**.
80. Usare **Workflow Designer** per creare le **Job Dependencies**.
81. Lo **Schedule** deve essere simile a questo :

<a href="imgbasic/438.png" target="_blank"><img src="imgbasic/438.png" width="250"></img></a>

**Testing the Configuration**

82. Mettere a piano manualmente lo schedule **My Windows Sub-Types Schedule** in uno stato **released**.
83. Controllare che tutti i job siano ```On Hold```.
84. Aprire il percorso ```C:\RMExample``` utilizzando **Windows Explorer** e controllare che il ```File-to-be-copied.txt``` sia presente.
85. Ritornare su **Enterprise Manager** e Rilasciare il Job **File Copy Job**.
86. Ritornare su **Windows Explorer** e controllare che il file ```File-to-be-renamed``` sia stato creato.
87. Ritornare su **Enterprise Manager** e Rilasciare il Job **File Rename**.
88. Ritornare su **Windows Explorer** e controllare che il file ```File-to-be-renamed``` sia stato rinomiato in ```File-to-be-moved```.
89. Ritornare su **Enterprise Manager** e Rilasciare il Job **File Move**.
90. Ritornare su **Windows Explorer** e controllare che il file ```File-to-be-moved``` sia stato spostato nella cartella ```C:\Temp``` e rinominato in ```File-to-be-deleted```.
91. Ritornare su **Enterprise Manager** e Rilasciare il Job **File Delete**.
92. Ritornare su **Windows Explorer** e controllare che il file ```File-to-be-deleted``` sia stato cancellato.

</details>