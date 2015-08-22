var User = require('../server/models').User

exports.account = User.create({
  name: 'test',
  email: 'test@test.com',
  timezone: 'America/Los_Angeles',
  password: 'blah',
  slack_token: 'test_token'
});
