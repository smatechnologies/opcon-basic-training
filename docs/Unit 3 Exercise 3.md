---
sidebar_label: 'Unit 3 Exercise 3'
---

### Exercise 3: Batch Users

##### Objective:

Create a new ```Batch User``` named ```SMATRAINING\BATCHUSER``` for the ```WINDOWS``` Machine. The Password should be set as ```password```.

Next, give **Batch User Privileges** to the ```Training``` Role for the ```WINDOWS``` Machine.

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

:::tip [Walkthrough Video - Unit 3 Exercise 3](../static/videobasic/U3E3.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

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
13.	Under the Revoked list, click the ```SMATRAINING\BATCHUSER``` and then click the the green arrow (pointing to the right) to put ```SMATRAINING\BATCHUSER``` under the **Granted** list.
14.	Close the **Batch User** Privileges tab.
:::note
The User **Student1** (which is under the Training Role) now can select this user to run Jobs when setting them up in the Job Details screen.
:::

</details>