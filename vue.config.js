module.exports ={
  configureWebpack: {
    resolve: {   //这里写错会报错resolve：解决
      alias: {  // 文件夹别名
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'pages':'@/pages'
      }
    }
  },
  devServer: {
    host: '192.168.2.2', // ip
    port: 8081, // 设置端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    proxy:null  //设置代理
  }
}
