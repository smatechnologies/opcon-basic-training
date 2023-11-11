---
sidebar_label: 'Unité 3 Lab B'
hide_title: 'false'
---

### Unité 3 LAB B

##### Objectif:

Congo Online Retail doit s'assurer que toutes les commandes d'expédition sont traitées et prêtes à être expédiées avant 5 heures du matin (du lundi au dimanche) en utilisant un schedule nommé **CONGO RETAIL ORDER PROCESSING**.   

**Jobs**:

*	Legos - Command Line: ```"C:\scripts\ShipmentProcessorToys.EXE" –t90```
*	Nerf - Command Line: ```"C:\scripts\ShipmentProcessorToys.EXE" –t120```
*	Smartphones - Command Line: ```"C:\scripts\ShipmentProcessorElectronics.EXE" –t15```
*	XBOX - Command Line: ```"C:\scripts\ShipmentProcessorElectronics.EXE" –t350```
*	Levis - Command Line: ```"C:\scripts\ShipmentProcessorClothing.EXE" –t45```
*	Nike - Command Line: ```"C:\scripts\ShipmentProcessorClothing.EXE" –t75```

:::note Remarque
Si l'un de ces processus n'est pas terminé à 5 heures du matin ou s'il prend plus de 5 minutes, vous devez en être informé.
:::



**Notifications**:

* Début tardif (Late to Start)
* Fin tardive (Late to Finish)
* Durée d'exécution maximale dépassée (Exceeded Max Runtime)

Mettez le Schedule au plan en Release pour aujourd'hui. Affichez les résultats dans La vue Matrix ou le Solution Manager.

Ouvrez **Thunderbird** pour vérifier les notifications.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabB.mp4" type="video/mp4"></source>
Votre navigateur ne prend pas en charge la vidéo.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Instructions de laboratoire**:

* **Informations sur le schedule**:
    * Nommez le schedule ```Congo Retail Order Processing```
    * Du lundi au dimanche
    * **Mise au Plan automatique** ```7``` jours à l'avance pour un ```1``` jour
    * **Suppression automatique** ```7``` Jours 

*	**Information sur le Job**:

* Legos
    * Command Line: 
     ```"C:\scripts\ShipmentProcessorToys.EXE" –t90```
    * Ecart temps de soumission: ```03:00```
    * Absolue indicateur retard Soumission: ```01:55 (4:55 am)```
    * Temps Max d'Exécution: ```5```
    * Ajouter de la documentation
    * Taguer le job en tant que  ```Toys```
* Nerf
    * Command Line: ```"C:\scripts\ShipmentProcessorToys.EXE" –t120```
    * Ecart temps de soumission: ```04:00```
    * Absolue indicateur retard Soumissiont: ```01:00 (5:00 am)```
    * Temps Max d’Exécution: ```5```
    * Ajouter de la documentation
    * Taguer le job en tant que  ```Toys```
* Smartphones
    * Command Line: ```"C:\scripts\ShipmentProcessorElectronics.EXE" –t15```
    * Ecart temps de soumission: ``04:30``
    * Absolue indicateur retard Soumission: ```00:30 (5:00 am)```
    * Temps Max d’Exécution: ```5```
    * Ajouter de la documentation 
    * Taguer le job en tant que  ```Electronics```
* XBOX
    * Command Line: ```"C:\scripts\ShipmentProcessorElectronics.EXE" –t350```
    * Ecart temps de soumission: ```02:30```
    * Absolue indicateur retard Soumission: ```02:30 (5:00 am)```
    * Temps Max d’Exécution: ```5```
    * AAjouter de la documentation 
    * Taguer le job en tant que ```Electronics```
* Levis
    * Command Line: ```"C:\scripts\ShipmentProcessorClothing.EXE" –t45```
    * Ecart temps de soumission: ```03:10```
    * Absolue indicateur retard Soumission: ```01:45 (4:55 am)```
    * Temps Max d’Exécution: ```5```
    * Ajouter de la documentation 
    * Taguer le job en tant que ```Clothing```
* Nike
    * Command Line: ```"C:\scripts\ShipmentProcessorClothing.EXE" –t75```
    * Ecart temps de soumission: ```03:45```
    * Absolue indicateur retard Soumission: ```01:15 (5:00 am)```
    * Temps Max d’Exécution: ```5```
    * Ajouter de la documentation
    * Taguer le job en tant que  ```Clothing```

*	**Notifications**
    * Configurez les notifications par e-mail dans le Gestionnaire de Notification à l'aide des propriétés globales pour transmettre le nom du schedule et du Job dans l'objet lorsque les conditions suivantes sont remplies :
      *	Retard de Soumission (Late to start)
      *	Retard de Fin (Late to Finish)
      *	Temps maximal dépassé (Excedeed Max RunTime)

* **Mise au Plan**
    * Mettre au plan le Schedule en Released pour aujourd'hui et vérifiez les résultats à l'aide de Solution Manager
    * Ouvrez Thunderbird et vérifiez votre boîte de réception

</details>
