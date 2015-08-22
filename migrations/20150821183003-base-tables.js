'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'Users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          validate: {
            is: ["^[a-z]+$",'i'],
          }
        },
        email: {
          type: Sequelize.STRING,
          validate: {
            isEmail: true
          }
        },
        password: {
          type: Sequelize.STRING,
        },
        slack_token: {
          type: Sequelize.STRING,
          allowNull: true
        },
        timezone: {
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      },
      {
        engine: 'MYISAM', // default: 'InnoDB'
        charset: 'latin1' // default: null
      }
    )

    queryInterface.createTable(
      'Events',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        event_time:  {
          type: Sequelize.DATE
        },
        slack_channel:  {
          type: Sequelize.STRING,
          validate: {
            allowNull: true
          }
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        location: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      },
      {
        engine: 'MYISAM', // default: 'InnoDB'
        charset: 'latin1' // default: null
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('Users')
    queryInterface.dropTable('Events')
  }
};
