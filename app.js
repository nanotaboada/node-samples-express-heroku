import express from 'express';
import fs from 'fs';

const app = express();
const router = express.Router();
const books = fs.readFileSync('books.json');
const songs = fs.readFileSync('songs.json');

router.route('/books')
  .get((request, response) => {
    response.status(200).json(JSON.parse(books));
  });

router.route('/songs')
  .get((request, response) => {
    response.status(200).json(JSON.parse(songs));
  });

app.use('/', router);

app.listen(process.env.PORT || 3000);
