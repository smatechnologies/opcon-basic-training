---
sidebar_label: 'Frequency Definition Wizard'
---

### Overview

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/FrequencyDefinitionWizardOverview.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>

* After clicking the **Add** button under **Frequency list**:
  * Create **New Frequency**   
   or
  * Select **Existing Frequency**

:::caution
Always start with **“When to Schedule”**
:::

* Depending on selection, different fields will be available
* Select desired days, interval, occurrence, or period

![Picture231](/imgbasic/231.png)  

![Picture232](/imgbasic/232.png)  

![Picture233](/imgbasic/233.png)

* Frequencies reference two settings from a Schedule to determine what is considered a working day
  * Workdays per Week
  * Holiday Calendars
* Selections for workdays per week and a Holiday Calendar will determine non-working days for that Schedule

![Picture234](/imgbasic/234.png)  
 
![Picture235](/imgbasic/235.png)

### Frequency Definition Wizard - A/O/B/N

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/FrequencyDefinitionWizardAOBN.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>

* **A/O/B/N** flag will tell a Frequency how to react if the selected day is non-working day
  * **After Date** will run a Job on the first working day after a non-working day
  * **On Date** will run a Job on a non-working day anyway
  * **Before Date** will run a Job on the first working day prior to a non-working day
  * **Not Schedule** will simply not run a Job on a non-working day

![Picture236](/imgbasic/236.png)