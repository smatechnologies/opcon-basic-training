---
sidebar_label: 'Unite 1 Exercice 9'
hide_title: 'false'
---

## Exercice 9: Opérations sur Solution Manager

##### Objectif: 

Ouvrez le navigateur Chrome et accédez à ```https://SMATraining:9010```

Connectez-vous à **Solution Manager** :

**Nom d'utilisateur** : ```ocadm ```
**Mot de passe** : ```***********``` **(12 astérisques)**

Sélectionnez le bouton Opérations et accédez à Jobs. Consultez l’état des jobs d'aujourd'hui.

Activez la sélection des Schedules et sélectionnez **MY FIRST SCHEDULE**.

Mettez à jour le statut des jobs **WINDOWS JOB 1** et **WINDOWS JOB 2** sur ```Restart On Hold```.

Go back to Enterprise Manager and open Matrix View. View the Jobs in **MY FIRST SCHEDULE** and release the two Jobs ```On Hold```.

Revenez à Enterprise Manager et ouvrez la vue Matrix.
Affichez les jobs du Schedule **MY FIRST SCHEDULE** et libérez les deux jobs suspendus.


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

1.	1.	Ouvrez **Google Chrome** depuis la barre des tâches et accédez à :
```
https://SMATraining:9010
```
    * Si un écran de connexion autre que l'écran de connexion de **Solution Manager** apparaît, cliquez sur **Annuler**.
2.	2.	Dans l'**écran de connexion de Solution Manager**, saisissez ce qui suit :

  *	Nom d'utilisateur : ```ocadm```
  * Mot de passe : ```************``` (12 astérisques)

3.	Cliquez sur **LOGIN**.
4.	Dans l'écran d'**accueil de Solution Manager**, cliquez sur le bouton **Operations**.
5.	Dans l'écran **Opérations Résumé**, cliquez sur **Jobs**.
6.	Une fois que l'écran **Processus** est présenté, assurez-vous d'avoir sélectionné la **date du jour** sur le côté gauche de l'écran.
7.	Activez la sélection à l’aide du bouton **Active/Désactive la sélection des Schedules** (en haut à droite de l'écran).
    * La liste des schedules pour aujourd'hui sera présentée.
8.	Cliquez sur My **First Schedule**.
    * Vous devriez pouvoir voir les 4 jobs créés pour aujourd'hui dans la liste des jobs.
9.	Dans la liste Jobs, sélectionnez **Windows JOB 1** et **Windows JOB 2**.
10.	Cliquez avec le bouton droit sur l'un des jobs.
    * L'écran **Mise à jour du Statut de Job** s'affiche à droite.
    * Notez que toutes les actions ne sont pas disponibles. Seules les actions qui peuvent être effectuées pour les deux Jobs.
11.	Sélectionnez **Restart on Hold (Redémarrer Suspendu)**.
    *	Solution Manager affichera un message en haut de l'écran confirmant que l'action a été traitée.
12.	Fermez l'écran **Mise à jour du Statut de Job**, réduisez Google Chrome et revenez à **Enterprise Manager**.
13.	Ouvrez la vue **Liste** ou **Matrix**, accédez à la date du jour et vérifiez les jobs sous **My First Schedule**.
    * L'état de **Windows JOB 1** et de **Windows JOB 2** doit être **On Hold**.
14.	Toujours à partir d'**Enterprise Manager**, cliquez avec le bouton droit sur les jobs et sélectionnez **Release**. Vous devez effectuer cette action pour chaque Job.
15.	Revenez dans Solution Manager. Qu'est-il arrivé à **Windows JOB 1** et à **Windows JOB 2** ?
16.	Dans **Solution Manager**, cliquez sur le bouton Back (en haut à droite).
17.	Cliquez sur le **cœur vert** situé en bas à droite de l'écran.
    * Solution Manager présentera l'écran **Agents**.
18.	Sélectionnez la machine **SMATraining**, puis **cliquez avec le bouton** droit sur la machine.
19.	Dans l'écran **Mise à jour de Statut d’Agent** (sur le côté droit), cliquez sur **Désactiver la Communication**.
20.	Fermez l'écran Agent Status Update, réduisez Google Chrome et revenez à **Enterprise Manager**.
21.	Ouvrez l'onglet **Vue Machines** et vérifiez l'état du **SMATraining**.
    * Il devrait ne **pas répondre** (gris).
22.	Cliquez avec le bouton droit sur la machine et sélectionnez **Démarrer Communication**.
23.	Fermez tous les onglets dans **Enterprise Manager**.
24.	Fermez Google Chrome.

</details>
