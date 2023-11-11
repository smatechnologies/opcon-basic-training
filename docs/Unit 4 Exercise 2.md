---
sidebar_label: 'Unit 4 Exercise 2'
---

## Exercise 2: Thresholds

### Objective

To use a Threshold to trigger a job to run and use Notifications to let you know that the threshold is incrementing and decrementing.

### Summary

Utilizing a **Threshold** called **TrainingThreshold** to prevent a job from running until its has reached a value of **2**. You will also configure some $NOTIFY:EMAIL events to alert you of the initial value, updated value and final value of the Threshold.

### Instructions

#### Create the Threshold

1.  In **Library** > **Administration**, select **Thresholds**. 
2.  Click **Add**.
3.  In the **Thresholds** pop-up:
  * In the **Name** field, enter ```TrainingThreshold```.
  * In the **Value** field, enter a value of ```0```.
  * In the **Description** field, enter in some documentation.
  * Click the **Save** button.
4.  Click **Back**.

#### Create the Schedule
5.  In **Library** > **Administration**, select **Master Schedule**.
6.  Click **Add** button.
7.  On the **Master Schedule Definition** screen:
  * In the **Schedule Name** field, enter ```My Threshold Schedule```.
  * Add **Documentation**
  * **Monday - Sunday** are working days.
  * Do **NOT** use the Master Holiday Calendar.
  * Auto Build ```7``` days in advance for ```1``` days.
  * Auto Delete ```7``` days ago.

#### Create the Jobs

8.  In **Studio**, select **My Threshold Schedule** and click **View**.
9.  In the side menu, select **Add Job**.
10. In the **Master Job Definition** screen:
  * In the **Name** field, enter ```Threshold Dependency Job```.
  * In the **Job Type** drop down, select **Windows**.
  * In the **Machine** drop down, select **SMATRAINING**.
  * In the **User ID** drop down, select **SMATRAINING\SMAUSER**
  * In the **Command Line** field, enter ```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10```. *Remember to use properties where acceptable.*
  * Add **Documentation**.
  * In the **Frequency** section, move the **Mon-Sun-O** frequency into the **Active** column.
11. Click **Back** to get back to the **Studio**.
12. Utilizing the **Copy** function, copy **Threshold Dependency Job** to add a second job called, **Threshold Update Job**.

#### Create Threshold Dependencies and Updates

13. In **Studio**, select the **Threshold Dependency Job**.
14. In the side menu, select **Add Threshold Dependency**.
15. In the **Threshold** pop-up window:
  * In the **Threshold** drop down, select **TrainingThreshold**.
  * In the **Operator** drop down, select **=**.
  * In the **Value** field, enter ```2```.
  * Click **Save**.
16. In **Studio**, select the **Threshold Dependency Job**.
17. In the side menu, select **Add Threshold Update**.
18. In the **Threshold** pop-up window:
  * In the **Threshold** drop down, select **TrainingThreshold**.
  * In the **Job Status** drop down, select **Finish OK**.
  * In the **Value** field, enter ```0```.
  * Click **Save**.
19. In **Studio**, select the **Threshold Update Job**.
20. In the side menu, select **Add Threshold Update**.
21. In the **Threshold** pop-up window:
  * In the **Threshold** drop down, select **TrainingThreshold**.
  * In the **Job Status** drop down, select **Finish OK**.
  * In the **Value** field, enter ```2```.
  * Click **Save**.

#### Create NULL Jobs and Define the Notify Events

22. In the side menu in **Studio**, select **Add Job**
23. On the **Master Job Definition** screen:
  * In the **Name** field, eneter ```Initial Value Notification```.
  * In the **Job Type** field, leave it as **Null Job**.
  * Add **Documentation**.
  * In the **Frequency** section, move the **Mon-Sun-O** frequency into the **Active** column.
24. Click **Back** to get back to the **Studio**. 
25. Utilizing the **Copy** function, copy the **Initial Value Notification** job to create 2 more jobs. One called, **After Update Job** and the other called **Final Value Job**.
26. Select the **Initial Value Notificaiton**, click the **Wrench** icon and enter **Admin Mode**. 
  * In the **Event** section, click **+**
  * In the **Event** pop-up window:
    * In the **Send Event On** dropdown, select **Job Status**.
    * In the **Job Status** dropdown, select **Finished OK**.
    * In the **Event Template** dropdown, select ```$NOTIFY:EMAIL``` and update the **Events parameters** as follows:
	  * In the **To**, enter ```smauser@congo.local```.
	  * In the **Subject**, enter ```Initial value of TrainingThreshold```
	  * In the **Message**, enter ```Initial value of TrainingThreshold is [[TH.TrainingThreshold]]```
    * Click the **Save** button.
  * Click the **Save** button in **Master Job Definition**.
  * Click **Back**
