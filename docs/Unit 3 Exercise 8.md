---
sidebar_label: 'Unit 3 Exercise 8'
---

## Exercise 8: Notification Manager

### Objective

In **Notification Manager**, create a Notification by adding a **Root Group** named ```ALL MACHINES``` and adding both the ```WINDOWS``` and ```UNIX``` machine.

Add a **Machine Trigger** for ```Machine Marked Up```.

Send an email to ```smauser@congo.local``` with the message: "TESTING EMAIL NOTIFICATION". 

Press the **Test** button to send the email. Open Thunderbird to verify successful notification.

### Instructions

1.	In **Library**, under the **Management** topic, click on **Notification Triggers**. 
2.  Click on **Manage Groups** in the upper right-hand corner.
3.  Click the **Add** button.
4.  In the **Name** textbox, type **All Machines**.
5.  In the **Type** dropdown list, seleect **Machine**.
6.  In the **Machine** list, select the **Included** radio button.
7.  Click **Selected** for both the **SMATraining** and ***SUSEVM** machines.
8.  Click the **Save** button. 
9.  Click on **Notification Triggers** in the upper right-hand corner.
10. Click the **Add** button.
11. In the **Group Name** dropdown list, select **All Machines**.
12. In the **Trigger Name** dropdown list, select ```Machine Marked Up```.
13. Click the **Save** button.
14. Select the **All Machines** trigger from the main list.
14. Click the **(+)** sign on **Email** to add an email notification.
15. In the **To** field, type ```smauser@congo.local```.
16. In the **Subject** field, type ```Notification Test```.
17. In the **Message** box, enter ```Testing email notification```.
18. Click the **Test** button to test your notifcation results.
19. Click the **OK** button.
20. Open the Thunderbird email client and check the inbox.


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