---
sidebar_label: 'Unité 2 Exercice 6'
hide_title: 'false'
---

## Exercice 6: Créer un job UNIX

##### Objectif:

Créez un Job ```UNIX``` sous **MY FIRST SCHEDULE**. Nommez le job **UNIX Job 1**. Définissez le **Type de Job** en ```UNIX``` et la **Machine primaire** sera ```SUSEVM```.

Le **User ID** est ```0/0```

Le **Start image** est ```/usr/local/lsam/bin/genericpgm```

Les **paramètres** sont : ```-t20 -e0```

Donnez au job une fréquence existante de ```Example-Mon-Sun-O```.

Assurez-vous de fournir la documentation appropriée.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E6.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

**Scénario : Vous allez créer 1 Job UNIX dans OpCon pour exécuter le même programme que dans l'exercice précédent**

1. Dans le menu Administration, double-cliquez sur **Job Master**.
2. Dans la liste déroulante Schedule, sélectionnez **My First Schedule**.
3. Cliquez sur le bouton **Ajouter** dans la barre d'outils Job Master.
4. Dans la zone de texte **Nom**, saisissez ```UNIX Job 1```.
5. Dans la liste déroulante Type de Job, sélectionnez **UNIX**.
6. Dans la liste déroulante Machine Primaire, sélectionnez la machine **SUSEVM** sur laquelle le job doit être exécuté.
7. Dans la liste déroulante User ID, sélectionnez **0/0**
8. Dans le champ **Start Image**, saisissez :

```
/usr/local/lsam/bin/genericpgm
```

9. Dans la section **Parameters**, entrez :

```
–t20 –e0
```

10. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
11. Dans l'écran Job Master sous Propriétés du Job, cliquez sur l'onglet **Fréquence**.
12. Dans le cadre liste Fréquences, cliquez sur le bouton **Ajouter**.
13. Cliquez sur **Utiliser Fréquence existante**.
    * Dans la liste déroulante Fréquence, sélectionnez **Example-Mon-Sun-O**.
    * Cliquez sur **Suivant**.
    * Cliquez sur le bouton **Terminer**.
14. Cliquez sur l'onglet **Documentation** et entrez ```Ceci est un exemple de Job UNIX```.
15. Cliquez sur le bouton **Sauvegarder** dans la barre d'outils Job Master.
16. Fermez le Job Master.

</details>
