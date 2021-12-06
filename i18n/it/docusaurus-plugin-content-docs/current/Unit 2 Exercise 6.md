---
sidebar_label: 'Unità 2 Esercizio 6'
hide_title: 'false'
---

### Esercizio 6: Creazione di un Job UNIX

##### Obiettivo:

Creare un Job ```UNIX``` all'interno dello Schedule **MY FIRST SCHEDULE**. Impostare il nome del Job a **UNIX Job 1**. definire il **Job Type** come ```UNIX``` e la Primary Machine come ```SUSEVM```.

L'utenza **(User ID)** è ```0/0```

La **Start Image** è ```/usr/local/lsam/bin/genericpgm```

I parametri **(Parameters)** sono: ```-t20 -e0```

Impostare sul Job la frequenza esistente di ```Example-Mon-Sun-O```.

Assicurarsi di fornire una documentazione adeguata.


<div>
<video width="320" height="240" controls>
  <source src="videobasic/U2E6.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

**_Scenario: Creerete 1 UNIX Job in OpCon per eseguire lo stesso programma dell'esercizio precedente_**.

1. Nel menù **Administration**, fare doppio clic su **Job Master**.
2. Nell'elenco a discesa **Schedule** scegliere **My First Schedule**.
3. Fare clic sul pulsante **Add** nella barra degli strumenti di **Job Master**.
4. Nel campo di testo **Name** inserire **UNIX Job 1**.
5. Nell'elenco a discesa **Job Type** scegliere ```UNIX```.
6. Nell'elenco a discesa **Primary Machine** scegliere ```SUSEVM``` come macchina su cui eseguire il Job.
7. Nell'elenco a discesa **User** selezionare ```0/0```
8. Nel campo **Start Image** digitare:

```
/usr/local/lsam/bin/genericpgm
```

9.	Nella sezione **Parameters** inserire: 

```
–t20 –e0
```

10. Fare clic sul pulsante **Save** nella barra degli strumenti di **Job Master**.
11. Nella schermata **Job Master** nelle **Job Properties**, Selezionare la scheda **Frequency**.
12. Nel riquadro **Frequency** list frame, Fare clic sul pulsante **Add**.
13. Scegliere l'opzione **Use Existing Frequency**.
    * Nell'elenco a discesa **Frequency** selezionare ```Example-Mon-Sun-O```.
    * Fare clic sul pulsante **Next**.
    * Fare clic sul pulsante **Finish**.
14. Selezionare la scheda **Documentation** e digitare **This is a ```UNIX``` training Job**.
15. Fare clic sul pulsante **Save** nella barra degli strumenti di **Job Master**.
16. Chiudere la schermata **Job Master**.

</details>