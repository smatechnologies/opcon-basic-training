---
sidebar_panel: 'Unit 4 Exercise 6'
---

### Exercise 6: SubSchedule - Multiple Runs

##### Objective:

Create a Schedule named **Repeating-SubSchedule** with an **Instance Definition** of ```RUNTIME=10```. Mark the Schedule as a **SubSchedule**.

Within the **Repeating-SubSchedule**, create five daily Windows Jobs with the naming pattern **Daily Job 1**. The Jobs should run on a Monday-Friday Frequency and run the genericp program. Create a linear **Dependency Chain** between the 5 Jobs.

Next, create a Schedule named **Repeating-Schedule-Primary**.

Within the **Repeating-Schedule-Primary** Schedule, create 4 Jobs named **0700 Job**, **1000 Job**, **1400 Job**, and **1900 Job**. Each Job should run on a Monday-Friday Frequency and run the **Repeating-SubSchedule** Schedule as a **Container Job**.

Each Job should have a **Start Offset** equal to the name of the Job.

Build the **Repeating-Schedule-Primary** Schedule **On Hold**. View the Schedule in Matrix View. Release the Schedule and let the Jobs run to verify results.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E6.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

**Create the SubSchedule**  

1.	Under the **Administration** topic, Double-Click on **Schedule Master**. 
2.	Click the **Add** button on the **Schedule Master** toolbar. 
3.	In the **Name** textbox, enter **Repeating-SubSchedule**. 
4.	In the **Documentation** textbox, enter This is the Daily SubSchedule.
5.	In the **Start Time** box, notice the default of ```00:00``` (midnight).
6.	Keep the defaults selected for the **Workdays per Week** for the Schedule to run.
7.	In the **Schedule Properties** frame, mark the **SubSchedule** checkbox.
8.	Click the **Save** button on the Schedule Master toolbar.
9.	Click the **Instance Definition** tab and type the **Instance** in the **Define Property Values** field: ```RUNTIME=10```
10.	Press the **Add** button 
11.	Save the **Repeating-SubSchedule** and close the Schedule Master tab.

**Add Jobs to the SubSchedule**

12.	Under the **Administration** topic, Double-Click on **Job Master**. 
13.	Select the **Repeating-SubSchedule** Schedule.
14.	Click the **Add** button on the **Job Master** toolbar. 
15.	In the **Name** textbox, enter **Daily Job 1**.
16.	In the **Job Type** drop-down list, select **Windows**.
17.	In the **Primary Machine** drop-down list, select the **SMATraining** machine. 
18.	In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```. 
19.	In the **Command Line**, type **Ctrl+F** and select the command line that looks like this:
```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```
20.	Click the **Save** button on the **Job Master** toolbar. 
21.	Click the **Frequency** tab.
22.	Within the **Frequency** list frame, click the **Add** button.
23.	Click inside the option button to Use existing **Frequency**.
24.	In the **Frequency** drop-down list, select **Mon-Fri-N**. 
25.	Click **Next**.
26.	Click the **Finish** button.
27.	Add **Documentation** to the Job.
28.	On the **Job Master** toolbar, be sure you have the **Repeating-SubSchedule** selected and click the **Copy** button or press **Ctrl+Insert**. 
29.	Name the Job **Daily Job 2**.
30.	Click **OK**.
31.	Change the **Documentation** if needed.
32.	Repeat steps 27 to 30 to create Jobs **Daily Job 3**, **Daily Job 4**, and **Daily Job 5**.
33.	Close the **Job Master** tab and use **Workflow Designer** to create **Dependencies**.
34.	Close the **Workflow Designer** tab when finished.

**Create the Primary Schedule**

35.	Under the **Administration** topic, Double-Click on **Schedule Master**. 
36.	Click the **Add** button on the **Schedule Master** toolbar. 
37.	In the **Name** textbox, enter **Repeating-Schedule-Primary**. 
38.	In the **Documentation** textbox, enter **This is the Primary Schedule for the Repeating SubSchedule example**.
39.	In the **Start Time** box, notice the default of ```00:00``` (midnight).
40.	Keep the default selected for the **Workdays per Week** for the Schedule to run.
41.	Click the **Save** button on the **Schedule Master** toolbar.
42.	Close the **Schedule Master** tab.

**Add the SubSchedule as a Container Job into the Primary Schedule**

43.	Under the **Administration** topic, Double-Click on **Job Master**. 
44.	Select the **Repeating-Schedule-Primary** from the Schedule drop-down list.
45.	Click the **Add** button on the **Job Master** toolbar. 
46.	In the **Name** textbox, enter **0700 Job**. 
47.	In the **Job Type** drop-down list, select **Container**.
48.	On the **Schedule to run as SubSchedule** drop-down list select the **Repeating-SubSchedule**.
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
69.	Click the **Repeating-Schedule-Primary** and click the **Build** button.
70.	On the **Build Properties** screen, leave **On Hold** selected and click **OK**. This will build the Schedule for **today only**.
71.	Close the Build Schedules screen.
72.	Under **Operations**, open the **List** or **Matrix** view or use **Solution Manager** to check the results.
73.	**Release the Schedule** and let the Jobs run.

</details>