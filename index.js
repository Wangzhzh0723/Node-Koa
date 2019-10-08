const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const koaBody = require("koa-body")
const route = require("./router")
const static = require("./static")
const path = require("path")

const app = new Koa()
app.use(
  koaBody({
    // 支持文件格式
    multipart: true,
    formidable: {
      // 上传目录
      uploadDir: path.join(__dirname, "static/uploads"),
      // 保留文件扩展名
      keepExtensions: true
    }
  })
)
app.use(bodyParser())
app.use(static)
app.use(route.routes(), route.allowedMethods())
app.listen(64723)
