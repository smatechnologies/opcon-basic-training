---
sidebar_panel: 'Departments'
---

<figure>
    <audio
        controls
        src="audiobasic/Departments.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Secure Function Privileges associated with individual Job records
* To make use of the Department category, Function Privileges must be granted, and Access Code must be associated with Jobs needing this type of security 
* A single Department can be used to secure as many different Jobs as necessary

_Three Steps to setting up Departments in OpCon_:  

* Create a Department (**Security > Departments**) 
* Assign Department Function Privileges to a Department (**Security > Privileges > Departmental Function Privileges**)
* Assign a Department to any Job which requires those Department Function Privileges (**Job Master**)
* Only required field is **Name**  
* Using Documentation field for Department rationale is best practice

<a href="imgbasic/307.png" target="_blank"><img src="imgbasic/307.png" width="500"></img></a>

### Departmental Function Privileges

* **Departmental Function Privileges** are used to grant operational Privileges related to Jobs
* Departmental Function Privileges can be filtered by Department:
    * All Departments
    * ```<General>``` Department
    * User Defined Departments
* When some Privileges are granted, the selected Role must also have ‘additional’ Function Privilege(s) granted
    * Example: A Role that is granted the **Add Jobs to Daily Schedules** Privilege must also be granted the **View Jobs in Daily Schedules** and the  **View Jobs in Master Schedules** Privileges to perform this function

<a href="imgbasic/308.png" target="_blank"><img src="imgbasic/308.png" width="500"></img></a>

### Departments in the Job Master

* A Department is assigned to Jobs in Job Details tab of Job Master
* A Job can only be assigned to **one** Department
* Default Department is ```<General>```

<a href="imgbasic/309.png" target="_blank"><img src="imgbasic/309.png" width="500"></img></a>

###### (Click Images to Enlarge)