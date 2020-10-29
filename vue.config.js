const path = require('path');
const webpack = require('webpack');
console.log('process.env.npm_config_argv',process.env)
const scriptName = JSON.parse(process.env.npm_config_argv).original[1];
module.exports = {
    chainWebpack: config => {
        // 用配置绝对路径
        config.resolve.alias
            .set('@image', path.resolve(__dirname, './src/assets/image'))
            .set('@views', path.resolve(__dirname, './src/views'))
            .set('@cp', path.resolve(__dirname, './src/components/Pages'))
            .set('@c', path.resolve(__dirname, './src/components'))
            .set('@cc', path.resolve(__dirname, './src/components/common'))
            .set('@com', path.resolve(__dirname, './src/assets/common'))
    },
    publicPath:scriptName === 'build' ? '/KIlibrary/dist/':'/'
};

