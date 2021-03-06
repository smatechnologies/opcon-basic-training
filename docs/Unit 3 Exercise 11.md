---
sidebar_label: 'Unit 3 Exercise 11'
---

### Exercise 11: Instance Properties

##### Objective:

Within **MY FIRST SCHEDULE**, create an **Instance Definition** named ```RUNTIME``` with a value of ```20```.

Next, in **Machines**, stop communication with the ```SMATraining``` machine. Open **Advanced Settings** Panel and Add a Property named ```PathWindows``` with a value of ```C:\Program Files\OpConxps\MSLSAM```.

Restart communication with ```SMATraining```.

Select **WINDOWS JOB 4** in **MY FIRST SCHEDULE**.  Update the Command Line for the Job using the newly created **Instance Properties**:

```
“[[PathWindows]]\genericp.exe” -t[[RUNTIME]] -e0
```

To

```
“[[MI.PathWindows]]\genericp.exe” -t[[SI.RUNTIME]] -e0
```

Rebuild **MY FIRST SCHEDULE**, overwriting and Released for Today. Release **WINDOWS JOB 1** and **WINDOWS JOB 2**.

After all Jobs have run successfully, verify Property/Token success in **Job Information > Configuration > Token Replacement Values** for **WINDOWS JOB 4**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E11.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Under the **Administration** topic, double click on **Schedule Master**. 
2.	In the **Schedule Selection** drop-down menu select **My First Schedule**.
3.	Click the **Instance Definition** tab under Schedule Details. 
4.	In the **Define Property Values** text box, type ```RUNTIME=20```.
5.	Click the **Add** button to the right of the **Define Property Values** text box.
6.	Click the **Save** button on the Schedule Master toolbar.
7.	Close the **Schedule Master**.
8.	Under the **Administration** topic, double click on **Machines**. 
9.	In the **Select Machine** drop-down menu select **SMATraining**.
10.	Right-click the **LSAM Communication icon** under Communication Status and select **Stop Communication**.
11.	Click the **Open Advanced Settings Panel** link right above the Communication Status.
12.	Click on the Available Property row
13.	Click the **Add** Button. 
14.	Type ```PathWindows=C:\Program Files\OpConxps\MSLSAM``` in the text box and click **OK**.
15.	Click the **Update** Button.
16.	Click the **Save** Button.
17.	Right-click the **LSAM Communication** icon under **Communication Statu**s and select **Start Communication**.
18.	Close the **Machines** tab.
19.	Under **Administration**, click on **Job Maste**r.
20.	In the **Schedule** drop-down list, select **My First Schedule**.
21.	In the **Job** drop-down list, select **Windows Job 4**.
22.	Update your command line to use the new properties by placing **Properties** to point to the **Machine** or **Schedule Instance Properties** instead of the **Global Properties**:

```
“[[PathWindows]]\genericp.exe” –t[[RUNTIME]] –e0
```

to:

```
“[[MI.PathWindows]]\genericp.exe” –t[[SI.RUNTIME]] –e0
```

23.	Click the **Save** button.
24.	Close the **Job Master**.
25.	If **My First Schedule** is In Process, **Cancel** all jobs.
26.	Rebuild **My First Schedule** Released for today
27.	Release **Windows Job 1** and **Windows Job 2**.
28.	Check the results from Enterprise Manager (check the **Job Information> Configuration> Token Replacement Values** for **Windows Job 4**).

</details>
