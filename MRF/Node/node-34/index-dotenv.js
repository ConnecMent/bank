require("dotenv").config({ path: [".env.local", ".env"] });

console.log(process.env.MANUAL, process.env.DOTENV, process.env.LOCAL);
