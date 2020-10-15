const Sequelize = require("sequelize")
const mysqlConfig = require("./config")
require("mysql2")

const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, {
  host: mysqlConfig.host,
  dialect: mysqlConfig.dialect,
  port: mysqlConfig.port
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {Sequelize,sequelize}

