---
sidebar_label: 'Unit 4 Exercise 1'
---

## Exercise 1: Resources

### Objective

Create a **Resource** named ```TrainingResource``` with a **Max Resources** value of ```4```.

Create a Schedule named **My Resources Schedule**.

Create a Windows Job named **Resource Use 2 Job A** that runs the generic program on a ```7 day``` Frequency. Give the Job a Resource Dependency on **TrainingResource** with a value of ```2```.

Copy or Create additional Jobs named **Resource Use 2 Job B** and **Resource Use 4 Job**.

Edit the **Resource Use 4 Job** to add a Resource Dependency on ```TrainingResource``` with a value of ```4```.

Create a **Notification** under a root group named **ExerciseResource** that will send an email to ```smauser@congo.local``` for each Job Finished OK:

Subject: Resources in Use for ```TrainingResource``` when ```[[$JOB NAME]]``` is Finished OK
Message: Number of Resources for resource ```TrainingResource```=> ```[[RU.TrainingResource]]/[[RM.TrainingResource]]```

Build the Schedule Released for Today. View results in Matrix View or Solution Manager.

Open **Thunderbird** to verify Notifications.


### Instructions

1.	In **Library**, under the **Administration** topic, select **Resources**. 
2.	Click the **Add** button.
3.	In the **Name** textbox, type **TrainingResource**, type some documentation and in the **Max Resources** enter a value of ```4```.
4.	Click the **Save** button.
5.	In **Library**, under the **Administration** topic, select **Master Schedules**.
6.	Click the **Add** button.
7.	Add a new Schedule called **My Resources Schedule**.
8.	Use these settings for the Schedule:
	* Monday through Sunday are working days
	* Do **NOT** use the Master Holiday Calendar.
	* **Auto Build** ```7``` days in advance for ```1``` days
	* **Auto Delete** ```7``` days ago
	* Add **Documentation** to your Schedule.
	* Click the **Save** button.
9.	Open **My Resources Schedule** in **Studio**,
10.	Select **Add Job** button in the side menu.
11.	Add a new Windows Job named **Resource Use 2 Job A** to run the ```"C:\Program Files\OpConxps\MSLSAM\genericp.exe"``` program to run for ```20``` seconds on the **SMATraining** machine using the ```SMATRAINING\SMAUSER``` User ID and add the **Mon-Sun-O** Frequency to the Job (refer to Job definition in Unit 1 for help). Add **Documentation**.
12.	Create a **Resource Dependency**:
	* In the **Master Job Definition**, scroll to and expand the **Resource Dependency** box
	* Click on the **Add** button.
	* In the **Resource** drop-down list, select **TrainingResource**.
	* In the **Value** textbox, type ```2```.
	* Click the **Save** button
	* Click the **Save** button in **Master Job Definition**
13.	In **Studio**, **Copy** the **Resource Use 2 Job A** Job.
14.	Name the new Job as **Resource Use 2 Job B**. Change Documentation if needed.
15.	In **Studio**, **Copy** the **Resource Use 2 Job B** Job.
16.	Name the new Job as **Resource Use 4 Job**. Change Documentation if needed.
17.	Open **Resource Use 4 Job** in **Master Job Definition** by selecting the Job and clicking the **Wrench** icon.
	* Click the **Lock** icon.
	* Scroll to and expand the **Resource Dependency** box
	* Click on the **the** button for the active **Resource (the one that reads **Requires 2 "TrainingResource").
	* Change the **Value** in the textbox to ```4```.
	* Click the **Save** button
	* Click the **Save** button in **Master Job Definition**
18.	In **Library**, under **Management** select **Notification Triggers** and click the **Jobs** tab.
19. Select **Manage Groups** and click the **Add** button.
20. In the **Name** textbox, type **ExerciseResource**
21. In the **Type** dropdown list, select **Job**.
22. Select all of the Jobs in **My Resources Schedule** to be added to the Notification.
23. Click the **Save** button. 
24. Return to the **Notification Triggers** main screen and click the **Add** button.
25. In the **Group Name** dropdown list, select the **ExerciseResource** Group.
26. In the **Trigger Name** dropdown list, select **Job Running**.
27. Click the **+** button for an **Email** alert.
28.	Setup the configuration to send emails according to the following:
	* To: ```smauser@congo.local```
	* Subject: Resources in Use for TrainingResource when ```[[$JOB NAME]]``` is running
	* Message: Number of Resources for resource TrainingResource=> ```[[RU.TrainingResource]]/[[RM.TrainingResource]]```
29.	Click the **OK** button.
30. Click the **Save** button.
31. Add a second Trigger  by clicking the **Add button**.
32. In the **Group Name** dropdown list, select the **ExerciseResource** Group.
33. In the **Trigger Name** dropdown list, select **Job Finished OK**.
34. Click the **+** button for an **Email** alert.
35.	Setup the configuration to send emails according to the following:
	* To: ```smauser@congo.local```
	* Subject: Resources in Use for TrainingResource when ```[[$JOB NAME]]``` is Finished OK
	* Message: Number of Resources for resource TrainingResource=> ```[[RU.TrainingResource]]/[[RM.TrainingResource]]```
