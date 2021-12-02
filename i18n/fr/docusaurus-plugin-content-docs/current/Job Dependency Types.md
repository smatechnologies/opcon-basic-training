---
sidebar_label: 'Types de dépendance de job'
hide_title: 'false'
---

## Types de dépendance de job

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypes.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Requise** - Le Job sélectionné doit exister et être à l'état terminé avant qu'un Job dépendant ne s'exécute (par défaut, il doit être terminé avec succès)
* **Après** - Le Job sélectionné, s’il existe, doit être à l'état terminé avant qu'un Job dépendant ne s'exécute (par défaut, il doit être terminé avec succès)
* **En exclusion** – Le job sélectionnée sera déplanifié les jours où le job dépendant est planifié
* **Conflit** - Le job dépendant ne démarre pas si le job sélectionné est en cours d'exécution

<a href="imgbasic/214.png" target="_blank"><img src="imgbasic/214.png" width="500"></img></a>

### Types de dépendance de Job - **Après**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypesAfter.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Utilisé pour les jobs qui font partie du Workflow de manière occasionnelle.
* Si les dépendances de job doivent être liées en amont lorsque After Dependencies est utilisé

Exemple :

* Le **job 1** et le **job 3** ont une fréquence quotidienne, le **job 2** n'est présent que le vendredi
* Le **job 3** a une dépendance après le **job 2** car il n'est présent qu'occasionnellement
* Le **job 3** a également besoin d'une dépendance sur le **job 1** pour s'assurer que le **job 1** s'exécute avant le **job 3** lorsque le **job 2** n'existe pas

<a href="imgbasic/215.png" target="_blank"><img src="imgbasic/215.png" width="500"></img></a>

### Types de dépendance de Job - **En Exclusion**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypesExcludes.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Permet aux jobs mensuels de supprimer automatiquement les jobs quotidiens d'un Schedule
* Alternative aux **Fréquences Négatives** qui utilisent **Do Not Schedule**
    * Les dépendances en exclusion ne sont pas représentées dans les plans journaliers
    * Pour tester, mettez au plan un schedule pour la date appropriée et incluez les bons Jobs

<a href="imgbasic/216.png" target="_blank"><img src="imgbasic/216.png" width="500"></img></a>

### Types de dépendance de Job - **Conflit**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyTypesConflict.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Permet aux Jobs d'attendre uniquement si un Job dépendant est en cours d'exécution
    * Identifié graphiquement avec des lignes roses 
    * Si aucun Job ne doit démarrer lorsque l'autre est en cours d'exécution, une dépendance doit être définie du **Job 1** au **Job 4** ainsi que du **Job 4** au **Job 1**

<a href="imgbasic/217.png" target="_blank"><img src="imgbasic/217.png" width="500"></img></a>

### Dépendance du job - **Ignore Exit Code**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyIgnoreExitCode.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* L'option **Ignore Exit Code** est valide pour un type de dépendance **Requises** ou **Après**
* Si elle est sélectionnée, l'option permettra à un Job sélectionné de s'exécuter une fois que le Job Dépendant est terminé, quel que soit l'état du code de fin.

<a href="imgbasic/218.png" target="_blank"><img src="imgbasic/218.png" width="500"></img></a>

### Dépendance de job- **Échec**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyFailed.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* L'option **Échec (Failed)** est valide pour le type de dépendance **Requises** ou **Après** 
* Si cette option est sélectionnée, cela permettra si le Job précédent est en échec de traiter les autres Jobs qui font partie de ce chemin

<a href="imgbasic/219.png" target="_blank"><img src="imgbasic/219.png" width="500"></img></a>  
<a href="imgbasic/220.png" target="_blank"><img src="imgbasic/220.png" width="500"></img></a>  

### Dépendance de job – **Ecart Jours**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyOffset.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Permet les dépendances de job inter-jours
* Utilise le jour calendaire au lieu du jour ouvrable par défaut
    * Sauf si le paramètre Job Dependency Offset Type dans les options du serveur est défini sur **Occurrence** au lieu de la valeur par défaut **Calendar Days**

<a href="imgbasic/221.png" target="_blank"><img src="imgbasic/221.png" width="500"></img></a>  
<a href="imgbasic/222.png" target="_blank"><img src="imgbasic/222.png" width="500"></img></a>  

### Dépendance de job - **basée sur la fréquence**

<figure>
    <audio
        controls
        src="audiobasic/JobDependencyBasedOnFrequency.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Permet de définir une dépendance uniquement lorsque le Job est créé à l'aide d'une fréquence spécifique
    * Si aucune Fréquence n’est sélectionnée, la dépendance est toujours vraie
    * Utilisé à la place d'une Dépendance Après

<a href="imgbasic/223.png" target="_blank"><img src="imgbasic/223.png" width="500"></img></a>  

### Conflits avec d'autres jours

* Empêche un Schedule de s'ouvrir jusqu'à ce que toutes les instances quotidiennes du schedule des jours précédents soient terminées
* Utiliser les notifications **Late to Star**t si ce paramètre est utilisé

<a href="imgbasic/224.png" target="_blank"><img src="imgbasic/224.png" width="500"></img></a>


###### (Cliquez sur les images pour les agrandir)