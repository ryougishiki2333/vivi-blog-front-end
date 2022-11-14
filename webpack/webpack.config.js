"use strict";

const path = request("path");

// 相对路径转绝对路径
const resolvePath = (_path) => path.resolve(__dirname, _path);

module.exports = {
  entry: resolvePath("../src/index.tsx"),

  output: {
    path: resolvePath("../dist"),
    clean: true,
    filename: "scripts/[name].js",
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
      {
        test: /\.(jpe?g|png|gif|webp|svg)$/,
        type: "asset",
        generator: {
          filename: "assets/img/[hash:10][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|ttf)$/,
        type: "asset/resource",
      },
    ],
  },
};
