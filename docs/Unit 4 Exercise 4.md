---
sidebar_label: 'Unit 4 Exercise 4'
---

## Exercise 4: Existing Embedded Script

### Objective

Within the existing **Embedded Scripts Training Schedule**, create a Windows Job named **Create Daily Folde**r that runs a Monday-Friday Frequency. The Job should run a **Job Action** of ```Embedded Script```. The Script should be the ```Create_Folder``` script using the ```LATEST``` version with a ```Command Shell``` **Runner**.

Be sure that the **Global System Property** ```$SCHEDULE DATEYYYYMM``` exists. If it does not, create it.

Build the Schedule Released for Today and verify that the folder ```“C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]”``` was created for Today.

### Instructions

1.	In **Library**, under the **Administration** topic, select  **Master Schedules**. 
2.	In the **Schedule** drop-down list, select **Embedded Scripts Training** and click the **View** button.
3.	Click the **Add Job** button on the side menu. 
4.	In the **Name** textbox, enter **Create Daily Folder**.
5.	In the **Job Type** drop-down list, select ```Windows```.
6.	In the **Machine Selection** drop-down list, select ```SMATraining```. 
7.	In the **Job Action** drop-down list, select ```Embedded Script```.
8.	In the **User ID** drop-down menu, select ```SMATRAINING\SMAUSER```.
9.	In the **Script** drop-down list, select the ```Create_Folder```. 
10.	Leave the Version as ```LATEST```.
11.	In the **Runner** drop-down menu, select ```Command Shell```.
12.	In the **Arguments** textbox, type the following: 
```
“C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]”
```
13.	Click the **Save** button.
14. Click the **Lock** icon in the upper right-hand corner.
15.	Scroll to the **Frequency** sections and give the Job a Frequency of **Mon-Fri-N**.
16.	Add **Documentation** and then click the **Save** button.
17.	Outside of OpCon (Using **Windows File Explorer**) verify that the following folder does not exist:  
```
“C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]”
```
(where ```$SCHEDULE DATEYYYYMM``` refers to the current month of the current year)

28.	Return to **Solution Manager** and build the **Embedded Scripts Training Schedule** **Released** for today.
24.	Once the Job completes successfully, verify that the folder was created in **Windows File Explorer**.


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 4](../static/videobasic/U4E4.mp4)

:::


1.	Under the **Scripts** topic, Double-Click on **Repository**. 
2.	Double-Click on the **Create Folder** script.
3.	Double-Click on the **last version** of the script.
4.	The content of the scripts will be displayed. This script checks to see if a folder exists. If it already exists, it exits without doing anything. If it does not exist, then it will create the folder.
5.	Click **Cancel** and then **Close**.
6.	Close the **Script Repository** tab.
7.	Under the **Administration** topic, Double-Click on **Job Master**. 
8.	In the **Schedule** drop-down list, select **Embedded Scripts Training**.
9.	Click the **Add** button on the **Job Master** toolbar. 
10.	In the **Name** textbox, enter **Create Daily Folder**.
11.	In the **Job Type** drop-down list, select ```Windows```.
12.	In the **Primary Machine** drop-down list, select ```SMATraining```. 
13.	In the **Job Action** drop-down list, select ```Embedded Script```.
14.	In the **User ID** drop-down menu, select ```SMATRAINING\SMAUSER```.
15.	In the **Script** drop-down list, select the ```Create_Folder```. 
16.	Leave the Version as ```LATEST```.
17.	In the **Runner** drop-down menu, select ```Command Shell```.
18.	In the **Arguments** textbox, type the following: 
```
“C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]”
```
19.	Click the **Save** button.
20.	Give the Job a Frequency of **Mon-Fri-N**.
21.	Add **Documentation** and then close the **Job Master**.
22.	Outside of OpCon verify that the following folder does not exist:  
```
“C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]”
```
(where ```$SCHEDULE DATEYYYYMM``` refers to the current month of the current year)

23.	Go back to **Enterprise Manager** and build the **Embedded Scripts Training Schedule** **Released** for today.
24.	Once the Job completes successfully, verify that the folder was created.

</details>