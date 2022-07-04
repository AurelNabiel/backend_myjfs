"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      month_p: {
        type: Sequelize.STRING,
      },
      status_p: {
        type: Sequelize.ENUM("none", "pay", "not yet"),
      },
      image_bill: {
        type: Sequelize.STRING,
      },
      message_bill: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("payments");
  },
};
