const path = require('path')
const fs = require('fs')
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3000,
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ],
};