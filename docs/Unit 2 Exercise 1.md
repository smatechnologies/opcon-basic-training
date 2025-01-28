---
sidebar_label: 'Unit 2 Exercise 1'
---

## Exercise 1: Define a Global Property

### Objective

To replace hardcoded text in the command line with Global Properties so that the command lines are future proofed should the values need to be changed.

### Summary

Create two Global Properties, ```RUNTIME``` with a value of ```10``` and ```PATH_Windows``` with a value of ```C:\Program Files\OpConxps\MSLSAM```. For three of the jobs in **MY FIRST SCHEDULE**, replace the hardcoded text with the newly created properties.

Build **MY FIRST SCHEDULE** for today, then view the schedule's performance in Processes screen. Verify that the proper values are attributed to the Properties used.

The command line should change from ```“C:\Program Files\OpConxps\MSLSAM\genericp.exe” -t20``` to ```“[[PATH_Windows]]\genericp.exe” -t[[RUNTIME]]```.

### Instructions

#### Create the Global Properties

1.	In the **Library** > **Administration**, select **Global Properties**. 
2.	Click the **Add** button. 
3.	In the **Name** field, enter ```RUNTIME```.
4.	In the **Value** field, enter ```10```.
5.	Add this **Documentation** to the **Global Property** 
  * Example: This Global Property will store the number of seconds to run the program.
6.	Click the **Save** button.
7.	Click the **Add** button on the Global Properties toolbar. 
8.	In the **Name** textbox, type ```PATH_Windows```.
9.	In the **Value** textbox, enter ```C:\Program Files\OpConxps\MSLSAM```
10.	Add **Documentation** to the Global Property. 
  * Example: This Global Property will store the path to the MSLSAM directory.
11.	Click the **Save** button on the Global Properties toolbar.
12.	Close **Library**.

#### Modify the Jobs

13.	Under **Library** > **Administration**, select **Master Jobs**.
14.	Using the filters, locate and select **Windows Job 1** in **My First Schedule**.
15. Click the **Edit** button.
16. Click the **Lock** icon in the upper right-hand corner.
17.	Expand **Task Details**, if not already expanded.
18. Locate the **Command Line** and highlight ```C:\Program Files\OpConxps\MSLSAM```.
19. Using either, the **Magic Wand** or **CTRL+SPACE**, pull up the **Property Selector** window.
20. Using the Search filter, locate and select the property called ```PATH_Windows```.
21. Click **OK**.
22. Locate the **Command Line** and highlight ```10```.
23. Using either, the **Magic Wand** or **CTRL+SPACE**, pull up the **Property Selector** window.
24. Using the Search filter, locate and select the property called ```RUNTIME```.
25. Click **OK**.

:::info Note
Your updated **Command Line** should now look like:

```"[[PATH_Windows]]\genericp.exe" -t[[RUNTIME]]```
:::

26.	Click the **Save** button.
27.	Repeat steps 14-25 to modify the **Command Lines** for **Windows Job 2** and **Windows Job 3**.
28. Close **Library**.

#### Build the Schedule and Validate that the Global Properties are resolved

29.	Open **Operations** and click on **Schedule Build**.
30. Validate that today is the date for the **From** and **To** fields.
31. In the **Schedule Build** section, select the **Released** radial button.
32. Select **My First Schedule** from the **Schedule List**.
33. Click **Build**
34.	On the **Build Results** screen, expand the dropdown menus until you can see and click on **My First Schedule**.
35.	Click the **My First Schedule** link to open the Schedule in **Processes**.
36.	Verify that all Jobs **Finished OK**.
37. Right-click on one of the four jobs that were modified.
38. In the **Job Selection** panel, select **Job Output**.
39. Click **Refresh**.
40. Click on the link that appears after the **Refresh** is complete.
41. Look at lines four and five and validate that the **Global Properties** resolved to ```C:\Program Files\OpConxps\MSLSAM``` and ```10``` respectively.
42. Close the **Job Output**.
43. Close **Operations**.

<!--
34.	Right-Click on **Windows Job 1**.
35.	Select **Job Information**.
36.	Click the **Configuration** tab.
37.	Click the **Token Replacement Values** row in the grid.
38.	Verify that the proper value was attributed to each Global Property in the Token Replacement Values row.
-->



## Enterprise Manager

<details>

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U2E1.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->

:::tip [Walkthrough Video - Unit 2 Exercise 1](../static/videobasic/U2E1.mp4)

:::

1.	Under the **Administration** topic, Double-Click on **Global Properties**. 
2.	Click the **Add** button on the Global Properties toolbar. 
3.	In the **Name** textbox, type ```RUNTIME```.
4.	Add this **Documentation** to the **Global Property**:
This Global Property will store the number of seconds to run the program.
5.	In the **Value** textbox, type ```10```.
  * **Do not check the Encrypted checkbox.**
6.	Click the **Save** button on the Global Properties toolbar.
7.	Click the **Add** button on the Global Properties toolbar. 
8.	In the **Name** textbox, type ```PATH_Windows```.
9.	Add Documentation to the Global Property.
10.	In the **Value** textbox, type:

```C:\Program Files\OpConxps\MSLSAM```

11.	Click the **Save** button on the Global Properties toolbar.
12.	Close the **Global Properties** tab.
13.	Under **Administration**, click on **Job Master**.
14.	In the **Schedule** drop-down list, select **My First Schedule**.
15.	In the **Job** drop-down list, select **Windows Job 1**.
16.	Update your command line to use the new properties in place of the hard-coded text.
Change the following:

```“C:\Program Files\OpConxps\MSLSAM\genericp.exe” -t20```  

to:

```“[[PATH_Windows]]\genericp.exe” -t[[RUNTIME]]```

17.	Click the **Save** button.
18.	Repeat for **Windows Job 2** through **Windows Job 4**.
19.	Close the **Job Master** tab.
20.	Open the **List** or **Matrix**.
21.	Navigate to the current date.
22.	Verify that **My First Schedule** has completed.  
  * **_If not, then we need to cancel all Jobs to close the Schedule_**.
23.	Open the **Schedule Build** screen.
24.	Select **My First Schedule** from the **Schedule Selection** box.
25.	Check the **Overwrite Existing Schedule** checkbox.
26.	Press the **Build** button.
27.	Click the **Released** radio button.
28.	Click the **OK** button.
29.	Close the **Build Schedules** screen.
30.	Open the **List** or **Matrix**.
31.	Navigate to the current date.
32.	Expand (if in the **List** view) or click (if in the **Matrix** view) **My First Schedule**.
33.	Verify that all Jobs **Finished OK**.
34.	Right-Click on **Windows Job 1**.
35.	Select **Job Information**.
36.	Click the **Configuration** tab.
37.	Click the **Token Replacement Values** row in the grid.
38.	Verify that the proper value was attributed to each Global Property in the Token Replacement Values row.
39.	Click **OK** and close the **List/Matrix** view.

</details>