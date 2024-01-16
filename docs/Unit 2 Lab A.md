---
sidebar_label: 'Unit 2 Lab A'
---

### Objective 

To use the information gained about frequencies to create jobs that utilize **Single, Multiple, and Negative Frequencies**.

### Summary

Congo Online Retail Inc. needs to pay its employees on different intervals based on their department. This is done through a Schedule named **Congo Payroll Payments**.

Congo Online Retail Inc’s Payroll Department work week is Monday through Friday and uses the **Master Holiday Calendar** that was updated in Exercise 7. Each Department requires specific scheduling intervals as noted below:

#### Toys Department

* Every 14 Days starting on January 7th of this year
  * The Working Day before, if date falls on a Non-Working Day  

#### Electronics Department

* 15th of the Month
  * The Working Day before, if date falls on a Non-Working Day
* Last Working Day of the month
  * The Working Day before, if date falls on a Non-Working Day
* End of Year (Negative)
  * Payroll that includes both the monthly Payroll and Bonuses is run in place of the End of Month Payroll on the last working day of the year  

#### Clothing Department

* Every Friday
  * The Working Day after, if date falls on a Non-Working Day
* OnRequest
  * After every major sales milestone is reached

### Lab Instructions  

:::tip 
Use the **NULL JOB Job Type** for all jobs in this lab.
:::

* Create a **Schedule** called **Congo Payroll Payments**
* Add **Documentation** for the Schedule 
* Saturday and Sundays are non-working days
* The **Master Holiday Calendar** is used
* **Auto-build** the Schedule 7 days in advance for 1 day
* **Auto-delete** the Schedule for 7 days ago

:::tip
You can reference [**Unit 1 - Exercise 1**](/docs/Unit%201%20Exercise%201.md) for steps on how to create a Schedule.
:::

* Four **Null Jobs** will be created:
  * **Toys** will need **one Job** with **one Frequency**
  * **Electronics** will need **two Jobs**  
    * Job 1 - **three Frequencies** 
    * Job 2 - **one Frequency**
  * **Clothing** will need **one Job** with **two Frequencies**

:::tip
You can reference [**Unit 2 - Exercise 2**](/docs/Unit%202%20Exercise%202.md) for steps on how to create Null jobs.
:::

* Tag all Jobs according to the product (**Toys**, **Electronics** and **Clothing**)

:::tip
You can reference [**Unit 1 - Exercise 5**](/docs/Unit%201%20Exercise%205.md) for steps on how to add Tags.
:::

* Upon completion, the “**Forecast All**” results will look like the following:

#### Forecasts of Frequencies

#### Toys
![](../static/imgbasic/SM_Forecast-Interval_Lab.png)

#### Electronics - Monthly
![](../static/imgbasic/SM_Frequency_NotEOY_LabA.png)

#### Electronics - EOY
![](../static/imgbasic/Electronics_EOY_Frequency_LabA.png)

#### Clothing - All Weeks Friday
![](../static/imgbasic/Clothing_Friday_Frequency_LabA.png)

![](../static/imgbasic/Clothing_OnRequest_Frequency_LabA.png)

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

![Picture268](../static/imgbasic/268.png)

#### Electronics - Not End of Year

![Picture269](../static/imgbasic/269.png)

#### Electronics - End of Year

![Picture270](../static/imgbasic/270.png)

#### Clothing
 
![Picture271](../static/imgbasic/271.png)

![Picture272](../static/imgbasic/272.png)

</details>
