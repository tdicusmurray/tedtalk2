const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Your output directory
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist', // Your output directory
    historyApiFallback: true,
    hot: true,
    port: 3000, // Port for development server
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Your HTML template
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Adjust presets as needed
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image files
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
