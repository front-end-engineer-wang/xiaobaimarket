module.exports = {
  devServer: {
    port: 80,
    open: true
  },
  pluginOptions: {},


  //配置别名
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'views':'@/views'
      }
    }
  }
};
