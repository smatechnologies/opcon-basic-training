---
sidebar_label: 'Self Service Exercise 1'
---

### Self Service Exercise 1: Create a Button


1. In Solution Manager, select the **Self Service** Tab.
2. Be sure that **Admin Mode** is activated by clicking the **Lock Button** in the Upper Right Hand corner. It should be **Green** and **Unlocked**.
3. In Self Service, click the Green **Create** Button to create a new Button. 
4. In the **Name** textbox, enter **Test Button 1**.
5. In the **Documentation** textbox, enter **This is a Test Button.**
6. Be sure that the **Confirmation Message** option is toggled to On (```Green```).
7. Under Events, click the Green Add Bar **(+)**.
8. From the Event Template Menu, select ```$CONSOLE:DISPLAY,<message>```.
9. In the Message textbox, enter **This is a test message to the Console**. 
10. Click the **OK Button**.
11. Next, toggle the ```Submit Events as OCADM``` option to On (```Green```).
12. Click **Save**. 
13. Activate **User Mode** by clicking the **Lock Button** in the Upper Right Hand corner. It should now be **Gray** and **Locked**.
14. Click **Test Button 1**.
15. Click the **Submit Button** to run the process. The Progress Bar will display. A successful run will be indicated with a **Green** Check Mark Icon.
16. Click the **OK Button** to exit the Request Process.
17. Open the ```SAM.log``` file location to verify that the Message has written to the Console. 