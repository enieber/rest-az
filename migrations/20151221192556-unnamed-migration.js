'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      migration.createTable(
          'comprador',
          {
              idComprador: {
                  type: DataTypes.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
              },
              createdAt: {
                  type: DataTypes.DATE
              },
              updatedAt: {
                  type: DataTypes.DATE
              },
              idEmpresa: {
                  type: DataTypes.INTEGER,
                  required: true
              },
              idLeilao: {
                  type: DataTypes.idLeilao,
                  required: true
              }
          },
          {
              engine: 'MYISAM', // default: 'InnoDB'
              charset: 'latin1' // default: null
          }
      )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
