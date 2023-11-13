---
sidebar_label: 'Unité 4 Lab A'
hide_title: 'false'
---

### Unité 4 Lab A

##### Objectif:

Congo Online Retail Inc. doit mettre à jour l'inventaire en fonction des demandes d'achat avec un schedule nommé **Congo Update Inventory**.

Un script est exécuté pour chaque produit (tagué par catégorie):


**Jouets (Toys)** 

Legos: ```[[SCRIPTS]]\UpdInvLegos.CMD``` 

Nerf: ```[[SCRIPTS]]\UpdInvNerf.CMD```

**Vêtements (Clothing)**

Nike: ```[[SCRIPTS]]\UpdInvNike.CMD```     

:::note Remarque
Ce script utilise ```MSGIN``` pour initier un **Threshold**
:::

Levis: ```[[SCRIPTS]]\UpdInvLevis.CMD``` 

**Électronique (Electronics)**

Smartphones: ```[[SCRIPTS]]\UpdInvSmartphones.CMD``` 

XBOX: ```[[SCRIPTS]]\UpdInvXBOX.CMD```

Les Jobs doivent être exécutés dans l'ordre dans lequel ils sont répertoriés ci-dessus du lundi au vendredi.

Il y a deux exceptions :

1) Le Job **Nike** prend beaucoup de temps à se terminer ; Le Job **Levis** n'a pas besoin d'attendre que le Job **Nike** se termine - Le script Nike mettra à jour un **Threshold** nommé ```LEVISThreshold``` qui doit être créé avec une valeur de ```0``` sur le Job **Levis**. Un **event** ```$THRESHOLD:SET``` doit être défini sur le Job **Levis** pour renvoyer la valeur ```0```.

2) Les scripts **Smartphones** et **XBOX** utilisent beaucoup de CPU - Ils **ne peuvent pas fonctionner en même temps**, mais peu importe celui qui s'exécute en premier. Les deux Jobs doivent avoir une **dépendance de ressource** sur une **ressource** nommée ```Electronics``` avec la valeur **Max Resources** à ```1```.
 
Une **notification** doit être créée à la fois si le Job est Failed ou si le job est **Finished OK**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4LabA.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Instructions de laboratoire** :  

* Créez un schedule nommé **Congo Update Inventory**.
* Le samedi et le dimanche sont des jours non ouvrés.
* **Mise au plan automatique** du schedule ```7``` jours à l'avance pour ```1``` jour.
* **Suppression automatique** ```7``` jours en arrière.
* Ajoutez de la documentation au schedule.
* Utilisez le calendrier Master Holiday.
* Créez 6 Jobs **Windows** nommés :
	* Legos
	* Nerf
	* Nike
	* Levis
	* Smartphones
	* XBOX
* Ces jobs doivent s'exécuter en tant qu'ID utilisateur ```SMATRAINING\SMAUSER```.
* Ces jobs doivent s'exécuter sur la machine ```SMATRAINING```.
* Appelez les programmes sur la ligne de commande en utilisant une Global property

:::note Remarque
Exemple: (_utilisez la Global Property que vous avez créée précédemment et qui a le chemin d'accès pour ```C:\Scripts```_)

```
"[[scripts]]\UpdInvLegos.CMD"
```
:::

* Ces jobs doivent être exécutés du **lundi au vendredi** et _ne pas être exécutés les jours fériés_.
* Le premier Job, **Legos**, commence à ```15:00```.
* Ajouter de la **documentation** pour chaque Job.
:::note Remarque
Ce Job rapporte un inventaire pour le nombre de Legos en stock.
:::
* **Taguer** les 6 jobs en fonction du type de produit (**Jouets (Toys)**, **électronique (Electronics)** ou **vêtements (Clothing)**)
* Créez un **Threshold** nommé ```LEVISThreshold``` et donnez-lui la valeur de ```0```.

:::info
Il y a un point dans le script ```UpdInvNike.CMD``` à exécuter sur ```$THRESHOLD:SET,LEVISThreshold,1``` pour que le Job Levis puisse démarrer_
* _Ceci est à titre informatif uniquement - Il n'est pas nécessaire de créer cet événement_
:::

* Sur le Job Levis, créez une dépendance Threshold sur le ```LEVISThreshold``` nécessitant une valeur de ```1```.
* Ajouter un event ```$THRESHOLD:SET``` au Job **Levis** pour redéfinir la valeur de ```LEVISThreshold``` à ```0``` dès la fin du Job.
* Ajoutez une **ressource** nommée **Electronics** avec une valeur **Ressources Max** de ```1```.
* Ajouter une **dépendance de ressource** pour les jobs **Smartphones** et **XBOX** avec une **ressource** de ```1```.

:::note Remarque 
Les scripts **Smartphones** et **XBOXConsoles** utiliseront la **Ressource** pour éviter de s'exécuter en même temps.
:::

* Utilisez le **Gestionnaire de Notification** pour configurer des alertes si les jobs du Schedule **Congo Update Inventory** se terminent **correctement** ou **échouent**.
* Envoyez un e-mail à : ```smauser@congo.local``` avec le sujet :
Un Job dans le Schedule ```[[$SCHEDULE NAME]]``` a **échoué (Failed)** ou un Job dans le Schedule ```[[$SCHEDULE NAME]]``` s'est **terminé OK (Finished OK)**.

Une fois terminé, affichez les résultats dans le **Designer Workflow**.

**Mettre en plan le Schedule** en **Released** pour aujourd'hui.

<a href="imgbasic/423.png" target="_blank"><img src="imgbasic/423.png" width="300"></img></a>

</details>
