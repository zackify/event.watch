var app = require('koa')();
var koaPg = require('koa-pg')
var json = require('koa-json');

var main = require('./routes/main');
var api = require('./routes/api');

app
.use(koaPg(process.env.DATABASE_URL))
.use(json())
.use(api.routes())
.use(main.routes())
.use(main.allowedMethods())

app.listen(3000);
