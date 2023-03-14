---
sidebar_label: 'Thresholds'
---

* User-defined placeholder 
* Consists of a name and a numeric value 
* Help resolve dependencies that cannot be resolved by Job Dependency 
	* (i.e. – A specification can be made for a Job to not start until a Threshold condition is met)

### Usage

* Create a Threshold
* Assign Threshold Dependencies
* Create a trigger updating Threshold
* Reset Threshold to initial value once complete

### Threshold Dependencies

* The Threshold/Resource Dependency tab allows the definition and maintenance of Job Dependencies on Threshold and Resource values 
	* A Threshold can be used to start a Job after a certain value is reached

## Solution Manager

* In Solution Manager, **Thresholds** is found in **Library > Administration > Thresholds**

### Add/Edit Threshold Menu

||
|-------------------------------|
|![](/imgbasic/sm-thresholds-main.png)|

### Create/Edit Threshold

||
|-----------------|
|![](/imgbasic/sm-thresholds-add.png)|

### Threshold Options in Job Details

||
|------------------|
|![](/imgbasic/sm-thresholds-job.png)|

### Threshold Update

||
|------------------|
|![](/imgbasic/sm-thresholds-update.png)|

### Threshold Dependencies

||
|----------------------|
|![](/imgbasic/sm-thresholds-dependency.png)|

### Threshold Instance Properties

* Current value of Threshold can be retrieved: ```[[TH.ThresholdName]]```


### Threshold Email Alerts

||
|-------------------------------------------|
|![](/imgbasic/sm-threshold-properties-notification.png)|

||
|--------------------------------------------------|
|![](/imgbasic/sm-threshold-email-result.png)|

## Enterprise Manager

<details>

* In Enterprise Manager, **Thresholds** is found in **Administration > Thresholds**

||
|--------------------------|
|![](/imgbasic/407.png)|

### Create a Threshold

||
|------------------|
|![](/imgbasic/408.png)| 

### Threshold Update

||
|-----------------------------------|
|![](/imgbasic/409.png)|

||
|------------------|
|![](/imgbasic/410.png)|

### Threshold Dependencies

||
|------------------------|
|![](/imgbasic/411.png)|

### Threshold Instance Properties

* Current value of Threshold can be retrieved: ```[[TH.ThresholdName]]```

||
|---------------------------------|
|![](/imgbasic/413.png)|

</details>