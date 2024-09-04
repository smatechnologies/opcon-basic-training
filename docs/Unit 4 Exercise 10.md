---
sidebar_label: 'Unit 4 Exercise 10'
---

## Exercise 10: File Movement

### Objective

To utilize the Windows Sub-Types to Copy, Rename, Move and Delete a file.

### Summary

You will create two directories and one file in a File Explorer window and then manipulate the movement of that file utilizing the Copy, Rename, Move and Delete sub-types.

Then you will manually release each of the jobs and monitor the movement of the file.

### Instructions

#### Create Directories and the File

1.  In a **Windows Explorer** create two directories, ```C:\Finish``` and ```C:\Start```.
2.  Open **Notepad** and create a new file.
3.  Type something in the file and save it as ```File-to-be-copied.txt``` in the **C:\Start** directory.
4.  Close **Notepad**.

#### Create the Schedule

5.  In **Library** > **Administration**, select **Master Schedules**. 
6.  Click the **Add** button.
7.  On the **Master Schedule Definition** screen:
* In the **Name** field, enter ```Windows Sub-Types Exercise```.
* In the **Documentation** field, enter in some documentation.
  * _Example: This is a training Schedule for Windows Sub-Type Jobs._
* Saturday and Sunday are **non-working days**.
* Do **NOT** configure **Auto Build**.
* Click the **Save**.
8. Click **Back**.

#### Add the Copy Job to the Schedule

9.  Utilizing the filters in the **Schedule List**, locate and select **Windows Sub-Types Exercise**.
10. Select **Add Job** in the side menu.
11. On **Master Job Definition** screen:
* In the **Name** field, enter ```File Copy```.
* In the **Job Type** dropdown, select **Windows**.
* In the **Machine Selection** dropdown, select the **SMATraining** machine for the Job to run on. 
* In the **Job Sub-Type** section, click the blue **Edit** button.
* In the **Job Sub-Type Details** pop-up window: 
  * Select **Command: File Copy**.  
  * In the **Source** field, type ```C:\Start\File-to-be-copied.txt```
  * In the **Destination** field, type ```C:\Start\File-to-be-renamed.txt```
  * Click the **Save** button.
* In the **User ID** dropdown, select **SMATRAINING\SMAUSER**
* Click the **Save**.
* Click the **Lock** button in the upper right-hand corner.
* Add some **Documentation** to the Job.
* In the **Frequency** section, move **Mon-Sun-O** from the **Inactive** column and to the **Active** column.
* Select the Frequency in the Active column and in **Job Build Status** dropdown, select **On Hold**.
* Click the **Save** button.
12. Click **Back**. 

#### Add the Rename Job to the Schedule

13. Select **Add Job** in the side menu.
14. On **Master Job Definition** screen:
* In the **Name** field, enter ```File Rename```.
* In the **Job Type** dropdown, select **Windows**.
* In the **Machine Selection** dropdown, select the **SMATraining** machine for the Job to run on. 
* In the **Job Sub-Type** section, click the blue **Edit** button.
* In the **Job Sub-Type Details** pop-up window: 
  * Select **Command: File Rename**.  
  * In the **Path and Current File Name** field, type ```C:\Start\File-to-be-renamed.txt```
  * In the **New File Name** field, type ```File-to-be-moved.txt```
  * Click the **Save** button.
* In the **User ID** dropdown, select **SMATRAINING\SMAUSER**
* Click the **Save**.
* Click the **Lock** button in the upper right-hand corner.
* Add some **Documentation** to the Job.
* In the **Frequency** section, move **Mon-Sun-O** from the **Inactive** column and to the **Active** column.
* Select the Frequency in the Active column and in **Job Build Status** dropdown, select **On Hold**.
* Click the **Save** button.
15. Click **Back**. 

:::note
You may have noticed that you only need to specify the new file name and not the entire path when using this sub-type.
:::

#### Add the Move Job to the Schedule

16. Select **Add Job** in the side menu.
17. On **Master Job Definition** screen:
* In the **Name** field, enter ```File Move```.
* In the **Job Type** dropdown, select **Windows**.
* In the **Machine Selection** dropdown, select the **SMATraining** machine for the Job to run on. 
* In the **Job Sub-Type** section, click the blue **Edit** button.
* In the **Job Sub-Type Details** pop-up window: 
  * Select **Command: File Move**.  
  * In the **Source** field, type ```C:\Start\File-to-be-moved.txt```
  * In the **Destination** field, type ```C:\Finish\File-to-be-deleted.txt```
  * Click the **Save** button.
