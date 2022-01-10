---
sidebar_label: 'Unite 1 Exercice 2'
hide_title: 'false'
---

## Exercice 2: Exécution d'un job batch manuel

##### Objectif:

Exécutez deux jobs batch de base à partir de la fenêtre de commandes :

* Job 1 : Tapez ```timeout /t 15``` et appuyez sur Entrée.
* Job 2 : Tapez ```cd "C:\Program Files\OpConxps\MSLSAM"``` et appuyez sur Entrée. Ensuite, tapez ```"genericp.exe -t10 -e0"``` et appuyez sur Entrée.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E2.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1.	Cliquez sur le bouton Démarrer de Windows, tapez ```cmd``` et appuyez sur la touche Entrée.
2.	Dans la fenêtre de commandes, tapez : ```timeout /t 15```
3.	Appuyez sur la touche Entrée.
 * Vous verrez la commande timeout exécuter un compte à rebours de 15 secondes. 
 
 - Remarque : Vous avez exécuté ce programme sous le compte Windows sous lequel vous êtes connecté ```SMATRAINING\SMAUSER```. Vous avez exécuté le programme sur la machine à laquelle vous êtes connecté ```SMATRAINING```.

4.	Dans la fenêtre d'invite de commandes, tapez :
```
cd “C:\Program Files\OpConxps\MSLSAM”
```
5.	Appuyez sur la touche Entrée.
6.	Toujours dans l'invite de commandes, tapez: 
```
genericp.exe –t10 –e0
```
7.	Appuyez sur la touche Entrée.
8.	Le programme genericp.exe s'exécutera pendant ```10``` secondes, puis se terminera.


</details>
