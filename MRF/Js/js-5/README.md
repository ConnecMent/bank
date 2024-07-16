# JS modules

issue: [#5](https://github.com/ConnecMent/bank/issues/5)

## Modules

JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain a code-base.

Modules are imported from external files with the `import` statement.

Modules also rely on `type="module"` in the `<script>` tag.

### Export

Modules with functions or variables can be stored in any external file.

There are two types of exports: Named Exports and Default Exports.

- Named Exports: You can create named exports two ways. In-line individually, or all at once at the bottom.

  ```js
  // named exports
  const name = "Jesse";
  const age = 40;

  export {name, age};
  // or 
  export const name = "Jesse";
  export const age = 40;
  ```

- Default Exports: You can only have one default export in a file.

  ```js
  // default exports
  const message = () => {
    const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
  };

  export default message;
  ```

### Imports

You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports are constructed using curly braces. Default exports are not.

- import named exports:
  
  ```js
  import { name, age } from "./person.js";
  ```

- import default exports:
  
  ```js
  import message from "./message.js";
  ```

> **Note:**
>
> Modules only work with the HTTP(s) protocol.
>
> A web-page opened via the file:// protocol cannot use import / export.

## Run

```bash
bun run main.js
```

## Links

[JavaScript Modules W3S](https://www.w3schools.com/js/js_modules.asp)
⁕
[JavaScript modules mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
