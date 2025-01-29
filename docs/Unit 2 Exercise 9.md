---
sidebar_label: 'Unit 2 Exercise 9'
---

## Exercise 9: Frequencies - On Request & Beginning, Middle, End of Period

### Objective

To become familiar with the On Request, Begining, Middle, and End of Period frequencies.

### Summary

Utilizing the **Frequency Practice Schedule**, you will create four new Null jobs called:

* **On Request Freq**
* **Beginning of Period Freq**
* **Middle of Period Freq**
* **End of Period Freq**

In the **On Request Freq** job, create a new frequency that will be used to add jobs dynamically to a schedule.

In the **Beginning of Period Freq** job, create a new frequency that will run on the 1st Working Day (WD) of the month or the day after in case of a holiday.

In the **Middle of Period Freq** job, create a new frequency named that will run on the Wednesday closest to the middle of the month or the day after in case of a holiday.

In the **End of Period Freq** job, create a new frequency named that will run on the last Working Day (WD) of the month or the day before in case of a holiday.

### Instructions
1.	In **Studio**, select the **Frequency Practice** Schedule and click **View**.
2.	In the side menu, select **Add Job**.

#### Create the On Request Freq Job
3. In the **Name** field, enter **On Request Freq**.
4. Leave the **Job Type** as **Null Job**.
5. Click the **Save** button.
6. Click the **Lock** button to enter **Admin Mode**.
7. Expand the **Frequency** section, if not already expanded.
8. Click the **Add** button.
9. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```OnRequest```.
  * In the **When to Schedule** drop-down menu, select **On Request**.
  * In the **Request Date** field, select a date on the calendar that is in the past.
  * Click the **Save** button.
10. In the **Active** column, select the frequency then select **Forecast**.

:::tip
The **Forecast** screen should show only the date that you chose in green.
:::

11. Click the **Back** button to navigate back to the **Studio** workspace.

#### Create the Beginning of Period Freq Job
12. In the side menu, select **Add Job**.
13. In the **Name** field, enter **Beginning of Period Freq**.
14. Leave the **Job Type** as **Null Job**.
15. Click the **Save** button.
16. Click the **Lock** button to enter **Admin Mode**.
17. Expand the **Frequency** section, if not already expanded.
18. Click the **Add** button.
19. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```BOM-A```.
  * In the **When to Schedule** drop-down menu, select **Beg of Period**.
  * In the **Period** drop-down, select **Month**.
  * In the **A/O/B/N** section, select **After Date**.
  * Make sure the **Day Type** is set to **Working**.
  * Click the **Save** button.
20. In the **Active** column, select the frequency then select **Forecast**.

:::tip
The **Forecast** screen should show the **first working day of every month** as green. Notice how holidays and weekends affect this Frequency.
:::

21. Click the **Back** button to navigate back to the **Studio** workspace.

#### Create the Middle of Period Freq Job
22. In the side menu, select **Add Job**.
23. In the **Name** field, enter **Middle of Period Freq**.
24. Leave the **Job Type** as **Null Job**.
25. Click the **Save** button.
26. Click the **Lock** button to enter **Admin Mode**.
27. Expand the **Frequency** section, if not already expanded.
28. Click the **Add** button.
29. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```Mid-Wed-A```.
  * In the **When to Schedule** drop-down menu, select **Mid of Period**.
  * In the **Period** drop-down, select **Month**.
  * In the **Days of the Week** field, select **Wednesday**.
  * In the **A/O/B/N** section, select **After Date**.
  * Make sure the **Day Type** is set to **Working**.
  * Click the **Save** button.
30. In the **Active** column, select the frequency then select **Forecast**.

:::tip
The **Forecast** screen should show the **Wednesday closest to the middle of every month** as green. Notice how holidays and weekends affect this Frequency.
:::

31. Click the **Back** button to navigate back to the **Studio** workspace.

#### Create the End of Period Freq Job
32. In the side menu, select **Add Job**.
33. In the **Name** field, enter **End of Period Freq**.
34. Leave the **Job Type** as **Null Job**.
35. Click the **Save** button.
36. Click the **Lock** button to enter **Admin Mode**.
37. Expand the **Frequency** section, if not already expanded.
38. Click the **Add** button.
39. In the **Frequency Manager Wizard**:
  * In the **Name** field, enter ```EOM-B```.
  * In the **When to Schedule** drop-down menu, select **End of Period**.
  * In the **Period** drop-down, select **Month**.
  * In the **A/O/B/N** section, select **Before Date**.
  * Make sure the **Day Type** is set to **Working**.
  * Click the **Save** button.
