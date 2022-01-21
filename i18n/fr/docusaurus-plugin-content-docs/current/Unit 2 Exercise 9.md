---
sidebar_label: 'Unité 2 Exercice 9'
hide_title: 'false'
---

## Exercice 9: Fréquences – A la demande, début de période, milieu de période et fin de période

##### Objectif: 

Dans le Schedule **Frequency Practice** existant, créez quatre nouveaux Null Jobs :

* **On Request Frequency Practice**
* **Begin of Period Frequency Practice**
* **Mid of Period Frequency Practice**
* **End of Period Frequency Practice**

Dans le Job **On Request Frequency Practice**, créez une nouvelle fréquence nommée ```OnRequest```. Cette fréquence doit fonctionner **A la demande** à la date demandée. Dans ce cas, définissez la date au 3 janvier.

Dans le Job **Begin of Period Frequency Practice**, créez une nouvelle fréquence nommée ```BOM-A```. Cette fréquence doit fonctionner le 1er jour ouvrable de chaque mois, ou le lendemain en cas de vacances.

Dansnle Job **Mid of Period Frequency Practice**, créez une nouvelle fréquence nommée ```Mid-Wed-A```. Cette fréquence doit s'exécuter le mercredi le plus proche du milieu du mois, ou le lendemain en cas de vacances.

Dans le Job **End of Period Frequency Practice**, créez une nouvelle fréquence nommée ```EOM-B```. Cette fréquence doit être exécutée le dernier jour ouvrable du mois ou la veille en cas de vacances.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E9.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1.	Ouvrez le **Job Master**.
2.	Sélectionnez **Frequency Practice Schedule** dans la liste déroulante Schedule.
3.	Cliquez sur le bouton **Ajouter**.
4.	Entrez ```On Request Frequency Practice``` dans le champ de texte Nom.
5.	Cliquez sur le bouton **Sauvegarder**.
6.	Répétez les étapes 3 à 5 pour créer trois Null Jobs :
    - ```Begin of Period Frequency Practice```
    - ```Mid of Period Frequency Practice```
    - ```End of Period Frequency Practice```
7.	Fréquence : A la demande
    - Sélectionnez **On Request Frequency Practice** dans la liste déroulante Job.
    - Dans l'écran des fréquences, cliquez sur le bouton **Ajouter** sous Liste Fréquence.
    - Cliquez sur le bouton radio **Créer nouvelle Fréquence**.
    - Tapez ```OnRequest``` dans le champ Nom Fréquence.
    - Cliquez sur **Suivant**.
    - Sélectionnez le bouton radio **A la demande**.
    - Sélectionnez le 3 janvier sur le calendrier **Date demandée**.
    - Laissez le paramètre **A / O / B / N** à **Sur Date**.
    - Cliquez sur le bouton **Prévisionnel**.
    - Déplacez les écrans **Prévisionnel** et **Assistant définition Fréquence** afin que vous puissiez voir les deux.
    - Sur l'écran Prévisionnel, seul le 3 janvier de cette année devrait être vert.
    - Cliquez sur **Terminer**.
8.	Fréquence: **Début de Période**
    - Sélectionnez **Begin of Period Frequency Practice** dans la liste déroulante Job.
    - Dans l'écran des fréquences, cliquez sur le bouton **Ajouter** sous Liste Fréquence.
    - Cliquez sur le bouton radio **Créer nouvelle Fréquence**.
    - Tapez ```BOM-A``` dans le champ Nom Fréquence.
    - Cliquez sur **Suivant**.
    - Sélectionnez le bouton radio **Début de Période**.
    - Changer le paramètre **A / O / B / N** de **Sur Date** à **Après Date**
    - Cliquez sur le bouton **Prévisionnel**.
    - Déplacez les écrans **Prévisionnel** et **Assistant définition Fréquence** afin que vous puissiez voir les deux.
    - Sur l'écran Prévisionnel, le premier jour travaillé de chaque mois doit être vert. Remarquez comment les vacances et les week-ends affectent cette fréquence.
    - Cliquez sur **Terminer**.
9.	Fréquence : **Milieu de Période**
    - Sélectionnez **Mid of Period Frequency Practice** dans la liste déroulante Job.
    - Dans l'écran des fréquences, cliquez sur le bouton **Ajouter** sous Liste Fréquence.
    - Cliquez sur le bouton radio **Créer nouvelle Fréquence**.
    - Tapez ```Mid-Wed-A``` dans le champ Nom Fréquence.
    - Cliquez sur **Suivant**.
    - Sélectionnez le bouton radio **Milieu de Période**.
    - Sélectionnez **Mercredi** dans le menu Jour de la semaine.
    - Modifiez le paramètre **A / O / B / N** de **Sur Date** à **Après Date**.
    - Cliquez sur le bouton **Prévisionnel**.
    - Déplacez les écrans **Prévisionnel** et **Assistant définition Fréquence** afin que vous puissiez voir les deux.
    - Sur l'écran Prévisionnel, le mercredi le plus proche du milieu de chaque mois devrait être vert. Remarquez comment les vacances et les week-ends affectent cette fréquence.
    - Cliquez sur **Terminer**.
10.	Fréquence : **Fin de Période**
    - Sélectionnez **End of Period Frequency Practice** dans la liste déroulante Job.
    - Dans l'écran des fréquences, cliquez sur le bouton **Ajouter** sous Liste Fréquence.
    - Cliquez sur le bouton radio **Créer nouvelle Fréquence**.
    - Tapez ```EOM-B``` dans le champ Nom Fréquence.
    - Cliquez sur **Suivant**.
    - Sélectionnez le bouton radio **Fin de Période**.
    - Modifiez le paramètre **A / O / B / N** de **Sur Date** à **Avant Date**.
    - Cliquez sur le bouton **Prévisionnel**.
    - Déplacez les écrans **Prévisionnel** et **Assistant définition Fréquence** afin que vous puissiez voir les deux.    
    - Sur l'écran Prévisionnel, le **dernier jour ouvrable** de chaque mois doit être vert. Remarquez comment les vacances et les week-ends affectent cette fréquence.
    - Cliquez sur **Terminer**.

</details>
