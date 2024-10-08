---
sidebar_label: 'Frequency Overview'
---

## Overview

* Frequencies reference **two settings** from the **Schedule Master** to determine what is considered a **Working Day**:
  * Workdays per Week
  * Holiday Calendars
* Selections for **Workdays per Week** and a **Holiday Calendar** determine the **Non-Working Days** for that Schedule

![](../static/imgbasic/Frequency.png)

## Assiging Frequency to a Job

* Click the **Add** button under the **Frequency list** to create a **New Frequency**   
* Select an existing Frequency from the **Inactive** list and move it to the **Active** list

![](../static/imgbasic/SM_Frequency_Master_Job.png)

## Frequency Manager Wizard

* Always start with **When to Schedule**
  * Depending on selection, different fields will be available
  * Select desired days, interval, occurrence, or period as needed

![](../static/imgbasic/SM_Frequency_Manager_Wizard_Main.png)

### When to Schedule Options

![](../static/imgbasic/SM_Frequency_WhentoSchedule.png)

### AOBN Flag

* **A/O/B/N** flag will tell a Frequency how to react if the selected day is non-working day
  * **After Date** will run a Job on the first working day after a non-working day
  * **On Date** will run a Job on a non-working day anyway
  * **Before Date** will run a Job on the first working day prior to a non-working day
  * **Not Schedule** will simply not run a Job on a non-working day

![](../static/imgbasic/SM_AOBN_Flag.png)



## Enterprise Manager

<details>

### Overview

* After clicking the **Add** button under **Frequency list**:
  * Create **New Frequency**   
   or
  * Select **Existing Frequency**

:::caution
Always start with **“When to Schedule”**
:::

* Depending on selection, different fields will be available
* Select desired days, interval, occurrence, or period

![](../static/imgbasic/231.png)

![](../static/imgbasic/232.png)

![](../static/imgbasic/233.png)

* Frequencies reference two settings from a Schedule to determine what is considered a working day
  * Workdays per Week
  * Holiday Calendars
* Selections for workdays per week and a Holiday Calendar will determine non-working days for that Schedule

![](../static/imgbasic/234.png)

![](../static/imgbasic/235.png)

#### Frequency Definition Wizard - A/O/B/N

* **A/O/B/N** flag will tell a Frequency how to react if the selected day is non-working day
  * **After Date** will run a Job on the first working day after a non-working day
  * **On Date** will run a Job on a non-working day anyway
  * **Before Date** will run a Job on the first working day prior to a non-working day
  * **Not Schedule** will simply not run a Job on a non-working day

![](../static/imgbasic/236.png)

</details>