---
sidebar_label: 'Unit 4 Exercise 12'
---

## Exercise 12: File Arrival - Multiple Files

### Objective

To use File Arrival to detect the arrival of a multiple files and add a container jobs to process each one.

### Summary

You are going to create a schedule with three jobs. One job will create the files we are looking for, one will be the File Arrival job to 'look' for the new created files, and the last will be a Container job to process each file found.

### Instructions

#### Create the Sub-Schedule to Process the Files

1.  In **Library** > **Administration**, select on **Master Schedule**. 
2.  Click the **Add** button.
3.  On the **Master Schedule Definition** screen:
* In the **Name** field, enter ```SS-MultipleFiles```
* Add **Documentation**
* Click **Sub Schedule**
* Saturday and Sunday are working day
* Do **NOT** use **Master Schedule**
* Click **Save**
4.  Click **Back**

#### Add the Process File Job

5.  In the **Schedule List**, search for and select the **SS-MultipleFiles** sub-schedule.
6.  Click **View**
7.  Click **Add Job**
8.  On the **Master Job Definition** screen:
* In the **Name** field, enter ```Process File```
* In the **Job Type** drop-down, select **Windows**
* In the **Machine Selection** drop-down, select **SMATraining**
* In the **User ID** drop-down, select **SMATRAINING\SMAUSER**
* In the **Command Line** field, enter ```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10```
  * _Remember to use properties where acceptable._
* Click **Save**
* Add **Documentation** to the Job. 
* Give the Job a **Frequency** of ```Mon-Sun-O```.
* click **Save**
9.  Click **Back**

#### Add the Archive File Job

10.  Click **Add Job**
11.  On the **Master Job Definition** screen:
* In the **Name** field, enter ```Archive File```
* In the **Job Type** dropdown, select **Windows**.
* In the **Machine Selection** dropdown, select the **SMATraining** machine for the Job to run on. 
* In the **Job Sub-Type** section, click the blue **Edit** button.
* In the **Job Sub-Type Details** pop-up window: 
  * Select **Command: File Move**.  
  * In the **Source** field, type ```"[[SI.FILENAME]]"```
  * In the **Destination** field, type ```"C:\Multi-File Arrival\Archive\"```
  * Click the **Save** button.
* In the **User ID** dropdown, select **SMATRAINING\SMAUSER**
* Click the **Save** 
* Click the **Lock** button in the upper right-hand corner.
* Add some **Documentation** to the Job.
* In the **Frequency** section, move **Mon-Sun-O** from the **Inactive** column and to the **Active** column.
* Click **Save**
12.  Click **Back**
13. Make the **Archive File** job dependent on the **Process File** job when it completes successfully.
14. Click **Back**

#### Create the Parent Schedule

15. Click the **Add** button.
16. On the **Master Schedule Definition** screen:
* In the **Name** field, enter ```File Arrival - Multiple Files```
* Add **Documentation**
* Pick your working days
* Configure **Auto Build** and **Auto Delete**.
* Click **Save**
17. Click **Back**

#### Add the FA MultiFile

18.  In the **Schedule List**, search for and select the **File Arrival - Multiple Files** schedule.
19.  Click **View**
20.  Click **Add Job**
21. On the **Master Schedule Definition** screen:
* In the **Name** field, enter ```FA MultiFile```
* In the **Job Type** drop-down, select **Windows**
* In the **Machine Selection**drop-down, select **SMATraining**
* In the **User ID** drop-down, select **SMATRAINING\SMAUSER**
* In the **Job Action** drop-down, select **File Arrival**
* In the **File Name** field, enter ```"C:\Multi-File Arrival\MultiFile*.txt"```
* In the **Start Time** drop-down, enter 0 day at ```09:00 AM```
* In the **End Time** drop-down, enter 0 day at ```06:00 PM```
* In the **File Size Stable Duration (in secs)** drop-down, enter ```5```
22. Add **Documentation** to the Job.
23. Give the Job a **Frequency** of **Mon-Fri-N**
24. In the **Events** section, click **Add**.
25. In the **Create new Event** pop-up window:
* In the **Event Trigger** drop-down, select the **Job Status**
* In the **Trigger Details** drop-down, select **Finished OK**
* In the **Event Template** drop-down, select the **$JOB:ADD** event
* For the **Event Parameters**, use the following, 
  * In the **Schedule Date** field, enter ```[[$SCHEDULE DATE]]```
  * In the **Schedule Name** field, enter ```[[$SCHEDULE NAME]]```,
  * In the **Job Name** field, enter ```MultiFile Processing Job```
  * In the **Frequency Name** field, enter ```OnRequest```
  * In the **Job Instance Definition Name** field, enter ```FILENAME```
  * In the **Job Instance Definition Value** field, enter ```[[JI.$ARRIVED FILE NAME]]```
  * Click **OK**
  * Click the **Save** button
