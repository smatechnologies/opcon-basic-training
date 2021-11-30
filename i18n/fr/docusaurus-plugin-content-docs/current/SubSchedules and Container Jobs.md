---
sidebar_label: 'Sous-Schedules et Jobs Container Sous-Schedule'
hide_title: 'false'
---

## Sous-Schedules et Jobs Container Sous-Schedule

<figure>
    <audio
        controls
        src="audiobasic/SubScheduleAndContainerJobDefinitions.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

### Sous- Schedules et Jobs Container Sous- Schedule : définition

* Schedule qui peut être intégré dans un autre Schedule (ou d'autres Schedules)
    * Mis au plan uniquement s'il est appelé par un Job Container
    * Les propriétés du Job sont données au Sous-Schedule 
* Sont multi-instances par défaut
    * Peut dupliquer un ensemble de Jobs à partir d'une ressource partagée

### Visualisation des sous-schedules

<a href="imgbasic/424.png" target="_blank"><img src="imgbasic/424.png" width="500"></img></a>

### Job Container : définition

* Job qui contient un sous-Schedule
* Le sous-schedule récupère les propriétés du Job
    * Fréquences
        * _Rappelez-vous : les jobs de conteneur sont des jobs. Les jobs ont besoin de fréquences pour s’executer!_
    * Décalages horaires (autres détails de fréquence)
    * Dépendances
    * Events
    * Etc.
* Plusieurs jobs container peuvent référencer le même sous-schedule
* Le job container ne sera terminé que si tous les jobs du sous-schedule sont terminés

### Sous-schedule/ Job Container: configuration

<figure>
    <audio
        controls
        src="audiobasic/SubScheduleContainerJobSetup.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Créer un sous-schedule:
    * Créer un schedule dans Schedule Master
    * Marquer le schedule comme Sous-schedule
* Incorporer le sous-schedule dans une autre schedule en créant un Job container
    * Créer un job à l'aide du type de Job container
    * Sélectionnez le sous- schedule que le Job container utilisera

### Désignation du sous- schedule  dans Schedule Master

<a href="imgbasic/425.png" target="_blank"><img src="imgbasic/425.png" width="500"></img></a>  

### Job container de sous-schedule

<a href="imgbasic/426.png" target="_blank"><img src="imgbasic/426.png" width="500"></img></a>  

### Définition du Job Container

<a href="imgbasic/427.png" target="_blank"><img src="imgbasic/427.png" width="500"></img></a>  

### Solution Manager - Détail du Job Container

<a href="imgbasic/428.png" target="_blank"><img src="imgbasic/428.png" width="500"></img></a>  

### Scénarios d'utilisation des sous-schedules

<figure>
    <audio
        controls
        src="audiobasic/SubSchedulesScenarios.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

### Scénario 1 - Plusieurs exécutions / sous-schedule

* Les 5 mêmes jobs doivent s'exécuter exactement de la même manière 4 fois par jour
    * Au lieu de **Relancer des jobs** ou des events, utilisez des **sous-schedules**

<a href="imgbasic/429.png" target="_blank"><img src="imgbasic/429.png" width="500"></img></a>  

### Scénario 2 - Processus simultanés

* 5 fichiers doivent être traités par heure d'arrivée
* Aucun ordre n’établit pour le traitement des fichiers 
* Le même ensemble de jobs traitera les fichiers
* Les fichiers doivent être traités un par un

<a href="imgbasic/430.png" target="_blank"><img src="imgbasic/430.png" width="500"></img></a>  

### Scénario 3 - Processus quotidien et mensuel

* Le Schedule quotidien comporte 5 jobs qui doivent s'exécuter chaque jour ouvrable
* •Si c'est la fin du mois, au lieu d'exécuter ces 5 jobs, le schedule mensuelle, avec 7 jobs, doit s'exécuter **hors** exécution du schedule quotidien

<a href="imgbasic/431.png" target="_blank"><img src="imgbasic/431.png" width="500"></img></a>

### Scénario 3 - Solution de processus quotidien et mensuel

* Créer un Schedule avec 2 sous-schedule
    * Sous-schedule quotidien avec 5 jobs
    * Sous-schedule mensuel avec 7 jobs
    * Le Schedule principal aura les deux sous-schedule en tant que Job container
    * Le Sous-Schedule mensuel exclut le Sous-Schedule quotidien à l’aide d’une dépendance de type En exclusion 
    
:::note Remarque
Cette solution simplifie les définitions de fréquences
:::

###### (Cliquez sur les images pour les agrandir)
