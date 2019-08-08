const route = require("koa-router")()
route.get("/", async (ctx, next) => {
  ctx.body = JSON.stringify({
    name: "role",
    description: "角色描述"
  })
})
module.exports = route
