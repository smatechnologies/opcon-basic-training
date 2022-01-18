---
sidebar_label: 'Unité 4 Exercice 10'
hide_title: 'false'
---

### Exercice 10: Déplacement de fichiers

##### Objectif:

Dans l’Explorateur Windows, créez deux dossiers nommés ```C:\Temp``` et ```C:\RMExample```.

Dans le Bloc-notes, créez un fichier nommé ```C:\RMExample\File-to-be-copied.txt```.

Créez un schedule nommé **My Windows Sub-Types Schedule**.

Dans **My Windows Sub-Types Schedule**, créez un Job Windows nommé **File Copy** avec un sous-type de job de ```Command: File Copy``` avec une fréquence d'exécution du lundi au dimanche. Le statut du Job doit être mis en **On Hold**.

Le **fichier source** : ```C:\RMExample\File-to-be-copied.txt``` 
Le **fichier de destination** : ```C:\RMExample\File-to-be-renamed.txt```

Ensuite, créez un Job Windows nommé **File Rename** avec un **Job Sub-Type** de la ```Command: File Rename``` avec une fréquence d'exécution du lundi au dimanche. Le statut du Job doit être mis sur **On Hold**.

**Chemin et nom du fichier actuel** :  ```C:\RMExample\File-to-be-renamed.txt```  
Nouveau nom de fichier : ```File-to-be-moved.txt```

Ensuite, créez un job Windows nommé **File Move** avec un **Sous-type de Job** ```Command: File Move``` avec une fréquence d'exécution du lundi au dimanche. Le Statut du Job doit être mis sur **On Hold**.

Le **fichier source** : ```C:\RMExample\File-to-be-moved.txt``` 
Le **fichier de destination** : ```C:\Temp\File-to-be-deleted.txt```

Ensuite, créez un Job Windows nommé **File Delete** avec un **Sous-type de Job** ```Command: File Delete``` avec une fréquence d'exécution du lundi au dimanche. Le Statut du Job doit être mis sur **On Hold**.

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

1. Créez un nouveau fichier et un nouveau schedule:
    * Accédez à l'**Explorateur Windows** et créez les dossiers ```C:\Temp``` et ```C:\RMExample```.
    * Ouvrez le **Bloc-notes**.
    * **Tapez des données** dans le bloc-notes et enregistrez le fichier sous ```C:\RMExample\File-to-be-copied.txt```.
    * Fermez le **Bloc-notes**.
    * Sous le menu Administration, double-cliquez sur **Schedule Master**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Schedule Master.
    * Dans la zone de texte Nom, entrez ```My Windows Sub-Types Schedule```.
    * Dans la zone de texte Documentation, entrez ```Ceci est un Schedule de formation pour les Jobs de sous-type Windows```.
    * Gardez sélectionné du **lundi au vendredi** pour les **jours ouvrés par semaine** pour que le schedule s'exécute.
    * Dans le cadre Propriétés Schedule > Mise au Plan, **ne cochez PAS** la case **Mise au Plan automatique**.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Schedule Master.
    * Fermez l'onglet **Schedule Master**.

