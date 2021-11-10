---
sidebar_panel: 'Looping Jobs'
---

### Looping Jobs on Success

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsOnSuccess.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* The same Job can run multiple times throughout the day

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

<a href="imgbasic/256.png" target="_blank"><img src="imgbasic/256.png" width="500"></img></a>

### Looping Jobs - Restart Offset

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsRestartOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* A Job needs to rerun on set interval
* **Run Interval** – End to Start can create Start Time creep
* **Run Limits** – Either or Both selections can be used

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

<a href="imgbasic/257.png" target="_blank"><img src="imgbasic/257.png" width="500"></img></a>

### Looping Jobs - Recurring Instances

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsRecurringInstances.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* A Job needs to rerun on a non-standard interval
* **Action on Overlap of Job Recurrence** allows a Job to run or be skipped if another Job has run late or is running during the subsequent run

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

<a href="imgbasic/258.png" target="_blank"><img src="imgbasic/258.png" width="500"></img></a>


### Looping Jobs on Failure

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsOnFailure.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* A Job can automatically try again multiple times within the configured number of minutes between attempts if the Job fails

:::note
OpCon will flag a Job as failed after the last attempt
:::

<a href="imgbasic/259.png" target="_blank"><img src="imgbasic/259.png" width="500"></img></a>

###### (Click Images to Enlarge)