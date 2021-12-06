---
sidebar_label: 'Unità 3 Esercizio 9'
hide_title: 'false'
---

## Esercizio 9: Email Escalation

##### Obiettivo:

In **Escalation Manager**, aggiungere un gruppo (**Group**) chiamato ```First Level``` ed assegnare entrambe le utenze ```Student1``` e ```SMATRAINING\SMAUSER```.

Aggiungere una regola di escalation (**Escalation Rule**) chiamata ```First Level```. Aggiungere una sequenza di regole:

* Numero di volte da notificare (Number of Times To Be Notified): ```6```
* Tempo tra le notifiche (Time between Notifications) (minutes): ```5```
* Gruppo da notificare in caso di escalation (Group to Notify on Escalation): ```First Level```

Nel **Notification Manager**, fare click sulla scheda Job e selezionare la cartella **Escalation Example**. Aggiungere un trigger per **Job Failed** con una regola di Escalation (**Escalation Rule**) per ```First Level```.

Build the **Escalation Example** Schedule released for Today.

Il Job avrà esito negativo, attivando l'Escalation. L'utente deve confermare l'escalation immettendo l'**Escalation Acknowledgement** o facendo doppio clic sull'icona di **Escalation Acknowledgement** a sinistra del ```SAM pulse```.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E9.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>


<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menù gestione (**Management**) fare doppio clic su **Escalation Manager**.
2. Nel riquadro **Group**, fare clic sul pulsante **Add**.
3. Apparirà il popup **Group Add/Edit**.
4. Nella casella di testo **Group Name** digitare ```First Level```.
5. Nel riquadro **Available Users** selezionare Student1 e ```SMATRAINING\SMAUSER```.
6. Fare clic sul pulsante con la **freccia verde** per spostare l'utente selezionato nel riquadro **Assigned Users** box.
7. Fare clic sul pulsante **Save**.
8. Assicurarsi che l'**Escalation Manager** sia ancora aperto.
9. Nel riquadro **Rules** fare clic sul pulsante **Add**.
10. Apparirà il popup **Escalation Rule Add/Edit**.
11. Nella casella di testo **Rule Name** digitare ```First Level```.
12. Nella sequenza regole (**Rule Sequences**) fare clic sul pulsante **Add**.
13. Apparirà il popup **Escalation Group Entry Add/Edit**.
14. Nella casella di testo **Number of Times To Be Notified** inserire ```6```.
15. Nella casella di testo **Time between Notifications (minutes)**: inserire ```5```.
16. Nell'elenco a discesa **Group to Notify on Escalation** selezionare ```First Level```.
17. Fare clic sul pulsante **Add**.
18. Assicurarsi che la nuova **Regola** sia elencata nella griglia della schermata **Escalation Rule Add/Edit**.

:::note Nota
Se si ha necessità di aggiungere più livelli di escalation, fare di nuovo clic su aggiungi e seguire lo stesso processo
:::

19. Fare clic sul pulsante **Save**.
20. Chiudere la scheda **Escalation Manager** facendo clic sulla **X**.
21. Nel menù **Management** fare doppio clic su **Notification Manager**.
22. Nei **Notification Triggers**, fare clic sulla scheda **Jobs**.
23. Espandre la cartella **Escalation Example**.
24. Selezionare il trigger **Job Failed**.
25. Fare clic nell'elenco a discesa **Escalation Rule** e selezionare ```First Level```.
26. Fare clic sul pulsante **Save**.
27. Chiudere il **Notification Manager** facendo clic sulla **X** sulla scheda.
28. Nel menù **Operations** fare doppio clicl sulla voce **Schedule Build**.
29. Apperirà il popup **Build Schedules**.
30. Nella lista **Schedule Selection**, selezionare **Escalation Example**.
31. Fare clic sul pulsante **Build**.
32. Selezionare l'opzione **Released**.
33. Fare clic su **OK**.
34. Chiudere il popup **Build Schedules**.
35. L'unico Job nello **Schedule Escalation Example** fallirà attivando **l'evento di Escalation**.
36. Controllare in **Thunderbird** la presenza dell'avviso iniziale e un'altra email che informa che questo processo è stato messo in escalation..
37. Ci sono due modi per aprire la schermata di **Acknowledgement**. Sia facendo doppio clic sull'opzione **Escalation Acknowledgement** nel menù Operations sia facendo doppio clic sull'icona dell'**Escalation Acknowledgement** sulla sinistra del ```SAM Pulse```.
38. Seleziona la casella di controllo accanto all'evento di escalation che si desidera **Riconoscere**.
39. Fare clic sul pulsante **Save**.
40. Verificare che l'evento sia stato cancellato dallo schermo.
41. Chiudere la scheda Riconoscimento escalation e l'applicazione **Thunderbird** (se aperta).

</details>