var Sequelize = require('sequelize')
var config = require('../../config/config.json')
var env = config[process.env.NODE_ENV || 'development']

if(process.env.NODE_ENV == 'production') var sequelize = new Sequelize(process.env.DATABASE_URL)
else var sequelize = new Sequelize(env.url)

var models = [
  'Event',
  'User'
]

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model)
});

//relationships
(function(m) {
  m.User.hasMany(m.Event)
})(module.exports)
