---
sidebar_label: 'Self Service Lab'
hide_title: 'false'
---

## Self Service Lab - Interactions entre Schedules et Jobs

##### Schedule Build 

1.	Dans **Enterprise Manager**, Ouvrir la vue Matrix ou Liste et s’assurer que **My First Schedule** soit terminé. 
2.	Cliquez droit sur **My First Schedule** et sélectionnez ```Maintenance > Delete Schedule```.
3.	Sélectionnez **Yes** pour effacer le Schedule.
4.	Dans **Solution Manager**, sélectionnez l’onglet **Self Service**.
5.	S’assurez que le Mode **Administrateur soit activé** en cliquant sur le **cadenas** dans le coin supérieur droit. Il doit être **vert** et **Ouvert**.
6.	En mode Administrateur, cliquez sur le bouton vert **Créer** pour créer un nouveau bouton.
7.	Dans la zone de texte, entrez **Schedule Build**.
8.	Sous **Events**, cliquez sur la barre d’ajout **verte (```+```)**.
9.	Depuis le menu **Event Template**, sélectionnez ```$SCHEDULE:BUILD```.
10.	Dans la zone de texte **Schedule Date**, entrez la variable ```${SCHEDULE DATE}```.
11.	Dans la zone de texte **Schedule Name**, entrez la variable ```${SCHEDULE NAME}```.
12.	Laissez toutes les autres zones de textes vides et cliquer sur le bouton **OK**.
13.	Basculez l’option **Submit Events as ```OCADM``` sur On (```vert```)**.
14.	Depuis la section **Entrées Utilisateur**, sélectionnez **Blue Edit Pencil** à côté de l’option **Schedule Date**.
15.	Depuis **Type de Données Utilisateur**, sélectionnez **Date**.
16.	Laissez le format de sortie sous ```YYYY/MM/DD```.
17.	Cliquez sur le bouton **OK**.
18.	Faites défiler jusqu'en bas de la page et sélectionnez **Enregistrer**. 
19.	Cliquez sur **le cadenas** pour retourner sous mode **Utilisateur**.
20.	Cliquez sur le bouton **Schedule Build** qui vient d’être crée.
21.	Entrez la date du jour au format requis dans la zone **Schedule Date**.
22.	Entrez **My First Schedule** dans la zone de texte **Schedule Name**.
23.	Cliquez sur **Soumettre** pour commencer le build.
24.	Cliquez sur le bouton **OK** pour quitter le processus de demande. 
25.	Verifiez dans la vue des Opérations ou dans la vue Matrix de Enterprise Manager que **My First Schedule** a été créé et se déroule correctement.


##### Redémarrer un Job en attente

1.	Après avoir vérifié que tous les Jobs sont achevés, vérifier que le Job de l’Event 3 a le statut Annulé.
2.	Dans Self Service, activez le mode **Administrateur** en cliquant sur **le cadenas** dans le coin supérieur droit. Il doit être **vert** et **Ouvert**.
3.	Cliquez sur le bouton vert Créer pour créer un nouveau bouton.
4.	Dans la zone de texte **Name**, entrez ```Hold Job```.
5.	Sous **Events**, cliquez sur la barre verte d’ajout (```+```).
6.	Depuis le menu **Event Template**, sélectionnez ```$JOB:RESTARTHLD```.
7.	Dans la zone de texte de Schedule Date, entrez la variable ```${SCHEDULE DATE}```.
8.	Dans la zone de texte de Schedule Name, entrez la variable ```${SCHEDULE NAME}```.
9.	Dans la zone de texte de Job Name, entrez la variable ```${JOB NAME}```.
10.	Cliquez sur le bouton **OK**.
11.	Basculez l’option **Submit Events as ```OCADM``` sur On (Green)**.
12.	Depuis la section **Données Utilisateur**, sélectionner l’outil **Blue Edit Pencil** à côté de l’option **Schedule Date**.
13.	Depuis **Type de données Utilisateur**, sélectionnez **Date**.
14.	Laissez le formation suivant ```YYYY/MM/DD```.
15.	Cliquez sur le bouton **OK**.
16.	Descendre en bas de la page et cliquez sur **Sauvegarder**.
17.	Cliquez sur le bouton **Cadenas** pour revenir en mode Utilisateur.
18.	Cliquez sur le bouton **Redémarrer un Job en attente** qui vient d’être créé.
19.	Entrez la date du jour sous le format requis dans la zone **Schedule Date**.
20.	Entrez **My First Schedule** dans la zone **Schedule Name**.
21.	Entrez **Test Event 3** dans la zone **Job Name**.
22.	Cliquez sur **Soumettre** pour exécuter la demande de processus.
23.	Sélectionnez **OK** pour sortir de la page de demande de processus.
24.	Vérifiez dans la vue Operations ou dans la vue Matrix d’Enterprise Manager Matrix que **Test Event 3** dans **My First Schedule** a bien été mis sur ```On Hold```.


