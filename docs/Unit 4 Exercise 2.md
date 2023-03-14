---
sidebar_label: 'Unit 4 Exercise 2'
---

## Exercise 2: Thresholds

### Objective

Create a **Threshold** named ```TrainingThreshold``` with a value of ```0```.

Create a Schedule named **My Threshold Schedule**.

Create a Windows Job named **Threshold Dependency Job** that runs the generic program on a ```7 day``` Frequency. Give the Job a **Threshold Dependency** on ```TrainingThreshold``` with a value of ```equal to 2```.

Create a **Threshold Update** on the Job for a **Finished OK** status with a value of ```0```.

Create another Windows Job named **Threshold Update Job** that runs the generic program on a ```7 day``` Frequency. 

Create a **Threshold Update** on the Job for a Finished OK status with a value of ```2```.

Create a Null Job named **Threshold Initial Value Job** that runs on a ```7 day``` Frequency. 

Add a ```$NOTIFY:EMAIL``` **Event** to the Job that runs:

```
smauser@congo.local,,,Initial value of TrainingThreshold,Initial value of TrainingThreshold is [[TH.TrainingThreshold]]
```

Add a second Null Job named **Threshold After Update Job** copied from the first Job. Update the Event Parameters to:

```
smauser@congo.local,,,After the update,After the update the value of TrainingThreshold is [[TH.TrainingThreshold]]
```

Create a third Null Job named **Threshold Final Value Job** copied from the last Job. Update the Event Parameters to:

```
smauser@congo.local,,,Final value of TrainingThreshold,Final value of TrainingThreshold is [[TH.TrainingThreshold]]
```

Set Dependencies on the Jobs as such:

**Threshold Initial Value Job > Threshold Update Job > Threshold After Update Job**

**TrainingThreshold > Threshold Dependency Job > Threshold Final Value Job**

Build the Schedule Released for Today. View results in Matrix View or Solution Manager.

Open **Thunderbird** to verify Notifications.

### Instructions

1.	Create the Threshold.
	* In **Library**, under the **Administration** topic, select **Thresholds**. 
	* Click the **Add** button on the Thresholds toolbar.
	* In the **Name** textbox, type **TrainingThreshold**, type some documentation and in the **Threshold** textbox enter a value of ```0```.
	* Click the **Save** button.
2.	Create the Schedule and Jobs.
	* In **Library**, under the **Administration** topic, select **Master Schedules**.
	* Click the **Add** button.
	* Add a new Schedule called **My Threshold Schedule**.
	* Use these settings for the Schedule:
		* Monday through Sunday are working days.
		* Do **NOT** use the Master Holiday Calendar.
		* Auto Build ```7``` days in advance for ```1``` days.
		* Auto Delete ```7``` days ago.
	* Do not forget to add **Documentation** to your Schedule.
	* In **Studio**, open **My Threshold Schedule**.
	* Select **Add Job** in the side menu.
	* Add a new Windows Job named **Threshold Dependency Job** have it run the following:
		* Program: ```"C:\Program Files\OpConxps\MSLSAM\genericp.exe"``` program to run for ```10``` seconds.   
	    * Machine: ```SMATraining```
		* User: ```SMATRAINING\SMAUSER```
		* Frequency: ```Mon-Sun-O```
		* Also do not forget to add **Documentation**.
3.	Create the Threshold Dependency.
	* In the **Master Job Definition**, scroll to and expand **Threshold Dependency**.
	* Click the **Add** button.
	* In the **Threshold/Resource** drop-down list, select **TrainingThreshold**.
	* In the **Operator** drop-down list, select ```=``` (**equals symbol**).
	* In the **Value** textbox, type ```2```.
	* Click the **Save** button.
4.	Create a Threshold/Resource Update:
	* Scroll to and expand **Threshold Update**.
	* Click the **Add** button.
	* Select **TrainingThreshold** from the drop-down list.
	* In the **Job Status** drop-down list, select **Finished OK**.
	* In the **Value** textbox, type ```0```.
	* Click the **Save** button.
	* Click the **Save** button in the **Master Job Definition**.
