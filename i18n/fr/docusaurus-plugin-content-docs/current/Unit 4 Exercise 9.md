---
sidebar_label: 'Unité 4 Exercice 9'
hide_title: 'false'
---

## Exercice 9: Transfert de fichiers SMA (SMAFT)

##### Objectif: 

Dans **MY FIRST SCHEDULE**, créez un Job nommé **SMAFT Job 1** avec un **Type de Job** ```File Transfer```. La machine source est ```SUSEVM```.

Le **fichier source** est : ```/usr/local/files/FileToSend.txt```.

La **machine de destination** est : ```SMATraining```.

Le **fichier de destination** est : ```C:\SMA File Transfer\FileToSend.txt```.

Pour la machine source et de destination, choisir le type de données (Data type) ASCII et Ecraser si le fichier existe (Overwrite if file exist).

Assurez-vous de donner au job une fréquence.

Dans la vue Matrix, ajoutez le job au schedule en Released pour qu'il s'exécute aujourd'hui. Une fois le job terminé, vérifiez que le fichier a bien été transféré.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E9.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous le menu Administration, double-cliquez sur **Job Master**.
2. Dans la liste déroulante Schedule, sélectionnez **My First Schedule**.
3. Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
4. Dans la zone de texte Nom, entrez ```SMAFT Job 1```.
5. Dans la liste déroulante Type de Job, sélectionnez **File Transfer**.
6. Dans la liste déroulante Source Information Machine, sélectionnez la machine **UNIX** que vous avez créée précédemment pour spécifier la provenance du fichier.
7. Dans la liste déroulante Source Information User, sélectionnez **0/0**pour spécifier le compte utilisé sur cette machine.
8. Dans la zone de texte Source Information File, entrez les informations suivantes pour le chemin et le nom de fichier à transférer:

```
/usr/local/files/FileToSend.txt
```

9. Dans la liste déroulante Destination Information Machine, sélectionnez la machine **SMATraining** pour spécifier la destination du fichier.
10. Dans la liste déroulante Destination Information User, sélectionnez **SMATRAINING\SMAUSER** pour spécifier le compte utilisé sur cette machine.
11.	Dans la zone de texte Destination Information File, entrez les informations suivantes pour le chemin et le nom de fichier à transférer :

```
C:\SMA File Transfer\FileToSend.txt
``` 

12. Cliquez sur l'onglet **Options**.
13. Dans la liste déroulante Source Data Type, sélectionnez **ASCII**.
14. Dans la liste déroulante Destination Data Type, sélectionnez **ASCII**.
15. Dans la liste déroulante If File Exists, sélectionnez **overwrite**.
16. Laissez Maximum Transfer Rate, Compression et Encryption par défaut.
17. Cliquez sur le bouton **Sauvegarder**.
18. Donnez au Job une **fréquence** qui lui permettra de s'exécuter aujourd'hui et fermez l'onglet **Job Master**.
19. Ouvrez l'**explorateur de fichiers Windows** et vérifiez que le dossier **C:\SMA File Transfer** sur le serveur OpCon est **vide**.
20. Dans une vue des opérations, **ajoutez ce job** au schedule en **released** pour lui permettre de s'exécuter.
21. Une fois le job **Finished OK**, vérifiez que le fichier **FileToSend.txt** est maintenant dans le dossier **C:\SMA File Transfer**.

</details>
