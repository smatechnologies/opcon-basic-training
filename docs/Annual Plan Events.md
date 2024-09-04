---
sidebar_label: 'Annual Plan Events'
---

## Annual Plan Calendar - Event Updates


* Two Steps in Using Annual Plan Calendar:
    * Create/Maintain a Calendar
    * Apply the Calendar to frequency
* **A/O/B/N** is not configurable 
* Offsets use workdays

## Calendar Events

* Dates can be added or removed from a Calendar through Events

```
$CALENDAR:ADD,Company Holiday Calendar,05/25/2025; 05/25/2026; 05/25/2027; 05/25/2028; 05/25/2029
```

```
$CALENDAR:DEL,Company Holiday Calendar,05/25/2025; 05/25/2026; 05/25/2027; 05/25/2028; 05/25/2029
```

* Scenarios:
    * A Job needs to run 10 working days after the 15th of month 
    * A Null Job scheduled to run on the 15th could submit:
```
$CALENDAR:ADD,Company Holiday Calendar,[[$SCHEDULE DATE(+10wd)]]
```
* A Job needs to run the working day before a different Job scheduled for the 15th-B
    * Date calculation tool – **Chronoman**

### Calendar Add Event Definition

![](../static/imgbasic/sm-calendar-add-event.png)



## Enterprise Manager

<details>

#### Annual Plan Frequency

![](../static/imgbasic/357.png)

#### Forecast Annual Plan

![](../static/imgbasic/358.png)

#### Calendar Add Event Definition

![](../static/imgbasic/359.png)

</details>