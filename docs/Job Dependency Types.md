---
sidebar_label: 'Job Dependency Types'
---

### Job Dependency Types

* **Requires** – The selected Job is required to exist and be in completed status before a dependent Job will run (default requires successful completion)
* **After** – The selected Job must be in completed status before a dependent Job will run **IF** it exists (default requires successful completion)
* **Excludes** – The selected Job will be removed from the Schedule on days the dependent Job is scheduled
* **Conflict** – Dependent Job will not start if the selected Job is currently running

![Job Dependency Types](../static/imgbasic/sm-job-dependency-types.png)

#### Requires

* Represented with a solid line
* Accounts for Jobs which are always part of the Workflow

#### After

* Represented with a dashed line
* Accounts for Jobs which are occasionally part of the Workflow
* If Job Dependencies must be tied upstream when After Dependencies are used

:::tip Example
* **Job 1** and **Job 3** have an everyday Frequency, **Job 2** is only built on Fridays
* **Job 3** has an After Dependency on **Job 2** because it is only occasionally present
* **Job 3** also needs a Dependency on **Job 1** to make sure **Job 1** runs before **Job 3** when **Job 2** does not exist
:::

#### Excludes

* Allows Monthly Jobs to automatically remove daily Jobs from a Schedule
* Alternative to **Negative Frequencies** using **Do Not Schedule**
  * Excludes Dependencies are not represented in Forecast Screens
  * To test, build a Schedule for the proper date and include the correct Jobs

#### Conflict

* Allows Jobs to wait only if a dependent Job is running
  * Identified with Pink Lines in chart 
  * If neither Job should start when the other is running, a Dependency should be set from **Job 1** to **Job 4** as well as from **Job 4** to **Job 1**

### Job Dependency Conditions

![Job Dependency Conditions](../static/imgbasic/sm-job-dependency-conditions.png)

#### Finished OK

* **Finished OK** option is valid for either the **Requires** or **After** Dependency Type
* If selected, the previous Job will need to have finished successfully before other Jobs can run.

#### Failed

* **Failed** option is valid for either the **Requires** or **After** Dependency Type
* If selected, will allow the previous Job to fail then process other Jobs that are part of that path

#### Ignore Exit Code

* **Ignore Exit Code** option is valid for either a **Requires** or a **After** Dependency Type
* If selected, the option will allow a selected Job to run once the Dependent Job is complete regardless of Exit Code status

### Additional Settings

#### Job Dependency - **Offset**

* Allows Cross Day Dependencies
* Uses Physical Day instead of Working Day by default
  * Unless the Job Dependency Offset Type in Server Options is set to **Occurrence** instead of default of **Calendar Days**

#### Job Dependency - **Based on Frequency**

* Allows a Dependency to be set only when the Job is built using a specific Frequency 
  * If no Frequency is selected, the Dependency is always true
  * Used in place of After Dependency

### Schedule Dependency Setting

#### Conflicts with other days

* Prevents a Schedule from opening until all Daily instances of that Schedule from previous days are complete
* Use **Late to Start** notices if this parameter is used


## Enterprise Manager

<details>

#### Dependency Types

![Picture214](../static/imgbasic/214.png)

#### After

![Picture215](../static/imgbasic/215.png)

#### Excludes

![Picture216](../static/imgbasic/216.png)

#### Conflict

![Picture217](../static/imgbasic/217.png)

#### Ignore Exit Code

![Picture218](../static/imgbasic/218.png)

#### Failed

![Picture219](../static/imgbasic/219.png)

![Picture220](../static/imgbasic/220.png)

#### Offset

![Picture221](../static/imgbasic/221.png)

![Picture222](../static/imgbasic/222.png)

#### Based on Frequency

![Picture223](../static/imgbasic/223.png)

#### Conflicts with other days

![Picture224](../static/imgbasic/224.png)

</details>