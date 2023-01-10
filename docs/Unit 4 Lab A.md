---
sidebar_label: 'Unit 4 Lab A'
---

### LAB A

##### Objective:

Congo Online Retail Inc. must update the inventory based on the Purchase Requests with a Schedule named **Congo Update Inventory**. 

A Script is run for each product (Tagged by Category):

**Toys** 

Legos: ```[[SCRIPTS]]\UpdInvLegos.CMD``` 

Nerf: ```[[SCRIPTS]]\UpdInvNerf.CMD```

**Clothing**

Nike: ```[[SCRIPTS]]\UpdInvNike.CMD```   

:::note
This script uses ```MSGIN``` to set a **Threshold**
:::

Levis: ```[[SCRIPTS]]\UpdInvLevis.CMD``` 

**Electronics**

Smartphones: ```[[SCRIPTS]]\UpdInvSmartphones.CMD``` 

Xbox: ```[[SCRIPTS]]\UpdInvXbox.CMD```

The Jobs must run in the order they are listed above Monday-Friday.

There are two exceptions:

1)	The **Nike** Job takes a long time to Finish; The **Levis** Job **does not** need to wait for the **Nike** Job to finish – The **Nike** script will update a **Threshold** named ```LEVISThreshold``` that must be created with a value of ```0``` on the **Levis** Job. A ```$THRESHOLD:SET``` **Event** should be set on the **Levis** Job to return the value to ```0```.

2)	The **Smartphones** and **Xbox** scripts use a lot of CPU – They **cannot run at the same time**, but it does not matter which one runs first. Both Jobs should be given a **Resource Dependency** on a **Resource** named ```Electronics``` with **Max Resources** value of ```1```.

A **Notification** should be created for both Job Failure and Job Finished OK.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4LabA.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

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
	* Xbox

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
* Add a **Resource Dependency** for the **Smartphones** and **Xbox** Jobs to require a **Resource** of ```1```  
Note: The **Smartphones** and **XboxConsoles** scripts will use the **Resource** feature to avoid running at the same time
* Use **Notification Manager** to setup alerts if Jobs in the **Congo Update Inventory Schedule** finish **OK** or **Fail**. 
* Send an email to: ```smauser@congo.local``` with the subject:  
A Job in ```[[$SCHEDULE NAME]]``` Schedule has ***Failed***   
OR  
A Job in ```[[$SCHEDULE NAME]]``` Schedule has ***Finished OK***

Upon completion, view the results in **Workflow designer**

**Build** the Schedule for today **Released**

<a href="imgbasic/423.png" target="_blank"><img src="imgbasic/423.png" width="300"></img></a>

</details>