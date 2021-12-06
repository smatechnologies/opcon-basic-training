---
sidebar_label: 'Unità 1 Esercizio 4'
hide_title: 'false'
---

## Esercizio 4: Dipendenze fra Jobs

##### Obiettivo:

Creare una catena di Dipendenze **REQUIRES** Per i quattro Jobs nello Schedule **MY FIRST SCHEDULE**.

Il flusso delle dipendenze dovrà essere:

**WINDOWS JOB 1** <- **WINDOWS JOB 2** <- **WINDOWS JOB 3** <- **WINDOWS JOB 4**

dove **WINDOWS JOB 4** Richiede **WINDOWS JOB 3**, etc.

<div>
<video width="320" height="240" controls>
  <source src="videobasic/U1E4.mp4" type="video/mp4"></source>
Your browser does not support the video tag.
</video>
</div>

<details>

<summary>Click qui per Istruzioni passo passo</summary>

1. Nella sezione **Administration**, fare Double-Click su **Job Master**.
2. Nell' elenco a discesa **Schedule**, selezionare **My First Schedule**.
3. Nell' elenco a discesa **Job** selezionare **Windows Job 4**.
4. Nelle **Job Properties**, fare click nella scheda **Dependencies**.
5. Nel riquadro **Job Dependency**, fare click sul pulsante **Add**.
6. Nel riquadro **Add Dependency**:
    * Nell' elenco a discesa **Job**, selezionare **Windows Job 3**.
    * Selezionare **Requires** nel **Dependency Type**.
    * fare Click sul pulsante **OK**.
7. Nell' elenco a discesa **Job**, selezionare **Windows Job 3**.
8. Nel riquadro **Job Dependency**, fare click sul pulsante **Add**.
9. In the **Add Dependency** frame:
    * Nell' elenco a discesa **Job**, selezionare **Windows Job 2**.
    * Selezionare **Requires** nel **Dependency Type**.
    * fare Click sul pulsante **OK**.
10. Nell' elenco a discesa **Job**, selezionare **Windows Job 2**.
11. Nel riquadro **Job Dependency**, fare click sul pulsante **Add**.
12. In the **Add Dependency** frame:
    * Nell' elenco a discesa **Job**, selezionare **Windows Job 1**.
    * Selezionare Requires nel **Dependency Type**.
    * fare Click sul pulsante **OK**.
13. Chiudere **Job Master**.

</details>
