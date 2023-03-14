---
sidebar_label: 'File Arrival Jobs'
---

### Windows File Arrival Jobs

* Windows standard wildcards allowed in file name
* Use Properties in Path if needed

||
|---|
|![](../static/imgbasic/441.png)|

* Windows File Arrival Jobs can utilize Advanced Failure Criteria

||
|---|
|![](../static/imgbasic/442.png)|

### UNIX File Arrival Jobs

* UNIX standard wildcards allowed in file name
* Use Properties in the Path if needed

||
|---|
|![](../static/imgbasic/443.png)|

* File Arrival Job finishes OK
	* Fails if file does not arrive in Time Stamp Window
* LSAMs (Windows and UNIX) set some Properties for that Job
	* Work as Job Instance Properties for File Arrival Job:

||
|---|
|![](../static/imgbasic/444.png)|

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
