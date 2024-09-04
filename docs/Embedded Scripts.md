---
sidebar_label: 'Embedded Scripts'
---

![](../static/imgbasic/sm-scripts.png)

* OpCon has ability to push Scripts from the OpCon database to Windows and UNIX environments
* The OpCon Database acts as a centralized Repository that is replicated with database
* The Repository allows for Version Control

#### Four part make up Embedded Scripts

* Script Types
* Script Runners
* Script Repository
* Job Master

### Script Types

![](../static/imgbasic/sm-script-types.png)

* Configure type of Scripts which can be stored by OpCon
* There are 6 **predefined** Script types, but more can be added
  * Command Shell (.cmd)
  * Perl (.ps)
  * PowerShell (.ps1)
  * Python (.py)
  * VBScript (.vbs)
  * SQL (.sql)

### Script Runners

![](../static/imgbasic/sm-script-runners.png)

* Script Runners define Command Line created to run Script
* Allows more than one Script runner per Script Type

:::tip Example

Powershell would include ```“–ExecutionPolicy Bypass and –File”``` before command, so the **Script Runner** would look like: ```powershell.exe -ExecutionPolicy Bypass -File $FILE $ARGUMENTS```.

:::

### Script Repository

![](../static/imgbasic/sm-add-script.png)

* Where Scripts are created and stored
* Previous versions are accessible

#### Required Fields

* **Name** – Defines Name of Script (No spaces allowed in Name)
* **Description** – Documents purpose of Script
* **Open File** - Allows loading of Script from network
* **Blank Text Field** – Create Script 
* **Type** – Specifies Script Type 
* **Initial Comments** – Documents differences between Script versions

#### Assign a Role to a New Script

* A Role must be assigned when a Script is created or imported to the Script Repository

![](../static/imgbasic/sm-assign-role-script.png)

#### Edit a Script

* In the Repository, a **Copy** of the script must be made before you can **Edit** it.

![](../static/imgbasic/sm-copy-script-edit.png)

![](../static/imgbasic/sm-edit-script-version.png)

#### Deploy Script

* Multiple jobs can run differnt versions of the same Embedded script.
* To have all jobs run the same version, one needs to **Deploy** that version to the jobs.

![](../static/imgbasic/sm-deploy-script-button.png)

![](../static/imgbasic/sm-script-deploy.png)

#### Script Cross References

* Cross Reference in the Repository allows one to see all the jobs that are running the same script.

:::warning

A Script with Cross References cannot be deleted

:::

### Embedded Script Job

![](../static/imgbasic/sm-script-in-job-properties.png)

* **Job Action** – Change from Run Program to Embedded Scripts
* **Script** – Specifies which script to call
* **Script Type** – Specifies Script Type for Selected Script
* **Runner** – Script Runner for Selected Script
* **Run Command Template** – Contents of Script Runner
* **Version** – Specifies Script Version selected
* **Arguments** – Enter the parameter(s) passed to Script (if needed)
* **Working Dir.** – Working Directory (starting directory) for Script



## Enterprise Manager

* In Enterprise Manager, **Scripts** is found in **Scripts**

<details>

### Scripts Menu

![](../static/imgbasic/416.png)

### Script Types

![](../static/imgbasic/417.png)

### Script Runners

![](../static/imgbasic/418.png)

### Edit Script/Version Scripts

![](../static/imgbasic/419.png)

### Add Script

![](../static/imgbasic/420.png)

### Assign a Role to a New Script

![](../static/imgbasic/421.png)

### Scripts in Job Properties

![](../static/imgbasic/422.png)

</details>