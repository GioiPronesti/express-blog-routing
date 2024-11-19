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

const express = require("express"); // richiamo express
const app = express(); // definisco l'applicativo dove vive express
const posts = require("./posts");
const port = 3000; // definisco la porta per accedere al server

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("questa è la root");
  res.send("root, questa è la risposta del server");
});

//app.get("/posts/:id", (req, res) => {
// gestione parametro dinamico
//  console.log(req.params.id);
//});

// rotte per operazioni crud

// index
app.get("/posts/", (req, res) => {
  res.send(" risposta del server, elenco i posts");
});

// show
app.get("/posts/:id", (req, res) => {
  res.send(" risposta del server, mostro post");
});

// store
app.post("/posts/", (req, res) => {
  res.send(" risposta del server, creo post");
});

// update
app.put("/posts/:id", (req, res) => {
  res.send(" risposta del server, aggiorno post");
});

// modify
app.patch("/posts/:id", (req, res) => {
  res.send(" risposta del server, modifico post");
});

// destroy
app.delete("/posts/:id", (req, res) => {
  res.send(" risposta del server, elimino post");
});

app.listen(port, () => {
  console.log(`server in ascolto sulla porta ${port}`);
});
