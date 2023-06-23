---
sidebar_label: 'Unit 4 Exercise 10'
---

## Exercise 10: File Movement

### Objective

In Windows Explorer, create two folders named ```C:\Temp``` and ```C:\RMExample```.

In Notepad, create a file named ```C:\RMExample\File-to-be-copied.txt```

Create Schedule named **My Windows Sub-Types Schedule**.

Within the **My Windows Sub-Types Schedule**, create a Windows Job named **File Copy** with a **Job Sub-Type** of ```Command: File Copy``` running Monday-Sunday Frequency. The Job Status should be placed **On Hold**. 

The **Source file**: ```C:\RMExample\File-to-be-copied.txt```
The **Destination file**: ```C:\RMExample\File-to-be-renamed.txt```

Next, create a Windows Job named **File Rename** with a **Job Sub-Type** of ```Command: File Rename``` running Monday-Sunday Frequency. The Job Status should be placed **On Hold**.

**Path and Current File Name**: ```C:\RMExample\File-to-be-renamed.txt```
**New File Name**: ```File-to-be-moved.txt```

Next, create a Windows Job named **File Move** with a **Job Sub-Type** of ```Command: File Move``` running Monday-Sunday Frequency. The Job Status should be placed **On Hold**.

The **Source file**: ```C:\RMExample\File-to-be-moved.txt```
The **Destination file**: ```C:\Temp\File-to-be-deleted.txt```

Next, create a Windows Job named **File Delete** with a **Job Sub-Type** of ```Command: File Delete``` running Monday-Sunday Frequency. The Job Status should be placed **On Hold**.

**File To Delete**: ```C:\Temp\File-to-be-deleted.txt```

Create a **Dependency** Chain:

**File Copy > File Rename > File Move > File Delete**

Build the Schedule Released for Today. Manually Release each Job individually, checking the created folders each time to verify Job success.

### Instructions

**Create a New File and a New Schedule**

1.	Go to **Windows Explorer** and create the ``C:\Temp`` and ```C:\RMExample``` folders.
2.	If not running, open **Notepad** and create a new file.
3.	Type something and save the file as ```C:\RMExample\File-to-be-copied.txt.```
4.	Close **Notepad**.
5.	In **Library**, under the **Administration** topic, select **Master Schedules**. 
6.	Click the **Add** button.
7.	In the **Name** textbox, enter **My Windows Sub-Types Schedule**.
8.	In the **Documentation** textbox, enter **This is a training Schedule for Windows Sub-Type Jobs**.
9.	Keep **Monday through Friday** selected for the **Workdays per Week** for the Schedule to run.
10.	In the **Schedule Properties > Build frame**, keep the **Auto Build** unchecked.
11.	Click the **Save** button on the **Schedule Master** toolbar.

**Add Jobs to the New Schedule**

12.	In **Library**, under the **Administration** topic, select on **Master Schedule**. 
13.	In the **Schedule** dropdown list, select **My Windows Sub-Types Schedule**.
14. In **Studio**, select **My Windows Sub-Types Schedule** and click the **View** button.
15. Select **Add Job** in the side menu.
16.	In the **Name** textbox, enter **File Copy**.
17.	In the **Job Type** dropdown list, select ```Windows```.
18.	In the **Machine Selection** dropdown list, select the ```SMATraining``` machine for the Job to run on. 
19. In the **User ID** dropdown list, select ```SMATRAINING\SMAUSER```
20. Click the **Edit** button in the **Job Sub-Type** section.
21.	In the **Job Sub-Type** dropdown list select ```Command: File Copy```.	
22.	In the **Source** field, type ```C:\RMExample\File-to-be-copied.txt```
23.	In the **Destination** field, type ```C:\RMExample\File-to-be-renamed.txt```
24.	Click the **Save** button.
25. Click the **Save** button in the **Master Job Definition**.
26. Click the **Lock** button in the upper right-hand corner.
27. Scroll to and expand the Frequency box.
28. Select the ```Mon-Sun-O``` Frequency in the **Inactive** list and move it to the **Active** list.
29. Select the Frequency and in the **Job Information - Job Build Status** dropdown, change the status to **On Hold**.
30. Be sure to add some documentation to the Job.
31. Click the **Save** button.
32. Back in **Studio**, within the **My Windows Sub-Types Schedule**, select **Add Job** in the side menu.
33.	In the **Name** textbox, enter **File Rename**.
34.	In the **Job Type** drop-down list, select ```Windows```.
35.	In the **Machine Selection** dropdown list, select the ```SMATraining``` machine for the Job to run on. 
36. In the **User ID** dropdown list, select ```SMATRAINING\SMAUSER```
37. Click the **Edit** button in the **Job Sub-Type** section.
38.	In the **Job Sub-Type** dropdown list select ```Command: File Rename```.	
39.	In the **Source** field, type ```C:\RMExample\File-to-be-renamed.txt```
40.	In the **Destination** field, type ```File-to-be-moved.txt```

