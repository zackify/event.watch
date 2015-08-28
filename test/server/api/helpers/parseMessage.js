var expect = require('expect.js')
var parseMessage = require('../../../../server/api/helpers/parseMessage')
var moment = require('moment-timezone')
var timezone = 'America/Los_Angeles'

describe('ParseMessage', function() {
  describe('passing a string', function () {

    it("should return timestamp for next monday", function () {
      var time = parseMessage('next Monday at 12pm we will eat', timezone).date
      var expectedTime = moment().tz(timezone).day(8).startOf('day').hour(12).utc().format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse with pm", function () {
      var time = parseMessage('next Monday at 10pm', timezone).date
      var expectedTime = moment().tz(timezone).day(8).startOf('day').hour(22).utc().format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse with am", function () {
      var time = parseMessage('next Monday at 10am', timezone).date
      var expectedTime = moment().tz(timezone).day(8).startOf('day').hour(10).utc().format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse without am/pm", function () {
      var time = parseMessage('next Monday at 13', timezone).date
      var expectedTime = moment().tz(timezone).day(8).startOf('day').hour(13).utc().format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse without am/pm or 'at' ", function () {
      var time = parseMessage('next Monday 14', timezone).date
      var expectedTime = moment().tz(timezone).day(8).startOf('day').hour(14).utc().format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse with am but no 'at' ", function () {
      var time = parseMessage('next Monday 2am', timezone).date
      var expectedTime = moment().tz(timezone).day(8).startOf('day').hour(2).utc().format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse with pm but no 'at' ", function () {
      var time = parseMessage('next Monday 3pm', timezone).date
      var expectedTime = moment().tz(timezone).day(8).startOf('day').hour(15).utc().format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should return false if no time of day is passed", function () {
      var time = parseMessage('next Monday eat food', timezone).date
      var time2 = parseMessage('next Monday', timezone).date
      expect(time).to.be.equal(false)
      expect(time2).to.be.equal(false)

    });

    it("should work with every day of the week", function () {
      var time = parseMessage('next Monday 1pm', timezone).date
      var time2 = parseMessage('next tuesday 2pm', timezone).date
      var time3 = parseMessage('next wednesday 3pm', timezone).date
      var time4 = parseMessage('next Thursday 4pm', timezone).date
      var time5 = parseMessage('next Friday 5pm', timezone).date
      var time6 = parseMessage('next Saturday at 5am', timezone).date
      var time7 = parseMessage('next sunday at 12', timezone).date

      var expectedTime = moment().tz(timezone).day(8).startOf('day').hour(13).utc().format()
      var expectedTime2 = moment().tz(timezone).day(9).startOf('day').hour(14).utc().format()
      var expectedTime3 = moment().tz(timezone).day(10).startOf('day').hour(15).utc().format()
      var expectedTime4 = moment().tz(timezone).day(11).startOf('day').hour(16).utc().format()
      var expectedTime5 = moment().tz(timezone).day(12).startOf('day').hour(17).utc().format()
      var expectedTime6 = moment().tz(timezone).day(13).startOf('day').hour(5).utc().format()
      var expectedTime7 = moment().tz(timezone).day(14).startOf('day').hour(12).utc().format()

      expect(time).to.be.equal(expectedTime)
      expect(time2).to.be.equal(expectedTime2)
      expect(time3).to.be.equal(expectedTime3)
      expect(time4).to.be.equal(expectedTime4)
      expect(time5).to.be.equal(expectedTime5)
      expect(time6).to.be.equal(expectedTime6)
      expect(time7).to.be.equal(expectedTime7)

    });

    it("should return the description", function () {
      var time = parseMessage('next Monday at 2pm eat food', timezone)
      //var time2 = parseMessage('next Monday at 13 eat food', timezone) make this work

      expect(time.text).to.be.equal('eat food')
      //expect(time2.text).to.be.equal('eat food')

    });

  });
});
