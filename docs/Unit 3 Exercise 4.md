---
sidebar_label: 'Unit 3 Exercise 4'
---

### Exercise 4: Department Privileges

##### Objective:

Create a **Department** named ```TrainingDept```.

Assign the following ```TrainingDept``` **Departmental Function Privileges** to the ```Training``` Role:

* Add Jobs to Master Schedules
* Delete Jobs from Master Schedules
* Modify Jobs in Master Schedules
* View Jobs in Daily Schedules
* View Jobs in Master Schedules
* View Jobs in Schedules Operations
* Release Jobs
* Hold Jobs

Next, assign the ```TrainingDept``` to **WINDOWS JOB 1**, **WINDOWS JOB 2**, and **WINDOWS JOB 3** in **MY FIRST SCHEDULE**.

Finally, log out of Enterprise Manager and log back in as ```Student1```. The user should be able to access the Job Master Topic but still be limited in what can be viewed or maintained because it lacks Schedule and Function Privileges.

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E4.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

:::tip [Walkthrough Video - Unit 3 Exercise 4](../static/videobasic/U3E4.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Create a Department
    *	Under **Security**, Double-Click on **Departments**. 
    *	Click the Add button on the Departments toolbar.
    *	Type **TrainingDept** in the **Name** field.
    *	Type **Department created for training** in the **Documentation** field
    *	Click the Save button on the Departments toolbar.
    *	Close the Departments tab.
2.	Assign Departmental Function Privileges to the Role
    *	Under the **Security > Privileges** topic, Double-Click on **Departmental Function Privileges**. 
    *	On the **Select Role** drop-down list select **Training Role**.
        *	Notice that all privileges are under the **Revoked** list (on the left) 
    *	On the **Departments** drop-down list select **TrainingDept**.
    *	Grant the Role the following Departmental Function Privileges
        *	Add Jobs to Master Schedules
        *	Delete Jobs from Master Schedules
        *	Modify Jobs in Master Schedules
        *	View Jobs in Daily Schedules
        *	View Jobs in Master Schedules
        *	View Jobs in Schedules Operations
        *	Release Jobs
        *	Hold Jobs
    *	Close the Departamental Privileges tab.

:::note
The User Student1 (which is under the Training Role) now can add/modify/delete Jobs to Schedules and see them in the Operations Views screen. The user can also Hold and Release Jobs.
:::

3.	Assign the Department to a Job
    *	Under the **Administration** topic, Double-Click on **Job Master**. 
    *	Select **My First Schedule**.
    *	Select **Windows Job 1**.
    *	Select **TrainingDept** in the “**Department**” Field.
    *	Click the Save button on the Job Master toolbar.
    *	Click the **Frequency** tab.
    *	Under **Job Build Status**, activate ‘**On Hold**’.
    *	Click the Save button on the Job Master toolbar.
    *	Select **Windows Job 2**.
    *	Select **TrainingDept** in the “**Department**” Field.
    *	Click the Save button on the Job Master toolbar.
    *	Click the **Frequency** tab.
    *	Under Job Build Status, activate ‘**On Hold**’.
    *	Click the Save button on the Job Master toolbar.
    *	Select **Windows Job 3**.
    *	Select **TrainingDept** in the “**Department**” Field.
    *	Click the Save button on the Job Master toolbar.
    *	Close the Job Master tab.
4.	Check User Access
    *	Logout from Enterprise Manager. Click the Logout button or select Logout from the Enterprise Manager Menu bar.
    *	Click **OK** to confirm you are logging out.
    *	From the OpCon/xps Login screen type **Student1** on the **Username** field and **password1** on the **Password** Field. Click **Login**.
    *	Notice that the user still does not have privilege to see **Machines** under the **Administration** topic.
    *	Notice that now this user is able to access the **Job Master** topic
    *	Double-Click the **Job Master** topic.
    *	Try selecting a Schedule from the **Schedule** drop-down list. What happened?
    *	Close the Job Master.
    *	Logout from Enterprise Manager. Click **OK** to confirm you are logging out.
    *	From the OpCon/xps Login screen leave both the **Username** and the **Password** fields blank and click **Login**.

:::caution Warning
Note: The User **Student1** cannot view or maintain Jobs in a Schedule because we did not setup Schedule and Functional Privileges yet.
:::

</details>