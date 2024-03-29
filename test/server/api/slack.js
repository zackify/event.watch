var request = require('supertest');
var app = require('../../../server/app');
var setup = require('../../setup')

var Event = require('../../../server/models').Event


describe('Slack endpoint', function() {
  describe('#post', function () {

    it("should return error if token doesn't belong to a user", function (done) {
      request(app.listen())
        .post('/api/v1/slack')
        .send({
          token: "blah",
          user_name: "test"
        })
        .end(function(err, res){
          if (!res.text.match(/You must add your slack token/)) done("didn't throw error")
          else done(err)
        })
    });

    it("should return an error if invalid date format", function (done) {
      request(app.listen())
        .post('/api/v1/slack')
        .set('Accept', 'application/json')
        .send({
          token: "test_token",
          text: "next blah",
          user_name: "test"
        })
        .end(function(err, res){
          if (!res.text.match(/invalid date format/)) done("didn't throw error")
          else done(err)
        })
    });

    it("should return an error if no user_name is passed", function (done) {
      request(app.listen())
        .post('/api/v1/slack')
        .set('Accept', 'application/json')
        .send({
          token: "test_token",
          text: "next monday at 2pm lunch"
        })
        .end(function(err, res){
          if (!res.text.match(/something went wrong/)) done("didn't throw error")
          else done(err)
        })
    });

    it("should store the event in the database", function (done) {
      request(app.listen())
        .post('/api/v1/slack')
        .send({
          token: "test_token",
          text: "next Monday at 2pm go to lunch",
          user_name: "test"
        })
        .end(function(err, res){
          if(err) done(err)
          Event.findOne({ where: {description: 'go to lunch'} }).then(function(event) {
            if(event === null) done('error')
            else done()
          })
        })
    });
  });
});
