---
sidebar_label: 'Configurazione Input Utente'
hide_title: 'false'
---

## Configurazione Input Utente

* Dopo che una variabile è stata definita all'interno dell'evento OpCon, diventerà disponibile come input dell'utente
    * I campi di input dell'utente verranno visualizzati quando si fa clic sul pulsante della Service Request

<a href="imgbasic/SelfServiceRequestUserInputMainScreen.png" target="_blank"><img src="imgbasic/SelfServiceRequestUserInputMainScreen.png" width="500"></img></a>

* Sono disponibili diverse opzioni per i tipi di input utente:
    * Text
    * Number
    * Date
    * Choice
    * Text Collection
    * Master Schedule
    * Master Job

### Configurazione Input Utente

Per configurare un Imput Utente (User Inputs):
    
* Fare doppio clic su uno specifico User Input nella pagina di definizione della Service Request
o
* Selezionare lo User Input nella lista e fare clie sul pulsant **Blue** ```Edit``` sopra la lista
* Per impostazione predefinita, il sistema imposta una nuova variabile come tipo ```Text``` senza validazione
    * Ciò significa che gli utenti saranno in grado di digitare qualsiasi cosa nel campo
    * Il contenuto di quel campo di testo verrà inserito nell'evento OpCon appena prima che il SAM lo riceva
* L'ordine degli input dell'utente viene modificato utilizzando le frecce su/giù nella parte superiore dell'elenco degli input dell'utente

<a href="imgbasic/SelfServiceUserInputSelect.png" target="_blank"><img src="imgbasic/SelfServiceUserInputSelect.png" width="500"></img></a>

<a href="imgbasic/SelfServiceUserInputSelectType.png" target="_blank"><img src="imgbasic/SelfServiceUserInputSelectType.png" width="500"></img></a>

### Configurazione degli input utente di testo

<a href="imgbasic/SelfServiceUserInputText.png" target="_blank"><img src="imgbasic/SelfServiceUserInputText.png" width="500"></img></a>

* Selezionare ```Text``` nello **User Input** Type nell'elenco a discesa
* Specificare le regole di convalida per lo User Input, utilizzando le seguenti opzioni:
    * **Secret**: consente all'utente di specificare che questo User Input è un campo segreto **password/secret** nel qual caso il valore inserito dall'utente verrà mascherato
        * Uno di questi casi d'uso sarebbe l'inserimento di una password da qualche parte negli eventi da inviare a OpCon (es. come job instance property)
    * **Minimum Characters**: consente di specificare una restrizione sul numero minimo dei caratteri
    * **Maximum Characters**: consente di specificare una restrizione sul numero minimo dei caratteri
    * **Invalid Characters**: consente di specifica eventuali caratteri non ammessi
    * **Regular Expression Pattern**: consente di creare un modello di corrispondenza di espressioni regolari per convalidare l'imput
    * **Custom Error Message**: consente di definire un messaggio di errore personalizzato da mostrare in caso di un'eccezione di convalida del testo dell'espressione regolare
        * Ad esempio, il seguente potrebbe essere un messaggio di errore personalizzato fornito agli utenti quando hanno immesso formati di numeri di telefono non corretti: "Inserisci un numero di telefono di 10 cifre con trattini (ad es. 281-446-5000)"
* Specificare come formattare il valore iniettato all'interno dell'evento OpCon, utilizzando le seguenti opzioni di formattazione dell'output:
    * **Characters to Strip**: consente di specificare quale/i carattere/i rimuovere dall'input utente (dopo che è stato convalidato))
    * **Padding**: consente di specificare la direzione del padding (sinistra/destra), la lunghezza del padding e il carattere utilizzato per il pad

### Configurazione di Input Numerici

<a href="imgbasic/SelfServiceUserInputNumber.png" target="_blank"><img src="imgbasic/SelfServiceUserInputNumber.png" width="500"></img></a>

* Selezionare ```Number``` nell'elenco a discesa User Input Type
* Specificare le regole di convalida per l'input utente, utilizzando le seguenti opzioni::
    * **Minimum**: consente all'utente di specificare il valore minimo consentito
    * **Maximum**: consente all'utente di specificare il valore massimo consentito

### Configurazione di Input tipo Data

<a href="imgbasic/SelfServiceUserInputDate.png" target="_blank"><img src="imgbasic/SelfServiceUserInputDate.png" width="500"></img></a>

