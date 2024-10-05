require('dotenv').config({
    path: '.env'
})

require('dotenv').config({
    path: '.env.local'
})


console.log(process.env.MANUAL,process.env.DOTENV, process.env.LOCAL);
