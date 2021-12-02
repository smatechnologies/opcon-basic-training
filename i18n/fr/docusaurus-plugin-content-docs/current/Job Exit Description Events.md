---
sidebar_label: 'Events basés sur la description de la sortie de Job'
hide_title: 'false'
---

## Events basés sur la description de la sortie de Job

<figure>
    <audio
        controls
        src="audiobasic/EventsBasedOnJobExitDescription.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

Lors de la définition d'un event basé sur la description de sortie, deux choses doivent être définies :

* **Opérateur de comparaison**      
    * Soyez prudent en n'utilisant rien d’autre que **Equal To**
    * Chaque système d'exploitation a des règles pour les noms et valeurs de description de sortie
    * UNIX - Utilisez **Contains** à moins que **full Exit Code** ne soit précisé
        * Si Equal To est sélectionné, **full Exit Code** est requis, y compris les zéros précédents et les deux points, les signes plus, etc.
    * Windows - Utilisez les derniers chiffres
        * ```100``` à la place de ```000000000100```


<a href="imgbasic/354.png" target="_blank"><img src="imgbasic/354.png" width="500"></img></a>  
<a href="imgbasic/355.png" target="_blank"><img src="imgbasic/355.png" width="500"></img></a>  
