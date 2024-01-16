---
sidebar_label: 'Unit 3 Exercise 10'
---

## Exercise 10: Define a System Property

### Objective

To create a new **Managed System Property**.

### Summary

Create a customized **System Property** using the **$DATE** Property, that has a value of **mmddyy**.

### Instructions

1.	In **Library** > **Administration**, select **Global Properties**. 
2.	In the **Global Properties** list select **$DATE**.
3.	Click the **Copy** button.
4.	In the **Global Property** pop-up window, 
  * In the **Name** field, enter ```$DATEmmddyy```.
  * In the **Value** field, enter ```mmddyy```
  * In the **Documentation** field, enter in some documentation.
    * Example: This property will resolve to mmddyy: Jan 1 2023 would resolve as 010123.
  * Click **Save**.


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 10](../static/videobasic/U3E10.mp4)

:::

1.	Under the **Administration topic**, Double-Click on **Global Properties**. 
2.	Click the **Select Global Property** drop-down menu select ```$DATE```.
3.	Click the **Copy** Button (top right) or press Ctrl+Insert
4.	Keep ```$DATE``` in the name but append the format you’d like to use.   
    * Example: ```$DATEmmddyy```
5.	Click the **OK** button.
6.	Change the **Value** to the date format you specified in the name.
7.	Click the **Save** button on the Global Properties toolbar. 
8.	Close the **Global Properties** tab.

</details>