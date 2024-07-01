# ECMAScript vs Javascript platforms

issue: [#3](https://github.com/ConnecMent/bank/issues/3)

## Javascript vs NodeJS

JavaScript is a language. node.js is not a language but an "environement/set of software" that runs normal JavaScript.

All browsers have JavaScript engines that run the JavaScript of web pages (Spidermonkey for Firefox, V8 for Chrome).

Node.js is simply the V8 engine bundled with some libraries to do I/O and networking, so that you can use JavaScript outside of the browser (e.g, to create backend services).

### Differences between Node.js and JavaScript

- `Execution Environment`: JavaScript runs in a web browser, while Node.js runs on a server. This means that JavaScript is primarily used for client-side operations, while Node.js is used for server-side tasks.

- `Libraries and Modules`: Node.js includes a vast collection of built-in libraries and modules, which allows it to perform complex server-side operations. In contrast, JavaScript relies on external libraries and APIs for additional functionality.

- `Concurrency Model`: Node.js uses an event-driven, non-blocking I/O model, which makes it ideal for handling multiple concurrent requests and building scalable applications. JavaScript, on the other hand, operates in a single-threaded environment and mainly focuses on user interactions and DOM manipulation.

## Links

[JavaScript VS Node JS](https://stackoverflow.com/questions/38424672/newbie-javascript-vs-node-js)
⁕
[What is the difference between Node.js and JavaScript?](https://reintech.io/blog/difference-between-nodejs-and-javascript)
⁕
[JavaScript technologies overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview)
