---
sidebar_label: 'Unit 1 Exercise 4'
---

## Exercise 4: Job Dependencies

##### Objective:

Create a **REQUIRES** Dependency Chain for the four Jobs in **MY FIRST SCHEDULE**. 

The Dependency Flow should be:

**WINDOWS JOB 1** <- **WINDOWS JOB 2** <- **WINDOWS JOB 3** <- **WINDOWS JOB 4**

where **WINDOWS JOB 4** Requires **WINDOWS JOB 3**, etc.

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U1E4.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->

:::tip [Walkthrough Video - Unit 1 Exercise 4](../static/videobasic/U1E4.mp4)

:::

<details>

<summary>Click for Step-By-Step Instructions</summary>

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
