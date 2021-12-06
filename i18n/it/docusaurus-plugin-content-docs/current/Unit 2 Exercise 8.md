---
sidebar_label: 'Unità 2 Esercizio 8'
hide_title: 'false'
---

## Esercizio 8: Frequenze - Tutte le settimane -- Alla Occorrenza -- Il Giorno

##### Obiettivo: 

All'interno dello Schedule **Frequency Practice Schedule**, creare ```3``` nuovi Job nulli:

"**Daily Frequency Practice**", "**On Occurrence Frequency Practice**", "**On Day Frequency Practice**"

Nel Job **Daily Frequency Practice** creare una nuova Frequenza chiamata ```Tue+Thu-B```. Questa Frequenza dovrebbe girare Mercoledì e Giovedì tutte le settimane o il giorno precedente in caso di festività.

Nel Job **On Occurrence Frequency Practice** creare una nuova Frequenza chiamata ```4th-Thu-B```. Questa Frequenza dovrebbe girare il quarto Giovedì del mese, o il giorno precedente in caso di festività.

Nel Job **On Day Frequency Practice** creare una nuova Frequenza chiamata ```1st-day-of-month-wk```. Questa Frequenza dovrebbe girare il primo giorno lavorativo del mese


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Aprire Job Master.
2. Selezionare lo Schedule **Frequency Practice** Schedule from the **Schedule** drop-down menu.
3. Click the **Add** button to add a Null Job.
4. Enter **Daily Frequency Practice** in the **Name** text field.
5. Click the **Save** button.
6. Repeat Steps 3-5 creating two more Null Jobs:
    * **On Occurrence Frequency Practice**
    * **On Day Frequency Practice**
7. Frequenza: **All Weeks**
* Fare clic sul pulsante.
* Selezionare lo Schedule **Daily Frequency Practice** dalla lista a scorrimento Schedule.
* Fare clic sulla scheda **Frequency**.
* Fare clic sul pulsante **Add** sotto la lista delle Frequenze .
* Selezionare l'opzione **Create New Frequency**.
* Digitare ```Tue+Thu-B``` nel campo **Frequency Name**.
* Fare clic sul pulsante **Next**.
* Selezionare l'opzione **All Weeks**.
* Selezionare **Martedì (Tuesday)** e **Giovedì (Thursday)** nella sezione **Days of the Week**.
* Fare clic sul pulsante previsione (**Forecast**).
* Spostare il **Forecast** e la schermata di definizione della **Frequenza** in modo da poter vedere entrambi.
* La schermata **Forecast** dovrebbe mostrare tutti le date di Martedì e Giovedì in verde, a meno che non sia un giorno festivo. Se c'è un martedì o un giovedì festivo, il giorno precedente dovrebbe essere verde.
* Cambiare le impostazione **A/O/B/N** da **Before Date** ad **After Date** e notate il cambiamento nella vostra schermata **Forecast**.
* Cambiare poi le impostazioni **A/O/B/N** scegliendo **On Date**, e poi **Not Schedule** per vedere cosa fanno queste impostazioni.
* Finally change the **A/O/B/N** back to **Before Date**.
* Fare clic sul pulsante **Finish**.
8. Frequenza: On Occurrence
* Selezionare il Job **On Occurrence Frequency Practice** dalla lista a scorrimento **Job Name**.
* Nella schermata **Frequency**, Fare clic sul pulsante **Add** al di sotto della **Frequency List**.
* Selezionare l'opzione **Create New Frequency**.
* Digitare ```4th-Thu-B``` nal campo di testo **Frequency Name**.
* Fare clic sul pulsante **Next**.
* Selezionare l'opzione **On Occurrence**.
* Selezionare **Thursday** nel parametro **Days of the Week**.
* Selezionare l'opzione **4th** del parametro **On Occurrence** nella parte inferiore destra della schermata.
* Lasciare l'impostazione **A/O/B/N** su **Before Date**.
* Fare clic sul pulsante** Forecast**.
* Spostare il **Forecast** e la schermata di definizione della **Frequenza** in modo da poter vedere entrambi.
* Nella schermata **Forecast** il Giovedì 4 (4th Thursday) di ciascun mese dovrebbe essere verde eccetto che per il giorno del Ringraziamento (Thanksgiving). il giorno prima del Ringraziamento dovrebbe essere verde.
* Fare clic sul pulsante **Finish**.
9. Frequenza: **On Day**
* Selezionare il Job **On Day Frequency Practice** dalla lista a discesa **Job Name**.
* Nella schermata **Frequency**, Fare clic sul pulsante **Add** al di sotto della **Frequency List**.
* Selezionare l'opzione **Create New Frequency**.
* Digitare ```1st-day-of-month-wk``` nal campo di testo **Frequency Name**.
* Fare clic sul pulsante **Next**.
* Selezionare l'opzione **On Day**.
* Lasciare **Month Days** impostato a ```1``` Giorno.
* Selezionare l'opzione **1st Working Day** per il parametro **Day Type** al di sotto del **Month Days**.
* Fare clic sul pulsante **Forecast**.
* Spostare il **Forecast** e la schermata di definizione della **Frequenza** in modo da poter vedere entrambi.
* Nella schermata **Forecast**, il **1st primo giorno lavorativo del mese** dovrebbe essere verde eccetto Capodanno. Nota come le vacanze e i fine settimana influenzano questa frequenza.
* Fare clic sul pulsante **Finish**.

</details>