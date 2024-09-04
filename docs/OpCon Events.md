---
sidebar_label: 'OpCon Events'
---

* OpCon Events execute commands within OpCon
* Events can be defined to execute upon:
    * Schedule Completion
    * Job Statuses
    * String Match on LSAM Feedback for Jobs
    * Job Exit Description
    * Event Triggers from Notification Manager
    * External Events

* Almost any action within OpCon can be handled by Events
* Partial list of Event types:
    * CALENDAR
    * CONSOLE
    * JOB (Daily)
    * JOBMASTER (Master)
    * MACHINE
    * NOTIFY
    * PROPERTY
    * RESOURCE
    * SCHEDULE
    * THRESHOLD

## Internal vs External Events

* Internal Events created from Enterprise Manager/Solution Manager (Self-Service)
    * Events tab in Schedule/Job Master
    * Event notification trigger in Notification Manager
    * Events assigned to buttons within Self-Service/Solution Manager
    * Internal Events are authenticated through User Account which created Event in Enterprise Manager

* External Events
    * Anything that can generate a text file with Event syntax can interact with OpCon through an external hook called MSGIN
    * SMA Examples: SMAResource Monitor, SMArt Email, SMAParseFile

:::note
External Events must be authenticated with an **OpCon Username** and an **External Event Password** or **Token**
:::

## External Event Tokens

:::note
Beginning with OpCon 20.0 - External Event Passwords must be created by generating an ```External Token``` in the Enterprise Manager **Password Update** Menu OR in the ```External Token``` Tab of the User Profile topic in Solution Manager

* Legacy External Event Passwords will still be active within existing systems but must be replaced with an ```External Token``` when a Password change is required
:::

### Generate External Token

![](../static/imgbasic/PictureExternalTokenSM.png)

<!--

To add a new OpCon Event in Self Service:

* Within the **New Service Request** page, click the **Green** ```Add``` button next the **Events** Label
* Select an **OpCon Event Template** 
* Insert **Variables** into the Event using the notation: ```${variable}```

### Add New Event

![](../static/imgbasic/SelfServiceEditEvent.png)

* The Variables will then be picked up as **User Inputs** to be configured upon Request Initiation

### User Inputs

![](../static/imgbasic/SelfServiceVariableUserInputs.png)

The following **System Variables** are available specifically for **Solution Manager**:

* ```${SM.USER.LOGIN}```
    * Resolves to the Name defined for the OpCon User who clicked the Service Request Button
* ```${SM.USER.NAME}```
    * Resolves to the Full User Name defined for the OpCon User who clicked the Service Request Button
* ```${SM.USER.EMAIL}```
    * Resolves to the Email Address defined for the OpCon User who clicked the Service Request Button
* ```${SM.USER.COMMENTS}```
    * Resolves to the Comments defined for the OpCon User who clicked the Service Request Button

:::note
* The Event Definition will be previewed in a drop down list below the Event Template
* Event Variables will be resolved before the Event is sent to OpCon
:::

### Manual Edit

To Manually Edit an Event, click the **Manual Edit** button

* Manual Edit can be used to define an Event manually or to Edit an Event that was defined with the Event Template

### Edit User Events

![](../static/imgbasic/SelfServiceEventManualEditButton.png)
![](../static/imgbasic/SelfServiceEventManualEditScreen.png)

### Order of Events

* The order of Defined Events can be altered by using the Up and Down arrows at the top of the Events List
    * The order shown in the Events List is the order, Top Down, in which the Events will be passed to and processed by the SAM

![](../static/imgbasic/SelfServiceEventOrder.png)
-->



## Enterprise Manager

<details>

#### Event Quick Search

![](../static/imgbasic/346.png)

#### Generate External Token

Generate External Token - Enterprise Manager
![](../static/imgbasic/PictureExternalTokenMenuEM.png)
![](../static/imgbasic/PictureExternalTokenEM.png)

:::note
Beginning with OpCon 20.0 - External Events are disabled by default and must be enabled by ```ocadm``` or a User with appropriate Administrative Privileges
:::

#### Troubleshooting Events - OpConLogs


* All failed Events will be listed in both the SAM Log and the Critical Log along with a brief failure description

##### SAM Log

SAM LOG - Enterprise Manager
![](../static/imgbasic/347.png)

##### Critical Log

Critical LOG - Enterprise Manager
![](../static/imgbasic/348.png)

#### MSGIN - External Events

* "External hook” into OpCon
* ```MSGIN``` is a folder/directory monitored by OpCon’s Agent (LSAM) for Events to be passed to OpCon
    * All major OpCon Agents (LSAMs) have a ```MSGIN``` directory
    * ```MSGIN``` path in Windows is in ```ProgramData```
    * ```MSGIN``` path in UNIX is ```/usr/local/lsam```
    * The Folder should always be empty because Agents pick up Events extremely quickly after dropped into ```MSGIN``` – Testing can be done by viewing SAM.log for behavior status

![](../static/imgbasic/349.png)

</details>