---
sidebar_label: 'Jobs récurrents'
hide_title: 'false'
---

## Jobs récurrents

### Jobs récurrents en cas de succès

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsOnSuccess.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Le même Job peut s'exécuter plusieurs fois au cours de la journée

:::caution Remarque
La dépendance des jobs ultérieurs ne sera satisfaite qu'à la dernière exécution
:::

<a href="imgbasic/256.png" target="_blank"><img src="imgbasic/256.png" width="500"></img></a>

### Jobs récurrents – Intervalle d’Exécution

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsRestartOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Un Job a besoin d’être réexécuté à un intervalle défini
* **Intervalle d'exécution** – Intervalle (en minutes) entre les soumissions ou entre la fin et le début du job suivant.
* **Limites d'exécution** - l'une ou les deux sélections peuvent être utilisées 

:::caution Remarque
La dépendance des jobs ultérieurs ne sera satisfaite qu'à la dernière exécution
:::

<a href="imgbasic/257.png" target="_blank"><img src="imgbasic/257.png" width="500"></img></a>

### Jobs récurrents - Instances récurrentes

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsRecurringInstances.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Un Job a besoin d’être réexécuté à un intervalle non constant. 
* **L'action sur chevauchement de récurrence de Job** permet à un job de s'exécuter ou d'être ignoré si un autre job a été exécuté en retard ou est en cours d'exécution lors de l'exécution suivante

:::caution Remarque
La dépendance des jobs ultérieurs ne sera satisfaite qu'à la dernière exécution
:::

<a href="imgbasic/258.png" target="_blank"><img src="imgbasic/258.png" width="500"></img></a>


### Jobs relancés en cas d'échec

<figure>
    <audio
        controls
        src="audiobasic/LoopingJobsOnFailure.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Un Job peut réessayer automatiquement plusieurs fois dans le nombre de minutes configuré entre les tentatives si le job échoue

:::note Remarque
OpCon marquera un Job comme ayant échoué après la dernière tentative
:::

<a href="imgbasic/259.png" target="_blank"><img src="imgbasic/259.png" width="500"></img></a>

###### (Cliquez sur les images pour les agrandir)