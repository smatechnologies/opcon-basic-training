---
sidebar_label: 'Unit 3 Exercise 8'
---

### Exercise 8: Notification Mananger

##### Objective:

In **Notification Manager**, create a Notification by adding a **Root Group** named ```ALL MACHINES``` and adding both the ```WINDOWS``` and ```UNIX``` machine.

Add a **Machine Trigger** for ```Machine Marked Up```.

Send an email to ```smauser@congo.local``` with the message: "TESTING EMAIL NOTIFICATION". 

Press the **Test** button to send the email. Open Thunderbird to verify successful notification.

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

:::tip [Walkthrough Video - Unit 3 Exercise 8](../static/videobasic/U3E8.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

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