---
sidebar_label: 'Unit 4 Exercise 9'
---

### Exercise 9: SMA File Transfer (SMAFT)

##### Objective: 

Within **MY FIRST SCHEDULE**, create a Job named **SMAFT Job 1** with a **Job Type** of ```File Transfer```. The Source Information Machine is ```SUSEVM```.  

The **Source File** is: ```/usr/local/files/FileToSend.txt```

The **Destination Information Machine** is: ```SMATraining```. 

The **Destination File** is: ```C:\SMA File Transfer\FileToSend.txt```

For both the **Source** and **Destination Data Type**, choose ```ASCII``` and **Overwrite If File Exists**.

Be sure to give the Job a Frequency.

In Matrix View, add the Job to the Schedule and Release it to run Today. Once the Job finishes, Check the file path to be sure the file was transferred.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E9.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Under the **Administration** topic, Double-Click on **Job Master**. 
2.	In the **Schedule** drop-down list, select **My First Schedule**.
3.	Click the **Add** button on the **Job Master** toolbar. 
4.	In the **Name** textbox, enter **SMAFT Job 1**.
5.	In the **Job Type** drop-down list, select **File Transfer**.
6.	In the **Source Information Machine** drop-down list, select the ```UNIX``` machine you created earlier in this class to specify where the file is coming from. 
7.	In the **Source Information User** drop-down list, select ```0/0``` to specify who the sending machine will impersonate.
8.	In the **Source Information File** textbox, enter the following for the path and file name to Transfer:

```
/usr/local/files/FilesToSend.txt
```

9.	In the **Destination Information Machine** drop-down list, select the ```SMATraining``` machine to specify where the file is going to. 
10.	In the **Destination Information User** drop-down list, select ```SMATRAINING\SMAUSER``` to specify who the sending machine will impersonate.
11.	In the **Destination Information File** textbox, enter the following for the path and file name to Transfer: 

```
C:\SMA File Transfer\FileToSend.txt
``` 

12.	Click the **Options** Tab.
13.	In the **Source Data Type** drop-down list, select **ASCII**.
14.	In the **Destination Data Type** drop-down list, select **ASCII**.
15.	In the **If File Exists** drop-down list, select **Overwrite**.
16.	Leave the **Maximum Transfer Rate**, **Compression**, and **Encryption** alone.
17.	Click the **Save** Button.
18.	Give the Job a **Frequency** that will allow it to run Today and close the **Job Master** tab.
19.	Open the **Windows File Explorer** and check the ```C:\SMA File Transfer``` folder on the OpCon server verifying that it is **empty**.
20.	In an **Operations View** Add this Job to today’s Schedule allowing it to run Released.
21.	Once the Job finishes **OK**, verify that the ```FileToSend.txt``` is now in the ```C:\SMA File Transfer``` folder.

</details>