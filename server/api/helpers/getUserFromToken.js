module.exports = function *(){
  var result = yield this.pg.db.client.query_('SELECT * from users WHERE slack_token=$1', [this.request.body.token])
  var user = result.rows[0]
  if(user) return user
  return false
}
