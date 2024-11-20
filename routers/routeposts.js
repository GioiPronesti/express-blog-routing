const express = require("express");
const router = express.Router();
const posts = require("../data/posts.js");

/*express router*/
// rotte per operazioni crud

// index
router.get("/", (req, res) => {
  res.send(" risposta del server, elenco i posts");
});

// show
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  res.send(" risposta del server, mostro post");
  res.json(post);
});

// store
router.post("/", (req, res) => {
  res.send(" risposta del server, creo post");
});

// update
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`risposta del server, aggiorno post con id ${id}`);
});

// modify
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`risposta del server, modifico post con id ${id}`);
});

// destroy
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`risposta del server, elimino post con id ${id}`);
});

module.exports = router;
