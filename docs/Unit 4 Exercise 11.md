---
sidebar_label: 'Unit 4 Exercise 11'
---

## Exercise 11: Windows File Arrival

### Objective:

To use File Arrival to detect the arrival of a single file.

### Summary

You are going to create a schedule with two jobs. One job will create the file we are looking for and the other will be the File Arrival job to 'look' for the new created file.

### Instructions

#### Create the Schedule

1. In **Library** > **Administration**, select on **Master Schedule**. 
2. Click the **Add** button.
3. On the **Master Schedule Definition** screen:
* In the **Name** field, enter ```File Arrival - Single File```
* Add **Documentation**
* Pick your working days
* Configure **Auto Build** and **Auto Delete**.
* Click **Save**
4. Click **Back**

#### Create the File Arrival Job

4. Select the **Windows File Arrival** schedule in **Schedule List** and click the **View** button.
5. Select **Add Job** in the side menu 
6. On the **Master Schedule Definition** screen:
* In the **Name** field, enter ```FA WindowsFile1```
* In the **Job Type** drop-down, select **Windows**
* In the **Machine Selection**drop-down, select **SMATraining**
* In the **User ID** drop-down, select **SMATRAINING\SMAUSER**
* In the **Job Action** drop-down, select **File Arrival**
* In the **File Name** field, enter ```"C:\Windows File Arrival\WindowsFile1.txt"```
* In the **Start Time** drop-down, enter 0 day at ```09:00 AM```
* In the **End Time** drop-down, enter 0 day at ```06:00 PM```
* In the **File Size Stable Duration (in secs)** drop-down, enter ```5```
7. Add **Documentation** to the Job.
8. Give the Job a **Frequency** of **Mon-Fri-N**
9. click **Back**

#### Create the File Creation Job

10. Select **Add Job**.
11. On the **Master Job Definition** screen:
* In the **Name** field, enter ```Create File```
* In the **Job Type** drop-down, select **Windows**
* In the **Machine Selection** drop-down, select **SMATraining**
* In the **User ID** drop-down, select **SMATRAINING\SMAUSER**
* In the **Job Action** drop-down, select **Embedded Script**
* In the **Script** drop-down, select **Windows_File_Arrival**
* In the **Version** drop-down, select **LATEST (X)**
* In the **Runner** drop-down, select **PowerShell**
* Click **Save**
12. Add **Documentation** to the Job.
13. Give the Job a **Frequency** of **Mon-Fri-N**
14. Select the **Frequency** in the **Active** column, in the **Job Build Status** drop-down, select **On Hold**
15. Click **Save**
16. click **Back**

#### Build the Schedule
11. Outside of OpCon verify that the folder: ```C:\Windows File Arrival``` **DOES** exist and is **Empty**.
12. Build the **File Arrival - Single File** Schedule Released for today.
13. In **Processes**, view the Schedule and Job runs.  
14. Notice the **Windows File Arrival Job** is just running.
15. Release the **Create File Job** in the **File Arrival - Single File** Schedule.  
16. Once the Job runs, verify that the file was created, and both Jobs **Finished OK**.


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 11](../static/videobasic/U4E11.mp4)

:::


1. Add a new **Schedule** called **Windows File Arrival**, add **Documentation** and use the default values for the Schedule.
2. In the **Job Master** add a new Job to the **Windows File Arrival** Schedule.
 * **Name**: **Windows File Arrival Job**
 * **Job Type**: ```Windows```
 * **Primary Machine**: ```SMATraining```
 * **Job Action**: ```File Arrival```
 * **User ID**: ```SMATRAINING\SMAUSER```
 * **File Name**: ```“C:\Windows File Arrival\WindowsFile1.txt”```
 * **Start Time**: ```0900```
 * **End Time**: ```1700```
 * **File Size Stable Duration (in secs)**: ```5```
3. Give the Job a **Frequency** of **Mon-Fri-N**
4. Add **Documentation** to the Job.
5. With **Windows File Arrival** Schedule still selected in the **Job Master** click the **Add** button on the Job Master toolbar (or press Ctrl+N) to add a new Job.
 * **Name**: **Create File**
 * **Job Type**: ```Windows```
 * **Primary Machine**: ```SMATraining```
 * **Job Action**: ```Embedded Script```
 * **User ID**: ```SMATRAINING\SMAUSER```
 * **Script**: ```Windows_File_Arrival```
 * **Version**: ```LATEST```
 * **Runner**: ```PowerShell```
 * **Arguments**: Do not type anything (leave it blank)
 * Save the Job
6. Give the Job the **Frequency** of ```Mon-Fri-N```. 
 * Give the Job a **Job Build Status**, of **On Hold**.
7. Close the **Schedule Master** and the **Job Master**.
8. Outside of OpCon verify that the folder: ```C:\Windows File Arrival```
Does exist and is **empty**.
9. Back to **EM**, build the **Windows File Arrival** Schedule Released for today only.
10. Switch to one of the **Operations views**.  
11. Notice the **Windows File Arrival Job** is just running.
12. Release the **Create File Job** in the **Windows File Arrival** Schedule.  
13. Once the Job runs, verify that the file was created, and both Jobs **Finished OK**.

</details>