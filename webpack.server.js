const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jpg$|\.gif$|\.png$|\.mp4$|\.svg$|\.woff2$|\.woff$|\.ttf$|\.eot$|\.ico$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
          publicPath: '/'
        },
        exclude: /node_modules/,
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css"
  })],

  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".ts", ".tsx"]
  }
};
