---
sidebar_label: 'System Properties'
---

### System and Instance Properties

:::info
**Properties** are variables stored in the database that can be used throughout OpCon
* Defined with name and value
:::
* **Global Properties** (OpCon Instance Properties) are variables associated with the entire environment  
* **Job Instance Properties** are variables associated with a specific Job
* **Schedule Instance Properties** are variables associated with a specific Schedule
* **Machine Instance Properties** are variables associated with a specific Machine 

### System Properties vs User Defined Properties 

* All Global Properties that begin with a dollar symbol (```$```) are known as System Properties
* System Properties give variable values dependent on the System 
* Many of these system values can be format modified 
    * Example: ```$DATE``` can be set to ```mmddyy```, ```yyyymmdd```, ```mm```, etc. 
* ```$DATE``` is the current date of the OpCon server
    * ```$SCHEDULE DATE``` is the date a Schedule was built
        * If a Schedule is built for January 1st at 23:50, but runs until January 2nd at 3:30, all ```$SCHEDULE DATE``` properties will be resolved to January 1st date

### System Properties Offsets

* ```$DATE``` or ```$SCHEDULE DATE``` System Properties can be offset
* Example:
    * ```[[$DATEmmddyy(+1d)]]``` or ```[[$DATEmmddyy(-1d)]]``` for day offsets

* **Offset Day**
    * ```[[$DATEmmddyy(+1d)]]``` or ```[[$DATEmmddyy(-1d)]]``` for day offsets
* **Offset Working Day**
    * ```[[$SCHEDULE DATEmmddyy(+1wd)]]``` or ```[[$SCHEDULE DATEmmddyy(-1wd)]]``` for * Working Day offsets
        * ```$SCHEDULE DATE``` required for this Working Day offset
* **Offset Month**
    * ```[[$DATEmmddyy(+1m)]]``` or ```[[$DATEmmddyy(-1m)]]``` for day offsets
        * No offset specific for year – Use ```(+12m)``` or ```(-12m)``` to offset years
* **End of Month**
    * ```[[$DATEmmddyy(+1eom)]]``` Value finds the last day of current month
        * ```+1``` is current month 
        * ```+2``` is next month
    * ```[[$DATEmmddyy(-1eom)]]``` Value finds the last day of previous month

### Global Properties List

||
|---|
|![](../static/imgbasic/sm-global-properties-list.png)|

### System Properties in Command Line

|                                                                 |
|-----------------------------------------------------------------|
|![](../static/imgbasic/sm-system-properties-command-line.png)|

## Enterprise Manager 

<details>

#### Global Properties List

||
|---|
|![](../static/imgbasic/334.png)|

#### System Properties in Command Line

||
|---|
|![](../static/imgbasic/335.png)|

#### System Properties in File Transfer

||
|---|
|![](../static/imgbasic/336.png)|


</details>