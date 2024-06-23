require('dotenv').config()

// load the env var
const my_name = process.env.MY_NAME
console.log("Hello", my_name);