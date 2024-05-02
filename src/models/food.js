'use strict'

const Food = (sequelize, DataTypes) => {
    sequelize.define('Food', {
        name: {
            type: DataTypes.STRING, //note the CAPS
        },
        category: {
            type: DataTypes.STRING
        }
    })
}
const People = (sequelize, DataTypes) =>
    sequelize.define('People', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
module.exports = Food;
