---
sidebar_label: 'Threshold - Events externes'
hide_title: 'false'
---

## Threshold - Events externes

* Comme tous les events OpCon, ```$THRESHOLD:SET``` peut être utilisé comme un event externe
* Avantage: les signes + et – peuvent être utilisés pour faire des calculs


Exemple:  

```$THRESHOLD:SET,<threshold name>,+1```  
```$THRESHOLD:SET,<threshold name>,-1```  

* Les Thresholds peuvent être utilisés pour compter des fichiers

Exemple:  

* Une entrerpise reçoit des fichiers tous les jours et il est necessaire de les compter
  * Utiliser un File Watcher pour détecter l’arrivée d’un fichier
  * Dés qu’un fichier arrive, incrémenter la valeur du Threshold (```+1```)
  * Envoyer une notification pour transmettre la valeur du Threshold


<a href="imgbasic/415.png" target="_blank"><img src="imgbasic/415.png" width="500"></img></a>
