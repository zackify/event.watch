var Router = require('koa-router');
var controllers = require('./controllers')
var api = require('./api')

var router = new Router()
var apiRouter = new Router({prefix: '/api/v1'})

/* front-end routes */
router.get('/', controllers.home);

/* end front-end routes */


/* api routes */

apiRouter.get('/', api.home)

/* end api routes */

module.exports = {
  main: router,
  api: apiRouter
}
