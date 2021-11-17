---
sidebar_label: 'Global Properties'
hide_title: 'false'
---

## Global Properties

<figure>
    <audio
        controls
        src="audiobasic/GlobalProperties.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

**Les Global Properties** sont des variables stockées dans la base de données qui peuvent être utilisées dans OpCon

* Elles sont définies avec un nom et une valeur

:::note Exemple
Pour utiliser une **Global Properties** dans OpCon (lignes de commande, événements, etc.), utilisez la notation suivante:

```[[<Global Property Name>]]```

Exemple:

```[[PATH-TO-SCRIPTS]]```
:::

* OpCon remplacera la **Global Properties** par la valeur donnée lors de l'exécution

* L' écran **Global Properties** est utilisé pour gérer les propriétés d'instance OpCon qui s'appliquent à l'ensemble de l'environnement

<a href="imgbasic/201.png" target="_blank"><img src="imgbasic/201.png" width="500"></img></a>  

* Utilisation d'une Global Properties en ligne de commande

<a href="imgbasic/202.png" target="_blank"><img src="imgbasic/202.png" width="500"></img></a>

###### (Cliquez sur les images pour les agrandir)

### Dépannage des propriétés globales

<figure>
    <audio
        controls
        src="audiobasic/TroubleshootingGlobalProperties.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

Exemple

* Le Job reste en statut suspendu (Hold)
    * Si le SAM ne parvient pas à résoudre une propriété, il placera le job « On Hold » au moment de l’exécution.
    * Le SAM et la Critical Log indiqueront quelle propriété a une erreur

<a href="imgbasic/203.png" target="_blank"><img src="imgbasic/203.png" width="500"></img></a> 

### Propriété globale cryptée

<figure>
    <audio
        controls
        src="audiobasic/EncryptedGlobalProperty.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>


* La valeur d'une Global Property peut être cryptée en cochant simplement la case Crypté et en enregistrant la Global Property.
* Cette valeur est décryptée par LSAM à l’exécution.
* Il n'y a pas d'option de déchiffrement
* Utile pour des données comme les mots de passe

<a href="imgbasic/204.png" target="_blank"><img src="imgbasic/204.png" width="250"></img></a>  

<a href="imgbasic/205.png" target="_blank"><img src="imgbasic/205.png" width="250"></img></a>  

###### (Cliquez sur les images pour les agrandir)