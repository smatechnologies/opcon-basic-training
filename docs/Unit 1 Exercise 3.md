---
sidebar_label: 'Unit 1 Exercise 3'
---

## Exercise 3: Steps to Define a Job 

### Objective 

To successfully add 4 Windows jobs to My First Schedule.

### Summary

Create 4 **Windows** jobs within the schedule named **MY FIRST SCHEDULE**. Each of the jobs will run on the machine called **SMATRAINING** as the **SMATRAINING\SMAUSER** User Id. The command line should run the GenericP Program provided with OpCon, as stated below.

```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10```

Each of the 4 jobs will use the **Inactive Frequency** called **Example-Mon-Sun-O**.

### Instructions

1.	In Solution Manager, select **Studio**. 
2.	In the **Schedule List**, select **My First Schedule**.
3.	Click the **View** button in the toolbar.
4.	In the **Menu** to the right, select **Add Job**.

#### Create Your First Job

5.  In the **Name** textbox, enter **Windows Job 1**
6.  In the **Job Type** drop-down list, select **Windows**.
7.  Expand the **Task Details** section to open the Details box.
8.	In the **Machine Selection** section, select the **SMATraining** machine from the **Machines or Machine Group** drop down. 
9.	In the **General** section, select **SMATRAINING\SMAUSER** from the **User Id** drop down.
10.	Under the **Run** section, **type** the following in the **Command Line** box:
```cmd
"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10
```
11.	Click the **Save** button.
12. Click the **Lock (or CTRL + Alt + A)** button in the top right-hand corner of the **Master Job Details** screen.
13. Scroll down and expand the **Frequency** section.
14.	From the **Inactive** column, select the Frequency named **Example-Mon-Sun-O** and click the **<** button to move the Frequency to **Active** column.
15. Click **Save**.
16. Close **Studio** and **Library**.

#### Create Windows Job 2, 3, and 4

17. Navigate to **Library**.
18. Select **Master Jobs** under the **Administration** column.
19. On the **Master Jobs** screen, use the search field at the top of the screen and locate **Windows Job 1** 
20. Select **Windows Job 1**.
21. Click the **Copy** button.
22. Enter the **Name** as **Windows Job 2**.
23. **Deselect** the **Navigate to Master Job Definition Page after copy** option.
24. Click the **OK** button.
25. Repeat steps 19-24 to create **Windows Job 3** and **Windows Job 4**.
26.	Close **Library**.



## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 1 Exercise 3](../static/videobasic/U1E3.mp4)

:::

1.	Under the **Administration** topic, double-click on **Job Master**. 
2.	In the **Schedule** drop-down list, select **My First Schedule**.
3.	Click the **Add** button on the **Job Master** toolbar. 
4.	In the **Name** textbox, enter **Windows Job 1**.

#### In the **Job Properties** Section:
5.	In the **Job Type** drop-down list, select **Windows**.
6.	In the **Primary Machine** drop-down list, select the ```SMATraining``` machine. 
7.	In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```.
8.	In the **Command Line** box, type: 
```cmd
"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10
```
9.	Click the **Save** button on the **Job Master** toolbar.
10.	Select the **Frequency** tab.   
11.	Within the **Frequency List** frame, click the **Add** button (located under the Frequency List).
12.	In the **Frequency Definition Wizard** pop-up window, select **Use Existing Frequency**.
13.	In the drop-down, select ```Example-Mon-Sun-O```.
14. Click **Next** and then **Finish**.
15. Use the **Copy** icon in the upper right-hand corner to create 3 more jobs that are identical to Windows Job 1. They will be called: **Windows Job 2**, **Windows Job 3**, and **Windows Job 4**
16.	Close the **Job Master**.

</details>
