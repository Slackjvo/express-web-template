const path = require('path')

module.exports = {
  entry: {
	  index: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: ["@babel/transform-runtime"]
			}
		},
	  }
	],
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].bundle.js'
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
		contentBase: path.join(__dirname, 'public'),
		publicPath: '/js/'
	}
}
