---
sidebar_label: 'Unit 2 Exercise 6'
---

## Exercise 6: Create a UNIX Job

### Objective

Create a ```UNIX``` Job under **MY FIRST SCHEDULE**. Name the Job **UNIX Job 1**.
Set the **Job Type** as ```UNIX``` and the **Primary Machine** as ```SUSEVM```. 

The **User ID** is ```0/0```

The **Start Image** is ```/usr/local/lsam/bin/genericpgm```

The **Parameters** are: ```-t20 -e0```

Give the Job an Existing Frequency of ```Example-Mon-Sun-O```.

Be sure to provide appropriate documentation.

### Instructions

1.	In **Studio**, select **My First Schedule**.
2.	Click the **View** button.
3.	In the side menu, select **Add Job**.
4.  Select **My First Schedule** in the Schedule dropdown menu.
4.	In the **Name** textbox, enter ```UNIX Job 1```.
5.	In the **Job Type** drop-down list, select **UNIX**.
6.	In the **Machine Selection** > **Machines or Machine Group** drop-down list, select the **SUSEVM** machine for the Job to run on. 
7.	In the **General** > **User ID** drop-down list, select ```0/0```
8.	In the **Run** > **Start Image** field, type: 

```
/usr/local/lsam/bin/genericpgm
```

9.	In the **Run** > **Parameters** section, enter:  

```
–t20 –e0
```

10.	Click the **Save** button
11. Click the **Lock** icon in the upper right-hand corner.
12.	Select the **Frequency** tab.   
13.	Within the **Frequency** frame:
14.	Select ```Example-Mon-Sun-O``` in the Inactive list.
15. Move the Frequency to the Active List using the **<** button.
16.	Expand the **Documentation** tab and enter **This is a UNIX training Job**.
17.	Click the **Save** button.


## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 2 Exercise 6](../static/videobasic/U2E6.mp4)

:::

**_Scenario: You will create 1 UNIX Job in OpCon to run the same program in the previous exercise_**.

1.	Under the **Administration** topic, Double-Click on **Job Master**. 
2.	In the **Schedule** drop-down list, select **My First Schedule**.
3.	Click the **Add** button on the **Job Maste**r toolbar. 
4.	In the **Name** textbox, enter ```UNIX Job 1```.
5.	In the **Job Type** drop-down list, select **UNIX**.
6.	In the **Primary Machine** drop-down list, select the **SUSEVM** machine for the Job to run on. 
7.	In the User ID drop-down list, select ```0/0```
8.	In the **Start Image** field, type: 

```
/usr/local/lsam/bin/genericpgm
```

9.	In the **Parameters** section, enter:  

```
–t20 –e0
```

10.	Click the **Save** button on the **Job Master** toolbar.
11.	Inside the **Job Master** screen under **Job Properties**, click on the **Frequency** tab.   
12.	Within the **Frequency** list frame, click the **Add** button.
13.	Click inside the option button to **Use existing Frequency**.
  *	In the **Frequency** drop-down list, select ```Example-Mon-Sun-O```.
  *	Click **Next**
  *	Click the **Finish** button.
14.	Click on the **Documentation** tab and enter **This is a UNIX training Job**.
15.	Click the **Save** button on the Job Master toolbar.
16.	Close the **Job Master**.

</details>