:::tip Note

You are renaming the file! So you do not specify the whole path!

:::

41.	Click the **Save** button.
42. Click the **Save** button in the **Master Job Definition**.
43. Click the **Lock** button in the upper right-hand corner.
44. Scroll to and expand the Frequency box.
45. Select the ```Mon-Sun-O``` Frequency in the **Inactive** list and move it to the **Active** list.
46. Select the Frequency and in the **Job Information - Job Build Status** dropdown, change the status to **On Hold**.
47. Be sure to add some documentation to the Job.
48. Click the **Save** button.
49. Back in **Studio**, within the **My Windows Sub-Types Schedule**, select **Add Job** in the side menu.
50.	In the **Name** textbox, enter **File Move**.
51.	In the **Job Type** drop-down list, select ```Windows```.
52.	In the **Machine Selection** dropdown list, select the ```SMATraining``` machine for the Job to run on. 
53. In the **User ID** dropdown list, select ```SMATRAINING\SMAUSER```
54. Click the **Edit** button in the **Job Sub-Type** section.
55.	In the **Job Sub-Type** dropdown list select ```Command: File Move```.	
56.	In the **Source** field, type ```C:\RMExample\File-to-be-moved.txt```
57.	In the **Destination** field, type ```C:\Temp\File-to-be-deleted.txt```
58.	Click the **Save** button.
59. Click the **Save** button in the **Master Job Definition**.
60. Click the **Lock** button in the upper right-hand corner.
61. Scroll to and expand the Frequency box.
62. Select the ```Mon-Sun-O``` Frequency in the **Inactive** list and move it to the **Active** list.
63. Select the Frequency and in the **Job Information - Job Build Status** dropdown, change the status to **On Hold**.
64. Be sure to add some documentation to the Job.
65. Click the **Save** button.

66. Back in **Studio**, within the **My Windows Sub-Types Schedule**, select **Add Job** in the side menu.
67.	In the **Name** textbox, enter **File Delete**.
68.	In the **Job Type** drop-down list, select ```Windows```.
69.	In the **Machine Selection** dropdown list, select the ```SMATraining``` machine for the Job to run on. 
70. In the **User ID** dropdown list, select ```SMATRAINING\SMAUSER```
71. Click the **Edit** button in the **Job Sub-Type** section.
72.	In the **Job Sub-Type** dropdown list select ```Command: File Delete```.	
73.	In the **Source** field, type ```C:\Temp\File-to-be-deletd.txt```
74.	Click the **Save** button.
75. Click the **Save** button in the **Master Job Definition**.
76. Click the **Lock** button in the upper right-hand corner.
77. Scroll to and expand the Frequency box.
78. Select the ```Mon-Sun-O``` Frequency in the **Inactive** list and move it to the **Active** list.
79. Select the Frequency and in the **Job Information - Job Build Status** dropdown, change the status to **On Hold**.
80. Be sure to add some documentation to the Job.
81. Click the **Save** button.
82.	Create **Dependencies**
	* **File Delete** requires **File Move**
	* **File Move** requires **File Rename**
	* **File Rename** requires **File Copy**


**Testing the Configuration**