* Click **Save**
26. Click **Back**

#### Add the Create File Job

27. Select **Add Job**.
28. On the **Master Job Definition** screen:
* In the **Name** field, enter ```Create File```
* In the **Job Type** drop-down, select **Windows**
* In the **Machine Selection** drop-down, select **SMATraining**
* In the **Job Action** drop-down, select **Embedded Script**
* In the **User ID** drop-down, select **SMATRAINING\SMAUSER**
* In the **Script** drop-down, select **Windows_MultiFile_Arrival**
* In the **Version** drop-down, select **LATEST (X)**
* In the **Runner** drop-down, select **PowerShell**
* Click **Save**
29. Add **Documentation** to the Job.
30. Give the Job a **Frequency** of **Mon-Fri-N**
31. Select the **Frequecny** in the **Active** column, in the **Job Build Status** drop-down, select **On Hold**
32. Click **Save**
33. click **Back**

#### Add the Container Job

34.	Select **Add Job** in the side menu. 
35. On the **Job Master Definition** screen:
* In the **Name** textbox, enter ```MultiFile Processing Job```. 
* In the **Job Type** dropdown list, select **Container**.
* On the **Master SubSchedule** dropdown list select **SS-MultipleFiles**.
* Click the **Save** button.
* Click the **Lock** icon in the upper right-hand corner.
36. Expand the **Documentation** box and enter in some documentation.
37. Give the Job a **Frequency** of **OnRequest**
38. In the **Create new Event** pop-up window:
* In the **Event Trigger** drop-down, select the **Job Status**
* In the **Trigger Details** drop-down, select **Finished OK**
* In the **Event Template** drop-down, select the **$JOB:RESTART** event
* For the **Event Parameters**, use the following, 
  * In the **Schedule Date** field, enter ```[[$SCHEDULE DATE]]```
  * In the **Schedule Name** field, enter ```[[$SCHEDULE NAME]]```,
  * In the **Job Name** field, enter ```FA MultiFile```
  * Click the **Save** button
39. Click the **Save** button.
40. Click **Back**.

#### Build and Verify Results

41. Build the **File Arrival - Multiple Files** for today **Released**.
42. In **Processes**, notice the **FA MultiFile** is running (no files arrived yet) and that the **MultiFile Processing Job** was not built (It will be added by the FA MultiFile).
43. Release the **Create File Job** in the **MultipleFiles-Main** Schedule. This Job will create the files.
44. Notice that as the **FA MultiFile** finds files, a new **Container Job** is added for each file. Once it finishes the files will be moved to the **Archive** folder.
45. If you check the **Instance Properties** of one of the **Container Jobs**, you will find which file is being processed (from the ```[[SI.FILENAME]]```).



## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 12](../static/videobasic/U4E12.mp4)

:::


1. Create a new **Main Schedule** using the default settings. Name it ** File Arrival - Multiple Files**. Add **Documentation** to the Schedule. 
2. Add a **Windows FA MultiFile** to the **MultipleFiles-Main** Schedule.
 * **Name**: **FA MultiFile**
 * **Job Type**: ```Windows```
 * **Primary Machine**: ```SMATraining```
 * **Job Action**: ```File Arrival```
 * **User ID**: ```SMATRAINING\SMAUSER```
 * **File Name**: ```"C:\Multi-File Arrival\MultiFile*.txt"```
 * **Start Time**: ```0900```
 * **End Time**: ```1700```
 * **File Size Stable Duration (in secs)**: ```5```
3. Give the Job the ```Mon-Fri-N``` Frequency.
4. On the **Events** tab, Add a new Event
 * On the **Event Trigger** screen select the **Job Status** radio button, click **Next**.
 * On the **Trigger Details** screen for **Job Status**, select **Finished OK**, click **Next**.
 * On the **Event Definition** screen, for the **Event Template** select:   

 ```$JOB:ADD,<Schedule date>,<Schedule name>,<Job name>,<Frequency name>,[Job instance property definitions]```

 * For the **Event Parameters**, use the following, 

 ```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],MultiFile Processing Job,OnRequest,FILENAME=[[JI.$ARRIVED FILE NAME]]```

 click **Finish**.
