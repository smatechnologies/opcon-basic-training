---
sidebar_panel: 'Annual Plan Events'
---

### Annual Plan Calendar - Event Updates

<figure>
    <audio
        controls
        src="audiobasic/AnnualPlanCalendarsEventUpdates.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Two Steps in Using Annual Plan Calendar:
    * Create/Maintain a Calendar
    * Apply the Calendar to frequency
* **A/O/B/N** is not configurable 
* Offsets use workdays

<a href="imgbasic/357.png" target="_blank"><img src="imgbasic/357.png" width="500"></img></a>  
<a href="imgbasic/358.png" target="_blank"><img src="imgbasic/358.png" width="500"></img></a> 

### Calendar Events

* Dates can be added or removed from a Calendar through Events

```
$CALENDAR:ADD,Company Holiday Calendar,05/25/2025; 05/25/2026; 05/25/2027; 05/25/2028; 05/25/2029,ocadm,opconxps
```

```
$CALENDAR:DEL,Company Holiday Calendar,05/25/2025; 05/25/2026; 05/25/2027; 05/25/2028; 05/25/2029,ocadm,opconxps
```

* Scenarios:
    * A Job needs to run 10 working days after the 15th of month 
    * A Null Job scheduled to run on the 15th could submit:
```
$CALENDAR:ADD,Company Holiday Calendar,[[$SCHEDULE DATE(+10wd)]],ocadm,opconxps
```
* A Job needs to run the working day before a different Job scheduled for the 15th-B
    * Date calculation tool – **Chronoman**

<a href="imgbasic/359.png" target="_blank"><img src="imgbasic/359.png" width="500"></img></a>  