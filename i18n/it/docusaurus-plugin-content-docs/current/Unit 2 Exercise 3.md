---
sidebar_label: 'Unità 2 Esercizio 3'
hide_title: 'false'
---

### Esercizio 3: Passi per definire una Macchina UNIX

##### Obiettivo:

Aggiungere una macchina ```UNIX``` nell' Enterprise Manager. Nominare la macchina ```SUSEVM```. Impostare il **Machine Type** come ```UNIX``` e il **Socket Number** come ```3111```. Definire l'inirizzio ip (**IP Address**) con le informazioni fornite dall'istruttore.

Nella sezione **Communication Settings**, aggiornare il **JORS Port Number** a ```3110```. Impostare il **File Transfer Role** a ```BOTH```. Impostare **File Transfer Port Number (Non-TLS)** a ```3110```.

Verificare che tutte le impostazioni siano state salvate.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel Menù **Administration**, fare doppio click su **Machines**.
2. Fare click sul pulsante **Add** nella casella degli strumenti della schermata **Machines**.
3. Nella casella di testo **Name**, inserire ```SUSEVM```.
4. Nella casella di testo **Documentation**, inserire **This is My First UNIX machine**.
5. Nella lista a discesa **Machine Type**, selezionare ```UNIX```.
6. Assicurarsi che il **Socket Number** sia ```3111```.
7. Impostare l'**IP address** con l'indirizzo indicato dall'istruttore.
8. Fare click sul pulsante **Save** nella casella degli strumenti della schermata **Machines**.
9. Fare click sul collegamento al pannello delle impostazioni avanzate **Open Advanced Settings Panel**.
10. Selezionare la scheda **Communication Settings**.
11. Selezionare la riga **JORS Port Number**:
    * Nella casella d testo in basso nella schermata **Advanced Machine Properties**, definire ```3110``` per il **JORS Port number**.
    * Fare click sul pulsante **Update**.
12. Selezionare la scheda **File Transfer Settings**.
13. Selezionare la riga **File Transfer Role**:
    * Selezionare Both per il **File Transfer Role**.
    * Fare click sul pulsante **Update**.
    * Cambiare la porta per il **File Transfer Port Number (Non-TLS)** a ```3110```.
    * Fare click sul pulsante **Update**.
    * Fare click sul punsante **Save**.
14. Close the **Machines** tab.

</details>