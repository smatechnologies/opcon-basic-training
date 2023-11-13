---
sidebar_label: 'Unit 2 Exercise 11'
---

## Exercise 11: Multiple Frequencies

### Objective 

To become familiar with using Negative Frequencies, Multiple Frequencies, and Looping Jobs.

### Summary

Create a new Schedule called **Multiple and Negative Frequencies** that runs Monday-Friday. In this schedule, you will have 3 jobs in this scheduled. One will loop when it **Finishes OK**, one will have **multiple frequencies** and each frequency will have its own **Start Offset**, and the last job will have a **Negative frequency**.

### Instructions

1.	In **Studio**, select the **Add** 
2.  In the **Name** field, enter ```Multiple and Negative Frequencies```.
3.  In the **Schedule Start Time and Work Days**, select **Monday - Friday**.
4.  Click **Save**.
5.  Close **Studio**.

#### Create a Looping Job

6.	In **Library** > **Administration**, select **Master Job**.
7.  Select **Add**.
8.  In the **Schedule** field, select **Multiple and Negative Frequencies**.
9.  In the **Name** field, enter ```Looping Job```.
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
23. Click **Back** in the top right corner.

#### Create the Multiple Frequency Job

24.	In **Library** > **Administration**, select **Master Job**.
25. Select **Add**.
26. In the **Schedule** field, select **Multiple and Negative Frequencies**.
27. In the **Name** field, enter ```Multiple Frequencies```.
28. In the **Job Type** drop-down, select **Null Job**.
29. Click the **Save** button.
30. Click the **Lock** button to enter **Admin Mode**.
31. Expand the **Frequency** section, if not already expanded.
32. Click the **Add** button.
33. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```15th-B```.
  * In the **When to Scheduled** dop-down menu, select **On Day**.
  * In the **On** *X* **days of week**, enter ```15```.
  * In the **Day Type** field, select **On 15th day**.
  * In the **A/O/B/N** section, select **Before Date**.
  * Click the **Save** button.
34. Click the **Lock** button to enter **Admin Mode**.
35. In the **Active** column, select the frequency you just created.
36. Scroll down to the **Start Offset** field, enter ```20:00```.
37. Click **Save**.
38. Repeat Steps 32-37, to add a **Frequency** for the **last business day of the month** that will have a **Start Offset** of ```18:00```.
39. Click **Back** in the top right corner.

#### Create the Negative Frequency Job

40. Select **Add**.
41. In the **Schedule** field, select **Multiple and Negative Frequencies**.
42. In the **Name** field, enter ```Negative Frequencies```.
43. In the **Job Type** drop-down, select **Null Job**.
44. Click the **Save** button.
45. Click the **Lock** button to enter **Admin Mode**.
46. Expand the **Frequency** section, if not already expanded.
47. Click the **Add** button.
48. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```EOM-O```.
  * In the **When to Scheduled** dop-down menu, select **End of Period**.
  * In the **Period** field, select **Month**.
  * In the **A/O/B/N** section, select **On Date**.
  * Click the **Save** button.
49. Click the **Lock** button to enter **Admin Mode**.
50. In the **Active** column, select the frequency you just created.
51. Scroll down to the **Job Build Status** field, select **Do Not Schedule** from the drop-down.
52. Click **Save**.
53. Repeat Steps 47-48, to add a **Frequency** for Monday - Friday and won't run on holidays. You can use an Inactive frequency if you already have one that meets this criteria.
54. Close **Library**.

#### Build the Schedule for today and the End of the Month

55. In **Operations**, select **Schedule Build**.
56.	In the **From** field select the **15th** or **the working day before if the 15th is a non-working day or holiday**.
57. In the **To** field select select the **15th** or **the working day before if the 15th is a non-working day or holiday**.
58. Select the **Released** radio button in the **Schedule Build** section. 
59.	In the **Schedule Selection** section, select **Multiple and Negative Frequencies**.
60.	Click the **Build** button.
61. Click the link for the **Multiple and Negative Frequencies** schedule for any date you just built out.

:::info
You should see that all three jobs built out and that the **Start Time** of the **Multiple Freqency** job is **8:00 PM**.
:::

62. Repeat **Steps 37-43**  to build the schedule for the last working day of the month.

:::info
You should see only two job on the last working day of the month, the Looping Job and the Multiple Freq job, and the **Multiple Frequency** jobshould have a **Start Time** of **6:00 PM**.
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