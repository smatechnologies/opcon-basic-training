---
sidebar_label: 'Self Service Lab'
hide_title: 'false'
---

### Self Service Lab - Interagire con Schedules and Jobs

##### Schedule Build 

1. In **Enterprise Manager**, Aprire la vista Matrix o Daily List view e assicurarsi che My **First Schedule** sia completato.
2. Tasto destro su **My First Schedule** e selezionare ```Maintenance > Delete Schedule```.
3. Selezionare **Yes** per cancellare lo Schedule.
4. In **Solution Manager**, scegliere la scheda **Self Service**.
5. Assicurarsi che la modalità **Admin Mode** sia attivata facendo clic sul **Lock Button** nell'angolo in alto a destra. Dovrebbe essere **Verde** e **Sbloccato**.
6. In modalità **Admin**, fare clic su click sul pulsante verde **Create** per creare un nuovo Pulsante.
7. Nella casella di testo **Name** inserire **Schedule Build**.
8. In Events, fare clic sulla barra verde Add (**+**).
9. Dal Menù **Event Template**, selezionare ```$SCHEDULE:BUILD```.
10. Nel riquadro **Schedule Date**, inserire la Variabile ```${SCHEDULE DATE}```.
11. Nel riquadro **Schedule Name**, inserire la Variabile ```${SCHEDULE NAME}```.
12. Lasciare le altre opzioni vuote e fare click sul pulsante **OK**.
13. Successivamente, spostare l'opzione ```Submit Events as OCADM``` su On (```Verde```).
14. Dalla sezione **User Input** selezionare la **matita di modifica blu** accanto all'opzione **Schedule Date**.
15. Dallo **User Input Type**, selezionare **Date**.
16. Lasciare la formattazione ```YYYY/MM/DD```.
17. Fare clic sul pulsante **OK**.
18. Scorrere fino al fondo della pagina e selezionare **Save**.
19. Fare clic sul **Lock Button** per tornare in modalità **User Mode**.
20. Fare clic sul pulsante **Schedule Build** appena creato.
21. Inserire la data odierna nel formato richiesto nel riquadro **Schedule Date**.
22. Inserire **My First Schedule** nel riquadro **Schedule Name**.
23. Fare clic su **Submit** per iniziare il processo di Build.
24. Selezionare **OK** per uscire dalla pagina di della **Request Process**.
25. Verificare nella vista Operations o in Enterprise Manager vista Matrix che **My First Schedule** sia stato creato correttamente.

##### Restart Job on Hold

1. Dopo aver controllato che tutti i Jobs sono stati completati, verificare che il Job **Test Event 3** abbia lo stato cancellato.
2. Attivare la modalità **Admin Mode** sia attivata facendo clic sul **Lock Button** nell'angolo in alto a destra. Dovrebbe essere **Verde** e **Sbloccato**.
3. Fare clic su click sul pulsante verde **Create** per creare un nuovo Pulsante.
4. Nella casella di testo **Name** inserire **Hold Job**.
5. In Events, fare clic sulla barra verde Add (**+**).
6. Dal Menù **Event Template**, selezionare ```$JOB:RESTARTHLD```.
7. Nel riquadro **Schedule Date**, inserire la Variabile ```${SCHEDULE DATE}```.
8. Nel riquadro **Schedule Name**, inserire la Variabile ```${SCHEDULE NAME}```.
9. Nel riquadro **Job Name**, inserire la Variabile ```${JOB NAME}```.
10. Fare click sul pulsante **OK**.
11. Spostare l'opzione ```Submit Events as OCADM``` su On (```Verde```).
12. Dalla sezione **User Input** selezionare la matita di modifica blu accanto all'opzione **Schedule Date**.
13. Dallo **User Input Type**, selezionare **Date**.
14. Lasciare la formattazione ```YYYY/MM/DD```.
15. Fare clic sul pulsante **OK**.
16. Scorrere fino al fondo della pagina e selezionare **Save**.
17. Fare clic sul **Lock Button** per tornare in modalità **User Mode**.
18. Fare clic sul pulsante **Restart Job on Hold** appena creato.
19. Inserire la data odierna nel formato richiesto nel riquadro **Schedule Date**.
20. Inserire **My First Schedule** nel riquadro **Schedule Name**.
21. Inserire **Test Event 3** nel riquadro **Job Name**.
22. Fare clic su **Submit** per avviare la Request.
23. Selezionare **OK** per uscire dalla pagina di della Request Process.
24. Verificare nella vista Operations o in Enterprise Manager vista Matrix che **Test Event 3** in **My First Schedule** sia stato messo ```On Hold```.

