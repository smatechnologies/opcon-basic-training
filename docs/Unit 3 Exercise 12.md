---
sidebar_label: 'Unit 3 Exercise 12'
---

## Exercise 12: Invalid Event

### Objective

To use a text file to pass an External Event to OpCon using the MSGIN directory.

### Summary

In notepad, add a **$PROPERTY:SET** event then save that file in the **MSGIN Directory** of the **MSLSAM**. Once that is done, you will review the **SAM Log** or the **Critical Log** to see that the event was processed but the property wasn't updated.

:::info
This exercise is designed so that the property will not be updated.
:::

### Instructions

1.	Click the **Windows Start button**, type **Notepad** and press **Enter**.
2.	With **Notepad** opened, type: ```$PROPERTY:SET,EVENTERROR,0,ocadm,opconxps```
3.	**Save** the file with **any name** to the **MSGIN Directory**, ```C:\ProgramData\OpConxps\MSLSAM\MSGIN```.
4.	Open a **File Explorer Window**.
5.  Navigate to the **SAM Directory**, ```C:\ProgramData\OpConxps\SAM\Log```.
6.  Open the **SAM.log** or **Critical.log** file and scroll to the bottom of the log.
7.  You should see a messages similar to the following:
```
Receiving Event $PROPERTY:SET,EVENTERROR,0,ocadm,(HIDDEN).  Received from LSAM
Processing Event $PROPERTY:SET,EVENTERROR,0,ocadm,(HIDDEN).  Received from LSAM
Unable to modify property (does not exist): EVENTERROR
Failed to process event $PROPERTY:SET.  Received from LSAM
```
8.	Close all log files and the File Explorer windows.


## Exercise Mananger

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 12](../static/videobasic/U3E12.mp4)

:::


1.	Open **Notepad** (click the **Windows Start button**, type **Notepad** and press **Enter**).
2.	With **Notepad** opened, type: ```$PROPERTY:SET,EVENTERROR,0,ocadm,opconxps```
3.	**Save** the file (**any name**) under: ```C:\ProgramData\OpConxps\MSLSAM\MSGIN```
4.	Go back to Enterprise Manager and open the **SAM** log.
5.	Check the messages (Property does not exist).
6.	Open the **Critical** log.
7.	Check the messages (Property does not exist).
8.	Close all log tabs and **Notepad**.

</details>