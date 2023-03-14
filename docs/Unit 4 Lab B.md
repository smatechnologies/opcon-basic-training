---
sidebar_label: 'Unit 4 Lab B'
---

## LAB B

### Objective

Congo Online Retail Inc. has a file for every office that made a staffing change during the month. 

There is no way to predict the number of files that will be present every day of the month (the files can be created and processed on non-working days). 

The window for those files to be created is between ```00:00 (midnight)``` and ```7:00 PM```. 

We do not know the name of the files, but we know the folder where they will be placed and that all of them have the ```.txt``` extension.

Only one file can be processed at a given time (Create a Resource named ```HR``` with a **Max Value** of ```1```). 

The procedure includes running the following Jobs daily in a SubSchedule named **HR Import Processing**:

* **Decrypt** the file running the ```HR-Decrypt.cmd``` script
* **Import** the file into an HR Database running the ```HR-Import.cmd``` script
* **Post** the changes the file contains running the ```HR-Post.cmd``` script
* **Archive** the file running the Windows: ```File Move``` **Job Sub-Type**  

* All scripts are stored in the ```C:\scripts``` folder.
* All incoming files arrive in the ```C:\Human Resources\Incoming Files``` folder.
* All files must be archived under the ```C:\Human Resources\Archive``` folder.

Use **Global Properties** to call the Incoming and Archive folders.

Use the ```Command: File Move``` **Job Sub-Type** to Archive the files 

Incoming: ```"[[HR-Incoming]]\[[SI.FILENAME]]"```
Archive: ```"[[HR-Archive]]\[[$DATEyyyymm(-1m)]]-[[SI.FILENAME]]"```

Create a Main Schedule named **HR Import**. Create a Container Job named **HR Import Processing** (mark Allow Multi-Instance). The Job should run the **HR Import Processing** SubSchedule with an ```OnRequest``` Frequency. The Job should have a Resource Dependency on the ```HR``` Resource with a value of ```1```.

Add a ```$JOB:RESTART``` **Event** to the Container Job with the following parameters:

```
$JOB:RESTART event:[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival
```

Create a **File Arrival Job** to monitor for: ```[[HR-Incoming]]\*.txt"```

**Start Time** for file creation: ```00:00```
**End Time** for file creation: ```19:00```

Give the **File Arrival Job** Failure Criteria:

```Equal to 0``` and ```Equal to 1``` both ```Finish OK```

Give the **File Arrival Job** a ```$JOB:ADD``` **Event** with the following paramters:

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],HR Import Processing,OnRequest,FILENAME=[[JI.$ARRIVED SHORT FILE NAME]]
```

Finally, in the **HR Import** Schedule create an **Embedded Script** Job named **Create HR Files** running the ```Lab_4``` script with a ```PowerShell``` Runner.

Build the Schedule to verify success.

### Lab Instructions

* Create a **Resource** called **HR** and give it a **Max Value** of ```1```  
* Create a **Global Property** for the **Incoming** folder (for example: **HR-Incoming**)  
* Create a **Global Property** for the **Archive** folder (for example: **HR-Archive**)  
* Create a **SubSchedule** named **HR Import Processing** (this must be a **Monday-Sunday** Schedule Calendar) and add **Documentation** to the Schedule  

* Create **4 Windows Jobs** in the **HR Import Processing SubSchedule** named (in the order listed):  
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
* Create a **Container Job** in the **HR Import Schedul**e named **HR Import Processing**
* The **Container Job** should run the **HR Import Processing SubSchedule**
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
		* **Add** an **Event** to the **File Arrival Job** to pass a **Job Instance Property** named ```[[JI.FILENAME]]``` to capture the file name
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


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Lab B](../static/videobasic/U4LabB.mp4)

:::


**Lab Instructions**:  

* Create a **Resource** called **HR** and give it a **Max Value** of ```1```  
* Create a **Global Property** for the **Incoming** folder (for example: **HR-Incoming**)  
* Create a **Global Property** for the **Archive** folder (for example: **HR-Archive**)  
* Create a **SubSchedule** named **HR Import Processing** (this must be a **Monday-Sunday** Schedule Calendar) and add **Documentation** to the Schedule  

* Create **4 Windows Jobs** in the **HR Import Processing SubSchedule** named (in the order listed):  
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
* Create a **Container Job** in the **HR Import Schedul**e named **HR Import Processing**
* The **Container Job** should run the **HR Import Processing SubSchedule**
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
		* **Add** an **Event** to the **File Arrival Job** to pass a **Job Instance Property** named ```[[JI.FILENAME]]``` to capture the file name
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

#### HR Import Processing (The SubSchedule)

<a href="imgbasic/445.png" target="_blank"><img src="imgbasic/445.png" width="400"></img></a>

#### HR Import (The Main Schedule)

<a href="imgbasic/446.png" target="_blank"><img src="imgbasic/446.png" width="500"></img></a>

###### (Click Images to Enlarge)

</details>