2. Ajoutez des jobs au nouveau schedule:
  * File Copy:
    * Sous le menu Administration, double-cliquez sur **Job Master**.
    * Dans la liste déroulante Schedule, sélectionnez **My Windows Sub-Types Schedule**.
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom, entrez ```File Copy```.
    * Dans la liste déroulante Type de Job sélectionnez **Windows**.
    * Dans la liste déroulante Sous-type de Job, sélectionnez **Command : File Copy**.
    * Dans la liste déroulante Machine primaire, sélectionnez la machine **SMATraining** sur laquelle le job doit être exécuté.
    * Dans la liste déroulante User ID, sélectionnez **SMATRAINING\SMAUSER**.
    * Dans le champ Source, saisissez ```C:\RMExample\File-to-be-copied.txt```
    * Dans le champ Destination, saisissez ```C:\RMExample\File-to-be-renamed.txt```
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre **Liste Fréquences**, cliquez sur le bouton **Ajouter**.
    * Sur l’assistant de définition de fréquence, gardez sélectionné **Utiliser Fréquence existante** et sélectionnez **Mon-Sun-O** de la liste déroulante Fréquence. Cliquez   ensuite sur **Suivant**.
    * Cliquez sur **Terminer**.
    * Dans le cadre Statut à la Mise au Plan, cliquez sur le bouton radio **On Hold**.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Documentation** et ajoutez de la documentation.
    * Ne fermez pas l'onglet **Job Master**.
  * File Rename:
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom, entrez ```File Rename```.
    * Dans la liste déroulante Type de Job, sélectionnez **Windows**.
    * Dans la liste déroulante Sous-type de Job, sélectionnez **Command: File Rename**.
    * Dans la liste déroulante Machine primaire, sélectionnez la machine **SMATraining** sur laquelle le job doit être exécuté.
    * Dans la liste déroulante User ID, sélectionnez **SMATRAINING\SMAUSER**.
    * Dans le champ **Path and Current File Name (Chemin et nom du fichier)**, saisissez ```C:\RMExample\File-to-be-renamed.txt```
    * Dans le champ **New File Name (Nouveau nom du fichier)**, saisissez ```File-to-be-moved.txt```
      * _Remarque : vous renommez le fichier ! Vous ne spécifiez donc pas le chemin complet !_
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre Liste Fréquences, cliquez sur le bouton **Ajouter**.
    * Dans l’**assistant de définition de fréquence**, gardez sélectionné **Utiliser Fréquence existante** et sélectionnez la fréquence **Mon-Sun-O** dans liste déroulante. Cliquez ensuite sur **Suivant**.
    * Cliquez sur **Terminer**.
    * Dans le cadre Statut à la Mise au Plan, cliquez sur le bouton radio **On Hold**.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Documentation** et ajoutez de la documentation.
  * File Move:
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom, entrez ```File Move```.
    * Dans la liste déroulante Type de Job, sélectionnez **Windows**.
    * Dans la liste déroulante Sous-type de Job**, sélectionnez **Command : File Move**.
    * Dans la liste déroulante Machine primaire, sélectionnez la machine **SMATraining** sur laquelle le job doit être exécuté.
    * Dans la liste déroulante **User ID**, sélectionnez **SMATRAINING\SMAUSER**.
    * Dans le champ **Source**, saisissez ```C:\RMExample\File-to-be-moved.txt```
    * Dans le champ **Destination**, saisissez ```C:\Temp\File-to-be-deleted.txt```
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre Liste Fréquences cliquez sur le bouton **Ajouter**.
    * Sur l’**assistant de définition de fréquence**, gardez sélectionné **Utiliser Fréquence existante** et sélectionnez la fréquence **Mon-Sun-O** dans la liste déroulante. Cliquez ensuite sur **Suivant**.
    * Cliquez sur **Terminer**.
    * Dans le cadre Statut à la Mise au Plan, cliquez sur le bouton radio **On Hold**.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Documentation** et ajoutez de la documentation.
  * File Delete:
    * Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
    * Dans la zone de texte Nom, entrez **File Delete**.
    * Dans la liste déroulante Type de Job, sélectionnez **Windows**.
    * Dans la liste déroulante Sous-type de Job, sélectionnez Command: **File Delete**.
    * Dans la liste déroulante Machine Primaire, sélectionnez la machine **SMATraining** sur laquelle le job doit être exécuté.
    * Dans la liste déroulante User ID, sélectionnez **SMATRAINING\SMAUSER**.
    * Dans le champ **File To Delete** (Fichier à supprimer), saisissez ```C:\Temp\File-to-be-deleted.txt```
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Fréquence**.
    * Dans le cadre Liste Fréquences, cliquez sur le bouton **Ajouter**.
    * Sur l’**assistant de définition de fréquence**, gardez sélectionné **Utiliser Fréquence existante** et sélectionnez la fréquence **Mon-Sun-O** dans la liste déroulante. Cliquez ensuite sur **Suivant**.
    * Cliquez sur **Terminer**.
    * Dans le cadre Statut à la Mise au Plan, cliquez sur le bouton radio **On Hold**.
    * Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
    * Cliquez sur l'onglet **Documentation** et ajoutez de la documentation.
    * Fermez l'onglet **Job Master**.
  Dépendances:
    * Utilisez **Designer Workflow** pour créer vos **dépendances de jobs**.
    * Votre schedule devrait ressembler à ceci :

<a href="imgbasic/438.png" target="_blank"><img src="imgbasic/438.png" width="250"></img></a>

3. Testez la configuration:
    * Mettez au plan manuellement **My Windows Sub-Types Schedule** en **Released**.
    * Vérifiez que tous les jobs sont **On Hold**.
    * Ouvrez le dossier dans ```C:\RMExample``` en utilisant **l’explorateur Windows** et vérifiez que le fichier ```File-to-be-copied.txt``` est là.
    * Revenez à **Enterprise Manager** et libéré (**Released**) le job **File Copy**.
    * Revenez dans **l’explorateur Windows** et vérifiez que ```File-to-be-renamed``` a été créé.
    * Revenez à **Enterprise Manager** et lancez le job **File Rename**.
    * Revenez à **l’explorateur Windows** et vérifiez que ```File-to-be-renamed``` est renommé en ```File-to-be-moved```.
    * Revenez à **Enterprise Manager** et lancez le job **File Move**.
    * Revenez dans **l’explorateur Windows** et vérifiez que ```File-to-be-moved``` a été déplacé dans le dossier ```C:\Temp``` et porte le nom ```File-to-be-deleted```.
    * Revenez à **Enterprise Manager** et lancez le Job **File Delete**.
    * Revenez dans **l’explorateur Windows** et vérifiez que ```File-to-be-deleted``` a été supprimé.

</details>
