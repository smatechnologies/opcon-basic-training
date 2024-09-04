---
sidebar_label: 'Server Options'
---

## Solution Manager

### Server Options

* Found under **Library** > **Administration** > **Server Options**.
* Only available to those in the Role, **Role_ocadm**, or those with **View Server Options** or **Maintain Server Options**
* Here admins can manage the settings for:
  * SAM (General)
  * Logging
  * Security
  * Notification
  * SMTP
  * Vision
  * Time

#### SAM or General Settings

* Here you can configure the settings for things like:
  * Job Dependency Offset Type
  * Allowing wildcards in Events
  * TLS Certificate Number

<img src="imgbasic/General.png" width="750"/>

#### Logging

* Here you can configure the settings for things like:
  * Log job dependency errors to Critical.log
  * Maximum number of days logs should be kept

<img src="imgbasic/Logging.png" width="750"/>

#### Security

* Here you can configure the settings for things like:
  * Password Experation Rules
  * Password Strength Requirements
  * Number of failed log in attempts

<img src="imgbasic/Security.png" width="750"/>

#### Notifications

* Here you can configure the settings for things like:
  * Number of days to keep notification history
  * SPO & SNMP settings
  * License Notificaitons

<img src="imgbasic/Notifications.png" width="750"/>

#### SMTP

* Here you can configure the settings for things like:
  * UNC Access
  * SMTP Settings
  * SMS Settings

<img src="imgbasic/SMTP.png" width="750"/>

#### Vision

* Here you can configure the settings for things like:
  * Vision card history

<img src="imgbasic/Vision.png" width="750"/>

#### Time

* Here you can configure the settings for things like:
  * Build Time

<img src="imgbasic/Time.png" width="750"/>



## Enterprise Manager

<details>

* In Enterprise Manager, **Server Options** is found in **Administration > Server Options**

* The Server Options editor controls global settings for OpCon
  * Changes made in this screen will apply to the entire environment
  * Can only be accessed by users under **ocadm**

### General Options

![](../static/imgbasic/302.png)

### Time Settings

![](../static/imgbasic/303.png)

### License Notifications

![](../static/imgbasic/304.png)

### SMTP Server Settings
  
![](../static/imgbasic/305.png)

</details>