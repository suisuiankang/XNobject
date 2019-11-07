const webpack = require('webpack')
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',

        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  }
  // 跨域配置
  // runtimeCompiler: true,
  // publicPath: '/', // 设置打包文件相对路径
  // devServer: {
  //   // open: process.platform === 'darwin',
  //   // host: 'localhost',
  //   port: 8088,
  //   // open: true, //配置自动启动浏览器
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.43.184:28080/SyStorage-GS/SyStorageSub-GS/rest/', // 对应自己的接口
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }

}
