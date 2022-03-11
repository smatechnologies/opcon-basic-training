---
sidebar_label: 'Unité 3 Exercice 9'
hide_title: 'false'
---

## Exercice 9: Escalade des Emails

##### Objectif: 

Dans **Gestionnaire d’escalade**, ajoutez un **groupe** nommé ```First Level``` et attribuez à la fois ```Student1``` et ```SMATRAINING\SMAUSER```.

Ajoutez une **règle d'escalade** nommée ```First Level```. 

Ajouter une séquence de règles :

* Nombre de fois à notifier: ```6```
* Temps entre les notifications (minutes): ```5```
* Groupe à notifier en cas d'escalade: ```First Level```

Dans **Gestionnaire de Notifications**, cliquez sur l'onglet Jobs et sélectionnez le dossier **Escalation Example**. Ajoutez **Job Failed** Trigger avec une **Règle d’escalade** pour ```First Level```.

Mettre au plan le Schedule Escalation Example en release pour aujourd’hui.

Le Job échouera, déclenchant l'escalade.

L'utilisateur doit confirmer l'escalade en entrant dans la rubrique **Acquittement de Notification** ou en double-cliquant sur l'icône d'**Acquittement de Notification** en bas et à gauche du **SAM Pulse**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E9.mp4" type="video/mp4"></source>
Votre navigateur ne prend pas en charge la vidéo.
</video>
</div>


<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous la rubrique **Gestion**, double-cliquez sur **Gestionnaire d’escalade**.
2. Dans le cadre **groupe**, cliquez sur le bouton **Ajouter**.
3. Le menu pop-up **Nom du groupe** apparaît.
4. Dans la zone de texte **Nom du groupe**, tapez ```First Level```.
5. Dans la zone **utilisateurs disponibles**, sélectionnez Student1 et ```SMATRAINING\SMAUSER```.
6. Cliquez sur le bouton **Flèche verte** pour pousser l'utilisateur sélectionné vers la zone **Utilisateurs assignés**.
7. Cliquez sur le bouton **Sauvegarder**.
8. Assurez-vous que le gestionnaire d’escalade est toujours ouvert.
9. Dans le cadre **règles**, cliquez sur le bouton **Ajouter**.
10. Le menu pop-up **Ajout/edition des règles d’escalade** apparaît.
11. Dans la zone de texte **Nom de la règle**, tapez ```First Level```.
12. Sous **séquence des règles**, cliquez sur le bouton **Ajouter**.
13. Le menu pop-up **Ajout/edition des entrées des groupes d’escalade** apparaît.
14. Dans la zone de texte **Nombre de Notifications**, entrez ```6```.
15. Dans la zone de texte **Temps entre les notifications (minutes)**: entrez ```5```.
16. Dans la liste déroulante **groupe à notifier sur l’escalade**, sélectionnez ```First Level```.
17. Cliquez sur le bouton **Ajouter**.
18. Assurez-vous que la nouvelle **règle (Rules)** est répertoriée dans la grille de l'écran.

:::note Remarque
Si vous aviez besoin d'ajouter plusieurs niveaux d'escalade, vous devez cliquer à nouveau sur Add et suivre la même procedure.
:::

19. Cliquez sur le bouton **Sauvegarder**.
20. Fermez l'onglet **Gestionnaire d’escalade** en cliquant sur le **X**.
21. Sous la rubrique **Gestion**, double-cliquez sur **Gestionnaire Notification**.
22. Sous **Déclenchement Notification**, cliquez sur l'onglet **Jobs**.
23. Développez le dossier **Escalation Example**.
24. Sélectionnez **Job Failed**.
25. Cliquez sur le menu déroulant **Règle d’escalade** et sélectionnez ```First Level```.
26. Cliquez sur le bouton **Sauvegarder**.
27. Fermez **Gestionnaire Notification** en cliquant sur le **X** sur l'onglet.
28. Sous la rubrique **Operations**, double-cliquez sur **Mise au plan (Build)**.
29. La fenêtre **Mise au Plan Schedules** apparaîtra.
30. Sous Schedule Selection, sélectionnez **Escalation Example**.
31. Cliquez sur le bouton **Mise au Plan**.
32. Sélectionnez le bouton radio **Released**.
33. Cliquez sur **OK**.
34. Fermez la fenêtre pop-up **Mise au plan Schedules**.
35. Le Job Escalation Example échouera et déclenchera l'escalade.
36. Si vous ouvrez Thunderbird, vous devriez voir l'alerte initiale ainsi qu'un autre e-mail vous informant que ce processus a été mis en escalade.
37. Il existe deux façons d'ouvrir l'écran de **confirmation**. Double-cliquez sur **Acquittement de Notifications** sous Operations ou double-cliquez sur l'icône **Acquittement de Notifications** à gauche de **SAM Pulse**.
38. Cochez la case correspondant à l'évent d'escalade que vous souhaitez **confirmer**.
39. Cliquez sur le bouton **Acquitté**.
40. Vérifiez que l'évent a été effacé de l'écran.
41. Fermez l'onglet Acquittement de Notification et l'application **Thunderbird** (si ouverte).

</details>
