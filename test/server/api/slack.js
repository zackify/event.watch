var expect = require('expect.js');
var request = require('supertest');
var app = require('../../../server/app.js');

describe('Slack endpoint', function() {
  describe('#post', function () {
    it("should return error if token doesn't belong to a user", function (done) {
      console.log('blah')
      request(app.listen())
        .post('/api/v1/slack')
        .field('token', 'blah')
        .end(function(err, res){
          if (!('error' in res.body)) done("didn't throw error")
          else done(err)
        })
    });
  });
});
