---
sidebar_label: 'Looping Jobs'
---

### Looping Jobs on Success

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/LoopingJobsOnSuccess.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>

* The same Job can run multiple times throughout the day

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

![Picture256](/imgbasic/256.png)

### Looping Jobs - Restart Offset

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/LoopingJobsRestartOffset.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>

* A Job needs to rerun on set interval
* **Run Interval** – End to Start can create Start Time creep
* **Run Limits** – Either or Both selections can be used

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

![Picture257](/imgbasic/257.png)

### Looping Jobs - Recurring Instances

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/LoopingJobsRecurringInstances.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>

* A Job needs to rerun on a non-standard interval
* **Action on Overlap of Job Recurrence** allows a Job to run or be skipped if another Job has run late or is running during the subsequent run

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

![Picture258](/imgbasic/258.png)


### Looping Jobs on Failure

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/LoopingJobsOnFailure.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>

* A Job can automatically try again multiple times within the configured number of minutes between attempts if the Job fails

:::note
OpCon will flag a Job as failed after the last attempt
:::

![Picture259](/imgbasic/259.png)