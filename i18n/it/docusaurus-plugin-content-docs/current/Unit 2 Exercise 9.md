---
sidebar_label: 'Unità 2 Esercizio 9'
hide_title: 'false'
---

## Esercizio 9: Frequenze - A Richiesta -- All'inizio, a Metà, ae a fine Periodo

##### Obiettivo:

All'interno dello Schedule **Frequency Practice Schedule**, creare 4 nuovi job nulli:

* **On Request Frequency Practice** 
* **Begin of Period Frequency Practice** 
* **Mid of Period Frequency Practice** 
* **End of Period Frequency Practice**

Nel Job **On Request Frequency Practice**, creare una nuova Frequenza chiamata ```OnRequest```. Questa Frequenza dovrà essere eseguita **A Richiesta** nella data specificata. In questo caso impostare la data 3 Gennaio.

Nel Job **Begin of Period Frequency Practice**, creare una nuova Frequenza chiamata ```BOM-A```. Questa Frequenza dovrà essere eseguita nel primo giorno lavorativo di ciascun mese, il giorno successivo in caso di festività.

Nel Job **Mid of Period Frequency Practice**, creare una nuova Frequenza chiamata ```Mid-Wed-A```. Questa Frequenza dovrà essere eseguita al Mercoledì più vicino alla metà mese, il giorno dopo in caso di festività.

Nel Job **End of Period Frequency Practice**, creare una nuova Frequenza chiamata ```EOM-B```. Questa Frequenza dovrà essere eseguita nell'ultimo giorno lavorativo del mese, il giorno prima in caso di festività.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E9.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Aprire **Job Master**.
2. Selezionare lo Schedule **Frequency Practice** nell'elenco a discesa **Schedule**.
3. Fare clic sul pulsante **Add**.
4. Inserire **On Request Frequency Practice** nella casella di testo **Name**.
5. Fare clic sul pulsante **Save**.
6. Ripetere i passi dal ```3``` al ```5``` per creare i tre Null Jobs:
    * **Begin of Period Frequency Practice**
    * **Mid of Period Frequency Practice**
    * **End of Period Frequency Practice**
7. Frequency: **On Request**
    * Selezionare **On Request Frequency Practice** nell'elenco a discesa **Job Name**.
    * Nella schermata delle Frequenze fare clic sul pulsante Add al di sotto della lista delle **Frequenze**.
    * Selezionare l'opzione **Crea una nuova Frequenza** (**Create New Frequency**).
    * Digitare ```OnRequest``` nel campo di testo **Frequency Name**.
    * Fare clic su **Next**.
    * Selezione l'opzione **On Request**.
    * Selezionare **3 Gennaio** per la **Request Date**.
    * Lasciare l'impostazione **A/O/B/N** su **On Date**.
    * Fare clic sul pulsante **Forecast**.
    * Spostare la schermata **Frequency Definition Wizard** in modo da vedere entrambe le schermate.
    * Nella schermata **Forecast** dovrebbe comparire in verde unicamente la data del **3 Gennaio**.
    * Fare clic sul pulsante **Finish**.
8. Frequenza: **Inizio Periodo**
    * Selezionare **Begin of Period Frequency Practice** nell'elenco a discesa **Job Name**.
    * Nella schermata delle **Frequenze** fare clic sul pulsante Add al di sotto della lista delle **Frequenze**.
    * Selezionare l'opzione **Crea una nuova Frequenza (Create New Frequency)**.
    * Digitare ```BOM-A``` nel campo di testo **Frequency Name**.
    * Fare clic su **Next**.
    * Selezione l'opzione **Beg of Period**.
    * Cambiare l'impostazione **A/O/B/N** da **On Date** a **After Date**.
    * Fare clic sul pulsante **Forecast**.
    * Spostare la schermata **Frequency Definition Wizard** in modo da vedere entrambe le schermate.
    * Nella schermata **Forecast**, dovrebbe comparire in verde **il primo giorno lavoraivo** di ogni mese. Osservare come le festività ed i fine settimane agiscono su questa Frequenza.
    * Fare clic sul pulsante **Finish**.
9. Frequenza: **Metà Periodo**
    * Selezionare **Mid of Period Frequency Practice** nell'elenco a discesa **Job Name**.
    * Nella schermata delle **Frequenze** fare clic sul pulsante **Add** al di sotto della lista delle **Frequenze**.
    * Selezionare l'opzione **Crea una nuova Frequenza (Create New Frequency)**.
    * Digitare ```Mid-Wed-A``` nel campo di testo **Frequency Name**.
    * Fare clic su **Next**.
    * Selezionare l'opzione **Mid of Period**.
    * Selezionare Mercoledì nei giorni della settimana (Day of the Week menu).
    * Cambiare l'impostazione **A/O/B/N** da **On Date** a **After Date**
    * Fare clic sul pulsante **Forecast**.
    * Spostare la schermata **Frequency Definition Wizard** in modo da vedere entrambe le schermate.
    * Nella schermata **Forecast**, dovrebbero comparire in verde i Mercoledì vicini alla metà di ogni mese. Osservare come le festività ed i fine settimana agiscono su questa Frequenza.
    * Fare clic sul pulsante **Finish**.
10. Frequency: **End of Period**
    * Selezionare **End of Period Frequency Practice** nell'elenco a discesa **Job Name**.
    * Nella schermata delle **Frequenze** fare clic sul pulsante **Add** al di sotto della lista delle **Frequenze**.
    * Selezionare l'opzione **Crea una nuova Frequenza (Create New Frequency)**.
    * Digitare ```EOM-B``` nel campo di testo **Frequency Name**.
    * Fare clic su **Next**.
    * Selezionare l'opzione **End of Period**.
    * Cambiare l'impostazione **A/O/B/N** da **On Date** a **Before Date**.
    * Fare clic sul pulsante **Forecast**.
    * Spostare la schermata **Frequency Definition Wizard** in modo da vedere entrambe le schermate.
    * Nella schermata **Forecast**, dovrebbero comparire in verde gli ultimi giorni lavorativi di ogni mese. Osservare come le festività ed i fine settimana agiscono su questa Frequenza.
    * Fare clic sul pulsante **Finish**.

</details>