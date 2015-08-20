var expect = require('expect.js')
var parseTime = require('../../../../server/api/helpers/parseTime')
var moment = require('moment-timezone')

moment().tz("America/Los_Angeles").format()

describe('ParseTime', function() {
  describe('passing a string', function () {

    it("should return timestamp for next monday", function () {
      var time = parseTime('next Monday at 12pm we will eat', 'America/Los_Angeles')
      var expectedTime = moment().day(8).startOf('day').hour(12).format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse with pm", function () {
      var time = parseTime('next Monday at 10pm', 'America/Los_Angeles')
      var expectedTime = moment().day(8).startOf('day').hour(22).format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse with am", function () {
      var time = parseTime('next Monday at 10am', 'America/Los_Angeles')
      var expectedTime = moment().day(8).startOf('day').hour(10).format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse without am/pm", function () {
      var time = parseTime('next Monday at 13', 'America/Los_Angeles')
      var expectedTime = moment().day(8).startOf('day').hour(13).format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse without am/pm or 'at' ", function () {
      var time = parseTime('next Monday 14', 'America/Los_Angeles')
      var expectedTime = moment().day(8).startOf('day').hour(14).format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse with am but no 'at' ", function () {
      var time = parseTime('next Monday 2am', 'America/Los_Angeles')
      var expectedTime = moment().day(8).startOf('day').hour(2).format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should correctly parse with pm but no 'at' ", function () {
      var time = parseTime('next Monday 3pm', 'America/Los_Angeles')
      var expectedTime = moment().day(8).startOf('day').hour(15).format()
      expect(time).to.be.equal(expectedTime)
    });

    it("should return false if no time of day is passed", function () {
      var time = parseTime('next Monday eat food', 'America/Los_Angeles')
      var time2 = parseTime('next Monday', 'America/Los_Angeles')
      expect(time).to.be.equal(false)
      expect(time2).to.be.equal(false)

    });

    it("should work with every day of the week", function () {
      var time = parseTime('next Monday 1pm', 'America/Los_Angeles')
      var time2 = parseTime('next tuesday 2pm', 'America/Los_Angeles')
      var time3 = parseTime('next wednesday 3pm', 'America/Los_Angeles')
      var time4 = parseTime('next Thursday 4pm', 'America/Los_Angeles')
      var time5 = parseTime('next Friday 5pm', 'America/Los_Angeles')
      var time6 = parseTime('next Saturday at 5am', 'America/Los_Angeles')
      var time7 = parseTime('next sunday at 12', 'America/Los_Angeles')

      var expectedTime = moment().day(8).startOf('day').hour(13).format()
      var expectedTime2 = moment().day(9).startOf('day').hour(14).format()
      var expectedTime3 = moment().day(10).startOf('day').hour(15).format()
      var expectedTime4 = moment().day(11).startOf('day').hour(16).format()
      var expectedTime5 = moment().day(12).startOf('day').hour(17).format()
      var expectedTime6 = moment().day(13).startOf('day').hour(5).format()
      var expectedTime7 = moment().day(14).startOf('day').hour(12).format()

      expect(time).to.be.equal(expectedTime)
      expect(time2).to.be.equal(expectedTime2)
      expect(time3).to.be.equal(expectedTime3)
      expect(time4).to.be.equal(expectedTime4)
      expect(time5).to.be.equal(expectedTime5)
      expect(time6).to.be.equal(expectedTime6)
      expect(time7).to.be.equal(expectedTime7)

    });

  });
});
