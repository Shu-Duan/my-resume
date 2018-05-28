const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

// entry 為進入點，output 為進行完 eslint、babel loader 轉譯後的檔案位置
module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$\\.js$/,
        loader: 'eslint-loader',
        include: `${__dirname}/src`,
        exclude: /bundle\.js$/,
      },
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },{
      test: /\.css$/,
      loaders: ['style', 'css']
    },{
		test: /\.(png|woff|woff2|eot|ttf|svg)$/,
		loader: 'url-loader'
	}],
  },
  devServer: {
    inline: true,
    port: 80,
  },
  plugins: [HTMLWebpackPluginConfig],
};