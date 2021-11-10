---
sidebar_panel: 'Unit 2 Exercise 10'
---

### Exercise 10: Frequencies - On Interval and Annual Plan Calendar

##### Objective:

Within the existing **Frequency Practice Schedule**, create three new Null Jobs:

**On Interval Frequency Practice**
**Annual Frequency Practice**
**Annual Plan Frequency with Offsets**

In the **On Interval Frequency Practice** Job, create a new Frequency named ```Every-15thand30th-B```. This Frequency should run on intervals of the 15th and 30th of the month, or the day before in case of a holiday.

In the **Calendar Master**, add a new Calendar named ```Company Holiday Calendar``` and select several dates from this year. Provide appropriate documentation.

In the **Annual Frequency Practice** Job, create a new Frequency named ```CompanyHoliday```. Schedule the Frequency using an **Annual Plan** by selecting the ```Company Holiday Calendar```.

In the **Annual Plan Frequency with Offsets** Job, create a new Frequency named ```CompanyHoliday+1```. This Frequency should use the ```Company Holiday Calendar``` **Annual Plan** with an offset of ```1 day```.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E10.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

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