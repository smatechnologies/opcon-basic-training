---
sidebar_label: 'Unit 4 Exercise 8'
---

## Exercise 8: SubSchedule Daily and Monthly Process

### Objective

To use Negative Frequency to prevent 2 container jobs from being built on the same day.

### Summary

In a single schedule called, **NightlyProcessing**, you will have 2 container jobs each calling a unique sub-schedule, **SS_Daily** and **SS-Monthly**. One container called, **Daily**, will run every day except for the end of the month. The other called, **Monthly**, will run only at end of month.

### Instructions

#### Create the Sub-Schedules

1.  In **Library** > **Administration**, select **Master Schedules**. 
2.  Using the filters, locate and select **SS-Repeating**. 
3.  Click **Copy**.
4.  In the **Copy Schedule** pop-up window:
* In the **New Schedule Name** field, enter ```SS-Daily```
* Uncheck **Navigate to the Studio page after copy**.
* Leave **Copy Jobs** selected
* Leave **Copy schedule privileges** selected.
* Click **OK**.
5.  Repeat **Steps 2-4** to create a new sub-schedule called, **SS-Monthly**.

#### Add Jobs to SS-Monthly

6.  Using the filters, locate and select **SS-Monthly**. 
7.  Click the **View**.
8.  Utilizing the **Copy** function, copy **Job 1** two times to create **Job 6** and **Job 7**.
9.  **Add Dependencies** to have the new jobs run after **Job 5** in sequential order.
* _Job 1 &rarr; Job 2 &rarr; Job 3 &rarr; Job 4 &rarr; Job 5 &rarr; Job 6 &rarr; Job 7_
10. Click **Back** until you return the **Schedule List**

#### Create the Primary Schedule

11.  In **Studio**.
12.  Click **Add**. 
13.  On the **Master Schedule Definition** screen:
* In the **Name** field, enter ```NightlyProcessing```. 
* In the **Documentation** field, enter **This is the Main Schedule**.
* In the **Start Offset Hours** box, enter ```19``` (19:00 or 07:00 PM).
* In the **Work Days** section, select Saturday and Sunday.
* In the **Holiday Calendar Settings**, select **Use Master Holiday**.
* Select **Auto Build** and set it as ```7``` days in advance for ```1```.  
* Select **Auto Delete** and set it as ```7```.
* Click the **Save** button.
14.  Click **Back**

#### Add the Daily Container to the Schedule

15.  In **Studio**, select the **NightlyProcessing** and click the **View** button.
16.  Select  **Add Job** in the side menu.
17.  On the **Master Job Definition** Screen:
* In the **Name** field, enter **Daily**. 
* In the **Job Type** drop-down, select **Container**.
* In the **Master SubSchedule** dropdown list select the **SS-Daily**.
* Click the **Save** button.
* Click the **Lock** icon in the upper right-hand corner.
* In the **Documentation** field, enter in some documentation.
  * _Example: This is a container Job that has the Daily Jobs._
* Scroll to and expand the **Frequency** box.
* Select the **EOM-O** Frequency and move it from the **Inactive** list to the **Active** list.
* Select the **Mon-Sun-O** Frequency and move it from the **Inactive** list to the **Active** list.
* Select the **EOM-O** in the **Active** column and give it a **Job Build Status** of **Do Not Schedule**.
* Click the **Save** button.
18. Click **Back**

#### Add the Monthly Container to the Schedule

19.  In **Studio**, select **Add Job** in the side menu. 
20.  Click the **Add** button. 
21.  On the **Master Job Definition** Screen:
* In the **Name** field, enter ```Monthly```. 
* In the **Job Type** dropdown, select **Container**.
* In the **Master SubSchedule** dropdown, select the **SS-Monthly**.
* Click the **Save** button.
* Click the **Lock** icon in the upper right-hand corner.
* In the **Documentation** field, enter in some documentation.
  * _Example: This is a container Job that has the Monthly Jobs._
* Scroll to and expand the **Frequency** box.
* Select the **EOM-O** Frequency and move it from the **Inactive** list to the **Active** list.
22. Click the **Save** button.

#### Build the Schedule

23. In **Operations**, select **Schedule Build**.
24. On the **Schedule Build** screen:
* In the **Schedule Date** section, select today's dates for **From** and the end of the month for **To** using the Calendar Icon.
* In **Schedule Build** section, select the **Released** option .
* In the **Schedule List**, select **NightlyProcessing**.
* Click the **Build** button.
* On the **Build Results** screen, click **Back**.
25. On the **Operations Summary** screen, click on **Processes**.
26. Locate today's date and select it.

:::note
* Notice that:
  * The schedule isn't running because the **Start Time** is 7:00PM.
  * That **only the Daily job was built.**
  * That **only the SS-Daily sub-schedule is in the Schedule Selection** list.
