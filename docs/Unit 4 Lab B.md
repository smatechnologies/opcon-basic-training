---
sidebar_label: 'Unit 4 Lab B'
---

## LAB B

### Objective

To use File Arrival to detect the arrival of a multiple files and add a container jobs to process each one.

### Summary

Congo Online Retail Inc. has a file for every office that made a staffing change during the month. There is no way to predict the number of files that will be present every day of the month but will always show up between **00:00 (midnight)** and **7:00 PM**. We will not know the name of the files, but we know the directory where they will be placed and the extension, **.txt**. Since these files come in randomly and multiple files can show up at once, only one file can be processed at a given time.

The steps taken to process each file are: 
* **Decrypt** 
* **Import**
* **Post** 
* **Archive**

### Lab Instructions

#### Create Resources and Properties

* Create a **Resource** called **HR** and give it a **Max Value** of ```1```.
* Create a **Global Property** for the **Incoming** folder with a value of ```C:\Human Resources\Incoming Files```.
* Create a **Global Property** for the **Archive** folder with a value of ```C:\Human Resources\Archive```.
* Create a new **Managed System Property** for **$SCHEDULE DATE** with a value of ```yyyymm```

#### Create the Sub-Schedule and Sub-Schedule Jobs

* Create a **SubSchedule** called **SS-HR Import Processing**, that runs **Monday-Sunday** and on Holidays.
* Create **4 Windows Jobs** in the **SS-HR Import Processing** sub-schedule called:  
  * HR-Decrypt
    * Runs ```HR-Decrypt.cmd``` which lives in **C:\scripts**
  * HR-Import  
    * Runs ```HR-Import.cmd``` which lives in **C:\scripts**
  * HR-Post  
    * Runs ```HR-Post.cmd``` which lives in **C:\scripts**
  * HR-Archive  
    * Use the ```Command: File Move``` Job Sub-Type
    * Use a combination of the **Incoming Global Property** and the ```[[SI.FILENAME]]``` for the **SOURCE**.  
      * _Example: ```"[[HR-Incoming]]\[[SI.FILENAME]]"```_
    * Use a combination of the **Archive Global Property**, the ```[[SI.FILENAME]]``` and the **current schedule date** with a ```(-1m)``` offset for the **DESTINATION**.   
      * _Example: ```“[[HR-Archive]]\[[$SCHEDULE DATEyyyymm(-1m)]]-[[SI.FILENAME]]”```_

:::note
The **Schedule Instance Property** ```[[SI.FILENAME]]``` will be passed by the **File Arrival JOB:ADD Event**
:::

* All the jobs need to run as **SMATRAINING\SMAUSER**
* All the jobs need to run on **SMATRAINING**
* All the jobs must run every day
* Add **Documentation** to all Jobs
* The Jobs must run in this order, Decrypt &rarr; Import &rarr; Post &rarr; Archive
* Use the Property that points to the ```C:\Scripts``` path for the **Command Lines**

#### Create the Parent Schedule and Parent Schedule Jobs

* Create a **Schedule** called **HR Import**, that runs **Monday-Sunday**
* Add **Documentation** for the Schedule 
* **Auto-build** the Schedule ```7``` days in advance for ```1``` day
* **Auto-delete** the Schedule for ```7``` days ago
* Create a **Container Job** in **HR Import** called **HR Import Processing**
* The **Container Job** should run the sub-schedule, **SS-HR Import Processing**
* Add **Documentation**
* Give the container an **OnRequest** Frequency 
* Give the container a **Resource Dependency** of **1**
* Add a **$JOB:RESTART** event to the container job when it **Finishes OK**, so the **File Arrival** Job will restart.
  * These are the parameters for the ```$JOB:RESTART``` event:  
    * [[$SCHEDULE DATE]]
    * [[$SCHEDULE NAME]]
    * FA Incoming
* Create a **File Arrival** job called **FA Incoming**
  * Monitor the **C:\Human Resources\Incoming Files** for any files that have a **.txt** extension.
    * _Example: ```"[[HR-Incoming]]\*.txt"``` or ```"C:\Human Resources\Incoming Files\*.txt"```_
  * **Start Time** for file creation should be ```00:00``` (midnight) 
  * **End Time** for the file creation should be ```07:00 PM```
* Set **Failure Criteria** so that 0 or 1 will be considered Finish OK
* Add **Documentation**
* Give the job an **Mon-Sun** Frequency 
* Add a **$JOB:ADD** event to the File Arrival job so that the container is added each time a file is seen. 
  * These are the parameters for the ```$JOB:ADD``` Event:
    * [[$SCHEDULE DATE]]
    * [[$SCHEDULE NAME]] 
    * HR Import Processing
    * OnRequest
    * FILENAME=[[JI.$ARRIVED SHORT FILE NAME]]
* Add an **Embedded Script** job called **Create HR Files** to the **HR Import Schedule**
* Configure the **Windows Job** to use Job Action **Embedded Script** and select the **Lab_4** script
  * Do not forget to select ```PowerShell``` as the **Runner**
* The script will create the files under the **C:\Human Resources\Incoming Files** folder
* The Job must run on the **SMATRAINING** machine under the **SMATRAINING\SMAUSER** account
* Give it the Frequency **Monday-Sunday**
* Add **Documentation**

