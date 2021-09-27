const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    num_order: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        min: 41
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: {
      //   isUrl: true
      // }
    },
    imgif: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: {
      //   isUrl: true
      // }
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
    }
  },{timestamps: false});
};