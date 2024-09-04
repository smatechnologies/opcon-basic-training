---
sidebar_label: 'Thresholds'
---

![](../static/imgbasic/sm-thresholds-main.png)

* In Solution Manager, **Thresholds** is found in **Library > Administration > Thresholds**
* User-defined placeholder 
* Consists of a name and a numeric value 
* Help resolve dependencies that cannot be resolved by Job Dependency 
	* (i.e. – A specification can be made for a Job to not start until a Threshold condition is met)

### Usage

![](../static/imgbasic/sm-thresholds-add.png)

* Create a Threshold
* Assign Threshold Dependencies
* Create a trigger updating Threshold
* Reset Threshold to initial value once complete

### Threshold Section

![](../static/imgbasic/sm-thresholds-job.png)

* The **Threshold Dependency** section allows for the definition and maintenance of Dependencies on a Job using a Threshold 
* The **Threshold Update** can be used to start a Job after a certain value is reached

### Threshold Dependencies

![](../static/imgbasic/sm-thresholds-dependency.png)

### Threshold Update

![](../static/imgbasic/sm-thresholds-update.png)

### Threshold Email Alerts

* **Threshold Value** can be retrieved using ```TH.``` in front of the Threshold Name
  * Example: ```[[TH.<ThresholdName>]]```

![](../static/imgbasic/sm-threshold-properties-notification.png)

![](../static/imgbasic/sm-threshold-email-result.png)



## Enterprise Manager

<details>

* In Enterprise Manager, **Thresholds** is found in **Administration > Thresholds**

![](../static/imgbasic/407.png)

### Create a Threshold

![](../static/imgbasic/408.png) 

### Threshold Update

![](../static/imgbasic/409.png)

![](../static/imgbasic/410.png)

### Threshold Dependencies

![](../static/imgbasic/411.png)

### Threshold Instance Properties

* Current value of Threshold can be retrieved: ```[[TH.ThresholdName]]```

![](../static/imgbasic/413.png)

</details>