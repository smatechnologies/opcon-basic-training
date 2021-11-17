---
sidebar_label: 'Logs OpCon (Journaux)'
hide_title: 'false'
---

## Logs OpCon (Journaux)

<figure>
    <audio
        controls
        src="audiobasic/OpConLogs.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

##### Emplacement des Logs

* Si OpCon a été installé sur **le disque système**, les logs seront stockés dans **ProgramData**
```
C:\ProgramData\OpConxps\SAM\Log
```
* Si OpCon a été installé sur un **disque autre que le disque système**, les logs seront stockés dans **le dossier d’installation d’Opcon**
```
[[Drive]]\[[Location selected for Output Files]]
```

##### Raccourci d’accès aux logs dans Enterprise Manager

  * Logs automatiquement mises à jour (Logs actuelles)
  * **Nécessite le partage du dossier OpConxps avec les utilisateurs.**

<a href="imgbasic/Picture53.png" target="_blank"><img src="imgbasic/Picture53.png" width="300"></img></a>  

### Logs OpCon- Support

<figure>
    <audio
        controls
        src="audiobasic/OpConLogsSupport.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Les logs OpCon sont **VITALES** pour l'équipe support lors de la recherche d'un problème
  * Veuillez compresser le dossier Log complet et le télécharger sur le site FTP de SMA en cas de problème Log Collectors
Log Collectors
* Le programme SMA DataCollector peut collecter tous les logs d'application SMA
  * SMASUP collectera toutes les logs LSAM (agent)

<a href="imgbasic/Picture54.png" target="_blank"><img src="imgbasic/Picture54.png" width="500"></img></a>  

### Log Files OpCon

Les fichiers de Log OpCon peuvent aider au dépannage

* Pour les problèmes avec des exécutions de Job, vérifiez :
  * L’onglet Configuration dans la fenêtre Job informations.
  * Le rapport d’exécution du Job
  * **SAM log**
  * **Critical log**

### La Log SAM (SAM log)

<figure>
    <audio
        controls
        src="audiobasic/SAMLog.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

SAM - Schedule Activity Monitor  

* « Cerveau » du moteur d'OpCon

Liste continue de toutes les transactions

* Modifications du statut de Job
* Déclanchement d’Events Opcon 
* Les échecs ou erreurs.
* Informations sur la licence

<a href="imgbasic/Picture55.png" target="_blank"><img src="imgbasic/Picture55.png" width="500"></img></a>  

---

### La Log critique (Critical Log)

<figure>
    <audio
        controls
        src="audiobasic/CriticalLog.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Signale les erreurs du SAM
* Properties qui ne peuvent pas être résolues
  * Si un job se met en Hold lui-même, reportez-vous au Log critique
* Les Events avec une syntaxe incorrecte
* Problèmes de communication avec les machines
* Problèmes de connexion à la base de données

<a href="imgbasic/Picture56.png" target="_blank"><img src="imgbasic/Picture56.png" width="500"></img></a>  

###### (Cliquez sur les images pour les agrandir)
