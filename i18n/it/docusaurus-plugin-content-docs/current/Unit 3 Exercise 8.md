---
sidebar_label: 'Unità 3 Esercizio 8'
hide_title: 'false'
---

## Esercizio 8: Notification Manager

##### Obiettivo:

In **Notification Manager**, creare una Notifica, definendo un gruppo principale **Root Group** chiamata ```ALL MACHINES``` e aggiungendo ```WINDOWS``` and ```UNIX``` machine.

Aggiungere un fattore scatenante a livello di macchina (```Machine Trigger```) per ```Una macchina che diventa Online (Marked Up)```.

Inviare una mail a ```smauser@congo.local``` con iul messaggio : “TESTING EMAIL NOTIFICATION”.

Fare click sul pulsante **Test** per testare l'invio. Aprire Thunderbird per verificare la corretta notifica..


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menù **Management** fare click su **Notification Manager**.
2. Fare clic nella scheda **Machines**.
3. Fare clic con il pulsante destro del mouse nell'area bianca sotto la scheda Macchine e selezionare **Add Root Group**.
4. Digitare il nome del gruppo di macchine (ad es. Tutte le macchine) e fare clic su **OK**.
5. Sul lato destro dello schermo, espandi Sistemi operativi e seleziona tutte le caselle accanto a **Machine(s)**.
6. Fare clic sul pulsante **Save**.
7. Fare clic con il pulsante destro sulla cartella **Group** creata al punto 4. Selezionare ```Add Machine Trigger```, e selezionare il trigger relativo and una macchina contrassegnata come connessa - ```Machine Marked Up Trigger```.
8. Nelle definizioni della notifica (**Notification Definitions**) sulla destra:
9. Selezionare la spunta nell'opzione **Send Email (SMTP)**.
10. Fare clic nella schea **Email**.
11. nel campo to inserire : ```smauser@congo.local```.
12. Inseire un **Subject**.
13. Nel **Messaggio**, inserire **Testing email notification**.
14. Fare clic sul pulstante **Test** per testare il risultato delle notifica in anteprima
15. Fare clic sul pulsante **Save**.
16. Aprire il client di posta **Thunderbird** e controllare la casella della posta in arrivo.

</details>