---
sidebar_label: 'Escalation Manager'
---

![](../static/imgbasic/sm-escalation-manager-main.png)

* Allows users to create Escalation Rules which will be tied to Notifications
* Escalation Rules are tied to Notifications setup in Notification Manager
* **Groups** must be created **BEFORE Rules**

### Groups

![](../static/imgbasic/sm-escalation-manager-group.png)

* Groups specify who will be tied to a Notification
* Email address is gathered from the User Account screen
* Specifies who can acknowledge an Escalated Notification
* A Global Property can have OpCon automatically update which users are tied to group

### Rules

![](../static/imgbasic/sm-escalation-rule-add.png)

* Escalation Rules lists:
    * Which group will be alerted
    * Number of alerts before escalating
    * Minutes between alerts
* Multiple Groups can be listed to elevate alerts after a configured number of Notifications

![](../static/imgbasic/sm-escalation-rule-sequence.png)

### Escalation Rule

![](../static/imgbasic/NotificationEscalation.png)

* Tie Escalated Notifications within Notification Manager
* Only one Escalation Rule can be set up per Notification
* Escalation Rules can only be set to emails at this time



## Enterprise Manager

<details>

#### Selection Screen

![](../static/imgbasic/326.png)

#### Add a Group

![](../static/imgbasic/328.png)

#### Rule Sequence

![](../static/imgbasic/329.png)

#### Definitions/Descriptions

![](../static/imgbasic/330.png)


#### Escalation Acknowledgement (Enterprise Manager)

* Once Escalation is triggered, any User tied to an Escalation Group must Acknowledge it to stop the Escalation Cycle
* End Alert in **Escalation Acknowledgement** screen
* A Symbol will appear in bottom of Enterprise Manager near the SAM Pulse, showing how many Notifications are being Escalated

![](../static/imgbasic/331.png)

![](../static/imgbasic/332.png)
 
#### Escalation Alert Icon in Tooltip Bar

![](../static/imgbasic/333.png)

</details>