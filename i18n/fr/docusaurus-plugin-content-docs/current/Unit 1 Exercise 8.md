---
sidebar_label: 'Unité 1 Exercice 8'
hide_title: 'false'
---

## Exercice 8: Modification d’un Job en Daily

##### Objectif: 

Mettre au Plan et lancer le Schedule **Murphy’s Law** pour aujourd'hui et les ```7 prochains jours```. 
Dans la vue Matrix, sélectionnez **Editer Job Daily** pour le job **Wrong Path**. Modifier le chemin d'accès de la ligne de commande et le Working Directory en remplaçant ```MSLSAM2``` par ```MSLSAM``` dans le path. Enregistrez la modification du job (en Daily), puis enregistrez la définition du job en Master.


Redémarrez le Job.

Dans la vue Matrix, sélectionnez la date de demain sur le calendrier et sélectionnez le Schedule nommé **Murphy’s Law**.
Sélectionnez **Editer Job Daily** pour le job **Wrong Path** et notez que ```MSLSAM2``` apparaît à nouveau. (Toutes les copies d’un job en Daily doivent être à nouveau Mises au Plan lorsque la définition principale (**Master Record**) est modifiée).

Fermez l'onglet Job Daily et ouvrez le Job Master pour vous assurer que les chemins contiennent la version corrigée de ```MSLSAM```.

Ouvrez l’outil Mise au Plan (Build) et re-mettez au Plan le Schedule **Murphy’s Law** pour les dates précédemment sélectionnées mais pas encore exécutées. Mettez au Plan le Schedule en **écrasant** les versions précédentes.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Mettez au Plan le Schedule nommé « Murphy’s Law » :
    * Dans le menu Opération, double-cliquez sur **Mise au Plan (Build)**.
    * Dans la section Schedule Sélection, sélectionnez **Murphy’s Law** pour le mettre au Plan.
    * Dans le champ Début, conservez la date du jour.
    * Dans le champ Fin, choisissez la date à **J+7** à compter d'aujourd'hui.
    * Cliquez sur le bouton **Mise au Plan** et sélectionner **Released** pour aujourd'hui dans la fenêtre « Propriétés Mise au Plan ».
    * Cliquez sur **OK**.
    * Fermez la fenêtre Mise au Plan Schedules.
2. Modifiez le Job en Daily:
    * Dans le menu Opération, double-cliquez sur la vue **Liste** ou **Matrix**.
    * Sélectionnez la date du jour.
    * Sélectionnez le Schedule nommé **Murphy’s Law**.
    * Cliquez avec le bouton droit sur le job **Wrong Path** (dans la vue PERT, cliquez avec le bouton droit de la souris sur le Job Wrong Path)
    * Sélectionnez **Maintenance > Editer Job Daily** (dans la vue PERT, allez dans Job > Maintenance > Editer Job Daily).
    * L'écran Job Daily apparaît.
    * Dans le chemin de la ligne de commande et dans celui du Working Directory, remplacez ```MSLSAM2``` par ```MSLSAM```.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Daily.
    * Cliquez sur le bouton **Sauver la Définition en Master** puis **OK**: Cela poussera la modification que vous avez apportée au Job Daily sur sa définition en Master.
    * Fermez l'écran Job Daily.
3. Redémarrage du Job:
    * **Clic droit sur Job** et sélectionnez **Restart**.
    * Entrez un commentaire et cliquez sur **OK**.
    * Le Job doit réussir car vous avez corrigé l’erreur dans la ligne de commande.
4. Vérifiez les autres Job Daily:
    * Dans le menu Operation, double-cliquez sur la vue **Liste** ou **Matrice**. Vous pouvez également ouvrir la vue PERT, si vous le souhaitez.
    * Sélectionnez la **date de demain**.
    * Sélectionnez le Schedule **Murphy’s Law**.
    * Cliquez avec le bouton droit de la souris sur le job **Wrong Path** (dans la vue PERT, faire un clic droit sur le job Wrong Path) 
    * Sélectionnez **Maintenance > Editer Job Daily** (dans la vue PERT, allez dans Job > Maintenance > Editer Job Daily).
    * L'écran Job Daily apparaît.
    * Notez que le chemin contient toujours ``MSLSAM2`` au lieu de ``MSLSAM``.
      - N'oubliez pas que vous devez Remettre au Plan toutes les occurrences en Daily d’un job lorsque sa définition en Master est modifiée.
      - N'apportez aucun changement. Fermez simplement l'onglet Job Daily (Wrong Path).
5. Verifiez Job Master:
    * Revenez au **Job Master** et vérifiez que le chemin de la ligne de commande et le chemin du répertoire de travail ont été modifiés de MSLSAM2 à MSLSAM.
    * Fermez l'onglet Job Master.
6. Re-Mettez au Plan le Schedule nommé « Murphy’s Law » :
    * Dans le menu Operation, double-cliquez sur **Schedule Mise au Plan (Build)**.
    * Dans la section Sélection du Schedule, sélectionnez le Schedule **Murphy’s Law**.
    * Dans la section Dates de Planification :
      - Entrez les **dates de début et de fin** de la création couvrant la plage de dates pour lesquelles ce Schedule est déjà au Plan mais n'a pas été exécutée.
      - ou Cliquez sur le bouton Calendrier (à droite de la zone de texte) pour sélectionner la date dans le calendrier mensuel.
    * Cliquez sur le bouton **Mise au Plan**.
    * Dans la fenêtre Propriétés Mise au Plan :
      - Cliquez sur le bouton **OK** (laissez le bouton Released sélectionné).
      - Comme le schedule a déjà été créé pour ces dates, vous serez invité à remplacer ces versions. Cliquez sur **Oui** lorsque vous y êtes invité (pour chaque date).
    * Fermez l'écran Mise au Plan Schedules.
    * Une fois la Mise au Plan du schedule terminée, les nouveaux schedules contiendront les définitions de job mises à jour.
7. Fermez tous les onglets, mais gardez l'Enterprise Manager ouvert.

</details>
