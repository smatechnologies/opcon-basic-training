---
sidebar_label: 'Unit 2 Exercise 12'
---

## Exercise 12: Multiple Frequencies

### Objective 

To become familiar with using Negative Frequencies and Multiple Frequencies.

### Summary

Create a new Schedule called **Multiple and Negative Frequencies** that runs Monday-Friday. In this schedule, you will have 2 jobs. One will have **multiple frequencies** where each frequency has its own **Start Offset**, and the other job will have a **Negative frequency**.

### Instructions

1.	In **Studio**, select the **Add** 
2.  In the **Name** field, enter ```Multiple and Negative Frequencies```.
3.  In the **Schedule Start Time and Work Days**, select **Monday - Friday**.
4.  Click **Save**.
5.  Close **Studio**.

#### Create the Multiple Frequency Job

6.	In **Library** > **Administration**, select **Master Job**.
7. Select **Add**.
8. In the **Schedule** field, select **Multiple and Negative Frequencies**.
9. In the **Name** field, enter ```Multiple Frequencies```.
10. In the **Job Type** drop-down, select **Null Job**.
11. Click the **Save** button.
12. Click the **Lock** button to enter **Admin Mode**.
13. Expand the **Frequency** section, if not already expanded.
14. Click the **Add** button.
15. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```15th-B```.
  * In the **When to Schedule** drop-down menu, select **On Day**.
  * In the **On** *X* **days of week**, enter ```15```.
  * In the **Day Type** field, select **On 15th day**.
  * In the **A/O/B/N** section, select **Before Date**.
  * Click the **Save** button.
16. Click the **Lock** button to enter **Admin Mode**.
17. In the **Active** column, select the frequency you just created.
18. Scroll down to the **Start Offset** field, enter ```20:00```.
19. Click **Save**.
20. Repeat **Steps 15-19**, to add a **Frequency** for the **last business day of the month** that will have a **Start Offset** of ```18:00```.
21. Click **Back** in the top right corner.

#### Create the Negative Frequency Job

22. Select **Add**.
23. In the **Schedule** field, select **Multiple and Negative Frequencies**.
24. In the **Name** field, enter ```Negative Frequencies```.
25. In the **Job Type** drop-down, select **Null Job**.
26. Click the **Save** button.
27. Click the **Lock** button to enter **Admin Mode**.
28. Expand the **Frequency** section, if not already expanded.
29. In the **Inactive** column, select the **EOM-B** frequency.
30. Using the **<** button, move it into the **Active** column.
31. In the **Active** column, select the frequency you just created.
32. Scroll down to the **Job Build Status** field, select **Do Not Schedule** from the drop-down.
33. Click **Save**.
34. Click the **Lock** button to enter **Admin Mode**.
35. In the Frequency Manager Wizard:
  * In the **Name** field, enter ```Mon-Fri-N```.
  * In the **When to Schedule** drop-down menu, select **All Weeks**.
  * In the **Days of the Week**, select **Monday-Friday**.
  * In the **A/O/B/N** section, select **Not Schedule**.
  * Click the **Save** button.
36. Close **Library**.

#### Build the Schedule for today and the End of the Month

37. In **Operations**, select **Schedule Build**.
38.	In the **From** field select the **15th** or **the working day before if the 15th is a non-working day or holiday**.
39. In the **To** field select select the same date as you did for **From**.
40. Select the **Released** radio button in the **Schedule Build** section. 
41.	In the **Schedule Selection** section, select **Multiple and Negative Frequencies**.
42.	Click the **Build** button.
43. Click the link for the **Multiple and Negative Frequencies** schedule for any date you just built out.

:::info
You should see that both jobs get built and that the **Start Time** of the **Multiple Frequency** job is **8:00 PM**.
:::

44. Repeat **Steps 37-43**  to build the schedule for the last working day of the month.

:::info
You should see only one job on the last working day of the month, the Multiple Freq job, and it should have a **Start Time** of **6:00 PM**.
:::



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