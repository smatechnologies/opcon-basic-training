---
sidebar_label: 'Exercice 1 dans Self-Service'
hide_title: 'false'
---

## Exercice 1 dans Self-Service : créer un bouton

1. Dans Solution Manager, sélectionnez l'onglet **Self Service**.
2. Assurez-vous que le **mode administrateur** est activé en cliquant sur le bouton **Mode Admin** dans le coin supérieur droit. Le cadenas doit être **vert** et **déverrouillé**.
3. Dans Self Service, cliquez sur le bouton **Créer** vert pour créer un nouveau bouton.
4. Dans la zone de texte **Nom**, entrez **Test Button 1**.
5. Dans la zone de texte **Documentation**, entrez ```Ceci est un bouton de test```.
6. Assurez-vous que l'option **Message de Confirmation** est activée (```Vert```).
7. Sous Events, cliquez sur la barre verte d'ajout (```+```).
8. Dans le menu Modèle de l'événement, sélectionnez ```$CONSOLE:DISPLAY,<message>```.
9. Dans la zone de texte Message, saisissez ```Ceci est un message de test adressé à la console```.
10. Cliquez sur le bouton **OK**.
11. Ensuite, basculez l'option ```Envoyer l'événement via OCADM``` sur Activé (vert).
12. Cliquez sur **Enregistrer**.
13. Activez **le Mode Utilisateur** en cliquant sur le bouton **Mode Admin** dans le coin supérieur droit. Le cadenas devrait maintenant être **Gris** et **Vérouillé**.
14. Cliquez sur le bouton **Test 1**.
15. Cliquez sur le **bouton Soumettre** pour exécuter le processus. La barre de progression s'affiche. Une exécution réussie sera indiquée par une icône de coche **verte**.
16. Cliquez sur le bouton **OK** pour quitter le processus de demande.
17. Ouvrez l'emplacement ```SAM.log``` du fichier pour vérifier que le message a été écrit dans la console.
