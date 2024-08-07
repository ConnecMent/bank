# Env vars and dotenv package

issue: [#34](https://github.com/ConnecMent/bank/issues/34)

## environment variables

The `process` core module of Node.js provides the `env` property which hosts all the environment variables that were set at the moment the process was started.

The below code runs app.js and set `USER_ID` and `USER_KEY`.

```bash
USER_ID=239482 USER_KEY=foobar node app.js
```

That will pass the user USER_ID as 239482 and the USER_KEY as foobar. This is suitable for testing, however for production, you will probably be configuring some bash scripts to export variables.

> [!NOTE]  
> Note: `process` does not require a "require", it's automatically available.

Here is an example that accesses the USER_ID and USER_KEY environment variables, which we set in above code.

```js
process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
```

## ENV file

Now, you can use the `--env-file` flag to specify an environment file when running your Node.js application. Here's an example `.env` file and how to access its variables using `process.env`.

```bash
# .env file
PORT=3000
```

```js
// js file
process.env.PORT; // "3000"
```

```bash
node --env-file=.env app.js
```

Also, you can pass multiple `--env-file` arguments. Subsequent files override pre-existing variables defined in previous files.

```bash
node --env-file=.env --env-file=.development.env app.js
```

> [!NOTE]
> if the same variable is defined in the environment and in the file, the value from the environment takes precedence.

## Use `dotenv`

`Dotenv` is a zero-dependency module that loads environment variables from a `.env` file into `process.env.` Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

instal the dotenv package:

```bash
npm i -D dotenv
```

use:

```js
require('dotenv').config()

// load the env var
const my_name = process.env.MY_NAME
console.log("Hello", my_name);
```

to import `.env.local` file:

```js
require('dotenv').config({ path: '.env.local', ".env" })
```

[npm dotenv package](https://www.npmjs.com/package/dotenv)
