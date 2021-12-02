---
sidebar_label: 'Unite 4 Exercice 10'
hide_title: 'false'
---

### Exercice 10: Déplacement de fichiers

##### Objectif:

Dans l’Explorateur Windows, créez deux dossiers nommés ```C:\Temp``` et ```C:\RMExample```.

Dans le Bloc-notes, créez un fichier nommé ```C:\RMExample\File-to-be-copied.txt```

Créez un schedule nommé **My Windows Sub-Types Schedule**.

Dans **My Windows Sub-Types Schedule**, créez un Job Windows nommé **File Copy** avec un sous-type de job de ```Command: File Copy``` avec une fréquence d' exécution du lundi au dimanche. Le statut du Job doit être mis en **On Hold**.

Le **fichier source** : ```C:\RMExample\File-to-be-copied.txt``` 
Le **fichier de destination** : ```C:\RMExample\File-to-be-renamed.txt```

Ensuite, créez un Job Windows nommé **File Rename** avec un **Job Sub-Type** de la ```Command: File Rename``` avec une fréquence d'exécution du lundi au dimanche. Le statut du Job doit être mis sur **On Hold**.

**Chemin et nom du fichier actuel** :  ```C:\RMExample\File-to-be-renamed.txt```  
Nouveau nom de fichier : ```File-to-be-moved.txt```

Ensuite, créez un job Windows nommé **File Move** avec un **Sous-type de Job** ```Command: File Move``` avec une fréquence d' exécution du lundi au dimanche. Le Statut du Job doit être mis sur **On Hold**.

Le **fichier source** : ```C:\RMExample\File-to-be-moved.txt``` 
Le **fichier de destination** : ```C:\Temp\File-to-be-deleted.txt```

Ensuite, créez un Job Windows nommé **File Delete** avec un **Sous-type de Job** ```Command: File Delete``` avec une fréquence d' exécution du lundi au dimanche. Le Statut du Job doit être mis sur **On Hold**.

**Fichier à supprimer** : ```C:\Temp\File-to-be-deleted.txt```

Créez une chaîne de **dépendances** : **File Copy > File Rename > File Move > File Delete**

Mettre au plan le schedule en Released pour aujourd'hui. Lancez manuellement chaque job individuellement, en vérifiant les dossiers créés à chaque fois pour vérifier la bonne exécution du Job.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E10.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape </summary>

**Créer un nouveau fichier et un nouveau schedule**

1. Accédez à l'**Explorateur Windows** et créez les dossiers ```C:\Temp et C:\RMExample```.
2. Ouvrez le **Bloc - notes** et créez un nouveau fichier.
3. Tapez quelque chose et enregistrez le fichier sous ```C:\RMExample\File-to-be-copied.txt```.
4. Fermez le **bloc-notes**.
5. Sous la rubrique **Administration**, double-cliquez sur **Schedule Master**.
6. Cliquez sur le bouton **Ajouter** dans la barre d'outils *Schedule Master*.
7. Dans la zone de texte **Nom**, entrez **My Windows Sub-Types Schedule**.
8. Dans la zone de texte **Documentation**, entrez **Ceci est un Schedule de formation pour les Jobs de sous-type Windows**.
9. Gardez sélectionné du **lundi au vendredi** pour les **jours ouvrés par semaine** pour que le schedule s'exécute.
10. Dans le cadre **Propriétés Schedule > Mise au Plan**, ne **cochez** pas la case **Mise au Plan automatique**.
11. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Schedule Master**.
12. Fermez l'onglet **Schedule Master**.


**Ajouter des jobs au nouveau schedule**

13. Sous la rubrique **Administration**, double-cliquez sur **Job Master**.
14. Dans la liste déroulante **Schedule**, sélectionnez **My Windows Sub-Types Schedule**.
15. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
16. Dans la zone de texte **Nom**, entrez **File Copy**.
17. Dans la liste déroulante **Type de Job** sélectionnez ```Windows```.
18. Dans la liste déroulante **Sous-type de Job**, sélectionnez ```Command : File Copy```.
19. Dans la liste déroulante **Machine primaire**, sélectionnez la machine ```SMATraining``` sur laquelle le job doit être exécuté.
20. Dans la liste déroulante **User ID**, sélectionnez ```SMATRAINING\SMAUSER```
21. Dans le champ **Source**, saisissez ```C:\RMExample\File-to-be-copied.txt```
22. Dans le champ **Destination**, saisissez ```C:\RMExample\File-to-be-renamed.txt```
23. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
24. Cliquez sur l'onglet **Fréquence**.
25. Dans le cadre **Liste Fréquences**, cliquez sur le bouton **Ajouter**.
26. Sur **l’assistant de définition de fréquence**, garder sélectionnée **Utiliser Fréquence existante** et sélectionnez ```Mon-Sun-O``` de la liste déroulante **Fréquence**. Cliquez ensuite sur **Suivant**.
27. Cliquez sur **Terminer**.
28. Dans le cadre **Statut à la Mise au Plan**, cliquez sur le bouton radio **On Hold**.
29. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
30. Cliquez sur l'onglet **Documentation** et ajoutez de la documentation.
31. Ne fermez pas l'onglet **Job Master**. Passez à l'étape **suivante**.
32. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
33. Dans la zone de texte **Nom**, entrez **File Rename**.
34. Dans la liste déroulante **Type de Job**, sélectionnez ```Windows```.
35. Dans la liste déroulante **Sous-type de Job**, sélectionnez ```Command: File Rename```.
36. Dans la liste déroulante **Machine primaire**, sélectionnez la machine ```SMATraining``` sur laquelle le job doit être exécuté.
37. Dans la liste déroulante **User ID**, sélectionnez ```SMATRAINING\SMAUSER```
38. Dans le champ **Path and Current File Name (Chemin et nom du fichier)**, saisissez ```C:\RMExample\File-to-be-renamed.txt```
39. Dans le champ **New File Name (Nouveau nom du fichier)**, saisissez ```File-to-be-moved.txt```
    * _Remarque : vous renommez le fichier ! Vous ne spécifiez donc pas le chemin complet !_
40. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
41. Cliquez sur l'onglet **Fréquence**.
42. Dans le cadre **Liste Fréquences**, cliquez sur le bouton **Ajouter**.
43. Dans l’**assistant de définition de fréquence**, garder sélectionnée **Utiliser Fréquence existante** et sélectionnez la fréquence ```Mon-Sun-O``` dans liste déroulante. Cliquez ensuite sur **Suivant**.
44. Cliquez sur **Terminer**.
45. Dans le cadre **Statut à la Mise au Plan**, cliquez sur le bouton radio **On Hold**.
46. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
47. Cliquez sur l'onglet **Documentation** et ajoutez de la documentation.
48. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
49. Dans la zone de texte **Nom**, entrez **File Move**.
50. Dans la liste déroulante **Type de Job**, sélectionnez ```Windows```.
51. Dans la liste déroulante **Sous-type de Job**, sélectionnez ```Command : File Move```.
52. Dans la liste déroulante **Machine primaire**, sélectionnez la machine ```SMATraining``` sur laquelle le job doit être exécuté.
53. Dans la liste déroulante **User ID**, sélectionnez ```SMATRAINING\SMAUSER```
54. Dans le champ **Source**, saisissez ```C:\RMExample\File-to-be-moved.txt```
55. Dans le champ **Destination**, saisissez ```C:\Temp\File-to-be-deleted.txt```
56. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
57. Cliquez sur l'onglet **Fréquence**.
58. Dans le cadre **Liste Fréquences** cliquez sur le bouton **Ajouter**.
59. Sur l’**assistant de définition de fréquence**, garder sélectionnée **Utiliser Fréquence existante** et sélectionnez la fréquence ```Mon-Sun-O``` dans la liste déroulante. Cliquez ensuite sur **Suivant**.
60. Cliquez sur **Terminer**.
61. Dans le cadre **Statut à la Mise au Plan**, cliquez sur le bouton radio **On Hold**.
62. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
63. Cliquez sur l'onglet **Documentation** et ajoutez de la documentation.
64. Cliquez sur le bouton **Ajouter** dans la barre d'outils **Job Master**.
65. Dans la zone de texte **Nom**, entrez **File Delete**.
66. Dans la liste déroulante **Type de Job**, sélectionnez ```Windows```.
67. Dans la liste déroulante **Sous-type de Job**, sélectionnez Command: ```File Delete```.
68. Dans la liste déroulante **Machine Primaire**, sélectionnez la machine ```SMATraining``` sur laquelle le job doit être exécuté.
69. Dans la liste déroulante **User ID**, sélectionnez ```SMATRAINING\SMAUSER```
70. Dans le champ **File To Delete** (Fichier à supprimer), saisissez ```C:\Temp\File-to-be-deleted.txt```
71. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
72. Cliquez sur l'onglet **Fréquence**.
73. Dans le cadre **Liste Fréquences** cliquez sur le bouton **Ajouter**.
74. Sur l’**assistant de définition de fréquence**, garder sélectionnée **Utiliser Fréquence existante** et sélectionnez la fréquence ```Mon-Sun-O``` de la liste déroulante. Cliquez ensuite sur **Suivant**.
75. Cliquez sur **Terminer**.
76. Dans le cadre **Statut à la Mise au Plan**, cliquez sur le bouton radio **On Hold**.
77. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils **Job Master**.
78. Cliquez sur l'onglet **Documentation** et ajoutez de la documentation.
79. Fermez l'onglet **Job Master**.
80. Utilisez **Designer Workflow** pour créer vos **dépendances de jobs**.
81. Votre **schedule** devrait ressembler à ceci :

<a href="imgbasic/438.png" target="_blank"><img src="imgbasic/438.png" width="250"></img></a>

**Testing the Configuration**

82. Mettez au plan manuellement **My Windows Sub-Types Schedule** en Released.
83. Vérifiez que tous les jobs sont **On Hold**.
84. Ouvrez le dossier dans ```C:\RMExample``` en utilisant **l’explorateur Window**s et vérifiez que le fichier ```File-to-be-copied.txt``` est là.
85. Revenez à **Enterprise Manager** et libéré (Released) le job **File Copy**.
86. Revenez dans **l’explorateur Windows** et vérifiez que ```File-to-be-renamed``` a été créé.
87. Revenez à **Enterprise Manager** et lancez le job **File Rename**.
88. Revenez à **l’explorateur Windows** et vérifiez que ```File-to-be-renamed``` est renommé en ```File-to-be-moved```
89. Revenez à **Enterprise Manager** et lancez le job **File Move**.
90. Revenez dans **l’explorateur Windows** et vérifiez que ```File-to-be-moved``` a été déplacé dans le dossier ```C:\Temp``` et porte le nom ```File-to-be-deleted```.
91. Revenez à **Enterprise Manager** et lancez le Job **File Delete**.
92. Revenez dans **l’explorateur Windows** et vérifiez que ```File-to-be-deleted``` a été supprimé.

</details>