---
sidebar_label: 'Unit 2 Lab B'
---

### Summary

To use the concepts presented in Units 1 and 2 to create a schedule that will jobs to manage the inventory for Congo Online Retail Inc.

### Objective

Congo Online Retail Inc. needs to run daily inventory checks every day of the week using a schedule called **Congo Inventory Management**. 

To manage the inventory for each product, a special program must be run for each department:
  
*	**Toys** – ```"C:\scripts\CheckInvToys.EXE"```
*	**Electronics** – ```"C:\scripts\CheckInvElectronics.EXE"```
*	**Clothing** – ```"C:\scripts\CheckInvClothing.EXE"```

Each product is assigned a **Product ID Number**. This ID Number will be used as an argument (```-t```) by the program for each job:

* **Legos** - ```11```
* **Nerf** - ```12```
* **Smartphones** - ```21```
* **XBOX** - ```22```
* **Levis** - ```31```
* **Nike** - ```32```

Each of the jobs must run every ```30 minutes``` until ```11:45 PM```.
  
The programs read the database and generate order requests to purchase new items. At the end of the day, an **Inventory Purchase Report** job is ran that creates a report with the purchase results for each item. The report job is a ```UNIX``` job that will execute the following **Start Image**: ```/usr/local/labfiles/CheckInvPurRpt –t100```  

### Lab Instructions

*	Create a schedule called **Congo Inventory Management**
*	Add **Documentation** for the schedule.
* **Monday-Sunday** are working days
*	Auto-build the schedule ```7``` days in advance for ```1``` day
*	Auto-delete the schedule for ```7``` days ago

:::tip
You can reference [**Unit 1 - Exercise 1**](./Unit%201%20Exercise%201.md) for steps on how to create a Schedule.
:::

*	Create a **Windows Job** for each of the products in the introduction.
*	Name each Job the same as its product name
*	These jobs need to run on the ```SMATRAINING``` **Machine**
*	These jobs need to run as the ```SMATRAINING\SMAUSER``` **User ID**
* Each of the six product jobs will run the program for its corresponding department. 
  * Example: Legos will run ```"[[Path_Scripts]]\CheckInvToys.EXE" -t11```  
*	Add **Documentation** for each Job.
* These Jobs must run Monday-Sunday
*	These Jobs must to run every 30 minutes when they have **Finished OK**
*	The latest run time of the 6 Jobs is **11:45 PM**
*	Tag these 6 Jobs according to the product type (**Toys**, **Electronics**, or **Clothing**)

:::tip
You can reference [**Unit 1 - Exercise 3**](./Unit%201%20Exercise%203.md) for steps on how to create a Windows Job.

You can reference [**Unit 2 - Exercise 11**](./Unit%202%20Exercise%2011.md) for steps on how to create a Looping Job.

You can reference [**Unit 1 - Exercise 5**](./Unit%201%20Exercise%205.md) for steps on how to add Tags
:::

*	Create a Unix Job named **Inventory Purchase Report**
*	This job needs to run on the ```SUSEVM``` **Machine**
*	This job needs to run as the ```0/0``` **Group ID/User ID**
*	Call the program on the **Start Image**: ```/usr/local/labfiles/CheckInvPurRpt –t100```  
* Add **Documentation** to the job.
*	This job needs to run **Monday-Sunday**
*	The Inventory Purchase Report requires the 6 Windows Jobs and must run after all runs have completed

:::tip 
You can reference [**Unit 2 - Exercise 6**](./Unit%202%20Exercise%206.md) for steps on how to create a UNIX Job.

You can reference [**Unit 1 - Exercise 4**](./Unit%201%20Exercise%204.md) for steps on how to add Dependencies.
:::

*	Build the Schedule for today and tomorrow

:::tip
You can reference [**Unit 1 - Exercise 6**](./Unit%201%20Exercise%206.md) for steps on how to build the Schedule.
:::

:::info
The jobs will complete and return to a waiting status until the repeating offset is qualified. The **SAM.log** can be checked to verify the jobs have executed successfully.
:::

#### Workflow Layout

![](../static/imgbasic/dependency_LabB.png)

## Enterprise Manager

<details>

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U2LabB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->

:::tip [Walkthrough Video - Unit 2 Lab B](../static/videobasic/U2LabB.mp4)

:::

**Lab Instructions**:

*	Create a Schedule named **Congo Inventory Management**
*	**Monday-Sunday** are working days
*	Auto-build the Schedule ```7``` days in advance for ```1``` day
*	Auto-delete the Schedule for ```7``` days ago
*	Add Documentation for the Schedule 

*	Create a Windows Job for each of the products in the introduction
  *	Name each Job the same as its product name
  *	This Job needs to run as the ```SMATRAINING\SMAUSER``` User ID
  *	This Job needs to run on the ```SMATRAINING``` machine
  *	Call the programs on the command line. For example: 
  
  ```   
  “C:\scripts\CheckInvToys.EXE” -t11  
  ```  
  *   These Jobs need to run Monday-Sunday
  *	These Jobs need to run ```every 30 minutes``` when they have finished ok
  *	The latest execution time of the 6 Jobs is ```11:45 PM```
  *	Add Documentation for each Job. Example: Nerf
  *	Tag these 6 Jobs according to the product type (**Toys**, **Electronics**, or **Clothing**)
*	Create a Unix Job named **Inventory Purchase Report**
  *	This Job needs to run on the ```SUSEVM``` machine
  *	This Job needs to run as the ```0/0``` Group id/User ID
  *	Call the programs on the Start Image. For example:

  ```  
  /usr/local/labfiles/CheckInvPurRpt –t100  
  ```  
  
  *	This Job needs to run **Monday-Sunday**
  *	The Inventory Purchase Report requires the 6 Windows Jobs and must run after all runs have completed
*	Build the Schedule for today and tomorrow

:::note
Upon completion, view the results in the **Workflow designer**. Then build the Schedule released for today and check the execution using **Solution Manager**.
:::

![Picture306](../static/imgbasic/306.png)

</details>