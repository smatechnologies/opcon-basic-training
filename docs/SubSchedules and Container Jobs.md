---
sidebar_label: 'SubSchedules and Container Jobs'
---

<!--
<figure>
    <audio
        controls
        src="audiobasic/SubScheduleAndContainerJobDefinitions.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
-->

### SubSchedule: Definition

* Schedule which can be embedded in another Schedule (or other Schedules)
	* Only built if called by a Container Job
	* Give Job-like properties to Schedules
* Are Multi-Instance by default
	* Can duplicate blocks of Jobs from a shared Resource

### SubSchedule Visualization

<a href="imgbasic/424.png" target="_blank"><img src="imgbasic/424.png" width="500"></img></a>

### Container Job: Definition

* Job that contains Sub-Schedule
* Grants SubSchedule all Job-like properties
	* Frequencies 
    :::tip
    **Remember**: Container Jobs are **JOBS**. Jobs need Frequencies to run!
    :::
	* Time Offsets (Other Frequency Details)
	* Dependencies
	* Events
	* Etc.
* Multiple Container Jobs can reference same SubSchedule
* Container Job will only Complete if all Jobs in SubSchedule have completed

### SubSchedule/Container Job: Setup

<!--
<figure>
    <audio
        controls
        src="audiobasic/SubScheduleContainerJobSetup.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
-->

* Create SubSchedule:
	* Create Schedule in Schedule Master
	* Mark Schedule as **SubSchedule**
* Embed SubSchedule within another Schedule by creating Container Job
	* Create Job using Container Job Type
	* Select SubSchedule that the Container Job will use

### SubSchedule Designation in Schedule Master

<a href="imgbasic/425.png" target="_blank"><img src="imgbasic/425.png" width="500"></img></a>  

### SubSchedule Container Job

<a href="imgbasic/426.png" target="_blank"><img src="imgbasic/426.png" width="500"></img></a>  

### SubSchedule Container Definition

<a href="imgbasic/427.png" target="_blank"><img src="imgbasic/427.png" width="500"></img></a>  

### Solution Manager - Container Job Task Details Screen

<a href="imgbasic/428.png" target="_blank"><img src="imgbasic/428.png" width="500"></img></a>  

### SubSchedule Usage Scenarios

<!--
<figure>
    <audio
        controls
        src="audiobasic/SubSchedulesScenarios.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
-->

### Scenario 1 - Multiple Runs/SubSchedule

* Same 5 Job processes needs to run exact same way 4 times each day
	* Instead of Looping Jobs or Events, use **SubSchedules**

<a href="imgbasic/429.png" target="_blank"><img src="imgbasic/429.png" width="500"></img></a>  

### Scenario 2 - Concurrent Processes

* 5 files need to be processed by arrival time
* No order for when each file needs to be processed
* Same set of jobs will process the files
* Files need to be processed one at a time

<a href="imgbasic/430.png" target="_blank"><img src="imgbasic/430.png" width="500"></img></a>  

### Scenario 3 - Daily and Monthly Process

* Daily Schedule has 5 processes that must run every working day
* If it is end of month, instead of running these 5 processes, Monthly Schedule, with 7 processes, must run **excluding** execution of Daily Schedule

<a href="imgbasic/431.png" target="_blank"><img src="imgbasic/431.png" width="500"></img></a>

### Scenario 3 - Daily and Monthly Process Solution

* Create Schedule with 2 SubSchedules
	* Daily SubSchedule with 5 jobs
	* Monthly SubSchedule with 7 jobs
	* Main Schedule will have both SubSchedules as Container jobs
	* Monthly Schedule has **Excludes Dependency** on Daily SubSchedule
    
:::note
This solution simplifies Frequencies definitions
:::

###### (Click Images to Enlarge)
