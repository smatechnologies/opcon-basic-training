---
sidebar_label: 'Unit 1 Exercise 9'
---

## Exercise 9: Workflow Designer

### Objective

To use **Wokflow Designer** in **Enterprise Manager** to add a job and its dependency to an existing schedule.

### Summary

Open **Workflow Designer** and create a new Job named **WINDOWS JOB 5** in **MY FIRST SCHEDULE**. Give the Job the same details as the existing Jobs within this Schedule. Give the Job a **Requires Dependency** for **WINDOWS JOB 4**.

:::info Note
This exercise will be work in Enterprise Manager
:::

### Instructions

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U1E10.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->

:::tip [Walkthrough Video - Unit 1 Exercise 10](../static/videobasic/U1E10.mp4)
:::

1. Open Enterprise Manager.
2. Click on **Yes**, on the **Daily Purge** popup window, if it occurs.

#### In Workflow Designer In Enterprise Manager

3.	Under the **Administration** topic, double-click on **Workflow Designer**. 
4.	From the **Select Schedule** list on the right, select **My First Schedule**.
5.	In the **Tools** section on the right, select the **Add Job** tool.
6. In the white workspace, click to **add a job**.

#### Creating the New Job on the Job Master Screen

7.	In the **Name** field, enter **Windows Job 5**.
8.	In the **Job Type** drop-down, select **Windows** as **Job Type**.
9.	In the **Primary Machine** drop-down list, select the ```SMATraining``` machine for the Job to run on.
10.	In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```   
11.	In the **Command Line** field, use **CTRL + F** to pull up the previous command lines used and select one that looks similar to the following:
```
"C:\Program Files\OpConxps\MSLSAM\Genericp.exe" -t10 -e0
```
12.	Click the **Save** button in the Job Master toolbar at the top right of the screen. 
13.	Click on **Frequency** tab.
14. Under the **Frequency List** box, click **Add**.
15. In the **Frequency Definition Wizard**, select **Example-Mon-Sun-O** from the drop-down list.
16. Click **Next** and **Finish**.
17.	Click on the **X** to the right of the **Job Master** tab to close the Job Master screen.

#### Adding the Dependency in Workflow Designer

18.	In the **Tools** section on the right of the **Workflow Deisgner** screen, click **Add Dependency**.
19.	**Click** on **Windows Job 4**, which is the object of the dependency.
20.	**Click** on **Windows Job 5**, to create the dependency.
21.	In the **Job Dependency** window, validate that **Requires** is the **Dependency Type** and that **Finished OK** is the **Option** selected.
22.	Click **OK** to save the Job dependency.
23.	Close the **Workflow Designer** tab.

:::info Note
Notice that the mouse icon keeps the “Add Dependency” pointer. You can click “Select” from the Tools panel or just press the escape key.
:::
