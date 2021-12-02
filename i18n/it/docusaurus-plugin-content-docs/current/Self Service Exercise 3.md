---
sidebar_label: 'Self Service Exercise 3'
---

### Self Service Exercise 3: Stylizing a Button

1. In Solution Manager, select the **Self Service** Tab.
2. Be sure that **Admin Mode** is activated by clicking the **Lock Button** in the Upper Right Hand corner. It should be **Green** and **Unlocked**.
3. From the **Self Service** Tab main screen, click the **Blue Edit Button** on **Test Button 1**.
4. Toggle the **Custom Html** option to On (```Green```).
5. In the **Custom Html** textbox, enter the following as a template:

```
<div style="background-color: #043A4F;height: 12px;width:200px;border-radius: 3px;border: 2px solid #043A4F;color: white;font-size: 14px;font-weight: bold;padding: 25px">

    <span class="v-icon FontAwesome" style="color: #93D7FA">&#xf0ac</span>

    <span>SERVICE REQUEST NAME</span>
</div>
```

6. Change the **background color** Hex Code from **#043A4F** to **#FA4616**.
7. Change the **border: 2px solid #043A4F** to **border: 8px dashed #1155cc**
8. Change the **v-icon color** Hex Code from **#93D7FA** to **white**.
9. Change the **v-icon** Unicode from **xf0ac** to **xf1C0**. 

:::note 
The preview Button should now be Orange with white text. The icon should be a database symbol that is also white
:::

10. Click **Save** to accept the Button modifications.

* For practice, choose another button and stylize different components. 

    * A list of Hex Code Colors can be referenced at <a href="https://htmlcolorcodes.com/" target="_blank">https://htmlcolorcodes.com/</a>
    * A list of Unicode Icons can be referenced at <a href="https://fontawesome.com/icons" target="_blank">https://fontawesome.com/icons</a>