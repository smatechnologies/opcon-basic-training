---
sidebar_label: 'Unit 4 Exercise 5'
---

### Exercise 5: Importing a Script

##### Objective:

In the **Script Repository**, Add a new Script named ```SetThreshold```. Import the ```ExerciseThreshold.cmd``` file and select ```Command Shell``` and ```Initial Version``` for the Script options. Be sure the Script is assigned to ```Role_ocadm```.

Within the existing **Embedded Scripts Training Schedule**, create a Job named **ExerciseThreshold** that runs a Monday-Friday Frequency. The job should run a **Job Action** of ```Embedded Script```. The Script should be the SetThreshold script using the LATEST version with a ```Command Shell``` Runner. In the **Arguments** textbox: ```+2```.

In Matrix View, right-click the **Embedded Scripts Training Schedule** and Add the **ExerciseThreshold** Job Released for Today.

When the Job has finished, check the value of the Threshold. 

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E5.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

:::tip [Walkthrough Video - Unit 4 Exercise 5](../static/videobasic/U4E5.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

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