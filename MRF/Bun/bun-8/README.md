# Getting started

issue: [#8](https://github.com/ConnecMent/bank/issues/8)

## What is Bun?

Bun is an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called bun.

At its core is the Bun runtime, a fast JavaScript runtime designed as a drop-in replacement for Node.js. It's written in Zig and powered by JavaScriptCore under the hood, dramatically reducing startup times and memory usage.

[bun docs](https://bun.sh/docs)

## Installation

Bun ships as a single executable with no dependencies that can be installed a few different ways.

- Windows (PowerShell/cmd.exe):

    ```bash
    powershell -c "irm bun.sh/install.ps1|iex"
    ```

- macOS/Linux (curl)

    ```bash
    curl -fsSL https://bun.sh/install | bash
    ```

### Checking installation

To check that Bun was installed successfully, open a new terminal window and run `bun --version`

```bash
bun --version
```

[bun Installation](https://bun.sh/docs/installation)

## QuickStart

Run `bun init` to scaffold a new project. It's an interactive tool; for this tutorial,
just press enter to accept the default answer for each prompt.

```bash
bun init
```

Since our entry point is a `*.ts` file, Bun generates a `tsconfig.json` for you.
If you're using plain JavaScript, it will generate a
[`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig) instead.

Run the index file

```bash
bun run index.js
```

### Run a File ( Optional )

Open `index.js` and paste the following code snippet, which implements a simple
HTTP server with [`Bun.serve`](https://bun.sh/docs/api/http).

```js
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
```

Run the file from your shell.

```bash
bun index.js
```

Visit [localhost:3000](http://localhost:3000) to test the server.
You should see a simple page that says "Bun!".

[Bun QuickStart](https://bun.sh/docs/quickstart)

<!-- Mr MRF Dev -->
