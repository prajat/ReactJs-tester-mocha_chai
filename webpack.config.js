const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode:'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        }, ),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ],
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
        ],
    },
    // resolve: {
    //     alias: {
    //       "react": "preact-compat",
    //       "react-dom": "preact-compat"
    //     }
    // }

}