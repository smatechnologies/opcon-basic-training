---
sidebar_label: 'Other Frequency Details'
---

![](../static/imgbasic/Other_Details.png)

* All **other details** on the Frequency tab screen are **set per Frequency**
* The Frequency panel in Solution Manager’s Job Configuration Screen provides access to Frequency information for a job
* Current options configurable in Solution Manager:
  * Offsets
  * Start Time Estimation options
  * Job Execution
    * SAM Priority
    * Max Run time
  * Failure/Retry options
  * Finish Ok options


## Job Information

<img src="imgbasic/Build_status.png" width="700"/>


#### Job Build Status

* Determines the default status of the job when it is built with the schedule for the associated frequency.
* Default is **Released**.

#### Parent Schedule Start Time

* The time the schedule will start
* Pulled from the Schedule Master

#### Estimated Job Start Time

* These are estimates for the job based on the **Parent Start Time**, the time zone of the server and the agent.

## Offset Information

<img src="imgbasic/Start_Offsets.png" width="700"/>

#### Schedule Start Time

* Start Time of a Schedule is the Earliest time any Job within the Schedule can start
  * All Job Offsets are added to a Schedule’s Start Time
* 24-hour clock
* All Job Offsets are added to this time

#### Start Offset

* Start Offset determines when a Job is allowed to start
  * Combined with the **Schedule Start Time** to determine earliest a Job can run without intervention
* Time-box is the Job offset 
  * Time in Green is combined offset
* **Absolute** – based on 24-hour clock
* **Relative** – offset starts once the Schedule is started

#### Latest Start Offset

* If a Job does not run by this time, it is marked as “Missed Start Time” which is treated as a Cancelled Job

#### Late to Start Offset

* Marks a Job as “Late to Start” if not started by this time
* Solely for Notification purposes

#### Late to Finish Offset

* Marks a Job as “Late to Finish” if not completed by this time
* Solely for Notification purposes

## Start Time and Job Execution

<img src="imgbasic/JobStartTime.png" width="700"/>

#### Start Time Estimation

* **Calculated** – Considers Dependencies and other workflow related items to estimate a Job start time
* **History** - Calculates Historical data for a specific Job
* **User Defined** - Values input by User 
  * No calculations done 
  * Useful for Threshold Jobs

#### Max Run Time 

* Marks a Job as “Exceeded Max Runtime” if run longer than specified minutes
* Solely for Notification purposes



## Enterprise Manager

<details>

### Other Frequency Details

![Picture246](../static/imgbasic/246.png)

### Schedule Start Time

![Picture247](../static/imgbasic/247.png)

### Start Offset

![Picture248](../static/imgbasic/248.png)

### Latest Start Offset

![Picture249](../static/imgbasic/249.png)

### Late to Start Offset

![Picture250](../static/imgbasic/250.png)

### Late to Finish Offset

![Picture251](../static/imgbasic/251.png)

### Max Run time

![Picture252](../static/imgbasic/252.png)

### Start Time Estimation

![Picture253](../static/imgbasic/253.png)

</details>z