27. Select the **After Value Notificaiton**, click the **Wrench** icon and enter **Admin Mode**. 
  * In the **Event** section, click **+**
  * In the **Event** pop-up window:
    * In the **Send Event On** dropdown, select **Job Status**.
    * In the **Job Status** dropdown, select **Finished OK**.
    * In the **Event Template** dropdown, select ```$NOTIFY:EMAIL``` and update the **Events parameters** as follows:
	  * In the **To**, enter ```smauser@congo.local```.
	  * In the **Subject**, enter ```After the Update```
	  * In the **Message**, enter ```After the update the value of TrainingThreshold is [[TH.TrainingThreshold]]```
    * Click the **Save** button.
  * Click the **Save** button in **Master Job Definition**.
  * Click **Back**
28. Select the **Final Value Notificaiton**, click the **Wrench** icon and enter **Admin Mode**. 
  * In the **Event** section, click **+**
  * In the **Event** pop-up window:
    * In the **Send Event On** dropdown, select **Job Status**.
    * In the **Job Status** dropdown, select **Finished OK**.
    * In the **Event Template** dropdown, select ```$NOTIFY:EMAIL``` and update the **Events parameters** as follows:
	  * In the **To**, enter ```smauser@congo.local```.
	  * In the **Subject**, enter ```Final value of TrainingThreshold```
	  * In the **Message**, enter ```Final value of TrainingThreshold is [[TH.TrainingThreshold]]```
    * Click the **Save** button.
  * Click the **Save** button in **Master Job Definition**.
  * Click **Back**

#### Add Job Dependencies

29. Select the **Final Value Job**, click **Add Dependency** in the side menu.
30. In the **Job Dependency** pop-up window, select **Threshold Dependency Job**.
31. Click **Save**.
32. Select the **After Update Job**, click **Add Dependency** in the side menu.
33. In the **Job Dependency** pop-up window, select **Threshold Update Job**.
34. Click **Save**.
35. Select the **Threshold Update Job**, click **Add Dependency** in the side menu.
36. In the **Job Dependency** pop-up window, select **Initial Value Notification**.
37. Click **Save**.

:::tip
Once all the dependencies and events have been configured, your workflow should look something like this:
![](../static/imgbasic/Threshold_Schedule_Image.png)
:::

#### Build the Schedule

38. In **Operations**, build the Schedule **Released** for today.
39. Be sure the **My Threshold Schedule** is **Completed**.
40. Open Thunderbird and check the inbox.
41. You should find ```3``` new emails. Open the emails and check the contents.


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 2](../static/videobasic/U4E2.mp4)

:::

1.	Create the Threshold.
	* Under the **Administration** topic, Double-Click on **Thresholds**. 
	* Click the **Add** button on the Thresholds toolbar.
	* In the Name textbox, type **TrainingThreshold**, type some documentation and in the **Threshold** textbox enter a value of ```0```.
	* Click the **Save** button on the Thresholds toolbar. Close the Thresholds tab.
2.	Create the Schedule and Jobs.
	* Under the **Administration** topic, Double-Click **Schedule Master**.
	* Click the **Add** button on the **Schedule Master** toolbar.
	* Add a new Schedule called **My Threshold Schedule**.
	* Use these settings for the Schedule:
		* Monday through Sunday are working days.
		* Do **NOT** use the Master Holiday Calendar.
		* Auto Build ```7``` days in advance for ```1``` days.
		* Auto Delete ```7``` days ago.
	* Do not forget to add **Documentation** to your Schedule.
	* Close the **Schedule Master** and open the **Job Master** to add your Jobs.
	* Select the **My Threshold Schedule**.
	* Click the **Add** button on the Job Master toolbar.
	* Add a new Job named **Threshold Dependency Job** have it run the following:
		* Program: ```Genericp.exe``` program to run for ```10``` seconds.   
        :::note
        If using Ctrl+F, do not select a command line that is using a Schedule or Job Instance Property 
        :::
	    * Machine: ```SMATraining```
		* User: ```SMATRAINING\SMAUSER```
		* Frequency: ```Example-Mon-Sun-O```
		* Also do not forget to add **Documentation**.
