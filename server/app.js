var app = require('koa')();
var koaPg = require('koa-pg')
var json = require('koa-json');

var main = require('./routes/main');
var api = require('./routes/api');

app
.use(koaPg('postgres://root@localhost:5432/eventwatch'))
.use(json())
.use(api.routes())
.use(main.routes())
.use(main.allowedMethods())

app.listen(3000);
