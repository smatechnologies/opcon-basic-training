---
sidebar_panel: 'Schedule Builds'
---

### Schedule Builds

<figure>
    <audio
        controls
        src="audiobasic/ScheduleBuilds.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* OpCon (SAM) will search the database for Schedules and Jobs that must run on a specific date
  * Based on information stored in Master tables, SAM will add Schedules and Jobs to Daily tables
* Schedules can be built manually or automatically

<a href="imgbasic/Picture29.png" target="_blank"><img src="imgbasic/Picture29.png" width="300"></img></a>

### Auto Build

<figure>
    <audio
        controls
        src="audiobasic/AutoBuild.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Auto building **X days in advance** is the starting day to build on
* Auto building **for Y days** is how far out to build
* OpCon builds Schedules automatically at midnight (by default)
  * Example: ```7``` days in advance for 1 day will build on the 7th counted day in the future (the first counted day is Day ```0```)
  * Example: ```0``` days in advance for ```7``` days will build **daily** for ```7``` days (the first counted day is Day ```0```)

* Best Practice for Autobuild is **7 days in advance for 1 day**

#### Autobuild Example 1:

<a href="imgbasic/Picture30.png" target="_blank"><img src="imgbasic/Picture30.png" width="500"></img></a>  

#### Autobuild Example 2:

<a href="imgbasic/Picture31.png" target="_blank"><img src="imgbasic/Picture31.png" width="500"></img></a>  

### Manual Build

<figure>
    <audio
        controls
        src="audiobasic/ManualBuild.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* The **Build Schedules** screen contains a list of Schedules to build, all information needed to build a Schedule, and a Build Results list

<a href="imgbasic/Picture32.png" target="_blank"><img src="imgbasic/Picture32.png" width="500"></img></a>  

###### (Click Images to Enlarge)
