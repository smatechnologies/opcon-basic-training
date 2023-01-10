---
sidebar_label: 'Unit 2 Exercise 1'
---

### Exercise 1: Define a Global Property

##### Objective:

Create two Global Properties:

```RUNTIME``` – Value: ```10```

```PathWindows``` – Value : ```C:\Program Files\OpConxps\MSLSAM```


For each of the Jobs in **MY FIRST SCHEDULE**, replace the hard-coded text with the newly created Properties:

```“C:\Program Files\OpConxps\MSLSAM\genericp.exe” -t20```

To:

```“[[PathWindows]]\genericp.exe” -t[[RUNTIME]]```

Rebuild **MY FIRST SCHEDULE**, overwriting for Today. View the Schedule performance in Matrix View and Right-Click on **WINDOWS JOB 1** to view **Job Information > Configuration > Token Replacement Values**. 

Verify that the proper values are attributed to the Properties used.

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U2E1.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->

:::tip [Walkthrough Video - Unit 2 Exercise 1](../static/videobasic/U2E1.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Under the **Administration** topic, Double-Click on **Global Properties**. 
2.	Click the **Add** button on the Global Properties toolbar. 
3.	In the **Name** textbox, type ```RUNTIME```.
4.	Add this **Documentation** to the **Global Property**:
This Global Property will store the number of seconds to run the program.
5.	In the **Value** textbox, type ```10```.
  * **Do not check the Encrypted checkbox.**
6.	Click the **Save** button on the Global Properties toolbar.
7.	Click the **Add** button on the Global Properties toolbar. 
8.	In the **Name** textbox, type ```PathWindows```.
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

```“C:\Program Files\OpConxps\MSLSAM\genericp.exe” –t20```  

to:

```“[[PathWindows]]\genericp.exe” –t[[RUNTIME]]```

17.	Click the **Save** button.
18.	Repeat for **Windows Job 2** through **Windows Job 5**.
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