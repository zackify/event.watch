var getUser = require('./helpers/getUserFromToken')
var parseTime = require('./helpers/parseTime')

module.exports = function *() {
  var user = yield getUser.call(this)
  if(!user) return this.body = "You must add your slack token ("+this.request.body.token+") to your <https://event.watch/account|event.watch account> before adding an event!"

  var event_time = parseTime(this.request.body.text, user.timezone)
  if(!event_time) return this.body = "Oops, you passed an invalid date format. Check out <https://event.watch/docs|our docs> if you're confused!"

  var channel_id = this.request.body.channel_id

  this.body = "So you want to add an event on " + event_time + ", ey " +  this.request.body.user_name + '?'
}
