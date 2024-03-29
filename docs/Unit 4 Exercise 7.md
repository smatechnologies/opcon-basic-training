---
sidebar_label: 'Unit 4 Exercise 7'
---

## Exercise 7: SubSchedule - Concurrent Processes

### Objective

To use a Resource to prevent multiple Container jobs from kicking off at the same time.

### Summary

Create a Schedule called **Process Files**. Create 5 new container jobs named **File 1**, **File 2**, etc. within this Schedule and assign the **SS_Repeating** sub-schedule that was created in Exercise 6. These container jobs will also have a **Resource Dependency** to prevent them from all kicking off at the same time.

### Instructions

#### Create the Resource

1.	In **Library** > **Administration**, select **Resources**. 
2.	Click the **Add** button.
3.  In the **Resource** pop-up window:
* In the **Name** field, enter ```ProcessFile```. 
* In the **Description** field, enter some documentation.
  * _Example: This resource is used in the ProcessFile SubSchedule exercise._
* In the **Max Resources** field, enter ```1```.
* Click the **Save** button.
4.  Click **Back**

#### Create the Primary Schedule

5.  In **Library** > **Administration**, select on **Master Schedules**. 
6.  Click the **Add** button. 
7.  On **Master Schedule Definition** screen:
* In the **Name** field, enter ```Process Files```. 
* In the **Documentation** field, enter some documentation
  * _Example: This is the Parent Schedule._
* Saturday and Sunday are **NOT working days**.
* This schedule does use the **Master Holiday Calendar**
* Click the **Save** button.
8.  Close **Studio**

#### Create the Container Jobs

9.  In **Library** > **Administration**, select on **Master Schedules**.
10. Select the **Process Files** Schedule.
11. Click the **View** button.
12. Select **Add Job** in the side menu.
13. On the Master Job Definition screen:
* In the **Name** field, enter ```File 1```. 
* In the **Job Type** dropdown, select **Container**.
* On the **Master SubSchedule** dropdown, select the **SS-Repeating**.
* Click the **Save** button.
* Click the **Lock** icon in the upper right-hand corner.
* Scroll to and expand the **Frequency** box.
* Within the **Frequency** box, move the **Mon-Fri-N** Frequency from the **Inactive** list to the **Active** list.
* Click **Save**.
14. Click **Back**.
15. Utilizing the **Copy** feature, copy **File 1** until you have 5 new jobs with a similar naming convention.
* _Example: File 2, File 3, etc._

#### Setup Resource Dependency

16. Select **File 1** and select **Add Resource Dependency** from the side panel.
17. In the **Resource** pop-up:
* Select the **ProcessFile** Resource from the dropdown list.
* Enter the value of ```1``` in the **Value** box.
* Click the **Save** button.
18. Repeat Steps 16-17 to add **Resource Dependency** to all 5 jobs.

#### Build the Schedule

19.	In **Operations**, build the **Process Files** (**Released**) for today and check the results in **Processes**,

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 7](../static/videobasic/U4E7.mp4)

:::


**Create the Primary Schedule**

1.	Under the **Administration** topic, Double-Click on **Schedule Master**. 
2.	Click the **Add** button on the **Schedule Master** toolbar. 
3.	In the **Name** textbox, enter **Process Files**. 
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
15.	Select the **Process Files** Schedule.
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
41.	Build the **Process Files** (**Released**) for today and check the results using the **List**/**Matrix** views and the **PERT** view

 ![](../static/imgbasic/432.png)

</details>