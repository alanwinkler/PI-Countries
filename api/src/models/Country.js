const { DataTypes } = require("sequelize");

const Country = (sequelize) => {
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.INTEGER,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

module.exports = Country;
