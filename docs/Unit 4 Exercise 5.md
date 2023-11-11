---
sidebar_label: 'Unit 4 Exercise 5'
---

## Exercise 5: Importing a Script

### Objective

To import a script into the repository and create a job to run it.

### Summary

In the **Script Repository**, import a script called **ExerciseThreshold.cmd**. Utilizing the existing schedule called **Embedded Scripts Training**, create a Job named **ExerciseThreshold** that runs the newly imported script.

### Instructions

1.	In **Library** > **Administration**, select **Scripts**.
2.  Click **Add**.
3.  On the **Add New Script** page:
*  In the **Name** field, enter ```SetThreshold```
*  In the **Type** drop-down, select **Command Shell**.
*  In the **Description** field, enter in some documentation.
*  Verify that **Role_ocadm** is granted permissions.
*  In the **Comment** box, leave **Initial Version**.
*  In the **Script** field, click the **Open File** button.
*  Navigate to the **C:\scripts** folder, select the **ExerciseThreshold.cmd** file and click **Open**.
*  Click the **Save** button.

#### Create the Job

4.  In **Library** > **Administration**, select **Master Schedules**. 
5.	Select **Embedded Scripts Training** and click **View**.
6.  Select **Add Job** in the side menu.
7.  In the **Master Job Definition** screen:
*  In the **Name** textbox, enter ```ExerciseThreshold```. 
*  In the **Job Type** dropdown list, select **Windows**.
*  In the **Machine Selection** dropdown list, select the **SMATraining**. 
*  In the **User ID** dropdown menu, select **SMATRAINING\SMAUSER**.
*  In the **Job Action** dropdown list, select **Embedded Script**.
*  In the **Script** dropdown list, select the **SetThreshold**. 
*  Leave the **Version** as **LATEST (X)**.
*  In the **Runner** dropdown menu, select **Command Shell**.
*  In the **Arguments** textbox, type the following: ```+2```
*  Click the **Save** button.
8. Click the **Lock** icon in the upper right-hand corner.
9.	Give the Job a Frequency of **Example-Mon-Fri-O**.
10. Click the **Save** button.

#### Validate the Initial Threshold Value

11.	Open **Thresholds** and check the current value of the **TrainingThreshold**. It should be ```0```.

#### Build the Job

12.	In **Processes**, right-click on **Embedded Scripts Training** for today.
13. Click the **(+)** icon in the side menu.
14. In the Add Job pop-up window:
* Select **Exercise Threshold** and click the **Next** button.
* Change the Build Status to **Released**.
* Click the **Next** button.
* Click the **Submit** button.
* Close the **Add Jobs** results screen.
* Wait until the Job finishes **OK**.
15.	After the Job is finished, open the **Thresholds** tab and check the value. It must be ```2```.
16.	For practice, **edit the Daily Job** and change the value in the **Arguements** field to ```0```, restart the Job and check the **Threshold** again.

:::note
The TrainingThreshold should have a value of 0 when this exercise is complete.
:::


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 5](../static/videobasic/U4E5.mp4)

:::


:::note
In this exercise we will import a script created in Unit 3 to the OpCon database
:::

1.	Under the **Scripts** topic, Double-Click on **Repository**. 
2.	Click the **Add** button in the **Script Repository** toolbar.
3.	Type **SetThreshold** in the **Name** textbox.
4.	Type some **Documentation** in the Description field.
5.	Click the **Open File** button.
6.	Navigate to the ```C:\scripts``` folder, select the ```ExerciseThreshold.cmd``` file and click **Open**.
7.	The script is loaded to your screen.
8.	Select **Command Shell** from the **Type** drop-down list.
9.	Leave **Initial Version** in the Initial Comments textbox.
10.	Click the **Save** button.
11.	Assign a **Script** to a **Role**. (In this case, leave ```Role_ocadm``` as the Assigned Role).
12.	Close the **Scripts Repository** tab.
13.	Under the **Administration** topic, Double-Click on **Job Master**. 
14.	In the **Schedule** drop-down list, select **Embedded Scripts Training**.
15.	Click the **Add** button on the **Job Master** toolbar. 
16.	In the **Name** textbox, enter **ExerciseThreshold**.
17.	In the **Job Type** drop-down list, select ```Windows```.
18.	In the **Primary Machine** drop-down list, select the ```SMATraining```. 
19.	In the **Job Action** drop-down list, select ```Embedded Script```.
20.	In the **User ID** drop-down menu, select ```SMATRAINING\SMAUSER```.
21.	In the **Script** drop-down list, select the ```SetThreshold```. 
22.	Leave the **Version** as ```LATEST```.
23.	In the **Runner** drop-down menu, select ```Command Shell```.
24.	In the **Arguments** textbox, type the following: ```+2```
25.	Click the **Save** button.
26.	Give the Job a Frequency of ```Mon-Fri-N```.
27.	Add **Documentation** and then close the **Job Master**.
28.	Open the **Threshold**s and check the current value of the **TrainingThreshold**. It should be ```0```.
29.	Close the **Thresholds** tab.
30.	Go to one of the operations screen, Right-Click the **Embedded Scripts Training Schedule> Maintenance> Add Jobs**.
31.	Select the **ExerciseThreshold** Job and click **Add Job**.
32.	Select the **Released** radio button and click **Yes**.
33.	Click **Close**.
34.	After the Job is finished, open the **Thresholds** tab and check the value. It must be ```2```.
35.	Close the **Thresholds** tab.
36.	For practice, **edit the Daily Job** changing the **Parameter** back to ```0```, restart the Job and check the **Threshold** again.

</details>