* In the **User ID** dropdown, select **SMATRAINING\SMAUSER**
* Click the **Save**
* Click the **Lock** button in the upper right-hand corner.
* Add some **Documentation** to the Job.
* In the **Frequency** section, move **Mon-Sun-O** from the **Inactive** column and to the **Active** column.
* Select the Frequency in the Active column and in **Job Build Status** dropdown, select **On Hold**.
* Click the **Save** button.
18. Click **Back**. 

#### Add the Delete Job to the Schedule

19. Select **Add Job** in the side menu.
20. On **Master Job Definition** screen:
* In the **Name** field, enter ```File Delete```.
* In the **Job Type** dropdown, select **Windows**.
* In the **Machine Selection** dropdown, select the **SMATraining** machine for the Job to run on. 
* In the **Job Sub-Type** section, click the blue **Edit** button.
* In the **Job Sub-Type Details** pop-up window: 
  * Select **Command: File Delete**.  
  * In the **Source** field, type ```C:\Finish\File-to-be-deleted.txt```
  * Click the **Save** button.
* In the **User ID** dropdown, select **SMATRAINING\SMAUSER**
* Click the **Save**
* Click the **Lock** button in the upper right-hand corner.
* Add some **Documentation** to the Job.
* In the **Frequency** section, move **Mon-Sun-O** from the **Inactive** column and to the **Active** column.
* Select the Frequency in the Active column and in **Job Build Status** dropdown, select **On Hold**.
* Click the **Save** button.
21. Click **Back**.

#### Testing the Configuration

22. In **Operations**, build **Windows Sub-Types Exercise** in a **Released** state for today only.
23. In **Processes**, check that all Jobs are **On Hold**.
24. Open the folder ```C:\Start``` using **Windows Explorer** and check that the file ```File-to-be-copied.txt``` is there.
25. In **Processes**, release the File **Copy Job**.
26. Go back to **Windows Explorer** and check that the ```File-to-be-renamed``` was created.
27. In **Processes**, release the Job **File Rename**.
28. Go back to **Windows Explorer** and check that the ```File-to-be-renamed``` is renamed to ```File-to-be-moved```
29. In **Processes**, release the Job **File Move**.
30. Go back to **Windows Explorer** and check that the ```File-to-be-moved``` was moved to the ```C:\Finish``` folder and has the ```File-to-be-deleted``` name.
31. In **Processes**, release the Job **File Delete**.
32. Go back to **Windows Explorer** and check that the ```File-to-be-deleted``` was deleted.



## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 4 Exercise 10](../static/videobasic/U4E10.mp4)

:::


**Create a New File and a New Schedule**

1.  Go to **Windows Explorer** and create the ``C:\Finish`` and ```C:\Start``` folders.
2.  If not running, open **Notepad** and create a new file.
3.  Type something and save the file as ```C:\Start\File-to-be-copied.txt.```
4.  Close **Notepad**.
5.  Under the **Administration** topic, Double-Click on **Schedule Master**. 
6.  Click the **Add** button on the **Schedule Master** toolbar. 
7.  In the **Name** field, enter **Windows Sub-Types Exercise**.
8.  In the **Documentation** field, enter **This is a training Schedule for Windows Sub-Type Jobs**.
9.  Keep **Monday through Friday** selected for the **Workdays per Week** for the Schedule to run.
10.  In the **Schedule Properties > Build frame**, keep the **Auto Build** unchecked.
11.  Click the **Save** button on the **Schedule Master** toolbar.
12.  Close the **Schedule Master** tab.

**Add Jobs to the New Schedule**

13.  Under the **Administration** topic, Double-Click on **Job Master**. 
14.  In the **Schedule** drop-down list, select **Windows Sub-Types Exercise**.
15.  Click the **Add** button on the **Job Master** toolbar. 
16.  In the **Name** field, enter **File Copy**.
17.  In the **Job Type** drop-down list, select ```Windows```.
18.  In the **Job Sub-Type** drop-down list select ```Command: File Copy```.
19.  In the **Primary Machine** drop-down list, select the ```SMATraining``` machine for the Job to run on. 
20.  In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```
21.  In the **Source** field, type ```C:\Start\File-to-be-copied.txt```
22.  In the **Destination** field, type ```C:\Start\File-to-be-renamed.txt```
23.  Click the **Save** button on the **Job Master** toolbar.
24.  Click the **Frequency** tab.
25.  Within the **Frequency list** frame, click the Add button.
26.  On the **Frequency Definition Wizard**, keep **Use existing Frequency** selected and select ```Mon-Sun-O``` from the **Frequency** drop-down list. Then click **Next**.
27.  Click **Finish**.
28.  Under the **Job Build** Status frame, click the **On Hold** radio button.
29.  Click the **Save** button on the **Job Master** toolbar.
30.  Click the **Documentation** tab and add some documentation.
31.  Do not close the **Job Master** tab. Go to the next step.
32.  Click the **Add** button on the **Job Master** toolbar. 
33.  In the **Name** field, enter **File Rename**.
34.  In the **Job Type** drop-down list, select ```Windows```.
35.  In the **Job Sub-Type** drop-down list select ```Command: File Rename```.
36.  In the **Primary Machine** drop-down list, select the ```SMATraining``` machine for the Job to run on. 
37.  In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```
38.  In the **Path and Current File Name** field, type ``C:\Start\File-to-be-renamed.txt``
39.  In the **New File Name** field, type ```File-to-be-moved.txt```
  *  _**Note: You are renaming the file! So you do not specify the whole path!**_
