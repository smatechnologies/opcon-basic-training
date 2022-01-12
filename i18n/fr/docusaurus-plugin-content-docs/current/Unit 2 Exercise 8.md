---
sidebar_label: 'Unité 2 Exercice 8'
hide_title: 'false'
---

## Exercice 8: Fréquences - Toutes les semaines, en occurrence, le (jour)

##### Objectif: 

Dans le Schedule **Frequency Practice** existant, créez trois nouveaux Null jobs:

  - **Daily Frequency Practice**
  - **On Occurrence Frequency Practice**
  - **On Day Frequency Practice**


Dans le job **Daily Frequency Practice**, créez une nouvelle fréquence nommée ```Tue+Thu-B```. Cette fréquence doit fonctionner le mardi et le jeudi de chaque semaine et la veille en cas de vacances.

Dans le job **On Occurrence Frequency Practice**, créez une nouvelle fréquence nommée ```4th-Thu-B```. Cette fréquence doit s'exécuter à l'occurrence du 4e jeudi du mois, ou la veille en cas de jour férié.

Dans le job **On Day Frequency Practice**, créez une nouvelle fréquence nommée ```1st-day-of-month-wk```. Cette fréquence doit s’exécuter le 1er jour ouvrable du mois.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1.	Ouvrez **Job Master**.
2.	Sélectionnez le schedule **Frequency Practice** dans le menu déroulant Schedule.
3.	Cliquez sur le bouton **Ajouter** pour ajouter un Null Job.
4.	Entrez ```Daily Frequency Practice``` dans le champ de texte Nom.
5.	Cliquez sur le bouton **Sauvegarder**.
6.	Répétez les étapes 3 à 5 pour créer deux autres Null Jobs:
    * **On Occurrence Frequency Practice**
    * **On Day Frequency Practice**
7.	Fréquence : **Toutes les Semaines**
    * Sélectionnez **Daily Frequency Practice** dans le menu déroulant Job
    * Cliquez sur l'onglet **Fréquence**
    * Cliquez sur le bouton **Ajouter** sous Liste Fréquences
    * Cliquez sur le bouton radio **Créer nouvelle Fréquence** 
    * Tapez ```Tue + Thu-B``` dans le champ Nom Fréquence 
    * Cliquez sur **Suivant**
    * Sélectionnez le bouton radio **Toutes les Semaines**
    * Cochez les cases à côté de **Mardi** et **Jeudi** dans le paramètre **Jour de la Semaine**
    * Cliquez sur le bouton **Prévisionnel**
    * Déplacez les écrans **Prévisionnel** et **Assistant définition Fréquence** afin que vous puissiez voir les deux
    * L'écran **Prévisionnel** devrait afficher toutes les dates du mardi et du jeudi en vert, sauf s'il s'agit d'un jour férié. S'il y a un jour férié le mardi ou le jeudi, la veille doit être verte
    * Modifiez le paramètre **A / O / B / N** de **Avant Date** à **Après Date** et notez le changement dans votre écran **Prévisionnel**
    * Modifiez ensuite le paramètre **A / O / B / N** en choisissant **Sur Date**, puis **Non Planifié** pour voir ce que font ces paramètres
    * Enfin, positionnez le **A / O / B / N** de nouveau à **Avant Date**
    * Cliquez sur **Terminer**
8.	Fréquence : **En Occurrence**
    * Sélectionnez le job **On Occurrence Frequency Practice** dans la liste déroulante Job
    * Dans l'onglet Fréquence, cliquez sur le bouton **Ajouter** sous Liste Fréquences
    * Cliquez sur le bouton radio **Créer nouvelle Fréquence**
    * Tapez ```4th-Thu-B``` dans le champ Nom Fréquence
    * Cliquez sur **Suivant**
    * Sélectionnez le bouton radio **En Occurrence**
    * Cochez la case à côté de **Jeudi** dans le paramètre Jour de la semaine
    * Sélectionnez le bouton radio **4ième** pour le paramètre **En Occurrence** dans le coin inférieur droit de l'écran
    * Laissez le paramètre **A / O / B / N** sur **Avant Date**
    * Cliquez sur le bouton **Prévisionnel**
    * Déplacez les écrans **Prévisionnel** et **Assistant définition Fréquence** afin que vous puissiez voir les deux
    * Sur l'écran **Prévisionnel**, le 4e jeudi de chaque mois devrait être vert sauf pour l’Ascension. La veille de l’Ascension devrait être verte
    * Cliquez sur **Terminer**
9.	Fréquence : **Le (Jour)**
    *	Sélectionnez le job **On Day Frequency Practice** dans la liste déroulante Job 
    *	Dans l'onglet Fréquence, cliquez sur le bouton **Ajouter** sous Liste Fréquences
    *	Cliquez sur le bouton radio **Créer nouvelle Fréquence**
    *	Tapez ```1st-day-of-month-wk``` dans le champ Nom Fréquence
    *	Cliquez sur **Suivant**
    *	Sélectionnez le bouton radio **Le (Jour)**
    *	Laissez **Jours du Mois** défini sur **Le ```1``` Jour**
    *	Sélectionnez le bouton radio **1er Jour ouvré** pour le paramètre Type de Jour sous Jours du Mois
    *	Cliquez sur le bouton **Prévisionnel**
    *	Déplacez les écrans **Prévisionnel** et **Assistant définition Fréquence** afin que vous puissiez voir les deux
    *	Sur l'écran **Prévisionnel**, le **1er jour ouvrable de chaque** mois doit être vert sauf pour le jour de l'an. Remarquez comment les vacances et les week-ends affectent cette fréquence
    *	Cliquez sur **Terminer**

</details>