36.	Click the **OK** button.
37. Click the **Save** button.
38.	Build the Schedule Released for today and view the Schedule and Job results in **Processes**.
39.	Be sure the **My Resources Schedule** is Completed
40.	Open Thunderbird and check the inbox. _You should find ```6``` new emails._


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 1](../static/videobasic/U4E1.mp4)

:::


1.	Under the **Administration** topic, Double-Click on **Resources**. 
2.	Click the **Add** button on the Resources toolbar.
3.	In the **Name** textbox, type **TrainingResource**, type some documentation and in the **Max Resources** enter a value of ```4```.
4.	Click the **Save** button on the Resources toolbar. Close the Resources tab.
5.	Under the Administration topic, Double-Click Schedule Master.
6.	Click the Add button on the Schedule Master toolbar.
7.	Add a new Schedule called **My Resources Schedule**.
8.	Use these settings for the Schedule:
	* Monday through Sunday are working days
	* Do **NOT** use the Master Holiday Calendar.
	* **Auto Build** ```7``` days in advance for ```1``` days
	* **Auto Delete** ```7``` days ago
	* Add **Documentation** to your Schedule.
9.	Close the **Schedule Master** and open the **Job Master** to add your Jobs.
10.	Select the **My Resources Schedule**.
11.	Click the **Add** button on the **Job Master** toolbar.
12.	Add a new Job named **Resource Use 2 Job A** to run the ```Genericp.exe``` program to run for ```20``` seconds on the **SMATraining** machine using the ```SMATRAINING\SMAUSER``` User ID and add the **Mon-Sun-O** Frequency to the Job (refer to Job definition in Unit 1 for help). Add **Documentation**.
13.	Create a **Threshold/Resource Dependency**:
	* Click on the **Dependencies** tab
	* Click on the **Threshold/Resource Dependency** tab
	* In the **Threshold/Resource Dependency** frame, click the **Add** button.
	* In the **Threshold/Resource** drop-down list, select **TrainingResource**.
	* In the **Value** textbox, type ```2```.
	* Click the **OK** button
14.	Click the **Copy** button on the **Job Master** toolbar to copy this Job.
15.	Name the new Job as **Resource Use 2 Job B**. Change Documentation if needed.
16.	Click the **Copy** button on the **Job Master** toolbar to copy this Job.
17.	Name the new Job as **Resource Use 4 Job**. Change Documentation if needed.
18.	Be sure you have **Resource Use 4 Job** selected.
	* Click on the **Dependencies** tab
	* Click on the **Threshold/Resource Dependency** tab.
	* In the **Threshold/Resource Dependency** frame, Double-Click the **Threshold/Resource** dependency that was copied from the previous Job.
	* Check if the **Threshold/Resource** drop-down list has **TrainingResource**.
	* Change the **Value** textbox to ```4```.
	* Click the **OK** button
19.	Close the **Job Master**.
20.	Under **Management** Double-Click **Notification Manager** and click the **Jobs** tab.
21.	Create a **new root group** called **ExerciseResource** (Right-Click and select **Add Root Group**).
22.	Check **My Resources Schedule** (on the right side of the screen) checkbox and then click the **Save** button.
23.	Right-Click the **ExerciseResource** group and select **Add Job Trigger > Job Running**.
24.	Check the **Send Email (SMTP)** checkbox.
25.	Click the **Email** tab and setup the configuration to send emails according to the following:
	* To: ```smauser@congo.local```
	* Subject: Resources in Use for TrainingResource when ```[[$JOB NAME]]``` is running
	* Message: Number of Resources for resource TrainingResource=> ```[[RU.TrainingResource]]/[[RM.TrainingResource]]```
26.	Click the **Save** button.
27.	Right-Click the **ExerciseResource** group and select **Add Job Trigger> Job Finished OK**.
28.	Check the **Send Email (SMTP)** checkbox.
29.	Click the **Email** tab and setup the configuration to send emails according to the following:
	* To: ```smauser@congo.local```
	* Subject: Resources in Use for TrainingResource when ```[[$JOB NAME]]``` is Finished OK
	* Message: Number of Resources for resource TrainingResource=> ```[[RU.TrainingResource]]/[[RM.TrainingResource]]```
30.	Click the **Save** button.
31.	Close the **Notification Manager** tab.
32.	Build the Schedule Released for today.
	* Open one of the operations views (**List** or **Matrix**) or use **Solution Manager**.
33.	Be sure the **My Resources Schedule** is Completed
34.	Open Thunderbird and check the inbox. _You should find ```6``` new emails._

</details>