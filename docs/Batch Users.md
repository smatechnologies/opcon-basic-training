---
sidebar_label: 'Batch Users'
---

* The **Batch User** editor is used to create and maintain Batch Users that are required for processing Jobs on Windows, i5OS, MCP, UNIX and OpenVMS

* Privileges attached to these Batch Users are managed in the **Batch User Privileges** screen

* These operating systems require a valid User ID to be associated with each Job submitted by OpCon
    * IBM i (user ID)
    * MCP (Usercode)
    * OpenVMS (user ID)
    * UNIX (user ID / group ID)
    * Windows (user ID)

:::note
SQL Agent also requires an added valid Batch User Privilege
:::

## Solution Manager

<details>

* In Solution Manager, **Batch Users** is found in **Library > Security > Batch Users**

### Batch User Selection

||
| ------------------------------ |
|![](../static/imgbasic/sm-batch-users-select.png)| 

### Add Batch User

||
| ------------------------------------|
|![](../static/imgbasic/sm-batch-users-add.png)|

### Batch User Privileges

||
| ------------------------------------------ |
|![](../static/imgbasic/sm-batch-user-privileges.png)|

</details>

## Enterprise Manager

<details>

* In Enterprise Manager, **Batch Users** is found in **Security > Batch Users**

### Batch User Selection

|| 
| --------------------------------------- |
|![](../static/imgbasic/3305.png)|

### Batch User Privileges

||
| --------------------- |
|![](../static/imgbasic/3306.png)|

</details>