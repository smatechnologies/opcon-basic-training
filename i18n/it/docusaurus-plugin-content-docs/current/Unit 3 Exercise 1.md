---
sidebar_label: 'Unità 3 Esercizio 1'
hide_title: 'false'
---

## Esercizio 1: reare un Ruolo ed un Utente

##### Obiettivo:

Crea un **Role** chiamato ```Training```. Assicurati che NON erediti privilegi.

Crea uno **User Account** chiamato ```Student1``` (Nome completo: ```Student Number 1```).

Copia la password negli appunti e cambia la password copiata in ```password1``` e conferma.

Give ```Student 1``` the Role of ```Training```.

Verificare i privilegi dell'account utente effettuando il logout da Enterprise Manager e accedendo nuovamente come ```Student1```. L'utente dovrebbe avere un accesso limitato agli argomenti che possono essere verificati selezionando Stato macchina. Nessuna macchina dovrebbe essere visibile.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E1.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Creare un Ruolo
* Nel Menu **Security** fare doppio clic su **Roles**.
* Fare clic sul pulsante **Add** nella barra degli strumenti Ruoli..
* Nel campo Name digitare **Training**.
* Nel campo **Documentation**, type: **“Role to be used during the Security Exercises”**.
* Nel campo **Privileges**, assicursi che tutte le caselle di controllo **Inherit Privileges** siano **deselezionate**.
* Fare clic sul pulsante Salva.
* Chiudere la scheda "Ruoli".
2. Creae un account utente
* Nel menu **Security** fare doppio clic su **User Accounts**.
* Fare clic sul pulsante **Add** nella barra degli strumenti Accounts.
* Nel campo **Name**, digitare ```Student1```.
* Nel campo **Full Username** digitare ```Student Number 1```.
* Fare clic sul pulsante Save nella barra degli strumenti **Accounts**.
* Nella finestra **Password Set** fare clic sul pulsante **Yes** per inserire la password negli appunti..
* Fare clic sul pulsante **Change User Password** (lato destro dello schermo)
* Fare clic con il pulsante destro nel campo **Old Password** e incollare la vecchia password..
* Fare clic nel campo **New Password** e digitare ```password1``` (minuscolo).
* Fare clic nel campo **Confirm Password** e digitare ```password1``` (minuscolo).
* Click the **OK** button.
* Selezionare il Ruolo ```Training``` nella lista **Revoked** e quindi fare clic sulla freccia verde (che punta a destra) per inserire lo studente 1 nel ruolo di Training. Notare che il ruolo di Training sarà nell'elenco Concesso.
* Fare clic sul pulsante Save nella barra degli strumenti Accounts.
* Chiudere la scheda User Accounts.
3. Verify the User **Accounts Privileges**
* Disconnettersi da Enterprise Manager. Fare clic sul pulsante Logout o selezionare Logout dalla barra dei menu di Enterprise Manager
* Fare clic su **OK** per confermare che si sta effettuando il logout.
* Dalla schermata di accesso di OpCon/xps digitare ```Student1``` nel campo **Username** e ```password1``` nel campo **Password** Fare clic su Login
* Controlla gli elementi a cui l'utente ha accesso::
    * Operation
        * Machine Status
        * Escalation Akcnoledgement
    * External Tools
        * Import Export
        * Windows Tools
    * Information
        * Logs
    * Scripts
        * Repository
        * Runners
        * Types
    * Support
        * Support
        * Report a problem
* Fare doppio clic su **Machine Status** sotto **Operation**
* Nessuna macchina dovrebbe essere presente per la visualizzazione
* Chiudere la scheda **Machine Status** e quindi disconnettersi da Enterprise Manager. Fare clic su **OK** per confermare che si sta effettuando il logout
* Dalla schermata di accesso di OpCon/xps lasciare vuoti i campi **Username** e **Password** e fare clic su **Login**

</details>