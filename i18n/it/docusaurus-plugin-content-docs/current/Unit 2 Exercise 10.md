---
sidebar_label: 'Unità 2 Esercizio 10'
hide_title: 'false'
---

## Esercizio 10: Frequenze - Calendario ad Intervalli e Piano Annuale

##### Obiettivo:

All'interno dello Schedule **Frequency Practice Schedule**, creare 3 nuovi job nulli :

* **On Interval Frequency Practice** 
* **Annual Frequency Practice** 
* **Annual Plan Frequency with Offsets**

Nel Job **On Interval Frequency Practice**, creare una nuova Frequenza chiamata ```Every-15thand30th-B```. Questa Frequenza dovrà essere eseguita negli intervalli del ```15``` e del ```30``` di ogni mese.

Nel Calendario **Calendar Master**, aggiungere un nuovo Calendario chiamato ```Company Holiday Calendar``` e selezionare diverse date di quest'anno. Fornire la documentazione appropriata.

Nel Job **Annual Frequency Practice**, creare una nuova Frequenza chiamata ```CompanyHoliday```. Pianifica la Frequenza utilizzando un Piano Annuale selezionando il Calendario Company Holiday Calendar.

Nel Job **Annual Plan Frequency with Offsets**, creare una nuova Frequenza chiamata ```CompanyHoliday+1```. Questa Frequenza dovrebbe utilizzare il Calendario **Company Holiday Calendar** con un offser di ```+1``` giorno.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E10.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Aprire **Job Master**.
2. Selezionare lo Schedule **Frequency Practice** dall'elenco a discesa **Schedule**.
3. Fare clic sul pulsante **Add**.
4. Inserire **On Interval Frequency Practice** nella casella di testo **Name**.
5. Fare clic sul pulsante **Save**.
6. Ripetere i passi dal 3 al 5 per creare i seguenti Null Jobs:
  *	**Annual Frequency Practice**.
  *	**Annual Plan Frequency with Offsets**.
7. Frequenza: On Interval
    * Selezionare **On Interval Frequency Practice** dall'elenco a discesa **Job Name**.
    * Nella schermata delle Frequenze fare clic sul pulsante **Add** al di sotto della lista delle **Frequenze**.
    * Selezionare l'opzione **Crea una nuova Frequenza (Create New Frequency)**.
    * Digitare ```Every-15thand30th-B``` nel campo di testo **Frequency Name**.
    * Fare clic su **Next**.
    * Selezione l'opzione **On Interval**.
    * Selezionare il ```15``` e il ```30```  nel parametro **On Intervals**.
    * Lasciare l'impostazione **A/O/B/N** su **On Date**.
    * Fare clic sul pulsante **Forecast**.
    * Spostare la schermata **Frequency Definition Wizard** in modo da vedere entrambe le schermate.
    * Nella schermata **Forecast** dovrebbe comparire in verde unicamente la data del ```3 Gennaio```.
    * Fare clic sul pulsante **Finish**.
8. Frequency: **Annual Plan**
    * Fare clic su **Calendars** dal **Pannello di Navigazione**.
    * Fare clic sul pulsante **Save**.
    * Digitare **Company Holiday Calendar** nel campo **Name**.
    * Inserire una **Documentazione** tipo: **Questo calendario sarà utilizzato con una Frequenza di tipo Piano Annuale**.
    * Fare clic sul pulsante **Save**.
    * Fare clic su svariate date del **Calendario**.
        * _Nota: Le data sono sakvate automaticamente_.
    * Fare clic sulla **freccia alla destra** del **Mese** in alto a destra del Calendario per andare al mese successivo.
    * Fare clic sulla **freccia in basso** dell' **Anno** in alto a destra del Calendario per andare all'anno successivo.
    * Chiudere la scheda **Calendari**.
    * Aprire **Job Master**.
    * Selezionare lo Schedule **Frequency Practice Schedule** dal Menù a tendina **Schedule**.
    * Fare clic sul pulsante **Add**.
    * Inserire **Annual Plan Frequency** nella casella di testo **Name**.
    * Fare clic sul pulsante **Save**.
    * Fare clic sulla scheda  **Frequenza**.
    * Fare click sul pulsante **Add** sotto la lista delle **Frequenze**.
    * Scegliere l'ozione **Create new Frequency**.
    * Digitare ```CompanyHoliday``` nel campo **Frequency Name**.
    * Fare click su **Next**.
    * Nella sezione **When to Schedule**, scegliere l'opzione **Annual Plan**.
    * Nell'elenco a discesa **Calendar**, scegliere il Calendario **Company Holiday Calendar**.
    * Fare clic su **Forecast** per visualizzare la **Frequenza**.
        * Le date dovrebbero corrispondere a quelle inserite nel Calendario.
    * Fare clic sul pulsante **Ok**.
    * Fare clic sul pulsante **Finish**.
9. Frequenza: **Piano Annuale con Offset**
    * Selezionare **Annual Plan Frequency with Offsets** nell'elenco a discesa Nome Job
    * Nella Schermata della **Frequency**, fare clic sul pulsante **Add** al di sotto della **Lista delle Frequenze**.
    * Scegliere l'opzione **Create new Frequency**.
    * Digitare ```CompanyHoliday+1``` nel campo **Frequency Name**.
    * Fare click su **Next**.
    * Nella sezione When to **Schedule**, scegliere l'opzione **Annual Plan**.
    * Nell'elenco a discesa **Calendar** scegliere **Company Holiday Calendar**.
    * Nel riquadro **Offset Days** inserire il numero ````1````.
    * Scegliere **Forecast** Per visualizzare la Frequenza.
    * Le date selezionate devono essere il giorno lavorativo successivo alle date selezionate nel Calendario.
    * Fare clic sul pulsante **Ok**.
    * Fare clic sul pulsante **End**.
    * Chiudere la scheda **Job Master**.

</details>