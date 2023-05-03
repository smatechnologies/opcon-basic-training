---
sidebar_label: 'Global Properties'
---

* **Global Properties** are variables stored in the database that can be used throughout OpCon 
  * Properties are defined with a name and a value

:::tip Example
To use a Global Property in OpCon (Command Lines, Events, etc.) use the following notation:

```[[<Global Property Name>]]```

Example:

```[[PATH-TO-SCRIPTS]]```
:::

* OpCon will replace the Global Property with the given value at Runtime

* The **Global Properties** screen is used to manage OpCon Instance Properties that apply to the entire environment  

### Troubleshooting Global Properties

:::tip Example
* Job Stays On Hold
  * If SAM is unable to Resolve a Property, it will place the Job “On Hold” at Runtime
  * Both the SAM and Critical Logs will report which Property has an error
:::


### Encrypted Global Property


* The Value of a **Global Property** can be **Encrypted** by simply checking the **Encrypted** check box and saving the **Global Property**
* This value is decrypted by **LSAM** at Runtime
* **There is no decrypt option** 
* Good for things like passwords

* In Solution Manager, **Global Properties** is found in **Library > Administration > Global Properties**

### Add New Global Property

![](../static/imgbasic/sm-global-properties-add-new-property.png)

### Global Properties in Command Line

### Encrypted Global Properties

![](../static/imgbasic/sm-global-properties-encrypted-set.png)

![](../static/imgbasic/sm-global-properties-encrypted-view.png)

![](../static/imgbasic/sm-global-properties-command-line.png)

### Troubleshooting Global Properties in Logs

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