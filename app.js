const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 9000;
const books = fs.readFileSync('books.json');
const songs = fs.readFileSync('songs.json');

app.get('/books', (request, response) => {
  response.status(200);
  response.send(JSON.parse(books));
});

app.get('/songs', (request, response) => {
  response.status(200);
  response.send(JSON.parse(songs));
});

app.listen(port);
