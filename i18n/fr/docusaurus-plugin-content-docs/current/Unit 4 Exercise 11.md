---
sidebar_label: 'Unité 4 Exercice 11'
hide_title: 'false'
---

## Exercice 11: Arrivée des fichiers Windows

##### Objectif:


Créez un Schedule nommé **Windows File Arrival**. Dans le schedule **Windows File Arrival**, créez un job Windows nommé **Windows File Arrival Job** avec un **Job Action** ```File Arrival``` s’exécutant sur une fréquence du lundi au vendredi.

**File Name** : ```"C:\Windows File Arrival\WindowsFile1.txt"``` 
**Start Time** : ```0900``` 
**End Time** : ```1700``` 
**File Size Stable Duration (en secondes)** : ```5```

Créez un job Windows nommé **Create File** avec un **Job Action** ```Embedded Script``` et une fréquence du lundi au vendredi. Le Job doit exécuter le script ```Windows_File_Arrival``` avec un Runner ```PowerShell```.

Mettre au plan le Schedule en Released pour aujourd'hui. Dans la vue Matrix, vérifiez la bonne exécution du job.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E11.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Ajoutez un nouveau **Schedule** appelé **Windows File Arrival**, ajoutez de la **documentation** et utilisez les valeurs par défaut pour le schedule.
2. Dans **Job Master**, ajoutez un nouveau Job au schedule Windows File Arrival.
    * **Nom** : ```Windows File Arrival Job```
    * **Type de Job** : **Windows**
    * **Primary Machine** : **SMATraining**
    * **Job Action** : **File Arrival**
    * **User ID** : **SMATRAINING\SMAUSER**
    * **File Name**: ```"C:\Windows File Arrival\WindowsFile1.txt"```
    * **Start Time** : ```0900```
    * **End Time** : ```1700```
    * **File Size Stable Duration (en secondes)** : ```5```
3. Donnez au job la fréquence **Mon-Fri-N**.
4. Ajoutez de la **documentation** au job.
5. Le schedule **Windows File Arrival** étant toujours sélectionné dans **Job Master**, cliquez sur le bouton **Ajouter** de la barre d'outils Job Master (ou appuyez sur **Ctrl + N**) pour ajouter un nouveau Job.
    * **Nom** : ```Create File```
    * **Type de Job** : **Windows**
    * **Primary Machine** : **SMATraining\SMAUSER**
    * **Job Action** : **Embedded Script**
    * **User ID** : **SMATRAINING**
    * **Script** : **Windows_File_Arrival**
    * **Version** : **LATEST**
    * **Runner** : **PowerShell**
    * **Arguments** : ne saisissez rien (laissez ce champ vide)
    * **Enregistrer le job**
6. Donnez au job la **fréquence** **Mon-Fri-N**.
    * Attribuez au job le **Statut à la Mise au Plan**, **On Hold**.
7. Fermez le **Schedule Master** et le **Job Master**.
8. En dehors d'OpCon, vérifiez que le dossier : ```C:\Windows File Arrival``` existe et soit **vide**.
9. Revenir dans l’**EM**, mettre au plan le schedule **Windows File Arrival** en **Released** pour aujourd’hui..
10. Basculez vers l'une des **vues Operations**.
11. Notez que le job **Windows File Arrival Job** est en cours d'exécution.
12. **Libéré** le job **Create File** dans le schedule Windows File Arrival.
13. Une fois le job exécuté, vérifiez que le fichier a été créé et que les deux jobs sont **Finished OK**.

</details>
