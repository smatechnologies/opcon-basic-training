---
sidebar_label: 'Unit 1 Exercise 8'
---

## Exercise 8: Edit Daily Job

### Objective

To walk through and understand the steps needed to troubleshoot and correct a job after a failure has occured. And utilize the the **Overwrite** flag when rebuilding future dates.

### Summary

Build the **Murphy's Law** schedule for today plus the next ```7 days```. In the **Processes** screen, you will edit the **Daily Job** for a job called **Wrong Path Job**. Correct the **Command Line** AND **Working Directory** paths by changing ```MSLSAM2``` to ```MSLSAM```. Rerun the Job. Compare today's version of the job with the next day's version of the job. Make note of the differences.

:::caution Warning
All of the future instances of the jobs must be rebuilt after the Master Record is corrected so they will reflect the correction.
:::

Close out of **Operations** and navigate to the job in the **Master Job** section to correct the paths to reflect ```MSLSAM```. Rebuild the **Murphy's Law** schedule for the future dates that have not yet run and utilize the **Overwrite** flag.

### Instructions

#### Build the Murphy’s Law schedule
1.	In Solution Manger, select the **Operation** tab, click on **Schedule Build**. 
2.	In the **From** field, keep today’s date.
3.	In the **To** field, update the date to 7 days from today.
4.	Select the **Released** radio button.
5.	In the Schedule Selection section, select **Murphy’s Law**.
6.	Click the **Build** button.
7.	Click the link for the **Murphys Law** Schedule to open the **Processes** screen.

#### On the Processes screen
:::tip
The job **Wrong Path** will have an **Return Code** of ```31001```. This **Return Code** means there is an issue with the **Command Line**.
:::

8.	Right-click on the **Wrong Path** job.
9.	In the **Job Selection** side menu, click the **Wrench** icon.

#### Correct the Daily Job Definition
10.	The **Daily Job Definition** screen will appear.
11. Click the **Lock (or CRTL + ALT + A)** icon in the upper right-hand corner.
12. Expand the **Task Details** section.
13.	In the **Run** section, modify the **Command Line** AND **Working Directory** paths from ```MSLSAM2``` to ```MSLSAM```.

:::info
We can validate that this is the error by navigating to that location via a Windows Explorer Window on this server. You will notice that in the OpConxps directory there is no MSLSAM2 directory.
:::

14.	Click the **Save**. This should take you back to the Processes screen.

#### On the Processes screen
15.	The **Job Selection** menu should still be open, click **Status Update** and select **Restart**.
16. Close the **Job Selection** menu.
17.	The job should have a **Finished OK** status because the invalid command in the **Command Line** has been corrected.
18.	In the **Processes** screen, in the **Date** list, select tomorrow’s date. 
19.	Select the **Murphy’s Law** shedule with tomorrow's date in the **Date** column in the **Schedule** section.
20.	Right-click on the **Wrong Path** Job.
21. In the **Job Selection** side menu, click the **Wrench** icon.

#### On the Daily Job Definition screen
22. Expand the **Task Details** section.
23.	Notice that the paths still contains **MSLSAM2** instead of **MSLSAM**.

:::info
This is because only today's instance of the job has been corrected. All other versions in the Processes screen will have the error. In order to correct the other daily instances, the Master version will need to be corrected and the Schedule will need to be rebuilt.
:::

24. Don’t make any changes.
25. Close **Operations**.

#### Correcting the Master Job
26. Navigate to **Library**, click the **Master Jobs** topic.
27. Use the search field at the top of the **Master Job** list to locate the **Wrong Path** Job in the **Murphy's Law** Schedule.
28. Select the job and click the **Edit** button.
29. Click the **Lock** icon in the upper right-hand corner.
30. Expand **Task Details** and locate the **Run** section.
31. In the **Command Line** AND **Working Directory** paths, change ```MSLSAM2``` to ```MSLSAM```.
32. Click **Save**.
33. Close **Library**.