82.	In **Operations**, Build **My Windows Sub-Types Schedule** in a **Released** state.
83.	In **Processes**, check that all Jobs are **On Hold**.
84.	Open the folder ```C:\RMExample``` using **Windows Explorer** and check that the file ```File-to-be-copied.txt``` is there.
85.	In **Processes**, release the File **Copy Job**.
86.	Go back to **Windows Explorer** and check that the ```File-to-be-renamed``` was created.
87.	In **Processes**, release the Job **File Rename**.
88.	Go back to **Windows Explorer** and check that the ```File-to-be-renamed``` is renamed to ```File-to-be-moved```
89.	In **Processes**, release the Job **File Move**.
90.	Go back to **Windows Explorer** and check that the ```File-to-be-moved``` was moved to the ```C:\Temp``` folder and has the ```File-to-be-deleted``` name.
91.	In **Processes**, release the Job **File Delete**.
92.	Go back to **Windows Explorer** and check that the ```File-to-be-deleted``` was deleted.

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 10](../static/videobasic/U4E10.mp4)

:::


**Create a New File and a New Schedule**

1.	Go to **Windows Explorer** and create the ``C:\Temp`` and ```C:\RMExample``` folders.
2.	If not running, open **Notepad** and create a new file.
3.	Type something and save the file as ```C:\RMExample\File-to-be-copied.txt.```
4.	Close **Notepad**.
5.	Under the **Administration** topic, Double-Click on **Schedule Master**. 
6.	Click the **Add** button on the **Schedule Master** toolbar. 
7.	In the **Name** textbox, enter **My Windows Sub-Types Schedule**.
8.	In the **Documentation** textbox, enter **This is a training Schedule for Windows Sub-Type Jobs**.
9.	Keep **Monday through Friday** selected for the **Workdays per Week** for the Schedule to run.
10.	In the **Schedule Properties > Build frame**, keep the **Auto Build** unchecked.
11.	Click the **Save** button on the **Schedule Master** toolbar.
12.	Close the **Schedule Master** tab.

**Add Jobs to the New Schedule**

13.	Under the **Administration** topic, Double-Click on **Job Master**. 
14.	In the **Schedule** drop-down list, select **My Windows Sub-Types Schedule**.
15.	Click the **Add** button on the **Job Master** toolbar. 
16.	In the **Name** textbox, enter **File Copy**.
17.	In the **Job Type** drop-down list, select ```Windows```.
18.	In the **Job Sub-Type** drop-down list select ```Command: File Copy```.
19.	In the **Primary Machine** drop-down list, select the ```SMATraining``` machine for the Job to run on. 
20.	In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```
21.	In the **Source** field, type ```C:\RMExample\File-to-be-copied.txt```
22.	In the **Destination** field, type ```C:\RMExample\File-to-be-renamed.txt```
23.	Click the **Save** button on the **Job Master** toolbar.
24.	Click the **Frequency** tab.
25.	Within the **Frequency list** frame, click the Add button.
26.	On the **Frequency Definition Wizard**, keep **Use existing Frequency** selected and select ```Mon-Sun-O``` from the **Frequency** drop-down list. Then click **Next**.
27.	Click **Finish**.
28.	Under the **Job Build** Status frame, click the **On Hold** radio button.
29.	Click the **Save** button on the **Job Master** toolbar.
30.	Click the **Documentation** tab and add some documentation.
31.	Do not close the **Job Master** tab. Go to the next step.
32.	Click the **Add** button on the **Job Master** toolbar. 
33.	In the **Name** textbox, enter **File Rename**.
34.	In the **Job Type** drop-down list, select ```Windows```.
35.	In the **Job Sub-Type** drop-down list select ```Command: File Rename```.
36.	In the **Primary Machine** drop-down list, select the ```SMATraining``` machine for the Job to run on. 
37.	In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```
38.	In the **Path and Current File Name** field, type ``C:\RMExample\File-to-be-renamed.txt``
39.	In the **New File Name** field, type ```File-to-be-moved.txt```
	*	_**Note: You are renaming the file! So you do not specify the whole path!**_
