const { app } = require('../create-server')
const Router = require('koa-router')
const fs = require('fs-extra')
const path = require('path')

const router = new Router()

router
  .get('/', async ctx => {
    const html = await fs.readFile(path.resolve(__dirname, './template.html'), 'utf-8')
    ctx.body = html
  })
  .get('/get', ctx => {
    ctx.body = 'get'
  })
  .post('/post', async ctx => {
    console.log(ctx.request.body)
    ctx.body = ctx.request.body.value || ''
  })

app
  .use(router.routes())
  .use(router.allowedMethods())