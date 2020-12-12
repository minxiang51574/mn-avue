/*
 * @Author: mn
 * @Date: 2020-11-23 17:58:27
 * @Description: 
 */
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    publicPath:'/',
    //  关闭生产环境的 source map
    productionSourceMap: false,
    devServer: {
        host: '0.0.0.0',
        port: 8070,
        https: false,
        overlay: {
          warnings: false,
          errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    lintOnSave: false,
    configureWebpack:config =>{
        config.resolve.alias = Object.assign(config.resolve.alias,{
            '@': resolve('src'),
            '@views': '@/views',
            '@assets': '@/assets',
        })
    },
    css: {
        extract: false,
        loaderOptions: { 
          sass: {
            prependData: `
              @import "src/assets/style/element-variables.scss";
            `
          }
        }
    }
}