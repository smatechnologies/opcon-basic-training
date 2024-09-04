---
sidebar_label: 'Looping Jobs'
---

## Looping Jobs on Success


* Useful for situations where a job needs to run at regular intervals and/or absolute times throughout the day
* OpCon will process the events and threshold/resource updates every time the job finishes OK
* **Job Dependencies will only process after the last run of the day**

:::caution Warning

**Job Dependency of subsequent Jobs will not be met until last run of the day**

:::

![](../static/imgbasic/SM_LoopingJobs_RunAgain.png)

* **Restart Offset** allows you to reschedule a successful job to run at regular intervals throughout the day.
* **Recurring Instances** allows you to reschedule a successful job to run at fixed times throughout the day. 

### Restart Offset

:::caution Warning

**Job Dependency of subsequent Jobs will not be met until last run of the day**

:::

![](../static/imgbasic/SM_LoopingJobs_RestartOffset.png)

* A Job needs to rerun on set interval
* **Run Interval** – End to Start can create Start Time creep
* **Run Limits** – Either or Both selections can be used

### Recurring Instances

:::caution Warning

**Job Dependency of subsequent Jobs will not be met until last run of the day**

:::

![](../static/imgbasic/SM_LoopingJobs_RecurringInstances.png)

* A Job needs to rerun on a non-standard interval
* **Action on Overlap of Job Recurrence** allows a Job to run or be skipped if another Job has run late or is running during the subsequent run

## Looping Jobs on Failure

:::note

OpCon will flag a Job as failed after the last attempt

:::

![](../static/imgbasic/SM_LoopingJobs_JobFails.png)

* Useful for situations where a job may fail because of timing
* OpCon will process the events, threshold/resource updates, and subsequent job dependencies only upon job failure after the maximum retry.
* A Job can automatically try again multiple times within the configured number of minutes between attempts if the Job fails
* **OpCon will flag a Job as failed after the last attempt**



## Enterprise Manager

<details>

#### Looping Jobs on Success

* The same Job can run multiple times throughout the day

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

![](../static/imgbasic/256.png)

#### Looping Jobs - Restart Offset

* A Job needs to rerun on set interval
* **Run Interval** – End to Start can create Start Time creep
* **Run Limits** – Either or Both selections can be used

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

![](../static/imgbasic/257.png)

#### Looping Jobs - Recurring Instances

* A Job needs to rerun on a non-standard interval
* **Action on Overlap of Job Recurrence** allows a Job to run or be skipped if another Job has run late or is running during the subsequent run

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

![](../static/imgbasic/258.png)

#### Looping Jobs on Failure

* A Job can automatically try again multiple times within the configured number of minutes between attempts if the Job fails

:::note
OpCon will flag a Job as failed after the last attempt
:::

![](../static/imgbasic/259.png)

</details>