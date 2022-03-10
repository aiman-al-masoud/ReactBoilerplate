const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  //entry point (main's file)
  entry: path.join(__dirname, "app", "src", "index.tsx"),

  module: {

    rules: [

      //load css 
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      //load multimedia resources as base 64
      {
        test: /\.(png|jpg|gif|wav|mp3)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000000, 
            },
          },
        ]
      },

      //load tsx (typescript JSX) source files
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  //output bundle's location
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
  },

  //auto-generates output html file with link to script
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "app", "src", "index.html"),
    }),
  ],


}