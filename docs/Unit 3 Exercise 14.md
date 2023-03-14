---
sidebar_label: 'Unit 3 Exercise 14'
---

## Exercise 14: Events: Failure Criteria

### Objective

In Job Master, within the existing Schedule **Exit Code Events**, select **Job 1**. 

Under the **Advanced** tab, set **Failure Criteria** to:

```Finish OK if Equal to 0```

And/OR

```Finish OK if Equal to 100```

Add a new Event based on **Exit Description** if the value is ```Equal to 100```. The event should use the ```$JOB:SKIP``` template to skip **Job 2**.

Build the Schedule and view the results in Matrix View.

### Instructions

1.	In **Library**, under **Administration**, click on **Master Schedules**. 
2.	In the **Schedule** list, select **Exit Code Events**.
3.  Click the **View** button.
3.	Select **Job 1** within the **Exit Code Events** Schedule.
4.  Click the **Wrench** icon in the side menu.
5.  Click the **Lock** icon in the upper right-hand corner.
6.  In **Task Details**, scroll to **Failure Criteria**.
7.	In the first column, set the **Results** drop-down menu from **Fail** to **Finish OK**.
    *	This will reverse the logic stating that the Job will only **Finish OK** if the Job exits with the **Exit Codes** listed.
8.	Set the **Comparison Operator** from **Not Equal To** to **Equal To** leaving the Value set to ```0```. 
9.	In the second row, change the **And/Or** drop-down menu from **blank** to **OR**.
10.	In the second row, change the **Comparison Operator** from **blank** to **Equal To**.
11.	In the second row, change the **Value** from ```0``` to ```100```.
12.	Click the **Save** button.
13. Click the **Lock** icon in the uper right-hand corner.
14.	Still within **Job 1** in the **Exit Code Events** Schedule, scroll to **Events**.
15.	Click the **Add** button in the **Events** box.
16.	In the **Send Event On** drop down menu, select **Exit Description**.
17.	Select **Equal To** in the **Comparison Operator** drop-down menu.
18.	Type ```100``` in the Value textbox.
19.	Select the ```$JOB:SKIP``` template from the Event Template drop-down menu.
20.	Update ```<Schedule date>``` to ```[[$SCHEDULE DATE]]```
21.	Update ```<Schedule name>``` to ```[[$SCHEDULE NAME]]```
22.	Update ```<Job name>``` to **Job 2**.
23. The **Event Parameters** should look like this:  
```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],Job 2```
24.	Click the **Save** button.
25. Clikc the **Save** button in the **Master Job Definition**.
26.	In **Operations**, click on **Schedule Build**. 
27.	Select **Exit Code Events** from the Schedule list.
28. Set the **Schedule Build** status to **Released**.
29. Click the **Build** button.
30.	Expand the Schedule build results and click the Schedule link to return to **Processes**.
31.	Notice that the **Job Failure** Job failed with an **exit code** of ```100```.
32.	Notice that **Job 1** should exit with an **exit code** of ```100``` but **Finish OK**.
33.	It should also _skip_ **Job 2** allowing **Job 3** to run.


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