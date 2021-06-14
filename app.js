const express = require('express');
const fs = require('fs');
const app = express();
const host = ""
const port = process.env.PORT || 9000;

let books = fs.readFileSync('books.json');
let songs = fs.readFileSync('songs.json');

app.get('/books', function (request, response) {
  response.status(200); 
  response.send(JSON.parse(books));
  });

  app.get('/songs', function (request, response) {
    response.status(200); 
    response.send(JSON.parse(songs));
    });

    app.listen(port, () => {
        console.log(`[RUNNING] Node.js + Express 4 app listening at port ${port}`)
    });