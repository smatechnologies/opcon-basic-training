---
sidebar_label: 'Unit 3 Exercise 3'
---

## Exercise 3: Batch Users

### Objective

To create a new **Batch User** that could be used to run jobs.

### Summary

Create a new **Batch User** named **SMATRAINING\BATCHUSER** and grant **Batch User Privileges** to the **Training** Role

### Instructions

#### Create the Batch User

1. In **Library**, under the **Security** topic, click on **Batch Users**. 
2. Click **Add**.
3. In the **Batch Users** pop-up window: 
  * In the **User Profile** field, enter ```SMATRAINING\BATCHUSER```
  * In the **Select the target OS** drop down, select **Windows**.
  * In the **Password** field, enter ```password```.
  * In the **Confirm Password** field, enter ```password```.
  * Click **Save**.

#### Assign the Batch User Privilege

4. Click **Manage Privileges**. 
5. In the **Batch User Privileges** pop-up window:
  * In the **Select Role** drop-down, select **Training**.
  * In the **Select the target OS**, select **Windows**.
  * In the **Revoked** column, select the **SMATRAINING\BATCHUSER**.
  * Use the **>** to move the user into the **Active** column.
  * Click **Save**.
6. Close **Library**.

:::info Note

The User **Student1** (which is under the **Training Role**) can now select the new Batch User, SAMTRAINING\BATCHUSER, when creating Jobs in the Job Details screen.

:::



## Enterprise Manager

<details>

:::

:::tip [Walkthrough Video - Unit 3 Exercise 3](../static/videobasic/U3E3.mp4)

:::

1.	Under the **Security** topic, Double-Click on **Batch Users**. 
2.	Select **Windows** from the **Select the target OS** drop-down list.
3.	Click the **Add** button on the Batch Users toolbar.
_(Be sure to click the Add button. Do not type over the currently existing Batch User profile.)_
4.	Type ```SMATRAINING\BATCHUSER``` in the **User** field (under the **Batch User Details** area – on the right).
5.	Type the word **password** in the **Password** and **Confirm Password** fields.
6.	Click the Save button on the User Accounts toolbar.
7.	Notice that ```SMATRAINING\BATCHUSER``` was added to the Batch Users list for Windows machines (on the left).
8.	Close the **Batch Users** tab.
9.	Under the **Security> Privileges** topic, Double-Click on **Batch Users Privileges**. 
10.	On the **Select Role** drop-down list select the **Training Role**.
11.	On the **Target Operating System** drop-down list select **Windows**.
12.	Notice that the ```SMATRAINING\BATCHUSER``` is presented on the Revoked list (on the left) 
13.	Under the Revoked list, click the ```SMATRAINING\BATCHUSER``` and then click the green arrow (pointing to the right) to put ```SMATRAINING\BATCHUSER``` under the **Granted** list.
14.	Close the **Batch User** Privileges tab.
:::note
The User **Student1** (which is under the Training Role) now can select this user to run Jobs when setting them up in the Job Details screen.
:::

</details>