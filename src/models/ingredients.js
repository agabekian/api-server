'use strict';

const Ingredients = (sequelize, DataTypes) => sequelize
    .define('Ingredients', {
    name: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    recipeId: {
        type: DataTypes.INTEGER,
        // allowNull: false,
    },
});

module.exports = Ingredients;
