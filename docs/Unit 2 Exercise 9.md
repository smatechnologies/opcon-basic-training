---
sidebar_label: 'Unit 2 Exercise 9'
---

### Exercise 9: Frequencies - On Request & Beginning, Middle, End of Period

##### Objective: 

Within the existing **Frequency Practice Schedule**, create four new Null Jobs:


**On Request Frequency Practice**
**Begin of Period Frequency Practice**
**Mid of Period Frequency Practice**
**End of Period Frequency Practice**

In the **On Request Frequency Practice** Job, create a new Frequency named ```OnRequest```. This Frequency should run **On Request** on the date requested. In this case, set the date as January 3rd.

In the **Begin of Period Frequency Practice** Job, create a new Frequency named ```BOM-A```. This Frequency should run on the 1st Working Day of each month, or the day after in case of a holiday.

In the **Mid of Period Frequency Practice** Job, create a new Frequency named ```Mid-Wed-A```. This Frequency should run on the Wednesday closest to the middle of the month, or the day after in case of a holiday.

In the **End of Period Frequency Practice** Job, create a new Frequency named ```EOM-B```. This Frequency should run on the last Working Day of the month, or the day before in case of a holiday.

<video width="320" height="240" controls>
  <source src="videobasic/U2E9.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>

<details>

<summary>Click for Step-By-Step Instructions</summary>

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