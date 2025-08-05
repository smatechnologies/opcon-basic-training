---
sidebar_label: 'Architecture'
---

### What is OpCon?

* A Platform independent Job Scheduling and Automation Solution that SMA provides to manage an entire data center

![](../static/imgbasic/Picture3.png)

### OpCon Architecture Overview

![Picture4](../static/imgbasic/Picture4.png)

### Solution Manager

![SMHeartbeat](../static/imgbasic/SMHeartbeat.png)

### Heartbeat Indicator

The **Heartbeat indicator** quickly identifies the status of the SAM and/or the Agents. Depending on the current state of the SAM and Agents, this indicator will have one of the following visual aspects:

- ![Heartbeat Indicator 1](../static/imgbasic/HeartbeatIndicator1.png "Heartbeat Indicator 1") - This indicates that the communication between Solution Manager and OpCon Rest API is broken.
- ![Heartbeat Indicator 2](../static/imgbasic/HeartbeatIndicator2.png "Heartbeat Indicator 2") - This indicates that the SAM is DOWN.
- ![Heartbeat Indicator 7](../static/imgbasic/HeartbeatIndicator7.png "Heartbeat Indicator 7")- This indicates that the SAM is DOWN and at least one Agent is waiting on communication.
- ![Heartbeat Indicator 3](../static/imgbasic/HeartbeatIndicator3.png "Heartbeat Indicator 3") - This indicates that the SAM is UP and all started Agents are communicating (whether limited or not).
- ![Heartbeat Indicator 4](../static/imgbasic/HeartbeatIndicator4.png "Heartbeat Indicator 4") - This indicates that the SAM is UP, but at least one Agent is waiting on communication (and none is in error).
- ![Heartbeat Indicator 5](../static/imgbasic/HeartbeatIndicator5.png "Heartbeat Indicator 5") - This indicates that the SAM is UP, but at least one started Agent does not respond (and at least one is started or waiting).
- ![Heartbeat Indicator 6](../static/imgbasic/HeartbeatIndicator6.png "Heartbeat Indicator 6") - This indicates that the SAM is UP, but all started Agents do not respond (in error).



## Enterprise Manager

<details>

![Picture5](../static/imgbasic/Picture5.png)

</details>