##### Libérer (Release) un Job 

1.	Dans Self Service, activez le Mode **Administrateur** en cliquant sur le bouton Cadenas dans le coin en haut à droite. Il doit devenir **vert** et **déverrouillé**.
2.	Cliquez sur le bouton vert **Créer** pour créer un nouveau bouton.
3.	Dans la zone de texte **Name**, entrez ```Release Job```.
4.	Sous **Events**, cliquez sur la barre verte d'ajout (```+```)
5.	Depuis le menu **Event Template**, sélectionnez ```$JOB:RELEASE```.
6.	Dans la zone **Schedule Date**, entrez la variable ```${SCHEDULE DATE}```.
7.	Dans la zone **Schedule Name**, entrez la variable ```${SCHEDULE NAME}```.
8.	Dans la zone **Job Name**, entrez la variable ```${JOB NAME}```.
9.	Cliquez sur le bouton **OK**.
10.	Basculez l’option **Submit Events as ```OCADM``` sur On (vert)**.
11.	Depuis la section **Données Utilisateur**, sélectionnez l’outil **Blue Edit Pencil** à côté de l’option **Schedule Date**.
12.	Depuis le **Type de Données Utilisateur**, sélectionnez **Date**.
13.	Laissez sous le format ```YYYY/MM/DD```.
14.	Cliquez sur le bouton **OK**.
15.	Descendre en bas de la page et cliquez sur **Sauvegarder**.
16.	Cliquez sur le bouton **Cadenas** pour revenir en **Mode Utilisateur**.
17.	Cliquez sur le bouton **Release Job** qui vient d’être crée.
18.	Entrez la date du jour sous le format requis dans la zone **Schedule Date**.
19.	Entrez **My First Schedule** dans la zone **Schedule Name**.
20.	Entrez **Test Event 3** dans la zone de texte **Job Name**.
21.	Cliquez sur **Soumettre** pour exécuter la requête.
22.	Sélectionnez **OK** pour sortir de la page de demande de processus.
23.	Vérifiez dans la vue Operations ou dans la vue Matrix d’Enterprise Manager que le **Test Event 3** dans **My First Schedule** a bien été ```Relaché``` et exécuté.


##### Suppression de Schedule

1.	Dans Self Service, activez le Mode **Administrateur** en cliquant sur le bouton Cadenas dans le coin en haut à droite. Il doit devenir **vert** et **déverrouillé**.
2.	Cliquez sur le bouton vert **Créer** pour créer un nouveau bouton.
3.	Dans la zone de texte **Name**, entrez ```Suppression Schedule```.
4.	Sous **Events**, cliquez sur la barre verte d'ajout (```+```).
5.	Depuis le menu **Event Template**, sélectionnez ```$SCHEDULE:DELETE```.
6.	Dans la zone **Schedule Date**, entrez la variable ```${SCHEDULE DATE}```.
7.	Dans la zone **Schedule Name**, entrez la variable ```${SCHEDULE NAME}```.
8.	Laissez la zone **Log File Name** vide.
9.	Cliquez sur le bouton **OK**.
10.	Basculez l’option **Submit Events as ```OCADM``` sur On (```vert```)**.
11.	Depuis la section **Données Utilisateur**, sélectionnez l’outil **Blue Edit Pencil** à côté de l’option **Schedule Date**.
12.	Depuis le type de Données Utilisateur, sélectionnez **Date**.
13.	Laissez sous le format ```YYYY/MM/DD```.
14.	Cliquez sur le bouton **OK**.
15.	Descendre en bas de la page et **Sauvegarder**.
16.	Cliquez sur le **cadenas** pour retourner en **Mode Utilisateur**.
17.	Cliquez sur le bouton **Delete Schedule** qui vient d’être crée.
18.	Entrez la date du jour sous le format requis dans la zone **Schedule Date**.
19.	Entrez **My First Schedule** dans la zone **Schedule Name**.
20.	Cliquez **Soumettre** pour démarrer la requête.
21.	Sélectionnez **OK** pour sortir de la page de demande de processus.
22.	Verifiez dans la vue **Operations View** ou dans la vue Matrix d’Enterprise Manager que **My First Schedule** a bien été ```supprimé```.
