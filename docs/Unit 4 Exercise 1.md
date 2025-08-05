---
sidebar_label: 'Unit 4 Exercise 1'
---

## Exercise 1: Resources

### Objective

To use a Resource in order to prevent multiple jobs from kicking off at the same time.

### Summary

Utilizing a **Resource** called **TrainingResource** with a max value of **4**, you will prevent three jobs from kicking off at the same time. Two of the jobs will require 2 resources each and the third job will need all four resources.

You will then have each job trigger a notification, so that you know how many resources are in use at the time each job runs.

### Instructions

#### Create the Resource

1.	In **Library** > **Administration**, select **Resources**. 
2.	Click the **Add** button.
3.	In the **Resources** pop-up:
  * In the **Name** field, enter ```TrainingResource```.
  * In the **Description** field, enter in some documentation.
  * In the **Maximum** field, enter a value of ```4```.
  * Click the **Save** button.
4.  Click **Back**.

#### Create the Schedule

5.	In **Library** > **Administration**, select **Master Schedules**.
6.	Click the **Add** button.
7.	On the **Master Schedule Definition** screen:
  * In the **Schedule Name** field, enter ```My Resource Schedule```.
  * Add **Documentation** to your Schedule.
  * Monday through Sunday are working days
  * Do **NOT** use the Master Holiday Calendar.
  * **Auto Build** ```7``` days in advance for ```1``` days
  * **Auto Delete** ```7``` days ago
  * Click the **Save** button.
8.  Click **Back**.
9.	Select **My Resources Schedule** in the **Schedule List**,
10. Click **View**.

#### Create the Jobs

11.	Select **Add Job** button in the side menu.
12.	On the **Master Job Definition** screen, 
  * In the **Name** field, enter ```Use 2 Job A```.
  * In the **Job Type** drop down, select **Windows**.
  * In the **Machine** drop down, select **SMATraining**
  * In the **User ID** drop down, select **SMATRAINING\SMAUSER**
  * In the **Command Line** field, enter ```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t20```. _Remember to user properties where acceptable._
  * Click **Save**.
13. Click the **Lock** icon to enter **Admin Mode**.
14. In the **Documentation** section, add some **documentation**.
15. In the **Frequency** section, add the **Mon-Sun-O** Frequency.
16. Click **Back**.
17. Utilizing the **Copy** function, copy job **Use 2 Job A** to create **Use 2 Job B** and **Use 4 Job**.

#### Create the Resource Dependency

18.	In **Studio**, select **Use 2 Job A**
19. In the side panel, select **Add Resource Dependency**
20. In the **Resource** pop-up:
  * In the **Resource** drop down, select **TrainingResource**.
  * In the **Value** textbox, enter ```2```.
  * Click the **Save** button
21. Repeat **Steps 18-20** to add the **Resource Dependency** of **2** to **Use 2 Job B**.
22. Repeat **Steps 18-20** to add the **Resource Dependency** of **4** to **Use 4 Job**.
23. Close **Library**
24. Close **Studio**.

#### Create the Notification

25. In **Library** > ** Management**, select **Notification Triggers**.
26. Select **Manage Groups**.
27. On the **Manage Groups** screen, click **Add**.
  * In the **Name** field, enter ```ExerciseResource```
  * In the **Type** dropdown, select **Schedule**.
  * In the **Schedule List**, select **My Resource Schedule**.
  * Click **Save**.
28. Return to the **Notification Triggers** main screen.
29. Click **Add**.
30. In the bottom of the **Notification Triggers** screen:
  * In the **Group Name** dropdown list, select **ExerciseResource**.
  * In the **Trigger Name** dropdown list, select **Job Running**.
  * Click the **+** button for an **Email** alert.
  * In the **Email** pop-up window:
    * In the **To** field, enter ```smauser@congo.local``` or property if you created one.
	* In the **Subject** field, enter ```Resources in Use for TrainingResource when [[$JOB NAME]] is running```
	* In the **Message** field, enter ```Number of Resources for resource TrainingResource => [[RU.TrainingResource]]/[[RM.TrainingResource]]```
	* Click the **OK** button.
  * Click the **Save** button.
31. Close **Library**.

#### Build the Schedule

32.	Build the Schedule Released for today and view the Schedule and Job results in **Processes**.
33.	Be sure the **My Resources Schedule** is Completed
34.	Open Thunderbird and check the inbox. You should find ```3``` new emails.
35. Close **Operations**



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
27.	Close the **Notification Manager** tab.
28.	Build the Schedule Released for today.
	* Open one of the operations views (**List** or **Matrix**) or use **Solution Manager**.
29.	Be sure the **My Resources Schedule** is Completed
30.	Open Thunderbird and check the inbox. _You should find ```6``` new emails._

</details>