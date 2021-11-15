---
sidebar_label: 'OpCon Events'
---

<figure>
    <audio
        controls
        src="audiobasic/OpConEvents.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

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



<a href="imgbasic/346.png" target="_blank"><img src="imgbasic/346.png" width="500"></img></a>

### Internal vs External Events

<figure>
    <audio
        controls
        src="audiobasic/InternalVSExternalEvents.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

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

### External Event Tokens

:::note
Beginning with OpCon 20.0 - External Event Passwords must be created by generating an ```External Token``` in the Enterprise Manager **Password Update** Menu OR in the ```External Token``` Tab of the User Profile topic in Solution Manager

* Legacy External Event Passwords will still be active within existing systems but must be replaced with an ```External Token``` when a Password change is required
:::

#### Generate External Token in Enterprise Manager

<a href="imgbasic/PictureExternalTokenMenuEM.png" target="_blank"><img src="imgbasic/PictureExternalTokenMenuEM.png" width="500"></img></a>
<a href="imgbasic/PictureExternalTokenEM.png" target="_blank"><img src="imgbasic/PictureExternalTokenEM.png" width="500"></img></a>

#### Generate External Token in Solution Manager

<a href="imgbasic/PictureExternalTokenSM.png" target="_blank"><img src="imgbasic/PictureExternalTokenSM.png" width="500"></img></a>

:::note
Beginning with OpCon 20.0 - External Events are disabled by default and must be enabled by ```ocadm``` or a User with appropriate Administrative Privileges
:::

### Troubleshooting Events - OpConLogs

<figure>
    <audio
        controls
        src="audiobasic/TroubleshootingEventsOpConLogs.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* All failed Events will be listed in both the SAM Log and the Critical Log along with a brief failure description

#### SAM Log

<a href="imgbasic/347.png" target="_blank"><img src="imgbasic/347.png" width="500"></img></a>

#### Critical Log

<a href="imgbasic/348.png" target="_blank"><img src="imgbasic/348.png" width="500"></img></a>

### MSGIN - External Events

<figure>
    <audio
        controls
        src="audiobasic/MSGINExternalEvents.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* "External hook” into OpCon
* ```MSGIN``` is a folder/directory monitored by OpCon’s Agent (LSAM) for Events to be passed to OpCon
    * All major OpCon Agents (LSAMs) have a ```MSGIN``` directory
    * ```MSGIN``` path in Windows is in ```ProgramData```
    * ```MSGIN``` path in UNIX is ```/usr/local/lsam```
    * The Folder should always be empty because Agents pick up Events extremely quickly after dropped into ```MSGIN``` – Testing can be done by viewing SAM.log for behavior status

<a href="imgbasic/349.png" target="_blank"><img src="imgbasic/349.png" width="500"></img></a>

###### (Click Images to Enlarge)