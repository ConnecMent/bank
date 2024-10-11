# NodeJS streams & pipes

issue: [#46](https://github.com/ConnecMent/bank/issues/46)

## Node Streams

Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams:

- Readable
- Writable
- Duplex
- Transform

All streams are instances of EventEmitter class.

### Example Streams

```javascript
const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
```

## Node Pipes

Pipes are used to read data from a readable stream and write it to a writable stream. It is used to read data from one stream and write it to another stream.

### Example Pipes

```javascript
const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream);
```

## Links

- [Node.js Streams](https://nodejs.org/api/stream.html)
- [Node.js Pipes](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options)
- [GFH](https://www.geeksforgeeks.org/node-js-stream-readable-pipe-method/)
- [dev.to](https://dev.to/ruben_alapont/piping-hot-the-power-of-pipe-in-nodejs-streams-1846)
