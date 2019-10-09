const path = require("path")
const fs = require("fs")
const route = require("koa-router")()

route.post("/", ctx => {
  // 上传的文件
  const files = ctx.request.files
  const body = {}
  Object.keys(files).forEach(key => {
    // 上传的文件
    const file = files[key]
    // 查看文件路径
    body[key] = ctx.origin + "/uploads/" + path.basename(file.path)
  })
  ctx.body = body
})

module.exports = route
