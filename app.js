const express = require('express');
const fs = require('fs');

const app = express();
const router = express.Router();
const books = fs.readFileSync('books.json');
const songs = fs.readFileSync('songs.json');

router.route('/books')
  .get((request, response) => {
    response.send(JSON.parse(books));
  });

router.route('/songs')
  .get((request, response) => {
    response.send(JSON.parse(songs));
  });

app.use('/', router);

app.listen(process.env.PORT || 8080);
