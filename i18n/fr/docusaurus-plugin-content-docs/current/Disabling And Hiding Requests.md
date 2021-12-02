---
sidebar_label: 'Désactivation et masquage des demandes'
hide_title: 'false'
---

## Désactivation et masquage des demandes

Les règles de désactivation ou de masquage des boutons Service Request peuvent être définies à l'aide de règles ou d'expressions OpCon

Une règle peut être l'une des suivantes :


* Une valeur booléenne (true / false)
* Une Global Property dont la valeur se résout en true / false
* Une expression complexe d’évaluation.

:::note Remarque
* Les deux ```Règle de désactivation``` et ```Règle de masquage``` sont facultatives
* _Si aucune règle n'est définie, le bouton Service Request sera activé et visible_
:::

### Désactivation des Service Requests

Pour définir une règle de désactivation d'un Service Request :

* Cliquez sur le bouton Modifier dans le coin supérieur droit du bouton Service Request

<a href="imgbasic/SelfServiceSampleButton.png" target="_blank"><img src="imgbasic/SelfServiceSampleButton.png" width="500"></img></a>

* La page Edition du Service Request s'affiche
* Activez le commutateur Règle de désactivation 
    * Un champ de texte s'affiche pour saisir la règle de désactivation.
    * Entrez une valeur booléenne (true / false), un nom de Global Property ou une expression complexe d’évaluation

<a href="imgbasic/SelfServiceDisableRuleBoolean.png" target="_blank"><img src="imgbasic/SelfServiceDisableRuleBoolean.png" width="500"></img></a>

<a href="imgbasic/SelfServiceDisableRuleToken.png" target="_blank"><img src="imgbasic/SelfServiceDisableRuleToken.png" width="500"></img></a>

<a href="imgbasic/SelfServiceDisableRuleExpression.png" target="_blank"><img src="imgbasic/SelfServiceDisableRuleExpression.png" width="500"></img></a>

### Masquage des demandes de service

* Pour définir une règle de masquage d'un Service Request :
    * Cliquez sur le bouton Modifier dans le coin supérieur droit du bouton Service Request

<a href="imgbasic/SelfServiceSampleButton.png" target="_blank"><img src="imgbasic/SelfServiceSampleButton.png" width="500"></img></a>

* La page Edition du Service Request s'affiche
* Activez le commutateur Règle de masquage
    * Un champ de texte s'affiche pour saisir la règle de masquage.
    * Entrez une valeur booléenne (true / false), un nom de Global Property ou une expression complexe d’évaluation

<a href="imgbasic/SelfServiceHideRuleBoolean.png" target="_blank"><img src="imgbasic/SelfServiceHideRuleBoolean.png" width="500"></img></a>

<a href="imgbasic/SelfServiceHideRuleToken.png" target="_blank"><img src="imgbasic/SelfServiceHideRuleToken.png" width="500"></img></a>

<a href="imgbasic/SelfServiceHideRuleExpression.png" target="_blank"><img src="imgbasic/SelfServiceHideRuleExpression.png" width="500"></img></a>

###### (Cliquez sur les images pour les agrandir)