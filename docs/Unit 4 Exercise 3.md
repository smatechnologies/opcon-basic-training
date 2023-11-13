---
sidebar_label: 'Unit 4 Exercise 3'
---

## Exercise 3: Thresholds - External Events

### Objective 

To use an Event to increment and decrement the value of a Threshold.

### Summary

Utilizing the **My Threshold Schedule** created in the previous exercise, you will create a new job that will execute a script called **ExerciseThreshold.cmd** and pass a variable of **+1**. You will manually add this job to the Operations View and run it. Then you will modify and rerun the job with a new value of **-1**.

### Instructions

#### Create the Job

1.	In **Library** > **Administration**, select **Master Job**.
2.  Click **Add**
3.	In the **Master Job Definition** screen:
* In the **Schedule** drop down, select **My Threshold Schedule**.
* In the **Name** field, enter ```Threshold External Event Job```.
* In the **Job Type** drop down, select **Windows**.
* In the **Machine** drop down, select **SMATraining**.
* In the **User ID** drop down, select **SMATRAINING\SMAUSER**.
* In the **Command Line** field, enter ```"C:\scripts\ExerciseThreshold.cmd" +1```. _Remeber to use properties where acceptable._
* Do not forget to add **Documentation**.
* In the **frequency** section, move the ```Mon-Sun-O``` frequency into the **Active** column.
  
#### Validate the Current Value of the Threshold

4.	In **Library** > **Administration**, select **Thresholds**.
5.	Select **TrainingThreshold**.
6.	Check the value. At this moment, it should be ```0```.
7.  Exit **Thresholds** without making any changes.

#### Add the Job to Operations

8.	Open **Processses** to verify that **My Threshold Schedule** is completed.
9. Return to **My Threshold Schedule** and add the Job just created to the Daily Schedule list.
* Select **My Threshold Schedule** and click the **(+)** button in the **Schedule Selection** side menu.
* Select **Threshold External Event Job** and click the **Next** button.
* Change the Build Status to **Released**.
* Click the **Next** button.
* Click the **Submit** button.
* Close the **Add Jobs** results screen.
* Wait until the Job finishes **OK**.
10.	In **Library** > **Administration**, select **Thresholds**.
11.	Select **TrainingThreshold** from the **Select Threshold** drop-down list.
12.	Check the value. At this moment, it should be ```1```. 

:::note
What happened?
* The Job ran and created a file under the ```MSGIN``` folder. 
* The file sent the ```$THRESHOLD:SET,TrainingThreshold,+1``` event using the ```ocadm``` OpCon account and its event token (```opconxps```).
  * OpCon received the Event and processed it. It updated the value of the Threshold: ```0 + 1 = 1```
:::

13.	Return to the **Processes** screen.
14.	Right-Click the **Threshold External Event Job**.
15. Click the **Wrench** icon to open the **Daily Job Definition**.
16. Click the **Lock** icon to edit Daily details.
17.	In **Task Details**, change the **Command Line** to this: ```“C:\scripts\ExerciseThreshold.cmd” -1```
18.	Click the **Save** button (This will only save the Job in the Daily Definiton).
19.	In **Processes**, right-Click the Job and select **Restart** in the **Job Status Update**.
20.	Wait until the Job finishes **OK**.
21.	In **Library** > **Administration**, select **Thresholds**.
22.	Select **TrainingThreshold**.
23.	Check the value. At this moment, it should be back to ```0```. 

:::note
What happened?
* The Job ran and created a file under the ```MSGIN``` folder. 
* The file sent the ```$THRESHOLD:SET,TrainingThreshold,-1``` Event using the ```ocadm``` OpCon account and its Event password (```opconxps```).
  * OpCon received the Event and processed it. It updated the value of the Threshold: ```1 - 1 = 0```
:::



## Enterprise Manager

<details>


:::tip [Walkthrough Video - Unit 4 Exercise 3](../static/videobasic/U4E3.mp4)

:::


1.	Open **Enterprise Manager**.
2.	Under the **Administration** topic, Double-Click **Job Master**.
3.	Select **My Threshold Schedule** from the Schedule drop-down list.
4.	Click the **Add** button on the **Job Master** toolbar.
5.	Add a new Job named **Threshold External Event Job**.
6.	Setup this Job to run the **script** named ```ExerciseThreshold.cmd```, passing ```+1``` as a parameter:
	* The command line must be: 
	```
	“C:\scripts\ExerciseThreshold.cmd” +1
	```
	* The Job will run on the ```SMATraining``` machine
	* Use the ```SMATRAINING\SMAUSER``` User ID 
	* Add the ```Example-Mon-Sun-O``` Frequency to the Job (refer to Job definition in Unit 1 for help).
	* Do not forget to add **Documentation**.
7.	Under **Administration**, Double-Click **Thresholds**.
8.	Select **TrainingThreshold** from the **Select Threshold** drop-down list.
9.	Check the value. At this moment, it should be ```0```.
10.	Close the **Thresholds** tab.
11.	Open one of the Operations view (**Matrix** or **List**).
12.	Check if the **My Threshold Schedule** is Completed.
	* If it is not Completed, Cancel all the Jobs.
	* Wait until the Schedule is **Completed**.
13.	Right-Click the **My Threshold Schedule> Maintenance> Add Jobs**.
14.	Check the checkbox for the **Threshold External Event Job** and then click **Add Job**.
15.	Select the **Released** radio button and click **Yes**.
16.	Click **Close**.
17.	Wait until the Job finishes **OK**.
18.	Under **Administration**, Double-Click **Thresholds**.
19.	Select **TrainingThreshold** from the **Select Threshold** drop-down list.
20.	Check the value. At this moment, it should be ```1```. What happened?
	* The Job ran and created a file under the ```MSGIN``` folder. The file sent the ```$THRESHOLD:SET,TrainingThreshold,+1``` Event using the ```ocadm``` OpCon account and its Event password (```opconxps```).
	* OpCon received the Event and processed it. It updated the value of the Threshold: ```0 + 1 = 1```
21.	Close the Thresholds tab.
22.	Go back to one of your **Operations Views**.
23.	Right-Click the **Threshold External Event Job> Maintenance> Edit Daily Job**.
24.	Change the **Command Line** to this: ```“C:\scripts\ExerciseThreshold.cmd” -1```
25.	Click the **Save** button in the **Daily Job** toolbar (_Do not save the Job to the Master_).
26.	Close the Job Daily (**Threshold External Event Job**) tab.
27.	Right-Click the Job and select **Restart**.
28.	Wait until the Job finishes **OK**.
29.	Under **Administration**, Double-Click **Thresholds**.
30.	Select **TrainingThreshold** from the **Select Threshold** drop-down list.
31.	Check the value. At this moment, it should be back to ```0```. What happened?
	* The Job ran and created a file under the ```MSGIN``` folder. The file sent the ```$THRESHOLD:SET,TrainingThreshold,-1``` Event using the ```ocadm``` OpCon account and its Event password (```opconxps```).
	* OpCon received the Event and processed it. It updated the value of the Threshold: ```1 - 1 = 0```
32.	Close the **Thresholds** tab.

</details>