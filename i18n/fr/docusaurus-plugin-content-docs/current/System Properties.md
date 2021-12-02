---
sidebar_label: 'Propriétés du système et de l instance'
hide_title: 'false'
---

## Propriétés du système et de l'instance

<figure>
    <audio
        controls
        src="audiobasic/SystemAndInstanceProperties.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

:::info Remarque
Les **propriétés** sont des variables stockées dans la base de données qui peuvent être utilisées dans OpCon
* Défini avec le nom et la valeur
:::

* **Les propriétés globales (Global Properties)** (propriétés d'instance OpCon) sont des variables associées à l'ensemble de l'environnement
* **Les propriétés d'instance de Job (Job Instance Properties)** sont des variables associées à un Job spécifique
* **Les propriétés d'instance de planification (Schedule Instance Properties)** sont des variables associées à un schedule spécifique
* **Les propriétés d'instance de machine (Machine Instance Properties)** sont des variables associées à une machine spécifique

### Propriétés système et propriétés définies par l'utilisateur

* Toutes les propriétés globales qui commencent par un symbole dollar (```$```) sont appelées propriétés système (System Properties).
* Les propriétés système donnent des valeurs de variable dépendant du système
* Plusieurs de ces systèmes de valeurs peuvent être modifiées au format
    * Exemple: ```$DATE``` peut être réglé sur ```mmddyy```, ```yyyymmdd```, ```mm```, etc.
* ```$DATE``` est la date actuelle du serveur OpCon
    * ```$SCHEDULE DATE``` est la date à laquelle un Schedule a été créé
        * Si un schedule est créé pour le 1er janvier à 23h50, mais se termine le 2 janvier à 15h30, toutes les propriétés ```$SCHEDULE DATE``` seront résolues à la date du 1er janvier

<a href="imgbasic/334.png" target="_blank"><img src="imgbasic/334.png" width="300"></img></a>

### Décalages des propriétés système

<figure>
    <audio
        controls
        src="audiobasic/SystemPropertiesOffsets.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* les propriétés système ```$DATE``` ou ```$SCHEDULE DATE``` peuvent être décalées
* Exemple:
    * ```[[$DATEmmddyy(+1d)]]``` ou ```[[$DATEmmddyy(-1d)]]``` pour les décalages journaliers

<a href="imgbasic/335.png" target="_blank"><img src="imgbasic/335.png" width="500"></img></a>  
<a href="imgbasic/336.png" target="_blank"><img src="imgbasic/336.png" width="500"></img></a>  

* **Jour de décalage**
    * ```[[$DATEmmddyy(+1d)]]``` ou ```[[$DATEmmddyy(-1d)]]``` pour les décalages journaliers
* **•	Décalage de jour ouvrable**
    * ```[[$SCHEDULE DATEmmddyy(+1wd)]]``` ou ```[[$SCHEDULE DATEmmddyy(-1wd)]]``` pour le décalages de X jours ouvrés (Working Day offsets)
        * ```$SCHEDULE DATE``` requis pour ce décalage de jour ouvrable
* **Décalage de Mois **
    * ```[[$DATEmmddyy(+1m)]]``` ou ```[[$DATEmmddyy(-1m)]]``` pour les décalages journaliers
        * Pas de décalage spécifique pour l'année - Utiliser  ```(+12m)``` ou ```(-12m)``` pour décaler pour des années
* **Fin du mois**
    * ```[[$DATEmmddyy(+1eom)]]``` La valeur trouve le dernier jour du mois en cours
        * ```+1``` est le mois en cours 
        * ```+2``` est le mois prochain
    * ```[[$DATEmmddyy(-1eom)]]``` La valeur trouve le dernier jour du mois précédent