---
sidebar_label: 'Unit 1 Exercise 4'
---

## Exercise 4: Job Dependencies

### Objective

Add dependencies to the jobs created in Exercise 3 so they run in a sequence.

### Summary

Utilize a **REQUIRES - Finished OK Dependency** between each of the four 4 jobs in **MY FIRST SCHEDULE** so they run the following order:

**WINDOWS JOB 1** &rarr; **WINDOWS JOB 2** &rarr; **WINDOWS JOB 3** &rarr; **WINDOWS JOB 4**

### Instructions

1.	In Solution Manger, select **Studio**. 
2.	In the Schedule list, select **My First Schedule**.
3.  Click the **View** button in the toolbar.
4.	Click on **Windows Job 4**.
5.	In the menu to the right, select **Add Dependency**.

#### In the Job Dependency Window
6.	In the **Predecessor Job** section, validate that **My First Schedule** shows for the **Schedule**.
7.  In the **Job** drop down list, select **Windows Job 3**.
8.	In the **Dependency** section, validate that **Requires** and **Finished OK** are selected.
9.  Click **Save**.

#### Set remaining Dependencies
10.	Click on **Windows Job 3**.
11.	Repeat Steps 5-9 to create a dependency between **Windows Job 2** and **Windows Job 3**.
12.	Click on **Windows Job 2**.
13.	Repeat Steps 5-9 to create a dependency between **Windows Job 1** and **Windows Job 2**. 
14. Close **Studio**

:::tip
You can also 'Click and Drag' from the bottom dot on a job to the top dot on the next job to pull up the Job Dependency window.
![Click-n-Drag Dependency Creation](../static/imgbasic/Click-n-Drag.png)
:::

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 1 Exercise 4](../static/videobasic/U1E4.mp4)

:::

1.	Under the **Administration** topic, double-click on **Job Master**. 
2.	In the **Schedule** drop-down list, select **My First Schedule**.
3.	In the **Job** drop-down list, select **Windows Job 4**.
4.	Under **Job Properties**, click on the **Dependencies** tab.
5.	In the **Job Dependency** sub-tab, click the **Add** button.

#### In the Add Dependency Pop-Up Window
6.  In the **Predecessor Job** section, 
  * Validate that **My First Schedule** is seclected for **Schedule** drop-down list
  * In the **Job** drop-down, select **Windows Job 3**.
7.	Under **Dependency Type**, validate that **Requires** is selected.
8.  Under **Options**, validate that **Finished OK** is selected.
9.  Click the **OK** button.
10.	In the **Job** drop-down list, select **Windows Job 3**.
11.	Repeate Steps 4-6 to create a dependency between **Windows job 2** and **Windows Job 3**.
12.  In the **Job** drop-down list, select **Windows Job 2**.
13.	Repeate Steps 4-6 to create a dependency between **Windows job 1** and **Windows Job 2**.
14.	Close the **Job Master**.

</details>