:::info
Remember that all future instances of the Schedule will need to be rebuild after the Master version has been changed. 
:::

#### Rebuild the Future Dates
34.	Select the **Operations** tab, then click on **Schedule Build**. 
35.	In the **From** field select tomorrow.
36. In the **To** field select 7 days from today.
37. Select the **Released** radio button in the **Schedule Build** section. 
38. Click the **Overwrite Existing Schedules** toggle to turn on.
39.	In the **Schedule Selection** section, select **Murphy's Law**.
40.	Click the **Build** button.
41. Click the link for the **Murphy's Law** schedule for any date you just built out.

#### Validate the Change
42. Right-click on the **Wrong Path** job.
43. Click the **Wrench** icon.
44. On the **Daily Job Definition** screen, expand the **Task Details**
45. In the **Run** section, validate that the **Command Line** AND **Working Directory** paths show ```MSLSAM```.
46. Close **Operations**.



## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 1 Exercise 8](../static/videobasic/U1E8.mp4)

:::

#### Build the **Murphy’s Law** schedule.
1.	Under the **Operation** topic, double click on **Schedule Build**. 
2.	In the **Schedule Selection** section, select **Murphy’s Law** to build.
3.	In the **Start** field, keep today’s date.
4.	In the **Stop** field, update the date to 7 days from today.
5.	Click the **Build** button.
6. In the **Build Properties** window, select **Released** for today and the future dates.
7.	Click OK.
8.	Close the **Build Schedules** screen.

#### On the Matrix
9.	Under the **Operation** topic, double click on **Matrix**. 
10.	Select today's date in the **Calendar**.
11.	Select the **Murphy’s Law** Schedule.
12.	Right-click on the **Wrong Path Job**
13.	Select **Maintenance** > **Edit Daily Job** 
14.	The Job Daily screen will appear.

#### Correcting and restarting the Job
15.	In the **Windows Definiton** section, modify the **Command Line** AND **Working Directory** paths from ```MSLSAM2``` to ```MSLSAM```.
16.	Click the **Save** button on the Job Daily toolbar. 
17.	Click the **Save Job Definition to Master** button and confirm the action in the pop-up window.

:::info Note
This button will push changes made in the **Windows Definition** section back to the Job Master.
:::

18.	Close the Job Daily screen.
19.	Right-click on the **Wrong Path** job and select **Restart**.
20.	Enter a comment and click **OK**.
21.	The job should complete with a **Finished OK** status because you corrected the invalid command in the **Command Line**.

#### Checking Future Dates
22. In the **Calendar** on the **Matrix** screen, select tomorrow's date.
23.	Select **Murphy’s Law** Schedule.
24.	Right-click on **Wrong Path** job
25.	Select **Maintenance** > **Edit Daily Job** 
26.	The **Job Daily** screen will appear.
27.	Notice that the path still contains ```MSLSAM2``` instead of ```MSLSAM```.

:::info
Remember that you need to rebuild all copies of the Daily Tables when the Master Record is changed. 
:::

28. Don’t make any changes, close the **Job Daily (Wrong Path)** tab.

#### Rebuild the Future Dates
29.	Under the **Operation** topic, double click on **Schedule Build**. 
30.	In the **Schedule Selection** section, select **Murphy’s Law** to build.
31.	In the **Start** field, select tomorrow's date.
32.	In the **Stop** field, update the date to 7 days from today.
33. Check the **Overwrite existing schedules** box.
34.	Click the **Build** button.
35. In the **Build Properties** window, select **Released**.
36.	Click **OK**.
37.	Close the **Build Schedules** screen.

#### Validate the Change
38. In the **Matrix**, select a date in the future.
39. Select the **Murphy's Law** schedule.
40. Right-click on the **Wrong Path** job.
41. Select **Maintenance** > **Edit Daily Job** 
42. On the **Daily Job Definition** screen, validate that the **Command Line** AND **Working Directory** paths show ```MSLSAM```.
43. Close **Job Daily** screen.

</details>
