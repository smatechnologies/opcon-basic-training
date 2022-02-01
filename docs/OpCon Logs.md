---
sidebar_label: 'OpCon Logs'
---

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/OpConLogs.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio> 

##### Log location  

* If OpCon was installed on a **system drive**, Logs will be stored in **ProgramData**  
```
C:\ProgramData\OpConxps\SAM\Log
```
* If OpCon was installed on a **non-system drive**, Logs will be stored in **Program Files**  
```
[[Drive]]\[[Location selected for Output Files]]
```

##### Enterprise Manager Shortcut  

  * Auto-updating Logs (current Logs)
  * **Requires OpConxps folder to be shared with users**

![Picture53](/imgbasic/Picture53.png)  

### OpCon Logs - Support

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/OpConLogsSupport.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio> 

* OpCon Logs are **VITAL** to the Support team when researching an issue
  * Please zip up full Log folder and upload it to SMA’s FTP site if an issue occurs
Log Collectors
* The SMA DataCollector Program can collect all SMA application Logs
  * SMASUP will collect all LSAM (Agent) Logs

![Picture54](/imgbasic/Picture54.png)  

### OpCon Log Files

OpCon Log files can help with troubleshooting  

* For problems with Job executions, check:
  * Configuration tab in Job Information
  * Job Output
  * **SAM log**
  * **Critical log**

### SAM Log

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/SAMLog.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio> 

SAM - Schedule Activity Monitor  

* “Brain” of OpCon’s Engine  

Running list of all transactions  

* Job Status Changes
* Incoming Events
* Failures
* License Information 

![Picture55](/imgbasic/Picture55.png)  

---

### Critical Log

<audio controls="controls">
  <source type="audio/mp3" src="audiobasic/CriticalLog.mp3"></source>
  <p>Your browser does not support the audio element.</p>
</audio> 

* Reports SAM errors
* Properties which cannot be resolved
  * If a Job places itself On Hold, refer to the Critical Log
* Events with invalid syntax
* Machine communication issues
* Database connection problems

![Picture56](/imgbasic/Picture56.png)  
