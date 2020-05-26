'use strict';

import Boom from 'boom';

import BooksService from '../../services/books/books-service';

function getBook(request, h) {
  const [, books] = BooksService.getAllBooks(request);
  const book = books.find(b => b.slug === request.params.slug);
  if (!book) {
    throw Boom.notFound();
  }

  return book;
}

function getBooksList(request, h) {
  const [count, data] = BooksService.getAllBooks(request);
  return { count, data };
}

export default {
  getBook: getBook,
  getBooksList: getBooksList,
};
