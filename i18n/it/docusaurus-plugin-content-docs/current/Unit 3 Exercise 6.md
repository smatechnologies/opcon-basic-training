---
sidebar_label: 'Unità 3 Esercizio 6'
hide_title: 'false'
---

## Esercizio 6: Privilegi di Funzione

##### Obiettivo:

Concere al ruolo ```Training``` i **Function Privilege** per poter generare gli Schedules sui piani giornalieri (**Build Daily Schedules**).

Esci da Enterprise Manager e accedi di nuovo come ```Student1```. L'utente dovrebbe essere in grado di vedere **MY FIRST SCHEDULE**, ma in Job Master, dovrebbe vedere solo i primi tre **Job di Windows** nello **Schedule**. Questo perché il ruolo ```Training``` ha accesso solo ai Job assegnati alle ```TrainingDept``` macchine ```Windows```.

Quindi provare ad aggiungere un Job ```UNIX``` allo Schedule **MY FIRST SCHEDULE**. L'utente non sarà in grado di farlo perché nessuna macchina ```UNIX``` è assegnata.

Infine, effettuare la rebuild dello Schedule **MY FIRST SCHEDULE**, sovrascrivendo il piano odierno. Rilascia il primo e il secondo lavoro. Fare clic con il pulsante destro del mouse su ciascun Job e notare che alcune funzioni non sono disponibili perché non sono state concesse al Ruolo ```Training``` Ad esempio, **Force-Start Job** e **Cancel**).


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E6.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nella sezione del menù **Security > Privileges**, fare doppio clic su **Function Privileges**.
2. Nell'elenco a discesa **Select Role** selezionare **Training Role**.
    * _Notare che tutte le Funzioni sono presentate della lista a sinistra **Revoked**_.
3. Nella vista Revoked, fare clic su **Build Daily Schedules** e quindi fare clic sulla freccia verde (che punta a destra) per mettere **Build Daily Schedules** nella lista **Granted**.
4. Chiudere la scheda **Function Privileges**.
5. Aprore le viste View o Matrix e controlla se lo schedule **My First Schedule** è completato. Se non lo è cancellate ogni Job che stia mantenenedo aperta lo Schedule.
6. Chiudere le vosta **View** o **Matrix**.
7. Disconnettersi da Enterprise Manager. Fare clic sul pulsante Disconnetti o selezionare Disconnetti dalla barra dei menu di Enterprise Manager
8. Fare clic su **OK** per confermare l'uscita.
9. Dalla schermata di accesso di OpCon/xps digitare ```Student1``` nel campo **Username** e ```password1``` nel campo **Password** Fare clic su **Login**.
10. Se non espansa, espandere il menù **Administration**.
11. Fare doppio clic su **Job Master**.
12. Provare a selezionare uno Schedule dall'elenco a discesa **Schedule** Cosà accade?
    * _Notare che ora questo utente può vedere **My First Schedule**_.
13. Selezionare **My First Schedule**.
14. Fare clic sul menù a tendina Jobs, cosa appare?

:::info Nota
_Soltanto 3 Windows Jobs. Perchè ? Perché il ruolo associato a questo utente ha accesso solo ai Job assegnati alle macchine ```TrainingDept``` Windows_
:::

15. Seleziona un Job di Windows. Qual è l'ID utente associato a questo Job?

:::caution Nota
_Nota: Non cambiare User ID_
:::

16. Aggiungere un Job ```UNIX```. Che succede? E' possiible selezionare una macchina ```UNIX```?
    * Non è possibile aggiungere un job ```UNIX``` Job perché il ruolo non è abilitato a nessuna macchina ```UNIX```.
    * Fare clic sul pulsante **Cancel**.
17. Chiudere la sezione **Job Master**.
18. Espandere la sezione **Operation** (Nota: se lo Schedule è ancora in corso, chiedere assistenza all'istruttore).
    * Fare doppio clic su **Schedule Build**
    * **Fare la Build**, s**ovrascrivere (Overwrite)** e **rilasciare My First Schedule**.
19. Chiudere la schermata **Schedule Build**.
20. Aprire la schermata **Matrix** facendo doppio clic sulla voce **Matrix** nel menù Operations del pannello di **Navigazione**.
21. Assicurati che la data odierna sia selezionata nel Calendario in alto a sinistra dello schermo e seleziona lo Schedule **My First Schedule** nella lista.
22. Fare clic con il tasto destro su **Windows Job 1** e selezionare **Release**. Il Job dovrebbe avviarsi.
23. Fare clic con il tasto destro su **Windows Job 2** e selezionare **Release**. Il Job **Windows Job 2** dovrebbe assumere lo stato **Waiting on Dependency**.
24. Fare clic con il tasto destro su **Windows Job 2** ancora e notare che **“Force Start”** non è abilitato.
    * Perchè? Perchè il Privilegio Funzione Dipartimentale (Departmental Function Privilege) “**Force-Start Job**” non è concesso al ruolo di questo utente.
25. Fare clic con il tasto destro su **Windows Job 3** e notare che l'opzione “**Cancel**” non è abilitata.

:::info Nota
Perchè? Perchè il Privilegio Funzione Dipartimentale (Departmental Function Privilege) “**Cancel Jobs**” non è concesso al ruolo di questo utente.
:::

26. Nel menù **Operation** fare doppio click su **List**
    * Espandere la data, cosa appare?
    * Espandere lo Schedule. Cosa appare?
    * Fare clic con il pulsante destro del mouse su uno dei Job. Sei in grado di modificare lo stato del Job? Come mai?
27. Chiudere le schede dailky View e Matrix, quindi disconnettersi da Enterprise Manager. Fare clic su **OK** per confermare che si sta effettuando il logout.
28. Dalla schermata di accesso di OpCon/xps lasciare vuoti i campi **Nome utente** e **Password** e fare clic su **Accedi**.

</details>