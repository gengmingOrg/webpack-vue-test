const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理缓存
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');

module.exports = {
  entry: {
    main: './app/js/main.js'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true, //是否压缩
    port: 9000
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './app/views/index.html'
    }),
    new VueLoaderPlugin()
  ]

};
