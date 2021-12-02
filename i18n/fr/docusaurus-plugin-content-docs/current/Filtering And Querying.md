---
sidebar_label: 'Filtrage des Service Requests'
hide_title: 'false'
---

## Filtrage des Service Requests

* Utilisez la barre de filtrage en haut de l'écran Self Service pour filtrer les Service Requests par:
    * Catégorie
    * Rôle Opcon
    * Nom

<a href="imgbasic/SelfServiceFilterBar.png" target="_blank"><img src="imgbasic/SelfServiceFilterBar.png" width="500"></img></a>

### Rechercher avec des caractères génériques

* Pour les requêtes avancées, la barre de filtre accepte les caractères génériques de l'astérisque (```*```) et du point d'interrogation (```?```)
    * Le caractère générique astérisque peut être utilisé pour faire correspondre de zéro à plusieurs caractères
    * Le caractère générique point d'interrogation correspond à un seul caractère.
    * Par défaut, le filtre effectuera une opération ```CONTAINS``` sur l'ensemble de données avec la requête de texte donnée
    * Si la requête Filtre commence par un signe égal (```=```), la requête devient stricte au lieu d'effectuer une opération ```CONTAINS```

###### (Cliquez sur l'image pour l'agrandir)