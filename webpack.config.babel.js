'use strict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

// 从工作目录下找路径
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, './'), // 根路径

    entry: [
        'webpack-dev-server/client?http://localhost:3007',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/js/index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          template: './app/index.html',
          inject: 'body',
          filename: './index.html'
        }),
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        }),

    ],
    module: {
        // resolve:{
        //     extensions:['','.js','.json'],
        //     alias: {
        //         // '@': resolve('src'),
        //         // '^': resolve('static'),
        //         'img': resolve('static/img'),
        //         // 'vue$': 'vue/dist/vue.esm.js'
        //     }
        // },
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                    presets:['react','es2015', "stage-0"],
                    plugins: [
                        "transform-decorators-legacy",
                        "transform-async-to-generator"

                    ]
                }
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(svg|woff|ttf|eot)$/i,
                loaders: [
                    'file-loader?name=font/[name].[ext]'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?name=img/[name].[ext]&limit=8192'
            }
        ]
    },

    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    //     'react-router': 'ReactRouter'
    // }
};
