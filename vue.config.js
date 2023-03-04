const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    //   // port: port,
    //   open: true,
    //   overlay: {
    //     warnings: false,
    //     errors: true
    //   },
    // 配置反向代理
    proxy: {
      "/api": {
        // target: "http://ihrm-java.itheima.net",
        target: "http://ihrm.itheima.net",
        changeOrigin: true,  //是否跨域
         // 添加路径前缀
         pathRewrite: {
          "^/api": "",
        }
      }
    }
  },

})
