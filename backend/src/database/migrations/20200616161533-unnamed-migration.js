'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('controle', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      UserID:{
        type: Sequelize.INTEGER,
        allowNull:true
      },
      Username:{
        type: Sequelize.STRING,
        allowNull: true
      },
      Interface:{
        type: Sequelize.STRING,
        allowNull: true
      },
      IPaddress:{
        type: Sequelize.INTEGER,
        allowNull:true
      },
      MAC:{
        type: Sequelize.STRING,
        allowNull: true
      },
      Vlan:{
        type: Sequelize.STRING,
        allowNull: true
      },
      IPv6:{
        type: Sequelize.STRING,
        allowNull: true
      },
      AccessType:{
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
