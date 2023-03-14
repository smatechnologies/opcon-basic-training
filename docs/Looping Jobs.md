---
sidebar_label: 'Looping Jobs'
---

## Rerunning and Retrying Jobs

### Looping Jobs on Success

* The same Job can run multiple times throughout the day

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

||
|---|
|![](../static/imgbasic/SM_LoopingJobs_RunAgain.png)|

### Looping Jobs - Restart Offset

* A Job needs to rerun on set interval
* **Run Interval** – End to Start can create Start Time creep
* **Run Limits** – Either or Both selections can be used

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

||
|---|
|![](../static/imgbasic/SM_LoopingJobs_RestartOffset.png)|

### Looping Jobs - Recurring Instances

* A Job needs to rerun on a non-standard interval
* **Action on Overlap of Job Recurrence** allows a Job to run or be skipped if another Job has run late or is running during the subsequent run

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

||
|---|
|![](../static/imgbasic/SM_LoopingJobs_RecurringInstances.png)|


### Looping Jobs on Failure

* A Job can automatically try again multiple times within the configured number of minutes between attempts if the Job fails

:::note
OpCon will flag a Job as failed after the last attempt
:::

||
|---|
|![](../static/imgbasic/SM_LoopingJobs_JobFails.png)|

## Enterprise Manager

<details>

#### Looping Jobs on Success

* The same Job can run multiple times throughout the day

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

||
|---|
|![](../static/imgbasic/256.png)|

#### Looping Jobs - Restart Offset

* A Job needs to rerun on set interval
* **Run Interval** – End to Start can create Start Time creep
* **Run Limits** – Either or Both selections can be used

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

||
|---|
|![](../static/imgbasic/257.png)|

#### Looping Jobs - Recurring Instances

* A Job needs to rerun on a non-standard interval
* **Action on Overlap of Job Recurrence** allows a Job to run or be skipped if another Job has run late or is running during the subsequent run

:::caution Warning
Job Dependency of subsequent Jobs will not be met until last run
:::

||
|---|
|![](../static/imgbasic/258.png)|


#### Looping Jobs on Failure

* A Job can automatically try again multiple times within the configured number of minutes between attempts if the Job fails

:::note
OpCon will flag a Job as failed after the last attempt
:::

||
|---|
|![](../static/imgbasic/259.png)|

</details>