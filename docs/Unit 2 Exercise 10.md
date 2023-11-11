---
sidebar_label: 'Unit 2 Exercise 10'
---

## Exercise 10: Frequencies - On Interval and Annual Plan Calendar

### Objective

To become familiar with the Interval and Annual Plan frequencies.

### Summary

Utilizing the **Frequency Practice Schedule**, you will create three new Null jobs called:

* **On Interval Freq**
* **Annual Plan Freq**
* **Annual Plan Plus One Freq**

In the **On Interval Freq** job, create a new frequency that will run on the 15th and 30th of every month or on the day before in case of a holiday.

In the **Annual Plan Freq** job, create a new frequency that will utilize a custom calendar.

In the **Annual Plan Plus One Freq** job, create a new frequency that will utilize a custom calendar with a day offset of one.

### Instructions

1.	In **Studio**, select the **Frequency Practice** Schedule and click **View**.
2.	In the side menu, select **Add Job**.

#### Create the On Interval Freq Job

3. In the **Name** field, enter **All Weeks Freq**.
4. Leave the **Job Type** as **Null Job**.
5. Click the **Save** button.
6. Click the **Lock** button to enter **Admin Mode**.
7. Expand the **Frequency** section, if not already expanded.
8. Click the **Add** button.
9. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```15th+30th-B```.
  * In the **When to Scheduled** dop-down menu, select **On Intervals**.
  * In the **On Intervals** section, check the boxes for **15** and **30**.
  * In the **A/O/B/N** section, select **Before Date**.
  * Make sure the **Day Type** is set to **Working**.
  * Click the **Save** button.
10. In the **Active** column, select the frequency then select **Forcast**.

:::tip
The **Forecast** screen should show the **15th and 30th days of each month** as green. If the 15th or 30th is a holiday the previous working day should be green.
:::

#### Create the Annual Plan Freq Job

11. Click the **Back** button to navigate back to the **Studio** workspace.
12. In the side menu, select **Add Job**.
13. In the **Name** field, enter **Annual Plan Freq**.
14. Leave the **Job Type** as **Null Job**.
15. Click the **Save** button.
16. Click the **Lock** button to enter **Admin Mode**.
17. Expand the **Frequency** section, if not already expanded.
18. Click the **Add** button.
19. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```Annual```.
  * In the **When to Scheduled** dop-down menu, select **Annual Plan**.
  * In the **Calendar** drop-down menu, select **Master Calendar**.
  * In the **A/O/B/N** section, select **Before Date**.
  * Click the **Save** button.
20. In the **Active** column, select the frequency then select **Forcast**.

:::tip
The **Forecast** screen should show the **date you selected in Exercise 7** as green.
:::

#### Create the Annual Plan Plus One Freq Job

11. Click the **Back** button to navigate back to the **Studio** workspace.
12. In the side menu, select **Add Job**.
13. In the **Name** field, enter **Annual Plan Plus One Freq**.
14. Leave the **Job Type** as **Null Job**.
15. Click the **Save** button.
16. Click the **Lock** button to enter **Admin Mode**.
17. Expand the **Frequency** section, if not already expanded.
18. Click the **Add** button.
19. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```Annual+1```.
  * In the **When to Scheduled** dop-down menu, select **Annual Plan**.
  * In the **Calendar** drop-down menu, select **My First Calendar**.
  * in the **Offset Days**, enter ```1```.
  * In the **A/O/B/N** section, select **Before Date**.
  * Click the **Save** button.
20. In the **Active** column, select the frequency then select **Forcast**.

:::tip
The **Forecast** screen should show the **date you selected in Exercise 7** as green.
:::

31. Close **Library**.
32. Close **Studio**.

## Enterprise Manager

<details>

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U2E10.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->


:::tip [Walkthrough Video - Unit 2 Exercise 10](../static/videobasic/U2E10.mp4)

:::

1.	Open the **Job Master**.
2.	Select **Frequency Practice Schedule** from the **Schedule** drop-down menu.
3.	Click the **Add** button.
4.	Enter **On Interval Frequency Practice** in the **Name** text field.
5.	Click the **Save** button.
6.	Repeat Steps 3-5 creating the following Jobs:
  *	**Annual Frequency Practice**.
  *	**Annual Plan Frequency with Offsets**.
7.	Frequency: **On Interval**
  *	Select **On Interval Frequency Practice** in the Job Name drop-down menu
  *	While in the **Frequency** Screen, click the **Add** button below the **Frequency List**. 
  *	Click the **Create new Frequency** radio button.
  *	Type **Every-15thand30th-B** in the **Frequency Name** field.
  *	Click **Next**.
  *	Select the **On Intervals** radio button.
  *	Mark the checkboxes for the ```15``` and ```30``` under the **On Intervals** parameter.
  *	Change the **A/O/B/N** setting from **On Date** to **Before Date**. 
  *	Click the **Forecast** Button.
  *	Move the **Forecast** and **Frequency Definition Wizard** screens so that you can see both.
  *	On the **Forecast** screen, the **15th and 30th days** of each month are green, moving **“Before”** for holidays and weekends and holidays.
  *	Click **Finish**.
8.	Frequency: **Annual Plan**
  *	Click on **Calendars** from the **Navigation Panel**.
  *	Click the **Add** Button.
  *	Type **Company Holiday Calendar** in the **Name** field.
  *	Enter **Documentation** like: **This Calendar will be used in an Annual Plan Frequency**.
  *	Click the **Save** Button.
  *	Click several dates in the Calendar.
    * Note: The dates are saved dynamically
  *	Click the **right arrow** by the **Month** right above the Calendar to go to the next months.
  *	Click the **down arrow** by the **Year** right above the Calendar to move to the next year.
  *	Close the **Calendars** tab.
  *	Open the **Job Master**.
  *	Select the **Frequency Practice Schedule** from the Schedule drop-down menu.
  *	Click the **Add** button.
  *	Enter **Annual Plan Frequency** in the Name text field.
  *	Click the **Save** button.
  *	Click on the **Frequency** tab.
  *	Click the **Add** button below the Frequency List.
  *	Click the **Create new Frequency** radio button.
  *	Type **CompanyHoliday** in the **Frequency Name** field.
  *	Click **Next**.
  *	In the **When to Schedule** section, click the **Annual Plan** radio button.
  *	From the **Calendar** drop-down menu, select the **Company Holiday Calendar**.
  *	Click **Forecast** to view the Frequency.
    * The dates should match those you entered in the Calendar.
  *	Click **Ok**.
  *	Click **Finish**.
9.	Frequency: **Annual Plan with Offsets**
  *	Select **Annual Plan Frequency with Offsets** in the Job Name drop-down menu
  *	While in the Frequency Screen, click the **Add** button below the **Frequency List**. 
  *	Click the **Create new Frequency** radio button.
  *	Type **CompanyHoliday+1** in the **Frequency Name** field.
  *	Click **Next**.
  *	In the **When to Schedule** section, click the **Annual Plan** radio button.
  *	From the **Calendar** drop-down menu, select the **Company Holiday Calendar**.
  *	In the **Offset Days** box enter the number ```1```.
  *	Click **Forecast** to view the Frequency. 
  *	The dates selected should be the next working day of the dates selected in the Calendar.
  * Click **Ok**.
  *	Click **Finish**.
  *	Close the **Job Master** tab.

</details>