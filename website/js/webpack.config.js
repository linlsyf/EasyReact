// webpack.config.js
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
            , {
                test: /\.css$/, // Only .css files
                loader: 'style-loader!css-loader' // Run both loaders
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '../img/[name].[ext]?[hash]'  //../img是文件存储位置，name是文件名
                }
            }
        ]

    }

};