---
sidebar_label: 'Mise en place des entrées utilisateur'
hide_title: 'false'
---

## Mise en place des entrées utilisateur

* Une fois qu'une variable a été entrée dans la définition d’un Event, elle deviendra disponible en tant qu’Entrée Utilisateur.
    * Les champs Entrée Utilisateur s'afficheront lorsque vous cliquerez sur le bouton Service Request

<a href="imgbasic/SelfServiceRequestUserInputMainScreen.png" target="_blank"><img src="imgbasic/SelfServiceRequestUserInputMainScreen.png" width="500"></img></a>

* Il existe plusieurs options pour les types d’ Entrée Utilisateur:
    * Texte
    * Nombre
    * Date
    * Text Collection
    * Master Schedule
    * Master Job
    * Choix

### Configuration des entrées utilisateur

* Pour configurer les entrées utilisateur:
    * Double-cliquez sur l’ Entrée Utilisateur à modifier sur la page de définition du Service Request

ou alors

* Sélectionnez l'entrée utilisateur dans la liste et cliquez sur le bouton **bleu** ```Editer``` en haut à droite de la liste
* Par défaut, le système définit une nouvelle variable Entrée Utilisateur comme de type ```Texte``` sans aucune validation
    * Cela signifie que les utilisateurs pourront taper n'importe quoi dans le champ
    * Le contenu de ce champ de texte sera placé dans l'event OpCon juste avant que le SAM le reçoive
* L'ordre des entrées utilisateur est modifié à l'aide des flèches haut / bas en haut de la liste des entrées utilisateur

<a href="imgbasic/SelfServiceUserInputSelect.png" target="_blank"><img src="imgbasic/SelfServiceUserInputSelect.png" width="500"></img></a>

<a href="imgbasic/SelfServiceUserInputSelectType.png" target="_blank"><img src="imgbasic/SelfServiceUserInputSelectType.png" width="500"></img></a>

### Configuration du texte des entrées utilisateur 

<a href="imgbasic/SelfServiceUserInputText.png" target="_blank"><img src="imgbasic/SelfServiceUserInputText.png" width="500"></img></a>

