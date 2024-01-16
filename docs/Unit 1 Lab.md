---
sidebar_label: 'Unit 1 Lab'
---

## Unit 1 Lab

### Objective

To create the first production schedule that will run inventory reports for six different products.

### Summary

Congo Online Retail Inc. needs to run inventory reports every day starting at 8:00 AM. You will create a schedule named **Congo Inventory Reports** that will run separate inventory report jobs for each of the six products. These reports must run **sequentially** and be **tagged** according to the appropriate category.

* Products: **Legos**, **Nerf**, **Smartphones**, **XBOX**, **Levis**, and **Nike**
* Categories: **Toys**, **Electronics**, and **Clothing**

<!--
:::tip [Walkthrough Video - Unit 1 Exercise 1](../static/videobasic/U1LAB.mp4)

:::
-->

### Lab Instructions

* Create a schedule called **Congo Inventory Reports**
* Add **Documentation** for the schedule 
* The schedule will have an **8 hour offset**
* Saturday and Sundays are non-working days
* Auto-build the Schedule ```7``` days in advance for ```1``` day
* Auto-delete the Schedule for ```7``` days ago

:::tip
* You can reference [**Unit 1 - Exercise 1**](/docs/Unit%201%20Exercise%201.md) for steps on how to create a Schedule.
:::

* Create a **Windows Job** for **each of the products in the introduction**
* Name each job the same as its product name
* These jobs need to run on the ```SMATRAINING``` **Machine**
* These jobs need to run as the ```SMATRAINING\SMAUSER``` **User ID**
* Each of the six jobs will use the following command line:
```cmd
"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t15 -e0
```
* Add **Documentation** for each Job. 
  * Example: This Job is reporting inventory for the number of Legos in Stock

:::tip
You can reference [**Unit 1 - Exercise 3**](/docs/Unit%201%20Exercise%203.md) for steps on how to create Jobs.
:::

* **Tag** each of the jobs according to the appropriate category: **Toys**, **Electronics** or **Clothing**.

:::tip
You can reference [**Unit 1 - Exercise 5**](/docs/Unit%201%20Exercise%205.md) for steps on how to add Tags.
:::

* The Jobs must run Monday-Friday
* Use the **Inactive Frequency**: ```Mon-FriOnDate```
* Click the Forecast button to be sure the frequency matches the requirement.

:::tip
You can reference [**Unit 1 - Exercise 3**](/docs/Unit%201%20Exercise%203.md) for steps on how to add a Frequency.
:::

* The Jobs must run in the following order with each job **requiring** the job before it to **Finish OK**:
  * **Legos** &rarr; **Nerf** &rarr; **Smartphones** &rarr; **XBOX** &rarr; **Levis** &rarr; **Nike**
  * Visual representation at bottom of lab.

:::tip
You can reference [**Unit 1 - Exercise 4**](/docs/Unit%201%20Exercise%204.md) for steps on how to create Dependencies.
:::

* **Build the schedule** so that it runs today and the rest of the week prior to class starting.
* **Check the status** of the Schedule and Jobs in the **Processes** screen to ensure all the jobs ran successfully.

:::tip
You can reference [**Unit 1 - Exercise 6**](/docs/Unit%201%20Exercise%206.md) for steps on how to build the Schedule.
:::


Upon completion, the jobs will run in this order:

![Run Order](../static/imgbasic/unit1lab1dependencyview.png)