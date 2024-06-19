'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

const peopleRoutes = require('./routes/old/people.js');
const foodRoutes = require('./routes/old/food.js');

const recipeRoutes = require('./routes/recipe.js');
const ingredientsRoutes = require('./routes/ingredients.js');

app.use(cors());
app.use(express.json());

app.use(peopleRoutes); //huh! - don't forget this man!
app.use(foodRoutes); // had a problem here due to a missing export in routes

app.use(recipeRoutes);
app.use(ingredientsRoutes);


// Force an error for the tests
app.get('/broken', (req,
                    res,
                    next) => next("whoops!")
);

app.use('*', notFoundHandler);
app.use(errorHandler);

const start = port =>
    app.listen(3001, () =>
        console.log(`Server is up on lost ${port}`)
    );


module.exports = {app, start};  // --> index(16)
