import { createClient } from 'redis';
import render from './lib/render.js'
import logger from 'koa-logger';
import koaBody from 'koa-body';

import Koa, { Context } from 'koa';
import Router from '@koa/router';

const app = new Koa();
const client = createClient();
const koaRouter = new Router()

// middleware
app.use(logger());
app.use(render);
app.use(koaBody());

koaRouter.get('/', home)
  .post('/', home)

app.use(koaRouter.routes())

/**
 * Home
 */
async function home(ctx: Context) {
  await ctx.render('index');
}

app.listen(3000);
