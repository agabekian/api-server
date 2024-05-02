'use strict'

// const Food = (sequelize, DataTypes) => {
//     sequelize.define('Food', {
//         name: {
//             type: DataTypes.STRING //note the CAPS
//         },
//         category: {
//             type: DataTypes.STRING
//         }
//     })
// }
//


const Food = (sequelize, DataTypes) =>
    sequelize.define('Food', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
module.exports = Food;
