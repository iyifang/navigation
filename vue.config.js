const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false, // 关闭语法检查
  // 基本路径,相对路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  // 配置绝对路径
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
}