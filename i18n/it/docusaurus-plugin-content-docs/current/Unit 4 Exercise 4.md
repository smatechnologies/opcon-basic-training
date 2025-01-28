---
sidebar_label: 'Unità 4 Esercizio 4'
hide_title: 'false'
---

### Esercizio 4: Embedded Script esistenti

##### Obiettivo:

All'interno dello Schedule **Embedded Scripts Training Schedul**e, creare un Job Windows chiamato **Create Daily Folder** che girerà con la Frequenza Monday-Friday. Il Job deve eseguire una **Job Action** di tipo ```Embedded Script```. Lo script deve essere lo script ```Create_Folder``` usando l'ultima (```LATEST```) versione con il ```Command Shell``` **Runner**.

Accertarsi che la **Global System Property** ```$SCHEDULE DATEYYYYMM``` esista. Crearla nel caso.

Mettere a piano (Build) lo Schedule in stato Released per oggi e verificare che la cartella ```"C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]"``` sia stata creata per oggi.



<div>
<video width="320" height="240" controls>
  <source src="videobasic/U4E4.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nel menù **Scripts** fare doppio clic su **Repository**.
2. Fare doppio clic sullo script ```Create Folder```.
3. Fare doppio clic sull'ultima versione (```last version```) dello script.
4. Verrà visualizzato il contenuto degli script. Questo script controlla se esiste una cartella. Se esiste già, esce senza fare nulla. Se non esiste, creerà la cartella.
5. Fare clic su **Cancel** e poi **Close**.
6. Chiudere la scheda **Script Repository**.
7. Nel menù **Administration** fare doppio clic su **Job Master**.
8. Nell'elenco a discesa Schedule selezionare **Embedded Scripts Training**.
9. Fare clic sul pulsante **Add** nella nella barra degli strumenti di **Job Master**.
10. Nella casella di testo **Name** digitare **Create Daily Folder**.
11. Nell'elenco a discesa **Job Type** selezionare ```Windows```.
12. Nell'elenco a discesa P**rimary Machine** selezionare ```SMATraining```.
13. Nell'elenco a discesa **Job Action** selezionare ```Embedded Script```.
14. Nell'elenco a discesa **User ID** selezionare ```SMATRAINING\SMAUSER```.
15. Nell'elenco a discesa **Script** selezionare ```Create_Folder```.
16. Lasciare la versione ```LATEST```.
17. Nell'elenco a discesa **Runner** selezionare ```Command Shell```.
18. Nella casella di testo **Arguments** digitare:
```
"C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]"
```
19. Fare clic sul pulsante **Save**.
20. Assegnare al Job la Frequenza ```Mon-Fri-N```.
21. Aggiungere la **Documentazione** e chiudere **Job Master**.
22. Al di fuori di OpCon verificare che la cartella non esista:  
```
"C:\IT\Backups\[[$SCHEDULE DATEYYYYMM]]"
```
(dove ```$SCHEDULE DATEYYYYMM``` riferisce al mese in corso dell'anno in corso)

23. Tornare all'**Enterprise Manager** e mettere a piano lo Schedule **Embedded Scripts Training Schedule** in stato **Released** per Oggi.
24. Una volta che il lavoro è stato completato con successo, verificare che la cartella sia stata creata.

</details>