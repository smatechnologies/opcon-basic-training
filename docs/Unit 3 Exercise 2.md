---
sidebar_label: 'Unit 3 Exercise 2'
---

### Exercise 2: Machine Privileges

##### Objective:

Grant the ```Training``` Role **Machine Privileges**. 

Verify that Machine Privileges have been granted by logging out of Enterprise Manager and logging back in as Student1. 

Notice that ```Student1``` will still not have privileges to see Machines in Administration, but will be able to see the SMATraining Machine in Machine Status (but will not be able to change Communication Status or edit the Machine).

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E2.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

:::tip [Walkthrough Video - Unit 3 Exercise 2](../static/videobasic/U3E2.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Under the **Security> Privileges** topic, Double-Click on **Machine Privileges**. 
2.	On the **Select Role** drop-down list select the **Training** Role.
3.	Under the Revoked list, click the **SMATraining** machine and then click the the green arrow (pointing to the right) to put **SMATraining** under the **Granted** list.
4.	Close the Machine Privileges tab.

:::note  
The User **Student1** (which is under the **Training Role**) now can select this machine to run Jobs when setting them up in the Job Details screen.
:::

5.	Logout from Enterprise Manager. Click the Logout button or select Logout from the Enterprise Manager Menu bar.
6.	Click **OK** to confirm you are logging out.
7.	From the OpCon/xps Login screen type **Student1** on the **Username** field and **password1** on the **Password** Field. Click **Login**.
8.	Notice that the user still does not have privilege to see **Machines** under the **Administration** topic
9.	Double-Click **Machine Status** under Operations
10.	Right-Click the **SMATraining** machine and check that the user cannot change the Communication status of the machine.
11.	Try to select **Edit Machine**. You will receive an error message.
12.	Close the Machine Status tab and then logout from Enterprise Manager. Click OK to confirm you are logging out.
13.	From the OpCon/xps Login screen leave both the **Username** and the **Password** fields blank and click **Login**.

:::caution Warning
The User **Student1** cannot update any information for any machine in the configuration, but will be able to select this machine when setting up Jobs IF the privileges for that machine are configured.
:::

</details>