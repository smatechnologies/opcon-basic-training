---
sidebar_label: 'Unit 3 Lab C'
---

## LAB C

### Objective

To use the property types we have learned about to design a schedule of jobs that will create folders with a product name and yesterday's date.

### Summary

The Accounting Department needs a folder for each product labeled with the product's name and prior day's date. You will utilize a script called **Create_Folder** that resides in ```C:\Scripts``` to create a directory for each product that Congo ships:  **Legos**, **Nerf**, **Smartphones**, **XBOX**, **Levis**, and **Nike**. These new directories will reside in a path specific to the Accounting Department, ```C:\Accounting``` and will have a ```yyyy-mm-dd(-1d)_<Product Name>``` for the folder name.

:::tip
Best practice is to create a property for any value that will be typed more than once or may change every few years. Some examples of properties that may be used in thes lab are:
* **PATH_Scripts** property with a value of ```C:\scripts```
* **PATH_Accounting** property with a value of ```C:\Accounting```
* **$SCHEDULE DATE** property with a value of ```yyyy-mm-dd```
:::

### Lab Instructions

#### Create the Schedule

* Create a Schedule called **Congo Accounting Folders**  
* Add **Documentation** for the Schedule  
* **Saturdays** and **Sundays** are **non-working days**  
* **Auto-build** the Schedule ```7``` days in advance for ```1``` day  
* **Auto-delete** the Schedule for ```7``` days ago

#### Create the Jobs

* Create a **Windows Job** for each of the products listed in the **Summary**.   
* Name each **Job** the same as its **product name**  
* This Job needs to run on the **SMATRAINING** machine  
* This Job needs to run as the **SMATRAINING\SMAUSER** User ID  
* Utilizing the **Magic Wand** or **CNTL+SPACE** create a command line using properties in the appropriate places to run the following statement: 
  * ```"C:\scripts\Create_Folder.cmd" "C:\Accounting\yyyy-mm-dd(-1d)_Legos"```  
  :::tip Hint
  Remember that each Job is assigned to a product and the folder name must match the product. You can use a System Property in place of the product name in the command line.
  :::
* The Job must run **Monday-Friday**
* The Jobs must be **Tagged** according to the product line (**Toys**,**Electronics**, and **Clothing**)

#### Add the Dependencies and Build the Schedule
* The Jobs must run in the following order with each Job requiring the Job before it:
  *	**Legos** &rarr; **Nerf** &rarr; **Smartphones** &rarr; **XBOX** &rarr; **Levis** &rarr; **Nike**
* Build the Schedule for today and tomorrow (Released)
* Use **Operations View** to check if the jobs Finish OK
* After all Jobs are finished, verify that **ALL** folders were created.

## Enterprise Manager

<details>

:::tip [Walkthrough Video - Unit 3 Lab C](../static/videobasic/U3LabC.mp4)

:::


*	Create a Schedule named **Congo Accounting Folders**  
*	**Saturdays** and **Sundays** are **non-working days**  
*	**Auto-build** the Schedule ```7``` days in advance for ```1``` day  
*	**Auto-delete** the Schedule for ```7``` days ago
*	Add **Documentation** for the Schedule  
*	Create a **Windows Job** for each of the products in the introduction   
*	Name each **Job** the same as its **product name**  
*	This Job needs to run as the ```SMATRAINING\SMAUSER``` User ID  
*	This Job needs to run on the **SMATRAINING** machine  
*	Use the following **command line** replacing the three objects specified above with **Global Properties**:   

```
“C:\scripts\Create_Folder.cmd” “C:\Accounting\yyyy-mm-dd-Legos”
```  

:::note
Remember that each Job is assigned to a product and the folder name must match the product
:::

*	The Job must run **Monday-Friday**
*	The Jobs must be **Tagged** according to the product line (**Toys**,**Electronics**, and **Clothing**)
*	The Jobs must run in the following order with each Job requiring the Job before it:
    *	Legos
    *	Nerf
    *	Smartphones
    *	XBOX
    *	Levis
    *	Nike
*	Build the Schedule for today and tomorrow (Released)
*	Use Solution Manager Operations View to check if the Jobs complete ok
*	After all Jobs are finished, check that **all** folders were created

</details>