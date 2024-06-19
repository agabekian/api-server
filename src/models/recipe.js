'use strict';

const Recipe = (sequelize, DataTypes) =>
    sequelize.define('Recipe', {
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
    });

module.exports = Recipe;
