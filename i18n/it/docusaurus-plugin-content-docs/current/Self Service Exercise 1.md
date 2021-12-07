---
sidebar_label: 'Self Service Esercizio 1'
hide_title: 'false'
---

## Self Service Esercizio 1: Creare un Pulsante

1. In Solution Manager, seleziona la scheda **Self Service**.
2. Assicurarsi che la modalità **Admin Mode** sia attivata facendo clic sul **Lock Button** nell'angolo in alto a destra. Dovrebbe essere **Verde** e **Sbloccato**.
3. In Self Service, fare clic su click sul pulsante verde **Create** per creare un nuovo Pulsante.
4. Nella casella di testo **Name** inserire **Test Button 1**.
5. Nella casella di testo **Documentation** inserire **This is a Test Button**.
6. Assicurarsi che l'opzione Confirmation Message sia attivata (```Verde```).
7. In Events, fare clic sulla barra verde Add (```+```).
8.Dal Menù Event Template, selezionare ```$CONSOLE:DISPLAY,<message>```.
9. Nella casella di testo **Message**, inserire **This is a test message to the Console**.
10. Fare clic sul pulsante **OK**.
11. Successivamente, spostare l'opzione ```Submit Events``` as ```OCADM``` su On (```Verde```).
12. Fare clic sul pulsante Save.
13. Attivare lo **User Mode** facendo clic sul pulsante **Lock** nell'angolo in alto a destra. Ora dovrebbe essere **Grigio** e **Bloccato**.
14. Fare clic su **Test Button 1**.
15. Fare clic su **Submit Button** per eseguire il processo. Verrà mostrata la Progress Bar. Una esecuzione riuscita verrà indicata con un segno di spunta **Verde**.
16. Fare clic sul pulsante **OK** per uscire dal Processo di Request.
17. Aprire il ```SAM.log``` per verificare che il messaggio sia stato scritto nella console.