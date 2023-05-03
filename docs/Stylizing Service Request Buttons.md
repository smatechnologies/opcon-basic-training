---
sidebar_label: 'Stylizing Service Request Buttons'
---

You can stylize the Service Request button using custom HTML

To customize the button:

* Click the ```Edit``` button at the top-right corner of the Service Request button to display the Edit Service Request page
* Toggle the **Custom Html** switch on  
A text field displays for entering the custom HTML code

![](../static/imgbasic/SelfServiceCustomHTMLBlank.png)

Enter the following template HTML code:

```
<div style="background-color: #043A4F;height: 12px;width:200px;border-radius: 3px;border: 2px solid #043A4F;color: white;font-size: 14px;font-weight: bold;padding: 25px">

    <span class="v-icon FontAwesome" style="color: #93D7FA">&#xf0ac</span>

    <span>SERVICE REQUEST NAME</span>
</div>
```

Modify the code as needed

* A preview of the Button and any modifications will appear above the text field

![](../static/imgbasic/SelfServiceCustomHTMLExample.png)

Below are a few recommendations for updating the icon and text on the button:

To modify the font icon that appears on the button:

* Change the **color** of the font icon by entering a new **HEX** color code in the template code:

 ```<span class="v-icon FontAwesome" style="color: #ff8f8f">&#xf0ac</span>``` 

 **#ff8f8f**

![](../static/imgbasic/SelfServiceCustomHTMLIconChange.png)

* Change the **appearance** of the font icon by entering or pasting a new **Unicode** in the template code:

```<span class="v-icon FontAwesome" style="color: #93D7FA">&#xf1C0</span>```

**xf1C0**

![](../static/imgbasic/SelfServiceCustomHTMLIconChangeUnicode.png)
