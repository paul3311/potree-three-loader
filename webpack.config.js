const path = require('path');
const SizePlugin = require('size-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'potree.js',
    library: 'potree',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'cheap-eval-source-map',
  stats: 'errors-only',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: ['three'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.(vs|fs|glsl|vert|frag)$/, loader: 'raw-loader' },
    ],
  },
  plugins: [new SizePlugin()],
};
