var app = require('koa')();
var routes = require('./routes');

app
  .use(routes.api.routes())
  .use(routes.main.routes())
  .use(routes.main.allowedMethods());

app.listen(3000);
