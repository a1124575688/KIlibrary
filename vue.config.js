const path = require('path');
const webpack = require('webpack');

module.exports = {
    chainWebpack: config => {
        // 用cdn方式引入
        config.resolve.alias
            .set('@image', path.resolve(__dirname, './src/assets/image'))
            .set('@views', path.resolve(__dirname, './src/views'))
            .set('@cp', path.resolve(__dirname, './src/components/Pages'))
            .set('@c', path.resolve(__dirname, './src/components'))
            .set('@cc', path.resolve(__dirname, './src/components/common'))
            .set('@com', path.resolve(__dirname, './src/assets/common'))
    }
};
