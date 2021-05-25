const Koa = require('koa')
const cors = require('@koa/cors')

const app = new Koa()
app.use(cors())
app.listen(3000, () => {
  console.log('server is running...')
})

module.exports = {
  app
}
