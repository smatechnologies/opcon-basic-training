---
sidebar_label: 'Unit 3 Lab A'
---

### LAB A

##### Objective:

Congo Online Retail Inc.’s., Board of Directors would like to have access to OpCon so they can check the progress of the automated processes.

The IT Management does not want the Board of Directors to be able to make any changes in OpCon and can only view the Schedules created during these Labs. 

Create a **Role** named ```Board Member```. 

Create a **User Account** named ```Congo Management``` (**Full Username**: ```Board of Directors```) and assign it the ```Board Member``` Role.

The **Role** should be able to View:

* **Congo Inventory Management** Schedule
* **Congo Inventory Reports** Schedule
* **Congo Payroll Payments** Schedule
* Jobs in Daily Schedules
* Jobs in Schedule Operations

Log out of Enterprise Manager and log back in as the new **User Account** to verify settings and restrictions.

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabA.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

<details>

<summary>Click for Step-By-Step Instructions</summary>

**Lab Instructions**:  

*	Create a **Role** named **Board Member**
*	Grant permissions to view the following Lab Schedules:
    *	Congo Inventory Management
    *	Congo Inventory Reports 
    *	Congo Payroll Payments
*	Create a **User Account** named **Congo Management**
*	Give a **Full Username** of **Board of Directors**
*	Change the password to ```opconxps```
*	Assign the **Board Member** role to the Congo Management User Account
*	The **Board Member** Role should be able to View Jobs in Daily Schedules
*	The **Board Member** Role should be able to View Jobs in Schedule Operations
*	Logout of the Enterprise Manager
*	From top left, choose **Enterprise Manager > Logout**
*	Login with the new User account and password
*	Verify the permissions are accurate
*	The Jobs are visible in the operations view
*	Changes cannot be made to Jobs
*	Logout and login again using leaving the Username and Password blank

</details>