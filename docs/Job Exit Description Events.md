---
sidebar_label: 'Job Exit Description Events'
---

* When defining an Event based on Exit Description two things must be set:
    * **Comparison Operator**
        * Be careful using anything but **Equal To**
    * Each Operating System has rules for Exit Description Names and Values
    * UNIX – Use **Contains** unless the **full Exit Code** is spelled out 
        * If Equal To is selected, the **full Exit Code** is required _including preceding zeros and any colons, plus signs, etc._
    * **Windows** – Use the final digits
        * ```100``` instead of ```000000000100```


### Trigger Details

||
|---|
|![](../static/imgbasic/sm-exit-description-event.png)|

## Enterprise Manager

<details>

#### Trigger Details

||
|---|
|![](../static/imgbasic/354.png)|

||
|---|
|![](../static/imgbasic/355.png)|

</details>