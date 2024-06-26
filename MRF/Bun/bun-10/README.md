# Getting started

issue: [#10](https://github.com/ConnecMent/bank/issues/10)

## Environment variables

Bun reads your `.env` files automatically and provides idiomatic ways to read and write your environment variables programmatically. Plus, some aspects of Bun's runtime behavior can be configured with Bun-specific environment variables.

### Setting environment variables

Bun reads the following files automatically (listed in order of increasing precedence):

- `.env`
- `.env.production`, `.env.development`, `.env.test` (depending on value of NODE_ENV)
- `.env.local`

```bash
# .env
FOO=hello
BAR=world
```

Variables can also be set via the command line.

```bash
FOO=helloworld bun run dev
```

Or programmatically by assigning a property to `process.env`.

```js
process.env.FOO = "hello";
```  

## Reading environment variables

The current environment variables can be accessed via `process.env`.

```js
process.env.API_TOKEN; // => "secret"
```

Bun also exposes these variables via `Bun.env` and `import.meta.env`, which is a simple alias of process.env.

```js
Bun.env.API_TOKEN; // => "secret"
import.meta.env.API_TOKEN; // => "secret"
```

> To print all currently-set environment variables to
> the command line, run `bun --print process.env`.
> This is useful for debugging.

## link

[Bun: Environment variables](https://bun.sh/docs/runtime/env)

<!-- Mr MRF Dev -->