5.	In **Studio**, add another Windows Job to **My Threshold Schedule**.
6.	Name the Job as **Threshold Update Job**.
	* Program: ```"C:\Program Files\OpConxps\MSLSAM\genericp.exe"``` program to run for ```10``` seconds 
	* Machine: ```SMATraining```
	* User: ```SMATRAINING\SMAUSER```
	* Frequency: ```Mon-Sun-O```
	* Also do not forget to add **Documentation**.
7.	Create a Threshold/Resource Update:
	* Scroll to and expand **Threshold Update**.
	* Click the **Add** button.
	* Select **TrainingThreshold** from the drop-down list.
	* In the **Job Status** drop-down list, select **Finished OK**.
	* In the **Value** textbox, type ```2```.
	* Click the **Save** button.
	* Click the **Save** button in the **Master Job Definition**.
8.	Add a Null Job to the Schedule to send a notification with the initial value of the Threshold.
	* In **Studio**, add the Null Job to **My Threshold Schedule**.
	* Name the Job as **Threshold Initial Value Job** and 
	* Frequency: **Mon-Sun-O**
	* Scroll to and expand **Events** and click the **Add** button.
	* In the **Send Event On** dropdown, select **Job Status**.
	* In the **Job Status** dropdown, select **Finished OK**.
	* In the **Event Template** dropdown, select ```$NOTIFY:EMAIL```.
	* Update the **Events parameters** as follows:
		* To: ```smauser@congo.local
		* Subject: ```Initial value of TrainingThreshold```
		* Message: ```Initial value of TrainingThreshold is [[TH.TrainingThreshold]]```
	* Click the **Save** button.
	* Click the **Save** button in **Master Job Definition**.
9.	Add a second Null Job to the Schedule to send a notification with the value of the Threshold after it is updated to ```2```.
	* In **Studio**, select the **Threshold Initial Value Job** selected. 
	* Click the **Copy** button in the side menu to copy this Job.
	* Name the new Job as **Threshold After Update Job**.
	* Within the new Job's **Master Job Definition**, scroll to **Events** and edit the **Event** information to the following:
		* To: ```smauser@congo.local```
		* Subject: ```After the update```
		* Message: ```After the update the value of TrainingThreshold is [[TH.TrainingThreshold]]```
	* Click the **Save** button.
	* Click the **Save** button in **Master Job Definition**.
10.	Add a third Null Job to the Schedule to send a notification with the final value of the Threshold.
	* In **Studio**, select the **Threshold After Update Job** selected. 
	* Click the **Copy** button to copy this Job.
	* Name the new Job as **Threshold Final Value Job**.
	* Within the new Job's **Master Job Definition**, scroll to **Events** and edit the **Event** information to the following:
		* To: ```smauser@congo.local
		* Subject: ```Final value of TrainingThreshold```
		* Message: ```Final value of TrainingThreshold is [[TH.TrainingThreshold]]```
	* Click the **Save** button.
	* Click the **Save** button in **Master Job Definition**.
11.	Close the Job Master and the Schedule Master (if open).
12.	In **Studio** set the Job Dependencies within **My Threshold Schedule**.
	* **Threshold After Update Job** depends on **Threshold Update Job**
	* **Threshold Update Job** depends on **Threshold Initial Value Job**
	* **Threshold Final Value Job** depends on **Threshold Dependency Job**

![](../static/imgbasic/Threshold_Schedule_Image.png)

13.	In **Operations**, Build the Schedule **Released** for today.
	* View the Schedule and Job results in **Processes**. 
14.	Be sure the **My Threshold Schedule** is **Completed**.
15.	Open Thunderbird and check the inbox.
16.	You should find ```3``` new emails. Open the emails and check the contents.



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

<a href="imgbasic/414.png" target="_blank"><img src="imgbasic/414.png" width="500"></img></a>

13.	**Build** the Schedule **Released** for today.
	* Open one of the operations views (**List** or **Matrix**) or use **Solution Manager**. 
14.	Be sure the **My Threshold Schedule** is **Completed**.
15.	Open Thunderbird and check the inbox.
16.	You should find ```3``` new emails. Open the emails and check the contents.

</details>