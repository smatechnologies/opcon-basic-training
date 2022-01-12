---
sidebar_label: 'Unité 2 Exercice 10'
hide_title: 'false'
---

## Exercice 10: Fréquences - En intervalle et Plan Annuel

##### Objectif:

Dans le Schedule **Frequency Practice** existant, créez trois nouveaux Null Jobs :

  - **On Interval Frequency Practice**
  - **Annual Frequency Practice**
  - **Annual Plan Frequency with Offsets**

Dans le Job **On Interval Frequency Practice**, créez une nouvelle fréquence nommée ```Every-15thand30th-B```. Cette fréquence doit être exécutée tous les 15 et 30 du mois, ou la veille en cas de vacances.

Dans le menu Administration puis **Calendriers**, ajoutez un nouveau calendrier nommé ```Company Holiday Calendar``` et sélectionnez plusieurs dates de cette année. Fournissez de la documentation appropriée.

Dans le Job **Annual Frequency Practice**, créez une nouvelle fréquence nommée ```CompanyHoliday```. Planifiez la fréquence à l'aide d'un **Plan Annuel** en sélectionnant ```Company Holiday Calendar```.

Dans le Job **Annual Plan Frequency with Offsets**, créez une nouvelle fréquence nommée ```CompanyHoliday+1```. Cette fréquence doit utiliser le ```Company Holiday Calendar``` **plan annuel** avec un décalage de ```1 jour```.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E10.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1.	Ouvrez **Job Master**.
2.	Sélectionnez **Frequency Practice Schedule** dans la liste déroulante Schedule.
3.	Cliquez sur le bouton **Ajouter**.
4.	Entrez ```On Interval Frequency Practice``` dans le champ de texte sous Nom.
5.	Cliquez sur le bouton **Sauvegarder**.
6.	Répétez les étapes 3 à 5 pour créer les Jobs suivants :
    * **Annual Frequency Practice**
    * **Annual Plan Frequency with Offsets**
7.	Fréquence : En Interval
    * Sélectionnez **On Interval Frequency Practice** dans la liste déroulante Job du menu Job Master
    * Dans l'onglet **Fréquence**, cliquez sur le bouton **Ajouter** sous Liste Fréquences.
    * Cliquez sur le bouton radio **Créer nouvelle Fréquence**.
    * Tapez ```Every-15thand30th-B``` dans le champ Nom Fréquence.
    * Cliquez sur **Suivant**.
    * Sélectionnez le bouton radio **En Intervalles**.
    * Cochez les cases pour le **15** et **30** sous le paramètre En Intervalles.
    * Modifiez le paramètre **A / O / B / N** de **Sur Date** à **Avant Date**.
    * Cliquez sur le bouton **Prévisionnel**.
    * Déplacez les écrans **Prévisionnel** et **Assistant définition Fréquence** afin que vous puissiez voir les deux.
    * Sur l'écran Prévisionnel, les 15e et 30e jours de chaque mois sont verts et se déplacent « Avant » pour les jours fériés et les week-ends et les jours fériés.
    * Cliquez sur **Terminer**.
8.	Fréquence : Plan Annuel
    * Cliquez sur **Calendriers** dans le menu Administration du panneau de navigation.
    * Cliquez sur le bouton **Ajouter**.
    * Saisissez ```Company Holiday Calendar``` dans le champ Nom.
    * Saisissez une documentation: ```Ce calendrier sera utilisé dans une fréquence de plan annuel```.
    * Cliquez sur le bouton **Sauvegarder**.
    * Cliquez sur **plusieurs dates** dans le calendrier.
        * Remarque : les dates sont enregistrées dynamiquement
    * Cliquez sur la **flèche droite** à côté du mois juste au-dessus du calendrier pour passer aux mois suivants.
    * Cliquez sur la **flèche vers le bas** à côté de l'année juste au-dessus du calendrier pour passer à l'année suivante.
    * Fermez l'onglet **Calendriers**.
    * Ouvrez le **Job Master**.
    * Sélectionnez **Frequency Practice Schedule** dans la liste déroulante Schedule.
    * Cliquez sur le bouton **Ajouter**.
    * Entrez ```Annual Plan Frequency``` dans le champ Nom.
    * Cliquez sur le bouton **Sauvegarder**.
    * Cliquez sur l'onglet **Fréquence**.
    * Cliquez sur le bouton **Ajouter** sous la liste des fréquences.
    * Cliquez sur le bouton radio **Créer nouvelle Fréquence**.
    * Saisissez ```CompanyHoliday``` dans le champ Nom Fréquence.
    * Cliquez sur **Suivant**.
    * Dans la section Choix de Planification, cliquez sur le bouton radio **Plan Annuel**.
    * Dans le menu déroulant Calendrier, sélectionnez **Company Holiday Calendar**.
    * Cliquez sur **Prévisionnel** pour afficher la fréquence.
        * Les dates doivent correspondre à celles que vous avez entrées dans le calendrier.
    * Cliquez **OK**.
    * Cliquez sur **Terminer**.
9.	Fréquence : Plan Annuel avec Ecart
    * Sélectionnez **Annual Plan Frequency with Offsets** dans la liste déroulante Job du menu Job Master.
    * Dans l'écran des fréquences, cliquez sur le bouton **Ajouter** sous la Liste Fréquence.
    * Cliquez sur le bouton radio **Créer nouvelle Fréquence**.
    * Saisissez ```CompanyHoliday+1``` dans le champ Nom Fréquence.
    * Cliquez sur **Suivant**
    * Dans la section Choix de Planification, cliquez sur le bouton radio **Plan Annuel**.
    * Dans le menu déroulant Calendrier, sélectionnez **Company Holiday Calendar**.
    * Dans la zone Ecart Jours, entrez le nombre ```1```.
    * Cliquez sur **Prévisionnel** pour afficher la fréquence.
    * Les dates sélectionnées doivent être le jour ouvrable suivant des dates sélectionnées dans le calendrier.
    * Cliquez **OK**.
    * Cliquez sur **Terminer**.
    * Fermez l'onglet Job Master.

</details>
