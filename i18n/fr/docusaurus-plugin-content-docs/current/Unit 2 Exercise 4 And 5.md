---
sidebar_label: 'Unite 2 Exercice 4 & 5'
hide_title: 'false'
---

## Exercice 4 & 5: étapes de modification de l'état de la machine & résoudre le problème de communication


##### Objectif:

Dans **Vue Machines**, démarrez la communication pour la machine ```SUSEVM```.

**(NE PANIQUEZ PAS - La communication ne commencera pas à cause d'une erreur que nous corrigerons.)**

Dans le menu **Information**, développez **Logs**. Ouvrez le **Netcom Log** et recherchez l'erreur ```ConnectToMachine()``` pour vérifier le problème.

De retour dans **Vue Machines**, arrêtez la communication avec la machine ```SUSEVM```. Editez la machine et changez le **Numéro de Port** en ```3100```.

Redémarrez la communication avec la machine ```SUSEVM```. La connexion devrait maintenant être réussie.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E4and5.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

### Exercice 4

1. Sous la rubrique Operations, double-cliquez sur **Vue Machines**.
2. Cliquez avec le bouton droit sur la machine **SUSEVM** et sélectionnez **Démarrer Communication**.
    * Un clic gauche sur la machine actualisera la communication.
3. Appuyez sur ```F5``` pour actualiser le statut de la communication. 

:::note Remarque
Pas de panique ! Cela ne communiquera pas.
:::

### Exercice 5

1. Assurez-vous que l'onglet **Vue Machines** est ouvert.
2. Dans le menu Informations, développez **Logs**.
3. Double-cliquez sur **Netcom Log**.
4. Une fenêtre pop-up apparaîtra affichant une vue en mise à jour automatique de la log SMANetcom.log
5. Recherchez cette entrée dans le fichier Log :

```
ConnectToMachine() – Exception happens at machine [SUSEVM]: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because the connected host has failed to respond [[IP ADDRESS:PORT]]
```

6. De retour à l'onglet Vue Machines, cliquez avec le bouton droit sur la machine SUSEVM et sélectionnez **Interrompre Communication**.
7. Toujours sous l'onglet Machines Status, cliquez avec le bouton droit sur la machine SUSEVM et sélectionnez **Editer Machine**.
8. Dans l'onglet Machines, modifiez le Numéro de Port en ```3100```.
9. Cliquez sur le bouton Sauvegarder.
10. Fermez l'onglet Machines.
11. De retour à l'onglet Vue Machines, cliquez avec le bouton droit de la souris sur la machine SUSEVM et sélectionnez **Démarrer Communication**.
12. Rafraîchissez l'écran. La machine SUSEVM doit communiquer.
13. Fermez l'onglet ```SMANetCom.log``` et l'onglet Vue Machines

</details>