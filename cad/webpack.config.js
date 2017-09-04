const path = require("path");

module.exports = {
  entry: "./index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "model.js",
    library: "main",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist")
  },
  watch: true
};
