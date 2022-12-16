---
sidebar_label: 'Unit 3 Exercise 7'
---

### Exercise 7: Access Codes

##### Objective:

Create an **Access Code** named ```Training```. Within Job Master, assign the **Access Code** to **WINDOWS JOB 1** in **MY FIRST SCHEDULE**.

Log out of Enterprise Manager and log back in as ```Student1```. 

Select Job Master and **MY FIRST SCHEDULE**. Notice that the user cannot view **WINDOWS JOB 1** because the ```Training``` **Access Code** has not been assigned to the ```Training``` Role.


<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E7.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

:::tip [Walkthrough Video - Unit 3 Exercise 7](../static/videobasic/U3E7.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Under the **Security** topic, Double-Click on **Access Codes**. 
2.	Click the Add button on the Access Codes toolbar.
3.	Type **Training** in the **Name** field.
4.	Type **This is an Access code for the Training**. in the Documentation field.
5.	Click the Save button on the Access Codes toolbar.
6.	Close the Access Codes tab.
7.	Be sure you are logged on with your ```SMATRAINING\SMAUSER``` login.
8.	Under the **Administration** topic, Double-Click **Job Master**.
9.	Select My **First Schedule** from the **Schedule** drop-down list.
10.	Select **Windows Job 1** from the **Job** drop-down list.
11.	On the **Access Code** drop-down list, select **Training**.
12.	**Save** your Job and close the Job Master tab..
13.	Logout from Enterprise Manager. Click the Logout button or select Logout from the Enterprise Manager Menu bar.
14.	Click **OK** to confirm you are logging out.
15.	From the OpCon/xps Login screen type ```Student1``` in the **Username** field and ```password1``` in the **Password** Field. Click Login.
16.	Under the **Administration** topic, Double-Click **Job Master**.
17.	Select **My First Schedule** from the **Schedule** drop-down list.
18.	Click the Job drop-down list. What do you see? Why?
19.	Close the Job Master tab and then logout from Enterprise Manager. Click **OK** to confirm you are logging out.
20.	From the OpCon/xps Login screen leave both the **Username** and the **Password** fields blank and click **Login**.

</details>