---
sidebar_label: 'Unite 1 Exercice 4'
hide_title: 'false'
---

## Exercice 4: Dépendances de jobs

##### Objectif:

Créer une chaîne de dépendance de type **Requise** pour les quatre jobs dans **MY FIRST SCHEDULE**.
Le flux de dépendance doit être :

**WINDOWS JOB 1** <- **WINDOWS JOB 2** <- **WINDOWS JOB 3** <- **WINDOWS JOB 4**

où **WINDOWS JOB 4** nécessite **WINDOWS JOB 3**, etc.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E4.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1.	Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
2.	Dans la liste déroulante **schedule**, sélectionnez **MY FIRST SCHEDULE**.
3.	Dans la liste déroulante **job**, sélectionnez **Windows Job 4**.
4.	Sous **Propriétés du Job**, cliquez sur l'onglet **Dépendances**.
5.	Dans le sous onglet **Job Dépendance**, cliquez sur le bouton **Ajouter**.
6.	Dans la fenêtre **Ajouter Dépendance**:
    - Dans la liste déroulante **Job**, sélectionnez **Windows Job 3**.
    - Sélectionnez le type de Dépendance **Requise**
    - Cliquez sur le bouton **OK**.
7.	Dans la liste déroulante Job, sélectionnez **Windows Job 3**.
8.	Dans le sous onglet **Job Dépendance**, cliquez sur le bouton **Ajouter**.
9.	Dans la fenêtre **Ajouter Dépendance**:
    - Dans la liste déroulante **Job**, sélectionnez **Windows Job 2**.
    - Sélectionnez le type de Dépendance **Requise**
    - Cliquez sur le bouton **OK**.
10.	Dans la liste déroulante Job, sélectionnez **Windows Job 2**.
11.	Dans le sous onglet **Job Dépendance**, cliquez sur le bouton **Ajouter**.
12.	Dans la fenêtre **Ajouter Dépendance**:
    - Dans la liste déroulante **Job**, sélectionnez **Windows Job 1**.
    - Sélectionnez le type de Dépendance **Requise**
    - Cliquez sur le bouton **OK** 
16.	Fermez le **Job Master**.

</details>
