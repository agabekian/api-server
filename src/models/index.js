const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const {Sequelize, DataTypes} = require('sequelize');

// I fixed that  .env path !
//remote string in .env works as well , just use DATABASE_URL as above

// const POSTGRES_URI = 'postgres://localhost' //LOCAL tests

// let sequelize = new Sequelize(DATABASE_URL, {logging:false}); //old?
// const sequelize = new Sequlize('dialect://connection.string');

let sequelize = new Sequelize(DATABASE_URL, {j
    dialect: 'postgres',
    logging: false
});

const peopleModel = require('./people.js');

module.exports = {
    db: sequelize,
    People: peopleModel(sequelize, DataTypes)
};
