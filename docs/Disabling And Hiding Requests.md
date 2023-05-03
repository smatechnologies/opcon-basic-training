---
sidebar_label: 'Disabling And Hiding Requests'
---

Rules for Disabling or Hiding Service Request Buttons can be defined using Rules or OpCon Expressions

A Rule can be any of the following:

* A Boolean value (true/false)
* A Token whose value resolves to (true/false)
* A Complex Expression

:::note 
* _Both the ```Disable Rule``` and ```Hide Rule``` are optional_
* _If neither Rule is defined, the Service Request Button will be Enabled and Visible_
:::

### Disabling Service Requests

To define a rule for disabling a service request:

* Click the Edit button at the top-right corner of the Service Request button 

![](../static/imgbasic/SelfServiceSampleButton.png)

* Toggle the Disable Rule switch on
    * A text field displays for entering the expression
    * Enter a boolean value, a token, or a complex expression

![](../static/imgbasic/SelfServiceDisableRuleBoolean.png)

![](../static/imgbasic/SelfServiceDisableRuleToken.png)

![](../static/imgbasic/SelfServiceDisableRuleExpression.png)

### Hiding Service Requests

To define a rule for hiding a service request:

* Click the Edit button at the top-right corner of the Service Request button

![](../static/imgbasic/SelfServiceSampleButton.png)

* Toggle the Hide Rule switch on
    * A text field displays for entering the expression
    * Enter a boolean value, a token, or a complex expression

![](../static/imgbasic/SelfServiceHideRuleBoolean.png)

![](../static/imgbasic/SelfServiceHideRuleToken.png)

![](../static/imgbasic/SelfServiceHideRuleToken.png)