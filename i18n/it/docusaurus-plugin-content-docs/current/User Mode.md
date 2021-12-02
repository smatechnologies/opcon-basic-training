---
sidebar_label: 'User Mode'
---

Users not in the ```ocadm``` Role or in a Role without the  ```Maintain Service Request``` privilege will see a Self Service Page with only the Service Request buttons to which they have privileges

<a href="imgbasic/SelfServiceUserModeView.png" target="_blank"><img src="imgbasic/SelfServiceUserModeView.png" width="500"></img></a>

### Run a Service Request in User Mode

* Click the Service Request Button
* Proceed based on one of two prompts:
  - If a confirmation message is configured with no inputs, the Service Request will prompt the User to click the ```Submit``` button to continue or ```Cancel``` button to discard the run Request
  - If user inputs are configured, the Service Request will allow the User to configure the User Input field(s) for the Service Request
* The page will enforce any validation rules
  - If the validation fails, a message in red text will indicate an invalid entry
  - Form vailidation takes place each time the ```Submit``` button is clicked

<a href="imgbasic/SelfServiceRequestRequiredFields.png" target="_blank"><img src="imgbasic/SelfServiceRequestRequiredFields.png" width="500"></img></a>

###### (Click Images to Enlarge)