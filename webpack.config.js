const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/app.js',
    output:{
        path: path.join(__dirname, 'dist'),
        filename:'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
             template: 'src/index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: false
            },
            // hash: false,
            filename: 'index.html'
        })
    ]
}