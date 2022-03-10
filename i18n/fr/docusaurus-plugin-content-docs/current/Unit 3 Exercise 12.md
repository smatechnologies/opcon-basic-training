---
sidebar_label: 'Unité 3 Exercice 12'
hide_title: 'false'
---

### Exercice 12: Event invalide

##### Objectif: 

Dans le Bloc-notes sous Windows, créez un nouveau document.

Tapez ce qui suit :

```$PROPERTY:SET,EVENTERROR,0,ocadm,opconxps```

Enregistrez le fichier sous n'importe quel nom sous ```C:\ProgramData\OpConxps\MSLSAM\MSGIN```

Ouvrez ```SAM.Log``` et ```Critical.Log``` et vérifiez les messages pour voir que la propriété n'existe pas (Property does not exist).


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E12.mp4" type="video/mp4"></source>
Votre navigateur ne prend pas en charge la vidéo.
</video>
</div>

<details>

<summary>Cliquez pour obtenir des instructions étape par étape</summary>

1. Ouvrez le **Bloc-notes** (cliquez sur le **bouton Démarrer de Windows**, tapez **Bloc-notes** et appuyez sur **Entrée**).
2. Dans le **Bloc-notes**, tapez : ```$PROPERTY:SET,EVENTERROR,0,ocadm,opconxps```
3. Enregistrez le fichier (sous n'importe quel nom) sous : ```C:\ProgramData\OpConxps\MSLSAM\MSGIN```
4. Revenez à Enterprise Manager et ouvrez le **SAM.Log**.
5. Vérifiez les messages (Property does not exist).
6. Ouvrez le **Critical.Log**.
7. Vérifiez les messages (Property does not exist).
8. Fermez tous les onglets du log et le **bloc-notes**.

</details>
