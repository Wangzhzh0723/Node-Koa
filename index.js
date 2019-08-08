const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const route = require("./router")
const static = require("./static")

const app = new Koa()

app.use(bodyParser())
app.use(static)
app.use(route.routes(), route.allowedMethods())
app.listen(64723)
