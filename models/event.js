'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init({
    imglink: DataTypes.STRING,
    event_name: DataTypes.STRING,
    message: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};