6. Still in the **Job Master** tab and with the **MultipleFiles-Main** Schedule selected, add a new Job. This will be an **embedded script Job** (already configured) that will create the files.
 * **Name**: **Create File**
 * **Job Type**: ```Windows```
 * **Primary Machine**: ```SMATraining```
 * **Job Action**: ```Embedded Script```
 * **User ID**: ```SMATRAINING\SMAUSER```
 * **Script**: ```Windows_MultiFile_Arrival```
 * **Version**: ```LATEST```
 * **Runner**: ```PowerShell```
 * **Arguments**: Do not type anything (leave it blank)
7. Give the Job the ```Mon-Fri-N``` Frequency.
8. Give the Job a **Job Build Status**, of ```On Hold```.
9. Add **Documentation** to the Job.
10. Outside of OpCon verify that the follow folder exists:
```C:\Multi-File Arrival```
11. Back to **Enterprise Manager**, create a new **Schedule**, name it **MultipleFiles-SubSchedule**.
12. Under the **Schedule Properties** frame, mark it as a **SubSchedule**.
13. Add **Documentation** to the SubSchedule.
14. Leave the other fields with the **default values**.
15. Under the **Administration** topic, Double-Click on **Job Master**. 
16. In the **Schedule** drop-down list, select **MultipleFiles-SubSchedule**.
17. Click the **Add** button on the **Job Master** toolbar.
18. In the **Name** textbox, enter **Process File**.
19. Run the **Windows Genericp program** in the **Command Line**.
 * Example: ```"[[MI.PathWindows]]\genericp.exe" -t10 -e0```
20. Give the Job a **Frequency** of ```Mon-Fri-N```.
21. Add **Documentation** to the Job. 
22. With the **MultipleFiles-SubSchedule** selected, click the **Add** button on the **Job Master** toolbar. 
 * **Name**: **Archive File**
 * **Job Type**: ```Windows```
 * **Job Sub-Type**: ```Command: File Move```
 * **Primary Machine**: ```SMATraining```
 * **User ID**: ```SMATTRAINING\SMAUSER```
 * **Source**: ```“[[SI.FILENAME]]”```
 * **Destination**: ```“C:\Multi-File Arrival\Archive\”```
23. Click the **Save** button.
24. Give the Job a **Frequency** of ```Mon-Fri-N```.
25. Add **Documentation** to the Job.
26. Make the **Archive File Job** dependent on the **Process File Job** completing successfully.
27. In the **Job Master**, be sure you have the **MultipleFiles-Main** Schedule selected.
28. Add a Job to the **MultipleFiles-Main** Schedule.
 * Click the **Add** button on the **Job Master** toolbar. 
 * In the **Name** textbox, enter **MultiFile Processing Job**.
 * In the **Job Type** drop-down list, select **Container**.
 * In the **Schedule to run as SubSchedule** drop down select **MultipleFiles-SubSchedule**.
 * Click the **Save** button.
29. Give the Job a **Frequency** of ```OnRequest```.
30. Add **Documentation** to the Job.
31. In the **Events** box, **Add** a new Event.
 * For **Event Trigger** select the **Job Status** radio button, click **Next**.
 * For **Job Status**, select **Finished OK**, click **Next**.
 * For **Event Template** select:   
 ```$JOB:RESTART <Schedule date>,<Schedule name>,<Job name>```

 * For the **Event Parameters**, use the following:   
 ```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],FA MultiFile ```

32. Build the ** File Arrival - Multiple Files** for today **Released**.
33. In a View, notice the **FA MultiFile** is running (no files arrived yet) and that the **MultiFile Processing Job** was not built (```OnRequest``` – It will be added by the FA MultiFile).
35. Release the **Create File Job** in the **MultipleFiles-Main** Schedule. This Job will create the files.
36. Notice that as the **FA MultiFile** finds files, a new **Container Job** is added for each file. Once it finishes the files will be moved to the **Archive** folder.
37. If you check the **Instance Properties** of one of the **Container Jobs**, you will find which file is being processed (from the ```[[SI.FILENAME]]```).
 * Check the **Job Information**.

</details>