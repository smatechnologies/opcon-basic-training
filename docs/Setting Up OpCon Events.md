---
sidebar_label: 'Setting Up OpCon Events'
---

To add a new OpCon Event in Self Service:

* Within the **New Service Request** page, click the **Green** ```Add``` button next the **Events** Label
* Select an **OpCon Event Template** 
* Insert **Variables** into the Event using the notation: ```${variable}```

||
|---|
|![](../static/imgbasic/SelfServiceEditEvent.png)|

* The Variables will then be picked up as **User Inputs** to be configured upon Request Initiation

||
|---|
|![](../static/imgbasic/SelfServiceVariableUserInputs.png)|

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

||
|---|
|![](../static/imgbasic/SelfServiceEventManualEditButton.png)|

||
|---|
|![](../static/imgbasic/SelfServiceEventManualEditScreen.png)|

### Order of Events

* The order of Defined Events can be altered by using the Up and Down arrows at the top of the Events List
    * The order shown in the Events List is the order, Top Down, in which the Events will be passed to and processed by the SAM

||
|---|
|![](../static/imgbasic/SelfServiceEventOrder.png)|