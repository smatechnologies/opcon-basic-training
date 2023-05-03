---
sidebar_label: 'Unit 2 Lab A'
---

### Objective 

Congo Online Retail Inc. needs to pay its employees on different intervals based on their department. This is done through a Schedule named **CONGO PAYROLL PAYMENTS**.

Congo Online Retail Inc’s Payroll Department work week is Monday through Friday and uses the **Master Holiday Calendar** updated during the Unit 2 Exercises.  

Each Department requires specific scheduling intervals as noted:

**Toys – Legos and Nerf**

  *	Every 14 Days starting on January 7th of this year
    * The Working Day before, if date falls on a Non-Working Day  

**Electronics – Smartphones and Xbox**

  * 15th of the Month
    * The Working Day before, if date falls on a Non-Working Day
  *	Last Working Day of the month
    * The Working Day before, if date falls on a Non-Working Day
  *	An End of Year Payroll that includes both the monthly Payroll and Bonuses is run in place of the End of Month Payroll on the last working day of the year  

**Clothing – Levis and Nike**  

  *	Every Friday
    * The Working Day after, if date falls on a Non-Working Day
  *	After every major sales milestone is reached (On-Request)  

The required Frequencies should be run within Null Jobs in the **CONGO PAYROLL PAYMENTS** Schedule.

### Lab Instructions  

:::note
USE NULL JOB TYPE FOR ALL JOBS IN THIS LAB
:::

*	Create a Schedule named **Congo Payroll Payments**
*	Monday through Friday are working days
*	The **Master Holiday Calendar** is used
*	Auto-build the Schedule 7 days in advance for 1 day
*	Auto-delete the Schedule for 7 days ago
*	Add Documentation for the Schedule 

*	Four Null Jobs will be created:

*	**Toys** will need **one Job** with **one Frequency**

*	**Electronics** will need **two Jobs**  
  *	Job 1 - **three Frequencies** 
  *	Job 2 - **one Frequency**

*	**Clothing** will need **one Job** with **two Frequencies**

*	Tag all Jobs according to the product (**Toys**, **Electronics** and **Clothing**)

Upon completion, the “**Forecast All**” results will look like the following:

|Toys|
|---|
|![](../static/imgbasic/SM_Forecast-Interval_Lab.png)|

|Electronics - Monthly|
|---|
|![](../static/imgbasic/SM_Frequency_NotEOY_LabA.png)|

|Electronics - EOY|
|---|
|![](../static/imgbasic/Electronics_EOY_Frequency_LabA.png)|

|Clothing - All Weeks Friday|
|---|
|![](../static/imgbasic/Clothing_Friday_Frequency_LabA.png)|

|Clothing - OnRequest|
|---|
|![](../static/imgbasic/Clothing_OnRequest_Frequency_LabA.png)|

## Enterprise Manager

<details>

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U2LabA.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->

:::tip [Walkthrough Video - Unit 2 Lab A](../static/videobasic/U2LabA.mp4)

:::

**Lab Instructions**:    

:::note
USE NULL JOB TYPE FOR ALL JOBS IN THIS LAB
:::

*	Create a Schedule named **Congo Payroll Payments**
*	Monday through Friday are working days
*	The **Master Holiday Calendar** is used
*	Auto-build the Schedule 7 days in advance for 1 day
*	Auto-delete the Schedule for 7 days ago
*	Add Documentation for the Schedule 

*	Four Null Jobs will be created:

*	**Toys** will need **one Job** with **one Frequency**

*	**Electronics** will need **two Jobs**  
  *	Job 1 - **three Frequencies** 
  *	Job 2 - **one Frequency**

*	**Clothing** will need **one Job** with **two Frequencies**

*	Tag all Jobs according to the product (**Toys**, **Electronics** and **Clothing**)

Upon completion, the “**Forecast All**” results will look like the following:

#### Toys

![Picture268](/imgbasic/268.png)

#### Electronics - Not End of Year

![Picture269](/imgbasic/269.png)

#### Electronics - End of Year

![Picture270](/imgbasic/270.png)

#### Clothing
 
![Picture271](/imgbasic/271.png)

![Picture272](/imgbasic/272.png)

</details>
