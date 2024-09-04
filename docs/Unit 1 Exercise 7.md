---
sidebar_label: 'Unit 1 Exercise 7'
---

## Exercise 7: Schedule and Job Statuses 

### Objective

To build an existing schedule and observe how **Job Statuses** and **Start Times** effect how and if a job runs.

### Summary

Build the **Schedule and Job Statuses** schedule ```On Hold``` for today. In **Processes**, release the schedule for today. Observe the ```Start Time``` for the schedule. If it has not been reached, you will need to manually start the schedule. Finally, you will put the schedule back into an ```On Hold``` status preventing new jobs from starting.

### Instructions

####	Build Schedule and Job Statuses
1.  In Solution Manager, select **Operations**. 
2.  Click **Schedule Build** in the upper right-hand corner. 
3.  In the **Schedule Date** section, validate that today's date is specified for both **From** and **To**.
3.  In the **Schedule Build** section, click the **On Hold** radio button.
4.  In the **Schedule Selection** list, select **Schedule and Job Statuses**.
5.  Click the **Build** button.
6.	Expand and click on the schedule link for **Schedule and Job Statuses** to return to the **Processes** screen.

#### Release the Schedule and Job Statuses schedule
7.  Right-click on the **Schedule and Job Statuses** to open the **Schedule Selection** side menu.
8.  Select **Schedule Status Update**.
9.  Type **“Practice Exercise - Release”** in the **Change status reason** text field.
10. Click **Release**
11. Close the **Schedule Selection** side menu.
12.	The **Schedule and Job Statuses** schedule will move from an “**On Hold**” status to a “**Wait to Start**” status because the Schedule had a **Start Time** of **6:29* PM**.

#### Start the Schedule and Job Statuses schedule
13. Right-click on the **Schedule and Job Statuses** to open the **Schedule Selection** side menu.
14. Select **Schedule Status Update**
15. Type **“Practice Exercise - Start”** in the **Change status reason** text field.
16. Click **Start**
17. Close the **Schedule Selection** side menu.
18. The **Schedule and Job Statuses** Schedule will move from a “**Wait to Start**” status to an “**In Process**” status and jobs should start running.

#### Place the Schedule and Job Statuses schedule back On Hold
19. Right-click on the **Schedule and Job Statuses** to open the **Schedule Selection** side menu.
20. Select **Schedule Status Update**.
21. Type **“Practice Exercise - On Hold”** in the **Change status reason** text field.
22. Click **On Hold**.
23. Close the **Schedule Selection** side menu.
24. The **Schedule and Job Statuses** Schedule will move from an “**In Process**” status to an “**On Hold**” status preventing any remaining jobs in the schedule from running.
25. Close **Operations**.



## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 1 Exercise 7](../static/videobasic/U1E7.mp4)

:::

#### Build Schedule and Job Statuses
1.  Under the **Operation** topic, double-click on **Schedule Build**. 
2.  In the **Schedule Selection** section, select **Schedule and Job Statuses**.
3.  Validate that today's date is specified for both **From** and **To**. 
4.  Click the **Build** button.
5.  In the **Build Properties** pop-up, click the **On Hold** radio button.
6.  Click **OK**.
7.  Close the **Build Schedules** screen.

#### Release **Schedule and Job Statuses** using one of the **Operations Screens**. The instructions below use the **Matrix** screen.
8.  Under the **Operation** topic, double-click on **Matrix**. 
9.  Verify that the current date is selected in the **Calendar** on the upper left hand of the **Matrix** screen.
10. Select the **Schedule and Job Statuses** schedule to see the jobs.
11. Right-click on the **Schedule and Job Statuses** schedule and select **Release** from the menu.
12. Type **“Practice Exercise - Release”** in the **Enter a short explanation for this status change** text field.
13. Click **OK**.
14. The **Schedule and Job Statuses Schedule** will move from an “**On Hold**” status to a “**Wait to Start**” status because the Schedule had a **Start Time** of **18:30**.

#### Start the Schedule
15. Right-Click on the **Schedule and Job Statuses Schedule** from the **Schedule** selection area again.
16. Select **Start** from the menu.
17. Verify that the information in the pop-up window is true.
18. Type “**Practice Exercise - Start**” in the **Enter a short explanation for this status change** text field.
19. Click **OK**.
20. The **Schedule and Job Statuses** Schedule will move from a “**Wait to Start**” status to an “**In Process**” status and Jobs should start running.

#### Hold the Schedule
22.  Right-Click on the **Schedule and Job Statuses** Schedule from the **Schedule** menu again.
23.  Select **Hold** from the menu.
24.  Verify that the information in the pop-up window is true.
25.  Type “**Practice Exercise - Hold**” in the **Enter a short explanation for this status change** text field.
26.  Click **OK**.
27.  The **Schedule and Job Statuses** Schedule will move from an “**In Process**” status to an “**On Hold**” status.
28.  Jobs currently running will continue to run, but nothing new will kick off until the Schedule is released.

</details>
