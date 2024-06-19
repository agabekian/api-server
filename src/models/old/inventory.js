'use strict'



const Inventory = (sequelize, DataTypes) =>
    sequelize.define('Food', {
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        cat: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        price:{
            type: DataTypes.DECIMAL,
        },
        stock: {
            type:DataTypes.INTEGER
        }
    });
module.exports = Inventory;
