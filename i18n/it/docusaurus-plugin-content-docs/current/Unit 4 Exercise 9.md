---
sidebar_label: 'Unità 4 Esercizio 9'
hide_title: 'false'
---

### Esercizio 9: SMA File Transfer (SMAFT)

##### Obiettivo: 

Nello Schedule **MY FIRST SCHEDULE**, creare un job con nome **SMAFT Job 1** di tipo (**Job Type**) ```File Transfer```. La macchina origine è la ```SUSEVM```.

Il Source File è: ```/usr/local/files/FileToSend.txt```

La macchina di destinazione (**Destination Information Machine**) is: ```SMATraining```.

Il **Destination File** è: ```C:\SMA File Transfer\FileToSend.txt```

Sia per il **Source** che per il **Destination Data Type**, scegliere ```ASCII``` e Sovrascrivere se il File esiste (**Overwrite If File Exists**).

Assicurarsi di dare al lavoro una frequenza.

In Matrix View, aggiungere il Job allo Schedule e Rilasciarlo per eseguirlo Today. Quando il Job termina, controllare il percorso per assicurarsi che il file sia stato trasferito.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E9.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menù **Administration** fare doppio clic su **Job Master**.
2. Nell'elenco a discesa **Schedule** selezionare **My First Schedule**.
3. Fare clic sul pulsante **Add** nella barra degli strumenti di **Job Master**.
4. Nella casella di testo **Name** inserire **SMAFT Job 1**.
5. Nell'elenco a discesa **Job Type** selezionare **File Transfer**.
6. Nell'elenco a discesa **Source Information Machine** selezionare la macchina ```UNIX``` che è stata creata precedentemente la provenienza del file.
7. Nell'elenco a discesa **Source Information User** selezionare ```0/0``` per specificare l'utente da impersonare sulla macchina origine.
8. Nella casella di testo **Source Information File**, immettere quanto segue per il percorso e il nome del file da trasferire:

```
/usr/local/files/FileToSend.txt
```

9. Nell'elenco a discesa **Destination Information Machine** selezionare ```SMATraining``` machine to specify where the file is going to.
10. Nell'elenco a discesa **Destination Information User** selezionare ```SMATRAINING\SMAUSER``` to specify who the sending machine will impersonate.
11. Nella casella di testo **Destination Information File**, immettere quanto segue per il percorso e il nome del file da trasferire:

```
C:\SMA File Transfer\FileToSend.txt
``` 

12. Fare clic sulla scheda **Options** Tab.
13. Nell'elenco a discesa **Source Data Type** selezionare ```ASCII```.
14. Nell'elenco a discesa **Destination Data Type** selezionare ```ASCII```.
15. Nell'elenco a discesa **If File Exists** selezionare **Overwrite**.
16. Mantenere inalterate **Maximum Transfer Rate**, **Compression**, **Encryption**.
17. Fare clic sul pulsante **Save**.
18. Assegnare al Job una **Frequency** che ne consenta l'esecuzione oggi e chiudere la scheda **Job Master**.
19. Aprire **Esplora file di Windows** e controllare che la cartella ```C:\SMA File Transfer``` sul server di OpCon sia vuota.
20. In una delle Viste **Operations** Aggiungere questo Job allo Schedule odierno permettendone l'esecuzione in stato Rilasciato.
21. Quando il Job termina correttamente, verificare che il ```FileToSend.txt``` sia ora presente nella cartella ```C:\SMA File Transfer```.

</details>