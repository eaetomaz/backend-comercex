'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('testoque', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      produto: { type: Sequelize.STRING },
      datahoracadastro: { type: Sequelize.DATE },
      quantidade: { type: Sequelize.DOUBLE },
      precocusto: { type: Sequelize.DOUBLE },
      perclucro: { type: Sequelize.DOUBLE },
      precovenda: { type: Sequelize.DOUBLE },
      quatidadeVendida: { type: Sequelize.DOUBLE }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('testoque');
  }
};
