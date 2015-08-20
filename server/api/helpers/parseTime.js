var moment = require('moment-timezone')

var nextDates = {
  monday: 8,
  tuesday: 9,
  wednesday: 10,
  thursday: 11,
  friday: 12,
  saturday: 13,
  sunday: 14
}

function returnHour(time, type){
  if(!type) return parseInt(time)

  if(type == 'am') var number = parseInt(time.replace(/am/,''))
  else if(type == 'pm'){
    var number = parseInt(time.replace(/pm/,''))
    if(number != 12) var number = number + 12
  }
  return number
}

function parseNextDate(time){
  var dayOfWeek = nextDates[time[1]]
  if(!time[2]) return false

  if(time[2].match(/am/)) var hour = returnHour(time[2],'am')
  else if(time[2].match(/pm/)) var hour = returnHour(time[2],'pm')
  else if(time[2].match(/[0-9]/)) var hour = returnHour(time[2])
  else if(time[3].match(/am/)) var hour = returnHour(time[3],'am')
  else if(time[3].match(/pm/)) var hour = returnHour(time[3],'pm')
  else if(time[3].match(/[0-9]/)) var hour = returnHour(time[3])
  else return false

  return moment().day(dayOfWeek).startOf('day').hour(hour).format()
}

module.exports = function(text, timezone){
  var afterTime = text.match(/(?:pm|am)\s(.*)/) //the part after the time passed in
  if(afterTime) var time = text.replace(afterTime, '').toLowerCase().split(' ') //the time part of the string
  else var time = text.toLowerCase().split(' ')

  if(time[0] == 'next') return parseNextDate(time)

}
