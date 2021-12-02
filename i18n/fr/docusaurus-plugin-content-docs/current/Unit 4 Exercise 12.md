---
sidebar_label: 'Unite 4 Exercice 12'
hide_title: 'false'
---

### Exercice 12: Arrivée de fichiers - Fichiers multiples

##### Objectif:

Créez un Schedule nommé **MultipleFiles-Main Schedule**.

Dans celui-ci, créez un job Windows nommé **File Arrival Job** avec un **Job Action** ```File Arrival``` avec une fréquence du lundi au vendredi.

**File Name :** ```“C:\Multi-File Arrival\MultiFile*.txt”``` 
**Start Time:** ```0900``` 
**End Time:** ```1700``` 
**File Size Stable Duration (en secondes)** : ```5```

Ajoutez un event ```$JOB:ADD``` sur le Job avec les paramètres suivants :

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],MultiFile Processing Job,OnRequest,FILENAME=[[JI.$ARRIVED FILE NAME]]
```

Dans le schedule **MultipleFiles-Main Schedule**, créez un Job Windows nommé **Create File** avec un **Job Action** ```Embedded Script``` et avec une fréquence du lundi au vendredi. Le Job doit exécuter le script ```Windows_MultiFile_Arrival``` avec un **Runner** ```PowerShell```. Attribuez au job un statut de mise au plan **On Hold**.

Créez un schedule nommé **MultipleFiles-SubSchedule**. Marquez le schedule comme **sous-schedule**.

Dans **MultipleFiles-SubSchedule**, créez un Job Windows nommé **Process File** exécutant le programme genericp sur une fréquence du lundi au vendredi.

Dans **MultipleFiles-SubSchedule**, créez un job Windows nommé **Archive File** avec un **Sous-type de Job** ```Command: File Move``` et avec une fréquence du lundi au vendredi.

**Source**: ```“[[SI.FILENAME]]”```
**Destination**: ```“C:\Multi-File Arrival\Archive\”```

Créez une **dépendance requise** pour le job **Archive File** et le job **Process File**.

**Archive File Job > Process File Job**

Dans le schedule **MultipleFiles-Main Schedule**, créez un Job nommé **MultiFile Processing Job** qui exécute **MultipFiles-SubSchedule** en tant que **Job Container** avec une fréquence ```OnRequest```.

Ajoutez un **event** au Job ```$JOB: RESTART``` avec les paramètres suivants :

```
[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival Job
```

Mettre au plan le schedule en released pour aujourd'hui. Libérez le job **Create File** dans **MultipleFiles-Main Schedule**. Vérifiez les propriétés d'instance de l'un des jobs container dans les informations de job pour vérifier le traitement des fichiers.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E12.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Créez un nouveau Schedule principal utilisant les paramètres par défaut. Nommez-le MultipleFiles-Main Schedule. Ajoutez de la documentation à l'annexe.
2. Ajoutez le job Windows File Arrival Job au Schedule MultipleFiles-Main Schedule
    * **Name** : **File Arrival Job**
    * **Job Type** : ```Windows```
    * **Primary Machine** : ```SMATraining```
    * **Job Action** : ```File Arrival```
    * **User ID** : ```SMATRAINING```
    * **File Name** : ```"C:\Multi-File Arrival\MultiFile*.txt"```
    * **Start Time** : ```0900```
    * **End Time** : ```1700```
    * **File Size Stable Duration (en secondes)** : ```5```
3. Donnez au job la fréquence ```Mon-Fri-N``` .
4. Dans l'onglet **Events**, ajoutez un nouvel event
    * Sur l'écran **Déclenchement Event** sélectionnez le bouton radio **Statut de Job**, cliquez sur **Suivant**.
    * Sur l'écran **Détails Déclenchement** pour **Statut Job**, sélectionnez **Finished OK**, cliquez sur **Suivant**.
    * Sur l'écran **Définition Event**, pour **le modèle Event**, sélectionnez :

	```$JOB:ADD,<Schedule date>,<Schedule name>,<Job name>,<Frequency name>,[Job instance property definitions]```

	* Pour les **paramètres d'event**, utilisez ce qui suit,

	```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],MultiFile Processing Job,OnRequest,FILENAME=[[JI.$ARRIVED FILE NAME]]```

	* Cliquez sur **Terminer**.
5. Toujours dans l'onglet **Job Master** et avec le schedule **MultipleFiles-Main schedule** sélectionné, ajoutez un nouveau Job. Ce sera un **Job avec un script embarqué** (déjà configuré) qui créera les fichiers.
    * **Name** : **Create File**
    * **Job Type** : ```Windows```
    * **Primary Machine** : ```SMATraining```
    * **Job Action** : ```Embedded Script```
    * **User ID** : ```SMATRAINING\SMAUSER```
    * **Script** : ```Windows_MultiFile_Arrival```
    * **Version** : ```LATEST```
    * **Runner** : ```PowerShell```
    * **Arguments** : ne saisissez rien (laissez ce champ vide)
6. Donnez au job la fréquence ```Mon-Fri-N```.
7. Attribuez au job **le statut de mise au plan On Hold**.
8. Ajoutez de la **documentation** au job.
9. En dehors d'OpCon, vérifiez que le dossier suivant existe : ```C:\Multi-File Arrival```
10. De retour dans **Enterprise Manager**, créez un nouveau Schedule, nommez-le **MultipleFiles-SubSchedule**.
11. Sous le cadre **Propriétés Schedule**, marquez-le comme **Sous-Schedule**.
12. Ajoutez de la **documentation** au sous-schedule.
13. Laissez les autres champs avec les **valeurs** par défaut.
14. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
15. Dans la liste déroulante **Schedule**, sélectionnez **MultipleFiles-SubSchedule**.
16. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
17. Dans la zone de texte **Nom** entrez **Process File**.
18. Exécutez le programme **Windows** ```Genericp``` dans la **ligne de commande**.
	* Exemple: ```"[[MI.PathWindows]]\genericp.exe" -t10 -e0```
19. Donnez au job une **fréquence** ```Mon-Fri-N```.
20. Ajoutez de la **documentation** au job.
21. Une fois l'**option MultipleFiles-SubSchedule** sélectionnée, cliquez sur le bouton **Ajouter** de la barre d'outils **Job Master**. 
	* **Name**: **Archive File**
	* **Job Type**: ```Windows```
	* **Job Sub-Type**: ```Command: File Move```
	* **Primary Machine**: ```SMATraining```
	* **User ID**: ```SMATTRAINING\SMAUSER```
	* **Source**: ```“[[SI.FILENAME]]”```
	* **Destination**: ```“C:\Multi-File Arrival\Archive\”```
22. Cliquez sur le bouton **Sauvegarder**.
23. Donnez au job une **fréquence** ```Mon-Fri-N```.
24. Ajoutez de la **documentation** au job.
25. Rendre le job **Archive File** dépendant du succès du job **Process File**.
26. Dans **Job Master**, assurez-vous que le schedule **MultipleFiles-Main Schedule** soit sélectionnée.
27. Ajoutez un job au schedule **MultipleFiles-Main Schedule**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
    * Dans la zone de texte Nom entrez **MultiFile Processing Job**.
    * Dans la liste déroulante **Type de Job**, sélectionnez **Container**.
    * Dans la liste déroulante **Schedule à exécuter en tant que Sous-Schedule**, sélectionnez **MultipleFiles-SubSchedule**.
    * Cliquez sur le bouton **Sauvegarder**.
28. Donnez au job une **fréquence** ```On Request```.
29. Ajoutez de la **documentation** au job.
30. Ajouter un Event au job.
    * Sur l'écran **Déclenchement Event**, sélectionnez le bouton radio **Statut de Job**, cliquez sur **Suivant**.
    * Sur l'écran **Détails Déclenchement** pour **le Statut Job**, sélectionnez **Finished OK**, cliquez sur **Suivant**.
    * Sur l'écran **Définition Event** pour **Modèle Event** sélectionnez :
	```$JOB:RESTART <Schedule date>,<Schedule name>,<Job name>```

	* Pour les **paramètres d'event**, utilisez ce qui suit : 
	```[[$SCHEDULE DATE]],[[$SCHEDULE NAME]],File Arrival Job ```

	* et cliquez sur **Terminer**.
31. Mettre au plan le Schedule **MultipleFiles-Main Schedule** pour aujourd'hui.
32. Basculez vers une **vue des opérations**.
33. Notez que le job **File Arrival Job** est en cours d'exécution (aucun fichier n'est encore arrivé) et que le job **MultiFile Processing** n'a pas été créée (```OnRequest``` - elle sera ajoutée par le job **File Arrival Job**).
34. Lancez le job **Create File** dans le schedule **MultipleFiles-Main**. Ce Job créera les fichiers.
35.	Notez que lorsque le job **File Arrival Job** trouve des fichiers, un nouveau job container est ajouté pour chaque fichier. Une fois terminé, les fichiers seront déplacés vers le dossier **Archive**.
37.	Si vous vérifiez les **propriétés d'instance** de l'un des **Job container**, vous trouverez quel fichier est en cours de traitement (à partir du ```[[SI.FILENAME]]```).
    * Vérifiez les **informations sur le job (Job information)**.

</details>