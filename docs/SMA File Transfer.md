---
sidebar_label: 'SMA File Transfer'
---

![](../static/imgbasic/File_Transfer_Task_Details_SM.png)

* Proprietary Agent to Agent File Transfer solution built into OpCon
* Uses Job Type: **File Transfer**
* All Transfers initiated by Destination Machine
* SMA File Transfer is configured in **Advanced Machine** Settings
* Default port is ```3110```, but is configurable

**Warnings**:  

* Only Destination Machine’s **Machine Instance Properties** are resolved
* File Name required for Destination
* Wildcards only loosely supported
* Renaming File during transit is allowed

### Options

![](../static/imgbasic/File_Transfer_Options_SM.png)

* **If File Exists** determines how the SMAFT Agent behaves when a target file exists.
* **Delete Source File** determines if the deletion of the Source File occurs. 
* **Start Transfer On** determines where the job will start. 
* **Maximum Transfer Rate (kbits/second)** defines the transfer rate for the job.
* **Compression** determines if compression is used. 
  * **Supported Compression Types**: tar, gzip, and zip.
* **Encryption** determines if encryption is used. 
  * **Supported Encryption Types**: 3DES, AES, and DES.
* **TLS Security Override** determines if TLS Security for file transfers is used. 



## Enterprise Manager

<details>

![](../static/imgbasic/434.png)

![](../static/imgbasic/435.png)

</details>