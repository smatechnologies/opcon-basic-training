---
sidebar_label: 'Unit 2 Exercise 11'
---

## Exercise 11: Looping Jobs

### Objective 

To become utilize the Restart setting to create a Looping Job.

### Summary

Utilizing the schedule, **My First Schedule**, you will add a looping job that will restart multiple times after each run **Finishes OK**.

### Instructions

#### Create a Looping Job
1.	In **Studio**, select the **My First Schedule** 
2.	Click the **View** button.
3.	In the side menu, select **Add Job**.
4.  Validate that **My First Schedule** is in the Schedule field.
4.	In the **Name** textbox, enter ```Looping Job```.
10. In the **Job Type** drop-down, select **Windows**.
11. Expand the **Task Details** section to open the Details box.
12. In the **Machine Selection** section, select the **SMATraining** machine from the **Machines or Machine Group** drop down.
13. In the **General** section, select **SMATRAINING\SMAUSER** from the **User Id** drop down.
14. Under the **Run** section, type the following in the **Command Line** box:.
```cmd
"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10
```
15. Click the **Save** button.
16. Click the **Lock** button to enter **Admin Mode**.
17. Expand the **Frequency** section, if not already expanded.
18. Select the **Example-Mon-Sun-0** frequency in the **Inactive** column.
19. Using the **<** move the frequency into the **Active** column.
20. In the **Active** column, select the frequency you just added.
21. Scroll down to the **When Job Finishes Ok** section
  * In the **Run Again** drop-down, select **Restart Offset**.
  * In the **Run Interval** drop down, select **Minutes from Start to Start**.
  * In the **Value** field, enter ```15```.
  * In the **Number of Runs** field, enter ```4```.
22. Click **Save**.
23. Close **Studio**.

#### Add the Job to the Daily

24. In **Operations**, click on **Processes** in the top right corner.
25. In the **Date** section, select today's date.
26. In the **Schedule** section, right-click on **My First Schedule**.
27. In the **Schedule Selection** window, click the **+** sign.
28. In the **Add Job(s) for...** pop-up window, select the **Looping Job** and click **Next**.
29. On the next screen, click the **Release** radial button then click **Next**.
30. On the next screen, click **Submit**.
31. Click **Close**.
32. In the **Job** section, you should see the job and it should run successfully. 

:::info
The Looping Job will probably look like it is stuck in the "Wait Start Time" state but if you look at the **Return Code** column, you should see all zeros (0000000000).
:::

33. Close **Operations**.

## Enterprise Manager

<details>

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U2E11.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->

:::tip [Walkthrough Video - Unit 2 Exercise 11](../static/videobasic/U2E11.mp4)

:::

1.	**Multiple Frequencies**
  *	Create a new Schedule.
  *	Add a Null Job and setup Frequencies allowing a Job to run on the 15th of the month (working day before) and the last business day of the month.
    * Schedule - 5 Day Work Week
    * The Job runs at ```20:00``` when it is not the last day of the month and ```18:00``` when it is the last business day of the month.
  *	Use the Forecast All Button to view both Frequencies.
    * The first listed will be Green and the second will be Yellow. 
2.	**Negative Frequencies**
  *	In a new Null Job (same Schedule), set up Frequencies allowing the Job to run every day of the month, Monday through Friday, unless it is a Holiday or the last Day of the Month.
  *	Use the Forecast All Button to view both Frequencies.
  
  :::note
  The Negative Frequency will appear purple
  :::

</details>