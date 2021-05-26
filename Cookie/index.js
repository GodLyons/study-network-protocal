const { app } = require('../create-server')

app.use(async ctx => {
  if (ctx.request.url === '/') {
    ctx.cookies.set('test-cookie', 'i\'m cookie', {
      path: '/',
      domain: 'localhost',
      expires: new Date('2021-10-01'),
      maxAge: 10 * 60 * 1000,
      httpOnly: false
    })
    ctx.body = '打开控制台查看cookie'
  }
})