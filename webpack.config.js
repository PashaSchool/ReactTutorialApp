const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


//Node env
//uglify
module.exports = {
  entry: './app/index.js',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  watch: true,
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })],
  devtool: 'cheap-module-evel-source-map'
}
