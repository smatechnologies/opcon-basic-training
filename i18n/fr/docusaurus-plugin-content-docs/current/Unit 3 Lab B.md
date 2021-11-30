---
sidebar_label: 'Unite 3 Lab B'
hide_title: 'false'
---

### Unite 3 LAB B

##### Objectif:

Congo Online Retail doit s'assurer que toutes les commandes d'expédition sont traitées et prêtes à être expédiées avant 5 heures du matin (du lundi au dimanche) en utilisant un schedule nommé **CONGO RETAIL ORDER PROCESSING**.   

**Jobs**:

*	Legos - Command Line: ```“C:\scripts\ShipmentProcessorToys.EXE” –t90```
*	Nerf - Command Line: ```“C:\scripts\ShipmentProcessorToys.EXE” –t120```
*	Smartphones - Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” –t15```
*	Xbox - Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” –t350```
*	Levis - Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” –t45```
*	Nike - Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” –t75```

:::note Remarque
Si l'un de ces processus n'est pas terminé à 5 heures du matin ou s'il prend plus de 5 minutes, vous devez en être informé.
:::



**Notifications**:

* Début tardif (Late to Start)
* Fin tardive (Late to Finish)
* Durée d'exécution maximale dépassée (Exceeded Max Runtime)

Construisez le Schedule publié pour aujourd'hui. Affichez les résultats dans Matrix View ou Solution Manager.

Ouvrez **Thunderbird** pour vérifier les notifications.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Instructions de laboratoire**:

* **Informations sur le schedule**
    * Nommez le schedule **Congo Retail Order Processing**
    * Du lundi au dimanche
    * **Auto Build** ```7``` jours à l'avance pour un 1 jour
    * **Auto Delete** ```7``` Jours 

*	**Information sur le Job**

*  Legos
    * Command Line: 
     ```“C:\scripts\ShipmentProcessorToys.EXE” –t90```
    * Start Offset: ```03:00```
    * Absolute Late to Start Offset: ```01:55 (4:55 am)```
    * Max Run Time: ```5```
    * Add documentation
    * Tag the Job under ```Toys```
* Nerf
    * Command Line: ```“C:\scripts\ShipmentProcessorToys.EXE” –t120```
    * Start Offset: ```04:00```
    * Absolute Late to Finish Offset: ```01:00 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Toys```
* Smartphones
    * Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” –t15```
    * Start Offset: ``04:30``
    * Absolute Late to Finish Offset: ```00:30 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Electronics```
* Xbox
    * Command Line: ```“C:\scripts\ShipmentProcessorElectronics.EXE” –t350```
    * Start Offset: ```02:30```
    * Absolute Late to Finish Offset: ```02:30 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Electronics```
* Levis
    * Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” –t45```
    * Start Offset: ```03:10```
    * Absolute Late to Start Offset: ```01:45 (4:55 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Clothing```
* Nike
    * Command Line: ```“C:\scripts\ShipmentProcessorClothing.EXE” –t75```
    * Start Offset: ```03:45```
    * Absolute Late to Finish Offset: ```01:15 (5:00 am)```
    * Max Run Time: ```5```
    * Add documentation 
    * Tag the Job under ```Clothing```

*	**Notifications**
    *	Setup Email Notifications in Notification Manager using Global Properties to pass the Name of the Schedule and Job in the subject when the following conditions have been met:
        *	Late to Start
        *	Late to Finish
        *	Exceeded Max Runtime

* **Construire**
    * Créez le Schedule Released pour aujourd'hui et vérifiez les résultats à l'aide de Solution Manager
    * Ouvrez Thunderbird et vérifiez votre boîte de réception

</details>