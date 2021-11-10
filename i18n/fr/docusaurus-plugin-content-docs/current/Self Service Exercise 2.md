---
sidebar_panel: 'Self Service Exercise 2'
---

### Self Service Exercise 2: Disable a Button

###### Create Disable Token

:::note 
Be sure that **Admin Mode** is activated by clicking the **Lock Button** in the Upper Right Hand Corner. It should be **Green** and **Unlocked**
:::

1. In **Admin Mode**, from the **Self Service** Tab, click the Green **Create** Button to create a new Button.
2. In the **Name** textbox, enter **Create Disable Rule Token**.
3. In the **Documentation** textbox, enter **This Button will create the Disable Rule Token**.
4. Be sure that the **Confirmation Message** option is toggled to On (```Green```).
5. Under Events, click the Green Add Bar **(+)**.
6. From the Event Template Menu, select ```$PROPERTY:ADD,<Property Name>,<value>```.
7. In the **Token Name** textbox, enter **Disabled**.
8. In the **Value** textbox, enter **false**.
9. Click the **OK Button**.
10. Next, toggle the ```Submit Events as OCADM``` option to On (```Green```).
11. Click **Save**. 

###### Create A Button to Set Disable Token to True

12. From the **Self Service** Tab main screen, click the Green **Create** Button to create a new Button.
13. In the **Name** textbox, enter **Set Disable Rule Token True**.
14. In the **Documentation** textbox, enter **This Button will set the Disable Rule Token to True**.
15. Be sure that the **Confirmation Message** option is toggled to On (```Green```).
16. Under Events, click the Green Add Bar **(+)**.
17. From the Event Template Menu, select ```$PROPERTY:SET,<Property Name>,<value>```.
18. In the **Token Name** textbox, enter **Disabled**.
19. In the **Value** textbox, enter **true**.
20. Click the **OK Button**.
21. Next, toggle the ```Submit Events as OCADM``` option to On (```Green```).
22. Click **Save**. 

###### Reset Disable Token to False

23. From the **Self Service** Tab main screen, click the Green **Create** Button to create a new Button.
24. In the **Name** textbox, enter **Reset Disable Rule Token False**.
25. In the **Documentation** textbox, enter **This Button will reset the Disable Rule Token to False**.
26. Be sure that the **Confirmation Message** option is toggled to On (```Green```).
27. Under Events, click the Green Add Bar **(+)**.
28. From the Event Template Menu, select ```$PROPERTY:SET,<Property Name>,<value>```.
29. In the **Token Name** textbox, enter **Disabled**.
30. In the **Value** textbox, enter **false**.
31. Click the **OK Button**.
32. Next, toggle the ```Submit Events as OCADM``` option to On (```Green```).
33. Click **Save**. 

###### Add Disable Rule to Test Button 1

34. From the **Self Service** Tab main screen, click the **Blue Edit Button** on **Test Button 1**.
35. Toggle the **Disable Rule** On (```Green```).
36. In the **Disable Rule** textbox, enter ```[[Disabled]]```.
37. Click **Save**.

###### Test Buttons 

:::note 
Be sure that **User Mode** is activated by clicking the **Lock Button** in the Upper Right Hand Corner. It should be **Grey** and **Locked**
:::

38. In **User Mode**, from the **Self Service** Tab main screen, click the **Create Disable Rule Token** Button.
39. From the **Service Request** page, Click the **Submit Button** to run the process. The Progress Bar will display. A successful run will be indicated with a **Green** Check Mark Icon.
40. Click the **OK Button** to exit the Request Process.
41. Next, from the **Self Service** Tab main screen, click the **Set Disable Rule Token True** Button.
42. From the **Service Request** page, Click the **Submit Button** to run the process. The Progress Bar will display. A successful run will be indicated with a **Green** Check Mark Icon.
43. Click the **OK Button** to exit the Request Process.

:::note
If both of the previous **Service Requests** were successful, **Test Button 1** should now be visibly Greyed Out and Unavailable
:::

44. To reactivate **Test Button 1**, from the **Self Service** Tab main screen, click the **Reset Disable Token False** Button.
45. From the **Service Request** page, Click the **Submit Button** to run the process. The Progress Bar will display. A successful run will be indicated with a **Green** Check Mark Icon.
46. Click the **OK Button** to exit the Request Process.

:::note 
**Test Button 1** should now be Active and Available
:::