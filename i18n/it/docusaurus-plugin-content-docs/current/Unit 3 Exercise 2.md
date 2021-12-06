---
sidebar_label: 'Unità 3 Esercizio 2'
hide_title: 'false'
---

## Esercizio 2: Privilegi di Macchina 

##### Obiettivo:

Fornire al Ruolo ```Training``` i **Machine Privileges**.

Verificare che i privilegi macchina siano stati concessi effettuando il logout da Enterprise Manager e accedendo nuovamente come Student1.

Notare che ```Student1``` non avrà ancora i privilegi per vedere le macchine in Administration, ma sarà in grado di vedere la macchina ```SMATtraining``` in **Machine Status** (ma non sarà in grado di cambiare lo stato di comunicazione o modificare la macchina).


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E2.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel Menù **Sicurezza > Privilegi** fare doppio clic **Machine Privileges**.
2. Nell'elenco a discesa **Select Role** selezionare il ruolo ```Training```.
3. Nella lista Revoked list, fare clic sulla macchina ```SMATraining``` e quindi fare clic sulla freccia verde (che punta a destra) per mettere ```SMATraining``` nella lista **Granted**.
4. Chiudere la scheda **Machine Privileges**.

:::note Nota
L'utente ```Student1``` che si trova ora sotto il ruolo ```Training``` Role) ora può selezionare questa macchina per eseguire i lavori durante l'impostazione nella schermata Dettagli lavoro
:::

5. Disconnettersi da Enterprise Manager. Fare clic sul pulsante Disconnetti o selezionare Disconnetti dalla barra dei menu di **Enterprise Manager**.
6. Fare clic su **OK** per confermare il logout.
7. Dalla schermata di accesso di OpCon/xps Login digitare ```Student1``` nel campo **Username** e ```password1``` nel campo **Password** fare clic su **Login**.
8. Notare che l'utente non ha ancora il privilegio di vedere la voce **Machines** nel menù **Administration**.
9. Fare doppio click su **Machine Status** nel menù **Operation**.
10. Fare clic con il tasto destro sulla macchina ```SMATraining``` e verificare che l'utente non possa modificare lo stato di comunicazione della macchina.
11. Provare a selezionare **Edit Machine**. Verrà mostrato un messaggio di errore.
12. Chiudere la scheda **Machine Status** e quindi disconnettersi da Enterprise Manager. Fare clic su **OK** per confermare che si sta effettuando il logout.
13. Dalla schermata di accesso di OpCon/xps lasciare vuoti i campi **Username** e **Password** e fare clic su **Login**.

:::caution Nota
Lo studente ```Student1``` non può aggiornare alcuna informazione per nessuna macchina nella configurazione, ma sarà in grado di selezionare questa macchina durante l'impostazione dei lavori SE i privilegi per quella macchina sono configurati._
:::

</details>