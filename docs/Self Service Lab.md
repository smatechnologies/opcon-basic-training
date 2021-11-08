---
sidebar_panel: 'Self Service Lab'
---

### Self Service Lab - Interacting with Schedules and Jobs

##### Schedule Build 

1.	In **Enterprise Manager**, Open Matrix or Daily List view and be sure that **My First Schedule** has completed
2.	Right-Click **My First Schedule** and select ```Maintenance > Delete Schedule```
3.	Select **Yes** to delete the Schedule
4.	In **Solution Manager**, select the **Self Service** tab
5.	Be sure that **Admin Mode** is activated by clicking the **Lock Button** in the Upper Right Hand corner. It should be **Green** and **Unlocked**.
6.	In Admin Mode, click the Green Create Button to create a new Button.
7.	In the **Name** textbox, enter **Schedule Build**.
8.	Under Events, click the Green Add Bar **(+)**.
9.	From the **Event Template** Menu, select ```$SCHEDULE:BUILD```
10.	In the **Schedule Date** box, enter the Variable ```${SCHEDULE DATE}```.
11.	In the **Schedule Name** box, enter the Variable ```${SCHEDULE NAME}```.
12.	Leave all other options empty and click the **OK** Button.
13.	Toggle the **Submit Events as OCADM** option to **On (Green)**.
14.	From the **User Input** section, select the **Blue Edit Pencil** next to the **Schedule Date** option.
15.	From the **User Input Type**, select **Date**. 
16.	Leave Output Formatting as ```YYYY/MM/DD```.
17.	Click the **OK** button.
18.	Scroll to the bottom of the page and select **Save**.
19.	Click the **Lock Button** to return to **User Mode**.
20.	Click the **Schedule Build** Button just created.
21.	Enter today’s date in the required format in the **Schedule Date** box.
22.	Enter **My First Schedule** in the **Schedule Name** box.
23.	Click **Submit** to begin the build.
24.	Select **OK** to exit the Request Process page.
25.	Verify in Operations View or Enterprise Manager Matrix view that **My First Schedule** has built and run correctly.

##### Restart Job on Hold

1.	After verifying that all Jobs have completed, verify that the Test Event 3 Job has a status of cancelled.
2.	In Self Service, active **Admin Mode** by clicking the **Lock Button** in the Upper Right Hand corner. It should be **Green** and **Unlocked**.
3.	Click the Green Create Button to create a new Button.
4.	In the **Name** textbox, enter **Hold Job**.
5.	Under Events, click the Green Add Bar **(+)**.
6.	From the **Event Template** Menu, select ```$JOB:RESTARTHLD```.
7.	In the **Schedule Date** box, enter the Variable ```${SCHEDULE DATE}```.
8.	In the **Schedule Name** box, enter the Variable ```${SCHEDULE NAME}```.
9.	In the **Job Name** box, enter the Variable ```${JOB NAME}```.
10.	Click the **OK** Button.
11.	Toggle the **Submit Events as OCADM** option to **On (Green)**.
12.	From the **User Input** section, select the **Blue Edit Pencil** next to the **Schedule Date** option.
13.	From the **User Input Type**, select Date. 
14.	Leave Output Formatting as ```YYYY/MM/DD```.
15.	Click the **OK** Button.
16.	Scroll to the bottom of the page and select **Save**.
17.	Click the **Lock Button** to return to **User Mode**.
18.	Click the **Restart Job on Hold** Button just created. 
19.	Enter today’s date in the required format in the **Schedule Date** box.
20.	Enter **My First Schedule** in the **Schedule Name** box.
21.	Enter **Test Event 3** in the **Job Name** box.
22.	Click **Submit** to begin the Request.
23.	Select **OK** to exit the Request Process page.
24.	Verify in Operations View or Enterprise Manager Matrix view that **Test Event 3** in **My First Schedule** has been placed ```On Hold```.

##### Release Job 

1.	In Self Service, active **Admin Mode** by clicking the **Lock Button** in the Upper Right Hand corner. It should be **Green** and **Unlocked**.
2.	Click the Green Create Button to create a new Button.
3.	In the **Name** textbox, enter **Release Job**.
4.	Under Events, click the Green Add Bar **(+)**.
5.	From the **Event Template** Menu, select ```$JOB:RELEASE```.
6.	In the **Schedule Date** box, enter the Variable ```${SCHEDULE DATE}```.
7.	In the **Schedule Name** box, enter the Variable ```${SCHEDULE NAME}```.
8.	In the **Job Name** box, enter the Variable ```${JOB NAME}```.
9.	Click the **OK** Button.
10.	Toggle the **Submit Events as OCADM** option to **On (Green)**.
11.	From the **User Input** section, select the **Blue Edit Pencil** next to the **Schedule Date** option.
12.	From the **User Input Type**, select **Date**. 
13.	Leave Output Formatting as ```YYYY/MM/DD```.
14.	Click the **OK** Button.
15.	Scroll to the bottom of the page and select **Save**.
16.	Click the **Lock Button** to return to **User Mode**.
17.	Click the **Release Job** Button just created. 
18.	Enter today’s date in the required format in the **Schedule Date** box.
19.	Enter **My First Schedule** in the **Schedule Name** box.
20.	Enter **Test Event 3** in the **Job Name** box.
21.	Click **Submit** to begin the Request.
22.	Select **OK** to exit the Request Process page.
23.	Verify in Operations View or Enterprise Manager Matrix view that **Test Event 3** in **My First Schedule** has been ```Released``` and Completed.

##### Schedule Delete

1.	In Self Service, active **Admin Mode** by clicking the **Lock Button** in the Upper Right Hand corner. It should be **Green** and **Unlocked**.
2.	Click the Green Create Button to create a new Button.
3.	In the **Name** textbox, enter **Delete Schedule**.
4.	Under Events, click the Green Add Bar **(+)**.
5.	From the **Event Template** Menu, select ```$SCHEDULE:DELETE```.
6.	In the **Schedule Date** box, enter the Variable ```${SCHEDULE DATE}```.
7.	In the **Schedule Name** box, enter the Variable ```${SCHEDULE NAME}```.
8.	Leave the **Log File Name** box empty.
9.	Click the **OK** Button.
10.	Toggle the **Submit Events as OCADM** option to **On (Green)**.
11.	From the **User Input** section, select the **Blue Edit Pencil** next to the **Schedule Date** option.
12.	From the **User Input Type**, select **Date**. 
13.	Leave Output Formatting as ```YYYY/MM/DD.```
14.	Click the **OK** Button.
15.	Scroll to the bottom of the page and select **Save**.
16.	Click the **Lock Button** to return to **User Mode**.
17.	Click the **Delete Schedule** Button just created. 
18.	Enter today’s date in the required format in the **Schedule Date** box.
19.	Enter **My First Schedule** in the **Schedule Name** box.
20.	Click **Submit** to begin the Request.
21.	Select **OK** to exit the Request Process page.
22.	Verify in Operations View or Enterprise Manager Matrix view that **My First Schedule** has been ```Deleted``` from the Daily List.