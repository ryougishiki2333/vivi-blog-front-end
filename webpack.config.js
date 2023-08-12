"use strict";

const path = require("path");

// 相对路径转绝对路径
const resolvePath = (_path) => path.resolve(__dirname, _path);
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: resolvePath("./src/index.tsx"),

  output: {
    path: resolvePath("./dist"),
    clean: true,
    filename: "scripts/[name].js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // 加载图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        // 处理字体资源
        test: /\.(woff2?|ttf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // 只处理 src 下的文件，排除其他如 node_modules 的处理
        include: resolvePath("./src"),
        loader: "babel-loader",
        options: {
          // 开启 babel 缓存
          cacheDirectory: true,
          // 关闭缓存压缩
          cacheCompression: false,
          plugins: [
            isDevelopment && require.resolve("react-refresh/babel"),
          ].filter(Boolean),
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("./public/index.html"),
    }),
    isDevelopment && new ForkTsCheckerWebpackPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),

  resolve: {
    // alias: {
    //   "@": resolvePath("./src"),
    //   router: resolvePath("./src/router"),
    // },
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },

  mode: isDevelopment ? "development" : "production",

  devtool: isDevelopment ? "cheap-module-source-map" : false,

  devServer: {
    static: resolvePath("./dist"),
    host: "localhost",
    port: 8080,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
