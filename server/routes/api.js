var router = require('koa-router')({prefix: '/api/v1'});
var api = require('../api')
var koaBody = require('koa-body')()
/* api routes */

router.get('/', api.home)
router.post('/new', koaBody, api.new) //later make this the json web token
router.post('/slack', koaBody, api.slack)

module.exports = router
