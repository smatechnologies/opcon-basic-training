---
sidebar_label: 'Thresholds'
hide_title: 'false'
---

## Thresholds

<figure>
    <audio
        controls
        src="audiobasic/Thresholds.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Espace réservé défini par l'utilisateur
* Se compose d'un nom et d'une valeur numérique
* Aide à résoudre les dépendances qui ne peuvent pas être résolues par Job Dependency
    * (par exemple - Une spécification peut être faite pour qu'un Job ne démarre pas tant qu'une condition de seuil n'est pas remplie)


### Usage

* Créer un Threshold
* Créer des dépendances Threshold
* Mise à jour du Threshold sous conditions (trigger)
* Réinitialiser le Threshold à sa valeur initiale une fois terminé

<a href="imgbasic/407.png" target="_blank"><img src="imgbasic/407.png" width="250"></img></a>  
<a href="imgbasic/408.png" target="_blank"><img src="imgbasic/408.png" width="500"></img></a>  

### Mise à jour Threshold

<a href="imgbasic/409.png" target="_blank"><img src="imgbasic/409.png" width="500"></img></a>  
<a href="imgbasic/410.png" target="_blank"><img src="imgbasic/410.png" width="500"></img></a>  

### Dépendances Threshold

* L'onglet Threshold/Resource Dépendance permet la définition et la maintenance des dépendances de Jobs sur les valeurs de threshold et de ressource 
    * Un threshold peut être utilisé pour démarrer un Job après qu'une certaine valeur soit atteinte

<a href="imgbasic/411.png" target="_blank"><img src="imgbasic/411.png" width="500"></img></a>

### Propriétés de l'instance Threshold

* La valeur actuelle du threshold peut être récupérée :  ```[[TH.ThresholdName]]```

<a href="imgbasic/412.png" target="_blank"><img src="imgbasic/412.png" width="500"></img></a>  
<a href="imgbasic/413.png" target="_blank"><img src="imgbasic/413.png" width="500"></img></a>  

###### (Cliquez sur les images pour les agrandir)