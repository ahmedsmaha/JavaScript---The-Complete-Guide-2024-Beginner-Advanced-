import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default {
  mode: "production",
  entry: {
    "share-place": "./src/SharePlace.js",
    "my-place": "./src/MyPlace.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist", "assets", "scripts"),
    publicPath: "dist/assets/scripts/",
  },
  devtool: "source-map",
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
