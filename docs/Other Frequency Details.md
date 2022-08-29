---
sidebar_label: 'Other Frequency Details'
---

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/OtherFrequencyDetails.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* All other details on the Frequency tab screen are set per Frequency

![Picture246](/imgbasic/246.png)

### Schedule Start Time

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/ScheduleStartTime.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* Start Time of a Schedule is the Earliest time any Job within the Schedule can start
  * All Job Offsets are added to a Schedule’s Start Time
* 24-hour clock
* All Job Offsets are added to this time

![Picture247](/imgbasic/247.png)

### Start Offset

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/StartOffset.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* Start Offset determines when a Job is allowed to start
  * Combined with the **Schedule Start Time** to determine earliest a Job can run without intervention
* Time-box is the Job offset 
  * Time in Green is combined offset
* **Absolute** – based on 24-hour clock
* **Relative** – offset starts once the Schedule is started

![Picture248](/imgbasic/248.png)

### Latest Start Offset

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/LatestStartOffset.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* If a Job does not run by this time, it is marked as “Missed Start Time” which is treated as a Cancelled Job

![Picture249](/imgbasic/249.png)

### Late to Start Offset

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/LateToStartOffset.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* Marks a Job as “Late to Start” if not started by this time
* Solely for Notification purposes

![Picture250](/imgbasic/250.png)

### Late to Finish Offset

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/LateToFinishOffset.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* Marks a Job as “Late to Finish” if not completed by this time
* Solely for Notification purposes

![Picture251](/imgbasic/251.png)

### Max Run Time 

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/MaxRunTime.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* Marks a Job as “Exceeded Max Runtime” if run longer than specified minutes
* Solely for Notification purposes

![Picture252](/imgbasic/252.png)

### Start Time Estimation

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/StartTimeEstimation.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* **Calculated** – Considers Dependencies and other workflow related items to estimate a Job start time
* **History** - Calculates Historical data for a specific Job
* **User Defined** - Values input by User 
  * No calculations done 
  * Useful for Threshold Jobs

![Picture253](/imgbasic/253.png)

### Solution Manager - Job Frequency Details

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/SolutionManagerJobFrequencyDetails.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* The Frequency panel in Solution Manager’s Job Configuration Screen provides access to Frequency information for a job
* Current options configurable in Solution Manager:
  * Offsets
  * Start Time Estimation options
  * Job Execution
    * SAM Priority
    * Max Run time
  * Failure/Retry options
  * Finish Ok options

![Picture254](/imgbasic/254.png)  
![Picture255](/imgbasic/255.png)  