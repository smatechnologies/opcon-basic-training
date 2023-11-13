---
sidebar_label: 'Unit 2 Exercise 8'
---

## Exercise 8: Frequencies - All Weeks, On Occurrence, On Day

### Objective

To become familiar with the All Weeks, On Occurrence, and On Day frequencies.

### Summary

Utilizing the **Frequency Practice Schedule**, you will create three new Null jobs called:

* **All Weeks Freq**
* **On Occurrence Freq**
* **On Day Freq**

In the **All Weeks Freq** job, create a new frequency that will run every Tuesday and Thursday and on the day before in case of a holiday.

In the **On Occurrence Freq** job, create a new frequency that will run on the 4th Thursday of the month and the day before in case of a holiday.

In the **On Day Freq** job, create a new frequency named that will run on the 1st Working Day of the month.

### Instructions

1.	In **Studio**, select the **Frequency Practice** Schedule and click **View**.
2.	In the side menu, select **Add Job**.

#### Create the All Weeks Freq Job

3. In the **Name** field, enter **All Weeks Freq**.
4. Leave the **Job Type** as **Null Job**.
5. Click the **Save** button.
6. Click the **Lock** button to enter **Admin Mode**.
7. Expand the **Frequency** section, if not already expanded.
8. Click the **Add** button.
9. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```Tue+Thurs-B```.
  * In the **When to Scheduled** dop-down menu, select **All Weeks**.
  * In the **Days of the Week** section, select **Tuesday** and **Thursday**.
  * In the **A/O/B/N** section, select **Before Date**.
  * Make sure the **Day Type** is set to **Working**.
  * Click the **Save** button.
10. In the **Active** column, select the frequency then select **Forcast**.

:::tip
The **Forecast** screen should show **all Tuesday and Thursday** dates in green unless they are a holiday. If there is a Tuesday or Thursday holiday the previous day should be green.
:::

#### Create the On Occurrence Freq Job

11. Click the **Back** button to navigate back to the **Studio** workspace.
12. In the side menu, select **Add Job**.
13. In the **Name** field, enter **On Occurrence Freq**.
14. Leave the **Job Type** as **Null Job**.
15. Click the **Save** button.
16. Click the **Lock** button to enter **Admin Mode**.
17. Expand the **Frequency** section, if not already expanded.
18. Click the **Add** button.
19. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```4th-Thurs-B```.
  * In the **When to Scheduled** dop-down menu, select **On Ocurrence**.
  * In the **On Occurrence** drop-down menu, select **Fourth**.
  * In the **Period** drop-down, select **Month**.
  * In the **Days of the Week** section, select **Thursday**.
  * In the **A/O/B/N** section, select **Before Date**.
  * Make sure the **Day Type** is set to **Working**.
  * Click the **Save** button.
20. In the **Active** column, select the frequency then select **Forcast**.

:::tip
The **Forecast** screen should show the **4th Thursday of every month** should be green except for Thanksgiving. The day before Thanksgiving should be green because the 4th Thursday of Novemeber is a holiday.
:::

#### Create the On Day Freq Job

21. Click the **Back** button to navigate back to the **Studio** workspace.
22. In the side menu, select **Add Job**.
23. In the **Name** field, enter **On Day Freq**.
24. Leave the **Job Type** as **Null Job**.
25. Click the **Save** button.
26. Click the **Lock** button to enter **Admin Mode**.
27. Expand the **Frequency** section, if not already expanded.
28. Click the **Add** button.
29. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```1st-WDOM```.
  * In the **When to Scheduled** dop-down menu, select **On Day**.
  * In the **On** *X* **days of week**, enter ```1```.
  * In the **Day Type** field, select **On 1st working day**.
  * In the **A/O/B/N** section, select **On Date**.
  * Click the **Save** button.
30. In the **Active** column, select the frequency then select **Forcast**.

:::tip
The **Forecast** screen should show the **1st working day of every month** should be green _except for New Year’s Day_. Notice how holidays and weekends affect this Frequency.
:::

31. Close **Library**.
32. Close **Studio**.



## Enterprise Manager

<details>


:::tip [Walkthrough Video - Unit 2 Exercise 8](../static/videobasic/U2E8.mp4)

:::

1.	Open the **Job Master**.
2.	Select the **Frequency Practice** Schedule from the **Schedule** drop-down menu.
3.	Click the **Add** button to add a Null Job.
4.	Enter **Daily Frequency Practice** in the **Name** text field.
5.	Click the **Save** button.
6.	Repeat Steps 3-5 creating two more Null Jobs:
  *	**On Occurrence Frequency Practice**
  *	**On Day Frequency Practice**
7.	Frequency: **All Weeks**
  *	Select **Daily Frequency Practice** in the Job Name drop-down menu.
  *	Click on the **Frequency** tab.
  *	Click the **Add** button below the **Frequency List**.
  *	Click the **Create new frequency** radio button.
  *	Type **Tue+Thu-B** in the Frequency Name field.
  *	Click **Next**.
  *	Select the **All Weeks** radio button.
  *	Mark the checkboxes next to **Tuesday** and **Thursday** in the **Days of the Week** parameter.
  *	Click the **Forecast** Button.
  *	Move the **Forecast** and **Frequency Definition Wizard** screens so that you can see both.
  *	The F**orecast** screen should show all Tuesday and Thursday dates in green unless they are a holiday. If there is a Tuesday or Thursday holiday the previous day should be green.
  *	Change the **A/O/B/N** setting from **Before Date** to **After Date** and notice the change in your Forecast screen.
  *	Next change the **A/O/B/N** setting to **On Date**, and then **Not Schedule** to see what those settings do.
  *	Finally change the **A/O/B/N** back to **Before Date**.
  *	Click **Finish**
8.	Frequency: **On Occurrence**
  *	Select **On Occurrence Frequency Practice** in the Job Name drop-down menu.
  *	While in the Frequency Screen, click the **Add** button below the **Frequency List**.
  *	Click the **Create new Frequency** radio button.
  *	Type **4th-Thu-B** in the **Frequency Name** field.
  *	Click **Next**.
  *	Select the **On Occurrence** radio button.
  *	Mark the checkbox next to **Thursday** in the **Days of the Week** parameter.
  *	Select the **4th** radio button for the **On Occurrence** parameter in the lower right side of the screen.
  *	Leave the **A/O/B/N** setting on **Before Date**
  *	Click the **Forecast** Button.
  *	Move the **Forecast** and **Frequency Definition** Wizard screens so that you can see both.
  *	On the **Forecast** screen, the 4th Thursday of every month should be green except for Thanksgiving. The day before Thanksgiving should be green.
  *	Click **Finish**.
9.	Frequency: **On Day**
  *	Select **On Day Frequency Practice** in the Job Name drop-down menu
  *	While in the Frequency Screen, click the **Add** button below the **Frequency List**. 
  *	Click the **Create new Frequency** radio button.
  *	Type **1st-day-of-month-wk** in the **Frequency Name** field.
  *	Click **Next**.
  *	Select the **On Day** radio button.
  *	Leave **Month Days** set to **On ```1``` Day**.
  *	Select the **1st Working day** radio button for the **Day Type** parameter under Month Days.
  *	Click the **Forecast** Button.
  *	Move the **Forecast** and **Frequency Definition Wizard** screens so that you can see both.
  *	On the **Forecast screen**, the **1st working day of every month** should be green _except for New Year’s Day_. Notice how holidays and weekends affect this Frequency.
  *	Click **Finish**.

</details>