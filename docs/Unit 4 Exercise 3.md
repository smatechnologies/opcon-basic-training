---
sidebar_label: 'Unit 4 Exercise 3'
---

## Exercise 3: Thresholds - External Events

### Objective 

Within the **My Threshold Schedule**, create a new Job named **Threshold External Event Job**. This Job should run on a ```7 day``` Frequency with the Command Line:

```
“C:\scripts\ExerciseThreshold.cmd” +1
```

In Matrix View, right-click the **My Threshold Schedule** and Add the **Threshold External Event Job** Released for Today.

Check the value of ```TrainingThreshold```.

Edit the Job Command Line to:

```
“C:\scripts\ExerciseThreshold.cmd” -1
```

Restart the Job and when it finishes, check the value of TrainingThreshold again to verify success.

### Instructions

1.	In **Library**, under the **Administration** topic, select **Master Schedules**.
2.	Select **My Threshold Schedule** and click the **View** button.
3.	Select **Add Job** in the side menu.
4.	Name the new Job **Threshold External Event Job**.
5.	Setup this Windows Job to run the **script** named ```ExerciseThreshold.cmd```, passing ```+1``` as a parameter:
	* The command line must be: 
	```
	“C:\scripts\ExerciseThreshold.cmd” +1
	```
	* The Job will run on the ```SMATraining``` machine
	* Use the ```SMATRAINING\SMAUSER``` User ID 
	* Add the ```Mon-Sun-O``` Frequency to the Job.
	* Do not forget to add **Documentation**.
6.	In **Library**, under **Administration**, select **Thresholds**.
7.	Select **TrainingThreshold**.
8.	Check the value. At this moment, it should be ```0```.
9.  Exit **Thresholds** without making any changes.
10.	Open **Processses** to verify that **My Threshold Schedule** is completed.
11. Return to **My Threshold Schedule** and add the Job just created to the Daily Schedule list.
	* Select **My Threshold Schedule** and click the **(+)** button in the **Schedule Selection** side menu.
	* Select **Threshold External Event Job** and click the **Next** button.
	* Change the Build Status to **Released**.
	* Click the **Next** button.
	* Click the **Submit** button.
	* Close the **Add Jobs** results screen.
	* Wait until the Job finishes **OK**.
18.	In **Library**, under **Administration**, select **Thresholds**.
19.	Select **TrainingThreshold** from the **Select Threshold** drop-down list.
20.	Check the value. At this moment, it should be ```1```. What happened?
	* The Job ran and created a file under the ```MSGIN``` folder. The file sent the ```$THRESHOLD:SET,TrainingThreshold,+1``` Event using the ```ocadm``` OpCon account and its Event password (```opconxps```).
	* OpCon received the Event and processed it. It updated the value of the Threshold: ```0 + 1 = 1```
21.	Return to the **Processes** screen.
22.	Right-Click the **Threshold External Event Job**.
23. Click the **Wrench** icon to open the **Daily Job Definition**.
24. Click the **Lock** icon to edit Daily details.
24.	In **Task Details**, change the **Command Line** to this: ```“C:\scripts\ExerciseThreshold.cmd” -1```
25.	Click the **Save** button (This will only save the Job in the Daily Definiton).
26.	In **Processes**, right-Click the Job and select **Restart** in the **Job Status Update**.
27.	Wait until the Job finishes **OK**.
28.	In **Library**, under **Administration**, select **Thresholds**.
29.	Select **TrainingThreshold**.
30.	Check the value. At this moment, it should be back to ```0```. What happened?
	* The Job ran and created a file under the ```MSGIN``` folder. The file sent the ```$THRESHOLD:SET,TrainingThreshold,-1``` Event using the ```ocadm``` OpCon account and its Event password (```opconxps```).
	* OpCon received the Event and processed it. It updated the value of the Threshold: ```1 - 1 = 0```



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