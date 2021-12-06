---
sidebar_label: 'Unità 3 Esercizio 3'
hide_title: 'false'
---

## Esercizio 3: Utenti Batch

##### Obiettivo:

Creare un nuovo ```Batch``` User chiamato ```SMATRAINING\BATCHUSER``` per la macchina ```WINDOWS```. La password dovrebbe essere impostata come ```password```.

Fornire quindi il privilegio **Batch User Privileges** al ruolo ```Training``` per la macchina ```WINDOWS```.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E3.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menù **Sicurezza** fare doppio clic su **Batch Users**.
2. Selezionare **Windows** dal menà a discesa **Select the target OS**.
3. Fare clic sul pulsante **Add** nella barra strumenti Batch Users. (_** Assicurarsi di fare clic sul pulsante Aggiungi. Non sovrascrivere il profilo utente batch attualmente esistente_)
4. Digitare ```SMATRAINING\BATCHUSER``` nel campo di testo **User** sotto l'area **Batch User Details** sulla destra.
5. Digita ```password``` nei campi **Password** e **Confirm Password**.
6. Fare clic sul pulsante Salva nella barra degli strumenti **Accoun**t utente.
7. Notare che ```SMATRAINING\BATCHUSER``` è stata aggiunta alla lista degli utenti **Batch Users** per le macchine **Windows** (a sinistra).
8. Chiudere la scheda **Batch Users**.
9. Nella voce di menù **Security > Privileges** fare doppio clic su **Batch Users Privileges**.
10. Nell'elenco a discesa **Select Role** scegliere il ruolo **Training Role**.
11. Nell'elenco a discesa **Target Operating System** selezionare **Windows**.
12. Notare che ```SMATRAINING\BATCHUSER``` è visualizzato nella lista **Revoked** (a sinistra).
13. Nella lista Revoked list, fare clic su ```SMATRAINING\BATCHUSER``` quindi fare clic sulla freccia verde (che punta a destra) per impostare ```SMATRAINING\BATCHUSER``` nella lista **Granted**.
14.	Chiudere la scheda **Batch User Privileges**.
:::note Nota
l'utente ```Student1``` (che si trova sotto il Training Role) ora può selezionare questo utente per eseguire i lavori durante l'impostazione nella schermata Dettagli Job
:::

</details>