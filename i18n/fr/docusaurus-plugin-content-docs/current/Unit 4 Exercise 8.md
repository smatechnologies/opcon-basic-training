---
sidebar_label: 'Unite 4 Exercice 8'
hide_title: 'false'
---

## Exercice 8: Processus quotidien et mensuel du sous-schedule

##### Objectif: 

Créez un schedule nommé **Daily-SubSchedule**. Marquez le schedule comme sous-schedule.

Dans le **Daily-SubSchedule**, créez ```5``` jobs Windows quotidiennes qui exécutent le programme genericp sur une fréquence du ```lundi au vendredi``` (**Daily Job 1**, etc.). Donnez aux Jobs une chaîne linéaire **avec dépendances Requises**.

Créez un schedule nommé **Monthly-SubSchedule**. Marquez le schedule comme sous-schedule.

Dans **Monthly-SubSchedule**, créez ```7``` jobs Windows mensuelles qui exécutent le programme genericp sur une fréquence ```EOM-B``` (Monthly Job 1, etc.). Donnez aux Jobs une chaîne linéaire **avec dépendances Requises**.

Créez un schedule nommé **Main-Schedule**.

Dans **Main-Schedule**, créez un job nommé **Daily-Jobs** en tant que Job de container exécutant **Daily-SubSchedule**. Donnez au job une fréquence du ```lundi au vendredi```. Attribuez au Job une propriété de définition d'instance de ```RUNTIME=10```.

Dans **Main-Schedule**, créez un Job nommé **Monthly-Jobs** en tant que Job de container exécutant **Monthly-SubSchedule**. Donnez une fréquence ```EOM-B``` au Job. Attribuez au Job une propriété de définition d'instance de ```RUNTIME=20```.

Mettre au plan le **Schedule Main-Schedule On Hold** pour aujourd'hui. Ensuite, Mettre au plan le Schedule en **Released** pour le **dernier jour ouvrable du mois**.

Dans la vue Matrix, Libérez (Release) le schedule pour aujourd'hui pour vérifier le bon fonctionnement du Job.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E8.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Créer le premier sous-schedule (Daily)**

1. Sous la rubrique **Administration**, double-cliquez sur **Schedule Master**.
2. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Schedule Master**.
3. Dans la zone de texte **Nom**, entrez **Daily-SubSchedule**.
4. Dans la zone de texte **Documentation**, entrez **Ceci est le sous-schedule hebdomadaire**.
5. Dans la zone **Heure démarrage**, notez la valeur par défaut ```00:00``` (minuit).
6. Gardez du **lundi au vendredi** sélectionné pour les jours ouvrés par semaine pour que le schedule s'exécute.
7. Dans le cadre **Propriétés Schedule**, cochez la case **Sous-Schedule**.
8. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Schedule Master**.


**Créer le sous-schedule (Monthly)**

9. Sous la rubrique **Administration**, double-cliquez sur **Schedule Master** (s'il n'est pas ouvert).
10. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Schedule Master**.
11. Dans la zone de texte **Nom**, saisissez **Monthly-SubSchedule**.
12. Dans la zone de texte **Documentation**, entrez **Ceci est le sous-schedule mensuel**.
13. Dans **Heure démarrage**, notez la valeur par défaut ```00:00``` (minuit).
14. Gardez du **lundi au vendredi** sélectionné pour les **jours ouvrés par semaine** pour que le schedule s'exécute.
15. Dans le cadre **Propriétés Schedule**, cochez la case **Sous-Schedule**.
16. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Schedule Master**.
17. Fermez l'onglet **Schedule Master**.


**Ajouter des jobs dans le sous-schedule quotidien**

