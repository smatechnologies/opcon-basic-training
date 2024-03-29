---
sidebar_label: 'Unit 3 Exercise 1'
---

## Exercise 1: Create a Role and User Account

### Objective

To create your first Role and assign your first User Account to it.

### Summary

You will create a new **Role** and **User Account**, then assign this new user to the new role. You will then validate what access the new user has by logging out and logging back ino Solution Manager.

### Instructions

#### Create a User Account

1.  In **Solution Manager**, navigate to **Library** > **Security** > **Access Management**.
2.  Click **Users**, right under **Access Management**
3.  Click the **+** at the top of the list of existing Users
4.  In the **User Details** pop-up:
  * In the **First Name** field, enter ```Student```
  * In the **Last Name** field, enter ```Number1```
  * In the **Login Name** field, enter ```Student1```
  * In the **Email** field, enter ```student1@congo.local```
  * In the **Password** field, enter ```password1```
  * Click **Save**

#### Create a Role

5.  Click **Roles**, right under Access Management
6.  Click the **+** at the top of the list of existing Roles
7.  In the **Role Detail** pop-up: 
  * In the **Role Name** field, enter ```Training```
  * In the **Description** field, enter some documentation.
    * Example: Role to be used during the security exercises.
  * Click **Save**
8.  Click on the **Users** section within the **Role Definition** section
9.  Select the check-box for **Student Number1**
10. Click **Save**.
11. Close **Library**

#### Validate Access

12. Click **Logout**
13. In the **Logout** pop-up, click **Yes**
14. On the **Login** screen:
  * In the **Username** field, enter in ```Student1```
  * In the **Password** field, enter in ```password1```
  * Click **Login**
15. Once logged in, you should be able to navigate to:
  * Library
    * Administration
      * License & Support
  * Management
    * Tags

:::note
* License & Support should show you the version information and links for various SMA and OpCon websites.
* Tags is accessible but if you try to create a new tag you won't be able to do to a lack of permissions.
:::

16. **Logout** of **Student1** and back in as the **SMAUSER**

<!--
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

18. In the **Role Assignment** section, select the **Training** role in the **Revoked** column and move it into the **Granted** column using the green arrow.
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
    *	Escalation Acknowledgement
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