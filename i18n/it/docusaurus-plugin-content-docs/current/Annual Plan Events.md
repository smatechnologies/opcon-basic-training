---
sidebar_label: 'Piani Annuali a Calendario - Aggiornamento con Eventi'
hide_title: 'false'
---

## Piani Annuali a Calendario - Aggiornamento con Eventi

<figure>
    <audio
        controls
        src="audiobasic/AnnualPlanCalendarsEventUpdates.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Due passaggi nell'utilizzo del calendario come annuale:
    * Creare/Mantenere un Calendario
    * Applicare il Calendario alla frequenza
* **A/O/B/N** non è configurabile
* Gli offsets sono in giorni lavorativi

<a href="imgbasic/357.png" target="_blank"><img src="imgbasic/357.png" width="500"></img></a>  
<a href="imgbasic/358.png" target="_blank"><img src="imgbasic/358.png" width="500"></img></a> 

### Eventi per i Calendari

* Le date possono essere aggiunte o rimosse da un calendario tramite Eventi

```
$CALENDAR:ADD,Company Holiday Calendar,05/25/2025; 05/25/2026; 05/25/2027; 05/25/2028; 05/25/2029,ocadm,opconxps
```

```
$CALENDAR:DEL,Company Holiday Calendar,05/25/2025; 05/25/2026; 05/25/2027; 05/25/2028; 05/25/2029,ocadm,opconxps
```

* Scenari:
    * Un Job deve essere eseguito 10 giorni lavorativi dopo il 15 del mese
    * Un Job nullo pianificato per l'esecuzione il 15 potrebbe inviare il seguente evento:
```
$CALENDAR:ADD,Company Holiday Calendar,[[$SCHEDULE DATE(+10wd)]],ocadm,opconxps
```
* Un Job necessita di essere eseguito il giorno lavorativo prima di un altro job schedulato per il 15esimo giorno (se lavorativo il giorno prima)
    * Strumento di calcolo delle date – **Chronoman**

<a href="imgbasic/359.png" target="_blank"><img src="imgbasic/359.png" width="500"></img></a>  