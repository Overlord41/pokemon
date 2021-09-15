const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    num_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    imgif: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  },{timestamps: false});
};