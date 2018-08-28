const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {VueLoaderPlugin} = require('vue-loader');
const webpack = require('webpack');
module.exports = {
    // 设置垫脚片,设置js入口
    entry: [ './app/js/index.js'],//'babel-polyfill',
// 使用开发服务器, 将服务运行在dist目录中(其实是虚拟于内存中的)     // 为了解决第三方包的路径问题, 我们将'./dist'改为'./'
    devServer: {
        // 设置虚拟目录所在位置
// contentBase: './dist'
        contentBase: path.join(__dirname, "./"),
// 自动压缩输出的文件
        compress: true,
// 测试端口为 9000
        port: 9000,
// 热更新组件
        hot: true
    },
// 解决index.html输出到dist的问题
    plugins: [
        new HtmlWebpackPlugin({
            // title: "主页",
            template: "./app/index.html",
            // inject: 'body',
            // filename: './index.html'
        }),
        // new VueLoaderPlugin(),
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
// 单独 加载使用第三方包
    externals: {
        jquery: 'jQuery',
        vue: 'Vue'
    },
// 设置 js 输出位置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            // 解决加载css资源
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
// 解决加载图片资源
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
// 解决加载 less资源
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
// 3. 通过js 以内联样式 插入到页面中
                }, {
                    loader: 'css-loader'
// 2. 把css 转化到 js
                }, {
                    loader: 'less-loader'
// 1. 把less编译成css
                }]
            },
// 解决es6转为es5
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
// 支持vue的加载
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }]
    }
};
