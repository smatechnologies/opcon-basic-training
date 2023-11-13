---
sidebar_label: 'Unit 2 Exercise 6'
---

## Exercise 6: Create a UNIX Job

### Objective

To define a UNIX job and run it successfully.

### Summary

Create a ```UNIX``` job in **MY FIRST SCHEDULE** called **UNIX Job 1**. This job will run as ```0/0``` and execute the UNIX version of ```genericp```, called ```genericpgm``` for 20 seconds

### Instructions

#### Defining the job

1.	In **Studio**, select **My First Schedule**.
2.	Click the **View** button.
3.	In the side menu, select **Add Job**.
4.  Validate that **My First Schedule** is in the Schedule field.
4.	In the **Name** textbox, enter ```UNIX Job 1```.
5.	In the **Job Type** drop-down list, select **UNIX**.
6.	In the **Machine Selection** > **Machines or Machine Group** drop-down list, select the **SUSEVM** machine for the Job to run on. 
7.	In the **General** > **User ID** drop-down list, select ```0/0```
8.	In the **Run** > **Start Image** field, type: 

```cmd
/usr/local/lsam/bin/genericpgm
```

9.	In the **Run** > **Parameters** section, enter:  

```cmd
–t20 –e0
```

10.	Click the **Save** button
11. Click the **Lock** icon in the upper right-hand corner.
12.	Select the **Frequency** tab.   
13.	Select **Example-Mon-Sun-O** in the Inactive list.
14. Move the Frequency to the Active List using the **<** button.
15.	Expand the **Documentation** tab and enter in some documentation
  * Example: This is a UNIX training job.
16.	Click the **Save** button.
17. Close **Library**.
18. Close **Studio**.

#### Add the Job to the Daily and Execute It

19. In **Operations**, click on **Processes** in the top right corner.
20. In the **Date** section, select today's date.
21. In the **Schedule** section, right-click on **My First Schedule**.
22. In the **Schedule Selection** window, click the **+** sign.
23. In the **Add Job(s) for...** pop-up window, select the **UNIX Job 1** and click **Next**.
24. On the next screen, click the **Release** radial button then click **Next**.
25. On the next screen, click **Submit**.
26. Click **Close**.
27. In the **Job** section, you should see the job and it should run successfully.
28. Close **Operations**.



## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 2 Exercise 6](../static/videobasic/U2E6.mp4)

:::

**_Scenario: You will create 1 UNIX Job in OpCon to run the same program in the previous exercise_**.

1.	Under the **Administration** topic, Double-Click on **Job Master**. 
2.	In the **Schedule** drop-down list, select **My First Schedule**.
3.	Click the **Add** button on the **Job Maste**r toolbar. 
4.	In the **Name** textbox, enter ```UNIX Job 1```.
5.	In the **Job Type** drop-down list, select **UNIX**.
6.	In the **Primary Machine** drop-down list, select the **SUSEVM** machine for the Job to run on. 
7.	In the User ID drop-down list, select ```0/0```
8.	In the **Start Image** field, type: 

```
/usr/local/lsam/bin/genericpgm
```

9.	In the **Parameters** section, enter:  

```
–t20 –e0
```

10.	Click the **Save** button on the **Job Master** toolbar.
11.	Inside the **Job Master** screen under **Job Properties**, click on the **Frequency** tab.   
12.	Within the **Frequency** list frame, click the **Add** button.
13.	Click inside the option button to **Use existing Frequency**.
  *	In the **Frequency** drop-down list, select ```Example-Mon-Sun-O```.
  *	Click **Next**
  *	Click the **Finish** button.
14.	Click on the **Documentation** tab and enter **This is a UNIX training Job**.
15.	Click the **Save** button on the Job Master toolbar.
16.	Close the **Job Master**.

</details>