---
sidebar_label: 'Batch Users'
---

<figure>
    <audio
        controls
        src="audiobasic/BatchUsersAndPrivileges.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* The **Batch User** editor is used to create and maintain Batch Users that are required for processing Jobs on Windows, i5OS, MCP, UNIX and OpenVMS

* Privileges attached to these Batch Users are managed in the **Batch User Privileges** screen

<a href="imgbasic/3305.png" target="_blank"><img src="imgbasic/3305.png" width="500"></img></a>


### Batch User Privileges

* These operating systems require a valid User ID to be associated with each Job submitted by OpCon
    * IBM i (user ID)
    * MCP (Usercode)
    * OpenVMS (user ID)
    * UNIX (user ID / group ID)
    * Windows (user ID)

:::note
SQL Agent also requires an added valid Batch User Privilege
:::

<a href="imgbasic/3306.png" target="_blank"><img src="imgbasic/3306.png" width="500"></img></a>  

###### (Click Images to Enlarge)