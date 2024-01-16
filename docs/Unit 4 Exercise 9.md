---
sidebar_label: 'Unit 4 Exercise 9'
---

## Exercise 9: SMA File Transfer (SMAFT)

### Objective

To move a file from a UNIX host to a Windows server using protocol SMA File Transfer (SMAFT).

#### Summary

To add a **File Transfer** job to **My First Schedule**. This job will move a file from your **SUSEVM** to your **SMATraining** machine.

## Instructions

#### Create the SMAFT Job

1.  In **Library** > **Administration**, select **Master Jobs**.
2.  Click **ADD**.
3.  On the **Master Job Definition** screen:
* In the **Schedule** drop-down, select **My First Schedule**.
* In the **Name** field, enter ```SMAFT Job 1```.
* In the **Job Type** dropdown list, select **File Transfer**.
* In the **Source** section:
  * In the **Machine** dropdown, select the **SUSEVM**
  * In the **User** dropdown, select **0/0**.
  * In the **File** field, enter ```/usr/local/files/FilesToSend.txt```.
  * In the **Data Type** drop-down, select **ASCII**.
* In the **Destination**s section:
  * In the **Machine** dropdown, select the **SMATraining**
  * In the **User** dropdown, select **SMATRAINING\SMAUSER**.
  * In the **File** field, enter ```C:\SMA File Transfer\FilesToSend.txt```.
  * In the **Data Type** drop-down, select **ASCII**.
* In the **Options** section:
  * In the **If File Exists** dropdown, select **Overwrite**.
  * Leave the other options alone.
* Click the **Save** Button.
* Click the **Lock** icon.
* Give the Job a **Frequency** that will allow it to run Today and close the **Job Master** tab.
  * _Example: Example-Mon-Sun-O or Mon-Fri-N_
* Click **Save**
4.  Close **Library**

#### Validate the Directory is Empty

5.  Open the **Windows File Explorer** Window
6.  Navigate to **C:\SMA File Transfer**.
7.  Verifying that the directory is empty.

#### Build the Job
8.  Back in Solution Manager, in **Processes** screen, locate today's instance of **My First Schedule**
9. In the **Schedule Selection** side panel, click **+**
10. Walk through the **Add Job** pop-up window to add **SMAFT Job 1** to today and allow it to run. 

#### Validate the File was Moved.
13. Once the Job completes with a **Finished **OK** status, Open the **Windows File Explorer** Window
14. Navigate to **C:\SMA File Transfer**.
15. Verifying that the directory is no longer empty and that the file, **FilesToSend.txt** is now there.

## Enterprise Manager

<details>

### Instructions

:::tip [Walkthrough Video - Unit 4 Exercise 9](../static/videobasic/U4E9.mp4)
:::

1.  Under the **Administration** topic, Double-Click on **Job Master**. 
2.  In the **Schedule** drop-down list, select **My First Schedule**.
3.  Click the **Add** button on the **Job Master** toolbar. 
4.  In the **Name** field, enter **SMAFT Job 1**.
5.  In the **Job Type** drop-down list, select **File Transfer**.
6.  In the **Source Information Machine** drop-down list, select the ```UNIX``` machine you created earlier in this class to specify where the file is coming from. 
7.  In the **Source Information User** drop-down list, select ```0/0``` to specify who the sending machine will impersonate.
8.  In the **Source Information File** field, enter the following for the path and file name to Transfer:
```
/usr/local/files/FilesToSend.txt
```
9.  In the **Destination Information Machine** drop-down list, select the ```SMATraining``` machine to specify where the file is going to. 
10.  In the **Destination Information User** drop-down list, select ```SMATRAINING\SMAUSER``` to specify who the sending machine will impersonate.
11.  In the **Destination Information File** field, enter the following for the path and file name to Transfer: 
```
C:\SMA File Transfer\FilesToSend.txt
``` 
12.  Click the **Options** Tab.
13.  In the **Source Data Type** drop-down list, select **ASCII**.
14.  In the **Destination Data Type** drop-down list, select **ASCII**.
15.  In the **If File Exists** drop-down list, select **Overwrite**.
16.  Leave the **Maximum Transfer Rate**, **Compression**, and **Encryption** alone.
17.  Click the **Save** Button.
18.  Give the Job a **Frequency** that will allow it to run Today and close the **Job Master** tab.
19.  Open the **Windows File Explorer** and check the ```C:\SMA File Transfer``` folder on the OpCon server verifying that it is **empty**.
20.  In an **Operations View** Add this Job to today’s Schedule allowing it to run Released.
21.  Once the Job finishes **OK**, verify that the ```FilesToSend.txt``` is now in the ```C:\SMA File Transfer``` folder.

</details>
