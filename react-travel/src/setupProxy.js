const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://api.66mz8.com",
      changeOrigin: true
    })
  );
}