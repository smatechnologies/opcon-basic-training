---
sidebar_panel: 'Global Properties'
---

<figure>
    <audio
        controls
        src="audiobasic/GlobalProperties.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Global Properties** are variables stored in the database that can be used throughout OpCon 
  * Properties are defined with a name and a value
* To use a Global Property in OpCon (Command Lines, Events, etc.) use the following notation:

```
[[<Global Property Name>]]
```

Example:
```
[[PATH-TO-SCRIPTS]]
```

* OpCon will replace the Global Property with the given value at Runtime

* The **Global Properties** screen is used to manage OpCon Instance Properties that apply to the entire environment  

<a href="imgbasic/201.png" target="_blank"><img src="imgbasic/201.png" width="500"></img></a>  

* Using a Global Property in Command Line

<a href="imgbasic/202.png" target="_blank"><img src="imgbasic/202.png" width="500"></img></a>

###### (Click Images to Enlarge)

### Troubleshooting Global Properties

<figure>
    <audio
        controls
        src="audiobasic/TroubleshootingGlobalProperties.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

Example

* Job Stays On Hold
  * If SAM is unable to Resolve a Property, it will place the Job “On Hold” at Runtime
  * Both the SAM and Critical Logs will report which Property has an error

<a href="imgbasic/203.png" target="_blank"><img src="imgbasic/203.png" width="500"></img></a> 

### Encrypted Global Property

<figure>
    <audio
        controls
        src="audiobasic/EncryptedGlobalProperty.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>


* The Value of a **Global Property** can be **Encrypted** by simply checking the **Encrypted** check box and saving the **Global Property**
* This value is decrypted by **LSAM** at Runtime
* **There is no decrypt option** 
* Good for things like passwords

<a href="imgbasic/204.png" target="_blank"><img src="imgbasic/204.png" width="250"></img></a>  

<a href="imgbasic/205.png" target="_blank"><img src="imgbasic/205.png" width="250"></img></a>  

###### (Click Images to Enlarge)