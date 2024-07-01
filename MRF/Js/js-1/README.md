# NodeJS hello world

issue: [#1](https://github.com/ConnecMent/bank/issues/1)

## NPM Init

Run the `npm init` command in the project directory, or open the terminal window in VSCode and enter npm init.

## Edit package.json File

The `npm init` command creates a `package.json` file, which contains information about the project and its dependencies. Install the necessary packages and add dependency information to the package.json file for management.

## Set Project Entry Point

The project entry point is the file that is executed when the project starts. By default, the entry point is `index.js`. However, you can modify the `main` property in the `package.json` file to change it to a different file.

## Add npm start Script

We can add a script named `start` to the `scripts` section in `package.json` file that will allow us to easily start our server with the `npm start` command.

```json
"scripts": {
  "start": "node index.js"
},
```

This will execute the `index.js` file whenever we run the `npm start` command.

## Links

[Start Node.js](https://medium.com/@feelwjd/start-node-js-8ab735822f5e)
