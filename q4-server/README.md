# Reedsy Frontend Engineer challenge api server

### Overview
This is a backend api server for q4 project.
The original version can be found in https://github.com/reedsy/challenges/tree/master/front-end/q4/server.

Following features are added to the original version.
* pagination query in books list api
* search query in books list api
* seed comments for book api

### available routes
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

### Installation

```
yarn
```

### Start Development Server

```
yarn start
```

The server should be running on port `3000`.