40.	Click the **Save** button on the **Job Master** toolbar.
41.	Click the **Frequency** tab.
42.	Within the **Frequency list** frame, click the Add button.
43.	In the **Frequency Definition Wizard**, keep **Use existing Frequency** selected and select ```Mon-Sun-O``` from the **Frequency** drop-down list. Then click **Next**.
44.	Click **Finish**.
45.	Under the **Job Build Status** frame, click the **On Hold** radio button.
46.	Click the **Save** button on the **Job Master** toolbar.
47.	Click the **Documentation** tab and add some documentation.
48.	Click the **Add** button on the **Job Master** toolbar. 
49.	In the **Name** textbox, enter **File Move**.
50.	In the **Job Type** drop-down list, select ```Windows```.
51.	In the **Job Sub-Type** drop-down list select ```Command: File Move```.
52.	In the **Primary Machine** drop-down list, select the ```SMATraining``` machine for the Job to run on. 
53.	In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```
54.	In the **Source** field, type ```C:\RMExample\File-to-be-moved.txt```
55.	In the **Destination** field, type ```C:\Temp\File-to-be-deleted.txt```
56.	Click the **Save** button on the **Job Master** toolbar.
57.	Click the **Frequency** tab.
58.	Within the **Frequency** list frame, click the **Add** button.
59.	On the **Frequency Definition Wizard**, keep Use existing **Frequency** selected and select ```Mon-Sun-O``` from the **Frequency** drop-down list. Then click **Next**.
60.	Click **Finish**.
61.	Under the **Job Build** Status frame, click the **On Hold** radio button.
62.	Click the **Save** button on the **Job Master** toolbar.
63.	Click the **Documentation** tab and add some documentation.
64.	Click the **Add** button on the **Job Master** toolbar. 
65.	In the Name textbox, enter **File Delete**.
66.	In the **Job Type** drop-down list, select ```Windows```.
67.	In the **Job Sub-Type** drop-down list select ```Command: File Delete```.
68.	In the **Primary Machine** drop-down list, select the ```SMATraining``` machine for the Job to run on. 
69.	In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```
70.	In the **File To Delete** field, type ```C:\Temp\File-to-be-deleted.txt```
71.	Click the **Save** button on the **Job Master** toolbar.
72.	Click the **Frequency** tab.
73.	Within the **Frequency list** frame, click the **Add** button.
74.	On the **Frequency Definition Wizard**, keep **Use existing Frequency** selected and select ```Mon-Sun-O``` from the **Frequency** drop-down list. Then click **Next**.
75.	Click **Finish**.
76.	Under the **Job Build Status** frame, click the **On Hold** radio button.
77.	Click the **Save** button on the **Job Master** toolbar.
78.	Click the **Documentation** tab and add some documentation.
79.	Close the **Job Master** tab.
80.	Use **Workflow Designer** to create your **Job Dependencies**.
81.	Your **Schedule** should look like this:

![](../static/imgbasic/438.png)

**Testing the Configuration**

82.	Manually build the **My Windows Sub-Types Schedule** in a **released** state.
83.	Check that all Jobs are **On Hold**.
84.	Open the folder ```C:\RMExample``` using **Windows Explorer** and check that the file ```File-to-be-copied.txt``` is there.
85.	Go back to **Enterprise Manager** and Release the File **Copy Job**.
86.	Go back to **Windows Explorer** and check that the ```File-to-be-renamed``` was created.
87.	Go back to Enterprise Manager and Release the Job **File Rename**.
88.	Go back to **Windows Explorer** and check that the ```File-to-be-renamed``` is renamed to ```File-to-be-moved```
89.	Go back to **Enterprise Manager** and **Release** the Job **File Move**.
90.	Go back to **Windows Explorer** and check that the ```File-to-be-moved``` was moved to the ```C:\Temp``` folder and has the ```File-to-be-deleted``` name.
91.	Go back to **Enterprise Manager** and **Release** the Job **File Delete**.
92.	Go back to **Windows Explorer** and check that the ```File-to-be-deleted``` was deleted.

</details>