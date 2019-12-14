/*
    ./webpack.config.js
*/


const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  inject: true,
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
  chunks:['modules.js','home']
});

const optimization = {
  splitChunks: {
      cacheGroups: {
          commons: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
      }
  }
}; 

module.exports = {
  entry:
   {
    home:'./client/index.js',
    github:'./client/github.js'

  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          // fallback: 'style-loader',
          use: ["css-loader", "sass-loader"]
        }),
      
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, 
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
//optimization,
plugins: [

  
    new webpack.DllReferencePlugin({
    
    manifest: require('./dist/modules-manifest.json')
  }), 
  new ExtractTextPlugin("css/[name].css"),
  HtmlWebpackPluginConfig,
  new CopyPlugin([
    { from: './serve.js', to: './' }
  ])
  
]
    
}