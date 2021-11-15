---
sidebar_label: 'Filtering And Querying'
---

### Filtering Service Requests

* Use the Filter bar at the top of the Self Service screen to filter Service Requests by:
  * Category
  * OpCon Role
  * Service Request Name

<a href="imgbasic/SelfServiceFilterBar.png" target="_blank"><img src="imgbasic/SelfServiceFilterBar.png" width="500"></img></a>

### Querying with Wildcards

* For advanced querying, the Filter bar accepts the wildcard characters of asterisk (```*```) and question mark (```?```)
  * The asterisk wildcard can be used to match zero to many characters
  * The question mark wildcard must match a single (```one```) character
  * By default, the Filter will perform a ```CONTAINS``` operation against the dataset with the given text query
  * If the Filter query begins with an equal sign (```=```), the query becomes strict instead of performing a ```CONTAINS``` operation

###### (Click Image to Enlarge)