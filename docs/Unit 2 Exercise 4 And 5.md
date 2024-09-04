---
sidebar_label: 'Unit 2 Exercise 4 And 5'
---

## Modify Machine Status & Fix the Communication Problem

### Objective

To successfully establish communication to the new agent.

### Exercise 4

### Summary

Start Communication for the ```SUSEVM``` Machine.

:::tip
**DO NOT PANIC** – Communication will not be successful because of a port error that will be corrected by the end of Exercise 5.
:::

### Instructions

#### Attempt to Establish Communication 

1.	Click on the **Change Communication Status** button.
2.  Select **Enable Full Comm. (Job start Enabled)**.
3.  Click **Back**.
4.  You should receive a **Not Responding** in the **Status** column.
5. Close **Operations**
6.  Continue on to **Exercise 5**.

:::info Note
Do not panic! This is an expected behavior based on the port number we entered when defining the **Socket Number** in Exercise 3. Please continue on to Exercise 5 to correct this issue.
:::

### Exercise 5

### Summary

View the **Netcom Log** to determine the reason why you are unable to establish communication. Walk through steps to correct this issue and successfully establish communication with the **Agent**.

### Instructions

#### Viewing the Log

1. In **Library** > **Administration** > **Logs**
2. Click on the **SMANetcom.log** file.
3. Scroll to the bottom of the **SMANetcom.log** file and look for this entry in the Log file: 
  * ```ConnectToMachine() -- Exception happens at machine [SUSEVM]: No connection could be made because the target machine actively refused it. [[<IP ADDRESS>:3111]]```
4. Click **Back** until you get to the main **Library** page.

#### Correcting the Communication Error

5.	In **Library** > **Administration** > **Agents**.
6.  Right-click on the **SUSEVM** Unix Agent.
7.	Click the **Wrench** icon in the Agent Selection panel to edit the Machine details.
8.  Click the **Change Communication Status** button at the bottom of the screen, select **Disable Communication**.
9.	In the **General Settings** tab, change the **Socket Number** to ```3100```.
10.	Click the **Save**.
11.	Click the **Change Communication Status** button, select **Enable Full Comm. (Job Start Enabled)**.
12. Click the **Back** button in the top right-hand corner to return to the **Agents** main screen to verify that the **SUSEVM** machine is now communicating.
13. Close **Operations**.
14. Close **Library**.



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