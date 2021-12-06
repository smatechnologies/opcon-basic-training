---
sidebar_label: 'Unità 2 Esercizio 4 e 5'
hide_title: 'false'
---

## Esercizio 4: Steps to Modify Machine Status
### & 
## Esercizio 5: Fix the Communication Problem

##### Obiettivo:

Nello stato macchine (**Machines Status**), avviare la comunicazione (Start Communication) per la macchina ```SUSEVM```.

(_NIENTE PANICO – La comunicazione non verrà stabilita a causa di un errore che andremo a correggere_).

Nel menù information espandere la voce **Logs**. Aprire il **Netcom Log** e trovare l'errore ```ConnectToMachine()``` per verificare l'anomalia.

Ritornare in **Machines Status**, Interrompere la comunicazione con la macchina ```SUSEVM```. Editare la Macchina e cambiare il **Socket Number** a ```3100```.

Riavviare la comunicazione con la macchina ```SUSEVM```. La connessione dovrebbe ora avvenire con successo.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E4and5.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

### Esercizio 4

1. Nel menù Operation selezionare **Machines Status**.
2. Fare click con pulsante destro sulla macchina ```SUSEVM``` e selezionare **Start Communication**.
    * il click con il pulsante sinistro sulla Macchina effettuerà il refresh dello stato della comunicazione.
3. Premere ```F5``` per aggiornare lo stato della comunicazione.

:::note Nota
Niente panico! la comunicazione non avverrà
:::

### Esercizio 5

1. Assicurarsi che la scheda **Machines Status** sia aperto.
2. Nel Menù Information, espandere la sezione Logs.
3. Effettuare doppio click sul **Netcom Log**.
4. Apparirà un pop-up che mostra il log Netcom in aggiornamento automatico.
5. Cercare nel log la seguente segnalazione:

```
ConnectToMachine() – Exception happens at machine [SUSEVM]: 
A connection attempt failed because the connected party did not properly respond after a period of time, 
or established connection failed because the connected host has failed to respond [[IP ADDRESS:PORT]]
```

6. Ritornare nella scheda **Machines Status**, fare click con il tasto destro sulla macchina ```SUSEVM``` e selezionare **Stop Communication**.
7. Sempre nella scheda **Machines Status**, fare click con il tasto destro sulla macchina ```SUSEVM``` e selezionare **Edit Machine**.
8. Cambiare il valore del socket in ```3100```.
9. Fare click sul pulsante **Save**.
10. Chiudere la scheda **Machines**.
11. Ritornare nella scheda **Machines Status**, tasto destro del mouse sulla macchina ```SUSEVM``` e selezionare **Start Communication**.
12. Aggiornare la schermata. La macchina ```SUSEVM``` dovrebbe ora comunicare.
13. Chiudere la scheda ```SMANetCom.log``` e la scheda **Machines Status**.

</details>