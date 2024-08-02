# init Projects

```bash
npm init
```

## install Prettier

```bash
npm install --save-dev --save-exact prettier
```

Then, create an empty config file to let editors and other tools know you are using Prettier:

```bash
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

Next, create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example:

```bash
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```

## Create a script in package.json

```json
"scripts": {
    "start": "node index.js",
    "format": "npx prettier . --write",
    "check": "npx prettier . --check"
}
```
