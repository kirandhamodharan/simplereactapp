const path = require('path');
const PROJ_DIR = ".."
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlOptions = {
    template:  './src/static/index.html',
    title:     "Kiran's Simple React App1",
    filename:  'index.html',
    favicon:   './src/static/images/favicon.ico'
}

module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname + path.sep + PROJ_DIR, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(htmlOptions)
    ],
};