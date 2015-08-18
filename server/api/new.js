module.exports = function *(){
  var result = yield this.pg.db.client.query_('SELECT * from users WHERE id=$1', [this.request.body.id])
  var user = result.rows[0]
  if(user) {
    if(user.api_key) {
      this.body = {api_key: user.api_key}
    }
    else this.body = {error: 'Generate an api key'}
  }
  else this.body = {error: "user id doesn't exist"}

}
