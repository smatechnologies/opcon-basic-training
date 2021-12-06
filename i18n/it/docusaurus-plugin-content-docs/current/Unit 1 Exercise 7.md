---
sidebar_label: 'Unità 1 Esercizio 7'
hide_title: 'false'
---

## Esercizio 7: Stati di Schedule e Job

##### Obiettivo: 

Effettuare la messa a piano (Build) dello Schedule **"Schedule and Job Statuses"** in stato ```On Hold``` per la giornata odierna. Nella vista **Matrix**, rilasciare lo Schedule per il piano odierno.

Observe the ```Start Time``` for the Schedule. If it has not been reached, start the Schedule manually.

Infine, riportare lo Schedule nuovamente nello stato ```On Hold```.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E7.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Effettuare la Build dello Schedule **"Schedule and Job Statuses"**.
    * Nel menù Operazione, fare doppio clic su **Schedule Build**.
    * Nella sezione **Schedule Selection**, selezionare **"Schedule and Job Statuses"** per effettuarne la build.
    * Fare click sul pulsante **Build**.
    * Nel pop-up **Build Properties** selezionare l'opzione **On Hold**.
    * Fare click su **OK**.
2. Chiudere la schermata **Build Schedules**.
3. Rilasciare lo Schedule **"Schedule and Job Statuses"** usando una delle schermate di **Operations**. Le istruzioni che seguono usano la schermata **Matrix**.
    * Nel menù **Operation** fare Doppio-Click su **Matrix**.
    * Verificare che la data corrente sia selezionata nella finestra **Calendar** in alto a sinistra della schermata Matrix.
    * Cliccare con il tasto sinistro del mouse sullo Schedule **"Schedule and Job Statuses"** per vedere i Jobs.
    * Cliccare con il tasto destro del mouse sullo Schedule **"Schedule and Job Statuses"** nell'elenco degli **Schedule** a destra del **Calendario**.
    * Selezionare **Release** sul menu.
    * Verificate che le informazioni nella finestra pop-up siano vere.
    * Digitare **“Practice Exercise - Release”** nel campo di testo **"Enter a short explanation for this status change"**.
4. Click **OK**.
    * Lo schedule **"Schedule and Job Statuses Schedule"** passerà dallo stato di **“On Hold”** allo stato **“Wait to Start”** perchè lo Schedule aveva uno **Start Time** impostato alle ```18:30```.
5. Avvio dello Schedule
    * Cliccare nuovamente con il tasto destro del mouse sullo Schedule **"Schedule and Job Statuses Schedule"** dall'area di selezione degli **Schedule**.
    * Selezionare **Start** dal menu.
    * Verificare che le informazioni nella finestra pop-up siano vere.
    * Digitare **“Practice Exercise - Start”** nel campo di testo **"Enter a short explanation for this status change"**.
    * Fare clic su **OK**.
    * Lo Schedule **"Schedule and Job Statuses"**passerà dallo stato di **“Wait to Start”** allo stato **“In Process”** e i Job cominceranno ad avviarsi.
6. Mettere in pausa (Hold) lo Schedule
    * Cliccare nuovamente con il tasto destro del mouse sullo Schedule **"Schedule and Job Statuses"** dal menù **Schedule**.
    * Selezionare **Hold** dal menu.
    * Verificare che le informazioni nella finestra pop-up siano vere.
    * Digitare **“Practice Exercise - Hold”** nel campo di testo **Enter a short explanation for this status change**.
    * Click **OK**.
        * Lo Schedule **"Schedule and Job Statuses"** passerà dallo stato di **“In Process”** allo stato **“On Hold”**.
        * I Jon attualmente in esecuzione continueranno ad essere eseguiti, ma niente di nuovo partirà fino a quando lo Schedule non sarà rilasciato.

</details>
