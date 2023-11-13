---
sidebar_label: 'Unit 4 Exercise 6'
---

## Exercise 6: SubSchedule - Multiple Runs

### Objective

To create a schedule that utilizes a sub-schedule called by multiple container jobs.

### Summary

Create a **Sub-Schedule** named **SS-Repeating** with an **Instance Definition** called **RUNTIME** with a values of **10**. This Sub-Schedule will have 5 Windows jobs that run in a sequential chain. 

Example: Job 1 &rarr; Job 2 &rarr; Job 3 &rarr; Job 4 &rarr; Job 5

Create a Schedule named **Repeating Schedule**. This schedule will contain 4 container jobs that each will call the sub-schedule and will run at specified times during the day.

### Instructions
 
#### Create the Sub-Schedule

1.	In **Library** > **Administration**, select on **Master Schedules**. 
2.	Click the **Add** button. 
3. On Master Schedule Definition screen:
* In the **Name** field, enter ```SS-Repeating```. 
* In the **Documentation** field, enter some documentation
  * _Example: This is the Daily Sub-Schedule._
* In the **Schedule Settings** frame, mark the **SubSchedule** checkbox.
* Saturday and Sunday are **working days**.
* This sub-schedule doesn't use the **Master Calendar**
* Click the **Save** button.
4. Click **Back**

#### Add Jobs to the SubSchedule

5.	In **Studio**, select **SS-Repeating**. 
6.	Click the **View** button. 
7.  Select **Add Job** in the side menu.
8.  On the **Master Job Definition** screen:
* In the **Name** textbox, enter ```Job 1```.
* In the **Job Type** dropdown, select **Windows**.
* In the **Machine Selection** dropdown, select the **SMATraining**. 
* In the **User ID** dropdown, select **SMATRAINING\SMAUSER**. 
* In the **Command Line** field, type: ```"[[PATH_Windows]]\genericp.exe" -t[[RUNTIME]]```
* Click the **Save**. 
* Click the **Lock** icon in the upper right-hand corner.
* Scroll to and expand the **Frequency** box.
* Within the **Frequency** box, select **Example-Mon-Sun-O** in the **Inactive** list and move it to the **Active** list. 
* Click the **Save** button.
9.  Click **Back**.
10.  Utilizing the **Copy** function, copy Job 1 unitl you have 5 jobs total.
11.	Create **Dependencies** between the 5 jobs so they run in a sequential chain.
* Job 1 &rarr; Job 2 &rarr; Job 3 &rarr; Job 4 &rarr; Job 5

#### Create the Primary Schedule

12.	In **Library** > **Administration**, select on **Master Schedules**. 
13.	Click the **Add** button. 
* In the **Name** field, enter ```Repeating Schedule```. 
* In the **Documentation** field, enter some documentation
  * _Example: This is the Primary Schedule for the Repeating SubSchedule example._
* Saturday and Sunday are **NOT working days**.
* This sub-schedule does use the **Master Calendar**
* Click the **Save** button.
14. Click **Back**.

#### Add the Container Job to the Schedule

15.	In **Studio**, using the filter locate and select **Repeating Schedule**. 
16. Click the **View** button.
17.	Select **Add Job** in the side menu. 
18. On the **Job Master Definition** screen:
* In the **Name** textbox, enter ```0700 Job```. 
* In the **Job Type** dropdown list, select **Container**.
* On the **Master SubSchedule** dropdown list select **SS-Repeating**.
* Click the **Save** button.
* Click the **Lock** icon in the upper right-hand corner.
* Expand the **Documentation** box and enter in some documentation.
  * _Example: **This is a container Job that has the Daily Jobs._
* Scroll to and expand the **Frequency** box.
* Within the **Frequency** box, select ```Mon-Fri-N``` in the **Inactive** list and move it to the **Active** list. 
* Select the **Active Frequency**. 
* Scroll down to the **Offset Information**, in the **Start Offset** field, enter ```07:00```.
* Click the **Save** button.
19. Click **Back**.
20. Utilizing the **Copy** function, copy the 0700 Job until you have a **1000 Job**, **1400 Job**, and **1900 Job**.
21. Edit each of the copied jobs to modify the **Frequency Information** so the **Start Offset** matches the time in the job name.
* _Example: **1000 Job** would have a **Start Offset** of ```10:00```._

#### Build the Schedule

22.	Build the **Repeating Schedule** for today and allow it to run.
23. Valdiate that the jobs in one of the 4 sub-schedules run successfully.

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 6](../static/videobasic/U4E6.mp4)

:::

**Create the SubSchedule**  

