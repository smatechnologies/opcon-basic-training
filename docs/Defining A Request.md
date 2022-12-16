---
sidebar_label: 'Defining A Request'
---

The Service Definition is composed of serveral fields, many of which are optional:

<a href="imgbasic/SelfServiceRequestDetails.png" target="_blank"><img src="imgbasic/SelfServiceRequestDetails.png" width="500"></img></a>

* **Service Request Name** (```Required```)
    * The Service Request Name will display on the Service Request Button
* **Documentation** (```Optional```)
    * Provides instructions about what the Service Request does when users click the button
    * The text will appear as a tooltip on the button
* **Category** (```Optional```)
    * Associates the Service Request with a pre-defined Category
* **Confirmation Message** (```Optional```)
    * Shows the Documentation as part of the confirmation page when the Service Button is clicked
    * The Confirmation Message toggle must be set to ```True``` when an Environmental Variable has been defined
* **Custom HTML** (```Optional```)
    * Allows the customization of HTML code to personalize the Service Request Button display
* **Disable Rule** (```Optional```)
    * Allows definition of a rule to disable the Service Request Button
* **Hide Rule** (```Optional```)
    * Allows definition of a rule to hide the Service Request Button

<a href="imgbasic/SelfServiceRequestDetails2.png" target="_blank"><img src="imgbasic/SelfServiceRequestDetails2.png" width="500"></img></a>

* **Events** (```Required```)
    * Allows the definition of Events initiated by the Service Request Button
* **Track Event Executions** (```Optional```)
    * Monitors the execution of any job dynamically
    * If the Service Request is defined with $JOB:ADD events, the option will track added Jobs to monitor for success
* **Submit Events as OCADM** (```Optional```)
    * If using the ```ocadm``` role:
    * Events will always proceed without privilege issues
    * If not selected, the SAM will check for OpCon User privileges when the Service Request Button is clicked
* **User Inputs** (```Optional```)
    * When variables are defined in OpCon Events, they will automatically be picked up and used as User Inputs
    * Will display when the Service Request button is clicked
    * Users can provide values to replace the variables in OpCon Events
* **Show for Role** (```Required```)
    * Allows the User to assign the Service Request to one or more OpCon Roles
    * Only users under the granted Role(s) are able to view and initiate the Service Request

###### (Click Images to Enlarge)
