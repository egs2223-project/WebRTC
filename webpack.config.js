const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: 'node',
    entry: './src/public/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};