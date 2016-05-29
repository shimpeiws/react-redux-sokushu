import 'babel-polyfill'
import path from 'path'
import webpack from 'webpack'

export default {
  entry: {
    issue: './src/entries/issue.js',
    issueFinished: './finished/src/entries/issue.js',
  },

  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: [path.resolve(__dirname, 'src')], loader: 'babel' },
    ],
  },
};
