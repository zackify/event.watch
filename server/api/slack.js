module.exports = function *() {
  this.body = JSON.stringify(this.request.body)
}
