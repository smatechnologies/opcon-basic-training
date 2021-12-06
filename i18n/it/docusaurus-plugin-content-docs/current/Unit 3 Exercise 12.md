---
sidebar_label: 'Unità 3 Esercizio 12'
hide_title: 'false'
---

## Esercizio 12: Eventi Invalidi

##### Obiettivo:

In Blocco note su Windows, crea un nuovo documento.

Digitare quanto segue:

```$PROPERTY:SET,EVENTERROR,0,ocadm,opconxps```

Salva il file con qualsiasi nome sotto ```C:\ProgramData\OpConxps\MSLSAM\MSGIN```

Aprire il ```SAM Log``` e il ```Critical Log``` e controllare i messaggi che indicano che la proprietà **not** esiste.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U3E12.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Aprire il **Notepad** (fare clic sul pulsante **Start di Windows**, digitare **Notepad** e premere **Enter**).
2. Con il Notepad aperto, digitare: ```$PROPERTY:SET,EVENTERROR,0,ocadm,opconxps```
3. **Salvare** il file con (**qualsiasi nome**) nel percorso: ```C:\ProgramData\OpConxps\MSLSAM\MSGIN```
4. Torna a Enterprise Manager e apri il ```SAM log```.
5. Controllare il messagio (Property does not exist).
6. Aprire il ```Critical log```.
7. Controllare il messagio (Property does not exist).
8. Chiudere i log ed il **Notepad**.

</details>