40.  Click the **Save** button on the **Job Master** toolbar.
41.  Click the **Frequency** tab.
42.  Within the **Frequency list** frame, click the Add button.
43.  In the **Frequency Definition Wizard**, keep **Use existing Frequency** selected and select ```Mon-Sun-O``` from the **Frequency** drop-down list. Then click **Next**.
44.  Click **Finish**.
45.  Under the **Job Build Status** frame, click the **On Hold** radio button.
46.  Click the **Save** button on the **Job Master** toolbar.
47.  Click the **Documentation** tab and add some documentation.
48.  Click the **Add** button on the **Job Master** toolbar. 
49.  In the **Name** field, enter **File Move**.
50.  In the **Job Type** drop-down list, select ```Windows```.
51.  In the **Job Sub-Type** drop-down list select ```Command: File Move```.
52.  In the **Primary Machine** drop-down list, select the ```SMATraining``` machine for the Job to run on. 
53.  In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```
54.  In the **Source** field, type ```C:\Start\File-to-be-moved.txt```
55.  In the **Destination** field, type ```C:\Finish\File-to-be-deleted.txt```
56.  Click the **Save** button on the **Job Master** toolbar.
57.  Click the **Frequency** tab.
58.  Within the **Frequency** list frame, click the **Add** button.
59.  On the **Frequency Definition Wizard**, keep Use existing **Frequency** selected and select ```Mon-Sun-O``` from the **Frequency** drop-down list. Then click **Next**.
60.  Click **Finish**.
61.  Under the **Job Build** Status frame, click the **On Hold** radio button.
62.  Click the **Save** button on the **Job Master** toolbar.
63.  Click the **Documentation** tab and add some documentation.
64.  Click the **Add** button on the **Job Master** toolbar. 
65.  In the Name field, enter **File Delete**.
66.  In the **Job Type** drop-down list, select ```Windows```.
67.  In the **Job Sub-Type** drop-down list select ```Command: File Delete```.
68.  In the **Primary Machine** drop-down list, select the ```SMATraining``` machine for the Job to run on. 
69.  In the **User ID** drop-down list, select ```SMATRAINING\SMAUSER```
70.  In the **File To Delete** field, type ```C:\Finish\File-to-be-deleted.txt```
71.  Click the **Save** button on the **Job Master** toolbar.
72.  Click the **Frequency** tab.
73.  Within the **Frequency list** frame, click the **Add** button.
74.  On the **Frequency Definition Wizard**, keep **Use existing Frequency** selected and select ```Mon-Sun-O``` from the **Frequency** drop-down list. Then click **Next**.
75.  Click **Finish**.
76.  Under the **Job Build Status** frame, click the **On Hold** radio button.
77.  Click the **Save** button on the **Job Master** toolbar.
78.  Click the **Documentation** tab and add some documentation.
79.  Close the **Job Master** tab.
80.  Use **Workflow Designer** to create your **Job Dependencies**.
81.  Your **Schedule** should look like this:

![](../static/imgbasic/438.png)

**Testing the Configuration**

82.  Manually build the **Windows Sub-Types Exercise** in a **released** state.
83.  Check that all Jobs are **On Hold**.
84.  Open the folder ```C:\Start``` using **Windows Explorer** and check that the file ```File-to-be-copied.txt``` is there.
85.  Go back to **Enterprise Manager** and Release the File **Copy Job**.
86.  Go back to **Windows Explorer** and check that the ```File-to-be-renamed``` was created.
87.  Go back to Enterprise Manager and Release the Job **File Rename**.
88.  Go back to **Windows Explorer** and check that the ```File-to-be-renamed``` is renamed to ```File-to-be-moved```
89.  Go back to **Enterprise Manager** and **Release** the Job **File Move**.
90.  Go back to **Windows Explorer** and check that the ```File-to-be-moved``` was moved to the ```C:\Finish``` folder and has the ```File-to-be-deleted``` name.
91.  Go back to **Enterprise Manager** and **Release** the Job **File Delete**.
92.  Go back to **Windows Explorer** and check that the ```File-to-be-deleted``` was deleted.

</details>