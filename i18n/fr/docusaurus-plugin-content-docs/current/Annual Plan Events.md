---
sidebar_label: 'Calendrier du plan annuel'
hide_title: 'false'
---

## Calendrier du plan annuel - Mises à jour des events

<figure>
    <audio
        controls
        src="audiobasic/AnnualPlanCalendarsEventUpdates.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Deux étapes pour utiliser le calendrier du plan annuel:
    * Créer / gérer un calendrier
    * Appliquer le calendrier à la fréquence
* **A / O / B / N** n'est pas configurable
* Les décalages utilisent les jours ouvrables

<a href="imgbasic/357.png" target="_blank"><img src="imgbasic/357.png" width="500"></img></a>  
<a href="imgbasic/358.png" target="_blank"><img src="imgbasic/358.png" width="500"></img></a> 

### Calendrier des events

* Des dates peuvent être ajoutées ou supprimées d'un calendrier via des events

```
$CALENDAR:ADD,Company Holiday Calendar,05/25/2025; 05/25/2026; 05/25/2027; 05/25/2028; 05/25/2029,ocadm,opconxps
```

```
$CALENDAR:DEL,Company Holiday Calendar,05/25/2025; 05/25/2026; 05/25/2027; 05/25/2028; 05/25/2029,ocadm,opconxps
```

* Scénarii :
    * Un Job doit s'exécuter 10 jours ouvrables après le 15 du mois
    * Un Job nul dont l'exécution est prévue le 15 pourrait soumettre :
        * ```$CALENDAR:ADD,Company Holiday Calendar,[[$SCHEDULE DATE(+10wd)]],ocadm,opconxps```
    * Un Job doit être exécuté le jour ouvrable précédant un autre Job programmé pour le 15-B
        * Outil de calcul de la date - **Chronoman**

<a href="imgbasic/359.png" target="_blank"><img src="imgbasic/359.png" width="500"></img></a>  