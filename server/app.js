var app = require('koa')();
var koaPg = require('koa-pg')
var routes = require('./routes');

app
.use(routes.api.routes())
.use(routes.main.routes())
.use(routes.main.allowedMethods())
.use(koaPg('postgres://root:root@localhost:5432/eventwatch'))

app.listen(3000);
