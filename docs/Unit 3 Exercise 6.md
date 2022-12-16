---
sidebar_label: 'Unit 3 Exercise 6'
---

### Exercise 6: Function Privileges

##### Objective:

Grant the ```Training``` Role the **Function Privilege** of **Build Daily Schedules**.

Log out of Enterprise Manager and log back in as ```Student1```. The user should be able to see **MY FIRST SCHEDULE**, but in Job Master, see only the first three Windows Jobs in the Schedule. This is because the ```Training``` Role only has access to Jobs assigned to the ```TrainingDept``` Windows Machines.

Next, attempt to add a ```UNIX``` Job to **MY FIRST SCHEDULE**. The user will be unable to do so because no ```UNIX``` machine is assigned.

Finally, rebuild **MY FIRST SCHEDULE**, overwriting for Today. Release the first and second Jobs. Right-Click on each Job and notice that some Functions are not available because they have not been granted to the ```Training``` Role (For example, **Force-Start Job** and **Cancel**).

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E6.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

:::tip [Walkthrough Video - Unit 3 Exercise 6](../static/videobasic/U3E6.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Under **Security > Privileges**, Double-Click on **Function Privileges**. 
2.	On the **Select Role** drop-down list select **Training Role**.
    * Notice that all Functions are presented on the **Revoked** list (on the left).
3.	Under the Revoked list, click **Build Daily Schedules** and then click the the green arrow (pointing to the right) to put **Build Daily Schedules** under the **Granted** list.
4.	Close the **Function Privileges** tab.
5.	Open the List or Matrix view and check if **My First Schedule** is completed. If not, cancel any Job that is keeping the Schedule open.
6.	Close the List or Matrix view.
7.	Logout from Enterprise Manager.  Click the Logout button or select Logout from the Enterprise Manager Menu bar.
8.	Click **OK** to confirm you are logging out.
9.	From the OpCon/xps Login screen type **Student1** on the **Username** field and **password1** on the **Password** Field. Click **Login**.
10.	If not expanded, expand the **Administration** topic.
11.	Double-Click the **Job Master** topic.
12.	Try selecting a Schedule from the **Schedule** drop-down list. What happened?
    * Notice that now this user can see **My First Schedule**. 
13.	Select **My First Schedule**.
14.	Click the Job drop-down list.  What do you see?

:::info
Only 3 Windows Jobs. Why? Because the role associated with this user has access only to Jobs assigned to the TrainingDept.Windows Machines.
:::

15.	Select a Windows Job. What is the User ID associated with this Job?

:::caution Warning
Do Not Change the User ID
:::

16.	Add a UNIX Job. What happens? Can you select a UNIX machine?
    * You can’t add a UNIX Job because the role is not assigned to any UNIX machine.
    * Click the Cancel button.
17.	Close the **Job Master** tab.
18.	Expand the **Operation** topic (Note: If the Schedule is still In Process, ask the instructor for assistance).
    * Double-Click Schedule Build
    * **Build**, **Overwrite** and **Release My First Schedule**.
19.	Close the **Schedule Build** screen.
20.	Open the **Matrix** Screen by Double-Clicking Matrix under the Operations section of the Navigation Panel.
21.	Make sure today’s date is selected in the Calendar on the top left of the screen and select **My First Schedule** in the Schedule list.
22.	Right-Click **Windows Job 1** and select **Release**. The Job should start to run.
23.	Right-Click **Windows Job 2** and select **Release**.  **Windows Job 2** should move to a **Waiting on Dependency** status.
24.	Right-Click **Windows Job 2** again and notice that the “**Force Start**” is not enabled. 
    * Why?  Because the “**Force-Start Job**” Departmental Function Privilege is not granted to this user’s role.
25.	Right-Click **Windows Job 3** and notice that the “**Cancel**” option is not enabled. 

:::info
Why?  Because the “**Cancel Jobs**” Departmental Function Privilege is not granted to this user’s role.
:::

26.	Under the **Operation** topic, Double-Click **List**
    * Expand the date. What do you see?
    * Expand the Schedule. What do you see?
    * Right-Click one of the Jobs. Are you able to change the status of the Job? Why?
27.	Close the Daily List and the Matrix tabs and then logout from Enterprise Manager. Click **OK** to confirm you are logging out.
28.	From the OpCon/xps Login screen leave both the **Username** and the **Password** fields blank and click **Login**.

</details>