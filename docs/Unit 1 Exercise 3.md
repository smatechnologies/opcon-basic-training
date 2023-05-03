---
sidebar_label: 'Unit 1 Exercise 3'
---

## Exercise 3: Steps to Define a Job 

### Objective 

Create a Job named **WINDOWS JOB 1** within the schedule named **MY FIRST SCHEDULE**. The Job must run on the ```WINDOWS``` machine type. The Job must use the ```SMATRAINING``` machine and the ```SMATRAINING\SMAUSER``` User Id. The command line should run the following program:

```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10```

Assign the Job an **Existing Frequency** of ```Example-Mon-Sun-O```. Repeat the preceding steps to create 3 more Jobs identical to **WINDOWS JOB 1** following the same naming pattern.

### Instructions

1.	In Solution Manager, select **Studio**. 
2.	In the Schedule list, select **My First Schedule**.
3.	Click the **View** button. 
4.	In the Menu to the right, select **Add Job**.
5.	In the Schedule drop-down list, select **My First Schedule**.
6.  In the Name textbox, enter **Windows Job 1**
7.  In the Job Type drop-down list, select **Windows**.
8.  Click on **Task Details** to open the Details box.
9.	In the Machines or Machine Group drop-down list, select the SMATraining machine. 
10.	In the User ID drop-down list, select ```SMATRAINING\SMAUSER```
11.	Under **Run**, in the **Command Line**, type: 
```
“C:\Program Files\OpConxps\MSLSAM\genericp.exe” –t10
```
12.	Click the **Save** button.
13. Click the **Lock** button in the right hand corner of the Master Job Details screen.
14. Select the **Frequency** tab in the left-hand menu and scroll down to the Frequency box.
15.	From the **Inactive** Frequency drop-down bar, select the Frequency named ```Example-Mon-Sun-O``` and click the **<** button to move the Frequency to active.
16. Click **Save**.
Repeat steps 3 to 15 to create three jobs that are identical to **Windows Job 1**.
15.	**Windows Job 2**
16.	**Windows Job 3**
17.	**Windows Job 4**

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 1 Exercise 3](../static/videobasic/U1E3.mp4)

:::

1.	Under the Administration topic, Double-Click on **Job Master**. 
2.	In the Schedule drop-down list, select My First Schedule.
3.	Click the Add button on the Job Master toolbar. 
4.	In the Name textbox, enter **Windows Job 1**.
5.	In the Job Type drop-down list, select Windows.
6.	In the Primary Machine drop-down list, select the SMATraining machine for the Job to run on. 
7.	In the User ID drop-down list, select ```SMATRAINING\SMAUSER```
8.	In the **Command Line**, type: 
```
“C:\Program Files\OpConxps\MSLSAM\genericp.exe” –t10
```
9.	Click the **Save** button on the Job Master toolbar.
10.	Inside the **Job Master** screen under Job Properties, click on the Frequency tab.   
11.	Within the **Frequency List** frame, click the Add button (located under the Frequency List).
12.	The **Frequency Definition Wizard** will start.
13.	Select **Use Existing Frequency**.
14.	From the drop-down bar, select the Frequency named ```Example-Mon-Sun-O``` and click **Next** and then **Finish**.
Repeat steps 3 to 14 to create three jobs that are identical to Windows Job 1.
15.	**Windows Job 2**
16.	**Windows Job 3**
17.	**Windows Job 4**
18.	Close the **Job Master**.

</details>
