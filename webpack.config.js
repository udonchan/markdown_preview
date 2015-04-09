var webpack = require('webpack');

module.exports = {
    entry: './frontend/entry.js',
    output: {
      filename: './server/public/bundle.js'
  },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.ejs$/, loader: 'ejs' },
            { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
            { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' }
        ]
    }
};
