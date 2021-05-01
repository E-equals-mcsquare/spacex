const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    mode: 'production',
    devtool: 'source-map',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'js/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: ["css-loader"],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [new TerserJSPlugin({})],
    },
  },
  {
    mode: 'production',
    target: 'node',
    node: {
      __dirname: true,
    },
    entry: path.resolve(__dirname, './server/server.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'server.js',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/i,
          use: ["css-loader"],
        }
      ],
    },
    externals: [nodeExternals()],
  }
];