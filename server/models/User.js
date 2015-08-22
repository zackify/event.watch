module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z]+$",'i'],
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
    },
    slack_token: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING,
    }
  })
}
