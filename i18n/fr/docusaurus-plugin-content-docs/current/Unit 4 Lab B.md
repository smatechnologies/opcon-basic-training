---
sidebar_label: 'Unité 4 Lab B'
hide_title: 'false'
---

### Unité 4 Lab B

Congo Online Retail Inc. a un fichier pour chaque bureau qui a fait un changement de personnel au cours du mois.

Il n'y a aucun moyen de prédire le nombre de fichiers qui seront fait chaque jour du mois (les fichiers peuvent être créés et traités les jours fériés).

La fenêtre de création de ces fichiers est comprise entre ```00:00``` (minuit) et ```19:00```.

Nous ne connaissons pas le nom des fichiers, mais nous connaissons le dossier dans lequel ils seront placés et que tous ont l'extension ```.txt```.

Un seul fichier peut être traité à un moment donné (Créer une **ressource** nommée ```HR``` avec une **valeur maximale** de ```1```).

* La procédure comprend l'exécution quotidienne des Jobs suivants dans un sous-schedule nommé **HR Import Processing** : 
	* **Decrypter** le fichier exécutant le script ```HR-Decrypt.cmd```.
	* **Importer** le fichier dans une base de données HR exécutant le script ```HR-Import.cmd```.
	* **Publier** les modifications que le fichier contient en exécutant le script ```HR-Post.cmd```.
	* **Archiver** le fichier en exécutant un Sous-type de Job Windows : ```File Move```.
* Tous les scripts sont stockés dans le dossier  ```C:\scripts```.
* Tous les fichiers entrants arrivent dans le dossier  ```C:\Human Resources\Incoming Files```.
* Tous les fichiers doivent être archivés dans le dossier  ```C:\Human Resources\Archive```.

Utilisez **les propriétés globales (Global Properties)** pour appeler les dossiers Entrant (Incoming) et Archive.

Utilisez le **sous-type de Job** ```Command : File Move``` pour archiver les fichiers.

Incoming (entrant) : ```"[[HR-Incoming]]\[[SI.FILENAME]]"```

Archive : ```"[[HR-Archive]]\[[$DATEyyyymm(-1m)]]-[[SI.FILENAME]]"```

Créez un Schedule principal nommé **HR Import**. Créez un Job container nommé **HR Import Processing** (cochez Autoriser les instances multiples). Le job doit exécuter le sous-schedule **HR Import Processing** avec une fréquence ```OnRequest```. Le job doit avoir une dépendance de ressource sur la ressource ```HR``` avec une valeur de ```1```.

Ajoutez un event ```$JOB:RESTART``` au Job container avec les paramètres suivants:

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival
```

Créez un job **File Arrival** qui surveillera : ```[[HR-Incoming]]\*.txt"```.

Heure de début de création de fichier : ```00:00 ```

Heure de fin de création de fichier : ```19:00```

Indiquez les critères d'échec du job **File Arrival** :

```Equal to 0``` et ```Equal to 1``` les deux ```Finish OK```

