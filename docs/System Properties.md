---
sidebar_label: 'System Properties'
---

### System and Instance Properties

* **Global Properties** (OpCon Instance Properties) are variables associated with the entire environment  
* **System Properties** are default OpCon variables. 
* **Job Instance Properties** are variables associated with a specific Job
* **Schedule Instance Properties** are variables associated with a specific Schedule
* **Machine Instance Properties** are variables associated with a specific Machine 

:::info

**Properties** are variables stored in the database that can be used throughout OpCon and ae defined with name and value

:::

### System Properties vs Managed System Properties 

![](../static/imgbasic/sm-global-properties-list.png)

* **System Properties** begin with a dollar symbol (```$```) and have status values
  * There are over 30 System Properties
  * System Properties **DO NOT** appear in the Global Properties section.
  * Examples: ```$JOB NAME```, ```$SCHEDULE DATE```, or ```$MACHINE NAME```
* **Managed System Properties** begin with a dollar symbol (```$```) and the format can be modified 
  * There are 7 and all have to do with dates and/or times
  * Managed System Properties **DO** appear in the Global Properties section.
  * Example: ```$DATE```, ```$SCHEDULE DATE```, or ```$TIME```
  * ```$DATE``` is the current date of the OpCon server
  * ```$SCHEDULE DATE``` is the date a Schedule was built
    * If a Schedule is built for January 1st at 23:50, but runs until January 2nd at 3:30, all ```$SCHEDULE DATE``` properties will be resolved to January 1st date

### Properties Offsets

* Managed System Properties can be offset to allow for the calculation of various dates.
  * Example: ```[[$DATEmmddyy(+1d)]]``` or ```[[$DATEmmddyy(-1d)]]```
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

:::tip Example

![](../static/imgbasic/MSP_CommandLine.png)

* ```[[PATH_Scripts]]``` and ```[[PATH_Accounting]]``` are Global Properties
* ```[[$SCHEDULE DATEyyyymmd]]``` is our System Properties with a ```(-1wd)``` offset
* ```[[$JOB NAME]]``` is a System Property

:::


## Enterprise Manager 

<details>

#### Global Properties List

![](../static/imgbasic/334.png)

#### System Properties in Command Line

![](../static/imgbasic/335.png)

#### System Properties in File Transfer

![](../static/imgbasic/336.png)

</details>