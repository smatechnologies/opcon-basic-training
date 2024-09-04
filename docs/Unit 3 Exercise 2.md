---
sidebar_label: 'Unit 3 Exercise 2'
---

## Exercise 2: Machine Privileges

### Objective

To grant Machine Privileges to the Training Role.

### Summary

Grant  **Machine Privileges** to the **Training Role** so that the **Student1** user can see the machines but not make changes to them.

### Instructions

#### Granting Machine Privileges

1.  In **Library** > **Security** > **Access Management**, select the **Training** Role
2.  Click **Resources**, in the Role Definition section.
3.  Expand **Machine**
  * Select the **SMATraining** machine
  * Select **Allow Job Updates**
  * Click **Save**

#### Validate Privileges

4.  Click the **Logout** icon.
5.  In the **Logout** pop-up, click **Yes**.
6.  On the Login screen:
  * In the **Username** field, enter ```Student1```.
  * In the **Password** field, enter ```password1```.
  * Click **Login**.
7.  Click the **Heart Icon** in the bottom right corner of Solution Manager.

:::note
You should see the machine(s) that you granted the Role access too.
:::

8. Right click on the **SMATraining** machine
9. In the **Agent Selection** panel:
  * Click the **Wrench** icon to edit the machine. 
  * You should receive an error message.
    * Error: _Function Privileges [Maintain Machines] are required to access this page._
10. Close the **Error Message**
11. **Logout** of Solution Manager. 
12. Click **Yes** to confirm you are logging out.
13. Click **Log In With Windows**.

:::caution Warning
The User **Student1** cannot update any information for any machine in the configuration, but will be able to select this machine when setting up jobs **IF** the privileges for that machine are configured.
:::



## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 2](../static/videobasic/U3E2.mp4)
:::

#### Granting Machine Privileges

1. In the **Security** section, expand **Privileges** 
2. Double click on **Machine Privileges**. 
3. In the **Select Role** drop-down, select the **Training** Role.
4. In the **Revoked** column, click **SMATraining** and then click the the green arrow (pointing to the right) to move it to the **Granted** column.
5. Close the **Machine Privileges** tab.

#### Verify the Machine Privileges

21. Click the **Lock** icon in the top left corner to log out of Enterprise Manager.
22. In the **Confirm Logout** window, click **OK**.
23. From the OpCon/xps Login screen:
  * In the **Username** field, enter ```Student1```.
  * In the **Password** field, enter ```password1```.
  * Click **Login**.
24. In **Operations**, double click **Machine Status**.
25. In **Machine Status** tab, right click the **SMATraining** machine.
26. Validate that the user cannot change the communication status of the machine.
27. Attempt to select **Edit Machine**. You should receive an error message.
28. Close the **Machine Status** tab.
29. Logout of Enterprise Manager. 
30. Click **OK** to confirm you are logging out.
31. Leave both the **Username** and the **Password** fields blank.
32. Click **Login**.

:::caution Warning
The User **Student1** cannot update any information for any machine in the configuration, but will be able to select this machine when setting up jobs **IF** the privileges for that machine are configured.
:::

</details>