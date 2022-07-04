"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profile.init(
    {
      name: DataTypes.STRING,
      tanggal_lahir: DataTypes.DATE,
      alamat: DataTypes.STRING,
      asal_sekolah: DataTypes.STRING,
      divisi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};
