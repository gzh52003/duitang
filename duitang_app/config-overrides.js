const path = require('path');
const {injectBabelPlugin} = require('customize-cra')
const {override,addDecoratorsLegacy,addWebpackAlias,fixBabelImports,disableEsLint} = require('customize-cra')
module.exports = override(
    addDecoratorsLegacy(),        //配置装饰器
    addWebpackAlias({             //配置路径别名
        '@':path.resolve(__dirname,'src'),
        '#':path.resolve(__dirname,'src/components'),
        '~':path.resolve(__dirname,'src/views'),
    }),
    // ui框架按需加载
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
   
    // disableEsLint()  // 禁用esLint
)