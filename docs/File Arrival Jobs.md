---
sidebar_label: 'File Arrival Jobs'
---

### Windows File Arrival Jobs

* Windows standard wildcards allowed in file name
* Use Properties in Path if needed
* Windows File Arrival Jobs can utilize Advanced Failure Criteria

![](../static/imgbasic/File_Arrival_Windows_SM.png)

### UNIX File Arrival Jobs

* UNIX standard wildcards allowed in file name
* Use Properties in the Path if needed

![](../static/imgbasic/File_Arrival_UNIX_SM.png)

* File Arrival Job finishes OK
  * Fails if file does not arrive in Time Stamp Window
* LSAMs (Windows and UNIX) set some Properties for that Job
  * Work as Job Instance Properties for File Arrival Job:

### File Arrival Properties

:::note

The file being searched in the table below for by the File Arrival job resides in **"D:\NewFiles\File123456789.txt"**

:::

| Property Name | Description | Example |
| --- | --- | --- |
| JI.$ARRIVED BASE FILE NAME | Resolves to the file found by the File Arrival job. | File123456789 |
| JI.$ARRIVED FILE EXTENSION | Resolves to the extension of the file found by the File Arrival job. | .txt |
| JI.$ARRIVED FILE NAME | Resolves to the directory path and file name of the file found by the File Arrival job. | D:\NewFiles\File123456789.txt |
| JI.$ARRIVED FILE PATH | Resolves to the directory path of the file found by the File Arrival job. | D:\NewFiles |
| JI.$ARRIVED SHORT FILE NAME | Resolves to the file name and extension of the  found by the File Arrival job. | File123456789.txt |


:::tip Example
* Receive 5 files and all should be processed the same way
* Order of file processing does not matter
* Set up:
	* A Main Schedule
		* With File Watcher, using wild card(s) to capture file name
		* A Job must also be added that will create files in Main Schedule
	* When a File Arrival job finds a match (after the Create File Job runs), the Event is triggered
		* The Event adds a Multi-Instance Container Job that calls the processing SubSchedule
		* Once the Container Job finishes, it triggers the  Event to restart the File Watcher  
			* This will loop through all 5 files
:::



## Enterprise Manager

<details>

 Windows standard wildcards allowed in file name
* Use Properties in Path if needed

![](../static/imgbasic/441.png)

* Windows File Arrival Jobs can utilize Advanced Failure Criteria

![](../static/imgbasic/442.png)

#### UNIX File Arrival Jobs

* UNIX standard wildcards allowed in file name
* Use Properties in the Path if needed

![](../static/imgbasic/443.png)

* File Arrival Job finishes OK
	* Fails if file does not arrive in Time Stamp Window
* LSAMs (Windows and UNIX) set some Properties for that Job
	* Work as Job Instance Properties for File Arrival Job:

![](../static/imgbasic/444.png)

###### Example:

* Receive 5 files and all should be processed the same way
* Order of file processing does not matter
* Set up:
	* A Main Schedule
		* With File Watcher, using wild card(s) to capture file name
		* A Job must also be added that will create files in Main Schedule
	* When a File Arrival job finds a match (after the Create File Job runs), the Event is triggered
		* The Event adds a Multi-Instance Container Job that calls the processing SubSchedule
		* Once the Container Job finishes, it triggers the  Event to restart the File Watcher  
			* This will loop through all 5 files

</details>