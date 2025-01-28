---
sidebar_label: 'Script Incorporati'
hide_title: 'false'
---

## Script Incorporati

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScripts.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* OpCon ha la capacità di inviare script dal database OpCon a macchine Windows e macchine ```UNIX``` (```LSAM```) per l'esecuzione
* Il database ha un repository centralizzato
* E' provvisto di Version Control

* OpCon utilizza quattro elementi per configurare e utilizzare gli script incorporati:
    * Script Types
    * Script Runners
    * Script Repository
    * Job Master

<a href="imgbasic/416.png" target="_blank"><img src="imgbasic/416.png" width="250"></img></a>

### Script Incorporati - tipo di script

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScriptsTypesAndRunners.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Configura il tipo di script che può essere gestito da OpCon

* Ci sono 5 tipi di script **predefinit**, ma è possibile aggiungerne ulteriori
    * Command Shell (.cmd)
	* Perl (.ps)
	* PowerShell (.ps1)
	* Python (.py)
	* VBScript (.vbs)

<a href="imgbasic/417.png" target="_blank"><img src="imgbasic/417.png" width="500"></img></a>

### Script Incorporati - Script Runners

* Script Runners definisce la Command Line creata per eseguire gli Script

Ad esempio:
    
* Powershell include "-ExecutionPolicy Bypass and -File" prima del comando
* E' possibile avere più di uno Script Runner per una tipologia di Script

<a href="imgbasic/418.png" target="_blank"><img src="imgbasic/418.png" width="500"></img></a>

### Script Incorporati - Script Repository

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScriptsScriptRepository.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* Dove gli script vengono creati e archiviati
* Le versioni precedenti sono accessibili

<a href="imgbasic/419.png" target="_blank"><img src="imgbasic/419.png" width="500"></img></a>

* **Name** – Definisce il Nome dello Script (Gli spazi non sono consentiti)
* **Description** – Documenta lo scopo dello Script
* **Open File** - consente il caricamento di script dalla rete
* **Blank Text Field** – Crea Script 
* **Type** – Specifica il tipo di Script 
* **Initial Comments** – Documenta le differenze tra le versioni dello script

<a href="imgbasic/420.png" target="_blank"><img src="imgbasic/420.png" width="300"></img></a>

### Assegnare un Role ad un nuovo Script

* Quando uno script viene creato o importato nel repository di script è necessario assegnare un ruolo

<a href="imgbasic/421.png" target="_blank"><img src="imgbasic/421.png" width="300"></img></a>

### Script Incorporati - Job Master

<figure>
    <audio
        controls
        src="audiobasic/EmbeddedScriptsJobMaster.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* **Job Action** – Cambio da Run Program a Embedded Scripts
* **Script** – Specifica quale script chiamare
* **Script Type** – Specifica il tipo di per lo script selezionato
* **Runner** – Specifica quale Script Runner utilizzare per lo script selezionato
* **Run Command Template** – Contenuto dello Script Runner
* **Version** – Specifica la versione dello Script selezionato
* **Arguments** – Pametro/i passati allo Script (se necessari)
* **Working Dir.** – Cartella di Lavoro dello Script

<a href="imgbasic/422.png" target="_blank"><img src="imgbasic/422.png" width="500"></img></a>

###### (Click sulla Immagine per ingrandire)