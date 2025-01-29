---
sidebar_label: 'Unit 3 Exercise 13'
---

## Exercise 13: Events

### Objective

To use Events to cancel a job in a workflow when a preceding job finishes okay.

### Summary

Utilizing your **MY FIRST SCHEDULE**, you will add 3 new jobs. The first job will **Finish OK** and will trigger an **$JOB:CANCEL** event to cancel the third job. All the jobs will run the GenericP program and should run 7 days a week.

These jobs should run in a particular order so that the event will cancel the third job.

**Run Order:** **Test Event 1** &rarr; **Test Event 2** &rarr; **Test Event 3**.

### Instructions

#### Create the Jobs

1. In **Library** > **Administration**, double click on **Master Jobs**. 
2. On the **Master Job** list, click **Add**.
3. In the **Schedule** dropbox, select **My First Schedule**.
4. In the **Name** field, enter in **Test Event 1**.
5. In the **Job Type** drop-down list, select **Windows**.
6. In the **Machine Selection** drop-down list, select the **SMATraining** machine for the Job to run on. 
7. In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER``` 
8. In the Command Line, using the **Magic Wand** or **CRTL+Space**, create the following command: ```"[[Path_Windows]]\genericp.exe" -t[[Runtime]]```  
9. Click the **Save** button.
10. Click the **Lock** button in the upper right-hand corner.
11. Expand the **Frequency** box.
12. **Add** a frequency for a **Mon-Sun-O** pattern.
  * In the **Frequency Name** box, type **Mon-Sun-O**.
  * Set **When to Schedule** as **All Weeks**.
  * Select all days of the week by marking their check boxes.
  * Be sure that the **A/O/B/N** radio button is set to **On Date**.
  * Click the **Save** button.
13. Click the **Back** button to return to the **Job List**.
14. Using the filters at the top of the Job List, locate **Test Event 1 Job** and **Copy** it twice, once for **Test Event 2** and once for **Test Event 3**. 

#### Create the Event

15. Using the filters at the top of the Job List, locate and select **Test Event 1**.
16. Click **Edit**.
17. Click the **Lock** icon to enter Admin Mode.
18. Locate and expand the **Events** section.
19. Click the **+** button.
20. In the **Create new Event** screen:
  * In the **Send Event On** dropdown, select **Job Status**.
  * In the **Job Status** dropdown, select **Finished OK**.
  * In the **Event Template** dropdown, select the **$JOB:CANCEL** event.
  * In the **Schedule Date** field, use the **Magic Wand** or **CTRL+SPACE** to enter in **$SCHEDULE DATE**.
  * In the **Schedule Name** field, use the **Magic Wand** or **CTRL+SPACE** to enter in **$SCHEDULE NAME**.
  * In the **Job Name** field, enter in the job name for **Test Event 3**.
  * Click **Save**.
21. Click **Save**.
22. Close **Library**.

:::info

For all events, you can use **System Properties** for fields like the **Schedule Date** and **Schedule Name**.
* For example: To use a ```$JOB:CANCEL,<Schedule date>,<Schedule name>,<Job name>``` event, you can substitute the following for the appropriate fields:   
  * ```<Schedule date>``` can be replaced with either ```CURRENT```, ```[[$DATE]]```, or ```[[$SCHEDULE DATE]]```  
  * ```<Schedule name>``` needs to be replaced with either the **full name of the Schedule the Job is in** or ```[[$SCHEDULE NAME]]```  
  * ```<Job name>``` needs to be replaced with **the name of the Job this Event is going to cancel**
:::

#### Add Dependencies

23. Open **Studio**.
24. Select **My First Schedule**.
25. Click **View**.
26. Click **Test Event 3**.
27. In the side menu, select **Add Dependency**.
28. In the **Job Dependency** pop-up, select **Test Event 2** in the **Job** drop down list.
29. Verify that the **Dependency Type** is **Requires** and the **Condition** is **Finished OK**.
30. Click the **Save** button.
31. Repeat **Steps 26-30** to add a dependency between **Test Event 1** and **Test Event 2**.
32. Close **Studio**.

#### Rebuild the Schedule

33. In **Operations**, select **Schedule Build**.
34. In the **Schedule Date** section, validate that today's date is specified for both **From** and **To**.
35. In the **Schedule Build** section, click the **Released** radio button.
36. Toggle on **Overwrite Existing Schedules**.
37. In the **Schedule Selection** list, select **My First Schedule**.
38. Click the **Build** button.
39. Expand and click on the schedule link for **My First Schedule** to return to the Processes screen.



## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 13](../static/videobasic/U3E13.mp4)

:::


1.	Create the Schedules/Jobs
    *	Under the **Administration** topic, Double-Click on **Job Master**. 
    *	In the **Schedule** drop-down list, select **My First Schedule**.
    *	On the **Job Master Toolbar**, click the **Add** button. 
    *	In the **Name** textbox, enter **Test Event 1**.
    *	In the **Job Type** drop-down list, select **Windows**.
    *	In the **Primary Machine** drop-down list, select the **SMATraining** machine for the Job to run on. 
    *	In the User ID drop-down list, select ```SMATRAINING\SMAUSER``` 
    *	In the Command Line, type Ctrl + F and Double-Click on the command that looks like this:  
    ```
    "[[PathWindows]]\genericp.exe" -t[[RUNTIME]]
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