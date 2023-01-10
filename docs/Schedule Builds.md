---
sidebar_label: 'Schedule Builds'
---

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/ScheduleBuilds.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio> 
-->

* OpCon (SAM) will search the database for Schedules and Jobs that must run on a specific date
  * Based on information stored in Master tables, SAM will add Schedules and Jobs to Daily tables
* Schedules can be built manually or automatically

![Picture29](/imgbasic/Picture29.png)

### Auto Build

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/AutoBuild.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio> 
-->

* Auto building **X days in advance** is the starting day to build on
* Auto building **for Y days** is how far out to build
* OpCon builds Schedules automatically at midnight (by default)
  * Example: ```7``` days in advance for 1 day will build on the 7th counted day in the future (the first counted day is Day ```0```)
  * Example: ```0``` days in advance for ```7``` days will build **daily** for ```7``` days (the first counted day is Day ```0```)

* Best Practice for Autobuild is **7 days in advance for 1 day**

#### Autobuild Example 1:

![Picture30](/imgbasic/Picture30.png)

#### Autobuild Example 2:

![Picture31](/imgbasic/Picture31.png)  

### Manual Build

<!--
<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/ManualBuild.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio> 
-->

* The **Build Schedules** screen contains a list of Schedules to build, all information needed to build a Schedule, and a Build Results list

![Picture32](/imgbasic/Picture32.png)
