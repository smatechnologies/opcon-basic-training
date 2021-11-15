---
sidebar_label: 'Unit 3 Lab C'
---

### LAB C

##### Objective:

Through a Schedule named **CONGO ACCOUNTING FOLDERS**, your Accounting Team needs a daily (Monday-Friday) folder created in the ```C:\Accounting``` folder for each of the following products:

* Legos
* Nerf
* Smartphones
* Xbox
* Levis
* Nike

The following script should be used to create each folder:

```
“C:\scripts\Create_Folder.cmd” “C:\Accounting\yyyy-mm-dd-Legos”
```
where "Legos" is the product.

Create three Global Properties that will be used in place of the following objects on the command line:

*	```C:\scripts```
*	```C:\Accounting```
*	```yyyy-mm-dd```

    *	This will require a System Global Property ```[[$SCHEDULE DATE]]``` in the correct format

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabC.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

**Lab Instructions**:  

*	Create a Schedule named **Congo Accounting Folders**  
*	**Saturdays** and **Sundays** are **non-working days**  
*	**Auto-build** the Schedule ```7``` days in advance for ```1``` day  
*	**Auto-delete** the Schedule for ```7``` days  
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
    *	Xbox
    *	Levis
    *	Nike
*	Build the Schedule for today and tomorrow (Released)
*	Use Solution Manager Operations View to check if the Jobs complete ok
*	After all Jobs are finished, check that **all** folders were created

</details>