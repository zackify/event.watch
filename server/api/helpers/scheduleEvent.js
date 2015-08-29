var schedule = require('node-schedule')
var request = require('superagent')
//'2015-08-28T03:15:00+00:00'
module.exports = function(data){
  schedule.scheduleJob(Date.now(), function(){
    request
    .post(data.hook)
    .send({text: data.text, channel: data.channel})
    .end(function(err,res){
      console.log(res.data)
    })
  })
}
