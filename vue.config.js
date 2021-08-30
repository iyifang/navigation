module.exports = {
  lintOnSave: false, // 关闭语法检查
  // 基本路径,相对路径
  publicPath: './',
  // 输出文件目录
  outputDir: process.env.outputDir

}

// if(process.env.VUE_APP_MODE==='development'){
//   //开发环境下的执行操作
// }else if(process.env.VUE_APP_MODE==='test'){
//   //测试环境下的执行操作
// }else{
//   //生产环境下的执行操作
// }
