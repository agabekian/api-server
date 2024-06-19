const DATABASE_URL = process.env.NODE_ENV === 'test'
    ? 'sqlite:memory'
    : process.env.DATABASE_URL;
// .env path fixed! working render.com string in .env

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    DATABASE_URL, {
        dialect: 'postgres', // purpose?
        logging: false
    });

const peopleModel = require('./old/people.js');
const foodModel = require('./old/food.js');

const Collection = require('./collection.js');

const recipeSchema = require('./recipe.js');
const ingredientsSchema = require('./ingredients.js');

const recipeModel = recipeSchema(sequelize, DataTypes);
const ingredientsModel = ingredientsSchema(sequelize, DataTypes)
const inventoryModel = recipeSchema(sequelize, DataTypes);


// foreign key is the column name in the child table that references the sourceKey in the parent table
recipeModel.hasMany(ingredientsModel, {foreignKey: 'recipeId', sourceKey: 'id'});
ingredientsModel.belongsTo(recipeModel, {foreignKey: 'recipeId', targetKey: 'id'})

const recipeCollection = new Collection(recipeModel);
const ingredientsCollection = new Collection(ingredientsModel)
const inventoryCollection = new Collection(inventoryModel)

module.exports = {
    db: sequelize,                      // -->./index.js
    Food: foodModel(
        sequelize, DataTypes
    ),
    Recipe: recipeCollection,
    Ingredients: ingredientsCollection,
    Inventory: inventoryCollection,
};

// const sequelize = new Sequlize('dialect://connection.string'); simpler?
