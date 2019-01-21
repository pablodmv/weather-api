module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {

          test:/\.css$/,
          use:['style-loader','css-loader']
      }
    ]
  }
};
