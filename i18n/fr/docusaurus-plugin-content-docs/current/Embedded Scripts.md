---
sidebar_label: 'Scripts embarqués'
hide_title: 'false'
---

## Scripts embarqués

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScripts.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* OpCon a la capacité de pousser des scripts de la base de données OpCon vers des machines Windows et UNIX (LSAM) pour s'exécuter
* La base de données a un référentiel centralisé qui est répliqué avec la base de données
* Contrôle de version


* Quatre emplacements sont utilisés dans OpCon pour configurer et utiliser des scripts intégrés :
	* Script Types
	* Script Runners
	* Script Repository
	* Job Master

<a href="imgbasic/416.png" target="_blank"><img src="imgbasic/416.png" width="250"></img></a>

### Scripts embarqués - Types de scripts

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScriptsTypesAndRunners.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Configurer le type de scripts qui peuvent être stockés par OpCon

* Il existe 5 types de scripts prédéfinis, mais d'autres peuvent être ajoutés
	* Command Shell (.cmd)
	* Perl (.ps)
	* PowerShell (.ps1)
	* Python (.py)
	* VBScript (.vbs)

<a href="imgbasic/417.png" target="_blank"><img src="imgbasic/417.png" width="500"></img></a>

### Scripts embarqués - exécuteurs de scripts (Script Runners)

* Les exécuteurs de scripts définissent la ligne de commande créée pour exécuter le script

Exemple:

* Powershell inclut ```“–ExecutionPolicy Bypass and –File”``` avant la commande

* Autorise plus d'un exécuteur de script par type de script

<a href="imgbasic/418.png" target="_blank"><img src="imgbasic/418.png" width="500"></img></a>

### Scripts embarqués - Référentiel de scripts (Repository) 

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScriptsScriptRepository.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Bibliothèque où les scripts sont créés et stockés
* Les versions précédentes sont accessibles

<a href="imgbasic/419.png" target="_blank"><img src="imgbasic/419.png" width="500"></img></a>

* **Nom** - Définit le nom du script (aucun espace autorisé dans le nom)
* **Description** - Documentation du script (but)
* **Open File** - Permet le chargement du script à partir du réseau
* **Blank Text Field** - Créer un script
* **Type** - Spécifie le type de script
* **Commentaires initiaux** : documente les différences entre les versions du script

<a href="imgbasic/420.png" target="_blank"><img src="imgbasic/420.png" width="300"></img></a>

### Attribuer un rôle à un nouveau script

* Un rôle doit être attribué lorsqu'un script est créé ou importé dans le référentiel de scripts (Repository)

<a href="imgbasic/421.png" target="_blank"><img src="imgbasic/421.png" width="300"></img></a>

### Scripts embarqués - Job Master

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScriptsJobMaster.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Job Action** - Passer du programme d'exécution (Run Program) aux scripts Embarqués (Embedded Script)
* **Script** - Spécifie le script à appeler
* **Script Type** - Spécifie le type de script pour le script sélectionné
* **Runner** - Script Runner pour le script sélectionné
* **Run Command Template** - Contenu de Script Runner
* **Version** - Spécifie la version de script sélectionnée
* **Arguments** - Entrez le (s) paramètre (s) transmis au script (si nécessaire)
* **Working Dir.** - Répertoire de travail du Script

<a href="imgbasic/422.png" target="_blank"><img src="imgbasic/422.png" width="500"></img></a>

###### (Cliquez sur les images pour les agrandir)