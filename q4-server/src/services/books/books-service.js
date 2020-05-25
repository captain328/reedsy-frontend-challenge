'use strict';

import fs from 'fs';
import path from 'path';

const BOOKS_FILE_PATH = path.resolve(__dirname, '../../../data/books.json');

function _readFile() {
  return fs.readFileSync(BOOKS_FILE_PATH, 'utf8');
}

export default class BooksService {
  static getAllBooks(request) {
    const skip = +(request.query.skip || 0);
    const take = +(request.query.take || -1);

    let booksList = JSON.parse(_readFile());
    const books = booksList.books;
    books.forEach(b => {
      b.cover = `${ request.server.info.uri }/images/${ b.cover }`;
    });
    const count = books.length;
    const data = take === -1 ? books.slice(skip) : books.slice(skip, skip + take);
    return JSON.stringify({ count, data });
  }
}
