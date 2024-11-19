/*Esercizio
Usando l’array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l’entità post.
All’interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update, Modify e Delete)
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire (esattamente come abbiamo fatto in classe), secondo le convenzioni REST.
Ad esempio:
Se viene chiamata /posts col verbo GET ci aspettiamo la ripsota “Lista dei post”;
Se viene chiamato /posts/1/ col verbo DELETE ci aspettiamo la risposta “Cancellazione del post 1"
e via dicendo…
Registrare il router dentro app.js con il prefisso posts/.
Bonus
Provare a restituire la lista dei post dalla rotta index, in formato json
Provare a restituire un singolo post dalla rotta show, sempre in formato json
Consigli:
partite registrando tutte le rotte direttamente nel file app.js come abbiamo fatto in classe in modo da concentrarsi prima sulla creazione delle rotte per capire bene come funziona l’architettura REST
una volta che tutte le rotte funzionano (assicuratevi di averle tutte testate con Postman) allora passate al refactoring sfruttando il Router di Express come indicato nella consegna.*/