const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Chỉ xử lý file JSX
        exclude: /node_modules/, // Bỏ qua thư mục node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    hot: true // Enable hot reloading
  }
};