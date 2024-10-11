# API Calls

issue: [#25](https://github.com/ConnecMent/bank/issues/25)

## Axios

Axios is a promise-based HTTP client for the browser and Node.js. It is a popular library for making HTTP requests. It is a promise-based library, which means you can take advantage of JavaScript's async and await for more readable asynchronous code.

### Installation

```bash
npm install axios
```

### Example

```ts
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

## Links

- [Axios](https://axios-http.com/)
- [Axios GitHub](https://github.com/axios/axios)
- [Axios NPM](https://www.npmjs.com/package/axios)
- [Axios Docs](https://axios-http.com/docs/intro)
- [Learn Axios](https://www.youtube.com/watch?v=6LyagkoRWYA)
