---
sidebar_label: 'OpCon Logs'
---

### OpCon Log Files

OpCon Log files can help with troubleshooting  

* For problems with Job executions, check:
  * Configuration tab in Job Information
  * Job Output
  * **SAM log**
  * **Critical log**

##### Log location  

* If OpCon was installed on a **system drive**, Logs will be stored in **ProgramData**  
```
C:\ProgramData\OpConxps\SAM\Log
```
* If OpCon was installed on a **non-system drive**, Logs will be stored in **Program Files**  
```
[[Drive]]\[[Location selected for Output Files]]
```

### OpCon Logs - Support

* OpCon Logs are **VITAL** to the Support team when researching an issue
  * Please zip up full Log folder and upload it to SMA’s FTP site if an issue occurs
Log Collectors
* The SMA DataCollector Program can collect all SMA application Logs
  * SMASUP will collect all LSAM (Agent) Logs

||
|---|
|![Picture54](../static/imgbasic/Picture54.png)|  

#### Log Location in Windows

||
|---|
|![](../static/imgbasic/sm-log-folder-window-file.png)|

### SAM Log

SAM - Schedule Activity Monitor  

* “Brain” of OpCon’s Engine  

Running list of all transactions  

* Job Status Changes
* Incoming Events
* Failures
* License Information 

### Critical Log

* Reports SAM errors
* Properties which cannot be resolved
  * If a Job places itself On Hold, refer to the Critical Log
* Events with invalid syntax
* Machine communication issues
* Database connection problems

#### Sam Log Windows File

||
|---|
|![](../static/imgbasic/sm-sam-log-windows-file.png)|

#### Critical Log Windows File

||
|---|
|![](../static/imgbasic/sm-critical-log-windows-file.png)|

### Job Output Menu in Job Processes

||
|---|
|![](../static/imgbasic/sm-job-output-from-processes.png)|

||
|---|
|![](../static/imgbasic/sm-job-output-side-panel.png)|

### Job Output File

||
|---|
|![](../static/imgbasic/sm-job-output-log-file.png)|


## Enterprise Manager

<details>

#### Log Shortcuts Shortcuts  

  * Auto-updating Logs (current Logs)
  * **Requires OpConxps folder to be shared with users**

||
|---|
|![Picture53](../static/imgbasic/Picture53.png)|

#### SAM Log

||
|---|
|![Picture55](../static/imgbasic/Picture55.png) | 

#### Critical Log

||
|---|
|![Picture56](../static/imgbasic/Picture56.png)| 

</details>