:::

27. Locate the date for the end of the month and select it.

:::note
* Notice that:
  * The schedule isn't running because the **Start Time** is 7:00PM.
  * That **only the Monthly job was built.**
  * That **only the SS-Monthly sub-schedule is in the Schedule Selection** list.
:::

28. **Force Start** today's **Nightly Processing** schedule to allow the jobs in the sub-schedule to run.



## Enterprise Manager

<details>

:::tip 

[Walkthrough Video - Unit 4 Exercise 8](../static/videobasic/U4E8.mp4)

:::


**Create the first SubSchedule (Daily)**

1.  Under the **Administration** topic, Double-Click on **Schedule Master**. 
2.  Click the **Add** button on the **Schedule Master** toolbar. 
3.  In the **Name**   field, enter **SS-Daily**. 
4.  In the **Documentation**   field, enter **This is the Daily SubSchedule**.
5.  In the **Start Time** box, notice the default of ```00:00``` (midnight).
6.  Keep **Monday through Friday** selected for the **Workdays per Week** for the Schedule to run.
7.  In the **Schedule Properties** frame, mark the **SubSchedule** checkbox.
8.  Click the **Save** button on the Schedule Master toolbar.

**Create the SubSchedule (Monthly)**

9.  Under the **Administration** topic, Double-Click on **Schedule Master** (if not open). 
10.  Click the **Add** button on the **Schedule Master** toolbar. 
11.  In the **Name**   field, enter **SS-Monthly**. 
12.  In the **Documentation**   field, enter **This is the Monthly SubSchedule**.
13.  In the **Start Time** box, notice the default of ```00:00``` (midnight).
14.  Keep **Monday through Friday** selected for the **Workdays per Week** for the Schedule to run.
15.  In the **Schedule Properties** frame, mark the **SubSchedule** checkbox.
16.  Click the **Save** button on the **Schedule Master** toolbar.
17.  Close the **Schedule Master** tab.

**Add Jobs within the Daily SubSchedule**

18.  Under the **Administration** topic, Double-Click on **Job Master**. Select the **SS-Daily**.
19.  Click the **Add** button on the **Job Master** toolbar. 
20.  In the **Name**   field, enter **Daily Job 1**.
21.  In the **Job Type** drop-down list, select ```Windows```.
22.  In the **Primary Machine** drop-down list, select the ```SMATraining``` machine. 
23.  In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```. 
24.  In the **Command Line**, use **Ctrl+F** and select the command line that looks like this:
```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```
25.  Click the **Save** button on the **Job Master** toolbar. 
26.  Click the **Frequency** tab.
27.  Within the **Frequency list** frame, click the **Add** button.
28.  Click inside the option button to **Use existing Frequency**.
29.  In the **Frequency** drop-down list, select ```Mon-Fri-N```. 
30.  Click **Next**.
31.  Click the **Finish** button.
32.  On the **Job Master** Toolbar, click the **Copy** button or press **Ctrl+Insert**).
33.  Name the **Job Daily Job 2**.
34.  Click **OK**.
35.  Repeat steps 32 to 34 to create Jobs **Daily Job 3**, **Daily Job 4**, and **Daily Job 5**.
36.  Close the **Job Master**.
37.  Use **Workflow Designer** to create **Job Dependencies** the way you want and then close **Workflow Designer**.

**Add Jobs within the Monthly SubSchedule**

38.  Under the **Administration** topic, Double-Click on **Job Master**. Select the **SS-Monthly**.
39.  Click the **Add** button on the **Job Master** toolbar. 
40.  In the **Name**   field, enter **Monthly Job 1**.
41.  In the **Job Type** drop-down list, select ```Windows```.
42.  In the **Primary Machine** drop-down list, select the ```SMATraining``` machine. 
43.  In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```. 
44.  In the **Command Line**, type **Ctrl+F** and select the command line that looks like this:
```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```
45.  Click the **Save** button on the **Job Master** toolbar. 
46.  Click the **Frequency** tab.
47.  Within the **Frequency list** frame, click the **Add** button.
48.  Create a new **Frequency**. The name will be ```End-of-Month-B```. Click **Next**.
49.  In the **Frequency Definition Wizard**, select **End of Period** in **When to Schedule** frame, be sure that **Month** is selected under **Periods** frame and **Before Date** is selected under **A/O/B/N** frame.
50.  Click the **Finish** button.
51.  On the **Job Master** Toolbar, click the **Copy** button or press **Ctrl+Insert**.
52.  Name the Job **Monthly Job 2**.
53.  Click **OK**.
54.  Repeat steps 51 to 53 to create Jobs **Monthly Job 3**, **Monthly Job 4**, **Monthly Job 5**, **Monthly Job 6**, and **Monthly Job 7**.
55.  Close the **Job Master** tab.
56.  Use **Workflow Designer** to create **Job Dependencies**.
57.  Close the **Workflow Designer**.

