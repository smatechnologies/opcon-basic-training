---
sidebar_panel: 'Unit 2 Exercise 8'
---

### Exercise 8: Frequencies - All Weeks, On Occurrence, On Day

##### Objective: 

Within the existing **Frequency Practice Schedule**, create three new Null Jobs:

**Daily Frequency Practice**
**On Occurrence Frequency Practice**
**On Day Frequency Practice****

In the **Daily Frequency Practice** Job, create a new Frequency named ```Tue+Thu-B```. This Frequency should run on Tuesday and Thursday every week and on the day before in case of a holiday.

In the **On Occurrence Frequency Practice** Job, create a new Frequency named ```4th-Thu-B```. This Frequency should run on the occurrence of the 4th Thursday of the month, or the day before in case of a holiday.

In the **On Day Frequency Practice** Job, create a new Frequency named ```1st-day-of-month-wk```. This Frequency should run on the 1st Working Day of the month.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

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