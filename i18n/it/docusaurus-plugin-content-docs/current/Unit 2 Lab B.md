---
sidebar_label: 'Unit 2 Lab B'
---

### Objective:

Congo Online Retail Inc. needs to run daily inventory checks (7 days a week) with a Schedule named **CONGO INVENTORY MANAGEMENT**. 

A specific program must be run for each product department and each product Job should be Tagged by department.  
  
*	**Toys** – ```"C:\scripts\CheckInvToys.EXE"```
  *	Legos
  *	Nerf
*	**Electronics** – ```"C:\scripts\CheckInvElectronics.EXE"```
  *	Smartphones
  *	Xbox
*	**Clothing** – ```"C:\scripts\CheckInvClothing.EXE"```
  *	Levis
  *	Nike

Each product is assigned a **Product ID Number**. This ID Number will be used by the program as an argument for the ```-t``` time interval for each job:

  * Legos - ```11```
  * Nerf - ```12```
  * Smartphones - ```21```
  * Xbox - ```22```
  * Levis - ```31```
  * Nike - ```32```
  * Inventory Report - ```100```

The Jobs must run every ```30 minutes``` until ```11:45 PM```.
  
The programs read the database and generate order requests to purchase new items. At the end of the day, an **Inventory Purchase Report** is created with the results. This must be created as a ```UNIX``` Job with the following **Start Image**:

```/usr/local/labfiles/CheckInvPurRpt –t100```  

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2LabB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for More Detailed Lab Instructions</summary>

**Lab Instructions**:

*	Create a Schedule named **Congo Inventory Management**
*	**Monday-Sunday** are working days
*	Auto-build the Schedule ```7``` days in advance for ```1``` day
*	Auto-delete the Schedule for ```7``` days
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

<a href="imgbasic/306.png" target="_blank"><img src="imgbasic/306.png" width="500"></img></a>

</details>