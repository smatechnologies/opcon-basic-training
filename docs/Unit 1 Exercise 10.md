---
sidebar_label: 'Unit 1 Exercise 10'
---

### Exercise 10: Workflow Designer

##### Objective:

Open **Workflow Designer** and create a new Job named **WINDOWS JOB 5** in **MY FIRST SCHEDULE**. Give the Job the same details as the existing Jobs within this Schedule. Give the Job a **Requires Dependency** for **WINDOWS JOB 4**.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E10.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Under the **Administration** topic, Double-Click on **Workflow Designer**. 
2.	From the **Select Schedule** list, select **My First Schedule**.
3.	**Click** and **drag** around the area where you want to select and move a group of items.
4.	In the **Tools** frame, **click**, **drag**, and **drop** the **Add Job** icon to the Schedule diagram.     
5.	In the **Job Master** screen, enter **Windows Job 5** for the name.
6.	Select **Windows** as Job Type
7.	In the **Primary Machine** drop-down list, select the **SMATraining** machine for the Job to run on.
8.	In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```   
9.	On the **Command Line**, use the generic program:
```
"C:\Program Files\OpConxps\MSLSAM\Genericp.exe" -t10 -e0
```
10.	Click the **Save** button on the Job Master toolbar. 
11.	Click the **Frequency** tab and add any Frequency.
12.	Click on the **X** to the right of the **Job Master** tab to close the Job Master screen.
13.	In the **Tools** frame, click Add **Dependency**.
14.	First, **click** on the Job that is the object of the Dependency (example: **Windows Job 4**).
15.	Then **click** on the Job in which to create the dependency (example: **Windows Job 5**).
16.	In the Job Dependency window, mark the preferred Dependency Type option button (example: **Requires**).
17.	Click the **OK** button to save the added Job dependency.
Note: Notice that the mouse icon keeps the “Add Dependency” pointer. You can click “Select” from the Tools panel or just press the escape key.
18.	Close the **Workflow Designer** tab.

</details>
