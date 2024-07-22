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
> Modules only work with the HTTP(s) protocol.
>
> A web-page opened via the file:// protocol cannot use import / export.

## ES6 Imports vs Commonjs Require

### Syntax Differences

There are several difference between ES6 and CommonJS imports which we will explore with following examples:-

```js
// ES6 Import Syntax:
import { module1, module2 } from 'module';
import defaultModule from 'module';
```

``` js
// CommonJS Import Syntax:
const { module1, module2 } = require('module');
const defaultModule = require('module');
```

### Static vs Runtime Import Resolution

#### Static Import Resolution (ES6 Modules)

- Imports are resolved at the time the module is parsed, before code execution.
- The module loader analyzes import statements and resolves them to their corresponding modules.
- Paths in import statements are evaluated statically, allowing for static analysis and optimization. Static analysis refers to the process of analyzing code without executing it, typically during the compilation or parsing phase
- Enables efficient tree shaking and dead code elimination by bundlers.
- Supports static analysis and better performance optimizations.
- Supports dynamic imports where the module path can be determined at runtime. It returns a promise that resolves to
- the module object.

#### Runtime Import Resolution (CommonJS Modules)

- Imports are resolved during runtime, as the code is executing. It means that the modules are loaded and executed in a blocking manner during the runtime of the program.
- The path to the module is determined dynamically based on the value of the require statement at runtime.
- Allows for conditional or computed imports which make require statement to be declared anywhere in the code
- It can make static analysis and optimization more challenging for bundlers.

### Interoperability with Node.js

ES6 import syntax is not directly compatible with Node.js environment. We need to use a transpiler like Babel to convert the ES6 syntax to CommonJS syntax or use a tool like `esm` or `ts-node` for runtime transpilation.

To use ES6 import syntax in a Node.js environment without transpiling, we can also enable the `--experimental-modules` flag (for .mjs file extension).

## Run

```bash
bun run main.mjs
# OR
node --experimental-modules .\main.mjs
```

## Links

[JavaScript Modules W3S](https://www.w3schools.com/js/js_modules.asp)
⁕
[JavaScript modules mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
⁕
[ES6 imports vs CommonJS imports](https://medium.com/@rahul.jindal57/es6-imports-vs-commonjs-imports-8e9b66aa04bd)
