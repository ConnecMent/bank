# husky and lint-staged

issue: [#27](https://github.com/ConnecMent/bank/issues/27)

## Installation and setup lint-staged

To install lint-staged in the recommended way, you need to:

1. Install lint-staged itself:

   ```bash
   npm install --save-dev lint-staged
   ```

2. Set up the `pre-commit` git hook to run lint-staged

    - [Husky](https://github.com/typicode/husky) is a popular choice for configuring git hooks
    - Read more about git hooks [here](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

3. Install some linters, like [ESLint](https://eslint.org/) or [Prettier](https://prettier.io/)

4. Configure *lint-staged* to run linters and other tasks:

    - for example: `{ "*.js": "eslint" }` to run ESLint for all staged JS files
    - See [Configuration](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration) for more info

Don't forget to commit changes to `package.json` and `.husky` to share this setup with your team!

Now change a few files, `git add` or `git add --patch` some of them to your commit, and try to `git commit` them.

See [examples](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#examples) and [configuration](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration) for more information.
