---
sidebar_label: 'Agent Details'
---

## Agent Definition

*  Agent listens for commands from OpCon’s main engine kicking off and monitoring specified tasks
*  Agents define where a task will be run
*  LSAM stands for “**Local Schedule Activity Monitor**”

#### Agent Status

* Displays Connection Status of all Agents configured in the OpCon database
  * Displayed in Grid format
  * Statuses are updatable from this screen

## Agent List Screen

![](../static/imgbasic/sm-agents-list.png)

## Defining a New Agent

### Agent Details

*  Provide a Name 
*  Add Documentation
*  Pick the Machine Type

:::tip Best Practice

Name the **Agent** the same as the **Server** that **Agent** is installed on, as we resolve **communication via DNS**.

:::

![](../static/imgbasic/sm-unix-agent-details.png)

### Machine Information

This area is where you can:
*  Define **Machine Instance Properties**
*  Allow the **KILL** command, **USE EXTREME CAUTION IF YOU SET THIS TO TRUE** (not available for all Machine Types)

![](../static/imgbasic/sm-unix-agent-machine-information.png)

### Communication Settings

This area is where you can:
* Define the **JORS (Job Output Retrieval Service) Port Number**
* **TLS** Certificate Name and Serial Number

![](../static/imgbasic/sm-unix-agent-communication-settings.png)

### File Transfer Settings

This area is where you set up the machine to be a part of **SMA File Transfer** jobs.

![](../static/imgbasic/sm-unix-agent-file-transfer-settings.png)



## Enterprise Manager

<details>

![Picture208](../static/imgbasic/208.png)

#### Advanced Machine Properties

![Picture209](../static/imgbasic/209.png)

#### File Transfer Settings

![Picture210](../static/imgbasic/210.png)

</details>