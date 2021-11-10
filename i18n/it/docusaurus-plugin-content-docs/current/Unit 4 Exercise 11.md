---
sidebar_panel: 'Unit 4 Exercise 11'
---

### Exercise 11: Windows File Arrival

##### Objective:


Create a Schedule named **Windows File Arrival**.
Within the **Windows File Arrival** Schedule, create a Windows Job named **Windows File Arrival Job** with a ```File Arrival``` **Job Action** running a Monday-Friday Frequency.

**File Name**: ```“C:\Windows File Arrival\WindowsFile1.txt”```
**Start Time**: ```0900```
**End Time**: ```1700```
**File Size Stable Duration (in secs)**: ```5```

Create a Windows Job named **Create File** with an ```Embedded Script``` **Job Action** running a Monday-Friday Frequency. The Job should run the ```Windows_File_Arrival``` Script with a ```PowerShell``` Runner.

Build the Schedule Released for Today. In Matrix View, verify Job success.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E11.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Add a new **Schedule** called **Windows File Arrival**, add **Documentation** and use the default values for the Schedule.
2.	In the **Job Master** add a new Job to the **Windows File Arrival** Schedule.
	*	**Name**: **Windows File Arrival Job**
	*	**Job Type**: ```Windows```
	*	**Primary Machine**: ```SMATraining```
	*	**Job Action**: ```File Arrival```
	*	**User ID**: ```SMATRAINING\SMAUSER```
	*	**File Name**: ```“C:\Windows File Arrival\WindowsFile1.txt”```
	*	**Start Time**: ```0900```
	*	**End Time**: ```1700```
	*	**File Size Stable Duration (in secs)**: ```5```
3.	Give the Job a **Frequency** of **Mon-Fri-N**
4.	Add **Documentation** to the Job.
5.	With **Windows File Arrival** Schedule still selected in the **Job Master** click the **Add** button on the Job Master toolbar (or press Ctrl+N) to add a new Job.
	*	**Name**: **Create File**
	*	**Job Type**: ```Windows```
	*	**Primary Machine**: ```SMATraining```
	*	**Job Action**: ```Embedded Script```
	*	**User ID**: ```SMATRAINING\SMAUSER```
	*	**Script**: ```Windows_File_Arrival```
	*	**Version**: ```LATEST```
	*	**Runner**: ```PowerShell```
	*	**Arguments**: Do not type anything (leave it blank)
	*	Save the Job
6.	Give the Job the **Frequency** of ```Mon-Fri-N```. 
	*	Give the Job a **Job Build Status**, of **On Hold**.
7.	Close the **Schedule Master** and the **Job Master**.
8.	Outside of OpCon verify that the folder: ```C:\Windows File Arrival```
Does exist and is **empty**.
9.	Back to **EM**, build the **Windows File Arrival** Schedule Released for today only.
10.	Switch to one of the **Operations views**.  
11.	Notice the **Windows File Arrival Job** is just running.
12.	Release the **Create File Job** in the **Windows File Arrival** Schedule.  
13.	Once the Job runs, verify that the file was created, and both Jobs **Finished OK**.

</details>