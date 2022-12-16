---
sidebar_label: 'Thresholds'
---

<!--
<figure>
    <audio
        controls
        src="audiobasic/Thresholds.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
-->

* User-defined placeholder 
* Consists of a name and a numeric value 
* Help resolve dependencies that cannot be resolved by Job Dependency 
	* (i.e. – A specification can be made for a Job to not start until a Threshold condition is met)

### Usage

* Create a Threshold
* Assign Threshold Dependencies
* Create a trigger updating Threshold
* Reset Threshold to initial value once complete

<a href="imgbasic/407.png" target="_blank"><img src="imgbasic/407.png" width="250"></img></a>  
<a href="imgbasic/408.png" target="_blank"><img src="imgbasic/408.png" width="500"></img></a>  

### Threshold Update

<a href="imgbasic/409.png" target="_blank"><img src="imgbasic/409.png" width="500"></img></a>  
<a href="imgbasic/410.png" target="_blank"><img src="imgbasic/410.png" width="500"></img></a>  

### Threshold Dependencies

* The Threshold/Resource Dependency tab allows the definition and maintenance of Job Dependencies on Threshold and Resource values 
	* A Threshold can be used to start a Job after a certain value is reached

<a href="imgbasic/411.png" target="_blank"><img src="imgbasic/411.png" width="500"></img></a>

### Threshold Instance Properties

* Current value of Threshold can be retrieved: ```[[TH.ThresholdName]]```

<a href="imgbasic/412.png" target="_blank"><img src="imgbasic/412.png" width="500"></img></a>  
<a href="imgbasic/413.png" target="_blank"><img src="imgbasic/413.png" width="500"></img></a>  

###### (Click Images to Enlarge)