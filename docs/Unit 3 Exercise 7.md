---
sidebar_label: 'Unit 3 Exercise 7'
---

## Exercise 7: Function Privileges

### Objective

To grant the Training Role some Function Privileges.

### Summary

Grant the **Training** role the **Function Privilege** of **Build Daily Schedules**.

Validate that **Student1** should be able to see the jobs in **MY FIRST SCHEDULE** but not all of them. **Student1** should only see the first three Windows jobs in the schedule. This is because the **Training** role only has access to the jobs that the ** TrainingDept** department was assigned to.

Then attempt to to add a UNIX job to the schedule in Job Master. Finally, attempt to change the job status of existing jobs in the daily schedule.

### Instructions

#### Granting the Function Privilege

1. In **Library** > **Security** > **Access Management**
2. In the **Role** list, select **Training**.
3. In the **Role Definition** section, select **Activities**
4. Expand **Schedule**.
5. Select the checkbox for **Build Daily Schedules**
6. Click **Save**

#### Validate Privileges

7. Click **Logout**
8. In the **Logout** pop-up, click **yes**.
9. From the **Login** screen:
  * In the **Username** field, enter ```Student1```.
  * In the **Password** field, enter ```password1```.
  * Click **Login**.
10. In **Library** > **Administration**, select **Master Job**.
11. In the **Job** list, what do you see?

:::note
You should not see Windows Job 1. Why? 

Because the **Training** role associated with the **Student1** user has access only to the jobs assigned to the **< None >** Access Code.
:::

12. Edit one of the Windows Jobs, what is the User ID associated with this Job?

:::caution Warning
The field should be empty. This is because in Exercise 3, we granted the **Training** role access to **SMATRAINING\BATCHUSER** and **NOT** to **SMATRAINING\SMAUSER**. 

**DO NOT Change the User ID.**
:::

#### Attempt to Add a UNIX Job
13. Click **Back** in the upper right corner.
14. Click **Add**.
15. In **Job Type** field, try to select UNIX.

:::note
* What happens?
* Can you select a UNIX machine?
You can’t add a UNIX Job because the role is not assigned to any UNIX machine.
:::

16. Close **Library**

#### Change Job Statuses in Operations

17. In the **Operation** section, click **Processes** in the top right corner.
18. In the **Schedule Build** screen:
  * In the **Scheduling Dates** section, validate that today is selected for both **From** and **To**.
  * In the **Schedule Build** section, select **Released**
  * Toggle **Overwrite Existing Schedules** on
  * In the **Schedule List** section, select **My First Schedule**.
  * Click **Build**.
19. On the **Build** screen, expand out the date until you can click on the **Schedule Name**.
20. Once in the **Processes** screen, make sure that **My First Schedule** is in the **Schedule** section.
21. In the **Job** section, right click **Windows Job 2** and select **Release**. The job should move to a **Waiting on Dependency** status.
22. Right-Click **Windows Job 2** again and click **Force Start**.

:::note
* Notice that **Force Start** is not enabled. 
* Why?
* Because the **Force-Start Job Departmental Function Privilege** is not granted to this user’s role.
:::

23. Right-click **Windows Job 3** and notice that the **Cancel** option is not enabled. 

:::note
* Why?
* Because the **Cancel Jobs Departmental Function Privilege** is not granted to this user’s role.
:::

24. **Logout** of Solution Manager once **My First Schedule** is complete 
25. Log back in by clicking the **Login with Windows** button.
26. Right-click **Windows Job 1** and select **Release** to allow the jobs in **My First Schedule** to complete.

#### Reset the Jobs to Original State

27. In **Library** > **Administration** > **Master Jobs**
28. Using the Schedule Filter at the top of the Schedule Column, locate **My First Schedule**.
29. Edit **Windows Job 1**, **Windows Job 2**, and **Windows Job 3** to change the **Build Status** to be **Released**.
30. Close **Library**.



## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 6](../static/videobasic/U3E6.mp4)
:::

#### Granting the Function Privilege

1. In **Security**, expand **Privileges**, double click on **Function Privileges**. 
2. In the **Select Role** drop-down, select **Training**.
3. In the **Revoked** column, select **Build Daily Schedules** and using the green arrow move the privilege to the **Granted** column.
4. Close the **Function Privileges** tab.
5. Open the **Matrix** view and check if **My First Schedule** is completed. If not, cancel any Job that is keeping the Schedule open.
6. Close the **Matrix** view.

#### Validate Privileges

7. Click the **Lock** icon in the top left corner to log out of Enterprise Manager.
8. In the **Confirm Logout** window, click **OK**.
9. From the OpCon/xps Login screen:
  * In the **Username** field, enter ```Student1```.
  * In the **Password** field, enter ```password1```.
  * Click **Login**.
10. In **Administration** section, double click **Job Master**.
11. In the **Schedule** drop-down, select **My First Schedule**.
12. In the **Job** Drop-down, what do you see?

:::note
You should only see 3 Windows Jobs. Why? 

Because the **Training** role associated with the **Student1** user has access only to the jobs assigned to the **TrainingDept**.
:::

13. Select **Windows Job 1**, what is the User ID associated with this Job?

:::caution Warning
The field should be empty. This is becuase in Exercise 3, we granted the **Training** role access to **SMATRAINING\BATCHUSER** and **NOT** to **SMATRAINING\SMAUSER**. 

**DO NOT Change the User ID.**
:::

#### Attempt to Add a UNIX Job
14. Click **Add** in the upper right corner.
15. In **Job Type** field, try to select UNIX.

:::note
* What happens?
* Can you select a UNIX machine?
You can’t add a UNIX Job because the role is not assigned to any UNIX machine.
:::

16. Click **Cancel** in the top right corner.
17. Close the **Job Master** tab.

#### Change Job Statuses in Matrix
**
18. In the **Operation** section, double click **Schedule Build**.
19. In the **Schedule Build** pop-up window:
  * In the **Scheudle Selection** section, select **My First Schedule**.
  * In the **Scheduling Dates** section, validate that today is selected for both **Start** and **Stop**.
  * Check the box for **Overwrite existing schedules**.
  * Click **Build**.
  * In the **Build Properties** window, select **Released** and ** OK**.
  * Close the **Schedule Build** pop-up window
20. In the **Operation** section, double click **Matrix**.
21. In the **Calendar** on the **Matrix** screen, make sure today’s date is selected.
22. In the **Schedule** section, select **My First Schedule**.
23. In the **Job** section, right click **Windows Job 2** and select **Release**. The job should move to a **Waiting on Dependency** status.
24. Right-Click **Windows Job 2** again and click **Force Start**.

:::note
* Notice that **Force Start** is not enabled. 
* Why?
* Because the **Force-Start Job Departmental Function Privilege** is not granted to this user’s role.
:::

25. Right-click **Windows Job 3** and notice that the **Cancel** option is not enabled. 

:::note
* Why?
* Because the **Cancel Jobs Departmental Function Privilege** is not granted to this user’s role.
:::

26. Right-click **Windows Job 1** and select **Release** to allow the jobs in **My First Schedule** to complete.
28. Click the **Lock** icon to logout of Enterprise Manager. 
29. Click **OK** to confirm you are logging out.
30. Leave both the **Username** and the **Password** fields blank.
31. Click **Login**.

</details>