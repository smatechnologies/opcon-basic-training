---
sidebar_panel: 'Setting Up User Inputs'
---

* After a variable has been defined within the OpCon Event definition it will become available as a User Input
* User Input fields will display when the Service Request Button is clicked

<a href="imgbasic/SelfServiceRequestUserInputMainScreen.png" target="_blank"><img src="imgbasic/SelfServiceRequestUserInputMainScreen.png" width="500"></img></a>

* There are several options for User Input types:
    * Text
    * Number
    * Date
    * Choice
    * Text Collection
    * Master Schedule
    * Master Job

### Configuring User Inputs

To configure User Inputs: 
* double-click the specific User Input on the Service Request definition page

or

* Select the User Input in the list and click the **Blue** ```Edit``` button above the list

* By default, the system sets a new Variable as a ```Text``` type User Input without any validation
    * This means users will be able to type anything into the field 
    * The content of that text field will be placed into the OpCon Event just before the SAM receives it
* The order of the User Inputs is modified by using the up/down arrows at the top of the User Input List

<a href="imgbasic/SelfServiceUserInputSelect.png" target="_blank"><img src="imgbasic/SelfServiceUserInputSelect.png" width="500"></img></a>

<a href="imgbasic/SelfServiceUserInputSelectType.png" target="_blank"><img src="imgbasic/SelfServiceUserInputSelectType.png" width="500"></img></a>

### Configuring Text User Inputs

<a href="imgbasic/SelfServiceUserInputText.png" target="_blank"><img src="imgbasic/SelfServiceUserInputText.png" width="500"></img></a>

* Select ```Text``` in the User Input Type drop-down list
* Specify the validation rules for the User Input, using the following options:
    * **Secret**: Allows the User to specify that this User Input is a **password/secret** field, in which case the value the User enters will be masked 
        * One such use case would be injecting a password somewhere in the Events to send to OpCon (e.g., job instance property)
    * **Minimum Characters**: Allows the User to specify a minimum character length restriction
    * **Maximum Characters**: Allows the User to specify a maximum character length restriction
    * **Invalid Characters**: Allows the User to identify any invalid [restricted] characters
    * **Regular Expression Pattern**: Allows the User to build a regular expression matcher pattern to validate what the User has entered in the text field before it is injected
    * **Custom Error Message**: Allows the User to define a customized error message that will be displayed if there is a regular expression text validation exception thrown
        * For example, the following might be a custom error message provided to users when they have entered incorrect phone number formats: "Please enter a 10-digit phone number with hyphens (e.g., 281-446-5000)"
* Specify how to format the value being injected within the OpCon Event, using the following output formatting options:
    * **Characters to Strip**: Allows the User to specify which character(s) to remove from the User Input (after it has been validated)
    * **Padding**: Allows the User to specify the padding direction (left/right), the padding length, and the character used to pad

### Configuring Number User Inputs

<a href="imgbasic/SelfServiceUserInputNumber.png" target="_blank"><img src="imgbasic/SelfServiceUserInputNumber.png" width="500"></img></a>

* Select ```Number``` in the User Input Type drop-down list
* Specify the validation rules for the User Input, using the following options:
    * **Minimum**: Allows the User to specify the minimum value allowed
    * **Maximum**: Allows the User to specify the maximum value allowed

### Configuring Date User Inputs

<a href="imgbasic/SelfServiceUserInputDate.png" target="_blank"><img src="imgbasic/SelfServiceUserInputDate.png" width="500"></img></a>

* Select ```Date``` in the User Input Type drop-down list
* Set a date range for the User Input, using the following options:
    * Start Date: Allows the User to specify a start date for the range. If configured, Users will not be able to specify or enter a date that is earlier than the specified start date
    * Today: Optionally, the User can use the Today toggle switch to set the current day as the Start Date
    * End Date: Allows the User to specify an end date for the range. If configured, Users will not be able to specify or enter a date that comes later than the specified end date
    * Today: Optionally, the User can use the Today toggle switch to set the current day as the End Date
* Define an output format or select one of the following predefined formats from the drop-down list:
    * ```yyyy/MM/dd``` (2009/06/15)
    * ```yyyy-MM-dd``` (2009-06-15)
    * ```EEEE MMMM d yyyy``` (Monday June 15 2009)
    * ```E MMMM d yyyy``` (Mon June 15 2009)
    * ```MM/dd/yyyy``` (06/15/2009)
    * ```M/d/yy``` (6/15/09)
    * ```MMMM d yyyy``` (June 15 2009)

When setting custom date patterns (e.g., ```dd/mm/yyyy```, ```mm/dd/yyyy```, ```yyyy-mm-dd```, etc.), the User can make use of the following defined pattern letters (all other characters from 'A' to 'Z' and from 'a' to 'z' are reserved):

* The more commonly used patterns can be used by a combination of y (representing a year digit), M (representing a month digit), and d (representing a date digit) 
* Examples of patterns are: 
    * ```dd/MM/yyyy``` 
    * ```dd-MM-yyyy``` 
    * ```MM/dd/yyyy``` 
    * ```yyyy-MM-dd```
    * ```yyMMdd```

### Configuring Choice User Inputs

<a href="imgbasic/SelfServiceUserInputChoiceMain.png" target="_blank"><img src="imgbasic/SelfServiceUserInputChoiceMain.png" width="500"></img></a>

<a href="imgbasic/SelfServiceUserInputChoiceConfigure.png" target="_blank"><img src="imgbasic/SelfServiceUserInputChoiceConfigure.png" width="500"></img></a>

* Select ```Choice``` in the User Input Type drop-down list

* The Choice toolbar options define and order the set of values that will be presented to Users for selection when they run the Service Request
    * The ```Name``` field represents what is displayed the the User, while the ```Value``` field represents what is submitted to OpCon.

### Configuring Text Collection User Inputs

<a href="imgbasic/SelfServiceUserInputTextCollection.png" target="_blank"><img src="imgbasic/SelfServiceUserInputTextCollection.png" width="500"></img></a>

* Select ```Text Collection``` in the User Input Type drop-down list
* Specify the validation rules for the User Input, using the following options:
    * **Restrict Duplicates**: Prevents Users from entering the same value multiple times
    * **Delimiter**: Allows the User to specify the special character used to separate the user-defined values when concatenated to a single string while injected into the OpCon Event for processing by the SAM
    * **Minimum Characters**: Allows the User to specify a minimum character length restriction
    * **Maximum Characters**: Allows the User to specify a maximum character length restriction
    * **Invalid Characters**: Allows the User to identify any invalid [restricted] characters
    * **Regular Expression Pattern**: Allows the User to build a regular expression matcher pattern to validate what the User has entered in the text field before it is injected
    * **Custom Error Message**: Allows the User to define a customized error message that will be displayed to Users if there is a regular expression text validation exception thrown
        
    :::note example 
    The following might be a custom error message provided to Users when they have entered incorrect phone number formats: **"Please enter a 10-digit phone number with hyphens (e.g., 281-446-5000)"**
    :::

### Configuring Master Schedule User Inputs

<a href="imgbasic/SelfServiceUserInputMasterSchedule.png" target="_blank"><img src="imgbasic/SelfServiceUserInputMasterSchedule.png" width="500"></img></a>

* Select Master Schedule in the User Input Type drop-down list

### Configuring Master Job User Inputs

<a href="imgbasic/SelfServiceUserInputMasterJob.png" target="_blank"><img src="imgbasic/SelfServiceUserInputMasterJob.png" width="500"></img></a>

* Select Master Job in the User Input Type drop-down list