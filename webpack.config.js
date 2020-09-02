const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const cssLoaders = [
  {
    loader: MiniCssExtractPlugin.loader,
  },
  {
    loader: "css-loader", // translates CSS into CommonJS modules
  },
  {
    loader: "postcss-loader", // Run post css actions
    options: {
      plugins: function () {
        // post css plugins, can be exported to postcss.config.js
        return [require("precss"), require("autoprefixer")];
      },
    },
  },
];

module.exports = {
  entry: {
    site: ["./assets/javascripts/index.js", "./assets/stylesheets/index.sass"],
    highlights: ["./assets/stylesheets/highlights.sass"],
  },
  output: {
    filename: "assets/javascripts/[name].js",
    path: path.resolve(__dirname, "tmp/dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          ...cssLoaders,
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
