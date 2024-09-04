---
sidebar_label: 'Schedule Builds'
---

* OpCon (SAM) will search the database for Schedules and Jobs that must run on a specific date
  * Based on information stored in Master tables, SAM will add Schedules and Jobs to Daily tables
* Schedules can be built manually or automatically

![Picture29](../static/imgbasic/Picture29.png)

### Auto Build

* Auto building **X days in advance** is the starting day to build on
* Auto building **for Y days** is how far out to build
* OpCon builds Schedules automatically at midnight (by default)
* Best Practice for Autobuild is **7 days in advance for 1 day**
 
  * Example: ```7``` days in advance for 1 day will build on the 7th counted day in the future (the first counted day is Day ```0```)

   ![](../static/imgbasic/7-1-build-settings.jpg)

  * Example: ```0``` days in advance for ```7``` days will build **daily** for ```7``` days (the first counted day is Day ```0```)
 
   ![](../static/imgbasic/1-7-build-settings.jpg)


### Manual Build

* The **Build** button on the Operations Summary Page activates the Schedule Build Wizard
* The Selection page allows the user to choose a Master Schedule to build with multiple options:
  * Date Range Selection
  * On Hold or Release Status
  * Overwrite Existing Schedules Option
* Users can also filter Schedules with Auto-build or Multi-Instance configurations

![Picture59](../static/imgbasic/Picture59.png)

![Picture60](../static/imgbasic/Picture60.png)

### Schedule Build Grouping

* Multiple Builds can be bundled and tracked as a group
* The bundle can be expanded to view and monitor the status of each Build

![Picture61](../static/imgbasic/Picture61.png)

![Picture62](../static/imgbasic/Picture62.png)

![Picture63](../static/imgbasic/Picture63.png)



## Enterprise Manager

<details>

#### Autobuild

##### Auto-build Example 1:

![Picture30](../static/imgbasic/Picture30.png)

##### Auto-build Example 2:

![Picture31](../static/imgbasic/Picture31.png)

#### Manual Build

* The **Build Schedules** screen contains a list of Schedules to build, all information needed to build a Schedule, and a Build Results list

![Picture32](../static/imgbasic/Picture32.png)

</details>