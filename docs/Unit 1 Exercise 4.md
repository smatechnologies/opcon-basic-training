---
sidebar_label: 'Unit 1 Exercise 4'
---

## Exercise 4: Job Dependencies

### Objective

Create a **REQUIRES** Dependency Chain for the four Jobs in **MY FIRST SCHEDULE**. 

The Dependency Flow should be:

**WINDOWS JOB 1** <- **WINDOWS JOB 2** <- **WINDOWS JOB 3** <- **WINDOWS JOB 4**

where **WINDOWS JOB 4** Requires **WINDOWS JOB 3**, etc.

### Instructions

1.	In Solution Manger, select **Studio**. 
2.	In the **Schedule** list, select **My First Schedule**.
3. Click the **View** button.
3.	Click **Windows Job 4**.
4.	In the Job menu, click **Add Dependency**.
5.	In the **Schedule** Schedule frame, check that **My First Schedule** is selected.
6.  In the **Job** drop down list, select **Windows Job 3**.
7.	In the **Dependency** frame, select **Requires** and **Finished OK**.
8.	Click **Windows Job 3**.
9.	In the Job menu, click **Add Dependency**.
10.	In the **Schedule** Schedule frame, check that **My First Schedule** is selected.
11.  In the **Job** drop down list, select **Windows Job 2**.
12.	In the **Dependency** frame, select **Requires** and **Finished OK**.
13.	Click **Windows Job 2**.
14.	In the Job menu, click **Add Dependency**.
15.	In the **Schedule** Schedule frame, check that **My First Schedule** is selected.
16.  In the **Job** drop down list, select **Windows Job 1**.
17.	In the **Dependency** frame, select **Requires** and **Finished OK**.

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 1 Exercise 4](../static/videobasic/U1E4.mp4)

:::

1.	Under the **Administration** topic, Double-Click on **Job Master**. 
2.	In the **Schedule** drop-down list, select **My First Schedule**.
3.	In the **Job** drop-down list, select **Windows Job 4**.
4.	Under **Job Properties**, click on the **Dependencies** tab.
5.	In the **Job Dependency** frame, click the **Add** button.
6.	In the **Add Dependency** frame:
  * In the **Job** drop-down list, select **Windows Job 3**.
  *	Select the **Requires** Dependency Type.
  *	Click the **OK** button.
7.	In the **Job** drop-down list, select **Windows Job 3**.
8.	In the **Job Dependency** frame, click the **Add** button.
9.	In the **Add Dependency** frame:
  * In the **Job** drop-down list, select **Windows Job 2**.
  *	Select the **Requires** Dependency Type.
  *	Click the **OK** button.
10.	In the **Job** drop-down list, select **Windows Job 2**.
11.	In the **Job Dependency** frame, click the **Add** button.
12.	In the **Add Dependency** frame:
  *	In the **Job** drop-down list, select **Windows Job 1**.
  *	Select the **Requires** Dependency Type.
  *	Click the **OK** button.
13.	Close the **Job Master**.

</details>
