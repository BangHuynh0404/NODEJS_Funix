const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'congbang', {
  dialect: 'mysql',
  host: 'localhost',
});
module.exports = sequelize;
