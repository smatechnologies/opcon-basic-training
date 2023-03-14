---
sidebar_label: 'Unit 4 Exercise 7'
---

## Exercise 7: SubSchedule - Concurrent Processes

### Objective

Create a **Resource** named ```ProcessFile``` with a **Max Resources** value of ```1```.

Create a Schedule named **ProcessFile-Main Schedule**. Create a new Job named **Process File 1** within this Schedule and assign the **Repeating-SubSchedule** (created in the previous exercise) as a **Container Job** with a Monday-Friday Frequency. Give the Job a **Resource Dependency** on ```ProcessFile``` with a value of ```1```.

Copy the **Process File 1** Job to create 4 more Jobs with the same naming pattern.

Build the Schedule Released for Today and view results in Matrix View.

### Instructions

**Create the Primary Schedule**

1.	In **Library**, under the **Administration** topic, select **Master Schedules**. 
2.	Click the **Add**. 
3.	In the **Name** textbox, enter **ProcessFile-Main Schedule**. 
4.	In the **Documentation** textbox, enter **This is the Parent Schedule**.
5.	In the **Start Time** box, notice the default of ```00:00``` (midnight).
6.	Keep the defaults selected for the **Workdays per Week** for the Schedule to run.
7.	Click the **Save** button.

**Create a Resource**

8.	In **Library**, under the **Administration** topic, select **Resources**. 
9.	Click the **Add** button. 
10.	In the **Name** textbox, enter **ProcessFile**. 
11.	In the **Description** textbox, enter **This resource is used in the ProcessFile SubSchedule exercise**.
12.	In the **Max Resources** box, enter ```1```.
13.	Click the **Save** button.
14.	In **Library**, under the **Administration** topic, select on **Master Schedules**.
15.	Select the **ProcessFile-Main** Schedule.
16. Click the **View** button.
18. Select **Add Job** in the side menu.
19.	In the **Name** textbox, enter **Process File 1**. 
20.	In the **Job Type** dropdown list, select **Container**.
21.	On the **Master SubSchedule** dropdown list select the **Repeating-SubSchedule**.

:::note

* This SubSchedule can be used even though it is used in another Schedule

:::

22.	Click the **Save** button.
23. Click the **Lock** icon in the upper right-hand corner.
24.	Scroll to and expand the **Frequency** box.
25.	Within the **Frequency** box, move the ```Mon-Fri-N``` Frequency from the **Inactive** list to the **Active** list.
26.	Click **Save**.

**Setup Resource Dependency**

27. Click the **Lock** icon in the upper right-hand corner.
28.	Scroll to and expand the **Resource Dependency** box.
30.	Click the **(+)** button.
31.	Select the **ProcessFile** Resource from the dropdown list.
32.	Enter the value of ```1``` in the **Value** box.
33.	Click the **Save** button.

**Create Copies of the Container Job**

34.	In **Studio**, select the **Process File 1** Job. 
35. Click the **Copy** button in the side menu.
35.	Name the new Job **Process File 2**.
36.	Click the **OK** button.
37.	Repeat those steps to create Jobs **Process File 3**, **Process File 4**, and **Process File 5**.
38.	In **Studio**, verify that all 5 Jobs are tied to the **ProcessFile** Resource.
39.	In **Operations**, build the **ProcessFile-Main Schedule** (**Released**) for today and check the results in **Processes**,

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 7](../static/videobasic/U4E7.mp4)

:::


**Create the Primary Schedule**

1.	Under the **Administration** topic, Double-Click on **Schedule Master**. 
2.	Click the **Add** button on the **Schedule Master** toolbar. 
3.	In the **Name** textbox, enter **ProcessFile-Main Schedule**. 
4.	In the **Documentation** textbox, enter **This is the Parent Schedule**.
5.	In the **Start Time** box, notice the default of ```00:00``` (midnight).
6.	Keep the defaults selected for the **Workdays per Week** for the Schedule to run.
7.	Click the **Save** button on the **Schedule Master** toolbar and close the **Schedule Master** tab.

**Create a Resource**

8.	Under the **Administration** topic, Double-Click on **Resources**. 
9.	Click the **Add** button on the **Resources** toolbar. 
10.	In the **Name** textbox, enter **ProcessFile**. 
11.	In the **Documentation** textbox, enter **This resource is used in the ProcessFile SubSchedule exercise**.
12.	In the **Max Resources** box, enter ```1```.
13.	Click the **Save** button on the **Resources** toolbar and close the Resources tab.
14.	Under the **Administration** topic, Double-Click on **Job Master**.
15.	Select the **ProcessFile-Main** Schedule.
16.	Click the **Add** button on the **Job Master** toolbar. 
17.	In the **Name** textbox, enter **Process File 1**. 
18.	In the **Job Type** drop-down list, select **Container**.
19.	On the **Schedule to run as SubSchedule** drop-down list select the **Repeating-SubSchedule**.

:::note
20.	This SubSchedule can be used even though it is used in another Schedule
:::

21.	Click the **Save** button on the **Job Master** toolbar.
22.	Click the **Frequency** tab.
23.	Within the **Frequency** list frame, click the **Add** button.
24.	Click inside the option button to **Use Existing Frequency**.
25.	Select ```Mon-Fri-N``` from the drop-down list.
26.	Click **Next**.
27.	Click **Finish**.

**Setup Resource Dependency**

28.	With the **Job Master** still open, click on the **Dependencies** tab.
29.	Click on the **Threshold/Resource Dependency** sub-tab.
30.	Click the **Add** button under the **Threshold/Resource Dependency** sub-tab.
31.	Select the **ProcessFile** Resource from the **Threshold/Resource** drop-down menu.
32.	Enter the value of ```1``` in the **Value** box.
33.	Click **OK**.

**Create Copies of the Container Job**

34.	On the **Job Master** toolbar, click the **Copy** button or press **Ctrl+Insert**. 
35.	Name the Job **Process File 2**.
36.	Click **OK**.
37.	Repeat those steps to create Jobs **Process File 3**, **Process File 4**, and **Process File 5**.
38.	Close the **Job Master**.
39.	Use the **Workflow Designer** to verify that all 5 Jobs are tied to the **ProcessFile** Resource.
40.	Close the **Workflow Designer**.
41.	Build the **ProcessFile-Main Schedule** (**Released**) for today and check the results using the **List**/**Matrix** views and the **PERT** view

<a href="imgbasic/432.png" target="_blank"><img src="imgbasic/432.png" width="500"></img></a>

</details>