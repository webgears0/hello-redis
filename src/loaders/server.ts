import Koa from 'koa';

const app = new Koa();

export async function load() { 
  app.use(async ctx => {
    ctx.body = 'Hello World';
  });

  app.listen(3000);
}
