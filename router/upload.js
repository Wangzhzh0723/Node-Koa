const path = require("path")
const fs = require("fs")
const route = require("koa-router")()

route.post("/", ctx => {
  // 上传的文件
  const files = ctx.request.files
  const body = {}
  // 上传文件地址
  const staticPath = path.join(__dirname, "../static/uploads/")
  Object.keys(files).forEach(key => {
    // 上传的文件
    const file = files[key]
    // 修改文件名称
    const oldPath = staticPath + path.basename(file.path)
    const newPath = staticPath + file.name
    fs.rename(
      oldPath,
      newPath,
      error => error && console.log(error, "文件名修改失败...")
    )
    // 查看文件路径
    body[key] = ctx.origin + "/uploads/" + file.name
  })
  ctx.body = body
})

module.exports = route
