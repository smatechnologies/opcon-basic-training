---
sidebar_label: 'Personnalisation des boutons de Service Request'
hide_title: 'false'
---

## Personnalisation des boutons de Service Request

* Vous pouvez styliser le bouton Service Request à l'aide d'un code HTML personnalisé

* Pour personnaliser le bouton :
    * Cliquez sur le bouton ```Modifier``` dans le coin supérieur droit du bouton Service Request pour afficher la page Edition du Service Request
    * Activez le commutateur **Html Personnalisé** Un champ de texte s'affiche pour saisir le code **HTML personnalisé**

<a href="imgbasic/SelfServiceCustomHTMLBlank.png" target="_blank"><img src="imgbasic/SelfServiceCustomHTMLBlank.png" width="500"></img></a>

* Saisissez le code HTML du modèle suivant :

```
<div style="background-color: #043A4F;height: 12px;width:200px;border-radius: 3px;border: 2px solid #043A4F;color: white;font-size: 14px;font-weight: bold;padding: 25px">

    <span class="v-icon FontAwesome" style="color: #93D7FA">&#xf0ac</span>

    <span>SERVICE REQUEST NAME</span>
</div>
```

* Modifiez le code selon vos besoins
    * Un aperçu du bouton et de toute modification apparaîtra au-dessus du champ de texte

<a href="imgbasic/SelfServiceCustomHTMLExample.png" target="_blank"><img src="imgbasic/SelfServiceCustomHTMLExample.png" width="500"></img></a>

* Voici quelques recommandations pour mettre à jour l'icône et le texte du bouton :

* Pour modifier la police ou l'icône qui apparaît sur le bouton :
    * Changez la couleur de la police de l'icône en entrant un nouveau code couleur hexadécimal dans le code de l’exemple :

 ```<span class="v-icon FontAwesome" style="color: #ff8f8f">&#xf0ac</span>``` 

 **#ff8f8f**

<a href="imgbasic/SelfServiceCustomHTMLIconChange.png" target="_blank"><img src="imgbasic/SelfServiceCustomHTMLIconChange.png" width="500"></img></a>

* Modifiez l'apparence de la police de l'icône en saisissant ou en collant une nouvelle valeur Unicode dans l’exemple :

```<span class="v-icon FontAwesome" style="color: #93D7FA">&#xf1C0</span>```

**xf1C0**

<a href="imgbasic/SelfServiceCustomHTMLIconChangeUnicode.png" target="_blank"><img src="imgbasic/SelfServiceCustomHTMLIconChangeUnicode.png" width="500"></img></a>