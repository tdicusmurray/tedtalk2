const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with the entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Replace 'dist' with your desired output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use the appropriate file extension for your project
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // You may need to install babel-loader if not already installed
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Adjust presets as needed
          },
        },
      },
      // Add more loader rules for other file types if necessary
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Add file extensions you want to resolve
  },
  devServer: {
    contentBase: './dist', // Replace 'dist' with your output directory
    port: 3000, // Choose your desired port
  },
};
