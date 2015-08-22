var request = require('supertest');
var app = require('../../../server/app');
var setup = require('../../setup.js')

describe('Slack endpoint', function() {
  describe('#post', function () {
    it("should return error if token doesn't belong to a user", function (done) {
      request(app.listen())
        .post('/api/v1/slack')
        .send({"token": "blah"})
        .end(function(err, res){
          if (!res.text.match(/You must add your slack token/)) done("didn't throw error")
          else done(err)
        })
    });
    it("should return an error if invalid date format", function (done) {
      request(app.listen())
        .post('/api/v1/slack')
        .set('Accept', 'application/json')
        .send({"token": "test_token", text: "next blah"})
        .end(function(err, res){
          if (!res.text.match(/invalid date format/)) done("didn't throw error")
          else done(err)
        })
    });
  });
});
