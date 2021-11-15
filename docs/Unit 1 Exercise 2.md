---
sidebar_label: 'Unit 1 Exercise 2'
---

### Exercise 2: Run a Manual Batch Job

##### Objective:

Run two basic Batch Jobs from the Command Prompt window:

* Job 1: Type ```timeout /t 15``` and press enter.
* Job 2: Type ```cd "C:\Program Files\OpConxps\MSLSAM"``` and press enter. Then, Type ```"genericp.exe -t10 -e0"``` and press enter.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E2.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

1.	Click the Windows Start button, type ```cmd```, and press the ENTER key.
2.	From the Command Prompt window, type: ```timeout /t 15```
3.	Press the ENTER key.
  *	You will see the timeout command executed counting down 15 seconds

- Note: You ran this program under the Windows account you are logged on as ```SMATRAINING\SMAUSER```. You ran the program on the Machine you are logged into ```SMATRAINING```.

4.	From the Command Prompt window, type: 
```
cd “C:\Program Files\OpConxps\MSLSAM”
```
5.	Press the ENTER key.
6.	Still in the Command Prompt, type: 
```
genericp.exe –t10 –e0
```
7.	Press the ENTER key.
8.	The generic.exe program will run for ```10``` seconds and then complete.

</details>