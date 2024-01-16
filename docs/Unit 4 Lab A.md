---
sidebar_label: 'Unit 4 Lab A'
---

## LAB A

### Objective

To use the information gained about Thresholds, Resources, and External Events as well as other features like Properties and Notifications.

### Summary

Congo Online Retail Inc. must update the inventory based on the Purchase Requests with a Schedule called **Congo Update Inventory**. 

A unique script is run for each product:

**Toys** 

* Legos: ```C:\scripts\UpdInvLegos.CMD``` 
* Nerf: ```C:\scripts\UpdInvNerf.CMD```

**Clothing**

* Nike: ```C:\scripts\UpdInvNike.CMD```   
* Levis: ```C:\scripts\UpdInvLevis.CMD``` 

**Electronics**

* Smartphones: ```C:\scripts\UpdInvSmartphones.CMD``` 
* XBOX: ```C:\scripts\UpdInvXBOX.CMD```


These jobs can run in the order they are listed above with two exceptions:

1.  Since the **Nike** job takes a long time to finish, the **Levis** job **does not** need to wait for the it to complete. The script the **Nike** job runs will update a Threshold that will allow the Levis job to run.
2.  The **Smartphones** and **XBOX** scripts use a lot of CPU so they **cannot run at the same time**, but it does not matter which one runs first.

### Lab Instructions

* Create a **Schedule** named **Congo Update Inventory**
* Add **Documentation** for the Schedule
* Saturday and Sundays are non-working days 
* Use the **Master Holiday Calendar** 
* **Auto-build** the Schedule ```7``` days in advance for ```1``` day
* **Auto-delete** the Schedule for ```7``` days ago
* Create 6 **Windows** jobs, each running their specific script, named: 
  * Legos
  * Nerf
  * Nike
  * Levis
  * Smartphones
  * XBOX
* These Jobs need to run as the **SMATRAINING\SMAUSER** User
* These Jobs need to run on the **SMATRAINING** machine
* Call the programs on the command line using **Properties**

:::note Example
Best practice is to use Properties in place of any path that may change in time. An example of a variablized command line is below: 

```"[[PATH_Scripts]]\UpdInv[[$JOB NAME]].CMD"```
:::

* The jobs should run **Monday-Friday** but _NOT run on non-working days_
* The first Job, **Legos**, starts at **3:00 PM**
* Add **Documentation** for each Job  
  * Example: This Job is reporting inventory for the number of Legos in Stock.
* Each job should be tagged according to the product type (**Toys**, **Electronics**, or **Clothing**)
* Create a **Threshold** called **LEVISThreshold** that has a base value of **0**.

:::info
There is a point in the ```"UpdInvNike.CMD"``` script to execute ```“$THRESHOLD:SET, LEVISThreshold,1”```, so the Levis Job can start
* _This is for informational purposes only – There is no need to create this event_
:::

* The **Levis** job will have a **Threshold Dependency** of **1** to the **LEVISThreshold**. 
* The **Threshold** needs to be reset to **0** when the **Levis** job completes.
* Create a **Resource** named **Electronics** with a **Max Resources** value of **1**.
* Both **XBOX** and **Smartphones** require a single resource to be available in order to run.
* Use **Notification Manager** to alert you if any of the jobs in the **Congo Update Inventory Schedule** return a **Finished OK** or **Fail** status. 
  * Send an email to: ```smauser@congo.local``` with the subjects:  
  * The job, [[$JOB NAME]], in [[$SCHEDULE NAME]] schedule has Finished OK.
  * The job, [[$JOB NAME]], in [[$SCHEDULE NAME]] schedule has Failed.
* Add **Dependencies** in **Studio**.
* **Build** the Schedule for today **Released**

![Lab4A](../static/imgbasic/lab4aSM.png)

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Lab A](../static/videobasic/U4LabA.mp4)

:::


**Lab Instructions**:  

* Create a **Schedule** named **Congo Update Inventory**
* Saturday and Sundays are non-working days 
* **Auto-build** the Schedule ```7``` days in advance for ```1``` day
* **Auto-delete** the Schedule for ```7``` days ago
* Add **Documentation** for the Schedule
* Use the Master Holiday Calendar 

* Create 6 **Windows** Jobs named: 
    * Legos
	* Nerf
	* Nike
	* Levis
	* Smartphones
	* XBOX

* These Jobs need to run as the ```SMATRAINING\SMAUSER``` **User ID**
* These Jobs need to run on the ```SMATRAINING``` **machine**
* Call the programs on the command line using a **Global Property**

:::note Example
use the Global Property you create previously that has the path for ```C:\Scripts```: 

```
“[[scripts]]\UpdInvLegos.CMD”
```
:::

* These Jobs need to run **Monday-Friday** and _not run on non-working days_
* The first Job, **Legos**, starts at ```3:00 PM```
* Add **Documentation** for each Job  
:::note Example
This Job is reporting inventory for the number of Legos in Stock
:::
* **Tag** the 6 Jobs according to the product type (**Toys**, **Electronics**, or **Clothing**)
*	Create a **Threshold** named **LEVISThreshold** and give it a value of ```0```  

:::info
There is a point in the ```"UpdInvNike.CMD"``` script to execute ```“$THRESHOLD:SET, LEVISThreshold,1”```, so the Levis Job can start
* _This is for informational purposes only – There is no need to create this event_
:::

* On the **Levis** Job, create a **Threshold Dependency** on the **LEVISThreshold** requiring a value of 1 
* Add a ```$THRESHOLD:SET``` event to the **Levis** Job to set the **LEVISThreshold** value back to ```0``` upon the Job completing
* Add a **Resource** named **Electronics** with a **Max Resources** value of ```1```
* Add a **Resource Dependency** for the **Smartphones** and **XBOX** Jobs to require a **Resource** of ```1```  
Note: The **Smartphones** and **XBOXConsoles** scripts will use the **Resource** feature to avoid running at the same time
* Use **Notification Manager** to setup alerts if Jobs in the **Congo Update Inventory Schedule** finish **OK** or **Fail**. 
* Send an email to: ```smauser@congo.local``` with the subject:  
A Job in ```[[$SCHEDULE NAME]]``` Schedule has ***Failed***   
OR  
A Job in ```[[$SCHEDULE NAME]]``` Schedule has ***Finished OK***

Upon completion, view the results in **Workflow designer**

**Build** the Schedule for today **Released**

![](../static/imgbasic/423.png)

</details>