---
sidebar_label: 'Autres détails de fréquence'
hide_title: 'false'
---

## Autres détails de fréquence

<figure>
    <audio
        controls
        src="audiobasic/OtherFrequencyDetails.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Tous les autres détails de l'écran de l'onglet Fréquence sont définis par Fréquence

<a href="imgbasic/246.png" target="_blank"><img src="imgbasic/246.png" width="500"></img></a>

### Heure de Soumission du Schedule

<figure>
    <audio
        controls
        src="audiobasic/ScheduleStartTime.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* L'heure de début du schedule est l’heure la plus tôt à laquelle un Job dans ce schedule peut démarrer
    * Les écarts temps de soumission des jobs sont ajoutés à l'heure de début du schedule
* Horloge de 24 heures
* Tous les décalages de job sont ajoutés à cette heure

<a href="imgbasic/247.png" target="_blank"><img src="imgbasic/247.png" width="500"></img></a>

### Écart temps de soumission

<figure>
    <audio
        controls
        src="audiobasic/StartOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* L’écarts temps de soumission détermine quand un job est autorisé à démarrer
    * Combiné avec **l'heure de soumission du Schedule** pour déterminer l’heure la plus tôt à laquelle un Job peut s'exécuter sans intervention
* La zone horaire de saisie est le l’écart temps du job
    * L’heure en vert est un décalage combiné
* **Absolue** - basé sur une horloge de 24 heures
** Relatif** - le décalage commence une fois que le Schedule a démarré.

<a href="imgbasic/248.png" target="_blank"><img src="imgbasic/248.png" width="200"></img></a>

### Délai limite de Soumission

<figure>
    <audio
        controls
        src="audiobasic/LatestStartOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Si un job ne s'exécute pas à cette heure, il est marqué comme " Missed Start Time " et il est traité comme un job annulé.

<a href="imgbasic/249.png" target="_blank"><img src="imgbasic/249.png" width="200"></img></a>

### Indicateur Retard de Soumission

<figure>
    <audio
        controls
        src="audiobasic/LateToStartOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Marque un Job comme « Late to Start » s’il n’a pas été lancé à cette heure
* Uniquement à des fins de notification

<a href="imgbasic/250.png" target="_blank"><img src="imgbasic/250.png" width="200"></img></a>

### Indicateur Retard de Fin

<figure>
    <audio
        controls
        src="audiobasic/LateToFinishOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Marque un job comme " Late to Finish " s’il n'est pas terminé à cette heure
* Uniquement à des fins de notification

<a href="imgbasic/251.png" target="_blank"><img src="imgbasic/251.png" width="200"></img></a>

### Temps Max d’Exécution

<figure>
    <audio
        controls
        src="audiobasic/MaxRunTime.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Marque un Job comme « Exceeded Max Runtime » si la durée d’exécution dépasse le nombre de minutes spécifiées
* Uniquement à des fins de notification

<a href="imgbasic/252.png" target="_blank"><img src="imgbasic/252.png" width="500"></img></a>

### Estimation de l'heure de début

<figure>
    <audio
        controls
        src="audiobasic/StartTimeEstimation.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Calculé** : prend en compte les dépendances et autres éléments liés au workflow pour estimer une heure de début de Job
* **Historique** - Calcule les données historiques pour un Job spécifique
* **Défini par l'utilisateur** - Valeurs saisies par l'utilisateur
    * Aucun calcul effectué
    * Utile pour les Jobs de seuil

<a href="imgbasic/253.png" target="_blank"><img src="imgbasic/253.png" width="500"></img></a>

### Solution Manager - Détails sur la fréquence des jobs

<figure>
    <audio
        controls
        src="audiobasic/SolutionManagerJobFrequencyDetails.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Le panneau Fréquence de l'écran de configuration de de job dans Solution Manager permet d'accéder aux informations de fréquence pour un job.
* Options actuelles configurables dans Solution Manager :
    * Décalages
    * Options d'estimation de l'heure de début
    * Exécution des jobs
        * Priorité SAM
        * Durée maximale de fonctionnement
    * Options d'échec / réessayer
    * Options Finish Ok

<a href="imgbasic/254.png" target="_blank"><img src="imgbasic/254.png" width="300"></img></a>  
<a href="imgbasic/255.png" target="_blank"><img src="imgbasic/255.png" width="300"></img></a>  

###### (Cliquez sur les images pour les agrandir)