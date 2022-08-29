---
sidebar_label: 'Resources'
---

<!--
<figure>
    <audio
        controls
        src="audiobasic/Resources.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
-->

* **Resource**: user-defined value consisting of name and numeric limit
* Resources are used to manage and limit the number of concurrently running Jobs across Schedules and Machines in OpCon
* **Max Concurrent Jobs** in Advanced Machine Properties limits the number of concurrently running Jobs on a specific Machine

	* **All** Resources can be set for Dependencies  
	* SAM is responsible for keeping track of Resources in use

:::note
If all Resources are in use, SAM waits until a Resource is available before submitting the next Job
:::

<a href="imgbasic/401.png" target="_blank"><img src="imgbasic/401.png" width="500"></img></a>  
<a href="imgbasic/402.png" target="_blank"><img src="imgbasic/402.png" width="500"></img></a>  

### Resources - Instance Properties

* Max value of a Resource can be retrieved

```[[RM.ResourceName]]```

* Number of Resources “in use” can also be retrieved 

```[[RU.ResourceName]]```

<a href="imgbasic/403.png" target="_blank"><img src="imgbasic/403.png" width="500"></img></a>  
<a href="imgbasic/404.png" target="_blank"><img src="imgbasic/404.png" width="500"></img></a>  

### Frequency - SAM Priority

<!--
<figure>
    <audio
        controls
        src="audiobasic/FrequencySAMPriority.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
-->

* Used if Max Concurrent of the following two features is met:
	* Machine has reached Max Jobs limit (Windows and UNIX defaults are ```50```)
	* A Resource has all Resources in use
* The Job with highest **SAM Priority** will run first if several Jobs are waiting for a Resource or a Machine Max Job to free up


<a href="imgbasic/405.png" target="_blank"><img src="imgbasic/405.png" width="500"></img></a>  
<a href="imgbasic/406.png" target="_blank"><img src="imgbasic/406.png" width="500"></img></a>  

###### (Click Images to Enlarge)