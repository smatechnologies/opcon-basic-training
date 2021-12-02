---
sidebar_label: 'Unite 1 Exercice 7'
hide_title: 'false'
---

## Exercice 7: Statuts des jobs et des Schedules

##### Objectif: 

Mettre au plan le schedule nommé **Schedule and Job Statuses** en mode ```« Hold »``` pour aujourd'hui. Dans la **vue Matrix**, libérer le Schedule pour aujourd'hui.

Vérifiez ```l’heure de démarrage``` du Schedule. Si l’heure n’est pas atteinte, démarrez le Schedule manuellement.

Enfin, remettez le Schedule au statut ```« On Hold »```.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E7.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Mettre au plan le schedule **Schedule and Job Statuses**
    * Sous la rubrique **Opérations**, double-cliquez sur Mise au Plan (Build).
    * Dans la section **Schedule Sélection**, sélectionnez **Schedule and Job Statuses** pour sa mise au plan.
    * Cliquez sur le bouton **Mise au Plan**.
    * Dans la fenêtre pop-up **Propriétés Mise au Plan**, choisissez **On Hold**.
    * Cliquez sur **OK**.
2. Fermez l'écran **Build Schedules**.
3. Libérez le schedule **Schedule and Job Statuses** dans l’une des vues **opérations**. Les instructions ci-dessous utilisent la vue **Matrix**.
    * Sous la rubrique **Opération**, double-cliquez sur **Matrix**.
    * Vérifiez que la date actuelle est sélectionnée dans le **calendrier** en haut à gauche de la vue **Matrix**.
    * Cliquez avec le bouton gauche sur le schedule **Schedule and Job Statuses** pour voir ses jobs.
    * Puis faites un clic droit sur le schedule **Schedule and Job Statuses** dans liste à droite du calendrier.
    * Sélectionnez **Release (Libérer)** dans le menu qui s’ouvre.
    * Contrôlez les informations de la fenêtre pop-up.
    * Tapez **« Exercice d’entrainement – Release »** dans le champ de texte **Entrez une brève explication pour ce changement de statut**
4. Cliquez sur OK.
    * Le Schedule Schedule and Job Statuses passera d'un état « On Hold » à un état « Wait to Start » car son heure de démarrage est configuré à 18h30.
5. Démarrez le schedule.
    * Cliquez à nouveau avec le bouton droit de la souris sur **Schedule and Job Statuses** dans la zone de sélection des **Schedules**.
    * Sélectionnez **Start (Démarrer)** dans le menu.
    * Vérifiez les informations de la fenêtre pop-up.
    * Tapez **« Exercice d’entrainement – Start »** dans le champ de texte **Entrez une brève explication pour ce changement de statut**.
    * Cliquez sur **OK**.
    * Le Schedule Schedule and Job Statuses passera d'un état « Wait to Start » à un état « In Process » et les jobs devraient commencer à s'exécuter.
6. Suspendre le schedule.
    * Cliquez à nouveau avec le bouton droit de la souris sur le Schedule **Schedule and Job Statuses** dans la liste des **Schedules**.
    * Sélectionnez **Hold (Suspendre)** dans le menu.
    * Vérifiez les informations de la fenêtre pop-up.
    * Tapez **« Exercice d’entrainement –  Hold »** dans le champ de texte **Entrez une brève explication pour ce changement de statut**.
    * Cliquez sur **OK**.
        - Le Schedule **Schedule and Job Statuses** passera d'un état **« In Process »** à un état **« On Hold »**.
        - Les jobs en cours d'exécution continueront de s'exécuter, mais rien de nouveau ne démarrera tant que le schedule ne sera pas libéré.

</details>
