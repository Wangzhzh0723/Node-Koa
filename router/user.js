const route = require("koa-router")()
route.get("/", async (ctx, next) => {
  ctx.body = JSON.stringify({
    name: "name",
    age: 18
  })
})
module.exports = route
