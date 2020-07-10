const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    App: "./src/App.js",
    //vendor: ["react", "react-dom"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].bundle.js",
    //chunkFilename: "[name].bundle.js",
  },
  //devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  optimization: {
    mergeDuplicateChunks: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[/\\]/,
          name: "common",
          chunks: "all",
        },
      },
    },
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "public"),
  //   port: 3000,
  //   publicPath: "http://localhost:3000/dist/",
  //   hotOnly: true,
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),

    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["**/*"] }),
  ],
};
