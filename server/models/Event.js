module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Event', {
    event_time:  {
      type: DataTypes.DATE
    },
    slack_channel:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  })
}
