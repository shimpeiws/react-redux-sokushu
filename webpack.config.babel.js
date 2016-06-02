import path from 'path'
import webpack from 'webpack'

export const serverPort = 8080
export const serverURI = `http://localhost:${serverPort}`

export default {
  entry: {
    issue: './src/entries/issue.js',
    issueFinished: './finished/src/entries/issue.js',
  },

  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js',
    publicPath: `${serverURI}/assets/build/`,
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, include: [path.resolve(__dirname, 'src')], loader: 'babel' },
    ],
  },
};
