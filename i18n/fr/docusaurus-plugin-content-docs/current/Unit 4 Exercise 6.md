---
sidebar_label: 'Unite 4 Exercice 6'
hide_title: 'false'
---

## Exercice 6: Sous-Schedule - Plusieurs exécutions

##### Objectif:

Créez un Schedule nommé **Repeating-SubSchedule** avec une **définition d'instance** ```RUNTIME=10```. Marquez le Schedule comme **sous-schedule (SubSchedule)**.

Dans **Repeating-SubSchedule**, créez cinq Jobs **Windows** quotidiens avec le modèle de dénomination **Daily Job 1**. Les Jobs doivent s'exécuter sur une fréquence du lundi au vendredi et exécuter le programme ```genericp```. Créez une **chaîne de dépendances** linéaire entre les 5 Jobs.

Ensuite, créez un Schedule nommé **Repeating-Schedule-Primary**.

Dans le schedule **Repeating-Schedule-Primary**, créez 4 jobs nommés **0700 Job**, **1000 Job**, **1400 Job** et **1900 Job**. Chaque Job doit s'exécuter sur une fréquence du lundi au vendredi et exécuter le schedule **Repeating-SubSchedule** en tant que **Job Container**.

Chaque job doit avoir un **Ecart temps de soumission (Start Offset)** égal au nom du Job.

Mettre au Plan le schedule **Repeating-Schedule-Primary** ```On Hold```. Afficher le schedule dans la vue Matrix. Libéré (Release) le schedule et laissez les jobs s'exécuter pour vérifier les résultats.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E6.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Créer le sous-schedule**  

1. Sous la rubrique **Administration**, double-cliquez sur **Schedule Master**.
2. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Schedule Master**.
3. Dans la zone de texte **Nom**, entrez **Repeating-SubSchedule**.
4. Dans la zone de texte **Documentation**, entrez **This is the Daily SubSchedule**.
5. Dans la zone **Heure Démarrage**, notez la valeur par défaut ```00:00``` (minuit).
6. Conservez les valeurs par défaut sélectionnées pour **les jours ouvrés par semaine** pour l'exécution du schedule.
7. Dans le cadre **Propriétés Schedule**, cochez la case **Sous-Schedule**.
8. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Schedule Master**.
9. Cliquez sur l'onglet **Définition d'instance** et saisissez l'**instance** dans le champ **Définir les valeurs de propriété** : ```RUNTIME=10```.
10. Appuyez sur le bouton **Ajouter**.
11. Enregistrez **Repeating-SubSchedule** et fermez l'onglet **Schedule Master**.

**Ajouter des jobs au sous-schedule**

12. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
13. Sélectionnez le schedule **Repeating-SubSchedule**.
14. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
15. Dans la zone de texte **Nom** entrez **Daily Job 1**.
16. Dans la liste déroulante **Type de Job**, sélectionnez **Windows **.
17. Dans la liste déroulante **Machine primaire**, sélectionnez la machine ```SMATraining```.
18. Dans la liste déroulante **User ID**, sélectionnez ```SMATRAINING\SMAUSER```.
19. Dans **Command Line**, tapez **Ctrl + F** et sélectionnez la **ligne de commande** qui ressemble à ceci : ```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```
20. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
21. Cliquez sur l'onglet **Fréquence**.
22. Dans le cadre de la liste Fréquence, cliquez sur le bouton **Ajouter**.
23. Cliquez à l'intérieur du bouton d'option **Utiliser Fréquence existante**.
24. Dans la liste déroulante **Fréquence** sélectionnez ```Mon-Fri-N```.
25. Cliquez sur **Suivant**.
26. Cliquez sur le bouton **Terminé**.
27. Ajoutez de la **documentation** au Job.
28. Dans la barre d'outils **Job Master**, assurez-vous que vous avez sélectionné **Repeating-SubSchedule** et cliquez sur le bouton **Copie** ou appuyez sur **Ctrl + Insérer**.
29. Nommez le Job : **Job Daily Job 2**.
30. Cliquez sur **OK**.
31. Modifiez la **documentation** si nécessaire.
32. Répétez les étapes 27 à 30 pour créer des jobs **Daily Job 3**, **Daily Job 4** et **Daily Job 5**.
33. Fermez l'onglet **Job Master** et utilisez **Designer Workflow** pour créer des **dépendances**.
34. Fermez l'onglet **Designer Workflow** lorsque vous avez terminé.

