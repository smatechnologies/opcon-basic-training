---
sidebar_label: 'Eventi basati sulla Job Exit Description'
hide_title: 'false'
---

## Eventi basati sulla Job Exit Description

<figure>
    <audio
        controls
        src="audiobasic/EventsBasedOnJobExitDescription.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Quando si definisce un evento in base alla Exit Description, è necessario impostare :
    * **Operatore di Confronto**
        * Fare attenzione nel caso in cui si utilizzi come operatore di confronto ```Equal To```
    * Ciascun sistema operativo ha regole per i nomi e i valori delle Exit Description
    * ```UNIX``` – Utilizzare **Contains** a meno di non utilizzare **l'Exit Code completo**
        * Se è selezionato "Uguale a", è richiesto **l'Exit Code completo** _inclusi gli zeri precedenti e gli eventuali due punti, i segni più, ecc._
    * **Windows** – Utilizzare le cifre finali
        * ```100``` in luogo di ```000000000100```

<a href="imgbasic/354.png" target="_blank"><img src="imgbasic/354.png" width="500"></img></a>  
<a href="imgbasic/355.png" target="_blank"><img src="imgbasic/355.png" width="500"></img></a>  
