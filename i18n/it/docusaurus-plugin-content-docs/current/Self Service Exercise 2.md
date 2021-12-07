---
sidebar_label: 'Self Service Esercizio 2'
hide_title: 'false'
---

## Self Service Esercizio 2: Disabilitare un Pulsante

###### Creare il token di disabilitazione

:::note Nota
_**NOTE**: Assicurarsi che la modalità **Admin Mode** sia attivata facendo clic sul **Lock Button** nell'angolo in alto a destra. Dovrebbe essere **Verde** e **Sbloccato**_
:::

1. In modalità **Admin**, dalla scheda **Self Service**, fare clic su click sul pulsante verde **Create** per creare un nuovo Pulsante.
2. Nella casella di testo **Name** inserire **Create Disable Rule Token**.
3. Nella casella di testo **Documentation** inserire **This Button will create the Disable Rule Token**.
4. Assicurarsi che l'opzione **Confirmation Message** sia attivata (```Verde```).
5. In Events, fare clic sulla barra verde Add (```+```).
6. Dal Menù **Event Template**, selezionare ```$PROPERTY:ADD,<Property Name>,<value>```.
7. Nella casella di testo **Token Name** inserire **Disabled**.
8. Nella casella di testo **Value** inserire **false**.
9. Fare clic sul pulsante **OK**.
10. Successivamente, spostare l'opzione ```Submit Events``` as ```OCADM``` su On (```Verde```).
11. Fare clic sul pulsante **Save**.

###### Crea un pulsante per impostare il token di disabilitazione su True

12. Dalla scheda **Self Service**, fare clic su click sul pulsante verde **Create** per creare un nuovo Pulsante.
13. Nella casella di testo **Name** inserire **Set Disable Rule Token True**.
14. Nella casella di testo **Documentation** inserire **This Button will set the Disable Rule Token to True**.
15. Assicurarsi che l'opzione **Confirmation Message** sia attivata (```Verde```).
16. In Events, fare clic sulla barra verde Add (```+```).
17. Dal Menù **Event Template**, selezionare ```$PROPERTY:SET,<Property Name>,<value>```.
18. Nella casella di testo **Token Name** inserire **Disabled**.
19. Nella casella di testo **Value** inserire **true**.
20. Fare clic sul pulsante **OK**.
21. Successivamente, spostare l'opzione ```Submit Events as OCADM``` su On (```Verde```).
22. Fare clic sul pulsante **Save**.

###### Reimposta il token di disabilitazione su False

23. Dalla scheda **Self Service**, fare clic su click sul pulsante verde **Create** per creare un nuovo Pulsante.
24. Nella casella di testo **Name** inserire R**eset Disable Rule Token False**.
25. Nella casella di testo **Documentation** inserire **This Button will reset the Disable Rule Token to False**.
26. Assicurarsi che l'opzione **Confirmation Message** sia attivata (```Verde```).
27. In Events, fare clic sulla barra verde Add (```+```).
28. Dal Menù **Event Template**, selezionare ```$PROPERTY:SET,<Property Name>,<value>```.
29. Nella casella di testo **Token Name** inserire **Disabled**.
30. Nella casella di testo **Value** inserire **false**.
31. Fare clic sul pulsante OK.
32. Successivamente, spostare l'opzione ```Submit Events as OCADM``` su On (```Verde```).
33. Fare clic sul pulsante **Save**.

###### Aggiungi la regola di disabilitazione al pulsante di prova 1

34. Dalla scheda **Self Service**, fare clic su click sul **Pulsante di edit Blu** sul **Test Button 1**.
35. Spostare la **Disable Rule** su On (```Verde```).
36. Nella casella di testo **Disable Rule** inserire ```[[Disabled]]```.
37. Fare clic sul pulsante **Save**.

###### Testare i Pulsanti

:::note Nota
_**NOTE**: Assicurarsi che la modalità **User Mode** sia attivata facendo clic sul **Lock Button** nell'angolo in alto a destra. Dovrebbe essere **Grigio** e **Bloccato**_
:::

38. In **User Mode**, dalla schermata principale **Self Service** fare clic sul pulsante **Create Disable Rule Token**.
39. Dalla pagina **Service Request** fare clic su **Submit Button** per eseguire la richiesta. Verrà visualizzata la barra di avanzamento. Un'esecuzione riuscita sarà indicata con un'icona con un segno di spunta **Verde**.
40. Fare clic sul Pulsante **OK** per uscire dal processo della richiesta.
41. Dopo, dalla schermata principale della scheda **Self Service** Fare clic sul pulsante **Set Disable Rule Token True**.
42. Dalla pagina **Service Request** fare clic su **Submit Button** per eseguire la richiesta. Verrà visualizzata la barra di avanzamento. Un'esecuzione riuscita sarà indicata con un'icona con un segno di spunta **Verde**.
43. Fare clic sul Pulsante **OK** per uscire dal processo della richiesta.

:::note Nota
_**NOTE**: Se entrambe le **Service Requests** sono state eseguite correttamente, il pulsante **Test Button 1** dovrebbe apparire in grigio e non disponibile_
:::

44. Per riattivare il pulsante **Test Button 1**, dalla schermata principale **Self Service** fare clic sul pulsante **Reset Disable Token False**.
45. Dalla pagina **Service Request** fare clic su **Submit Button** per eseguire la richiesta. Verrà visualizzata la barra di avanzamento. Un'esecuzione riuscita sarà indicata con un'icona con un segno di spunta **Verde**.
46. Fare clic sul Pulsante **OK** per uscire dal processo della richiesta.

:::note Nota
_**NOTE**: Il pulsante **Test Button 1** dovrebbe adesso essere Attivo e Disponibile_
:::