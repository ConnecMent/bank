# Understand difference between language (aka spec) and runtimes

issue: [#7](https://github.com/ConnecMent/bank/issues/7)

## Javascript vs NodeJS

### Differences between Node.js and the Browser

Both the browser and Node.js use JavaScript as their programming language. Building apps that run in the
browser is a completely different thing than building a Node.js application. Despite the fact that it's
always JavaScript, there are some key differences that make the experience radically different.

> **What changes is the ecosystem**

In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser.

And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.

[node.js docs](https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser)

## JavaScript Engine

JavaScript is a scripting language and is not directly understood by computer but the
browsers have inbuilt JavaScript engine which help them to understand and interpret JavaScript codes.
These engines help to convert our JavaScript program into computer-understandable language.

> **Briefly**:
> A JavaScript engine is a computer program that executes JavaScript code and converts it
> into computer understandable language.

[GFG: Introduction to Javascript Engines](https://www.geeksforgeeks.org/introduction-to-javascript-engines/)

## V8 JavaScript Engine

### What is V8?

V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++.
It is used in Chrome and in Node.js, among others. It implements [ECMAScript](https://tc39.es/ecma262/)
and [WebAssembly](https://webassembly.github.io/spec/core/), and runs on Windows, macOS, and Linux systems
that use x64, IA-32, or ARM processors. V8 can be embedded into any C++ application.

The cool thing is that the JavaScript engine is independent of the browser in which it's hosted.

The Node.js ecosystem is huge and thanks to V8 which also powers desktop apps, with projects like Electron.

[v8.dev](https://v8.dev/) •
[v8.dev docs](https://v8.dev/docs) •
[node.js docs](https://nodejs.org/en/learn/getting-started/the-v8-javascript-engine)

<!-- Mr MRF Dev -->
