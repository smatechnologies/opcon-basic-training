---
sidebar_label: 'Unit 3 Exercise 13'
---

### Exercise 13: Events
##### Objective:

Create three new Windows Jobs in **MY FIRST SCHEDULE** named **Test Event 1**, **Test Event 2**, and **Test Event 3**. 

Use the generic program in the Command Line and provide a 7 day Frequency. 

Place **Test Event 3** in an ```On Hold``` Job Status. Give the three Jobs Requires Dependencies:

**Test Event 1 > Test Event 2 > Test Event 3**.

Create a ```$JOB:CANCEL``` Event for the **Test Event 1** Job that will cancel **Test Event 3**.

Build the Schedule and view the results in Matrix View.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E13.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Create the Schedules/Jobs
    *	Under the **Administration** topic, Double-Click on **Job Master**. 
    *	In the **Schedule** drop-down list, select **My First Schedule**.
    *	On the **Job Master Toolbar**, click the **Add** button. 
    *	In the **Name** textbox, enter **Test Event 1**.
    *	In the **Job Type** drop-down list, select **Windows**.
    *	In the P**rimary Machine** drop-down list, select the **SMATraining** machine for the Job to run on. 
    *	In the User ID drop-down list, select ```SMATRAINING\SMAUSER``` 
    *	In the Command Line, type Ctrl + F and Double-Click on the command that looks like this:  
    ```
    “[[PathWindows]]\genericp.exe” –t[[RUNTIME]]
    ```  
    *	Click the **Save** button.
    *	Click the **Frequency** tab.
    *	Within the **Frequency list** frame, click the **Add** button.
    *	Click inside the option button to **Use existing Frequency**.
    *	In the **Frequency** drop-down list, select **Mon-Sun-O**.
    *	Click **Next**.
    *	Click the **Finish** button.
    *	On the **Job Master Toolbar**, click the **Copy** button. 
    *	Name the Job **Test Event 2**.
    *	Click OK.
    *	On the **Job Master Toolbar**, click the **Copy** button. 
    *	Name the Job **Test Event 3**.
    *	Click **OK**.
    *	Click the **Frequency** tab.
    *	In the **Job Build Status** frame, select **On Hold**.
    *	Click the **Save** button.
    *	Close the **Job Master**.
    *	Under the **Administration** topic, Double-Click on **Workflow Designer**.
    *	In the Select Schedule list, select My First Schedule.
    *	Click the Add Dependency tool.
    *	Click **Test Event 1**, then **Test Event 2** to create a **Requires dependency**.
    *	Click **Test Event 2**, then **Test Event 3** to create a **Requires dependency**.
2.	Create the Events
    *	From the **Workflow Designer**, Right-Click **Test Event 1** and select **Edit**.
    *	Click on the **Events** tab.
    *	In the **Events** frame, click the **Add** button. 
    *	In the **Event Definition Wizard**, under **Send Event on** select the option button for **Job Status**. 
    *	Click the **Next** button.
    *	In the **Job Status** drop-down list, select Finished **OK**.
    *	Click the **Next** button.
    *	In the **Event Template** drop-down list, select the ```$JOB:CANCEL Event```. 

:::note Example:

```
$JOB:CANCEL,<Schedule date>,<Schedule name>,<Job name>
```        
* ```<Schedule date>``` needs to be replaced with either ```CURRENT```, ```[[$DATE]]```, or ```[[$SCHEDULE DATE]]```  
* ```<Schedule name>``` needs to be replaced with either the **full name of the Schedule the Job is in**, or ```[[$SCHEDULE NAME]]```  
* ```<Job name>``` needs to be replaced with **the name of the Job this Event is going to cancel**  
* Your Event should look like this: 

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],Test Event 3
```

:::

* Click the **Finish** button.  
* Close the **Job Master** and the **Workflow Designer** tabs.  
* Open one of the **operations views** and check if **My First Schedule** is **In Process** 
:::note
Cancel the Jobs if My First Schedule is not Completed 
:::
* **Build the Schedule** (Released) and watch it process.  
* Use either **List** or **Matrix** views in **Enterprise Manager** or use **Solution Manager**.  

</details>