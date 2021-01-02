module.exports ={
  configureWebpack:{
    reserve:{
      alias:{  // 文件夹别名
        'src':'@',
        'asserts':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'pages':'@/pages'
      }
    }
  }
}
