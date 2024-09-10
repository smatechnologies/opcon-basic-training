---
sidebar_label: 'Global Properties'
---

*  **Global Properties** are variables stored in the database that can be used throughout OpCon 
  *  Properties are defined with a name and a value
*  The **Global Properties** screen is used to manage OpCon Instance Properties that apply to the entire environment  
*  SAM will replace the Global Property with the given value at runtime

### Defining a New Global Property

*  In Solution Manager, **Global Properties** is found in **Library > Administration > Global Properties**

![](../static/imgbasic/sm-global-properties-add-new-property.png)

### Encrypted Global Property


*  The Value of a **Global Property** can be **Encrypted** by simply checking the **Encrypted** check box and saving the **Global Property**
*  This value is decrypted by **LSAM** at Runtime
*  **There is no decrypt option** 
*  Good for things like passwords or other sensitive data

### Defining an Encrypted Global Properties

![](../static/imgbasic/sm-global-properties-encrypted-set.png)

![](../static/imgbasic/sm-global-properties-encrypted-view.png)


### Global Properties in Command Line

*  To use a Global Property in OpCon (Command Lines, Events, etc.) use the following notation: ```[[<Global Property Name>]]```

![](../static/imgbasic/sm-global-properties-command-line.png)

:::tip Best Practice

Any time you see the **Property Selector** icon, ![](../static/imgbasic/PropertySelectorIcon.png), you can use a property in that field. It is best practice to click this icon to pop up the Property Selector window to select the property you want to use.

![](../static/imgbasic/PropertySelectorWindow.png)
:::

### Troubleshooting Global Properties in Logs

*  If SAM is unable to Resolve a Property, the job will place the Job “On Hold"
  *  Job Stays On Hold
*  Both the SAM and Critical Logs will report which Property has an error


![](../static/imgbasic/sm-global-property-fail-summary.png)



## Enterprise Manager

<details>

* In Enterprise Manager, **Global Properties** is found in **Administration > Global Properties**

#### Add Global Properties

![Picture201](../static/imgbasic/201.png)

#### Global Properties in Command Line

![Picture202](../static/imgbasic/202.png)

#### Encrpyted Global Properties

![Picture204](../static/imgbasic/204.png)
![Picture205](../static/imgbasic/205.png)

#### Troubleshooting Global Properties in Logs

![Picture203](../static/imgbasic/203.png)

</details>