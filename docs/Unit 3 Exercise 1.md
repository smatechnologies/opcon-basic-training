---
sidebar_label: 'Unit 3 Exercise 1'
---

## Exercise 1: Create a Role and User Account

### Objective

To create your first Role and assign your first User Account to it.

### Summary

Utilizing **Enterprise Manager**, you will create a new **Role** and **User Account**. Then utilizing **Solution Manager***, you will assign this new user to the new role. By logging out of Enterprise Manager and logging back in as Student1 you will validate that the user has limited access with the UI. The access can be validated by attempting to view the **Machines** that are defined.

### Instructions

:::info
This exercise will be worked in **Enterprise Manager**.
:::

<!--
:::info
This exercise will be worked in both **Enterprise Manager** and **Solution Manger**.
:::

#### Create a Role

1.  In **Enterprise Manager**, in the **Security** section, double click **Roles**. 
2.  Click **Add** in the top right corner. 
3.  In the **Name** field, enter ```Training```.
4.  In the **Documentation** field, enter some documentation.
  * Example: ```Role to be used during the security exercises.```
5.  Click **Save** in the top right corner.
6.  Close the **Roles** tab.

#### Create a User Account
7.  In the **Security** section, double click **User Accounts**. 
8.  Click **Add** in the top right corner. 
9.  In the **Name** field, enter ```Student1```.
10. In the **Full Username** field, enter ```Student Number 1```.
11. Click **Save** in the top right corner.
12. In the **Password Set** window, click the **Yes** button to copy the password 
to your clipboard.
13. Click the **Change User Password** button (right hand side of screen)
14. In the **Old Password** field, right click and paste in the password you copied in Step 12. 
15. In the **New Password** field, enter ```password1```.
16. In the **Confirm Password** field, enter ```password1```.
17. Click **OK**.

#### Assign the Role to the User

18. In **Solution Manager**, 




<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E1.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 1](../static/videobasic/U3E1.mp4)
:::

#### Create a Role

1.  In the **Security** section, double click **Roles**. 
2.  Click **Add** in the top right corner. 
3.  In the **Name** field, enter ```Training```.
4.  In the **Documentation** field, enter some documentation.
  * Example: ```Role to be used during the security exercises.```
5.  Click **Save** in the top right corner.
6.  Close the **Roles** tab.

#### Create a User Account
7.  In the **Security** section, double click **User Accounts**. 
8.  Click **Add** in the top right corner. 
9.  In the **Name** field, enter ```Student1```.
10. In the **Full Username** field, enter ```Student Number 1```.
11. Click **Save** in the top right corner.
12. In the **Password Set** window, click the **Yes** button to copy the password 
to your clipboard.
13. Click the **Change User Password** button (right hand side of screen)
14. In the **Old Password** field, right click and paste in the password you copied in Step 12. 
15. In the **New Password** field, enter ```password1```.
16. In the **Confirm Password** field, enter ```password1```.
17. Click **OK**.

#### Assign the Role to the User

18. In the **Role Assignment** section, selct the **Training** role in the **Revoked** column and move it into the **Granted** column using the green arrow.
19. Click **Save** in the top right corner.
20. Close the **User Accounts** tab.

#### Verify the User Accounts Privileges

21. Click the **Lock** icon in the top left corner to log out of Enterprise Manager.
22. In the **Confirm Logout** window, click **OK**.
23. From the OpCon/xps Login screen:
  * In the **Username** field, enter ```Student1```.
  * In the **Password** field, enter ```password1```.
  * Click **Login**.
24. Once logged in, validate that the user has access to the following: 
  *	Operation
    *	Machine Status
    *	Escalation Akcnoledgement
  *	External Tools
    *	Import Export
    *	Windows Tools
  *	Information
    *	Logs
  *	Scripts
    *	Repository
    *	Runners
    *	Types
  *	Support
    *	Support
    *	Report a problem
25. In the **Operations** section, double click **Machine Status**.
26.	No Machines should be there to view.
27. Close the **Machine Status** tab.
28. Click the **Lock** icon to logout of Enterprise Manager. 
29. Click **OK** to confirm you are logging out.
30. Leave both the **Username** and the **Password** fields blank.
31. Click **Login**.

</details>