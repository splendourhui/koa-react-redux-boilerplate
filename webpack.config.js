/**
* @Author: SplendourHui
* @Date:   2016-06-12 09:36
* @Last modified by:   SplendourHui
* @Last modified time: 2016-10-11 09:59
*/

const path = require('path');
const webpack = require('webpack');
const merge = require('lodash/object/merge');
const autoprefixer = require('autoprefixer');

const commonConfig = {
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    alias: {
      'history': 'react-router/node_modules/history'
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
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader!postcss-loader'
    }, {
      test: /\.woff$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff&name=/assets/[hash].[ext]"
    }, {
      test: /\.woff2$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff2&name=/assets/[hash].[ext]"
    }, {
      test: /\.ttf$/,
      loader: "file-loader?name=/assets/[hash].[ext]"
    }, {
      test: /\.eot$/,
      loader: "file-loader?name=/assets/[hash].[ext]"
    }, {
      test: /\.svg$/,
      loader: "file-loader?name=/assets/[hash].[ext]"
    }]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
};

const clientConfig = merge({}, commonConfig, {
  entry: {
    admin: './_client_src/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: '[name].bundle.js'
  },
  plugins: [
    ...commonConfig.plugins
  ],
  externals: {
    'jquery': 'window.$',
    'md5': 'window.md5',
    'UE': 'window.UE'
  },
  module: {
    loaders: [...commonConfig.module.loaders]
  }
});

module.exports = clientConfig;
