---
sidebar_label: 'OpCon Logs'
---

<figure>
    <audio
        controls
        src="audiobasic/OpConLogs.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

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

<a href="imgbasic/Picture53.png" target="_blank"><img src="imgbasic/Picture53.png" width="300"></img></a>  

### OpCon Logs - Support

<figure>
    <audio
        controls
        src="audiobasic/OpConLogsSupport.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* OpCon Logs are **VITAL** to the Support team when researching an issue
  * Please zip up full Log folder and upload it to SMA’s FTP site if an issue occurs
Log Collectors
* The SMA DataCollector Program can collect all SMA application Logs
  * SMASUP will collect all LSAM (Agent) Logs

<a href="imgbasic/Picture54.png" target="_blank"><img src="imgbasic/Picture54.png" width="500"></img></a>  

### OpCon Log Files

OpCon Log files can help with troubleshooting  

* For problems with Job executions, check:
  * Configuration tab in Job Information
  * Job Output
  * **SAM log**
  * **Critical log**

### SAM Log

<figure>
    <audio
        controls
        src="audiobasic/SAMLog.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

SAM - Schedule Activity Monitor  

* “Brain” of OpCon’s Engine  

Running list of all transactions  

* Job Status Changes
* Incoming Events
* Failures
* License Information 

<a href="imgbasic/Picture55.png" target="_blank"><img src="imgbasic/Picture55.png" width="500"></img></a>  

---

### Critical Log

<figure>
    <audio
        controls
        src="audiobasic/CriticalLog.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Reports SAM errors
* Properties which cannot be resolved
  * If a Job places itself On Hold, refer to the Critical Log
* Events with invalid syntax
* Machine communication issues
* Database connection problems

<a href="imgbasic/Picture56.png" target="_blank"><img src="imgbasic/Picture56.png" width="500"></img></a>  

###### (Click Images to Enlarge)
