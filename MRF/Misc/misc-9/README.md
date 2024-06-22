# Environment variables

issue: [#9](https://github.com/ConnecMent/bank/issues/9)

## What Are Environment Variables?

An environment variable is a variable whose value is set outside the program, typically through functionality built into the operating system or microservice. An environment variable is made up of a name/value pair, and any number may be created and available for reference at a point in time.

**Use cases for environment variables include but are not limited to data such as:**

- Execution mode (e.g., production, development, staging, etc.)
- Domain names
- API URL/URI’s
- Public and private authentication keys (only secure in server applications)
- Group mail addresses, such as those for marketing, support, sales, etc.
- Service account names

During application initialization, these are loaded into `process.env` and accessed by suffixing the name of the environment variable as shown below.

Environment variables in `.env` are formatted as `name=value`, lines starting with `#` are treated as comments, and blank lines are ignored. For example,

```py
# .env file 
# Meteorite dataset from Nasa Open Data Portal
REACT_APP_METEORITE_LANDING_HOMEPAGE="https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh"
REACT_APP_METEORITE_STRIKE_DATASET="https://data.nasa.gov/resource/y77d-th95.json"
```

```js
fetch(process.env.REACT_APP_METEORITE_STRIKE_DATASET)
.then((response) => {
  return response.json();
})
.then((strikesJSON) => {
  this.setState({ meteoriteStrikes: strikesJSON });
  this.setState({ isDataLoaded: true});
});
```

**There's a set of environment variables defined by the OS, for example:**

- `USER` : the current user
- `HOME` : the current user's home path
- `PWD` : the current working directory
- `PATH` : directories to search in order to execute a command

### process.env in a browser environment

The environment variables, including process.env, are accessible to scripts running in the CLI.
process.env, however, is not available in a browser environment.

## links

[Environment Variables in JavaScript: process.env](https://dmitripavlutin.com/environment-variables-javascript/)
⁕
[An Introduction to Environment Variables and How to Use Them](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa)
⁕
[How to read environment variables from Node.js](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)

<!-- Mr MRF Dev -->
