const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './app/index.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js",
        publicPath: 'http://localhost:8080/dist/'
    },
    devServer: {
        contentBase: __dirname + '/dist',
        publicPath: 'http://localhost:8080/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
}