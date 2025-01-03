import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default {
  mode: "development",
  entry: {
    SharePlace: "./src/SharePlace.js",
    MyPlace: "./src/MyPlace.js",
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist", "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { useBuiltIns: "usage", corejs: { version: 3 } },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
