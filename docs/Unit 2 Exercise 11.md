---
sidebar_panel: 'Unit 2 Exercise 11'
---

### Exercise 11: Multiple Frequencies

##### Objective: 

Create a new Schedule named **MULTIPLE AND NEGATIVE FREQUENCIES** that runs Monday-Friday. Add a Null Job named **MULTIPLE FREQUENCIES**. 

Create a Frequency to run on the **15th of the Month** and a second Frequency to run on the **last business day of the month**. 

The Job should run at ```20:00``` on when it is not the last day of the month and ```18:00``` on the last day of the month.

Within the same Schedule, create a new Job named **NEGATIVE FREQUENCIES**. The Job should have Frequencies that allow it to run Monday-Friday, unless it is a **holiday** or the **last Day of the month**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E11.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	**Multiple Frequencies**
  *	Create a new Schedule.
  *	Add a Null Job and setup Frequencies allowing a Job to run on the 15th of the month (working day before) and the last business day of the month.
    * Schedule - 5 Day Work Week
    * The Job runs at ```20:00``` when it is not the last day of the month and ```18:00``` when it is the last business day of the month.
  *	Use the Forecast All Button to view both Frequencies.
    * The first listed will be Green and the second will be Yellow. 
2.	**Negative Frequencies**
  *	In a new Null Job (same Schedule), set up Frequencies allowing the Job to run every day of the month, Monday through Friday, unless it is a Holiday or the last Day of the Month.
  *	Use the Forecast All Button to view both Frequencies.
    * The _**Negative Frequency will appear purple**_.

</details>