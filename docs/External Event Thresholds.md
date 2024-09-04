---
sidebar_label: 'External Event Thresholds'
---

### Thresholds - External Events

* As with any OpCon Event, ```$THRESHOLD:SET``` can be used as external Event
* Benefit: Can use + and – as calculation
* Thresholds can be used to count files

![](../static/imgbasic/sm-external-threshold-event.png)

:::tip Example

```$THRESHOLD:SET,<threshold name>,+1```  
```$THRESHOLD:SET,<threshold name>,-1```  
:::

:::tip Example

* A Company receives some files every day that need to be counted
  * Use File Watcher process looking for files 
  * Each time file arrives, process will add ```1``` to Threshold
  * Set Notification to relay Threshold value
:::



### Enterprise Manager

<details>

![](../static/imgbasic/415.png)

</details>