---
sidebar_label: 'Unit 2 Exercise 4 And 5'
---

## Modify Machine Status & Fix the Communication Problem

### Objective

Start Communication for the ```SUSEVM``` Machine.

:::note
DO NOT PANIC – Communication will not begin because of an error we will correct.
:::

View **Logs**. Open the **Netcom Log** and find the ```ConnectToMachine()``` error to verify the issue.

Stop Communication with the ```SUSEVM``` machine.  Edit the Machine information to change the **Socket Number** to ```3100```.

Restart communication with the ```SUSEVM``` machine. The connection should now be successful.

### Instructions

### Exercise 4

1.	In **Library**, under the **Operations** topic, select **Agents**. 
2.	Right-Click on the **SUSEVM** machine and in the side menu, select **Enable Full Comm. (Job start Enabled)**.

:::note
Do not panic! It is not going to communicate.
:::

### Exercise 5

1. Open the Windows **File Explorer**
2. Follow the file path by clicking to **Windows  (C:)** > **ProgramData** > **OpConxps** > **SAM** > **Log**
3. Double click on the **SMANetcom.log** file.
4. Scroll to the bottom of the .log file and look for this entry in the Log file:

```
ConnectToMachine() -- Exception happens at machine [SUSEVM]: No connection could be made because the target machine actively refused it. [[IP ADDRESS:PORT]]
```

5.	Back in Solution Manager, Right-Click the SUSEVM machine and select **Disable Communication**.
6.	Right-Click the SUSEVM machine and select **Wrench** icon to edit Machine details.
7.	In the **General Settings** tab, change the Socket Number to ```3100```.
8.	Click the Save button.
9.	Close the Machines tab.
10.	Click the **Change Communication Status** button and select **Enable Full Comm. (Job Start Enabled)**.
11. Return to the **Agents** main screen and verify that the **SUSEVM** machine is now communicating.

## Enterprise Manager

<details>

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U2E4and5.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->

:::tip [Walkthrough Video - Unit 2 Exercises 4 and 5](../static/videobasic/U2E4and5.mp4)

:::


### Exercise 4

1.	Under the Operations topic, Double-Click on **Machines Status**. 
2.	Right-Click on the **SUSEVM** machine and select **Start Communication**.
  *	Left-Clicking the Machine will refresh the communication.
3.	Hit ```F5``` to refresh the communication status.  

:::note
Do not panic! It is not going to communicate
:::

### Exercise 5

1.	Be sure the **Machines Status** tab is opened.
2.	Under the Information topic, expand Logs. 
3.	Double-Click the **Netcom Log**.
4.	A pop-up will appear showing an auto-updating Netcom log.
5.	Look for this entry in the Log file:

```
ConnectToMachine() – Exception happens at machine [SUSEVM]: 
A connection attempt failed because the connected party did not properly respond after a period of time, 
or established connection failed because the connected host has failed to respond [[IP ADDRESS:PORT]]
```

6.	Back to the Machines Status tab, Right-Click the SUSEVM machine and select **Stop Communication**.
7.	Still under the Machines Status tab, Right-Click the SUSEVM machine and select **Edit Machine**.
8.	In the Machines tab change the Socket Number to ```3100```.
9.	Click the Save button.
10.	Close the Machines tab.
11.	Back to the Machines Status tab, Right-Click the SUSEVM machine and select **Start Communication**.
12.	Refresh the screen. The SUSEVM should be communicating.
13.	Close the **SMANetCom.log** tab and the Machines Status tab.

</details>