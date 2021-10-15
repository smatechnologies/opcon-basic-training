---
sidebar_panel: 'Unit 1 Exercise 8'
---

### Exercise 8: Edit Daily Job

##### Objective: 

Build and Release the **Murphy's Law** Schedule for Today plus ```7 days``` from Today on the Calendar. In Matrix View, select **Edit Daily Job** for the **Wrong Path Job**. Edit the Command Line Path AND Working Directory Path by changing ```MSLSAM2``` to ```MSLSAM```. Save the Daily Job then save the Job Definition to the Master Schedule.

Restart the Job.

In Matrix View, select tomorrow's date and select the **Murphy's Law** Schedule. Select **Edit Daily Job** for the **Wrong Path Job** and notice that ```MSLSAM2``` appears again. *(All of the copies of the Daily Table must be rebuild when the Master Record is changed)*.

Close the Job Daily tab and open the Job Master to ensure that the paths contain the corrected ```MSLSAM```. 

Select Schedule Build and Build and Release the **Murphy's Law** Schedule for the dates previously selected but not yet run. Build the Schedule and **Overwrite** the previous Builds.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Build the **Murphy’s Law** schedule.
2.	Under the Operation topic, double click on **Schedule Build**. 
3.	In the Schedule Selection section, select Murphy’s Law to build.
4.	In the Start field, keep today’s date.
5.	In the Stop field, update the date to 7 days from today.
6.	Click the Build button and Release the Schedule for today.
7.	Click OK.
8.	Close the Build Schedules screen.
9.	Under the Operation topic, double click on the List or Matrix view. 
10.	Select the Schedule Date.
11.	Select the **Murphy’s Law** Schedule.
12.	Right-click on the **Wrong Path Job**
  *	(in the PERT view, right-click on the Wrong Path Job) 
13.	Select Maintenance > **Edit Daily Job** 
  *	(in the PERT view go to Job > Maintenance > Edit Daily Job).
14.	The Job Daily screen will appear.
15.	In the Command Line path **and** Working Directory path, change **MSLSAM2** to **MSLSAM**.
16.	Click the Save button on the Job Daily toolbar. 
17.	Click the Save Job Definition to Master Button and confirm the action.
  *	This will push the change you made to the Job Master.
18.	Close the Job Daily screen.
19.	Right-click on the job and select Restart.
20.	Enter a comment and click OK.
21.	The job should succeed because you fixed the invalid command.
22.	Under the Operation topic, double click on the List or Matrix view. You can also open the PERT view, if you want.
23.	Select Tomorrow’s Date,
24.	Select **Murphy’s Law** Schedule.
25.	Right-click on Wrong Path Job
  * (in the PERT view, right-click on the Wrong Path Job) 
26.	Select Maintenance > Edit Daily Job 
  *	(in the PERT view go to Job > Maintenance > Edit Daily Job).
27.	The Job Daily screen will appear.
28.	Notice that the path still contains **MSLSAM2** instead of **MSLSAM**.
  *	Remember that you need to rebuild all copies of the Daily Tables when the Master Record is changed.
  *	Don’t make any changes. Just close the Job Daily (Wrong Path) tab.
29.	Go back to the Job Master and verify that the Command Line path **and** Working Directory path have been changed from **MSLSAM2** to **MSLSAM**.
30.	Close the Job Master.
31.	Under the Operation topic, double click on Schedule Build. 
32.	In the Schedule Selection section, select Murphy’s Law to build.
33.	In the Scheduling Dates section:
  *	Enter the Start and Stop dates for the build covering the range of dates this Schedule is already built **but has not run**.  
    -- or -- 
  *	Click the **Calendar** button (to the right of the text box) to select the date from the monthly Calendar. 
34.	Click the **Build** button.
35.	In the **Build Properties** window:
  *	Click the OK button (leave the Released radio button selected).
  *	As the Schedule was already built for those dates, you will be prompted to overwrite those builds. Click Yes when prompted (for each date).
36.	Close the Build Schedules screen.
37.	After the Schedule Build is complete the new Daily Schedules will have the updates in them.
38.	Close all tabs, but keep Enterprise Manager open.

</details>
