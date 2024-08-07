# Running TS files without compilation

issue: [#33](https://github.com/ConnecMent/bank/issues/33)

## Node.js with TypeScript

Node.js cannot run TypeScript natively. You cannot call `node example.ts` from the command line directly. But there are three solutions to this problem:

### Compiling TypeScript to JavaScript

If you want to run TypeScript code in Node.js, you need to compile it to JavaScript first. You can do this using the TypeScript compiler `tsc` as shown earlier.

```bash
npx tsc example.ts
node example.js
```

### Running TypeScript Code with ts-node

You can use `ts-node` to run TypeScript code directly in Node.js without the need to compile it first. But it's not typechecking your code. So we recommend to type check your code first with tsc and then run it with ts-node before shipping it.

To use ts-node, you need to install it first:

```bash
npm i -D ts-node
```

Then you can run your TypeScript code like this:

```bash
npx ts-node example.ts
```

### Running TypeScript Code with tsx

You can use `tsx` to run TypeScript code directly in Node.js without the need to compile it first. But it's not typechecking your code. So we recommend to type check your code first with `tsc` and then run it with tsx before shipping it.

To use tsx, you need to install it first:

```bash
npm i -D tsx
```

Then you can run your TypeScript code like this:

```bash
npx tsx example.ts
```

If you want to use `tsx` via `node`, you can register tsx via `--import`:

```bash
node --import=tsx example.ts
```

## Links

[Ts in Node.js](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript#compiling-typescript-to-javascript)
