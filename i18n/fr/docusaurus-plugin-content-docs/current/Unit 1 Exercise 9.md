---
sidebar_label: 'Unité 1 Exercice 9'
hide_title: 'false'
---

## Exercice 9: Opérations sur Solution Manager

##### Objectif: 

Ouvrez le navigateur Chrome et accédez à ```https://SMATraining```

Connectez-vous à **Solution Manager** :

**Nom d'utilisateur** : ```ocadm ```
**Mot de passe** : ```***********``` **(12 astérisques)**

Sélectionnez le bouton Opérations et accédez à Jobs. Consultez l’état des jobs d'aujourd'hui.

Activez la sélection des Schedules et sélectionnez **MY FIRST SCHEDULE**.

Mettez à jour le statut des jobs **WINDOWS JOB 1** et **WINDOWS JOB 2** sur ```Restart On Hold```.

Revenez à Enterprise Manager et ouvrez la vue Matrix. Affichez les jobs du Schedule **MY FIRST SCHEDULE** et libérez les deux jobs **On Hold**.

Revenez au Solution Manager et vérifiez les jobs qui ont fonctionnés. Ensuite, cliquez sur le coeur vert en bas de l'écran pour voir les agents disponibles.

**Désactivez** la communication avec la machine **SMATraining**.

Revenez à Enterprise Manager et **réactivez** la communication.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E9.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

  1. Connectez-vous au Solution Manager:
      - Ouvrez **Google Chrome** depuis la barre des tâches et accédez à : ```https://SMATraining```.
        Si un écran de connexion autre que l'écran de connexion de Solution Manager apparaît, cliquez sur **Annuler**.
      - Dans l'**écran de connexion de Solution Manager**, saisissez ce qui suit :
        - Utilisateur : ```ocadm```
        - Mot de passe : ```************``` (12 astérisques)
      - Cliquez sur **Connexion**.
2. Accés aux Jobs et redémarrage de ceux-ci:
      - Dans l'écran d'accueil de Solution Manager, cliquez sur le bouton **Operations**.
      - Dans l'écran Opérations Résumé, cliquez sur **Jobs**.
      - Une fois que l'écran Processus est présenté, assurez-vous d'avoir sélectionné la **date du jour** sur le côté gauche de l'écran.
      - Activez la sélection à l’aide du bouton **Active/Désactive la sélection des Schedules** (en haut à droite de l'écran): la liste des schedules pour aujourd'hui sera présentée.
      - Cliquez sur **My First Schedule**: Vous devriez pouvoir voir les 4 jobs créés pour aujourd'hui dans la liste des jobs.
      - Dans la liste Jobs, sélectionnez **Windows JOB 1** et **Windows JOB 2**.
      - **Cliquez avec le bouton droit sur l'un des jobs**.
        - L'écran Mise à jour du Statut de Job s'affiche à droite.
        - Notez que toutes les actions ne sont pas disponibles. Seules les actions qui peuvent être effectuées pour les deux Jobs.
      - Sélectionnez **Restart on Hold (Redémarrer Suspendu)**.
        - Le Solution Manager affichera un message en haut de l'écran confirmant que l'action a été traitée.
      - Fermez l'écran Mise à jour du Statut de Job, réduisez Google Chrome et revenez à **Enterprise Manager**.

3. Libérez les jobs dans l'Enterprise Manager:
      - Ouvrez la vue **Liste** ou **Matrix**, accédez à la date du jour et vérifiez les jobs sous **My First Schedule**.
      - L'état de **Windows JOB 1** et de **Windows JOB 2** doit être **On Hold**.
      - Toujours à partir d'**Enterprise Manager**, cliquez avec le bouton droit sur les jobs et sélectionnez **Release**. Vous devez effectuer cette action pour chaque Job.
4. Vérifiez les jobs dans le Solution Manager et Désactivez la communication d'une machine:
      - Revenez dans Solution Manager. Qu'est-il arrivé à **Windows JOB 1** et à **Windows JOB 2** ?
      - Dans **Solution Manager**, cliquez sur le bouton **Retour** (en haut à droite).
      - Cliquez sur le **cœur vert** situé en bas à droite de l'écran: l'écran Agents apparaitra.
      - Sélectionnez la machine **SMATraining**, puis **cliquez avec le bouton droit** sur la machine.
      - Dans l'écran Mise à jour de Statut d’Agent (sur le côté droit), cliquez sur **Désactiver la Communication**.
      - Fermez l'écran Agent Status Update, réduisez Google Chrome et revenez à **Enterprise Manager**.
5. Vérifiez la machine dans l'Enterprise Manager:
      - Ouvrez l'onglet **Vue Machines** et vérifiez l'état du **SMATraining**: Il devrait être dans l'état **Pas de réponse** (gris).
      - Cliquez avec le bouton droit sur la machine et sélectionnez **Démarrer Communication**.
6. Fermeture des interfaces:
      - Fermez tous les onglets dans **Enterprise Manager**.
      - Fermez **Google Chrome**.

</details>
