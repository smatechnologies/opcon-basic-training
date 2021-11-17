---
sidebar_label: 'Mise au Plan (Build)'
hide_title: 'false'
---

## Mise au Plan (Build)

<figure>
    <audio
        controls
        src="audiobasic/ScheduleBuilds.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* OpCon (SAM) recherchera dans la base de données les schedules et les jobs qui doivent s'exécuter à une date spécifique
  * Sur la base des informations stockées dans les tables Master, SAM ajoutera des schedules et des jobs aux tables Daily.
* Les schedules peuvent être mis au plan manuellement ou automatiquement

<a href="imgbasic/Picture29.png" target="_blank"><img src="imgbasic/Picture29.png" width="300"></img></a>

### Mise au Plan automatique (Auto Build)

<figure>
    <audio
        controls
        src="audiobasic/AutoBuild.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* La Mise au Plan automatique **X jours à l'avance** est le jour à partir duquel la mise au plan se fait
* La Mise au Plan automatique **pendant Y jours** est le nombre de jours à mettre au plan
* OpCon effectue la mise au plan automatique des schedules à minuit (par défaut)
  * Exemple : ```7``` jours à l'avance pour ```1``` jour mettra au plan le schedule au 7e jour compté dans le futur (le premier jour compté est Jour ```0```)
  * Exemple : ```0``` jours à l'avance pour ```7``` jours mettra au plan le schedule pour 7 jours à partir d’aujourd’hui (le premier jour compté est Jour ```0```)

* La meilleure pratique pour la Mise au Plan automatique est de **7 jours à l'avance pour 1 jour**

#### Exemple de Mise au Plan automatique 1 :

<a href="imgbasic/Picture30.png" target="_blank"><img src="imgbasic/Picture30.png" width="500"></img></a>  

#### Exemple de Mise au Plan automatique 2 :

<a href="imgbasic/Picture31.png" target="_blank"><img src="imgbasic/Picture31.png" width="500"></img></a>  

### Mise au Plan manuelle

<figure>
    <audio
        controls
        src="audiobasic/ManualBuild.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* La fenêtre **Mise au Plan Schedules** contient la liste des schedules pouvant être mis au plan, toutes les informations nécessaires pour la mise au plan et un historique des résultats

<a href="imgbasic/Picture32.png" target="_blank"><img src="imgbasic/Picture32.png" width="500"></img></a>  

###### (Cliquez sur les images pour les agrandir)