Donnez au job **File Arrival** un event ```$JOB:ADD``` avec les paramètres suivants :

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],HR Import Processing,OnRequest,FILENAME=[[JI.$ARRIVED SHORT FILE NAME]]
```

Enfin, dans le schedule **HR Import**, créez un job avec un **script embarqué (embedded script)** nommé **Create HR Files** exécutant le **script** ```Lab_4``` avec un **Runner** ```PowerShell```.

Mettre au plan le schedule pour vérifier la bonne exécution.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4LabB.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Instructions de laboratoire** :  

* Créez une **ressource** appelée ```HR``` et donnez-lui une **valeur maximale** de ```1```
* Créez une **Global Property** pour le dossier **Incoming** (par exemple: **HR-Incoming**)
* Créez une **Global Property** pour le dossier **Archive** (par exemple: **HR-Archive**)
* Créez un sous-schedule nommé **HR Import Processing** (il doit s'agir d'un schedule du **lundi au dimanche**) et ajoutez de la documentation au schedule.
* Créez **4 Jobs Windows** dans le sous-schedule **HR Import Processing** nommé (dans l'ordre indiqué):
	* HR-Decrypt  
	```HR-Decrypt.cmd```
	* HR-Import  
	```HR-Import.cmd```
	* HR-Post  
	```HR-Post.cmd```
	* HR-Archive  
		* Utilisez le sous-type de job ```commande : File Move```
        * Utilisez une combinaison de la propriété globale entrante et de ```[[SI.FILENAME]]``` pour la **SOURCE**.

:::note Exemple   
```
"[[HR-Incoming]]\[[SI.FILENAME]]"
```
:::

* Utilisez une combinaison de la **propriété globale d'archivage**, de ```[[SI.FILENAME]]``` et de la **date actuelle** avec un décalage d’un mois (-1m) pour la **DESTINATION**.   

:::note Exemple   
```
"[[HR-Archive]]\[[$DATEyyyymm(-1m)]]-[[SI.FILENAME]]"
```
:::

:::note Remarque
la **propriété d'instance de schedule** ```[[SI.FILENAME]]``` sera transmise par **l’Event ```JOB:ADD``` du job File Arrival**
:::

* Ces jobs doivent s'exécuter avec le **User ID** ```SMATRAINING\SMAUSER```
* Ces jobs doivent s'exécuter sur la **machine** ```SMATRAINING```
* Ces jobs doivent être exécutés tous les jours
* N'oubliez pas d'ajouter de la **documentation** à tous les jobs
* Les Jobs doivent s'exécuter dans cet ordre :
	* Decrypt
	* Import
	* Post
	* Archive
* Utilisez la propriété qui pointe vers le chemin ```C:\Scripts``` pour les **lignes de commande**
* Créez un **Schedule principal** nommé **HR Import** (les jours ouvrés doivent être du **lundi au dimanche**)
* **Mise au plan automatique** ```7``` jours à l'avance pour ```1``` jour
* **Suppression automatique** ```7``` jours en arrière 
* Ajouter de la **documentation** pour le schedule
* Créez un **Job container** dans le schedule **HR Import** nommé **HR Import Processing**
* Le Job container doit exécuter **HR Import Processing SubSchedule**.
* Le Job container doit **autoriser le multi-instance**
* Ajouter de la **documentation**
* Donnez une fréquence ```OnRequest```
* Donner au job une **dépendance de ressources** à ```1```
* Une fois que le **Job de container** affiche « **Finished OK** » ajouter un event ```$JOB:RESTART```, pour le job **File Arrival**.
	* Voici les paramètres de l'event  ```$JOB:RESTART``` :
```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival
```

* Créez un Job **File Arrival** nommé **File Arrival**
* Surveiller les éléments suivants :
```"[[HR-Incoming]]\*.txt"```  

Ou   

```"C:\Human Resources\Incoming Files\*.txt"```   
* Le **Start Time** de la création du fichier doit être à ```00:00``` (minuit)
* Le **End Time** de la création du fichier doit être à ```19:00```
* Ajouter des **critères d'échec (Failure Criteria)**
	* Définir l'**opérateur de comparaison** " Egal à " Valeur "```0```"
	* Opérateur de comparaison « OU » « Egal à » Valeur ```1``` Résultat « **Finish OK** »
* Ajouter de la **documentation**
* Utiliser l'**event** ```$JOB:ADD``` pour les fichiers textes lorsque **File Arrival** trouve un fichier ```.txt```
        * L'**event** ajoutera le **job container** au schedule **HR Import**.
        * **Ajouter** un **event** au **Job File Arrival** pour transmettre une **propriété d'instance de job** nommée ```[[JI.FILENAME]]``` pour capturer le nom du fichier
        * Voici les paramètres de l'event ```$JOB:ADD``` : 
```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],HR Import Processing,OnRequest,FILENAME=[[JI.$ARRIVED SHORT FILE NAME]]
```
* Pour pouvoir tester la configuration, ajouter un **Job Embedded Script** nommé **Create HR Files** au schedule **HR Import**
* Le script créera les fichiers sous le dossier : ```C:\Human Resources\Incoming Files```
* Configurez le **Job Windows** pour utiliser l’action **Embedded Script** et sélectionnez le **script** ```Lab_4```
    * N'oubliez pas de sélectionner le **Runner** ```PowerShell```
* Le Job doit s'exécuter sur la machine ```SMATRAINING``` sous le compte ```SMATRAINING\SMAUSER```
* Donnez-lui la fréquence du **lundi au dimanche**
* Ajouter de la **documentation**
* Avant de mettre au plan le schedule pour aujourd'hui, utilisez le **Designer Workflow** pour vérifier votre configuration

#### HR Import Processing (Le Sous-Schedule)

<a href="imgbasic/445.png" target="_blank"><img src="imgbasic/445.png" width="400"></img></a>

#### HR Import (Le Schedule Principal)

<a href="imgbasic/446.png" target="_blank"><img src="imgbasic/446.png" width="500"></img></a>

###### (Cliquez sur les images pour les agrandir)

</details>
