---
sidebar_label: 'Exercice 2 dans Self-Service'
hide_title: 'false'
---

## Exercice 2 dans Self-Service : désactiver un bouton

###### Create Disable Token

:::note Remarque
Assurez-vous que le **mode administrateur** est activé en cliquant sur le **cadenas** dans le coin supérieur droit. Il doit être **vert** et **Ouvert**
:::

1. En **mode administrateur**, à partir de l'onglet **Self Service**, cliquez sur le bouton vert **Créer** pour créer un nouveau bouton.
2. Dans la zone de texte **Nom**, entrez **Créer un token de règle de désactivation**.
3. Dans la zone de texte **Documentation**, entrez **Ce bouton créera le token de règle de désactivation**.
4. Assurez-vous que l'option **Message de confirmation** est activée (```Vert```).
5. Sous Evénements, cliquez sur la barre verte d'ajout (```+```).
6. Dans le menu Modèle de l'événement, sélectionnez ```$PROPERTY:ADD,<Property Name>,<value>```.
7. Dans la zone de texte **Property Name**, entrez **Disabled**.
8. Dans la zone de texte **Initial Value** entrez **false**.
9. Cliquez sur le bouton **OK**.
10. Ensuite, basculez l'option **Envoyer l'événement via ```OCADM```** sur Activé (```Vert```).
11. Cliquez sur **Enregistrer**.

###### Créer un bouton pour changer la valeur du token de désactivation à True

12. From the **Self Service** Tab main screen, click the Green **Create** Button to create a new Button.
13. In the **Name** textbox, enter **Set Disable Rule Token True**.
14. In the **Documentation** textbox, enter **This Button will set the Disable Rule Token to True**.
15. Be sure that the **Confirmation Message** option is toggled to On (```Green```).
16. Under Events, click the Green Add Bar **(+)**.
17. From the Event Template Menu, select ```$PROPERTY:SET,<Property Name>,<value>```.
18. In the **Token Name** textbox, enter **Disabled**.
19. In the **Value** textbox, enter **true**.
20. Click the **OK Button**.
21. Next, toggle the ```Submit Events as OCADM``` option to On (```Green```).
22. Click **Save**. 

###### Réinitialiser le Token de désactivation sur False

23. Dans l'écran principal de l'onglet **Self Service**, cliquez sur le bouton vert **Créer** pour créer un nouveau bouton.
24. Dans la zone de texte **Nom**, entrez **Reset Disable Rule Token False**.
25. Dans la zone de texte **Documentation**, entrez **Ce bouton réinitialisera le Token de règle de désactivation à False**.
26. Assurez-vous que l'option **Message de confirmation** est activée (```Vert```).
27. Sous Evénements, cliquez sur la barre verte d'ajout (```+```).
28. Dans le menu Modèle de l'événement,  sélectionnez ```$PROPERTY:SET,<Property Name>,<value>```.
29. Dans la zone de texte **Property Name**, entrez **Disabled**.
30. Dans la zone de texte **Value**, entrez **false**.
31. Cliquez sur le bouton **OK**.
32. Ensuite, basculez l'option **Envoyer l'événement via ```OCADM```** sur Activé (```Vert```).
33. Cliquez sur **Enregistrer**.

 
###### Ajouter une règle de désactivation au bouton de test 1

34. À partir de l'écran principal de l'onglet **Self Service**, cliquez sur le bouton **Bleu Modifier** sur le bouton **Test 1**.
35. Activez **Règle de désactivation ** (```Vert```).
36. Dans la zone de texte **Règle de désactivation**, entrez ```[[Disabled]]```.
37. Cliquez sur **Enregistrer**.


###### Test des Boutons

:::note Remarque
Assurez-vous que le **Mode Admin** est désactivé en cliquant sur le **bouton cadenas** dans le coin supérieur droit. Il devrait être **gris** et **Fermé**
:::

38. En **mode utilisateur**, à partir de l'écran principal de l'onglet **Self Service**, cliquez sur le bouton **Create Disable Rule Token**.
39. À partir de la page **Service Request**, cliquez sur le bouton **Soumettre** pour exécuter le processus. La barre de progression s'affiche. Une exécution réussie sera indiquée par une icône de coche **verte**.
40. Cliquez sur le bouton **OK** pour quitter le processus de demande.
41. Ensuite, dans l'écran principal de l'onglet **Self Service**, cliquez sur le bouton **Set Disable Rule Token True**.
42. À partir de la page **Service Request**, cliquez sur le bouton **Soumettre** pour exécuter le processus. La barre de progression s'affiche. Une exécution réussie sera indiquée par une icône de coche **verte**.
43. Cliquez sur le bouton **OK** pour quitter le processus de demande.

:::note Remarque
Si les deux Service Requests précédentes ont abouti, le bouton de test 1 doit maintenant être visiblement grisé et indisponible
:::

44. Pour réactiver le bouton de **test 1**, à partir de l'écran principal de l'onglet **Self Service**, cliquez sur le bouton **Reset Disable Token False**.
45. À partir de la page **Service Request**, cliquez sur le bouton **Soumettre** pour exécuter le processus. La barre de progression s'affiche. Une exécution réussie sera indiquée par une icône de coche **verte**.
46. Cliquez sur le bouton **OK** pour quitter le processus de demande.

:::note Remarque
Le bouton de **test 1** doit maintenant être actif et disponible
:::