---
sidebar_label: 'Unite 3 Exercice 9'
hide_title: 'false'
---

## Exercice 9: Email Escalation

##### Objectif: 

Dans **Escalation Manager**, ajoutez un **groupe** nommé ```First Level``` et attribuez à la fois ```Student1``` et ```SMATRAINING\SMAUSER```.

Ajoutez une **règle d'escalade** nommée ```First Level```. Ajouter une séquence de règles :

* Nombre de fois à notifier: ```6```
* Temps entre les notifications (minutes): ```5```
* Groupe à notifier en cas d'escalade: ```First Level```

Dans **Notification Manager**, cliquez sur l'onglet Jobs et sélectionnez le dossier **Escalation Example**. Ajoutez **Job Failed** Trigger avec une **Escalation Rule** pour ```First Level```.

Créez l’**Escalation Example** Schedule issus pour aujourd'hui.

Le Job échouera, déclenchant l'escalade.

L'utilisateur doit confirmer l'escalade en entrant dans la rubrique **Escalation Acknowledgement** ou en double-cliquant sur l'icône d' **Escalation Acknowledgement** à gauche du **SAM Pulse**.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E9.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>


<details>

<summary>Click for Step-By-Step Instructions</summary>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Sous la rubrique **Management**, double-cliquez sur **Escalation Manager**.
2. Dans le cadre **Group**, cliquez sur le bouton **Add**.
3. Le menu pop-up **Group Name** apparaît.
4. Dans la zone de texte **Group Name**, tapez ```First Level```.
5. Dans la zone **Available Users**, sélectionnez Student1 et ```SMATRAINING\SMAUSER```.
6. Cliquez sur le bouton **Flèche verte** pour pousser l'utilisateur sélectionné vers la zone **Utilisateurs affectés (Assigned Users)**.
7. Cliquez sur le bouton **Save**.
8. Assurez-vous qu’**Escalation Manager** est toujours ouvert.
9. Dans le cadre **Rules**, cliquez sur le bouton **Add**.
10. Le menu pop-up **Escalation Rule Add/Edit** apparaît.
11. Dans la zone de texte **Rule Name**, tapez ```First Level```.
12. Sous **Rule Sequences**, cliquez sur le bouton **Add**.
13. Le menu pop-up **Escalation Group Entry Add/Edit** apparaît.
14. Dans la zone de texte **Number of Times To Be Notified**, entrez ```6```.
15. Dans la zone de texte **Time between Notifications (minutes)**: entrez ```5```.
16. Dans la liste déroulante **Group to Notify on Escalation**, sélectionnez ```First Level```.
17. Cliquez sur le bouton **Add**.
18. Assurez-vous que la nouvelle **règle (Rules)** est répertoriée dans la grille de l'écran **Escalation Rule Add/Edit**.

:::note Remarque
Si vous aviez besoin d'ajouter plusieurs niveaux d'escalade, vous devez cliquer à nouveau sur Add et suivre la même procedure.
:::

19. Cliquez sur le bouton **Save**.
20. Fermez l'onglet **Escalation Manager** en cliquant sur le **X**.
21. Sous la rubrique **Management**, double-cliquez sur **Notification Manager**.
22. Sous **Notification Triggers**, cliquez sur l'onglet **Jobs**.
23. Développez le dossier **Escalation Example** 
24. Sélectionnez **Job Failed** 
25. Cliquez sur le menu déroulant **Escalation Rule** et sélectionnez ```First Level```.
26. Cliquez sur le bouton **Save**.
27. Fermez **Notification Manager** en cliquant sur le **X** sur l'onglet.
28. Sous la rubrique **Operations**, double-cliquez sur **Schedule Build**.
29. La **fenêtre** pop-up **Build Schedules** apparaîtra.
30. Sous **Schedule Selection**, sélectionnez Escalation Example.
31. Cliquez sur le bouton **Build**.
32. Sélectionnez le bouton radio **Released**.
33. Cliquez sur **OK**.
34. Fermez la fenêtre pop-up **Build Schedules**
35. Le seul Job d’Escalation Example échouera lors du déclenchement de l'évent d'escalade.
36. Si vous ouvrez Thunderbird, vous devriez voir l'alerte initiale ainsi qu'un autre e-mail vous informant que ce processus a été mis en escalade.
37. Il existe deux façons d'ouvrir l'écran de **confirmation**. Double-cliquez sur l' option **Escalation Acknowledgement** sous Operations ou Double-cliquez sur l'icône **Escalation Acknowledgement** à gauche de **SAM Pulse**.
38. Cochez la case correspondant à l'évent d'escalade que vous souhaitez **confirmer**.
39. Cliquez sur le bouton **Acknowledge**.
40. Vérifiez que l'évent a été effacé de l'écran.
41. Fermez l'onglet Escalation Acknowledgement et l'application **Thunderbird** (si ouverte).

</details>