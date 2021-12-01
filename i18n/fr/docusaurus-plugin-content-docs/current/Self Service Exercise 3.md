---
sidebar_label: 'Exercice 3 dans Self Service'
hide_title: 'false'
---

## Exercice 3 dans Self Service : styliser un bouton

1. Dans **Solution Manager**, sélectionnez l'onglet **Self Service**.
2. Assurez-vous que le **mode administrateur** est activé en cliquant sur le **bouton cadenas** dans le coin supérieur droit. Il doit devenir **vert** et **déverrouillé**.
3. À partir de l'écran principal de l'onglet **Self Service**, cliquez sur le bouton **Bleu Modifier** sur le bouton **Test 1**.
4. Basculez l'option **Html personnalisé** sur Activé (```Vert```).
5. Dans la zone de texte **Html personnalisé**, saisissez ce qui suit comme modèle :

```
<div style="background-color: #043A4F;height: 12px;width:200px;border-radius: 3px;border: 2px solid #043A4F;color: white;font-size: 14px;font-weight: bold;padding: 25px">

    <span class="v-icon FontAwesome" style="color: #93D7FA">&#xf0ac</span>

    <span>SERVICE REQUEST NAME</span>
</div>
```

6. Changez le code hexadécimal de **couleur d'arrière-plan** de **#043A4F** à **#FA4616**.
7. Changez la **bordure : 2px solide #043A4F** en **bordure : 8x pointillé #1155cc**
8. Changez le code hexadécimal de **couleur de l'icône v** de **#93D7FA** en **blanc**.
9. Changez l’**icône v** Unicode de **xf0ac** à **xf1C0**.

:::note Remarque
Le bouton d'aperçu doit maintenant être orange avec du texte blanc. L'icône doit être un symbole de base de données également blanc
:::

10. Cliquez sur **Enregistrer** pour accepter les modifications du bouton.

* Pour vous entraîner, choisissez un autre bouton et stylisez différents composants.

    * Une liste de couleurs de code hexadécimal peut être référencée sur <a href="https://htmlcolorcodes.com/" target="_blank">https://htmlcolorcodes.com/</a>
    * Une liste d'icônes Unicode peut être référencée sur <a href="https://fontawesome.com/icons" target="_blank">https://fontawesome.com/icons</a>