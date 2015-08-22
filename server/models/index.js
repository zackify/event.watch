var Sequelize = require('sequelize')
var config = require('../../config/config.json')
var env = config[process.env.NODE_ENV || 'development']

var sequelize = new Sequelize(env)
var User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    validate: {
      is: ["^[a-z]+$",'i'],
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
  },
  slack_token: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true
  },
  timezone: {
    type: Sequelize.STRING,
  }
});

var Event = sequelize.define('Event', {
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
    validate: {
      allowNull: true
    }
  }
});
User.hasMany(Event)

module.exports = {
  User: User,
  Event: Event
}
