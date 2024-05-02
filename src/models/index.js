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

const peopleModel = require('./people.js');
const foodModel = require('./food.js');

module.exports = {
    db: sequelize,                      // -->./index.js
    People: peopleModel (
        sequelize, DataTypes
    ),
    Food: foodModel (
        sequelize, DataTypes
    )
};

// const sequelize = new Sequlize('dialect://connection.string'); simpler?
