const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var config = {
    context: __dirname + "/app",
    entry: "./index.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/public/js/",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new UglifyJSPlugin()
    ]
};
module.exports = config;
