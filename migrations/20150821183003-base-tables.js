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
        slack_hook: {
          type: Sequelize.STRING,
          allowNull: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
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
        UserId: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        event_time:  {
          type: Sequelize.DATE
        },
        slack_channel:  {
          type: Sequelize.STRING,
          allowNull: true
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
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('Users')
    queryInterface.dropTable('Events')
  }
};
