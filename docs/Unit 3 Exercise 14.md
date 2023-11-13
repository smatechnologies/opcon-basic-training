---
sidebar_label: 'Unit 3 Exercise 14'
---

## Exercise 14: Events: Failure Criteria

### Objective

To utilize Advance Failure Criteria so that if a job fails with a 100, SAM will mark the completed job as Finished OK and trigger an Event based off the Exit Code of 100.

### Summary

Using the existing Schedule **Exit Code Events**, you will modify **Job 1** and set **Failure Criteria** to:

```Finish OK if Equal to 0``` **OR** ```Finish OK if Equal to 100```

You will also add a new Event triggered on **Exit Description** of 100 and will Skip **JOB 2**.

### Instructions

#### Configure Advanced Failure Criteria

1.	Open **Studio**. 
2.	In the **Schedule** list, select **Exit Code Events**.
3.  Click the **View** button.
3.	Select **Job 1** within the **Exit Code Events** Schedule.
4.  Click the **Wrench** icon in the side menu.
5.  Click the **Lock** icon in the upper right-hand corner.
6.  In **Task Details**, scroll to **Failure Criteria**.
7.	In the first row, set the drop downs as follows: ```=```, ```0```, and ```Finish OK```.
9.	In the second row, set the drop downs as follows: ```or```, ```=```, and ```100```.

#### Create the Skip Event

10.	Scroll to **Events**.
11.	Click **Add**.
12.	In the **Create New Event** pop-up window
  * In the **Send Event On** drop down, select **Exit Description**.
  * In the **Comparison Operator** dropdown, select **Equal To**.
  * In the **Value** field, enter ```100```.
  * In the **Event Templete** drop down, select the **$JOB:SKIP** event.
  * In the **Schedule date** field, use the **Magic Wand** or **CNTL+SPACE** to select **$SCHEDULE DATE** property.
  * In the **Schedule name** field, use the **Magic Wand** or **CNTL+SPACE** to select **$SCHEDULE NAME** property.
  * In the **Job name** field, enter ```Job 2```.
  * Click the **Save** button.
13. Click the **Save** button in the **Master Job Definition**.

#### Build the Schedule

14.	In **Operations**, click on **Schedule Build**. 
15. In the **Schedule Date** section, validate that today's date is specified for both **From** and **To**.
16. Set the **Schedule Build** status to **Released**.
17.	Select **Exit Code Events** from the Schedule list.
18. Click the **Build** button.
19. Expand and click on the schedule link for **Exit Code Events** to return to the Processes screen.

:::note
When the schedule completes, you should notice that in the **Return Code** column for **Job 1** shows a **100** but the job has **Finished OK** and **Job 2** was skipped. Whereas, if you look at the **Return Code** column for the **Job Failure** job, it shows a 100. This is because the AFC isn't set for the **Job Failure** job.
:::

20. Close all open modules.

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Exercise 14](../static/videobasic/U3E14.mp4)

:::

1.	Under the **Administration** topic, Double-Click on **Job Master**. 
2.	In the **Schedule** drop-down list, select **Exit Code Events**.
3.	In the **Job** drop-down list, select **Job 1**.
4.	At the bottom of the screen, click the **Advanced** tab.
5.	Change the **Results** drop-down menu from **Fail** to **Finish OK**.
    *	This will reverse the logic stating that the Job will only **Finish OK** if the Job exits with the **Exit Codes** listed.
6.	Change the **Comparison Operator** from **Not Equal To** to **Equal To** leaving the Value set to ```0```. 
7.	In the second row, change the **And/Or** drop-down menu from **blank** to **OR**.
8.	In the second row, change the **Comparison Operator** from **blank** to **Equal To**.
9.	In the second row, change the **Value** from ```0``` to ```100```.
10.	Click the **Save** button at the top right of the screen.
11.	Click the **Events** tab.
12.	Click the **Add** button in the **Events** frame.
13.	Click the **Exit Description** radio-button in the **Event Definition Wizard**.
14.	Click **Next**.
15.	Select **Equal To** in the **Comparison Operator** drop-down menu.
16.	Type ```100``` in the Value textbox.
17.	Click **Next**.
18.	Select the ```$JOB:SKIP``` template from the Event Template drop-down menu.
19.	Update ```<Schedule date>``` to ```[[$SCHEDULE DATE]]```
20.	Update ```<Schedule name>``` to ```[[$SCHEDULE NAME]]```
21.	Update ```<Job name>``` to **Job 2**.
22.	The **Event Parameters** should look like this:  
```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],Job 2```
23.	Click the **Finish** button.
24.	Close the **Job Master** tab.
25.	Under the **Operations** topic, Double-Click on **Schedule Build**. 
26.	Select **Exit Code Events** from the **Schedule Selection**.
27.	Click the **Build** button.
28.	Select the **Released** radio-button.
29.	Click **OK**.
30.	Open the **Operations** screen of your choice (**Matrix** or **List**) or use **Solution Manager**.
31.	Notice that the **Job Failure** Job failed with an **exit code** of ```100```.
32.	Notice that **Job 1** should exit with an **exit code** of ```100``` but **Finish OK**.
33.	It should also _skip_ **Job 2** allowing **Job 3** to run.

</details>