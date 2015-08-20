var getUser = require('./helpers/getUserFromToken')
var parseTime = require('./helpers/parseTime')

module.exports = function *() {
  user = yield getUser.call(this)
  if(!user) return this.body = "You must add your slack token ("+this.request.body.token+") to your <https://event.watch/account|event.watch account> before adding an event!"

  var event_time = parseTime(this.request.body.text)

  this.body = JSON.stringify(this.request.body)
}