**Create the Primary Schedule**

58.  Under the **Administration** topic, Double-Click on **Schedule Master**. 
59.  Click the **Add** button on the **Schedule Master** toolbar. 
60.  In the **Name**   field, enter **Main-Schedule**. 
61.  In the **Documentation**   field, enter **This is the Main Schedule**.
62.  In the **Start Time** box, notice the default of ```00:00``` (midnight).
63.  Keep **Monday through Friday** selected for the **Workdays per Week** for the Schedule to run.
64.  Click the **Save** button on the **Schedule Master** toolbar.
65.  Close the **Schedule Master** tab.
66.  Under the **Administration** topic, Double-Click on **Job Master**. 

**Add the Daily SubSchedule to the Primary Schedule**

67.  Select the **Main-Schedule** from the **Schedule** drop-down list.
68.  Click the **Add** button on the **Job Master** toolbar. 
69.  In the **Name**   field, enter **Daily-Jobs**. 
70.  In the **Job Type** drop-down list, select **Container**.
71.  On the **Schedule to run as SubSchedule** drop-down list select the **SS-Daily**.
72.  Click the **Save** button on the **Job Master** toolbar.
73.  Click the **Frequency** tab.
74.  Within the **Frequency list** frame, click the **Add** button.
75.  Click inside the option button to **Use existing Frequency**.
76.  In the **Frequency** drop-down list, select ```Mon-Fri-N```.
77.  Click **Next** and then **Finish**.
78.  Click the **Instance Definition** tab.
79.  Click in the **Define Property Values** box.
80.  Enter: ```RUNTIME=10```
81.  Click the **Add** at the right-middle of the screen.
82.  Click the **Save** button on the **Job Master** toolbar.
83.  In the **Documentation**   field, enter **This is a container Job that has the Daily Jobs**.
84.  Click the **Save** button on the **Job Master** toolbar.
85.  Still on **Job Master**, be sure you have the **Main-Schedule** selected.

**Add the Monthly SubSchedule to the Primary Schedule**

86.  Click the **Add** button on the **Job Master** toolbar. 
87.  In the **Name**   field, enter **Monthly-Jobs**. 
88.  In the **Job Type** drop-down list, select **Container**.
89.  On the **Schedule to run as SubSchedule** drop-down list select the **SS-Monthly**.
90.  Click the **Save** button or on the **Job Master** toolbar or press **Ctrl+S**.
91.  Click the **Frequency** tab.
92.  Within the **Frequency** list frame, click the **Add** button.
93.  Click inside the option button to **Use Existing Frequency**.
94.  Select ```End-of-Month-B``` from the drop-down list.
95.  Click **Next**.
96.  Click the **Forecast** button and note that on the months noted above that the Job will run on the Friday before the end of the month if it falls on a weekend.
97.  Close the **Forecast** dialog box and then click **Finish** on the **Frequency Definition Wizard** screen.
98.  Click the **Instance Definition** tab.
99.  Click in the **Define Property Values** box.
100. Enter: ```RUNTIME=20```.
101. Click the **Add** at the right side of the **Define Property Values** frame.
102. Click the **Save** button on the **Job Master** toolbar.
103. Close the **Job Master** tab.

**Setup Job Dependencies between Container Jobs**

104. Under the **Administration** topic, Double-Click **Workflow Designer**.
105. Select **Main-Schedule** under the **Select Schedule** drop-down list.
106. Click the **Add Dependency** tool.
107. Click the **Daily-Jobs** box and then click the **Monthly-Jobs**.
108. Select **Excludes** under the **Dependency** type. 
109. Click **OK**.
110. Close the **Workflow Designer** tab.

![](../static/imgbasic/433.png)

**Build the Schedule**

111. Under the **Operation** topic, Double-Click **Schedule Build**.
    * Notice that **both SubSchedules _ARE NOT_ shown in the Schedule Selection** list.  
112. Click the **Main-Schedule** and click the **Build** button.  
113. On the Build Properties screen, leave On Hold selected and click OK.
    * This will build the Schedule **On Hold** for today  
114. Click the **Main-Schedule** again.  
115. On the **Start date**, select the **last working day of the month**.
    * The **Stop date** should be the same as **Start date**.  
116. Click the **Build** button.
117. On the **Build Properties** screen, leave **Released** selected and click **OK**.
    * This will build the Schedule **Released for the end of the month**.  
118. Close the Build Schedules screen.  
119.  Go to the **List** or **Matrix** view under the **Operation** topic or use **Solution Manager** to check the results.  
120.  **Release the Schedule** for today (if you want to see the Jobs running).  

</details>