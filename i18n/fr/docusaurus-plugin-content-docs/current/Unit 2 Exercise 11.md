---
sidebar_label: 'Unite 2 Exercice 11'
hide_title: 'false'
---

## Exercice 11: Fréquences multiples

##### Objectif: 

Créez un nouveau schedule nommé **MULTIPLE AND NEGATIVE FREQUENCIES** qui s'exécute du lundi au vendredi. Ajoutez un Job nul nommé **MULTIPLE FREQUENCIES**.

Créez une fréquence à exécuter le **15 du mois** et une deuxième fréquence à exécuter le **dernier jour ouvrable du mois**.

Le Job doit s'exécuter à ```20h00``` quand ce n'est pas le dernier jour du mois et à ```18h00``` le dernier jour du mois.

Dans le même Schedule, créez un nouveau Job nommé **NEGATIVE FREQUENCIES**. Le Job doit avoir des fréquences qui lui permettent de s'exécuter du lundi au vendredi, sauf s'il s'agit d'un **jour férié** ou du **dernier jour du mois**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E11.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click for Step-By-Step Instructions</summary>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1.	**Fréquences multiples**
    * Créez un nouveau schedule
    * Ajoutez un Job null et configurez des fréquences permettant à un Job de s'exécuter le **15 du mois** (jour ouvrable avant) et le **dernier jour ouvrable du mois**.
        * Planification - Semaine de travail de 5 jours
        * Le Job s'exécute à ```20h00``` lorsqu'il n'est pas le dernier jour du mois et à ```18h00``` lorsqu'il s'agit du dernier jour ouvrable du mois.
    * Utilisez le bouton Prévisionnel Global pour afficher les deux fréquences.
        * Le premier listé sera vert et le second sera jaune.
2.	**Fréquences négatives**
    * Dans un nouveau Null Job (même schedule), configurez des fréquences permettant au job de s'exécuter tous les jours du mois, du lundi au vendredi, sauf s'il s'agit d'un jour férié ou du dernier jour du mois.
    * Utilisez le bouton Prévisionnel Global pour afficher les deux fréquences.
  
  :::note Remarque
  La *fréquence négative apparaîtra en violet*
  :::

</details>