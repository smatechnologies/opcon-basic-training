---
sidebar_label: 'Unit 1 Lab'
---

## Unit 1 Lab

### Objective

Congo Online Retail Inc. needs to run a Schedule named **CONGO INVENTORY REPORTS** that will create separate Inventory reports for six products every working day. These reports must run **sequentially** and be **Tagged** within the following categories:

**Toys**

* Legos
* Nerf

**Electronics**

* Smartphones
* Xbox

**Clothing**

* Levis
* Nike

All six ```WINDOWS``` Jobs must run **Monday-Friday** and may not start until ```8:00 AM```.

The program that must be run in the Command Line for Job execution is:

```
"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t15 -e0
```
<!--
:::tip [Walkthrough Video - Unit 1 Exercise 1](../static/videobasic/U1LAB.mp4)

:::
-->

### Lab Instructions

* Create a Schedule named Congo Inventory Reports
* Saturday and Sundays are non-working days 
* Auto-build the Schedule ```7``` days in advance for ```1``` day
* Auto-delete the Schedule for ```7``` days ago
* Add Documentation for the Schedule 
* Create a **Windows Job** for each of the products in the introduction
* Name each Job the same as its product name
* This Job needs to run as the ```SMATRAINING\SMAUSER``` User ID
* This Job needs to run on the ```SMATRAINING``` machine
* Use the following command line:
```
“C:\Program Files\OpConxps\MSLSAM\genericp.exe” –t15 –e0
```
* The Jobs must run Monday-Friday
* Use the Existing Frequency: ```Mon-FriOnDate```
* Click the Forecast button to be sure your Frequency matches the requirement
* Add Documentation for each Job. Example: This Job is reporting inventory for the number of Legos in Stock
* The Jobs must run in the following order with each Job requiring the Job before it:
  * Legos
  * Nerf
  * Smartphones
  * Xbox
  * Levis
  * Nike
* The Jobs cannot start until **8:00 AM**
* **Tag** the Jobs according to the product type (Toys, Electronics or Clothing)
* Build the Schedule Released for today and tomorrow
* Check the status of the Schedule and Jobs in the Processes screen


Upon completion, the Jobs will run in this order:

||
|---|
|![](../static/imgbasic/unit1lab1dependencyview.png)|