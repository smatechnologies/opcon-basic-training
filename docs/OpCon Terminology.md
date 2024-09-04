---
sidebar_label: 'OpCon Terminology'
---

* **Schedule**: A Group of Jobs that make up a business process
  * Schedules must be created before any Jobs can be defined
* **Job**:  A Job in OpCon is a task or activity
  * A Task, for example, could be to run a program on a remote Machine, transfer files between Machines, or run another Schedule
* **Calendar**: A List of dates to help provide flexible scheduling around holidays and any other non-working days
* **Frequency**: Defines the pattern of days on which each Job will execute
* **Machines**: A Representation of an Agent (LSAM) in the database
* **Documentation**: Almost everything in OpCon has a placeholder for Documentation
* **Build**: The Process of copying Master Schedules and Jobs that qualify for specified Dates to SAM’s Active Daily List Processing Tables
* **SAM**: (Schedule Activity Monitor) Determines when jobs in the Daily tables qualify for submission to an LSAM and also processes OpCon events. 
* **LSAM**: (Local Schedule Activity Monitor) Listens for commands from OpCon’s main engine kicking off and monitoring specified tasks
  * Also refered to as an Agent.
