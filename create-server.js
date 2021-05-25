const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(cors())
   .use(bodyParser())
app.listen(3000, () => {
  console.log('server is running...')
})

module.exports = {
  app
}
