---
sidebar_label: 'Unit 3 Lab B'
---

### LAB B

##### Objective:

Congo Online Retail needs to make sure all shipping orders are processed and ready to go before 5 am (Monday Through Sunday) utilizing a Schedule named **CONGO RETAIL ORDER PROCESSING**.   

**Jobs**:

*	Legos - Command Line: ```“C:\scripts\ShipmentProcessorToys.EXE” –t90```
*	Nerf - Command Line: ```“C:\scripts\ShipmentProcessorToys.EXE” –t120```
*	Smartphones - Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” –t15```
*	Xbox - Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” –t350```
*	Levis - Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” –t45```
*	Nike - Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” –t75```

**_If any of these processes have not completed by 5 am or if any are taking longer than 5 minutes, you need to be notified._** 

**Notifications**:

* Late to Start
* Late to Finish
* Exceeded Max Runtime

Build the Schedule Released for Today. View results in Matrix View or Solution Manager. 

Open **Thunderbird** to check for Notifications.

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

:::tip [Walkthrough Video - Unit 3 Lab B](../static/videobasic/U3LabB.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

**Lab Instructions**:

* **Schedule Information**

    * Name the Schedule **Congo Retail Order Processing**
    * Monday through Sunday
    * **Auto Build** ```7``` days in advance for ```1``` day
    * **Auto Delete** for ```7``` days ago

* **Job Information**

*  Legos
    * Command Line: 
     ```“C:\scripts\ShipmentProcessorToys.EXE” –t90```
    * Start Offset: ```03:00```
    * Absolute Late to Start Offset: ```01:55 (4:55 am)```
    * Max Run Time: ```5```
    * Add documentation
    * Tag the Job under ```Toys```
* Nerf
    * Command Line: ```“C:\scripts\ShipmentProcessorToys.EXE” –t120```
    * Start Offset: ```04:00```
    * Absolute Late to Finish Offset: ```01:00 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Toys```
* Smartphones
    * Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” –t15```
    * Start Offset: ``04:30``
    * Absolute Late to Finish Offset: ```00:30 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Electronics```
* Xbox
    * Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” –t350```
    * Start Offset: ```02:30```
    * Absolute Late to Finish Offset: ```02:30 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Electronics```
* Levis
    * Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” –t45```
    * Start Offset: ```03:10```
    * Absolute Late to Start Offset: ```01:45 (4:55 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Clothing```
* Nike
    * Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” –t75```
    * Start Offset: ```03:45```
    * Absolute Late to Finish Offset: ```01:15 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Clothing```

* **Notifications**
    * Setup Email Notifications in Notification Manager using Global Properties to pass the Name of the Schedule and Job in the subject when the following conditions have been met:
    * Late to Start
    * Late to Finish
    * Exceeded Max Runtime

* **Build**
    * Build the Schedule Released for today and check the results using Solution Manager
    * Open Thunderbird and check your inbox

</details>