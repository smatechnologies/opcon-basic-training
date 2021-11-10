---
sidebar_panel: 'External Event Thresholds'
---

### Thresholds - External Events

* As with any OpCon Event, ```$THRESHOLD:SET``` can be used as external Event
* Benefit: Can use + and – as calculation

Example:  

```$THRESHOLD:SET,<threshold name>,+1```  
```$THRESHOLD:SET,<threshold name>,-1```  

* Thresholds can be used to count files

Example:  

* A Company receives some files every day that need to be counted

	* Use File Watcher process looking for files 
	* Each time file arrives, process will add ```1``` to Threshold
	* Set Notification to relay Threshold value

<a href="imgbasic/415.png" target="_blank"><img src="imgbasic/415.png" width="500"></img></a>
