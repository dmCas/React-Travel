const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://api.66mz8.com",
      changeOrigin: true
    })
  );
}