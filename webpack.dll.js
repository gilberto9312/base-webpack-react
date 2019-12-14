/*
    ./webpack.config.js
*/


const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');


const webpack = require('webpack');


/* const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
}); */



module.exports = {
  entry:
   {
    modules:[
      'history',
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    library:'[name]',
  },
  
plugins: [
  new webpack.DllPlugin({
      name:'[name]',
      path: path.join(__dirname, 'dist', '[name]-manifest.json')
  })
  
]
    
}