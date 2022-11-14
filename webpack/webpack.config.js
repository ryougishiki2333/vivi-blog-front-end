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
        // 处理图片
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
        // 处理字体资源
        test: /\.(woff2?|ttf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // 只处理 src 下的文件，排除其他如 node_modules 的处理
        include: resolvePath("../src"),
        loader: "babel-loader",
        options: {
          // 开启 babel 缓存
          cacheDirectory: true,
          // 关闭缓存压缩
          cacheCompression: false,
        },
      },
    ],
  },
};