40. In the **Active** column, select the frequency then select **Forecast**.

:::tip
The **Forecast** screen should show the **last working day of every month** as green. Notice how holidays and weekends affect this Frequency.
:::

41. Close **Library**.
42. Close **Studio**.



## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 2 Exercise 9](../static/videobasic/U2E9.mp4)

:::


1.	Open the **Job Master**.
2.	Select **Frequency Practice** Schedule from the **Schedule** drop-down menu.
3.	Click the **Add** button.
4.	Enter **On Request Frequency Practice** in the **Name** text field.
5.	Click the **Save** button.
6.	Repeat Steps 3-5 creating three Null Jobs:
  *	**Begin of Period Frequency Practice**
  *	**Mid of Period Frequency Practice**
  *	**End of Period Frequency Practice**
7.	Frequency: **On Request**
  *	Select **On Request Frequency Practice** in the Job Name drop-down menu
  *	While in the Frequency Screen, click the **Add** button below the **Frequency List**. 
  *	Click the **Create new Frequency** radio button.
  *	Type **OnRequest** in the **Frequency Name **field.
  *	Click **Next**.
  *	Select the **On Request** radio button.
  *	Select **January 3rd** for the **Request Date**.
  *	Leave the **A/O/B/N** setting on **On Date**.
  *	Click the **Forecast** Button.
  *	Move the Forecast and **Frequency Definition Wizard** screens so that you can see both.
  *	On the **Forecast** screen, only **January 3rd** for this year should be green. 
  *	Click **Finish**.
8.	Frequency: **Begin of Period**
  *	Select **Begin of Period Frequency Practice** in the Job Name drop-down menu.
  *	While in the Frequency Screen, click the **Add** button below the **Frequency List**. 
  *	Click the Create new **Frequency** radio button.
  *	Type **BOM-A** in the **Frequency Name** field.
  *	Click **Next**.
  *	Select the **Beg of Period** radio button.
  *	Change the **A/O/B/N** setting from **On Date** to **After Date** 
  *	Click the **Forecast** Button.
  *	Move the **Forecast** and **Frequency Definition Wizard** screens so that you can see both.
  *	On the **Forecast** screen, the **first working day** of every month should be green. Notice how holidays and weekends affect this Frequency.
  *	Click **Finish**.
9.	Frequency: **Mid of Period**
  *	Select **Mid of Period Frequency Practice** in the Job Name drop-down menu.
  *	While in the Frequency Screen, click the **Add** button below the **Frequency List**. 
  *	Click the **Create new Frequency** radio button.
  *	Type **Mid-Wed-A** in the Frequency Name field.
  *	Click **Next**.
  *	Select the **Mid of Period** radio button.
  *	Select Wednesday from the Day of the Week menu.
  *	Change the **A/O/B/N** setting from **On Date** to **After Date**. 
  *	Click the **Forecast** Button.
  *	Move the **Forecast** and **Frequency Definition Wizard** screens so that you can see both.
  *	On the **Forecast** screen, the Wednesday closest to the middle of every month should be green. Notice how holidays and weekends affect this Frequency.
  *	Click **Finish**.
10.	Frequency: **End of Period**
  *	Select **End of Period Frequency Practice** in the Job Name drop-down menu.
  *	While in the Frequency Screen, click the **Add** button below the **Frequency List**. 
  *	Click the **Create new Frequency** radio button.
  *	Type **EOM-B** in the **Frequency Name** field.
  *	Click **Next**.
  *	Select the **End of Period** radio button.
  *	Change the **A/O/B/N** setting from **On Date** to **Before Date**. 
  *	Click the **Forecast** Button.
  *	Move the **Forecast** and **Frequency Definition Wizard** screens so that you can see both.
  *	On the **Forecast** screen, the **last working day** of every month should be green. Notice how holidays and weekends affect this Frequency.
  *	Click **Finish**.

</details>