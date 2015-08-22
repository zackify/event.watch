var app = require('koa')();
var json = require('koa-json');
var raven = require('koa-raven');

var main = require('./routes/main');
var api = require('./routes/api');
raven(app)

app
.use(json())
.use(api.routes())
.use(main.routes())
.use(main.allowedMethods())

app.listen(process.env.PORT || 3000);

module.exports = app
