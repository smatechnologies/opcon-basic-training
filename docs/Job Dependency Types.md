---
sidebar_label: 'Job Dependency Types'
---

### Job Dependency Types

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/JobDependencyTypes.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* **Requires** – The selected Job is required to exist and be in completed status before a dependent Job will run (default requires successful completion)
* **After** – The selected Job must be in completed status before a dependent Job will run **IF** it exists (default requires successful completion)
* **Excludes** – The selected Job will be removed from the Schedule on days the dependent Job is scheduled
* **Conflict** – Dependent Job will not start if the selected Job is currently running

![Picture214](/imgbasic/214.png)

### Job Dependency Types - **After**

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/JobDependencyTypesAfter.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* Accounts for Jobs which are occasionally part of the Workflow
* If Job Dependencies must be tied upstream when After Dependencies are used

Example:

* **Job 1** and **Job 3** have an everyday Frequency, **Job 2** is only built on Fridays
* **Job 3** has an After Dependency on **Job 2** because it is only occasionally present
* **Job 3** also needs a Dependency on **Job 1** to make sure **Job 1** runs before **Job 3** when **Job 2** does not exist

![Picture215](/imgbasic/215.png)

### Job Dependency Types - **Excludes**

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/JobDependencyTypesExcludes.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* Allows Monthly Jobs to automatically remove daily Jobs from a Schedule
* Alternative to **Negative Frequencies** using **Do Not Schedule**
  * Excludes Dependencies are not represented in Forecast Screens
  * To test, build a Schedule for the proper date and include the correct Jobs

![Picture216](/imgbasic/216.png)

### Job Dependency Types - **Conflict**

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/JobDependencyTypesConflict.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* Allows Jobs to wait only if a dependent Job is running
  * Identified with Pink Lines in chart 
  * If neither Job should start when the other is running, a Dependency should be set from **Job 1** to **Job 4** as well as from **Job 4** to **Job 1**

![Picture217](/imgbasic/217.png)

### Job Dependency - **Ignore Exit Code**

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/JobDependencyIgnoreExitCode.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>

* **Ignore Exit Code** option is valid for either a **Requires** or a **After** Dependency Type
* If selected, the option will allow a selected Job to run once the Dependent Job is complete regardless of Exit Code status

![Picture218](/imgbasic/218.png)

### Job Dependency - **Failed**

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/JobDependencyFailed.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* **Failed** option is valid for either the **Requires** or **After** Dependency Type
* If selected, will allow the previous Job to fail then process other Jobs that are part of that path

![Picture219](/imgbasic/219.png)

![Picture220](/imgbasic/220.png) 

### Job Dependency - **Offset**

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/JobDependencyOffset.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* Allows Cross Day Dependencies
* Uses Physical Day instead of Working Day by default
  * Unless the Job Dependency Offset Type in Server Options is set to **Occurrence** instead of default of **Calendar Days**

![Picture221](/imgbasic/221.png)

![Picture222](/imgbasic/222.png) 

### Job Dependency - **Based on Frequency**

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/JobDependencyBasedOnFrequency.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* Allows a Dependency to be set only when the Job is built using a specific Frequency 
  * If no Frequency is selected, the Dependency is always true
  * Used in place of After Dependency

![Picture223](/imgbasic/223.png) 

### Conflicts with other days

* Prevents a Schedule from opening until all Daily instances of that Schedule from previous days are complete
* Use **Late to Start** notices if this parameter is used

![Picture224](/imgbasic/224.png)