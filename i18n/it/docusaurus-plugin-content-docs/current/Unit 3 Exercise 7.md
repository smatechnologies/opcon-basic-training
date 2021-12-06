---
sidebar_label: 'Unità 3 Esercizio 7'
hide_title: 'false'
---

## Esercizio 7: Codici di Accesso

##### Obiettivo:

Creare un Codice di Accesso (**Access Code**) chiamato ```Training```. All'interno di **Job Master**, assegnare l'**Access Code** a **WINDOWS JOB 1** nello Schedule **MY FIRST SCHEDULE**.

Esci da Enterprise Manager e accedi di nuovo come ```Student1```.

Selezionare Job Master e selezionare **MY FIRST SCHEDULE**. Notare che l'utente non puo visualizzare **WINDOWS JOB 1** perchè il Codice di accesso (**Access Code**)Training non è stato assegnato al ruolo ```Training```.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E7.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menù **Security** fare doppio clic su **Access Codes**.
2. Fare clic sul pulsante **Add** nella barra degli strumenti.
3. Digitare **Training** nel campo Nome **Name**.
4. Digitarte **This is an Access code for the Training** nel campo documentazione.
5. Fare clic sul pulsante **Save** nella barra degli strumenti della schermata Codici di Accesso.
6. Chiudere la sheda **Access Code**.
7. Accertati di aver effettuato l'accesso con l'utente ```SMATRAINING\SMAUSER```.
8. Nel Menù **Administration** Fare doppio click su **Job Master**.
9. Selezionare **First Schedule** dal menù a tendina **Schedule**.
10. Selezionare **Windows Job 1** dal menù a tendina **Job**.
11. Nel menù a tendina **Access Code** selezionare **Training**.
12. **Save** il job e chiudere la scheda **Job Master**.
13. Disconnettersi da Enterprise Manager. Fare clic sul pulsante Disconnetti o selezionare Disconnetti dalla barra dei menu di Enterprise Manager.
14. Fare clic su **OK** per confermare che si sta effettuando il logout.
15. Dalla schermata di accesso di OpCon/xps digitare ```Student1``` nel campo **Username** e ```password1``` nel campo **Password** Fare clic su **Login**.
16. Dal menù **Administration** fare doppio clic sulla voce **Job Master**.
17. Selezionare **My First Schedule** dal menù a tendina **Schedule**.
18. Fare click sull'elenco a discesa Job. Cosa si vede ? Perchè?
19. Chiudere la scheda **Job Master** e quindi disconnettersi da Enterprise Manager. Fare clic su **OK **per confermare che si sta effettuando il logout.
20. Dalla schermata di accesso di OpCon/xps lasciare vuoti i campi **Nome utente** e **Password** e fare clic su **Accedi**.

</details>