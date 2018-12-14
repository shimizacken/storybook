const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
            'style-loader',
            {
              loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[local]--[hash:base64:5]',
                    sourceMap: true,
                    minimize: false,
                    camelCase: true
                }
            },
            'sass-loader'
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
};