var router = require('koa-router')();
var controllers = require('../controllers')

/* front-end routes */
router.get('/', controllers.home);

module.exports = router
