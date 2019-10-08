const path = require("path")
const fs = require("fs")
const route = require("koa-router")()

route.post("/", ctx => {
  const files = ctx.request.files
  const paths = {}
  const staticPath = path.join(__dirname, "../static/uploads/")
  Object.keys(files).forEach(key => {
    const file = files[key]
    const oldPath = staticPath + path.basename(file.path)
    const newPath = staticPath + file.name
    fs.rename(
      oldPath,
      newPath,
      error => error && console.log(error, "文件名修改失败...")
    )
    paths[key] = ctx.origin + "/uploads/" + file.name
  })
  ctx.body = paths
})

module.exports = route
