const Koa = require('koa');
const Router = require('koa-router');

const Api = require('./Api');

const app = new Koa();
const router = new Router();

router
  .get('/layerAdd', Api.layerAdd)
  .get('/layer/:id/:z/:x/:y', Api.buffGet);

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);