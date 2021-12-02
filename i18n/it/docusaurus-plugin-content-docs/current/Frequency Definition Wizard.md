---
sidebar_label: 'Frequency Definition Wizard'
---

### Overview

<figure>
    <audio
        controls
        src="audiobasic/FrequencyDefinitionWizardOverview.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* After clicking the **Add** button under **Frequency list**:
  * Create **New Frequency**   
   or
  * Select **Existing Frequency**

:::caution
Always start with **“When to Schedule”**
:::

* Depending on selection, different fields will be available
* Select desired days, interval, occurrence, or period

<a href="imgbasic/231.png" target="_blank"><img src="imgbasic/231.png" width="500"></img></a>  
<a href="imgbasic/232.png" target="_blank"><img src="imgbasic/232.png" width="500"></img></a>  
<a href="imgbasic/233.png" target="_blank"><img src="imgbasic/233.png" width="500"></img></a>  

* Frequencies reference two settings from a Schedule to determine what is considered a working day
  * Workdays per Week
  * Holiday Calendars
* Selections for workdays per week and a Holiday Calendar will determine non-working days for that Schedule

<a href="imgbasic/234.png" target="_blank"><img src="imgbasic/234.png" width="250"></img></a>  
<a href="imgbasic/235.png" target="_blank"><img src="imgbasic/235.png" width="500"></img></a>  

### Frequency Definition Wizard - A/O/B/N

<figure>
    <audio
        controls
        src="audiobasic/FrequencyDefinitionWizardAOBN.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **A/O/B/N** flag will tell a Frequency how to react if the selected day is non-working day
  * **After Date** will run a Job on the first working day after a non-working day
  * **On Date** will run a Job on a non-working day anyway
  * **Before Date** will run a Job on the first working day prior to a non-working day
  * **Not Schedule** will simply not run a Job on a non-working day

<a href="imgbasic/236.png" target="_blank"><img src="imgbasic/236.png" width="500"></img></a>

###### (Click Images to Enlarge)