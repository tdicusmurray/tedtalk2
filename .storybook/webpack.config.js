const ReactRefreshWebpackPlugin = require('react-refresh-webpack-plugin');

// .storybook/webpack.config.js
module.exports = {
  //...
  module: {
    plugins: [
      // ... other plugins
      new ReactRefreshWebpackPlugin(),
    ],
    rules: [
      {
        test: /\.(js|jsx|.tsx)$/, // A regexp that catches .js .jsx, .tsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
      // other rules
    ],
  },
  //...
  resolve: {
    extensions: ['.js', '.jsx','tsx'], // Automatically resolve certain extensions
  },
};