18. Sous la rubrique **Administration**, double-cliquez sur **Job Master**. Sélectionnez **Daily-SubSchedule**.
19. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
20. Dans la zone de texte **Nom**, entrez **Daily Job 1**.
21. Dans la liste déroulante **Type de Job**, sélectionnez ```Windows```.
22. Dans la liste déroulante **Machine Primaire**, sélectionnez la machine ```SMATraining```.
23. Dans la liste déroulante **User ID**, sélectionnez ```SMATRAINING\SMAUSER```.
24. Dans la **ligne de commande**, utilisez **Ctrl + F** et sélectionnez la ligne de commande qui ressemble à ceci : ```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```
25. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
26. Cliquez sur l'onglet **Fréquence**.
27. Dans le cadre de **Liste Fréquences**, cliquez sur le bouton **Ajouter**.
28. Cliquez sur le bouton radio.
29. Dans la liste déroulante **Fréquence**, sélectionnez ```Mon-Fri-N```.
30. Cliquez sur **Suivant**.
31. Cliquez sur le bouton **Terminer**.
32. Dans la barre d'outils **Job Master**, cliquez sur le bouton **Copie** ou appuyez sur **Ctrl + Insert.**
33. Nommez le: Job **Daily Job 2**.
34. Cliquez sur **OK**.
35. Répétez les étapes 32 à 34 pour créer des **Daily Job 3**, **Daily Job 4**, et **Daily Job 5**.
36. Fermez **Job Master**.
37. Utilisez **Designer Workflow** pour créer des **dépendances de jobs** comme vous le souhaitez, puis fermez **Designer Workflow**.

**Ajouter des jobs dans le sous-schedule mensuel**

38. Sous la rubrique **Administration**, double-cliquez sur **Job Master**. Sélectionnez **Monthly-SubSchedule**.
39. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
40. Dans la zone de texte **Nom**, saisissez **Monthly Job 1**.
41. Dans la liste déroulante **Type de Job**, sélectionnez ```Windows```.
42. Dans la liste déroulante **Machine Primaire**, sélectionnez la machine ```SMATraining```.
43. Dans la liste déroulante **User ID**, sélectionnez ```SMATRAINING\SMAUSER```.
44. Dans la **ligne de commande**, tapez **Ctrl + F** et sélectionnez la ligne de commande qui ressemble à ceci : ```"[[MI.PathWindows]]\genericp.exe" -t[[SI.RUNTIME]] -e0```
45. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
46. Cliquez sur l'onglet **Fréquence**.
47. Dans le cadre **Liste Frequency**, cliquez sur le bouton **Ajouter**.
48. Créez une nouvelle **fréquence**. Le nom sera ```End-of-Month-B```. Cliquez sur **Suivant**.
49. Dans **l’Assistant de définition de Fréquence**, sélectionnez **Fin de période** dans le cadre **Choix de Planification**, assurez - vous que Mois est sélectionné dans les cadres **périodes** et **Avant Date** est sélectionnée dans les cadres **A/O/B/N**.
50. Cliquez sur le bouton **Terminer**.
51. Dans la barre d'outils **Job Master**, cliquez sur le bouton **Copie** ou appuyez sur **Ctrl + Insert**.
52. Nommez-le : **Monthly Job 2**.
53. Cliquez sur **OK**.
54. Répétez les étapes 51 à 53 pour créer des Jobs **Monthly Job 3**, **Monthly Job 4**, **Monthly Job 5**, **Monthly Job 6**, et **Monthly Job 7**.
55. Fermez l'onglet **Job Master**.
56. Utilisez **Designer Workflow** pour créer des **dépendances de jobs**.
57. Fermez **Designer Workflow**.


**Créer le Primary Schedule**

58. Sous la rubrique **Administration**, double-cliquez sur **Schedule Master**.
59. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Schedule Master**.
60. Dans la zone de texte **Nom**, entrez **Main-Schedule**.
61. Dans la zone de texte **Documentation**, entrez **Ceci est le schedule principal**.
62. Dans **Heure démarrage**, notez la valeur par défaut ```00:00``` (minuit).
63. Gardez du **lundi au vendredi** sélectionné pour les **jours ouvrés par semaine** pour que le schedule s'exécute.
64. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Schedule Master**.
65. Fermez l'onglet **Schedule Master**.
66. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.


**Ajouter le sous-schedule quotidien au Primary Schedule**

