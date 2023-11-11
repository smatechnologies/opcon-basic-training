---
sidebar_label: 'Unit 3 Lab B'
---

## LAB B

### Objective

To use the skills learned so far to alert you when jobs are **Late to Start**, **Late to Finish**, and/or have **Exceeded Max Runtime**.

### Summary

Congo Online Retail needs to make sure all shipping orders are processed and ready to go before 5 am (Monday - Sunday) utilizing a Schedule called **Conge Retail Order Processing**.   

**_If any of these processes have not completed by 5 am or if any are taking longer than 5 minutes, you need to be notified._** 

### Lab Instructions

#### Create the Schedule

* Create a schedule with the following settings:
  * Name the Schedule **Congo Retail Order Processing**
  * Monday - Sunday
  * **Auto Build** ```7``` days in advance for ```1``` day
  * **Auto Delete** for ```7``` days ago

:::tip
* You can reference [Unit 1 - Exercise 1](/docs/Unit%201%20Exercise%201.md) for steps on how to create a Schedule.
:::

#### Create the Jobs

* Create the jobs with the following settings:
  * **Legos**
    * Command Line: ```"C:\scripts\ShipmentProcessorToys.EXE" –t90```
    * Add documentation
    * Add a frequency that will allow the job to run everyday.
    * Start Offset: ```03:00```
    * Late to Start Offset: ```01:55 (4:55 am)```
    * Max Run Time: ```5```
    * Tag the Job under ```Toys```
  * **Nerf**
    * Command Line: ```"C:\scripts\ShipmentProcessorToys.EXE" –t120```
    * Add documentation
    * Add a frequency that will allow the job to run everyday.
    * Start Offset: ```04:00```
    * Late to Finish Offset: ```01:00 (5:00 am)```
    * Max Run Time: ```5```
    * Tag the Job under ```Toys```
  * **Smartphones**
    * Command Line: ```"C:\scripts\ShipmentProcessorElectronics.EXE" –t15```
    * Add documentation 
    * Add a frequency that will allow the job to run everyday.
    * Start Offset: ``04:30``
    * Late to Finish Offset: ```00:30 (5:00 am)```
    * Max Run Time: ```5```
    * Tag the Job under ```Electronics```
  * **XBOX**
    * Command Line: ```"C:\scripts\ShipmentProcessorElectronics.EXE" –t350```
    * Add documentation 
    * Add a frequency that will allow the job to run everyday.
    * Start Offset: ```02:30```
    * Late to Finish Offset: ```02:30 (5:00 am)```
    * Max Run Time: ```5```
    * Tag the Job under ```Electronics```
  * **Levis**
    * Command Line: ```"C:\scripts\ShipmentProcessorClothing.EXE" –t45```
    * Add documentation 
    * Add a frequency that will allow the job to run everyday.
    * Start Offset: ```03:10```
    * Late to Start Offset: ```01:45 (4:55 am)```
    * Max Run Time: ```5```
    * Tag the Job under ```Clothing```
  * **Nike**
    * Command Line: ```"C:\scripts\ShipmentProcessorClothing.EXE" –t75```
    * Add documentation 
    * Add a frequency that will allow the job to run everyday.
    * Start Offset: ```03:45```
    * Late to Finish Offset: ```01:15 (5:00 am)```
    * Max Run Time: ```5```
    * Tag the Job under ```Clothing```

:::tip
* You can reference [Unit 1 - Exercise 3](/docs/Unit%201%20Exercise%203.md) for steps on how to create a Windows Job.
* You can reference [Unit 1 - Exercise 5](/docs/Unit%201%20Exercise%205.md) for steps on how to add Tags.
* You can reference [Unit 2 - Exercise 11](/docs/Unit%202%20Exercise%2011.md) and Other Frequency Details for steps on how to set up Start Offsets, Late to Start, and Late to Finish settings.
:::

#### Create the Notifications

* Create the notifications to alert you to the following:
  * Late to Start
  * Late to Finish
  * Exceeded Max Runtime

:::info
It is best practice to setup email notifications using **System Properties** to pass the name of the Schedule and the name of the Job.
* Schedule Name: [[$SCHEDULED NAME]]
* Job Name: [[$JOB NAME]]
:::

:::tip
* You can reference [Unit 3 - Exercise 8](/docs/Unit%203%20Exercise%208.md) for steps on how to create Notifications.
:::

#### Create the Schedule

* Build the Schedule
    * Build the Schedule Released for today and check the results using Solution Manager
    * Open Thunderbird and check your inbox for the notificaitons. You should receive 

:::info
You should receive 7 emails: 2 Late to Start, 4 Late to Finish, and 1 Exceeded Max Runtime.
:::

:::tip
* You can reference [Unit 1 - Exercise 6](/docs/Unit%201%20Exercise%206.md) for steps on how to build a schedule.
:::


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Lab B](../static/videobasic/U3LabB.mp4)

:::

* **Schedule Information**

    * Name the Schedule **Congo Retail Order Processing**
    * Monday through Sunday
    * **Auto Build** ```7``` days in advance for ```1``` day
    * **Auto Delete** for ```7``` days ago

* **Job Information**

*  Legos
    * Command Line: 
     ```"C:\scripts\ShipmentProcessorToys.EXE" –t90```
    * Start Offset: ```03:00```
    * Absolute Late to Start Offset: ```01:55 (4:55 am)```
    * Max Run Time: ```5```
    * Add documentation
    * Tag the Job under ```Toys```
* Nerf
    * Command Line: ```"C:\scripts\ShipmentProcessorToys.EXE" –t120```
    * Start Offset: ```04:00```
    * Absolute Late to Finish Offset: ```01:00 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Toys```
* Smartphones
    * Command Line: ```"C:\scripts\ShipmentProcessorElectronics.EXE" –t15```
    * Start Offset: ``04:30``
    * Absolute Late to Finish Offset: ```00:30 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Electronics```
* XBOX
    * Command Line: ```"C:\scripts\ShipmentProcessorElectronics.EXE" –t350```
    * Start Offset: ```02:30```
    * Absolute Late to Finish Offset: ```02:30 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Electronics```
* Levis
    * Command Line: ```"C:\scripts\ShipmentProcessorClothing.EXE" –t45```
    * Start Offset: ```03:10```
    * Absolute Late to Start Offset: ```01:45 (4:55 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Clothing```
* Nike
    * Command Line: ```"C:\scripts\ShipmentProcessorClothing.EXE" –t75```
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