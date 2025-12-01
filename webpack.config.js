// webpack.config.js
import path from "path";

export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  mode: "development",
  devServer: {
    static: "./dist",
    hot: true
  }
};
