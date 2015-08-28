var ParseMessage = require('./helpers/parseMessage')
var User = require('../models').User
var Event = require('../models').Event
var schedule = require('./helpers/scheduleEvent')

module.exports = function *() {
  if(!this.request.body.user_name) return this.body = "something went wrong"

  var user = yield User.find({
    where: {
      slack_token: this.request.body.token
    }
  })

  if(!user) return this.body = "You must add your slack token ("+this.request.body.token+") to your <https://event.watch/account|event.watch account> before adding an event!"

  var message = ParseMessage(this.request.body.text, user.timezone)
  if(!message.date) return this.body = "Oops, you passed an invalid date format. Check out <https://event.watch/docs|our docs> if you're confused!"

  var slack_channel = this.request.body.channel_id
  Event.create({
    UserId: user.id,
    event_time: message.date,
    slack_channel: slack_channel,
    description: message.text
  })
  this.body = "Cool! We'll remind you an hour before the event :)"

  schedule({
    text: message.text,
    channel: slack_channel,
    hook: user.slack_hook
  })
}
