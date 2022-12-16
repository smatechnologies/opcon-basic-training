---
sidebar_label: 'Global Properties'
---

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/GlobalProperties.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* **Global Properties** are variables stored in the database that can be used throughout OpCon 
  * Properties are defined with a name and a value

:::note Example
To use a Global Property in OpCon (Command Lines, Events, etc.) use the following notation:

```[[<Global Property Name>]]```

Example:

```[[PATH-TO-SCRIPTS]]```
:::

* OpCon will replace the Global Property with the given value at Runtime

* The **Global Properties** screen is used to manage OpCon Instance Properties that apply to the entire environment  

![Picture201](/imgbasic/201.png)

* Using a Global Property in Command Line

![Picture202](/imgbasic/202.png)

### Troubleshooting Global Properties

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/TroubleshootingGlobalProperties.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

:::note Example
* Job Stays On Hold
  * If SAM is unable to Resolve a Property, it will place the Job “On Hold” at Runtime
  * Both the SAM and Critical Logs will report which Property has an error
:::

![Picture203](/imgbasic/203.png)

### Encrypted Global Property

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/EncryptedGlobalProperty.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio>
-->

* The Value of a **Global Property** can be **Encrypted** by simply checking the **Encrypted** check box and saving the **Global Property**
* This value is decrypted by **LSAM** at Runtime
* **There is no decrypt option** 
* Good for things like passwords

![Picture204](/imgbasic/204.png)

![Picture205](/imgbasic/205.png)