'use strict'

const path = require('path') // needed that

require('dotenv').config({path: path.resolve(__dirname, '.env')})

const server = require('./src/server.js');

const {db} = require('./src/models');

db.sync()
    .then(() => {
        process.env.NODE_ENV === 'development'
            ? console.log(process.env.TEST_STRING + process.env.DATABASE_URL)
            : console.log(process.env.TEST_STRING);

        server.start(process.env.PORT); //connect

    })
    .catch(console.error);
