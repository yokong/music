const path = require('path')
const resolve = dir => path.resolve(__dirname,dir)
module.exports = {
  webpack:{
    alias:{
      '@':resolve('src'),
      'components:':resolve('src/components')
    }
  },
  modules:{
    rules:[
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options: {
          // 图片小于8kb 会被base64处理
          // 优点： 减少请求数量(减轻服务器压力)
          // 缺点: 图片体积会更大(文件请求速度更慢)
          limit: 8 * 1024,
          // 问题：url-loader 默认使用es6模块化解析,而html-loader引入的是commonjs
          // 解析会出现问题：[object Module]
          // esModule:false // 新版应该修复了，不用再关闭了
          // 给图片重命名
          // [hash:10] 取图片hash的前10位
          // [ext] 取文件原来的扩展名
          name:'[hash:10].[ext]',
          esModule:false
        },
      }
    ]
  }
}