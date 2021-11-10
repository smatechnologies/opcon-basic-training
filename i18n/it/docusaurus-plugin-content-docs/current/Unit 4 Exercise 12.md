---
sidebar_panel: 'Unit 4 Exercise 12'
---

### Exercise 12: File Arrival - Multiple Files

##### Objective:

Create a Schedule named **MultipleFiles-Main Schedule**.

Within the **MultipleFiles-Main Schedule**, create a Windows Job named **File Arrival Job** with a ```File Arrival``` **Job Action** running a Monday-Friday Frequency.

**File Name**: ```“C:\Multi-File Arrival\MultiFile*.txt”```
**Start Time**: ```0900```
**End Time**: ```1700```
**File Size Stable Duration (in secs)**: ```5```

Add a ```$JOB:ADD``` **Event** on the Job with the following parameters:

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],MultiFile Processing Job,OnRequest,FILENAME=[[JI.$ARRIVED FILE NAME]]
```

Within the **MultipleFiles-Main Schedule**, create a Windows Job named **Create File** with an ```Embedded Script``` **Job Action** running a Monday-Friday Frequency. The Job should run the ```Windows_MultiFile_Arrival``` Script with a ```PowerShell``` Runner. Give the Job a Build Status of ```On Hold```.

Create a Schedule named **MultipleFiles-SubSchedule**. Mark the Schedule as a **SubSchedule**.

Within the **MultipleFiles-SubSchedule**, create a Windows Job named **Process File** running the genericp program on a Monday-Friday Frequency.

Within the **MultipleFiles-SubSchedule**, create a Windows Job named **Archive File** with a **Job Sub-Type** of ```Command: File Move``` running a Monday-Friday Frequency.

**Source**: ```“[[SI.FILENAME]]”```
**Destination**: ```“C:\Multi-File Arrival\Archive\”```

Create a **Requires Dependency** for the **Archive File** Job and **Process File** Job.

**Archive File Job > Process File Job**

Within the **MultipleFiles-Main Schedule**, create a Job named **MultiFile Processing Job** that runs the **MultipFiles-SubSchedule** as a **Container Job** with an ```OnRequest``` Frequency.

Add a ```$JOB: RESTART``` **Event** to the Job  with the following parameters:

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival Job
```

Build the Schedule Released for Today. Release the **Create File** Job in the **MultipleFiles-Main Schedule**. Check the Instance Properties of one of the Container Jobs in Job Information to verify file processing.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E12.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Create a new **Main Schedule** using the default settings. Name it **MultipleFiles-Main Schedule**. Add **Documentation** to the Schedule. 
2.	Add a **Windows File Arrival Job** to the **MultipleFiles-Main** Schedule.
	* **Name**: **File Arrival Job**
	* **Job Type**: ```Windows```
	* **Primary Machine**: ```SMATraining```
	* **Job Action**: ```File Arrival```
	* **User ID**: ```SMATRAINING\SMAUSER```
	* **File Name**: ```"C:\Multi-File Arrival\MultiFile*.txt"```
	* **Start Time**: ```0900```
	* **End Time**: ```1700```
	* **File Size Stable Duration (in secs)**: ```5```
3.	Give the Job the ```Mon-Fri-N``` Frequency.
4.	On the **Events** tab, Add a new Event
	* On the **Event Trigger** screen select the **Job Status** radio button, click **Next**.
	* On the **Trigger Details** screen for **Job Status**, select **Finished OK**, click **Next**.
	* On the **Event Definition** screen, for the **Event Template** select:   

	```$JOB:ADD,<Schedule date>,<Schedule name>,<Job name>,<Frequency name>,[Job instance property definitions]```

	* For the **Event Parameters**, use the following, 

	```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],MultiFile Processing Job,OnRequest,FILENAME=[[JI.$ARRIVED FILE NAME]]```

	click **Finish**.
