---
sidebar_label: 'Unità 3 Esercizio 4'
hide_title: 'false'
---

## Esercizio 4: Privilegi di Reparto

##### Obiettivo:

Creare un reparto **Department** chiamato ```TrainingDept```

Assegnare i seguenti privilegi di reparto (**Departmental Function Privileges**) per il reparto ```TrainingDept``` al Ruolo ```Training```:

* Add Jobs to Master Schedules
* Delete Jobs from Master Schedules
* Modify Jobs in Master Schedules
* View Jobs in Daily Schedules
* View Jobs in Master Schedules
* View Jobs in Schedules Operations
* Release Jobs
* Hold Jobs

Assegnare quindi al reparto ```TrainingDept``` i Job **WINDOWS JOB 1**, **WINDOWS JOB 2**, and **WINDOWS JOB 3** nello Schedule **MY FIRST SCHEDULE**.

Infine, disconnettersi da Enterprise Manager e accedere di nuovo come ```Student1```. L'utente dovrebbe essere in grado di accedere al Menù Job Master Tma essere comunque limitato a ciò che può essere visualizzato o gestito perché manca di Schedule and Function Privileges.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E4.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Creare un Reparto (Department)
    * Nella sezione del menù **Security**, fare doppio clic su **Departments**.
    * Fare clic sul pulsante Aggiungi nella barra degli strumenti **Departments**.
    * Digitare ```TrainingDept``` nel campo **Name**.
    * Digitare **Department created for training** nel campo **Documentation**.
    * Fare clic sul pulsante Salva nella barra degli strumenti **Departments**.
    * Chiudere la Scheda **Departments**.
2. Assegnare privilegi di funzione dipartimentale (Departmental Function Privileges) al ruolo
    * Nella sezione del menù **Security > Privileges** fare doppio clic su **Departmental Function Privileges**.
    * Nell'elenco a discesa **Select Role** selezionare **Training Role**.
        * Notare che tutti i privilegi sono nell'elenco revocati (**Revoked**) (a sinistra)
    * Nell'elenco a discesa **Departments** selezionare ```TrainingDept```.
    * Assegnare al ruolo i seguenti Departmental Function Privileges:
        * Add Jobs to Master Schedules
        * Delete Jobs from Master Schedules
        * Modify Jobs in Master Schedules
        * View Jobs in Daily Schedules
        * View Jobs in Master Schedules
        * View Jobs in Schedules Operations
        * Release Jobs
        * Hold Jobs
    * Chiudere la scheda Departamental Privileges.

:::note Nota
L'utente Student1 (che si trova sotto il ruolo di formazione) ora può aggiungere/modificare/eliminare Job negli Schedule e visualizzarli nelle schermate View->Operation. L'utente può anche sospendere e rilasciare i Job
:::

3. Assegnare il dipartimento a un Job
    * Nel menù **Administration** fare doppio clic su **Job Master**.
    * Selezionare lo schedule **My First Schedule**.
    * Selezionare **Windows Job 1**.
    * Selezionare ```TrainingDept``` nel campo “**Department**”.
    * Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
    * Fare clic sulla scheda **Frequency**.
    * Nell'opzione **Job Build Status**, selezionare ‘```On Hold```’.
    * Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
    * Selezionare **Windows Job 2**.
    * Selezionare ```TrainingDept``` nel campo “**Department**”.
    * Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
    * Fare clic sulla scheda **Frequency**.
    * Nell'opzione **Job Build Status**, selezionare ‘```On Hold```’.
    * Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
    * Selezionare **Windows Job 3**.
    * Selezionare ```TrainingDept``` nel campo “**Department**”.
    * Fare clic sul pulsante **Save** nella barra strumenti **Job Master**.
    * Chiudere la scheda **Job Master**.
4. Controllare gli accessi Utente
    * Disconnettersi da Enterprise Manager. Fare clic sul pulsante Disconnetti o selezionare Disconnetti dalla barra dei menu di Enterprise Manager.
    * Fare clic su **OK** per confermare che si sta effettuando il logout.
    * Dalla schermata di accesso di OpCon/xps digitare ```Student1``` nel campo **Username** e ```password1``` nel campo **Password** Fare clic su Login.
    * Si noti che l'utente non ha ancora il privilegio di vedere le **Machines** nel menù **Administration**.
    * Notare che ora questo utente è in grado di accedere all'argomento **Job Master**.
    * Fare doppio clic su **Job Master**.
    * Provare a selezionare uno Schedule dall'elenco a discesa **Schedule**. Cosa appare?
    * Chiudere **Job Master**.
    * Disconnettersi da Enterprise Manager. Fare clic sul pulsante Disconnetti o selezionare Disconnetti dalla barra dei menu di Enterprise Manager.
    * Fare clic su **OK** per confermare che si sta effettuando il logout.
    * Dalla schermata di accesso di OpCon/xps digitare lasciare vuoti i campi **Username** e **Password** e premere **Login**.

:::caution Nota
L'utente ```Student 1``` non può visualizzare o gestire i lavori in una pianificazione perché non abbiamo ancora impostato la pianificazione e i privilegi funzionali
:::

</details>