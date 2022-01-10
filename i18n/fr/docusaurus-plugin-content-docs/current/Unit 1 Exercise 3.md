---
sidebar_label: 'Unité 1 Exercice 3'
hide_title: 'false'
---

## Exercice 3: Étapes pour définir un job

##### Objectif: 

Créez un Job nommé **WINDOWS JOB 1** dans le schedule nommé **MY FIRST SCHEDULE**. Le Job doit s'exécuter sur une machine de type ```WINDOWS```. Le job doit utiliser la machine ```SMATRAINING``` et le User ID ```SMATRAINING\SMAUSER```. La ligne de commande doit exécuter le programme suivant :

```"C:\Program Files\OpConxps\MSLSAM\genericp.exe" -t10```

Attribuez au job la **fréquence existante** suivante : ```Mon-FriOnDate```. Répétez les étapes précédentes pour créer 3 autres Jobs identiques à **WINDOWS JOB 1** suivant le même modèle.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1.	Sous l'onglet Administration, double-cliquez sur **Job Master**.
2.	Dans la liste déroulante schedule, sélectionnez **My First Schedule**.
3.	Cliquez sur le bouton **Ajouter (+)** dans la barre d'outils Job Master.
4.	Dans la zone de texte Nom, entrez ```Windows Job 1```.
5.	Dans la liste déroulante Type de Job, sélectionnez **Windows**.
6.	Dans la liste déroulante Machine Primaire, sélectionnez la machine **SMATraining** sur laquelle le job doit être exécuté.
7.	Dans la liste déroulante ID utilisateur (User Id), sélectionnez **SMATRAINING\SMAUSER**
8.	Dans la ligne de commande (Command Line), tapez :
```
“C:\Program Files\OpConxps\MSLSAM\genericp.exe” –t10
```
9.	Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
10.	Dans l'écran Job Master sous Propriétés du job, cliquez sur l'onglet **Fréquence**.
11.	Dans le cadre Frequency List, cliquez sur le bouton **Ajouter** (situé sous Liste Fréquences).
12.	L'assistant de définition de fréquence s'ouvre.
13.	Sélectionnez **Utiliser une Fréquence existante**.
14.	Dans la barre déroulante, sélectionnez la fréquence nommée **Mon-FriOnDate** et cliquez sur **Suivant**, puis sur **Terminer**. Répétez les étapes 3 à 14 pour créer trois jobs identiques au job Windows 1.
15.	```Windows Job 2```
16.	```Windows Job 3```
17.	```Windows Job 4```
18.	Fermez l'onglet **Job Master**.

</details>
