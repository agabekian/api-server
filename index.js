'use strict'
const path = require('path') //needed that sadly
require('dotenv').config({path: path.resolve(__dirname, '.env')})

const server = require('./src/server.js');
const {db} = require('./src/models');

db.sync()
    .then(() => {
        console.log(`running in ${process.env.NODE_ENV} at ${process.env.DATABASE_URL}- ${process.env.TEST_STRING}`);
        server.start(process.env.PORT);
    })
    .catch(console.error);
