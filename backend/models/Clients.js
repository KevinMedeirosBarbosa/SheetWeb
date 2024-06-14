const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Clients = sequelize.define(
  "Client",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Opção para incluir timestamps
    timestamps: true,
    // Opção para atualizar updatedAt automaticamente
    updatedAt: "updatedAt",
  }
);

module.exports = Clients;
