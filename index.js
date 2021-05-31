const express = require('express');
const app = express(); // le serveur HTTP
app.use(express.json()); // permet à express de récupérer du JSON dans le corps des requêtes
const movies = require('./movies');

app.get('/movies', function (request, response) {
  response.status(200).send(movies);
});

app.get('/movies/:id', function (request, response) {
  const id = parseInt(request.params.id, 10);
  response.status(200).send(movies.find((movie) => movie.id === id));
  // TODO : récupérer de la base de données
});

app.post('/movies', function (request, response) {
  // TODO je récupère les informations du films
  console.log(request.body);
  // TODO je crée un film dans la base de données

  // TODO je répond que ça c'est bien passé
  response.sendStatus(201);
});

app.listen(3000, function () {
  console.log('Listen to port 3000');
});
