var path= require('path');

module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js',
    },
    module: {
        loaders: [
          {
    	      test: /\.jsx?$/,
    	      exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader?optional[]=runtime'
          }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
