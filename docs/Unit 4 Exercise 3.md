---
sidebar_label: 'Unit 4 Exercise 3'
---

### Exercise 3: Thresholds - External Events

##### Objective: 

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

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

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