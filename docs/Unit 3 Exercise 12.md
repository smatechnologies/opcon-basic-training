---
sidebar_label: 'Unit 3 Exercise 12'
---

## Exercise 12: Invalid Event

### Objective

In Notepad on Windows, create a new document.

Type the following:

```
$PROPERTY:SET,EVENTERROR,0,ocadm,opconxps
```

Save the file with any name under ```C:\ProgramData\OpConxps\MSLSAM\MSGIN```

In **Enterprise Manager**, open the ```SAM Log``` and ```Critical Log``` and check the messages to see that the property does **not** exist.

### Instructions

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