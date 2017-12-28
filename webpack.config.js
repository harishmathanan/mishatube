module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: '/dist/js/bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
