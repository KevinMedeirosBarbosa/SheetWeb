const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("planilhasWeb", "pcuser", "Flu021202", {
  host: "192.168.1.9",
  dialect: "mysql",
});

module.exports = sequelize;
