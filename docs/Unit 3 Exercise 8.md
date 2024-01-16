---
sidebar_label: 'Unit 3 Exercise 8'
---

## Exercise 8: Notification Manager

### Objective

To set up notifications via Notification Manager.

### Summary

Using **Notification Manager** you will create an email notification to alert **smauser@congo.local** when a machine is marked up. You will use the Thunderbird Mail Client to manage the notifications.

### Instructions

1.	In **Library** > **Management**, select **Notification Triggers**. 
2.  Click **Manage Groups** in the upper right corner.

#### Create a Notification Group

3.  On the **Manage Groups** screen, click **Add**.
4.  In the **Name** field, type ```All Machines```.
5.  In the **Type** drop-down, select **Machine**.
6.  Under the **Name** field, select **Included** so that future machines are included in this trigger.
7.  Validate that the **Selected** check boxes for both machines is checked.
8.  Click **Save**.

:::info Note
Notice that the new group has been added to the top section of the Manage Groups screen.
:::

#### Create the Notification Trigger

9.  Click on **Notification Triggers** in the upper right corner.
10. On the **Notification Trigger** screen, click **Add**.
11. In the **Group Name** drop-down, select **All Machines**.
12. In the **Trigger Name** drop-down, select **Machine Marked Up**.
14. Click the **+** sign on **Email** to add an email notification.
15. In the **Email** pop-up window:
  * In the **To** field, type ```smauser@congo.local```.
  * In the **Subject** field, type ```Notification Test```.
  * In the **Message** box, enter ```Testing email notifications.```
  * Click the **OK** button.
16. Click **Save**.

#### Test the Notification

17. Select the **All Machines** trigger from the **Main List** in the top half of the screen.
18. Click **Test All** to test your notification.
19. Open the Thunderbird email client and check the inbox.
20. Close **Library**.


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 8](../static/videobasic/U3E8.mp4)

:::

1.	Under the **Management** topic, Double-Click on **Notification Manager**. 
2.	Click on the **Machines** tab. 
3.	Right-Click in the white area under the Machines tab and select **Add Root Group**.
4.	Type the name of the Machine Group (e.g., All Machines) and click **OK**.
5.	On the right side of the screen, expand the Operating Systems and check all the box(es) next to the **Machine(s)**.
6.	Click the **Save** button (bottom right).
7.	Right-Click the **Group** folder created in step 4, move the mouse to **Add Machine Trigger**, and select the **```Machine Marked Up``` Trigger**.
8.	Under **Notification Definitions** on the right:
9.	Mark the **Send Email (SMTP)** checkbox.
10.	Click the **Email** tab.
11.	In the To field, enter ```smauser@congo.local```.
12.	Enter a **Subject**.
13.	In the **Message**, enter **Testing email notification**.
14.	Click the **Test** button to test your notification results
15.	Click the **Save** button.
16.	Open Thunderbird and check the inbox.

</details>