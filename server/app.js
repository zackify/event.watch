var app = require('koa')();
var json = require('koa-json');

var main = require('./routes/main');
var api = require('./routes/api');

app
.use(json())
.use(api.routes())
.use(main.routes())
.use(main.allowedMethods())

app.listen(process.env.PORT || 3000);

module.exports = app
