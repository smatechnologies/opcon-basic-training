---
sidebar_label: 'Unit 2 Exercise 3'
---

## Exercise 3: Steps to Define a UNIX Machine

### Objective

Add a ```UNIX``` machine in Enterprise Manager. Name the machine ```SUSEVM```. Set the **Machine Type** as ```UNIX``` and the **Socket Number** as ```3111```. Hardcode the **IP Address** with the information provided by the instructor. 

In **Communication Settings**, update the **JORS Port Number** to ```3110```. Set the **File Transfer Role** to ```BOTH```. Set the **File Transfer Port Number (Non-TLS)** to ```3110```.

Verify that all settings were saved.

### Instructions

1.	In **Library**, under the **Administration** topic, select **Agents**. 
2.	Click the **Add** button. 
3.	In the **Name** textbox, enter **SUSEVM**. 
4.	In the **Documentation** textbox, enter **This is My First UNIX machine**.
5.	In the **Type** drop-down list, select **UNIX**.
6.	Under **General Settings**, make sure the **Socket Number** is ```3111```.
7.	Hard code the **IP address** to the address given by the instructor.
8.	Click the **Save** button.
9.	Expand the **Communication Settings** tab.
10.	Type 3110 into the **JJORS Port Number** textbox.
11.	Expand the **File Transfer Settings** tab.
13.	Click on the **File Transfer Role** row, select **Both**.
14. Change the **File Transfer Port Number (Non-TLS)** to ```3110```.
15. Set **Support non-TLS for SMAFT Agent Communications** to ```True```.
16. Set **Support non-TLS for SMAFT Server Communications** to ```True```.
17.	Click **Save**.


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