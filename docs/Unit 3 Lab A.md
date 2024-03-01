---
sidebar_label: 'Unit 3 Lab A'
---

## LAB A

### Objective

To create a new Role and User Account for Congo Online Retail to limit what the Board of Directors sees.

### Summary

Congo Online Retail Inc.’s., Board of Directors would like to have access to OpCon so they can check the progress of the automated processes. The IT Management does not want the Board of Directors to be able to make any changes in OpCon and can only view the Schedules created during these Labs. 

The **Role** should be able to View:

* **Congo Inventory Management** Schedule
* **Congo Inventory Reports** Schedule
* **Congo Payroll Payments** Schedule
* Jobs in Daily Schedules
* Jobs in Schedule Operations

### Lab Instructions

*	Create a **Role** named **Board Member**
*	Create a **User Account** called **Congo Management**
*	Provide a **Full Username** for **Congo Management**.
*	Change the user password to be ```opconxps```
*	Assign the **Board Member** role to the Congo Management User Account

:::tip
You can reference Unit 3 - Exercise 1 to create a User and Role.
:::

*	Grant permissions so the **Board Member** can view the following schedules:
  *	**Congo Inventory Management**
  *	**Congo Inventory Reports**
  *	**Congo Payroll Payments**

:::tip
You can reference Unit 3 - Exercise 5 to assign Schedule Privileges.
:::

*	Grant permissions so the **Board Member** role can:
  * **View Jobs in Daily Schedules**
 	* **View Jobs in Schedule Operations**

:::tip
You can reference Unit 3 - Exercise 4 to assign Departmental Function Privileges.
:::

*	Logout of the Enterprise Manager.
*	Login with **Congo Management**.
*	Verify the user can see the schedules and jobs in Matrix view.

:::note
*	Attempt to make changes to the jobs.
* Why can't you make changes?
:::

* Be sure to logout as the **Congo Management** user and back in as the **SMAUSER**.

<!--
## Enterprise Manager

<details>

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabA.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>


*	Create a **Role** named **Board Member**
*	Create a **User Account** called **Congo Management**
*	Provide a **Full Username** for **Congo Management**.
*	Change the user password to be ```opconxps```
*	Assign the **Board Member** role to the Congo Management User Account

:::tip
You can reference Unit 3 - Exercise 1 to create a User and Role.
:::

*	Grant permissions so the **Board Member** can view the following schedules:
  *	**Congo Inventory Management**
  *	**Congo Inventory Reports**
  *	**Congo Payroll Payments**

:::tip
You can reference Unit 3 - Exercise 5 to assign Schedule Privileges.
:::

*	Grant permissions so the **Board Member** role can:
  * **View Jobs in Daily Schedules**
 	* **View Jobs in Schedule Operations**

:::tip
You can reference Unit 3 - Exercise 4 to assign Departmental Function Privileges.
:::

*	Logout of the Enterprise Manager.
*	Login with **Congo Management**.
*	Verify the user can see the schedules and jobs in Matrix view.

:::note
*	Attempt to make changes to the jobs.
* Why can't you make changes?
:::

* Be sure to logout as the **Congo Management** user and back in as the **SMAUSER**.

</details>
-->