3.	Create the Threshold Dependency.
	* Click on the **Dependencies** tab.
	* Click on the **Threshold/Resource Dependency** tab.
	* In the **Threshold/Resource Dependency** frame, click the **Add** button.
	* In the **Threshold/Resource** drop-down list, select **TrainingThreshold**.
	* In the **Operator** drop-down list, select ```=``` (**equals symbol**).
	* In the **Value** textbox, type ```2```.
	* Click the **OK** button.
4.	Create a Threshold/Resource Update:
	* Click on the **Threshold/Resource Update** tab.
	* In the **Threshold/Resource Update** frame, click the **Add** button.
	* Select **TrainingThreshold** from the drop-down list.
	* In the **Job Status** drop-down list, select **Finished OK**.
	* In the **Value** textbox, type ```0```.
	* Click **OK**.
5.	Click the **Add** button on the **Job Master** toolbar to add another Job.
6.	Name the Job as **Threshold Update Job**.
	* Program: ```Genericp.exe``` program to run for ```10``` seconds 
	* Machine: ```SMATraining```
	* User: ```SMATRAINING\SMAUSER```
	* Frequency: ```Example-Mon-Sun-O```
	* Also do not forget to add **Documentation**.
7.	Create a Threshold/Resource Update:
	* Click on the **Threshold/Resource Update** tab.
	* In the **Threshold/Resource Update** frame, click the **Add** button.
	* Select **TrainingThreshold** from the drop-down list.
	* In the **Job Status** drop-down list, select **Finished OK**.
	* In the **Value** textbox, type ```2```.
8.	Add a Null Job to the Schedule to send a notification with the initial value of the Threshold.
	* Click the **Add** button on the **Job Master** toolbar.
	* Name the Job as **Threshold Initial Value Job** and 
	* Frequency: **Mon-Sun-O**
	* Click the **Events** tab and click the **Add** button in the **Events** frame.
	* Select the **Job Status** radio button.
	* Click **Next**.
	* Select **Finished OK** from the **Job Status** drop-down list.
	* Click **Next**.
	* Select the ```$NOTIFY:EMAIL``` Event from the **Event Template** drop-down list.
	* Update the **Events parameters** as follows:
		* ```smauser@congo.local,,,Initial value of TrainingThreshold,Initial value of TrainingThreshold is [[TH.TrainingThreshold]]```

	* Click **Finish**.
9.	Add a second Null Job to the Schedule to send a notification with the value of the Threshold after it is updated to ```2```.
	* Be sure you have the **Threshold Initial Value Job** selected. 
	* Click the **Copy** button (fourth button from the right) on the **Job Master** toolbar to copy this Job.
	* Name the new Job as **Threshold After Update Job**.
	* Go to the **Events** tab and change the **Event** to the following:
		* ```smauser@congo.local,,,After the update,After the update the value of TrainingThreshold is [[TH.TrainingThreshold]]```
10.	Add a third Null Job to the Schedule to send a notification with the final value of the Threshold.
	* Be sure you have the **Threshold After Update Job** selected. 
	* Click the **Copy** button (fourth button from the right) on the **Job Master** toolbar to copy this Job.
	* Name the new Job as **Threshold Final Value Job**.
	* Go to the **Events** tab and change the **Event** to the following:
		* ```smauser@congo.local,,,Final value of TrainingThreshold,Final value of TrainingThreshold is [[TH.TrainingThreshold]]```
11.	Close the Job Master and the Schedule Master (if open).
12.	Open Workflow Designer to set Dependencies.
	* Select the **My Threshold Schedule** from the Select Schedule frame.

![](../static/imgbasic/414.png)

13.	**Build** the Schedule **Released** for today.
	* Open one of the operations views (**List** or **Matrix**) or use **Solution Manager**. 
14.	Be sure the **My Threshold Schedule** is **Completed**.
15.	Open Thunderbird and check the inbox.
16.	You should find ```3``` new emails. Open the emails and check the contents.

</details>