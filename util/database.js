const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'node', 'congbang', {
  dialect: 'mysql',
  host: 'localhost',
});
module.exports = sequelize;
