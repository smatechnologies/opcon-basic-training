---
sidebar_label: 'Unit 3 Exercise 4'
---

## Exercise 4: Department Privileges

### Objective

To create a **Department** and assign it 3 jobs. Then assign **Departmental Function Privilges** to the **Training** role for the **Department**.

### Summary

Create a **Department** called **TrainingDept** and assign to **WINDOWS JOB 1**, **WINDOWS JOB 2**, and **WINDOWS JOB 3** in **MY FIRST SCHEDULE**.

Then assign assign eight **Departmental Function Priviliges** to the **Training** role.

Finally, log in as **Student1** to validate that the user can access the Master Jobs topic but 

still be limited in what can be viewed or maintained because it lacks Schedule and Function Privileges.


### Instructions

:::info Note
This exercise will be worked in both **Solution Manager** and **Enterprise Manager**.
:::

#### Create a Department

1.  In **Library**, Under **Security**, click on **Departments**. 
2.  Click **Add**.
3.  In the **Department** pop-up window:
  * In the **Name** field, enter ```TrainingDept```.
  * In the **Documentation** field, enter in some documentation.
    * Example: This department is used for training.
  * Click **Save**.
4.  Click **Back**.

#### Assign the Department to the Jobs

5.  In **Library** > **Administration**, click on **Master Jobs**. 
6.  Using the filters across the top of the table, locate and select **Windows Job 1**.
7.  Click **Edit**.
8.  Click the **Lock** or **CRTL + ALT + A** to enter **Admin Mode**.
9.  In the **Department** drop-down, select **TrainingDept**.
10. In the **Fequency** section:
  * Select the frequency that is in the **Active** column.
  * In the **Job Build Status** drop-down, select **Hold**.
11. Click **Save**.
12. Click **Back**.
13. Repeat **Steps 6-12** to add the **Department** to **Windows Job 2**.
14. Repeat **Steps 6-12 skipping Step 10** for **Windows Job 3**.
15. Close **Library**.


#### Assign the Departmental Function Privileges

16. In **Enterprise Manager**, under **Security**, expand **Privileges**, double click on **Departmental Function Privileges**.
17. In the **Select Role** drop-down, select **Training** role.
18. In the **Departments** drop-down, select **TrainingDept**.
19. Grant the Role the following Departmental Function Privileges
  * Add Jobs to Master Schedules
  * Delete Jobs from Master Schedules
  * Hold Jobs
  * Modify Jobs in Master Schedules
  * Release Jobs
  * View Jobs in Daily Schedules
  * View Jobs in Master Schedules
  * View Jobs in Schedules Operations
20. Close **Departamental Privileges** tab.
21. Minimize **Enterprise Manager**.

:::note
The User Student1 (which is under the Training Role) now can add/modify/delete jobs to schedules and see schedules and jobs in the Operations Views screen. The user can also Hold and Release Jobs.
:::

#### Valdate Privileges

22. Navigate back to **Solution Mangaer**
23. In the blue column on the left, click **Logout**.
24. Click **Yes** to confirm you are logging out.
25. From the **Login Screen**
  * In the **Username** field, enter ``` Student1```
  * In the **Password** field, enter ```password1```
  * Click **Login**.
26. Click on **Library**.
27. Notice that the user still does not have privilege to see **Machines** under the **Administration** topic.
28. Notice that now this user is able to access the **Master Jobs** topic.
29. Click the **Master Jobs** topic.
30. What happened?
31. In the blue column on the left, click **Logout**.
32. Click **Yes** to confirm you are logging out.
33. From the **Login Screen**, click the **Log in with Windows**

:::caution Warning
Note: The user **Student1** cannot view or maintain Jobs in a Schedule because we did not setup Schedule and Functional Privileges yet.
:::


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 4](../static/videobasic/U3E4.mp4)

:::

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