---
sidebar_label: 'Jobs d arrivée de fichiers (File Arrival) '
hide_title: 'false'
---

## Jobs d'arrivée de fichiers (File Arrival) 

<figure>
    <audio
        controls
        src="audiobasic/WindowsAndUNIXFileArrivalJobs.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>


### Jobs d'arrivée de fichiers (File Arrival) sur Windows

* Caractères génériques standard Windows sont autorisés dans le nom de fichier
* Utilisez les propriétés dans le chemin si nécessaire

<a href="imgbasic/441.png" target="_blank"><img src="imgbasic/441.png" width="500"></img></a>

* Les Jobs d'arrivée de fichiers Windows peuvent utiliser des critères d'échec avancés (Failure Criteria)

<a href="imgbasic/442.png" target="_blank"><img src="imgbasic/442.png" width="500"></img></a>

### Jobs d'arrivée de fichiers UNIX

* Caractères génériques standard UNIX sont autorisés dans le nom de fichier
* Utilisez les propriétés dans le chemin si nécessaire

<a href="imgbasic/443.png" target="_blank"><img src="imgbasic/443.png" width="500"></img></a>

* Le Job d'arrivée de fichier se termine OK
    * Échoue si le fichier n'arrive pas dans l’intervalle de temps (Time Stamp)
* Les LSAM (Windows et UNIX) définissent certaines propriétés pour ce job
    * Fonctionne comme Propriété d’instance de Job pour le job File Arrival :

<a href="imgbasic/444.png" target="_blank"><img src="imgbasic/444.png" width="500"></img></a>

###### Exemple:

* Recevez 5 fichiers et tous doivent être traités de la même manière
* L'ordre de traitement des fichiers n'a pas d'importance

Mise en place :
    
* Un Schedule principal
    * Avec un détecteur de fichier, utiliser des caractères génériques pour capturer le nom de fichier
    * Un Job doit également être ajouté dans le Schedule principal et créera des fichiers 
* Lorsqu'un job d'arrivée de fichier trouve une correspondance (après l'exécution du job de création de fichier), l'event est déclenché
    * L'event ajoute un Job container multi-instance qui appelle le sous-schedule de traitement
    * Une fois le job container terminé, il déclenche l'event pour redémarrer le job de détection de fichier
        * Cela fera une boucle sur les 5 fichiers


###### (Cliquez sur les images pour les agrandir)