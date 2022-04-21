---
sidebar_label: 'Unità 3 Lab A'
hide_title: 'false'
---

## Unità 3 Lab A

##### Obiettivo:

Il Consiglio di amministrazione di Congo Online Retail Inc. necessita di accesso a OpCon in modo da poter controllare lo stato di avanzamento dei processi automatizzati.

La Direzione IT non vuole che il Consiglio di Amministrazione sia in grado di apportare modifiche a OpCon e può solo visualizzare i Jobs creati durante questi Labs.

Creare un **Role** chiamato ```Board Member```.

Creare uno **User Account** chiamato ```Congo Management``` (**Nome utente completo - Full Username**: ```Board of Directors```) e assegnare Ruolo ```Board Member```.

Questo **Role **deve essere in grado di visualizzare:

* Lo Schedule **Congo Inventory Management**
* Lo Schedule **Congo Inventory Reports**
* Lo Schedule **Congo Payroll Payments**
* I Jobs negli Schedules giornalieri
* I Jobs negli Schedule Operations

Esci e rientrare in Enterprise Manager come nuovo account utente per verificare le impostazioni e le restrizioni.

<!--
<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3LabA.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>
-->

<details>

<summary>Click qui per Istruzioni passo passo</summary>

**Istruzioni per il Laboratorio**:  

* Creare un Role chiamato Board Member
* Concedere le autorizzazioni per visualizzare le seguenti Schedules:
    * Congo Inventory Management
    * Congo Inventory Reports
    * Congo Payroll Payments
* Creare uno **User Account** chiamato ```Congo Management```
* Fornire uno username completo **Full Username** come ```Board of Directors```
* Cambiare la **password** a ```opconxps```
* Assegnare al ruolo ```Board Member``` lo User Account ```Congo Management```
* Il Ruolo ```Board Member``` dovrebbe essere in grado di visualizzare i lavori nelle Schedulazioni giornaliere
* Il Ruolo ```Board Member``` dovrebbe essere in grado di visualizzare i lavori nelle Operazioni di Schedulazione
* Logout dall'Enterprise Manager
* Dal menù in alto a sinistra scegliere **Enterprise Manager > Logout**
* Login con il nuovo **User account** e **password**
* Verificare la correttezza dei permessi assegnati
* I Job sono visibili nelle **Viste Operations**
* Non deve risultare possibile cambiaerd i Job
* Effettuare Logout e nuovamente login lasciando vuote **username** e **password**

</details>