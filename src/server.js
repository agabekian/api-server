'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

const peopleRoutes = require('./routes/people.js');
const foodRoutes = require('./routes/food.js');
app.use(cors());
app.use(express.json());
app.use(peopleRoutes); //huh! - don't forget this man!
app.use(foodRoutes); // had a problem here due to a missing export in routes
// Force an error for the tests
app.get('/broken', (req,
                    res,
                    next) => next("whoops!")
);

app.use('*', notFoundHandler);
app.use(errorHandler);

const start = port =>
    app.listen(port, () =>
        console.log(`Server is up on ${port}`)
    );


module.exports = {app, start};  // --> index(16)