67. Sélectionnez **Main-Schedule** de la liste déroulante **Schedule**.
68. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
69. Dans la zone de texte **Nom**, entrez **Daily-Jobs**.
70. Dans la liste déroulante **Type de Job**, sélectionnez **Container**.
71. Dans la liste déroulante **Schedule à exécuter en tant que Sous-Schedule**, sélectionnez **Daily-SubSchedule**.
72. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
73. Cliquez sur l'onglet **Fréquence**.
74. Dans le cadre **Liste des fréquences**, cliquez sur le bouton **Ajouter**.
75. Cliquez sur le bouton radio **Utiliser Fréquence existante**.
76. Dans la liste déroulante **Fréquence**, sélectionnez ```Mon-Fri-N```.
77. Cliquez sur **Suivant** puis sur **Terminer**.
78. Cliquez sur l'onglet **Définition Instance**.
79. Cliquez dans la zone **Définir Valeurs Propriété**.
80. Entrez : ```RUNTIME=10```
81. Cliquez sur **Ajouter** au milieu à droite de l'écran.
82. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
83. Dans la zone de texte **Documentation**, saisissez **Ceci est un Job container contenant les Jobs quotidiens**.
84. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
85. Toujours sur **Job Master**, assurez-vous que **Main-Schedule** est sélectionné.


**Ajouter le sous-schedule mensuel au Primary Schedule**

86. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
87. Dans la zone de texte **Nom**, saisissez **Monthly-Jobs**.
88. Dans la liste déroulante **Type de Job** sélectionnez **Container**.
89. Dans la liste déroulante **Schedule à exécuter en tant que Sous-Schedule**, sélectionnez **Monthly-SubSchedule**.
90. Cliquez sur le bouton **Sauvegarder** ou sur le **Job Master** barre d'outils ou appuyez sur **Ctrl + S**.
91. Cliquez sur l'onglet **Fréquence**.
92. Dans le cadre de la **liste Fréquence**, cliquez sur le bouton **Ajouter**.
93. Cliquez sur le bouton d'option **Utiliser Fréquence existante**.
94. Sélectionnez ```End-of-Month-B``` dans la liste déroulante.
95. Cliquez sur **Suivant**.
96. Cliquez sur le bouton **Prévisionnel** et notez que sur les mois indiqués ci-dessus, le Job s'exécutera le vendredi avant la fin du mois s'il tombe un week-end.
97. Fermez la boîte de dialogue **Prévisionnel** puis cliquez sur **Terminer** sur l'écran **Assistant définition Fréquence**.
98. Cliquez sur l'onglet **Définition Instance**.
99.	Cliquez dans la zone **Définir Valeurs Propriété**.
100. Entrez : ```RUNTIME=20```.
101. Cliquez sur **Ajouter** sur le côté droit du cadre **Définir Valeurs Propriété**.
102. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
103. Fermez l'onglet **Job Master**.


**Configurer les dépendances de jobs entre les jobs de conteneur**

104. Sous la rubrique **Administration**, double-cliquez sur **Designer Workflow**.
105. Sélectionnez **Main-Schedule** dans la liste déroulante **Sélectionner Schedule**.
106. Dans la boite à outils cliquez sur **Ajouter une Dépendance**. 
107. Cliquez sur le job **Daily-Jobs**, puis sur **Monthly-Jobs**.
108. Sélectionnez en **exclusion** sous **Type de Dépendance**.
109. Cliquez sur **OK**.
110. Fermez l'onglet **Designer Workflow**.

<a href="imgbasic/433.png" target="_blank"><img src="imgbasic/433.png" width="250"></img></a>

**Mettre au Plan le Schedule**

111. Sous la rubrique **Operation**, double-cliquez sur **Mise au Plan (Build)**.
* Notez que les **deux sous-schedules _NE SONT PAS_ affichés dans la liste de sélection de schedule**.
112. Cliquez sur **Main-Schedule** et cliquez sur le bouton **Mise au Plan**.
113. Sur l'écran **Propriétés Mise au Plan**, laissez l'option On Hold sélectionnée et cliquez sur **OK**.
* Cela créera le schedule On Hold pour aujourd'hui
114. Cliquez à nouveau sur **Main-Schedule**.
115. A la date de Début de planification, sélectionnez le **dernier jour ouvré du mois**.
* La **date de fin (Stop date)** doit être la même que la **date de début**. 
116. Cliquez sur le bouton **Mise au Plan**.
117. Sur l'écran **Propriétés Mise au Plan**, laissez **Released** et cliquez sur **OK**.
* Cela mettra au plan le Schedule en Release **pour la fin du mois**.
118. Fermez la fenêtre Mise au Plan Schedules.
119. Accédez à la vue **List** ou **Matrix** sous la rubrique **Operation** ou utilisez **Solution Manager** pour vérifier les résultats.
120. **Releasez (liberez) le Schedule** pour aujourd'hui (si vous souhaitez voir les jobs en cours d'exécution).

</details>