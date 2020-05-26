# Reedsy Frontend Engineer challenge api server

### Overview
Backend api server for q4 project and hosted in https://reedsy-q4-api.herokuapp.com.

The original version can be found in https://github.com/reedsy/challenges/tree/master/front-end/q4/server.

Following features are added to the original version.
* pagination query in books list api
* search query in books list api
* seed comments for book api

### Available Routes
##### - `GET` `/books`
query params
```
skip: number (optional)
take: number (optional)
keyword: string (optional)
```
returns total count and book list
```
{
  "count": "number",
  "data": [Book]
}
```

tests:
```
curl "https://reedsy-q4-api.herokuapp.com/books"
curl "https://reedsy-q4-api.herokuapp.com/books?skip=0&take=3"
curl "https://reedsy-q4-api.herokuapp.com/books?keyword=Great"
curl "https://reedsy-q4-api.herokuapp.com/books?keyword=Great&skip=0&take=4"
```

##### - `GET` `/books/:slug`
returns book details
```
{
  "author": "string",
  "cover": "string",
  "rating": "number",
  "slug": "string",
  "synopsis": "string",
  "title": "string",
  "upvoted": "boolean",
  "upvotes": "number",
  comments: [BookComment]
}
```

BookComment schema
```
{
  "date": "date",
  "author": "string",
  "content": "string",
}
```

tests:
```
curl "https://reedsy-q4-api.herokuapp.com/books/in-search-of-lost-time"
```

### Installation

```
yarn
```

### Start Development Server

```
yarn start
```

The server should be running on port `3000`.
