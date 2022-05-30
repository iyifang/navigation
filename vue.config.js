const path = require("path")
function resolve (dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9527 // dev port
module.exports = {
  lintOnSave: false, // 关闭语法检查
  // 基本路径,相对路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  // 配置绝对路径
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
}