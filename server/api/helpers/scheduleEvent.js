var schedule = require('node-schedule')
var request = require('superagent')

module.exports = function(data){
  schedule.scheduleJob('2015-08-28T03:15:00+00:00', function(){
    console.log('the request is being called')
    request
    .post(data.hook)
    .send({text: data.text, channel: data.channel})
    .end(function(err,res){
      console.log(err,res)
    })
  })
}
