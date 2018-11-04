const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        store: './src/store.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'release'),
        libraryTarget: 'amd',
        library: 'reactApp'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader?cacheDirectory'],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/portal-multas/',
                        }
                    }
                ]
            }
        ],
    },
    mode: 'development',
    devtool: 'eval-source-map'
};
