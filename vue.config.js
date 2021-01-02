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
  }
}
