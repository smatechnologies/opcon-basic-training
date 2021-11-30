---
sidebar_label: 'Ressources'
hide_title: 'false'
---

## Ressources

<figure>
    <audio
        controls
        src="audiobasic/Resources.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Ressource** : la valeur définie par l'utilisateur est composée du nom et de la limite numérique
* Les ressources sont utilisées pour gérer et limiter le nombre de Job exécutés simultanément sur les schedules et les machines dans OpCon
* **Le nombre maximal de Jobs simultanés (Max Concurrent Jobs)** dans les propriétés de la machine limite le nombre de Jobs exécutés simultanément sur une machine spécifique
    * **Toutes les ressources (All – Tous)** peuvent être définies pour les dépendances
    * SAM est responsable du suivi des ressources utilisées

:::note Remarque
Si toutes les ressources sont en cours d'utilisation, SAM attend qu'une ressource soit disponible avant de soumettre le prochain Job
:::

<a href="imgbasic/401.png" target="_blank"><img src="imgbasic/401.png" width="500"></img></a>  
<a href="imgbasic/402.png" target="_blank"><img src="imgbasic/402.png" width="500"></img></a>  

### Ressources - Propriétés d'instance

* La valeur maximale d'une ressource peut être récupérée

```[[RM.ResourceName]]```

* Le nombre de ressources « utilisées » peut également être récupéré

```[[RU.ResourceName]]```

<a href="imgbasic/403.png" target="_blank"><img src="imgbasic/403.png" width="500"></img></a>  
<a href="imgbasic/404.png" target="_blank"><img src="imgbasic/404.png" width="500"></img></a>  

### Fréquence - Priorité SAM

<figure>
    <audio
        controls
        src="audiobasic/FrequencySAMPriority.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Est utilisé si un des cas suivants est rencontré :
  * La machine a atteint la limite max des jobs simultanés (la valeur par défaut des agents Windows et UNIX est de ```50```)
  * Une Ressource a atteint la Ressource Max
* Le Job avec la **Priorité SAM** la plus haute s’exécutera en premier si plusieurs Jobs attentent qu’une Ressource ou l’exécution d’un Job d’une machine se libèrent.


<a href="imgbasic/405.png" target="_blank"><img src="imgbasic/405.png" width="500"></img></a>  
<a href="imgbasic/406.png" target="_blank"><img src="imgbasic/406.png" width="500"></img></a>  

###### (Cliquez sur les images pour les agrandir)