1.	Under the **Administration** topic, Double-Click on **Schedule Master**. 
2.	Click the **Add** button on the **Schedule Master** toolbar. 
3.	In the **Name** textbox, enter **SS-Repeating**. 
4.	In the **Documentation** textbox, enter This is the Daily SubSchedule.
5.	In the **Start Time** box, notice the default of ```00:00``` (midnight).
6.	Keep the defaults selected for the **Workdays per Week** for the Schedule to run.
7.	In the **Schedule Properties** frame, mark the **SubSchedule** checkbox.
8.	Click the **Save** button on the Schedule Master toolbar.
9.	Click the **Instance Definition** tab and type the **Instance** in the **Define Property Values** field: ```RUNTIME=10```
10.	Press the **Add** button 
11.	Save the **SS-Repeating** and close the Schedule Master tab.

**Add Jobs to the SubSchedule**

12.	Under the **Administration** topic, Double-Click on **Job Master**. 
13.	Select the **SS-Repeating** Schedule.
14.	Click the **Add** button on the **Job Master** toolbar. 
15.	In the **Name** textbox, enter **Daily Job 1**.
16.	In the **Job Type** drop-down list, select **Windows**.
17.	In the **Primary Machine** drop-down list, select the **SMATraining** machine. 
18.	In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```. 
19.	In the **Command Line**, type **Ctrl+F** and select the command line that looks like this:
```"[[MI.PathWindows]]\genericp.exe" -t[[RUNTIME]] -e0```
20.	Click the **Save** button on the **Job Master** toolbar. 
21.	Click the **Frequency** tab.
22.	Within the **Frequency** list frame, click the **Add** button.
23.	Click inside the option button to Use existing **Frequency**.
24.	In the **Frequency** drop-down list, select **Mon-Fri-N**. 
25.	Click **Next**.
26.	Click the **Finish** button.
27.	Add **Documentation** to the Job.
28.	On the **Job Master** toolbar, be sure you have the **SS-Repeating** selected and click the **Copy** button or press **Ctrl+Insert**. 
29.	Name the Job **Daily Job 2**.
30.	Click **OK**.
31.	Change the **Documentation** if needed.
32.	Repeat steps 27 to 30 to create Jobs **Daily Job 3**, **Daily Job 4**, and **Daily Job 5**.
33.	Close the **Job Master** tab and use **Workflow Designer** to create **Dependencies**.
34.	Close the **Workflow Designer** tab when finished.

**Create the Primary Schedule**

35.	Under the **Administration** topic, Double-Click on **Schedule Master**. 
36.	Click the **Add** button on the **Schedule Master** toolbar. 
37.	In the **Name** textbox, enter **Repeating Schedule**. 
38.	In the **Documentation** textbox, enter **This is the Primary Schedule for the Repeating SubSchedule example**.
39.	In the **Start Time** box, notice the default of ```00:00``` (midnight).
40.	Keep the default selected for the **Workdays per Week** for the Schedule to run.
41.	Click the **Save** button on the **Schedule Master** toolbar.
42.	Close the **Schedule Master** tab.

**Add the SubSchedule as a Container Job into the Primary Schedule**

43.	Under the **Administration** topic, Double-Click on **Job Master**. 
44.	Select the **Repeating Schedule** from the Schedule drop-down list.
45.	Click the **Add** button on the **Job Master** toolbar. 
46.	In the **Name** textbox, enter **0700 Job**. 
47.	In the **Job Type** drop-down list, select **Container**.
48.	On the **Schedule to run as SubSchedule** drop-down list select the **SS-Repeating**.
49.	Click the **Save** button on the **Job Master** toolbar.
50.	Click the **Frequency** tab.
51.	Within the **Frequency list** frame, click the **Add** button.
52.	Click inside the option button to **Use existing Frequency**.
53.	In the Frequency drop-down list, select **Mon-Fri-N**.
54.	Click **Next** and then **Finish**.
55.	In the **Start Offset** box, enter ```07:00```.
56.	Click the **Save** button on the **Job Master** toolbar.
57.	Click the **Documentation** tab.
58.	In the **Documentation** textbox, enter **This is a container Job that has the Daily Jobs**.
59.	Click the **Save** button on the **Job Master** toolbar.
60.	Still on the **Job Master** Toolbar, click the **Copy** button. 
61.	Name the Job **1000 Job**.
62.	Click **OK**.
63.	Click the **Frequency** tab.
64.	Update the **Start Offset** box to ```10:00``` and **Save** the Job.
65.	Repeat steps 59 to 63 creating a **1400 Job** and a **1900 Job** running at ```2 pm``` and ```7 pm```. You will need to change the **Start Offset** for these Jobs. Change the Documentation if needed.
66.	Close all tabs.

**Build the Schedule**

67.	Under the **Operation** topic, Double-Click **Schedule Build**.
68.	Is the SubSchedule visible? Why?
69.	Click the **Repeating Schedule** and click the **Build** button.
70.	On the **Build Properties** screen, leave **On Hold** selected and click **OK**. This will build the Schedule for **today only**.
71.	Close the Build Schedules screen.
72.	Under **Operations**, open the **List** or **Matrix** view or use **Solution Manager** to check the results.
73.	**Release the Schedule** and let the Jobs run.

</details>