---
sidebar_label: 'Unit 3 Exercise 1'
---

### Exercise 1: Create a Role and User Account

##### Objective:

Create a **Role** named ```Training```. Be sure that it does NOT Inherit Privileges.

Create a **User Account** named ```Student1``` (Full User Name: ```Student Number 1```).

Copy the Password to your clipboard and change the copied Password to ```password1``` and confirm.

Give ```Student 1``` the Role of ```Training```.

Verify the User Account Privileges by logging out of Enterprise Manager and logging back in as Student1. The user should have limited access to topics that can be verified by choosing Machine Status. No Machines should be visible.

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E1.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

:::tip [Walkthrough Video - Unit 3 Exercise 1](../static/videobasic/U3E1.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Create a Role
  * Under the **Security** topic, Double-Click on **Roles**. 
  *	Click the **Add** button on the Roles toolbar. 
  *	In the **Name** field, type **Training**.
  *	In the **Documentation** field, type:
“Role to be used during the Security Exercises.”
  *	Under **Privileges**, be sure that all **Inherit Privileges** checkboxes are **unchecked**.
  *	Click the Save Button.
  *	Close the “Roles” tab.
2.	Create a User Account
  *	Under the **Security** topic, Double-Click on **User Accounts**. 
  *	Click the Add button on the User Accounts toolbar.
  *	In the **Name** field, type **Student1**.
  *	In the **Full Username** field, type **Student Number 1**.
  *	Click the Save button on the User Accounts toolbar.
  *	In the **Password Set** window, click the **Yes** button to place the password 
on your clipboard.
  *	Click the **Change User Password** button (right hand side of screen)
  *	Right-Click in the **Old Password** field and paste the old password. 
  *	Click inside the **New Password** field, and type **password1** (lower case).
  *	 Click inside the **Confirm Password** field, and type **password1** (lower case).
  *	Click the **OK** button.
  *	Select the **Training** Role under the **Revoked** list and then click the green arrow (pointing to the right) to put Student 1 in the Training Role. Notice that the Training Role will be under the Granted list.
  *	Click the Save button on the  User Accounts toolbar.
  *	Close the User Accounts tab.
3.	Verify the User Accounts Privileges
  *	Logout from Enterprise Manager. Click the Logout button or select Logout from the Enterprise Manager Menu bar.
  *	Click **OK** to confirm you are logging out.
  *	From the OpCon/xps Login screen type **Student1** on the **Username** field and **password1** on the **Password** Field. Click Login.
  *	Check the topics the user has access to:
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
  *	Double-Click **Machine Status** under **Operation**
  *	No Machines should be there to view.
  *	Close the **Machine Status** tab and then logout from Enterprise Manager. Click **OK** to confirm you are logging out.
  *	From the OpCon/xps Login screen leave both the **Username** and the **Password** fields blank and click **Login**.

</details>