* Sélectionnez ```Texte``` dans la liste déroulante Type de l’entrée utilisateur
* Spécifiez les règles de validation pour l'entrée utilisateur, à l'aide des options suivantes :
    * **Confidentiel** : permet à l'utilisateur de spécifier que cette entrée utilisateur est un champ **mot de passe / secret**, auquel cas la valeur saisie par l'utilisateur sera masquée
        * Un tel cas d'utilisation serait d'injecter un mot de passe quelque part dans les events à envoyer à OpCon (par exemple, propriété d'instance de job)
    * **Nombre Minimum de Caractères** : permet à l'utilisateur de spécifier une restriction de longueur de caractère minimum
    * **Nombre Maximum de Caractères** : permet à l'utilisateur de spécifier une restriction de longueur de caractère maximum
    * **Caractères Invalides** : permet à l'utilisateur d'identifier les caractères [restreints] non valides
    * **Expression Régulière** : permet à l'utilisateur de créer un modèle de correspondance d'expression régulière pour valider ce que l'utilisateur a entré dans le champ de texte avant qu'il ne soit injecté
    * **Personnaliser le Message d’erreur** : permet à l'utilisateur de définir un message d'erreur personnalisé qui sera affiché si une exception de validation de texte d'expression régulière est levée
        * Par exemple, le message suivant peut être un message d'erreur personnalisé fourni aux utilisateurs lorsqu'ils ont saisi des formats de numéro de téléphone incorrects : "Veuillez saisir un numéro de téléphone à 10 chiffres avec des tirets (par exemple, 281-446-5000)"
* Spécifiez comment formater la valeur injectée dans l'event OpCon, à l'aide des options de formatage de sortie suivantes:
    * **Caractères à retirer** : permet à l'utilisateur de spécifier le (s) caractère (s) à supprimer de l'entrée utilisateur (après sa validation)
    * **Remplissage** : permet à l'utilisateur de spécifier la direction de remplissage (gauche / droite), la longueur de remplissage et le caractère utilisé pour remplir

### Configuration d’entrées utilisateur sous forme de Nombre

<a href="imgbasic/SelfServiceUserInputNumber.png" target="_blank"><img src="imgbasic/SelfServiceUserInputNumber.png" width="500"></img></a>

* Sélectionnez ```Nombre``` dans la liste déroulante Type de l’entrée utilisateur
* Spécifiez les règles de validation pour l'entrée utilisateur, à l'aide des options suivantes :
    * **Minimum** : permet à l'utilisateur de spécifier la valeur minimale autorisée
    * **Maximum** : permet à l'utilisateur de spécifier la valeur maximale autorisée

### Configuration d’entrées utilisateur sous forme de Date

<a href="imgbasic/SelfServiceUserInputDate.png" target="_blank"><img src="imgbasic/SelfServiceUserInputDate.png" width="500"></img></a>

* Sélectionnez ```Date``` dans la liste déroulante Type de l’entrée utilisateur
* Définissez une plage de dates pour l'entrée utilisateur, à l'aide des options suivantes :
    * **Date de début** : permet à l'utilisateur de spécifier une date de début pour la plage. S'il est configuré, les utilisateurs ne pourront pas spécifier ou saisir une date antérieure à la **date de début spécifiée**
    * **Aujourd’hui **: en option, l'utilisateur peut activer l'interrupteur Aujourd’hui pour définir le jour **actuel comme date de début**.
    * **Date de fin** : permet à l'utilisateur de spécifier une date de fin pour la plage. S'il est configuré, les utilisateurs ne pourront pas spécifier ou saisir une date postérieure à la **date de fin spécifiée**
    * **Aujourd’hui** : en option, l'utilisateur peut activer l'interrupteur Aujourd’hui pour définir le jour **actuel comme date de fin**.

* Définissez un format de sortie ou sélectionnez l'un des formats prédéfinis suivants dans la liste déroulante :
    * ```yyyy/MM/dd``` (2009/06/15)
    * ```yyyy-MM-dd``` (2009-06-15)
    * ```EEEE MMMM d yyyy``` (Lundi Juin 15 2009)
    * ```E MMMM d yyyy``` (Lun Juin 15 2009)
    * ```MM/dd/yyyy``` (06/15/2009)
    * ```M/d/yy``` (6/15/09)
    * ```MMMM d yyyy``` (Juin 15 2009)

Lors de la définition de modèles de date personnalisés (par exemple, dd/mm/yyyy, mm/dd/yyyy, yyyy-mm-dd, etc.), l'utilisateur peut utiliser les lettres des modèles définies comme suit (tous les autres caractères de 'A' à 'Z' et de 'a' à 'z' sont réservés) :

* Les modèles les plus courants utilisent une combinaison de y (représentant un chiffre de l'année), M (représentant un chiffre du mois) 
et d (représentant un chiffre du jour)
* Exemple de modèles de date :
    * ```dd/MM/yyyy```
    * ```dd-MM-yyyy```
    * ```MM/dd/yyyy```
    * ```yyyy-MM-dd```
    * ```yyMMdd```

### Configuration d’entrées utilisateur sous forme de liste de choix

<a href="imgbasic/SelfServiceUserInputChoiceMain.png" target="_blank"><img src="imgbasic/SelfServiceUserInputChoiceMain.png" width="500"></img></a>

<a href="imgbasic/SelfServiceUserInputChoiceConfigure.png" target="_blank"><img src="imgbasic/SelfServiceUserInputChoiceConfigure.png" width="500"></img></a>

* Sélectionnez Choix dans la liste déroulante Type de l’entrée utilisateur

* Les options de la barre d'outils Choix définissent et ordonnent l'ensemble de valeurs qui seront présentées aux utilisateurs pour sélection lors de l'exécution du Service Request.
    * Le champ ```Nom``` représente ce qui est affiché à l'utilisateur, tandis que le champ ```Valeur``` représente ce qui est soumis à OpCon.

### Configuration d’entrées utilisateur sous forme de Texte Collection

<a href="imgbasic/SelfServiceUserInputTextCollection.png" target="_blank"><img src="imgbasic/SelfServiceUserInputTextCollection.png" width="500"></img></a>

* Sélectionnez ```Texte Collection``` dans la liste déroulante Type de l’entrée utilisateur 
* Spécifiez les règles de validation pour l'entrée utilisateur, à l'aide des options suivantes :
    * **Empêcher les doublons** : empêche les utilisateurs d'entrer la même valeur plusieurs fois
    * **Séparateur** : permet de spécifier le caractère spécial utilisé pour séparer les valeurs définies par l'utilisateur en vue de la concaténation en une seule chaîne lors de l'injection dans l'Event OpCon pour le traitement par le SAM
    * **Nombre minimum de caractères** : permet de spécifier un nombre minimum de caractères à saisir
    * **Nombre maximum de caractères** : permet de spécifier un nombre maximum de caractères à saisir
    * **Caractères Invalides** : permet d'identifier des caractères non valides [ interdits] 
    * **Expression Régulière** : permet de créer un modèle de correspondance d'expression régulière pour valider les données saisies par l'utilisateur dans le champ de texte avant qu'elles ne soient injectés dans l’Event.
    * **Personnaliser le message d'erreur** : permet de définir un message d'erreur personnalisé qui sera affiché aux utilisateurs s'il y a une erreur dans la validation du texte saisi par le contrôle d’Expression régulière.
        
:::note Exemple
Par exemple, le message suivant peut être un message d'erreur personnalisé fourni aux utilisateurs lorsqu'ils ont saisi des formats de numéro de téléphone incorrects : "Veuillez saisir un numéro de téléphone à 10 chiffres avec des tirets (par exemple, 281-446-5000)"
:::

### Configuration d’entrées utilisateur sous forme de Master Schedule

<a href="imgbasic/SelfServiceUserInputMasterSchedule.png" target="_blank"><img src="imgbasic/SelfServiceUserInputMasterSchedule.png" width="500"></img></a>

* Permettra à l’utilisateur de sélectionner un Schedule dans la liste déroulante des Master Schedule définis sur le serveur Opcon

### Configuration d’entrées utilisateur sous forme de Master Job

<a href="imgbasic/SelfServiceUserInputMasterJob.png" target="_blank"><img src="imgbasic/SelfServiceUserInputMasterJob.png" width="500"></img></a>

* Permettra à l’utilisateur de sélectionner un Job dans la liste déroulante des Master Job définis sur le serveur Opcon