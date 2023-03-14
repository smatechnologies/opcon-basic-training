---
sidebar_label: 'Unit 3 Exercise 9'
---

## Exercise 9: Email Escalation

### Objective

In **Escalation Manager**, add a **Group** named ```First Level``` and assign both ```Student1``` and ```SMATRAINING\SMAUSER```.

Add an **Escalation Rule** named ```First Level```. Add a Rule Sequence:

* Number of Times To Be Notified: ```6```
* Time between Notifications (minutes): ```5```
* Group to Notify on Escalation: ```First Level```

In **Notification Manager**, click the Jobs tab and select the **Escalation Example** folder. Add a **Job Failed** Trigger with an **Escalation Rule** for ```First Level```.

Build the **Escalation Example** Schedule released for Today.

The Job will fail, triggering Escalation. The user must acknowledge the Escalation by entering the **Escalation Acknowledgement** topic or double-clicking the **Escalation Acknowledgement** icon left of the SAM Pulse.

### Instructions

1.	In **Library**, under the **Management** topic, cllick on **Escalation Manager**. 
2.	In the **Groups** frame, click the **Add** button.
3.	In the **Group Name** textbox, type ```First Level```.
4.	In the **Available Users** box select ```Student1``` and ```SMATRAINING\SMAUSER```.
5.	Click the **>** button to push the selected users to the **Assigned Users** box. 
6.	Click the **Save** Button.
7.	In the **Rules** frame, click the **Add** button.
11.	In the **Rule Name** textbox, type ```First Level```.
12.	Under **Rule Sequences** click the **Add** button.
13.	In the **Number of Times To Be Notified** textbox, enter ```6```.
14.	In the **Time between Notifications (minutes)**: textbox, enter ```00:05```.
15.	In the **Group** drop-down, select ```First Level```.
16.	Click the **Add** Button.
17.	Make sure the new **Rule** is listed in the grid of the **Escalation Rule Add/Edit** screen and click **Save**.

:::note
If you needed to add multiple escalation levels, you would click add again and follow that the same process.
:::

18.	Click the **Back** button to close **Escalation Manager**.
19.	Under the **Library** > **Management** topic, click on **Notification Triggers**. 
20.	Under the listed **Notification Triggers**, click on the **Escalation Example** .
21.	Make sure the **Job Failed** Trigger is selected in **Trigger Name**.
22.	Click the **Escalation Rule** drop-down menu and select ```First Level```.
23.	Click the **Save** Button.
24.	Close the **Notification Manager** by clicking the **Back** button.
25.	Click the **Operations** topic in the left-hand menu. 
26. Click on **Schedule Build**. 
27.	In the Schedule list, select **Escalation Example**.
28. Select the **Released** radio button.
29.	Click the **Build** button.
30.	Expand the Schedule Build results and click the link to the **Processes** menu.
* The only Job in the **Escalation Example** Schedule will fail triggering the **Escalation Event**.
* You will receive a pop-up alert that reads **You have notifications to acknowledge**.
* If you open Thunderbird you should see also the initial alert, as well as another email informing you that this process has been placed in escalation.
31.	There are two ways to open the **Acknowledgement** screen. Either click the **Escalation Acknowledgement** option in the pop-up or click on the **Escalation Acknowledgement** icon on the left of the **SAM Pulse**.
32.	Check the checkbox by the Escalation Event you want to **Acknowledge**.
33.	Click the **Acknowledge** button.
34.	Verify that the Event is marked as **Acknowledged** and it will clear from the screen.
35.	Close the Escalation Acknowledgement box.

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 9](../static/videobasic/U3E9.mp4)

:::


1.	Under the **Management** topic, Double-Click on **Escalation Manager**. 
2.	In the **Group** frame, click the Add button.
3.	The **Group Add/Edit** pop-up menu will appear.
4.	In the **Group Name** textbox, type ```First Level```.
5.	In the **Available Users** box select ```Student1``` and ```SMATRAINING\SMAUSER```.
6.	Click the **Green Arrow** button to push the selected user to the **Assigned Users** box. 
7.	Click the **Save** Button.
8.	Make sure the **Escalation Manager** still open. 
9.	In the **Rules** frame, click the **Add** button.
10.	The **Escalation Rule Add/Edit** pop-up menu will appear.
11.	In the **Rule Name** textbox, type ```First Level```.
12.	Under **Rule Sequences** click the **Add** button.
13.	The **Escalation Group Entry Add/Edit** pop-up menu will appear.
14.	In the **Number of Times To Be Notified** textbox, enter ```6```.
15.	In the **Time between Notifications (minutes)**: textbox, enter ```5```.
16.	In the **Group to Notify on Escalation** drop-down, select ```First Level```.
17.	Click the **Add** Button.
18.	Make sure the new **Rule** is listed in the grid of the **Escalation Rule Add/Edit** screen.

:::note
If you needed to add multiple escalation levels, you would click add again and follow that the same process.
:::

19.	Click the **Save** button 
20.	Close the **Escalation Manager** tab by clicking the X.
21.	Under the **Management** topic, Double-Click on **Notification Manager**. 
22.	Under **Notification Triggers**, click on the **Jobs** tab.
23.	Expand the **Escalation Example** folder.
24.	Select the **Job Failed** Trigger.
25.	Click the **Escalation Rule** drop-down menu and select ```First Level```.
26.	Click the **Save** Button.
27.	Close the **Notification Manager** by click the **X** on the tab.
28.	Under the **Operations** topic, Double-Click on **Schedule Build**. 
29.	The **Build Schedules** pop up will appear.
30.	Under **Schedule Selection**, select **Escalation Example**.
31.	Click the **Build** button.
32.	Select the **Released** radio button.
33.	Click **OK**.
34.	Close the **Build Schedules** pop-up.
35.	The only Job in the Escalation Example Schedule will fail triggering the Escalation Event.
36.	If you open Thunderbird you should see the initial alert as well as another email informing you that this process has been placed in escalation.
37.	There are two ways to open the **Acknowledgement** screen. Either Double-Click the **Escalation Acknowledgement** option under **Operations** or Double-Click on the **Escalation Acknowledgement** icon on the left of the **SAM Pulse**.
38.	Check the checkbox by the escalation Event you want to **Acknowledge**.
39.	Click the **Acknowledge** button.
40.	Verify that the Event was cleared from the screen.
41.	Close the Escalation Acknowledgement tab and the Thunderbird application (if open).

</details>