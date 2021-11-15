---
sidebar_label: 'Embedded Scripts'
---

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScripts.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* OpCon has ability to push Scripts from OpCon database to Windows and UNIX Machines (LSAMs) to run
* Database has centralized Repository that is replicated with database
* Version Control

* Four places used in OpCon to setup and use Embedded Scripts:
	* Script Types
	* Script Runners
	* Script Repository
	* Job Master

<a href="imgbasic/416.png" target="_blank"><img src="imgbasic/416.png" width="250"></img></a>

### Embedded Scripts - Script Types

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScriptsTypesAndRunners.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Configure type of Scripts which can be stored by OpCon

* There are 5 **predefined** Script types, but more can be added
	* Command Shell (.cmd)
	* Perl (.ps)
	* PowerShell (.ps1)
	* Python (.py)
	* VBScript (.vbs)

<a href="imgbasic/417.png" target="_blank"><img src="imgbasic/417.png" width="500"></img></a>

### Embedded Scripts - Script Runners

* Script Runners define Command Line created to run Script

Example:

* Powershell includes ```“–ExecutionPolicy Bypass and –File”``` before command 

* Allows more than one Script runner per Script Type

<a href="imgbasic/418.png" target="_blank"><img src="imgbasic/418.png" width="500"></img></a>

### Embedded Scripts - Script Repository

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScriptsScriptRepository.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Where Scripts are created and stored
* Previous versions are accessible

<a href="imgbasic/419.png" target="_blank"><img src="imgbasic/419.png" width="500"></img></a>

* **Name** – Defines Name of Script (No spaces allowed in Name)
* **Description** – Documents purpose of Script
* **Open File** - Allows loading of Script from network
* **Blank Text Field** – Create Script 
* **Type** – Specifies Script Type 
* **Initial Comments** – Documents differences between Script versions

<a href="imgbasic/420.png" target="_blank"><img src="imgbasic/420.png" width="300"></img></a>

### Assign a Role to a New Script

* A Role must be assigned when a Script is created or imported to the Script Repository

<a href="imgbasic/421.png" target="_blank"><img src="imgbasic/421.png" width="300"></img></a>

### Embedded Scripts - Job Master

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScriptsJobMaster.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Job Action** – Change from Run Program to Embedded Scripts
* **Script** – Specifies which script to call
* **Script Type** – Specifies Script Type for Selected Script
* **Runner** – Script Runner for Selected Script
* **Run Command Template** – Contents of Script Runner
* **Version** – Specifies Script Version selected
* **Arguments** – Enter the parameter(s) passed to Script (if needed)
* **Working Dir.** – Working Directory (starting directory) for Script

<a href="imgbasic/422.png" target="_blank"><img src="imgbasic/422.png" width="500"></img></a>

###### (Click Images to Enlarge)