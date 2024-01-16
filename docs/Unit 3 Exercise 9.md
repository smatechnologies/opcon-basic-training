---
sidebar_label: 'Unit 3 Exercise 9'
---

## Exercise 9: Email Escalation

### Objective

To set up escalation so that notifications are escalated through channels.

### Summary

Utilizing **Escalation Manager**, create an escalation **Group** called **Level 1** and assign two **User Accounts** to that group. Then you will create a **Rule** to alert the **Level 1 Group** a specific number of times.

Once that the **Escalation Rule** is defined, you will assign that rule to a **Notification Trigger** and build a schedule to put the escalation into practice.

### Instructions

1.	In **Library** > **Management**, select **Escalation Manager**. 

#### Create the Escalation Group

2.	In the **Groups** section on the right side, click **Add**.
3.	In the **Add New Escalation Group** pop-up window:
  * In the **Name** field, enter ```Level 1```.
  * In the **Users** section, select ```Student1``` and ```SMATRAINING\SMAUSER``` in the **Available Users** column by holding down the **CTRL Key**.
  * Click the **>** button to move the users to the **Assigned Users** column. 
  * Click the **Save** Button.

#### Create the Escalation Rule

4.	In the **Rules** section on the left side, click **Add**.
5.	In the **Add New Escalation Rule** pop-up window: 
  * In the **Name** field, type ```Escalation Job Failure```.
  * In the **Rule Sequences** section, click **Add**.
  * In the **Add New Rule Sequence** pop-up window:
    * In the **Number of Times To Be Notified** field, enter ```6```.
    * In the **Time between Notifications (minutes)**: textbox, enter ```00:05```.
    * In the **Group** drop-down, select ```Level 1```.
    * Click **Add**.
  * Click **Save**

:::note
If you needed to add multiple escalation levels, you would click add again on the Add New Escalation Rule pop-up window and follow that the same process.
:::

6.	Close **Library**.

#### Applying the Escalation

7.  Under the **Library** > **Management**, select **Notification Triggers**. 
8.	In the **Notification Triggers** section, click on **Escalation Example**.
9.	In the **Trigger Name** drop-down in the bottom half of the screen, validate that **Job Failed** is selected.
10.	In the **Escalation Rule** drop-down, select **Escalation Job Failure**.
11.	Click the **Save** Button.
12.	Close **Library**.

#### Build the Schedule

13. In **Operations**, click on **Schedule Build**. 
14. In the **From** field, select today's date.
15. In the **To** field, select today's date.
16. Select the **Released** radio button.
17. In the **Schedule List**, select **Escalation Example**.
18. Click the **Build** button.
19. Expand and click on the schedule link for **Escalation Example** to return to the **Processes** screen.

:::info
* The only job in the **Escalation Example Schedule** will fail which will triggering the **Escalation Event**.
* You will receive a pop-up alert that reads **You have notifications to acknowledge**.
* If you open Thunderbird you should also see the initial alert, as well as another email informing you that this process has been placed in escalation.
:::

#### Acknowledge the Escalation

20. In the pop-up window that says **You have notifications to acknowledge**, click **Review**.
21. In the **Notification Acknowledgement** pop-up, check the appropriate box for the **Job Failure**.
22. Click **Acknowledge**.
23. Click **Close**
24. Close **Operations**.

:::tip
There are alternatives when acknowledging an escalation. You can also: 
* Click on the **Escalation Icon** in the lower right corner to the left of the **heartbeat**.
* Log out and back in of Solution Manager. You will get the acknowledgment alert.
:::

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