##### Release Job 

1. In Self Service, attivare la modalità **Admin Mode** facendo clic sul **Lock Button** nell'angolo in alto a destra. Dovrebbe essere **Verde** e S**bloccato**.
2. Fare clic su click sul pulsante verde **Create** per creare un nuovo Pulsante.
3. Nella casella di testo **Name** inserire **Release Job**.
4. In Events, fare clic sulla barra verde Add (**+**).
5. Dal Menù Event Template, selezionare $JOB:RELEASE.
6. Nel riquadro **Schedule Date**, inserire la Variabile ```${SCHEDULE DATE}```.
7. Nel riquadro **Schedule Name**, inserire la Variabile ```${SCHEDULE NAME}```.
8. Nel riquadro **Job Name**, inserire la Variabile ```${JOB NAME}```.
9. Fare click sul pulsante **OK**.
10. Spostare l'opzione ```Submit Events as OCADM``` su On (```Verde```).
11. Dalla sezione **User Input** selezionare la **matita di modifica blu** accanto all'opzione **Schedule Date**.
12. Dallo **User Input Type**, selezionare **Date**.
13. Lasciare la formattazione ```YYYY/MM/DD```.
14. Fare clic sul pulsante **OK**.
15. Scorrere fino al fondo della pagina e selezionare **Save**.
16. Fare clic sul Lock Button per tornare in modalità **User Mode**.
17. Fare clic sul pulsante **Release Job** appena creato.
18. Inserire la data odierna nel formato richiesto nel riquadro **Schedule Date**.
19. Inserire **My First Schedule** nel riquadro **Schedule Name**.
20. Inserire **Test Event 3** nel riquadro **Job Name**.
21. Fare clic su **Submit** per avviare la Request.
22. Selezionare **OK** per uscire dalla pagina di della Request Process.
23. Verificare nella vista Operations o in Enterprise Manager vista Matrix che **Test Event 3** in **My First Schedule** sia stato **Released** e **Completato**.

##### Schedule Delete

1. In Self Service, attivare la modalità **Admin Mode** facendo clic sul **Lock Button** nell'angolo in alto a destra. Dovrebbe essere **Verde** e **Sbloccato**.
2. Fare clic su click sul pulsante verde **Create** per creare un nuovo Pulsante.
3. Nella casella di testo **Name** inserire **Delete Schedule**.
4. In Events, fare clic sulla barra verde Add (**+**).
5. Dal Menù **Event Template**, selezionare ```$SCHEDULE:DELETE```.
6. Nel riquadro **Schedule Date**, inserire la Variabile ```${SCHEDULE DATE}```.
7. Nel riquadro **Schedule Name**, inserire la Variabile ```${SCHEDULE NAME}```.
8. Lasciare il riquadro **Log File Name** vuoto.
9. Fare click sul pulsante **OK**.
10. Spostare l'opzione ```Submit Events as OCADM``` su On (```Verde```).
11. Dalla sezione **User Input** selezionare la **matita di modifica blu** accanto all'opzione **Schedule Date**.
12. Dallo **User Input Type**, selezionare **Date**.
13. Lasciare la formattazione ```YYYY/MM/DD```.
14. Fare clic sul pulsante **OK**.
15. Scorrere fino al fondo della pagina e selezionare **Save**.
16. Fare clic sul Lock Button per tornare in modalità **User Mode**.
17. Fare clic sul pulsante **Delete Schedule** appena creato.
18. Inserire la data odierna nel formato richiesto nel riquadro **Schedule Date**.
19. Inserire **My First Schedule** nel riquadro **Schedule Name**.
20. Fare clic su **Submit** per avviare la **Request**.
21. Selezionare **OK** per uscire dalla pagina di della Request Process.
22. Verificare nella vista Operations o in Enterprise Manager vista Matrix che **My First Schedule** sia stata **Cancellata** dalla lista Daily.