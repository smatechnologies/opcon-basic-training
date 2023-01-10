---
sidebar_label: 'Resources'
---

* **Resource**: user-defined value consisting of name and numeric limit
* Resources are used to manage and limit the number of concurrently running Jobs across Schedules and Machines in OpCon
* **Max Concurrent Jobs** in Advanced Machine Properties limits the number of concurrently running Jobs on a specific Machine

	* **All** Resources can be set for Dependencies  
	* SAM is responsible for keeping track of Resources in use

:::note
If all Resources are in use, SAM waits until a Resource is available before submitting the next Job
:::

## Solution Manager

<details>

* In Solution Manager, **Resources** is found in **Library > Administration > Resources**

||
|-----------------|
|![](/imgbasic/sm-resources-main.png)|

### Create/Edit Resource

||
|-----------------|
|![](/imgbasic/sm-resource-add.png)|

### Resource Dependencies in Job Details

||
|-----------------|
|![](/imgbasic/sm-resource-job-screen.png)|

### Edit/Set Resource Dependency

||
|-----------------|
|![](/imgbasic/sm-resource-dependency-add.png)|

### Trigger Email Alert of Resource Properties

||
|-----------------|
|![](/imgbasic/sm-resource-properties.png)|

||
|-----------------|
|![](/imgbasic/sm-resource-properties-email.png)|

### Frequency - SAM Priority

* Used if Max Concurrent of the following two features is met:
	* Machine has reached Max Jobs limit (Windows and UNIX defaults are ```50```)
	* A Resource has all Resources in use
* The Job with highest **SAM Priority** will run first if several Jobs are waiting for a Resource or a Machine Max Job to free up

||
|-----------------|
|![](/imgbasic/sm-sam-priority-job-screen.png)|

||
|-----------------|
|![](/imgbasic/sm-sam-priority-list.png)|

</details>

## Enterprise Manager

<details>

* In Enterprise Manager, **Resources** is found in **Administration > Resources**

### Create/Edit Resource

||
|-----------------|
|![](/imgbasic/403.png)|

### Resource Dependencies

||
|-----------------------------------|
|![](/imgbasic/401.png)|

### Edit/Set Resource Dependency

||
|--------------------------------|
|![](/imgbasic/402.png)|


### Resources - Instance Properties

* Max value of a Resource can be retrieved

```[[RM.ResourceName]]```

* Number of Resources “in use” can also be retrieved 

```[[RU.ResourceName]]```

||
|-----------------------------------------|
|![](/imgbasic/404.png)|

### Frequency - SAM Priority

* Used if Max Concurrent of the following two features is met:
	* Machine has reached Max Jobs limit (Windows and UNIX defaults are ```50```)
	* A Resource has all Resources in use
* The Job with highest **SAM Priority** will run first if several Jobs are waiting for a Resource or a Machine Max Job to free up

||
|-----------------|
|![](/imgbasic/405.png)|

||
|-----------------|
|![](/imgbasic/406.png)|

</details>