* Selezionare ```Date``` nell'elenco a discesa User Input Type
* Imposta un intervallo di date per l'input utente, utilizzando le seguenti opzioni:
    * Start Date: consente di specificare una data di inizio per l'intervallo. Se configurato, gli utenti non saranno in grado di specificare o inserire una data precedente alla data di inizio specificata
    * Today: facoltativamente, l'utente può utilizzare l'interruttore a levetta Oggi per impostare il giorno corrente come data di inizio
    * End Date: consente all'utente di specificare una data di fine per l'intervallo. Se configurato, gli utenti non saranno in grado di specificare o inserire una data successiva alla data di fine specificata
    * Today: facoltativamente, l'utente può utilizzare l'interruttore a levetta Oggi per impostare il giorno corrente come Data di fine
* Definire un formato di output o seleziona uno dei seguenti formati predefiniti dall'elenco a discesa:
    * yyyy/MM/dd (2009/06/15)
    * yyyy-MM-dd (2009-06-15)
    * EEEE MMMM d yyyy (Monday June 15 2009)
    * E MMMM d yyyy (Mon June 15 2009)
    * MM/dd/yyyy (06/15/2009)
    * M/d/yy (6/15/09)
    * MMMM d yyyy (June 15 2009)

Quando si impostano modelli di data personalizzati (ad esempio, ```gg/mm/aaaa```, ```mm/gg/aaaa```, ```aaaa-mm-gg```, ecc.), l'utente può utilizzare le seguenti lettere del modello definite (tutti gli altri caratteri da 'A' a 'Z' e da 'a' a 'z' sono riservati):

* I modelli più comunemente usati possono essere utilizzati da una combinazione di y (che rappresenta una cifra dell'anno), M (che rappresenta una cifra del mese) e d (che rappresenta una cifra della data)
* Esempi di modelli sono:
    * dd/MM/yyyy 
    * dd-MM-yyyy 
    * MM/dd/yyyy 
    * yyyy-MM-dd
    * yyMMdd

### Configurazione degli input utente a scelta

<a href="imgbasic/SelfServiceUserInputChoiceMain.png" target="_blank"><img src="imgbasic/SelfServiceUserInputChoiceMain.png" width="500"></img></a>

<a href="imgbasic/SelfServiceUserInputChoiceConfigure.png" target="_blank"><img src="imgbasic/SelfServiceUserInputChoiceConfigure.png" width="500"></img></a>

* Select ```Choice``` in the User Input Type drop-down list

* The Choice toolbar options define and order the set of values that will be presented to Users for selection when they run the Service Request
    * The ```Name``` field represents what is displayed the the User, while the ```Value``` field represents what is submitted to OpCon.

### Configurazione degli input utente Text Collection

<a href="imgbasic/SelfServiceUserInputTextCollection.png" target="_blank"><img src="imgbasic/SelfServiceUserInputTextCollection.png" width="500"></img></a>

* Selezionare ```Text Collection``` nell'elenco a discesa User Input Type
* Specificare le regole di convalida per l'input utente, utilizzando le seguenti opzioni:
    * **Restrict Duplicates**: impedisce di immettere lo stesso valore più volte
    * **Delimiter**:  consente di specificare il carattere speciale utilizzato per separare i valori definiti dall'utente quando concatenati a una singola stringa durante l'inserimento nell'evento OpCon per l'elaborazione da parte del SAM
    * **Minimum Characters**: consente di specificare una restrizione di lunghezza minima dei caratteri
    * **Maximum Characters**: consente di specificare una limitazione della lunghezza massima dei caratteri
    * **Invalid Characters**: consente di specificare eventuali caratteri non validi ```[limitati]```
    * **Regular Expression Pattern**: consente all'utente di creare un modello di corrispondenza di espressioni regolari per convalidare ciò che l'utente ha inserito nel campo di testo prima che venga iniettato
    * **Custom Error Message**: consente all'utente di definire un messaggio di errore personalizzato che verrà visualizzato agli utenti se viene generata un'eccezione di convalida del testo dell'espressione regolare
        
:::note Esempio
Il seguente potrebbe essere un messaggio di errore personalizzato fornito agli utenti quando hanno immesso formati di numeri di telefono non corretti: "Inserisci un numero di telefono di 10 cifre con trattini (ad es. 281-446-5000)"
:::

### Configurazione degli input utente Master Schedule

<a href="imgbasic/SelfServiceUserInputMasterSchedule.png" target="_blank"><img src="imgbasic/SelfServiceUserInputMasterSchedule.png" width="500"></img></a>

* Selezionare un **Master Schedule** nell'elenco a discesa User Input Type

### Configurazione degli input utente Master Job

<a href="imgbasic/SelfServiceUserInputMasterJob.png" target="_blank"><img src="imgbasic/SelfServiceUserInputMasterJob.png" width="500"></img></a>

* Selezionare un Master Job nell'elenco a discesa **User Input Type**