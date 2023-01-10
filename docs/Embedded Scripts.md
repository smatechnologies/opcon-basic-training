---
sidebar_label: 'Embedded Scripts'
---

* OpCon has ability to push Scripts from OpCon database to Windows and UNIX Machines (LSAMs) to run
* Database has centralized Repository that is replicated with database
* Version Control

* Four places used in OpCon to setup and use Embedded Scripts:
	* Script Types
	* Script Runners
	* Script Repository
	* Job Master

### Embedded Scripts - Script Types

* Configure type of Scripts which can be stored by OpCon

* There are 5 **predefined** Script types, but more can be added
	* Command Shell (.cmd)
	* Perl (.ps)
	* PowerShell (.ps1)
	* Python (.py)
	* VBScript (.vbs)

### Embedded Scripts - Script Runners

* Script Runners define Command Line created to run Script

Example:

* Powershell includes ```“–ExecutionPolicy Bypass and –File”``` before command 

* Allows more than one Script runner per Script Type

### Script Repository

* Where Scripts are created and stored
* Previous versions are accessible

* **Name** – Defines Name of Script (No spaces allowed in Name)
* **Description** – Documents purpose of Script
* **Open File** - Allows loading of Script from network
* **Blank Text Field** – Create Script 
* **Type** – Specifies Script Type 
* **Initial Comments** – Documents differences between Script versions

### Assign a Role to a New Script

* A Role must be assigned when a Script is created or imported to the Script Repository

### Embedded Scripts - Job Master

* **Job Action** – Change from Run Program to Embedded Scripts
* **Script** – Specifies which script to call
* **Script Type** – Specifies Script Type for Selected Script
* **Runner** – Script Runner for Selected Script
* **Run Command Template** – Contents of Script Runner
* **Version** – Specifies Script Version selected
* **Arguments** – Enter the parameter(s) passed to Script (if needed)
* **Working Dir.** – Working Directory (starting directory) for Script

## Solution Manager

<details>

* In Solution Manager, **Scripts** is found in **Library > Administration > Scripts**

### Scripts Menu

||
|-----------------------------------|
|![](../static/imgbasic/sm-scripts.png)|

### Script Types

||
|-----------------------------------|
|![](../static/imgbasic/sm-script-types.png)|

### Script Runners

||
|-----------------------------------|
|![](../static/imgbasic/sm-script-runners.png)|

### Copy Script to Edit Version

||
|-------------------------------|
|![](../static/imgbasic/sm-copy-script-edit.png)|

||
|-------------------------------|
|![](../static/imgbasic/sm-edit-script-version.png)|

### Add Script

||
|-------------------------------|
|![](../static/imgbasic/sm-add-script.png)|

### Assign a Role to a New Script

||
|-------------------------------|
|![](../static/imgbasic/sm-assign-role-script.png)|

### Deploy Script

||
|-------------------------------|
|![](../static/imgbasic/sm-deploy-script-button.png)|

||
|-------------------------------|
|![](../static/imgbasic/sm-script-deploy.png)|

### Script Cross References

||
|-------------------------------|
|![](../static/imgbasic/sm-script-cross-references.png)|

:::warning

A Script with Cross References cannot be deleted

:::

### Script in Job Properties

||
|-------------------------------|
|![](../static/imgbasic/sm-script-in-job-properties.png)|

</details>

## Enterprise Manager

* In Enterprise Manager, **Scripts** is found in **Scripts**

<details>

### Scripts Menu

||
|-----------------------------------|
|![](../static/imgbasic/416.png)|

### Script Types

||
|-----------------------------------|
|![](../static/imgbasic/417.png)  |

### Script Runners

||
|-------------------------------------|
|![](../static/imgbasic/418.png)|

### Edit Script/Version Scripts

||
|-------------------------------|
|![](../static/imgbasic/419.png)|

### Add Script

||
|--------------------------------|
|![](../static/imgbasic/420.png)|

### Assign a Role to a New Script

||
|---------------------------------------------------|
|![](../static/imgbasic/421.png)|

### Scripts in Job Properties

||
|------------------------------------------------|
|![](../static/imgbasic/422.png)|

</details>