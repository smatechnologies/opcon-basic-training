---
sidebar_label: 'Unit 1 Exercise 2'
---

## Exercise 2: Run a Manual Batch Job

### Objective

To successfully walk through executing two Windows Commands manually.

### Summary

Run two basic Batch Jobs from the Command Prompt window:

* **Job 1**: ```timeout /t 15```
* **Job 2**: ```C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10 -e0```

:::info Note
You will these programs under the Windows Account you are logged on with, ```SMATRAINING\SMAUSER```. This Windows Account is equivalent to the User ID that is required in an OpCon job. You also ran these programs on the Machine you are logged into ```SMATRAINING```.
:::


### Instructions

<!--
<video width="320" height="240" controls>
  <source src="videobasic/U1E2.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
-->

:::tip [Walkthrough Video - Unit 1 Exercise 2](../static/videobasic/U1E2.mp4)

:::

1.	Click the **Windows Start** button, type ```cmd```, and press the **ENTER** key.
2.	From the **Command Prompt** window, type: ```timeout /t 15```
3.	Press the **ENTER** key.

:::info Note
You will see the timeout command execute and start counting down 15 seconds.
:::


4.	From the **Command Prompt** window, type: 
```cmd
cd "C:\Program Files\OpConxps\MSLSAM"
```
5.	Press the **ENTER** key.
6.	Still in the Command Prompt, type: 
```cmd
genericp.exe -t10 -e0
```
7.	Press the **ENTER** key.
8.	The generic.exe program will run for ```10``` seconds and then complete.
