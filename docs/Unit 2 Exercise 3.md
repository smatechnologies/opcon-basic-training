---
sidebar_label: 'Unit 2 Exercise 3'
---

## Exercise 3: Steps to Define a UNIX Machine

### Objective

To define a new Agent in Solution Manager.

### Summary

Add a ```UNIX``` machine named ```SUSEVM``` that communicates across port ```3111```. The **IP Address** for this agent will be provided by the instructor. 

The **JORS Port Number** for this agent will be ```3110```. This agent will be used for SMAFT jobs, so the **File Transfer Role** needs to be set to ```BOTH``` and the **File Transfer Port Number (Non-TLS)** set to ```3110```.

### Instructions

#### Adding the Machine

1.	In **Library** > **Administration**, select **Agents**. 
2.	Click the **Add** button. 
3.	In the **Name** field, enter **SUSEVM**. 
4.	In the **Documentation** field, enter **This is my first UNIX machine**.
5.	In the **Type** drop-down list, select **UNIX**.
6.  Click **Save**.

#### Define the General Settings

7.  Expand the **General Settings** section.
8.	In the **IP Address** field, enter in the IP Address assigned to you by the instructor.
9.  In the **Socket Number** field, enter the port number ```3111```.

#### Define the Communication Settings

10.	Expand the **Communication Settings** section.
11.	In the **JORS Port Number** field, eneter ```3110```.

#### Define the File Transfer Settings

12.	Expand the **File Transfer Settings** section.
13.	In the **File Transfer Role** field, select **Both** from the drop down menu.
14. In the **File Transfer Port Number (Non-TLS)** field, enter ```3110```.
15. In the **Support non-TLS for SMAFT Agent Communications** field, select ```True``` from the drop down menu.
16. In the **Support non-TLS for SMAFT Server Communications** field, select ```True``` from the drop down menu.
17.	Continue on to **Exercise 4**.

## Enterprise Manager

<details>

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U2E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->

:::tip [Walkthrough Video - Unit 2 Exercise 3](../static/videobasic/U2E3.mp4)

:::

1.	Under the **Administration** topic, Double-Click on **Machines**. 
2.	Click the **Add** button on the **Machines** toolbar. 
3.	In the **Name** textbox, enter **SUSEVM**. 
4.	In the **Documentation** textbox, enter **This is My First UNIX machine**.
5.	In the **Machine Type** drop-down list, select **UNIX**.
6.	Make sure the **Socket Number** is ```3111```.
7.	Hard code the **IP address** to the address given by the instructor.
8.	Click the **Save** button on the **Machines** toolbar.
9.	Click on the **Open Advanced Settings Panel** link.
10.	Click on the **Communication Settings** tab.
11.	Click on the **JORS Port Number** row:
  * Located at the bottom of the **Advanced Machine Properties** screen, type ```3110``` for the **JORS Port** number.
  * Click the **Update** button.
12.	Click on the **File Transfer Settings** tab.
13.	Click on the **File Transfer Role** row:
  * Select **Both** from the **File Transfer Role** drop-down.
  * Click the **Update** button.
  * Change the **File Transfer Port Number (Non-TLS)** to ```3110```.
  *	Click the **Update** button.
  *	Click **Save**.
14.	Close the **Machines** tab.

</details>