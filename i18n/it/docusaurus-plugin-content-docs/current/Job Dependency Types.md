---
sidebar_label: 'Job Dependency Types'
---

### Job Dependency Types

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypes.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Requires** – The selected Job is required to exist and be in completed status before a dependent Job will run (default requires successful completion)
* **After** – The selected Job must be in completed status before a dependent Job will run **IF** it exists (default requires successful completion)
* **Excludes** – The selected Job will be removed from the Schedule on days the dependent Job is scheduled
* **Conflict** – Dependent Job will not start if the selected Job is currently running

<a href="imgbasic/214.png" target="_blank"><img src="imgbasic/214.png" width="500"></img></a>

### Job Dependency Types - **After**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypesAfter.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Accounts for Jobs which are occasionally part of the Workflow
* If Job Dependencies must be tied upstream when After Dependencies are used

Example:

* **Job 1** and **Job 3** have an everyday Frequency, **Job 2** is only built on Fridays
* **Job 3** has an After Dependency on **Job 2** because it is only occasionally present
* **Job 3** also needs a Dependency on **Job 1** to make sure **Job 1** runs before **Job 3** when **Job 2** does not exist

<a href="imgbasic/215.png" target="_blank"><img src="imgbasic/215.png" width="500"></img></a>

### Job Dependency Types - **Excludes**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypesExcludes.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Allows Monthly Jobs to automatically remove daily Jobs from a Schedule
* Alternative to **Negative Frequencies** using **Do Not Schedule**
  * Excludes Dependencies are not represented in Forecast Screens
  * To test, build a Schedule for the proper date and include the correct Jobs

<a href="imgbasic/216.png" target="_blank"><img src="imgbasic/216.png" width="500"></img></a>

### Job Dependency Types - **Conflict**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypesConflict.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Allows Jobs to wait only if a dependent Job is running
  * Identified with Pink Lines in chart 
  * If neither Job should start when the other is running, a Dependency should be set from **Job 1** to **Job 4** as well as from **Job 4** to **Job 1**

<a href="imgbasic/217.png" target="_blank"><img src="imgbasic/217.png" width="500"></img></a>

### Job Dependency - **Ignore Exit Code**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyIgnoreExitCode.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Ignore Exit Code** option is valid for either a **Requires** or a **After** Dependency Type
* If selected, the option will allow a selected Job to run once the Dependent Job is complete regardless of Exit Code status

<a href="imgbasic/218.png" target="_blank"><img src="imgbasic/218.png" width="500"></img></a>

### Job Dependency - **Failed**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyFailed.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Failed** option is valid for either the **Requires** or **After** Dependency Type
* If selected, will allow the previous Job to fail then process other Jobs that are part of that path

<a href="imgbasic/219.png" target="_blank"><img src="imgbasic/219.png" width="500"></img></a>  
<a href="imgbasic/220.png" target="_blank"><img src="imgbasic/220.png" width="500"></img></a>  

### Job Dependency - **Offset**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Allows Cross Day Dependencies
* Uses Physical Day instead of Working Day by default
  * Unless the Job Dependency Offset Type in Server Options is set to **Occurrence** instead of default of **Calendar Days**

<a href="imgbasic/221.png" target="_blank"><img src="imgbasic/221.png" width="500"></img></a>  
<a href="imgbasic/222.png" target="_blank"><img src="imgbasic/222.png" width="500"></img></a>  

### Job Dependency - **Based on Frequency**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyBasedOnFrequency.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Allows a Dependency to be set only when the Job is built using a specific Frequency 
  * If no Frequency is selected, the Dependency is always true
  * Used in place of After Dependency

<a href="imgbasic/223.png" target="_blank"><img src="imgbasic/223.png" width="500"></img></a>  

### Conflicts with other days

* Prevents a Schedule from opening until all Daily instances of that Schedule from previous days are complete
* Use **Late to Start** notices if this parameter is used

<a href="imgbasic/224.png" target="_blank"><img src="imgbasic/224.png" width="500"></img></a>


###### (Click Images to Enlarge)