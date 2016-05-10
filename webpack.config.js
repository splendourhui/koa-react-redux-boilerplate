/**
 * @Author: SplendourHui
 * @Date:   2016-05-05 20:12
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-10 15:38
 */



const path = require('path');
const webpack = require('webpack');
const merge = require('lodash/object/merge');

const commonConfig = {
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    alias: {
      'history': 'react-router/node_modules/history',
      'moment': 'moment/min/moment.min.js'
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.gif/,
      loader: 'url-loader?limit=10000&mimetype=image/gif'
    }, {
      test: /\.jpg/,
      loader: 'url-loader?limit=10000&mimetype=image/jpg'
    }, {
      test: /\.png/,
      loader: 'url-loader?limit=10000&mimetype=image/png'
    }, {
      test: /[\.jsx|\.js ]$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.woff$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff&name=/js/[hash].[ext]"
    }, {
      test: /\.woff2$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff2&name=/js/[hash].[ext]"
    }, {
      test: /\.ttf$/,
      loader: "file-loader?name=/js/[hash].[ext]"
    }, {
      test: /\.eot$/,
      loader: "file-loader?name=/js/[hash].[ext]"
    }, {
      test: /\.svg$/,
      loader: "file-loader?name=/js/[hash].[ext]"
    }]
  }
};

const clientConfig = merge({}, commonConfig, {
  entry: {
    admin: './_client_src/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/assets/',
    filename: '[name].bundle.js'
  },
  plugins: [
    ...commonConfig.plugins
  ],
  externals: {
    'jquery': 'window.$'
  },
  module: {
    loaders: [...commonConfig.module.loaders]
  }
});

module.exports = clientConfig;