**Créer le Primary Schedule**

35. Sous la rubrique **Administration**, double-cliquez sur **Schedule Master**.
36. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Schedule Master**.
37. Dans la zone de texte **Nom** entrez **Repeating-Schedule-Primary**.
38. Dans la zone de texte **Documentation**, entrez **Ceci est le schedule principal pour l'exemple de sous-schedule répété**.
39. Dans **Heure démarrage**, notez la valeur par défaut ```00:00``` (minuit).
40. Conservez la valeur par défaut sélectionnée pour les **Jours ouvrés par semaine** pour l'exécution du schedule.
41. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Schedule Master**.
42. Fermez l'onglet **Schedule Master**. 

**Ajoutez le sous-schedule en tant que Job container dans Primary Schedule.**

43. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
44. Sélectionnez **Repeating-Schedule-Primary** dans la liste déroulante Schedule.
45. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
46. Dans la zone de texte **Nom** entrez **0700 Job**.
47. Dans la liste déroulante **Type de Job**, sélectionnez **Container**.
48. Dans la liste déroulante **Schedule à exécuter en tant que Sous-Schedule** sélectionnez **Repeating-SubSchedule**.
49. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
50. Cliquez sur l'onglet **Fréquence**.
51. Dans le cadre **Liste Fréquence** cliquez sur le bouton **Ajouter**.
52. Cliquez à l'intérieur du bouton d'option **Utiliser Fréquence existante**.
53. Dans la liste déroulante Fréquence, sélectionnez ```Mon-Fri-N```.
54. Cliquez sur **Suivant** puis sur **Terminé**.
55. Dans la zone **Ecart temps de soumission**, entrez ```07:00```.
56. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
57. Cliquez sur l'onglet **Documentation**.
58. Dans la zone de texte **Documentation**, saisissez **Ceci est un Job conteneur contenant les Jobs quotidiens**.
59. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
60. Toujours dans la barre d'outils **Job Master**, cliquez sur le bouton **Copie**.
61. Nommez le job **1000 Job**.
62. Cliquez sur **OK**.
63. Cliquez sur l'onglet **Fréquence**.
64. Mettre à jour la case **Ecart temps de soumission** ```10:00``` et **Sauvegarder le Job**.
65. Répétez les étapes 59 à 63 pour créer un **Job 1400** et un **Job 1900** s'exécutant sur ```14:00``` et ```19:00```. Vous modifierez les Ecart temps de soumission pour ces jobs. Modifiez la documentation si nécessaire.
66. Fermer tous les onglets.

**Mettez au plan le Schedule**

67. Sous la rubrique **Operation**, double-cliquez sur **Mise au plan (Build)**.
68. Le sous-Schedule est-il visible ? Pourquoi ?
69. Cliquez sur **Repeating-Schedule-Primary** et cliquez sur le bouton **Mise au Plan**.
70. Sur l'écran **Propriétés Mise au Plan**, laissez **On Hold** sélectionnée et cliquez sur **OK**. Cela créera le schedule pour **aujourd'hui seulement**.
71.  Fermez l'écran Mise au Plan Schedules.
72. Sous **Operations**, ouvrez la vue **Liste** ou **Matrix** ou utilisez **Solution Manager** pour vérifier les résultats.
73. Libérez (Releasez) le **Schedule** et laissez les jobs s'exécuter.

</details>