#### Build the Schedule

* Build the schedule for today's date
* Monitor the schedule to ensure that each of the 5 files is processed.
* You should process a file for each of the following cities but not necessarily in this order:
  * Chicago
  * Houston
  * Los Angeles
  * New York
  * Philadelphia

<!--
## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Lab B](../static/videobasic/U4LabB.mp4)

:::


**Lab Instructions**:  

* Create a **Resource** called **HR** and give it a **Max Value** of **1**  
* Create a **Global Property** for the **Incoming** folder (for example: **HR-Incoming**)  
* Create a **Global Property** for the **Archive** folder (for example: **HR-Archive**)  
* Create a **SubSchedule** named **HR Import Processing** (this must be a **Monday-Sunday** Schedule Calendar) and add **Documentation** to the Schedule  

* Create **4 Windows Jobs** in the **SS-HR Import Processing SubSchedule** named (in the order listed):  
 * HR-Decrypt  
 ```HR-Decrypt.cmd```
 * HR-Import  
 ```HR-Import.cmd```
 * HR-Post  
 ```HR-Post.cmd```
 * HR-Archive  
  * Use the ```Command: File Move``` Job Sub-Type
  * Use a combination of the **Incoming Global Property** and the ```[[SI.FILENAME]]``` for the **SOURCE**.  
  Example:   
  ```“[[HR-Incoming]]\[[SI.FILENAME]]”```
 * Use a combination of the **Archive Global Property**, the ```[[SI.FILENAME]]``` and the **current date** with a ```(-1m)``` offset for the **DESTINATION**.   
    :::note Example   
    ```“[[HR-Archive]]\[[$DATEyyyymm(-1m)]]-[[SI.FILENAME]]”``` 
    :::

:::note
The **Schedule Instance Property** ```[[SI.FILENAME]]``` will be passed by the **File Arrival JOB:ADD Event**
:::

* These Jobs need to run as the ```SMATRAINING\SMAUSER``` User ID
* These Jobs need to run on the ```SMATRAINING``` machine
* These Jobs must run every day
* Do not forget to add **Documentation** to all Jobs
* The Jobs must run in this order:
 * Decrypt
 * Import
 * Post
 * Archive
* Use the Property that points to the ```C:\Scripts``` path for the **Command Lines**

* Create a **main Schedule** named **HR Import** (this must be a **Monday-Sunday** Schedule Calendar)
* **Auto-build** the Schedule ```7``` days in advance for ```1``` day
* **Auto-delete** the Schedule for ```7``` days ago
* Add **Documentation** for the Schedule 
* Create a **Container Job** in the **HR Import Schedule** named **HR Import Processing**
* The **Container Job** should run the **SS-HR Import Processing SubSchedule**
* The container Job should **Allow Multi-Instance** 
* Add **Documentation**
* Give an **OnRequest** Frequency 
* Give the Job a **Resource Dependency** of ```1```
* Once the **Container Job** “Finishes OK” have an **Event** to do a ```$JOB:RESTART```, for the **File Arrival** Job
 * These are the parameters for the ```$JOB:RESTART``` event:  
```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival```

* Create a File Arrival Job named **File Arrival**
* *Monitor for the following:
```“[[HR-Incoming]]\*.txt”```  
Or   
```“C:\Human Resources\Incoming Files\*.txt”```   
* **Start Time** for file creation should be ```00:00``` (midnight) 
* **End Time** for the file creation should be ```7:00PM```
* Add **Failure Criteria**
 * Set **Comparison Operator** “Equal To” Value “0” Result “Finish OK”   
    And/Or  
 * “OR” Comparison Operator “**Equal To**” Value ```1``` Result “**Finish OK**”   
 * Add **Documentation**
 * Use the ```$JOB:ADD``` **Event** for the txt files when the **File Arrival** finds a **.txt** file
  * The **Event** will add the **Container Job** to the **HR Import Schedule** in the daily
  * **Add** an **Event** to the **File Arrival Job** to pass a **Job Instance Property** named ```[[JI.$ARRIVED SHORT FILE NAME]]``` to capture the file name
* These are the parameters for the ```$JOB:ADD``` Event:
```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],HR Import Processing,OnRequest,FILENAME=[[JI.$ARRIVED SHORT FILE NAME]]
```

* To be able to test the configuration, add an **Embedded Script Job** named **Create HR Files** to the **HR Import Schedule**
* The script will create the files under the: 
```C:\Human Resources\Incoming Files``` folder
* Configure the **Windows Job** to use Job Action **Embedded Script** and select the ```Lab_4 script``` 
 * Do not forget to select ```PowerShell``` as the **Runner**
* The Job must run on the ```SMATRAINING``` machine under the ```SMATRAINING\SMAUSER``` account
* Give it the Frequency **Monday-Sunday**
* Add **Documentation**

* Before building the Schedule for today, use the **Workflow Designer** to check your configuration. 

#### SS-HR Import Processing (The SubSchedule)

![](../static/imgbasic/445.png)

#### HR Import (The Main Schedule)

![](../static/imgbasic/446.png)

</details>
-->