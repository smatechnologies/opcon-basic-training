---
sidebar_label: 'Unit 3 Exercise 11'
---

##  Exercise 11: Instance Properties

### Objective

To use different types of **Instance Properties** in place of hard coded values in the command line.

### Summary

Modify **Windows Job 4** and **Windows Job 5** to use **Schedule and Job Instance Properties** for the ```Path``` and ```-t``` parameter. Within **MY FIRST SCHEDULE**, you will create a **Schedule Instance Property** called ```Path``` with a value of ```C:\Program Files\OpConxps\MSLSAM```. Within **Windows Job 4** and **Windows Job 5**, you will create a **Job Instance Property** called ```TIME``` with a numerical value of your choosing.

### Instructions

#### Create the Schedule Instance Property

1.  In **Library** > **Administration**, click on **Master Schedules**. 
2.  In the **Schedule** list, select **My First Schedule**.
3.  Click the **Edit** button.
4.  Click the **Lock** icon in the upper right-hand corner.
5.  Expand the **Instance Definition** box
6.  Click the **Add New Property Set** button.
  * In the **Name** text box, type ```Path```.
  * In the **Value** text box, type ```C:\Program Files\OpConxps\MSLSAM```.
  * Click the **Check Mark** button to verify the the entry.
7.  Click the **Save** button.
8.  Close **Studio**.

#### Create the Job Instance Property

9.  Under **Library** > **Administration**, select **Master Jobs**.
10. In the **Master Jobs** list, select **Windows Job 4**.
11. While holding down the **CNTL key**, click the **Edit** button and the job should open in a new tab.
12. In the new tab, click the **Lock** button in the upper right-hand corner.
13. Expand **Instance Properties**.
  * Click **+ Add New Property Set**.
  * Click the **green + button**.
  * In the **Name** field, enter ```TIME```.
  * In the **Value** field, enter a number of your choice between 10 and 60.
  * Click the **Check Mark** button to verify the the entry.
  * click **Save**.
14. Close the tab.
15. Repeat Steps 10-14 to add a **Instance Property** to **Windows Job 5**.

#### Modify the Jobs to use the Instance Properties

16. Under **Library** > **Administration**, select **Master Jobs**.
17. In the **Master Jobs** list, select **Windows Job 4**.
18. Click the **Lock** button in the upper right-hand corner.
19. Click the **Edit** button.
20. Expand the **Task Details**  box.
21. Locate the **Command Line** and highlight ```C:\Program Files\OpConxps\MSLSAM```.
22. Using either, the **Magic Wand** or **CTRL+SPACE**, pull up the **Property Selector** window.
23. In the **Property Selectory** pop-up window:
  * In the **Scope** field, uncheck **Global** and **Machine**.
  * In the **Search** field, enter ```Path```.
  * Select the Property named, **SI.Path**.
  * Click **OK**
24. Using the search filter, locate and select the property called ```Path```.
25. Click **OK**.
26. Repeat **Steps 21-25** to replace the ```10``` with the Job Instance Property called **JI.TIME**.
27. Repeat **Steps 17-26** for **Windows Job 5**.

:::tip
The new command line should look similar to the following: 
```cmd
"[[SI.Path]]\genericp.exe" –t[[JI.TIME]]
```
:::

28. Click the **Save** button.
29. Close **Library**.

#### Build the Schedule

:::tip
Validate that all the jobs in **My First Schedule** are in a completed state and that the **Schedule Status** shows as **Completed**. As you may need to overwrite the exsiting schedule during the build process.
:::

30. In **Operations**, click on **Schedule Build**. 
31. In the **From** field, select today's date.
32. In the **To** field, select today's date.
33. Select the **Released** radio button.
34. In the **Schedule List**, select **My First Schedule**.
35. Click the **Build** button.
36. Expand and click on the schedule link for **My First Schedule** to return to the **Processes** screen.


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 11](../static/videobasic/U3E11.mp4)
:::


1.	Under the **Administration** topic, double click on **Schedule Master**. 
2.	In the **Schedule Selection** drop-down menu select **My First Schedule**.
3.	Click the **Instance Definition** tab under Schedule Details. 
4.	In the **Define Property Values** text box, type ```Path=C:\Program Files\OpConxps\MSLSAM```.
5.	Click the **Add** button to the right of the **Define Property Values** text box.
6.	Click the **Save** button on the Schedule Master toolbar.
7.	Close the **Schedule Master**.
8.  Under the **Administration** topic, double click on **Job Master**. 
20.	In the **Schedule** drop-down list, select **My First Schedule**.
21.	In the **Job** drop-down list, select **Windows Job 4**.
22.	Update your command line to use the new properties by placing **Properties** to point to the **Machine** or **Schedule Instance Properties** instead of the **Global Properties**:
```
“[[PathWindows]]\genericp.exe” –t[[RUNTIME]] –e0

to:

"[[SI.Path]]\genericp.exe” –t[[JI.Time]] –e0
```
23.	Click the **Save** button.
24. In the **Instance Definition** tab, enter ```TIME=XX```, where XX is a number of your choosing between 10 and 60.
25. Click **Add**
26. Click **Save**.
27.	If **My First Schedule** is In Process, **Cancel** all jobs.
28.	Rebuild **My First Schedule** Released for today
29.	Release **Windows Job 1** and **Windows Job 2**.
30.	Check the results from Enterprise Manager (check the **Job Information> Configuration> Token Replacement Values** for **Windows Job 4**).

</details>
