const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devConfig = require('./webpack.dev.config')

const modeArg = process.argv.find(value => value.startsWith('--mode'))

let mode = 'production'

if(['development', 'production'].some(env => modeArg.includes(env))) {
  mode = modeArg && modeArg.slice('--mode='.length)
}

console.log(mode)

const commonConfig = {
  entry: './src/index.js', // string | object | array
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash:5].js',
    publicPath: '',
    library: 'hope-statistics',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
          },
        }, ],
      },
      {
        test: /\.s?css$/,
        use: [
          mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          }, // translates CSS into CommonJS
          'postcss-loader',
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ],
  },

  resolve: {
    // directories where to look for modules
    modules: [
      'node_modules',
    ],
    // extensions that are used
    extensions: ['.js', '.scss', '.json', '.jsx', '.css'],
    alias: {
      'app': path.resolve(__dirname, 'app')
    },
  },

  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    // assetFilter: function(assetFilename) {
    //   // Function predicate that provides asset filenames
    //   return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    // }
  },
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  target: 'web', // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules
  externals: ['react', /^@angular/],
  // Don't follow/bundle these modules, but request them at runtime from the environment
  stats: 'errors-only',
  // lets you precisely control what bundle information gets displayed
  
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'build')]
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      filename: '[name].[hash:5].css',
      chunkFilename: '[id].[hash:5].css'
    })
  ],
}

const config = mode === 'production' ? {...commonConfig} : {...commonConfig, ...devConfig}

module.exports = config