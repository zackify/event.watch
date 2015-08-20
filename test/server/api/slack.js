var request = require('supertest');
var app = require('../../../server/app');

describe('Slack endpoint', function() {
  describe('#post', function () {
    it("should return error if token doesn't belong to a user", function (done) {
      request(app.listen())
        .post('/api/v1/slack')
        .field('token', 'blah')
        .end(function(err, res){
          if (!res.text.match(/You must add your slack token/)) done("didn't throw error")
          else done(err)
        })
    });
  });
});