6.	Still in the **Job Master** tab and with the **MultipleFiles-Main** Schedule selected, add a new Job. This will be an **embedded script Job** (already configured) that will create the files.
	* **Name**: **Create File**
	* **Job Type**: ```Windows```
	* **Primary Machine**: ```SMATraining```
	* **Job Action**: ```Embedded Script```
	* **User ID**: ```SMATRAINING\SMAUSER```
	* **Script**: ```Windows_MultiFile_Arrival```
	* **Version**: ```LATEST```
	* **Runner**: ```PowerShell```
	* **Arguments**: Do not type anything (leave it blank)
7.	Give the Job the ```Mon-Fri-N``` Frequency.
8.	Give the Job a **Job Build Status**, of ```On Hold```.
9.	Add **Documentation** to the Job.
10.	Outside of OpCon verify that the follow folder exists:
```C:\Multi-File Arrival```
11.	Back to **Enterprise Manager**, create a new **Schedule**, name it **MultipleFiles-SubSchedule**.
12.	Under the **Schedule Properties** frame, mark it as a **SubSchedule**.
13.	Add **Documentation** to the SubSchedule.
14.	Leave the other fields with the **default values**.
15.	Under the **Administration** topic, Double-Click on **Job Master**. 
16.	In the **Schedule** drop-down list, select **MultipleFiles-SubSchedule**.
17.	Click the **Add** button on the **Job Master** toolbar.
18.	In the **Name** textbox, enter **Process File**.
19.	Run the **Windows Genericp program** in the **Command Line**.
	* Example: ```"[[MI.PathWindows]]\genericp.exe" -t10 -e0```
20.	Give the Job a **Frequency** of ```Mon-Fri-N```.
21.	Add **Documentation** to the Job. 
22.	With the **MultipleFiles-SubSchedule** selected, click the **Add** button on the **Job Master** toolbar. 
	* **Name**: **Archive File**
	* **Job Type**: ```Windows```
	* **Job Sub-Type**: ```Command: File Move```
	* **Primary Machine**: ```SMATraining```
	* **User ID**: ```SMATTRAINING\SMAUSER```
	* **Source**: ```“[[SI.FILENAME]]”```
	* **Destination**: ```“C:\Multi-File Arrival\Archive\”```
23.	Click the **Save** button.
24.	Give the Job a **Frequency** of ```Mon-Fri-N```.
25.	Add **Documentation** to the Job.
26.	Make the **Archive File Job** dependent on the **Process File Job** completing successfully.
27.	In the **Job Master**, be sure you have the **MultipleFiles-Main** Schedule selected.
28.	Add a Job to the **MultipleFiles-Main** Schedule.
	* Click the **Add** button on the **Job Master** toolbar. 
	* In the **Name** textbox, enter **MultiFile Processing Job**.
	* In the **Job Type** drop-down list, select **Container**.
	* In the **Schedule to run as SubSchedule** drop down select **MultipleFiles-SubSchedule**.
	* Click the **Save** button.
29.	Give the Job a **Frequency** of ```OnRequest```.
30.	Add **Documentation** to the Job.
31.	Add an **Event** to the Job
	* On the **Event Trigger** screen select the **Job Status** radio button, click **Next**.
	* On the **Trigger Details** screen for **Job Status**, select **Finished OK**, click **Next**.
	* On the **Event Definition** screen, for the **Event Template** select:   
	```$JOB:RESTART <Schedule date>,<Schedule name>,<Job name>```

	* For the **Event Parameters**, use the following:   
	```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival Job ```

	* and click **Finish**.
32.	Build the **MultipleFiles-Main** Schedule for today **Released**.
33.	Switch to an **Operations View**.  
34.	Notice the **File Arrival Job** is running (no files arrived yet) and that the **MultiFile Processing Job** was not built (```OnRequest``` – It will be added by the File Arrival Job).
35.	Release the **Create File Job** in the **MultipleFiles-Main** Schedule. This Job will create the files.
36.	Notice that as the **File Arrival Job** finds files, a new **Container Job** is added for each file. Once it finishes the files will be moved to the **Archive** folder.
37.	If you check the **Instance Properties** of one of the **Container Jobs**, you will find which file is being processed (from the ```[[SI.FILENAME]]```).
	* Check the **Job Information**.

</details>