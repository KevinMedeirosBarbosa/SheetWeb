const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("planilhasWeb", "root", "021202", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
