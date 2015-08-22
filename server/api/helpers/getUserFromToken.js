var User = require('../../models').User

module.exports = function *(){
  var user = yield User.find({
    where: {
      slack_token: this.request.body.token
    }
  })
  if(user) return user
  return false
}
