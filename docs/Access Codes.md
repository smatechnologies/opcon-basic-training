---
sidebar_label: 'Access Codes'
---

![Access Codes Main Screen](../static/imgbasic/access-codes-main.png)

* In Solution Manager, **Access Codes** is found in **Library > Security > Access Codes**
* Access Codes can be used to secure individual Job records 
* A single Access Code can be used to secure as many different Jobs as necessary

![Access Codes Add](../static/imgbasic/sm-access-codes-add.png)

### Access Codes in Master Job

![](../static/imgbasic/AC_Master.png)

* ```<None>``` is the default Access Code for all Jobs
* An Access Code is assigned to Jobs in Job Details tab of Job Master
* A Job can only be assigned to **one** Access Code

### Access Code Privileges

![](../static/imgbasic/AccessCodePriv.png)

* To implement Access Codes for securing Jobs, each User must have appropriate Access Code Privileges through one or more Roles to view and update Jobs
    * All Roles automatically have Privileges to update any Jobs with ```<None>``` Access Code
* When additional Access Codes are created, the Administrator must grant Privileges for Access Codes to the appropriate Role Name


## Enterprise Manager

<details>

* In Enterprise Manager, **Access Codes** is found in **Security > Access Codes**

### Access Codes

![Access Codes Main Screen](../static/imgbasic/312.png)

### Access Code Privileges

![Access Codes Privileges](../static/imgbasic/313.png)

### Job Master

![Access Codes in Job Master](../static/imgbasic/314.png)

</details>